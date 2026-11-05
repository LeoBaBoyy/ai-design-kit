import {
  createDesignTokens,
  tokensToCSS,
  generateNamedTypeScale,
  pickTextColor,
  generateTheme,
} from '../src/index.js';

const brand = '#7c5cff';

console.log('=== Design Tokens from brand color ===\n');

const tokens = createDesignTokens(brand, {
  baseFontSize: 16,
  typeRatio: 'majorThird',
  radiusBase: 8,
});

console.log('Brand scale:');
console.log(tokens.color.brand);

console.log('\nTypography scale:');
console.log(tokens.typography);

console.log('\nRadius scale:');
console.log(tokens.radius);

console.log('\nSuggested text color on brand:');
console.log(pickTextColor(brand));

console.log('\n=== CSS Variables Preview (first 20 lines) ===\n');
const css = tokensToCSS(tokens);
console.log(css.split('\n').slice(0, 20).join('\n') + '\n...');
