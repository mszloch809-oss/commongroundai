
import { getState, saveState } from './lib/store.js';
import { badRequest, json } from './lib/utils.js';
import { dispatchExistingWorkOrder } from './lib/workflow.js';

export default async (req) => {
  if (req.method !== 'POST') {
    return json({ ok: false, error: 'Method not allowed' }, 405);
  }

  const body = await req.json().catch(() => null);
  if (!body?.workOrderId || !body?.vendorName) {
    return badRequest('workOrderId and vendorName are required.');
  }

  const state = await getState();
  const result = await dispatchExistingWorkOrder(state, body);
  await saveState(state);
  return json({ ok: true, ...result, state });
};
