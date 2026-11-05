import { hexToHsl, hslToRgb, rgbToHex } from '../color/convert.js';
import { contrastRatio } from '../color/palette.js';

/**
 * Generate a full light + dark theme from a single brand color.
 * Returns CSS-ready objects with semantic tokens.
 */
export function generateTheme(brandHex, options = {}) {
  const {
    neutralSaturation = 8,
    brandName = 'brand',
  } = options;

  const hsl = hexToHsl(brandHex);
  if (!hsl) throw new Error('Invalid brand color');

  const brand = {
    50: shade(hsl, 95),
    100: shade(hsl, 90),
    200: shade(hsl, 80),
    300: shade(hsl, 70),
    400: shade(hsl, 60),
    500: brandHex,
    600: shade(hsl, 40),
    700: shade(hsl, 30),
    800: shade(hsl, 20),
    900: shade(hsl, 12),
    950: shade(hsl, 8),
  };

  const neutral = generateNeutral(neutralSaturation);

  const light = {
    background: neutral[50],
    foreground: neutral[900],
    card: '#ffffff',
    'card-foreground': neutral[900],
    primary: brand[600],
    'primary-foreground': pickTextColor(brand[600]),
    secondary: neutral[100],
    'secondary-foreground': neutral[800],
    muted: neutral[100],
    'muted-foreground': neutral[500],
    accent: brand[100],
    'accent-foreground': brand[800],
    border: neutral[200],
    ring: brand[500],
    destructive: '#dc2626',
    'destructive-foreground': '#ffffff',
  };

  const dark = {
    background: neutral[950],
    foreground: neutral[50],
    card: neutral[900],
    'card-foreground': neutral[50],
    primary: brand[400],
    'primary-foreground': pickTextColor(brand[400]),
    secondary: neutral[800],
    'secondary-foreground': neutral[100],
    muted: neutral[800],
    'muted-foreground': neutral[400],
    accent: brand[900],
    'accent-foreground': brand[100],
    border: neutral[800],
    ring: brand[400],
    destructive: '#ef4444',
    'destructive-foreground': '#ffffff',
  };

  return {
    brand,
    neutral,
    light,
    dark,
  };
}

function shade(hsl, lightness) {
  const { r, g, b } = hslToRgb(hsl.h, hsl.s, lightness);
  return rgbToHex(r, g, b);
}

function generateNeutral(saturation = 8) {
  const result = {};
  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  const lightnesses = [98, 96, 90, 83, 64, 45, 32, 25, 15, 10, 6];

  steps.forEach((step, i) => {
    const { r, g, b } = hslToRgb(220, saturation, lightnesses[i]);
    result[step] = rgbToHex(r, g, b);
  });

  return result;
}

/**
 * Pick black or white text for best contrast on a given background.
 */
export function pickTextColor(bgHex) {
  const whiteContrast = contrastRatio(bgHex, '#ffffff');
  const blackContrast = contrastRatio(bgHex, '#000000');
  return whiteContrast >= blackContrast ? '#ffffff' : '#000000';
}

/**
 * Convert a theme object into CSS custom properties string.
 */
export function themeToCSS(theme, selector = ':root') {
  const lines = Object.entries(theme)
    .map(([key, value]) => `  --${key}: ${value};`)
    .join('\n');
  return `${selector} {\n${lines}\n}`;
}

/**
 * Generate both light and dark CSS in one go.
 */
export function themeToCSSVariables(themeResult) {
  const lightCSS = themeToCSS(themeResult.light, ':root');
  const darkCSS = themeToCSS(themeResult.dark, '[data-theme="dark"]');
  return `${lightCSS}\n\n${darkCSS}`;
}
