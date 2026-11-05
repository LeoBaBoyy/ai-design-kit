// Color
export {
  generatePalette,
  generateHarmoniousPalette,
  contrastRatio,
  isAccessible,
} from './color/palette.js';

export {
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  hslToRgb,
  hexToHsl,
} from './color/convert.js';

export {
  complementary,
  analogous,
  triadic,
  splitComplementary,
  tetradic,
} from './color/harmony.js';

// Accessibility
export {
  simulateColorBlind,
  simulateAll,
  COLOR_BLIND_TYPES,
} from './a11y/colorblind.js';

export { fixContrast, auditPairs } from './a11y/fixContrast.js';

// Prompts
export { promptTemplates } from './prompts/templates.js';

// Layout
export { spacing, grid, stack, cluster } from './layout/helpers.js';

// Export helpers
export { downloadCanvas, downloadJSON, downloadText } from './export/download.js';

// Typography
export {
  TYPE_RATIOS,
  generateTypeScale,
  generateNamedTypeScale,
  suggestLineHeight,
} from './typography/scale.js';

// Theme
export {
  generateTheme,
  pickTextColor,
  themeToCSS,
  themeToCSSVariables,
} from './theme/generator.js';

// Design Tokens
export { createDesignTokens, tokensToCSS } from './tokens/create.js';

export { tokensToTailwind, tokensToTailwindConfig } from './tokens/tailwind.js';
