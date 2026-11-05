import { hexToHsl, hslToRgb, rgbToHex } from './convert.js';

function shiftHue(hex, degrees) {
  const hsl = hexToHsl(hex);
  if (!hsl) return hex;
  const h = (hsl.h + degrees + 360) % 360;
  const { r, g, b } = hslToRgb(h, hsl.s, hsl.l);
  return rgbToHex(r, g, b);
}

/** Complementary color (opposite on the color wheel) */
export function complementary(hex) {
  return [hex, shiftHue(hex, 180)];
}

/** Analogous colors (neighbors on the color wheel) */
export function analogous(hex, angle = 30) {
  return [shiftHue(hex, -angle), hex, shiftHue(hex, angle)];
}

/** Triadic colors (evenly spaced by 120°) */
export function triadic(hex) {
  return [hex, shiftHue(hex, 120), shiftHue(hex, 240)];
}

/** Split-complementary */
export function splitComplementary(hex, angle = 30) {
  return [hex, shiftHue(hex, 180 - angle), shiftHue(hex, 180 + angle)];
}

/** Tetradic / square */
export function tetradic(hex) {
  return [hex, shiftHue(hex, 90), shiftHue(hex, 180), shiftHue(hex, 270)];
}
