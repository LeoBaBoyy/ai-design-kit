import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  generatePalette,
  contrastRatio,
  isAccessible,
  complementary,
  analogous,
  hexToRgb,
  rgbToHex,
} from '../src/index.js';

describe('Color utilities', () => {
  it('generates a palette of the requested length', () => {
    const palette = generatePalette('#7c5cff', 5);
    assert.equal(palette.length, 5);
    palette.forEach((c) => assert.match(c, /^#[0-9a-f]{6}$/i));
  });

  it('calculates contrast ratio', () => {
    const ratio = contrastRatio('#000000', '#ffffff');
    assert.ok(ratio > 20);
  });

  it('checks accessibility', () => {
    assert.equal(isAccessible('#000000', '#ffffff'), true);
    assert.equal(isAccessible('#777777', '#888888'), false);
  });

  it('generates complementary colors', () => {
    const colors = complementary('#7c5cff');
    assert.equal(colors.length, 2);
  });

  it('generates analogous colors', () => {
    const colors = analogous('#7c5cff');
    assert.equal(colors.length, 3);
  });

  it('converts hex ↔ rgb correctly', () => {
    const rgb = hexToRgb('#7c5cff');
    assert.deepEqual(rgb, { r: 124, g: 92, b: 255 });
    assert.equal(rgbToHex(124, 92, 255), '#7c5cff');
  });
});
