/**
 * Simple, practical layout utilities
 */

export const spacing = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
};

/**
 * CSS grid helper
 */
export function grid(columns = 12, gap = 16) {
  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap: typeof gap === 'number' ? `${gap}px` : gap,
  };
}

/**
 * Vertical stack
 */
export function stack(gap = 16) {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: typeof gap === 'number' ? `${gap}px` : gap,
  };
}

/**
 * Horizontal cluster with wrapping
 */
export function cluster(gap = 8) {
  return {
    display: 'flex',
    flexWrap: 'wrap',
    gap: typeof gap === 'number' ? `${gap}px` : gap,
    alignItems: 'center',
  };
}
