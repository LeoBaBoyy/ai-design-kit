import {
  simulateAll,
  fixContrast,
  auditPairs,
  tokensToTailwindConfig,
} from '../src/index.js';

console.log('=== Color blindness ===');
console.log(simulateAll('#7c5cff'));
console.log(simulateAll('#e11d48'));

console.log('\n=== Contrast fixer ===');
console.log(fixContrast('#a78bfa', '#ffffff', 4.5));

console.log('\n=== Pair audit ===');
console.log(
  auditPairs([
    { name: 'brand on white', fg: '#7c5cff', bg: '#ffffff' },
    { name: 'white on brand', fg: '#ffffff', bg: '#7c5cff' },
    { name: 'gray on gray', fg: '#9ca3af', bg: '#d1d5db' },
  ]),
);

console.log('\n=== Tailwind snippet (first lines) ===');
console.log(tokensToTailwindConfig('#7c5cff').split('\n').slice(0, 18).join('\n'));
