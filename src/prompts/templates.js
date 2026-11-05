/**
 * Reusable prompt templates for design and creative tasks
 */

export const promptTemplates = {
  styleTransfer: (style) =>
    `Transform this image into ${style} style while preserving the main composition and subject.`,

  variation: (count = 4) =>
    `Generate ${count} creative variations of this design. Keep the core idea but explore different layouts, colors, and moods.`,

  colorPalette: (mood) =>
    `Suggest a cohesive color palette that evokes a ${mood} feeling. Provide 5 hex colors with short descriptions.`,

  refine: (instructions) =>
    `Improve this design based on the following feedback: ${instructions}. Maintain overall structure.`,

  iconSet: (theme, count = 6) =>
    `Design a consistent set of ${count} icons themed around "${theme}". Use a simple, modern style with clear silhouettes.`,

  layout: (type) =>
    `Propose a clean ${type} layout. Focus on hierarchy, spacing, and readability.`,
};
