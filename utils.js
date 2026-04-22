import { lower } from './utils.js';

function fallbackCategory(text) {
  const t = lower(text);
  if (/(sink|faucet|toilet|pipe|drain|leak|water)/.test(t)) return 'plumbing';
  if (/(heat|boiler|radiator|ac|air|hvac|cool)/.test(t)) return 'hvac';
  if (/(light|outlet|breaker|electric|power|fan)/.test(t)) return 'electrical';
  if (/(washer|dryer|fridge|oven|stove|dishwasher|appliance)/.test(t)) return 'appliance';
  if (/(roof|window|door|ceiling|wall|floor|stair|structural)/.test(t)) return 'structural';
  return 'general';
}

function fallbackPriority(text) {
  const t = lower(text);
  if (/(flood|sparking|no heat|no water|gas|smoke|urgent|emergency)/.test(t)) return 'high';
  if (/(leak|broken|not working|won't|wont|stopped)/.test(t)) return 'medium';
  return 'low';
}

function fallbackTitle(text) {
  const cleaned = text.trim().replace(/\s+/g, ' ');
  return cleaned.length <= 60 ? cleaned : `${cleaned.slice(0, 57)}...`;
}

async function callAnthropic(system, prompt) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return null;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 400,
      system,
      messages: [{ role: 'user', content: prompt }]
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Anthropic error: ${response.status} ${text}`);
  }

  const data = await response.json();
  return data?.content?.map((item) => item.text || '').join('\n') || null;
}

export async function classifyTenantIssue(text) {
  const fallback = {
    title: fallbackTitle(text),
    category: fallbackCategory(text),
    priority: fallbackPriority(text),
    description: text.trim()
  };

  try {
    const result = await callAnthropic(
      'You classify rental maintenance requests. Return JSON only with keys: title, category, priority, description. Categories: plumbing, electrical, hvac, appliance, structural, general. Priorities: low, medium, high.',
      `Issue: ${text}`
    );

    if (!result) return fallback;
    const parsed = JSON.parse(result.match(/\{[\s\S]*\}/)?.[0] || '{}');
    return {
      title: parsed.title || fallback.title,
      category: parsed.category || fallback.category,
      priority: parsed.priority || fallback.priority,
      description: parsed.description || fallback.description
    };
  } catch {
    return fallback;
  }
}

export async function interpretVendorReply(text) {
  const body = lower(text);
  if (/(done|complete|completed|fixed|finished|resolved)/.test(body)) {
    return { action: 'completed', summary: text.trim() };
  }
  if (/(yes|accept|accepted|on my way|available|can do)/.test(body)) {
    return { action: 'accepted', summary: text.trim() };
  }
  if (/(eta|tomorrow|today|hour|morning|afternoon|pm|am|coming)/.test(body)) {
    return { action: 'update', summary: text.trim() };
  }
  if (/(no|decline|cannot|can't|cant|unavailable|later)/.test(body)) {
    return { action: 'declined', summary: text.trim() };
  }

  try {
    const result = await callAnthropic(
      'You interpret vendor SMS replies for maintenance jobs. Return JSON only with keys action and summary. Allowed action values: accepted, update, completed, declined.',
      text
    );

    if (!result) return { action: 'update', summary: text.trim() };
    const parsed = JSON.parse(result.match(/\{[\s\S]*\}/)?.[0] || '{}');
    return {
      action: parsed.action || 'update',
      summary: parsed.summary || text.trim()
    };
  } catch {
    return { action: 'update', summary: text.trim() };
  }
}
