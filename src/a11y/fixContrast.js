import { hexToHsl, hslToRgb, rgbToHex } from '../color/convert.js';
import { contrastRatio } from '../color/palette.js';

function withLightness(hex, lightness) {
  const hsl = hexToHsl(hex);
  if (!hsl) return hex;
  const { r, g, b } = hslToRgb(hsl.h, hsl.s, Math.max(0, Math.min(100, lightness)));
  return rgbToHex(r, g, b);
}

/**
 * Nudge a foreground color until it meets a contrast target against a background.
 * Tries both darker and lighter directions and keeps the closest successful step.
 * Returns the original color if it already passes.
 */
export function fixContrast(foreground, background, minRatio = 4.5) {
  if (contrastRatio(foreground, background) >= minRatio) {
    return { color: foreground, ratio: contrastRatio(foreground, background), changed: false };
  }

  const hsl = hexToHsl(foreground);
  if (!hsl) return { color: foreground, ratio: 0, changed: false };

  let best = null;
  for (let delta = 2; delta <= 100; delta += 2) {
    for (const next of [hsl.l - delta, hsl.l + delta]) {
      if (next < 0 || next > 100) continue;
      const candidate = withLightness(foreground, next);
      const ratio = contrastRatio(candidate, background);
      if (ratio >= minRatio && (!best || Math.abs(next - hsl.l) < best.distance)) {
        best = { color: candidate, ratio, changed: true, distance: Math.abs(next - hsl.l) };
      }
    }
    if (best) break;
  }

  if (!best) {
    const black = contrastRatio('#000000', background);
    const white = contrastRatio('#ffffff', background);
    const color = black >= white ? '#000000' : '#ffffff';
    return { color, ratio: Math.max(black, white), changed: true };
  }

  const { distance, ...rest } = best;
  return rest;
}

/** Check a list of { fg, bg, name } pairs and report failures. */
export function auditPairs(pairs, minRatio = 4.5) {
  return pairs.map((pair) => {
    const ratio = contrastRatio(pair.fg, pair.bg);
    const fixed = ratio >= minRatio ? null : fixContrast(pair.fg, pair.bg, minRatio);
    return {
      name: pair.name || `${pair.fg} on ${pair.bg}`,
      fg: pair.fg,
      bg: pair.bg,
      ratio: Math.round(ratio * 100) / 100,
      pass: ratio >= minRatio,
      suggestion: fixed?.color || null,
    };
  });
}
