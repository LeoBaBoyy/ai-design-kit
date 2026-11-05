/**
 * Basic layout helpers
 */

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
};

export function grid(columns = 12, gap = 16) {
  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
  };
}

export function stack(gap = 16) {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: `${gap}px`,
  };
}
