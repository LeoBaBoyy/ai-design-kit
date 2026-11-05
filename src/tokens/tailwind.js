import { createDesignTokens } from './create.js';

function px(n) {
  return typeof n === 'number' ? `${n}px` : n;
}

/**
 * Turn design tokens into a Tailwind `theme.extend` object.
 * Drop the result into tailwind.config.js.
 */
export function tokensToTailwind(tokens) {
  const fontSize = {};
  for (const [name, size] of Object.entries(tokens.typography)) {
    fontSize[name] = px(size);
  }

  const colors = {
    brand: tokens.color.brand,
    ...tokens.color.light,
  };

  return {
    colors,
    fontSize,
    borderRadius: tokens.radius,
    boxShadow: tokens.shadow,
    spacing: Object.fromEntries(
      Object.entries(tokens.spacing).map(([k, v]) => [k, px(v)]),
    ),
  };
}

/** Pretty-printed tailwind.config.js snippet. */
export function tokensToTailwindConfig(brandHex, options = {}) {
  const tokens = createDesignTokens(brandHex, options);
  const extend = tokensToTailwind(tokens);
  return `/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: ${JSON.stringify(extend, null, 2).replace(/^/gm, '    ').trimStart()},
  },
};
`;
}
