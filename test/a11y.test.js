import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { simulateAll, fixContrast, contrastRatio } from '../src/index.js';

describe('accessibility helpers', () => {
  it('simulates the three common deficiencies', () => {
    const result = simulateAll('#ff0000');
    assert.match(result.protanopia, /^#[0-9a-f]{6}$/i);
    assert.match(result.deuteranopia, /^#[0-9a-f]{6}$/i);
    assert.match(result.tritanopia, /^#[0-9a-f]{6}$/i);
    assert.notEqual(result.deuteranopia.toLowerCase(), '#ff0000');
  });

  it('raises low-contrast text until it passes AA', () => {
    const fixed = fixContrast('#c4b5fd', '#ffffff', 4.5);
    assert.equal(fixed.changed, true);
    assert.ok(contrastRatio(fixed.color, '#ffffff') >= 4.5);
  });

  it('leaves an already-passing pair alone', () => {
    const fixed = fixContrast('#111111', '#ffffff', 4.5);
    assert.equal(fixed.changed, false);
    assert.equal(fixed.color, '#111111');
  });
});
