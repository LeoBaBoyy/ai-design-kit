import { generateTheme, themeToCSSVariables } from '../theme/generator.js';
import { generateNamedTypeScale } from '../typography/scale.js';
import { spacing } from '../layout/helpers.js';

/**
 * Create a complete set of design tokens from a brand color.
 * Ready for CSS variables, Tailwind, or design tools.
 */
export function createDesignTokens(brandHex, options = {}) {
  const {
    baseFontSize = 16,
    typeRatio = 'majorThird',
    radiusBase = 8,
  } = options;

  const theme = generateTheme(brandHex);
  const typography = generateNamedTypeScale(baseFontSize, typeRatio);

  const radius = {
    none: '0',
    sm: `${Math.round(radiusBase * 0.5)}px`,
    md: `${radiusBase}px`,
    lg: `${Math.round(radiusBase * 1.5)}px`,
    xl: `${Math.round(radiusBase * 2)}px`,
    full: '9999px',
  };

  const shadow = {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  };

  return {
    color: {
      brand: theme.brand,
      neutral: theme.neutral,
      light: theme.light,
      dark: theme.dark,
    },
    typography,
    spacing,
    radius,
    shadow,
    css: themeToCSSVariables(theme),
  };
}

/**
 * Export tokens as a flat CSS variables string (colors + type + radius + shadow).
 */
export function tokensToCSS(tokens) {
  const lines = [];

  // Brand scale
  Object.entries(tokens.color.brand).forEach(([k, v]) => {
    lines.push(`  --color-brand-${k}: ${v};`);
  });

  // Semantic light theme
  Object.entries(tokens.color.light).forEach(([k, v]) => {
    lines.push(`  --${k}: ${v};`);
  });

  // Typography
  Object.entries(tokens.typography).forEach(([k, v]) => {
    lines.push(`  --font-size-${k}: ${v}px;`);
  });

  // Radius
  Object.entries(tokens.radius).forEach(([k, v]) => {
    lines.push(`  --radius-${k}: ${v};`);
  });

  // Shadow
  Object.entries(tokens.shadow).forEach(([k, v]) => {
    lines.push(`  --shadow-${k}: ${v};`);
  });

  return `:root {\n${lines.join('\n')}\n}`;
}
