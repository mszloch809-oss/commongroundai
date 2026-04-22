import { getState, saveState } from './lib/store.js';
import { json } from './lib/utils.js';
import { processVendorReply } from './lib/workflow.js';

function parseBody(contentType, rawText) {
  if (contentType.includes('application/json')) {
    return JSON.parse(rawText || '{}');
  }
  const params = new URLSearchParams(rawText || '');
  return {
    From: params.get('From'),
    Body: params.get('Body')
  };
}

export default async (req) => {
  if (req.method !== 'POST') {
    return json({ ok: false, error: 'Method not allowed' }, 405);
  }

  const rawText = await req.text();
  const payload = parseBody(req.headers.get('content-type') || '', rawText);
  const state = await getState();
  const result = await processVendorReply(state, {
    from: payload.From || payload.from || '',
    text: payload.Body || payload.text || ''
  });

  if (result.ok) {
    await saveState(state);
  }

  const twiml = `<?xml version="1.0" encoding="UTF-8"?><Response><Message>${result.ok ? 'Update received. Thank you.' : 'We could not match this update to an active work order.'}</Message></Response>`;

  return new Response(twiml, {
    status: 200,
    headers: {
      'content-type': 'text/xml; charset=utf-8'
    }
  });
};
