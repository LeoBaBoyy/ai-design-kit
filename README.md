# AI Design Kit

Practical toolkit for AI-assisted design workflows and design-system foundations.

Generate color palettes, accessible themes, typography scales, and ready-to-use design tokens from a single brand color.

## Features

### Color
- Palette generation (simple + harmonious)
- Color harmony (complementary, analogous, triadic, split-complementary, tetradic)
- Full conversion utilities (`hex ↔ rgb ↔ hsl`)
- WCAG contrast ratio + accessibility checks
- Smart text color picker for any background

### Theme & Tokens
- **One-color theme generator** → full light + dark semantic themes
- Design token creator (colors, typography, radius, shadows)
- Export to CSS custom properties (copy-paste ready)

### Typography
- Modular type scale generator (Major Third, Perfect Fourth, Golden Ratio, etc.)
- Named scales (`xs` → `4xl`)
- Line-height suggestions

### Layout & Export
- Spacing scale, grid, stack, cluster helpers
- Download helpers for canvas, JSON, and text

### Prompts
- High-quality prompt templates for style transfer, variation, refinement, icon sets, layout critique, and more

## Quick Start

```js
import {
  createDesignTokens,
  tokensToCSS,
  generateTheme,
  pickTextColor,
  generateNamedTypeScale,
  promptTemplates,
} from 'ai-design-kit';

// Generate a complete design system from one brand color
const tokens = createDesignTokens('#7c5cff');

console.log(tokens.color.brand);     // 50 → 950 scale
console.log(tokens.typography);      // xs → 4xl
console.log(tokens.radius);          // sm → full
console.log(tokens.shadow);          // sm → xl

// Get CSS variables
const css = tokensToCSS(tokens);
// → :root { --color-brand-500: #7c5cff; --primary: ... }

// Pick accessible text color
const textColor = pickTextColor('#7c5cff'); // '#ffffff' or '#000000'

// Typography scale
const type = generateNamedTypeScale(16, 'majorThird');

// Prompt helpers
const prompt = promptTemplates.styleTransfer('watercolor');
```

## Live Demos

- `examples/full-playground.html` — Interactive theme + type + CSS generator
- `examples/color-playground.html` — Color harmony playground
- `examples/theme-demo.js` — Node example

## Project Structure

```
src/
├── color/          # Palette, conversion, harmony, contrast
├── theme/          # Light/dark theme generator
├── tokens/         # Design token creation + CSS export
├── typography/     # Modular type scales
├── prompts/        # Creative & design prompt templates
├── layout/         # Spacing, grid, stack helpers
├── export/         # Download utilities
└── index.js
```

## Why this exists

When building creative tools or AI-powered design apps, you repeatedly need the same foundations: a solid color system, accessible text colors, consistent type scale, and exportable tokens. AI Design Kit gives you those building blocks in plain JavaScript with zero dependencies.

## License

MIT
