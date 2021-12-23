import { registerPlugin } from '@capacitor/core';

import type { smartdietPlugin } from './definitions';

const smartdiet = registerPlugin<smartdietPlugin>('smartdiet', {
  web: () => import('./web').then(m => new m.smartdietWeb()),
});

export * from './definitions';
export { smartdiet };
