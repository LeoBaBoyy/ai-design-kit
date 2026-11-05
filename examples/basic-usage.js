import {
  generatePalette,
  generateHarmoniousPalette,
  complementary,
  analogous,
  triadic,
  contrastRatio,
  isAccessible,
  promptTemplates,
  spacing,
  grid,
} from '../src/index.js';

console.log('=== Palette Generation ===');
console.log('Simple palette:', generatePalette('#7c5cff', 5));
console.log('Harmonious palette:', generateHarmoniousPalette('#7c5cff', 5));

console.log('\n=== Color Harmony ===');
console.log('Complementary:', complementary('#7c5cff'));
console.log('Analogous:', analogous('#7c5cff'));
console.log('Triadic:', triadic('#7c5cff'));

console.log('\n=== Contrast ===');
const ratio = contrastRatio('#ffffff', '#7c5cff');
console.log(`Contrast ratio: ${ratio.toFixed(2)}`);
console.log('Accessible (AA)?', isAccessible('#ffffff', '#7c5cff'));

console.log('\n=== Prompt Templates ===');
console.log(promptTemplates.styleTransfer('studio ghibli'));
console.log(promptTemplates.colorPalette('calm and focused'));

console.log('\n=== Layout ===');
console.log('Spacing scale:', spacing);
console.log('Grid styles:', grid(12, 16));
