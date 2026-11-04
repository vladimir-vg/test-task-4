import { v5 as uuidv5 } from 'uuid';

export const generateUUID = (seed: string) =>
  uuidv5(seed, '3f1c2b8e-4a1d-4f6b-9c3a-7d2e5f8a9b1c')

export const VLADIMIR_CONTRACTOR_ID = generateUUID('contractor:vlad');