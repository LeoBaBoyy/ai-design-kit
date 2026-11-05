/**
 * Typography scale generators using common modular ratios.
 * Useful for creating consistent type systems.
 */

export const TYPE_RATIOS = {
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augmentedFourth: 1.414,
  perfectFifth: 1.5,
  goldenRatio: 1.618,
};

/**
 * Generate a modular type scale.
 * @param {number} baseSize - Base font size in px (default 16)
 * @param {number|string} ratio - Ratio number or key from TYPE_RATIOS
 * @param {number} stepsDown - How many steps below base
 * @param {number} stepsUp - How many steps above base
 */
export function generateTypeScale(baseSize = 16, ratio = 'majorThird', stepsDown = 2, stepsUp = 5) {
  const r = typeof ratio === 'string' ? TYPE_RATIOS[ratio] || TYPE_RATIOS.majorThird : ratio;
  const scale = {};

  for (let i = -stepsDown; i <= stepsUp; i++) {
    const size = Math.round(baseSize * Math.pow(r, i) * 100) / 100;
    const key = i === 0 ? 'base' : i > 0 ? `up${i}` : `down${Math.abs(i)}`;
    scale[key] = size;
  }

  return scale;
}

/**
 * Generate a named typography scale commonly used in design systems.
 */
export function generateNamedTypeScale(baseSize = 16, ratio = 'majorThird') {
  const raw = generateTypeScale(baseSize, ratio, 1, 5);
  return {
    xs: raw.down1,
    sm: Math.round(baseSize * 0.875 * 100) / 100,
    base: raw.base,
    lg: raw.up1,
    xl: raw.up2,
    '2xl': raw.up3,
    '3xl': raw.up4,
    '4xl': raw.up5,
  };
}

/**
 * Suggest line-height based on font size (simple heuristic).
 */
export function suggestLineHeight(fontSize) {
  if (fontSize <= 14) return 1.5;
  if (fontSize <= 18) return 1.5;
  if (fontSize <= 24) return 1.4;
  if (fontSize <= 36) return 1.3;
  return 1.2;
}
