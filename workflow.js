
import { getStore } from '@netlify/blobs';
import { makeId, nowIso } from './utils.js';

const store = getStore({ name: 'commonground-app', consistency: 'strong' });
const APP_KEY = 'app-state';

const tenant = (propertyId, unit, name) => ({
  unit,
  propertyId,
  name,
  inbox: [
    {
      id: makeId('msg'),
      from: 'system',
      text: 'Welcome to CommonGround. Maintenance updates will appear here.',
      at: nowIso()
    }
  ]
});

const demoState = () => ({
  properties: [
    { id: 'cottage', name: '33 Cottage St', city: 'Rutland, VT', units: ['101','102','201','202','301','302','303'] },
    { id: 'main', name: '148 Main St', city: 'Worcester, MA', units: ['1A','1B','2A','2B'] },
    { id: 'elm', name: '22 Elm Ave', city: 'Shrewsbury, MA', units: ['1','2','3'] }
  ],
  vendors: [
    { id: 'vendor_1', name: 'Doherty Plumbing', trade: 'plumbing', phone: '+16178940445', preferred: true },
    { id: 'vendor_2', name: 'AirCare HVAC', trade: 'hvac', phone: '+15555550102', preferred: true },
    { id: 'vendor_3', name: 'Voltex Electric', trade: 'electrical', phone: '+15555550103', preferred: true },
    { id: 'vendor_4', name: 'HandyPro Services', trade: 'general', phone: '+15555550104', preferred: true },
    { id: 'vendor_5', name: 'ABC Roofing', trade: 'structural', phone: '+15555550105', preferred: false },
    { id: 'vendor_6', name: 'Appliance Rescue', trade: 'appliance', phone: '+15555550106', preferred: true }
  ],
  tenants: [
    tenant('cottage', '101', 'Alex Morgan'), tenant('cottage', '102', 'Jordan Lee'), tenant('cottage', '201', 'Sam Rivera'), tenant('cottage', '202', 'Casey Kim'), tenant('cottage', '301', 'Riley Patel'), tenant('cottage', '302', 'Vacant'), tenant('cottage', '303', 'Vacant'),
    tenant('main', '1A', 'Marcus Thompson'), tenant('main', '1B', 'Vacant'), tenant('main', '2A', 'Priya Nair'), tenant('main', '2B', 'Devon Walsh'),
    tenant('elm', '1', 'Tatiana Brooks'), tenant('elm', '2', 'Omar Hassan'), tenant('elm', '3', 'Vacant')
  ],
  workOrders: [],
  timeline: []
});

export async function getState() {
  const existing = await store.get(APP_KEY, { type: 'json', consistency: 'strong' });
  if (existing) return existing;
  const seeded = demoState();
  await store.setJSON(APP_KEY, seeded);
  return seeded;
}

export async function saveState(state) {
  await store.setJSON(APP_KEY, state);
  return state;
}

export async function resetState() {
  const seeded = demoState();
  await store.setJSON(APP_KEY, seeded);
  return seeded;
}
