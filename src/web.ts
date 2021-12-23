import { WebPlugin } from '@capacitor/core';

import type { smartdietPlugin } from './definitions';

export class smartdietWeb extends WebPlugin implements smartdietPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
