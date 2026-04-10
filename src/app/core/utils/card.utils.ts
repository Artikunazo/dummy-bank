import { CVV_ROTATION_SECONDS } from '../constants';

export function splitHash(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = Math.imul(31, hash) + seed.charCodeAt(i) | 0;
  }
  return hash;
}

export function generateCardNumber(seed: string): string {
  // Simple determistic card generator based on seed
  const h = splitHash(seed);
  const part1 = 4000;
  const part2 = Math.abs(h % 10000).toString().padStart(4, '0');
  const part3 = Math.abs((h * 13) % 10000).toString().padStart(4, '0');
  const part4 = Math.abs((h * 17) % 10000).toString().padStart(4, '0');
  return `${part1}${part2}${part3}${part4}`;
}

export function generateDynamicCvv(seed: string): string {
  // dynamic based on time chunks
  const timeChunk = Math.floor(Date.now() / 1000 / CVV_ROTATION_SECONDS);
  const h = splitHash(seed + timeChunk.toString());
  return Math.abs(h % 1000).toString().padStart(3, '0');
}

export function cvvSecondsRemaining(): number {
  return CVV_ROTATION_SECONDS - (Math.floor(Date.now() / 1000) % CVV_ROTATION_SECONDS);
}

export function formatCardNumber(num: string): string {
  return num.replace(/(.{4})/g, '$1 ').trim();
}
