import { hexToRgb, rgbToHex } from '../color/convert.js';

/**
 * Approximate color-vision deficiency simulation (sRGB).
 * Matrices are the widely used Viénot / Brettel linear-RGB transforms.
 * Useful for checking whether a palette still reads for protanopia,
 * deuteranopia, and tritanopia.
 */

const MATRICES = {
  protanopia: [
    [0.152286, 1.052583, -0.204868],
    [0.114503, 0.786281, 0.099216],
    [-0.003882, -0.048116, 1.051998],
  ],
  deuteranopia: [
    [0.367322, 0.860646, -0.227968],
    [0.280085, 0.672501, 0.047413],
    [-0.01182, 0.04294, 0.968881],
  ],
  tritanopia: [
    [1.255528, -0.076749, -0.178779],
    [-0.078411, 0.930809, 0.147602],
    [0.004733, 0.691367, 0.3039],
  ],
};

function srgbToLinear(c) {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

function linearToSrgb(c) {
  const s = c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
  return Math.round(Math.min(1, Math.max(0, s)) * 255);
}

function applyMatrix(rgb, matrix) {
  const r = srgbToLinear(rgb.r);
  const g = srgbToLinear(rgb.g);
  const b = srgbToLinear(rgb.b);
  const [m0, m1, m2] = matrix;
  return {
    r: linearToSrgb(m0[0] * r + m0[1] * g + m0[2] * b),
    g: linearToSrgb(m1[0] * r + m1[1] * g + m1[2] * b),
    b: linearToSrgb(m2[0] * r + m2[1] * g + m2[2] * b),
  };
}

/** Simulate how a hex color looks under a given deficiency. */
export function simulateColorBlind(hex, type = 'deuteranopia') {
  const rgb = hexToRgb(hex);
  const matrix = MATRICES[type];
  if (!rgb || !matrix) return hex;
  const out = applyMatrix(rgb, matrix);
  return rgbToHex(out.r, out.g, out.b);
}

/** Return the color as seen by the three common deficiencies. */
export function simulateAll(hex) {
  return {
    original: hex,
    protanopia: simulateColorBlind(hex, 'protanopia'),
    deuteranopia: simulateColorBlind(hex, 'deuteranopia'),
    tritanopia: simulateColorBlind(hex, 'tritanopia'),
  };
}

export const COLOR_BLIND_TYPES = Object.keys(MATRICES);
