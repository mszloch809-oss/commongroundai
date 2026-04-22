import { getState } from './lib/store.js';
import { json } from './lib/utils.js';

export default async () => {
  const state = await getState();
  return json({ ok: true, state });
};
