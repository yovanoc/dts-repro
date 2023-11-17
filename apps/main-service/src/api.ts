import type { InternalType } from './internal-types.js';
import type { StaticType } from '@dts-repro/external-types/dist/static-types';

export type Api = {
  internal: InternalType;
  static: StaticType;
};
