import { hexToRgb, rgbToHex, hexToHsl, hslToRgb } from './convert.js';

/**
 * Generate a simple lightness-based palette from a base color
 */
export function generatePalette(baseHex, count = 5) {
  const hsl = hexToHsl(baseHex);
  if (!hsl) return [];

  const palette = [];
  for (let i = 0; i < count; i++) {
    const t = count === 1 ? 0.5 : i / (count - 1);
    // Lightness from 20% → 85%
    const l = 20 + t * 65;
    const { r, g, b } = hslToRgb(hsl.h, hsl.s, l);
    palette.push(rgbToHex(r, g, b));
  }
  return palette;
}

/**
 * Generate a more varied palette using hue + lightness shifts
 */
export function generateHarmoniousPalette(baseHex, count = 5) {
  const hsl = hexToHsl(baseHex);
  if (!hsl) return [];

  const palette = [];
  for (let i = 0; i < count; i++) {
    const t = count === 1 ? 0.5 : i / (count - 1);
    const h = (hsl.h + (t - 0.5) * 40 + 360) % 360;
    const s = Math.max(20, Math.min(90, hsl.s + (t - 0.5) * 20));
    const l = 25 + t * 55;
    const { r, g, b } = hslToRgb(h, s, l);
    palette.push(rgbToHex(r, g, b));
  }
  return palette;
}

function relativeLuminance({ r, g, b }) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * WCAG contrast ratio between two hex colors
 */
export function contrastRatio(hex1, hex2) {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  if (!rgb1 || !rgb2) return 0;

  const l1 = relativeLuminance(rgb1);
  const l2 = relativeLuminance(rgb2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check if contrast meets WCAG AA (normal text)
 */
export function isAccessible(hex1, hex2, level = 'AA') {
  const ratio = contrastRatio(hex1, hex2);
  if (level === 'AAA') return ratio >= 7;
  return ratio >= 4.5;
}
