# AI Design Kit

Lightweight toolkit for AI-assisted design workflows — components, prompts, and utilities for creative apps.

## Purpose

A small collection of reusable utilities and patterns for building AI-powered design tools. Useful as a starting point or companion library for creative applications.

## What's Included

- **Prompt templates** for common design tasks
- **Color utilities** (palettes, contrast, conversion)
- **Layout helpers**
- Simple export utilities

## Project Structure

```
ai-design-kit/
├── src/
│   ├── color/
│   ├── prompts/
│   ├── layout/
│   └── index.js
├── examples/
├── package.json
└── README.md
```

## Usage

```js
import { generatePalette, promptTemplates } from 'ai-design-kit';

const colors = generatePalette('#7c5cff', 5);
const prompt = promptTemplates.styleTransfer('watercolor');
```

## Status

Early stage. Open to ideas and contributions.

## License

MIT
