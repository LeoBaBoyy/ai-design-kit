# AI Design Kit

Lightweight, practical toolkit for AI-assisted design workflows.

This library provides reusable utilities for color manipulation, prompt engineering, layout helpers, and common design operations that creative tools and AI-powered apps often need.

## Features

- **Color utilities** — palette generation, contrast checking, color conversion, harmonious schemes
- **Prompt templates** — ready-to-use prompts for style transfer, variation, refinement, icon sets, and more
- **Layout helpers** — spacing scale, grid, stack, and responsive utilities
- **Export helpers** — simple utilities for downloading canvas content and data
- **TypeScript-friendly** structure (plain JS with JSDoc for now)

## Installation

```bash
npm install ai-design-kit
# or just copy the src folder into your project
```

## Quick Start

```js
import {
  generatePalette,
  generateHarmoniousPalette,
  contrastRatio,
  promptTemplates,
  spacing,
  grid,
} from 'ai-design-kit';

// Generate a palette from a base color
const palette = generatePalette('#7c5cff', 6);
console.log(palette);

// Check accessibility contrast
const ratio = contrastRatio('#ffffff', '#7c5cff');
console.log(`Contrast ratio: ${ratio.toFixed(2)}`);

// Use a prompt template
const prompt = promptTemplates.styleTransfer('watercolor illustration');
console.log(prompt);

// Layout helpers
const styles = {
  ...grid(12, 16),
  padding: spacing.lg,
};
```

## Project Structure

```
src/
├── color/
│   ├── palette.js
│   ├── convert.js
│   └── harmony.js
├── prompts/
│   └── templates.js
├── layout/
│   └── helpers.js
├── export/
│   └── download.js
└── index.js
```

## Status

Actively developed. Open to contributions, ideas, and real-world usage feedback.

## License

MIT
