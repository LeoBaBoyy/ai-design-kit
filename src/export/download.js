/**
 * Browser-side download helpers
 */

export function downloadCanvas(canvas, filename = 'export.png', type = 'image/png') {
  if (!canvas || typeof canvas.toDataURL !== 'function') {
    console.warn('downloadCanvas: invalid canvas');
    return;
  }
  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL(type);
  link.click();
}

export function downloadJSON(data, filename = 'data.json') {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json',
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = filename;
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
}

export function downloadText(text, filename = 'file.txt', mime = 'text/plain') {
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = filename;
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
}
