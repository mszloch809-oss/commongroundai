
import { json, badRequest } from './lib/utils.js';

export default async (req) => {
  if (req.method !== 'POST') {
    return json({ ok: false, error: 'Method not allowed' }, 405);
  }

  const body = await req.json().catch(() => null);
  if (!body?.system || !Array.isArray(body?.messages)) {
    return badRequest('system and messages are required.');
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return json({ ok: false, error: 'ANTHROPIC_API_KEY is not configured.' }, 500);
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: body.system,
      messages: body.messages
    })
  });

  const text = await response.text();
  let data;
  try { data = JSON.parse(text); } catch { data = null; }

  if (!response.ok) {
    return json({ ok: false, error: data?.error?.message || `Anthropic error ${response.status}` }, response.status);
  }

  const joined = data?.content?.map((item) => item.text || '').join('
') || '';
  return json({ ok: true, text: joined });
};
