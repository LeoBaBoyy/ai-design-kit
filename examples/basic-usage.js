import { generatePalette, promptTemplates, contrastRatio } from '../src/index.js';

// Generate a palette from a base color
const palette = generatePalette('#7c5cff', 5);
console.log('Palette:', palette);

// Use a prompt template
const prompt = promptTemplates.styleTransfer('watercolor illustration');
console.log('Prompt:', prompt);

// Check contrast
const ratio = contrastRatio('#ffffff', '#7c5cff');
console.log('Contrast ratio:', ratio.toFixed(2));
