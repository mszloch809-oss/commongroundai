import { resetState } from './lib/store.js';
import { json } from './lib/utils.js';

export default async (req) => {
  if (req.method !== 'POST') {
    return json({ ok: false, error: 'Method not allowed' }, 405);
  }
  const state = await resetState();
  return json({ ok: true, state });
};
