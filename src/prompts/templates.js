/**
 * Reusable, high-quality prompt templates for creative and design tasks.
 */

export const promptTemplates = {
  // --- Image / Art ---
  styleTransfer: (style) =>
    `Transform this image into ${style} style while carefully preserving the main composition, subject, and overall structure. Focus on authentic stylistic details.`,

  variation: (count = 4) =>
    `Generate ${count} creative variations of this design. Keep the core concept recognizable but explore different layouts, color stories, and moods.`,

  detailedScene: ({ subject, mood, lighting, style }) =>
    `Create a detailed illustration of ${subject}. Mood: ${mood}. Lighting: ${lighting}. Style: ${style || 'cinematic'}. Emphasize atmosphere, depth, and storytelling details.`,

  // --- Design ---
  colorPalette: (mood) =>
    `Suggest a cohesive 5-color palette that evokes a ${mood} feeling. Provide hex codes and a short rationale for each color's role (primary, accent, background, etc.).`,

  layout: (type) =>
    `Propose a clean, modern ${type} layout. Focus on visual hierarchy, spacing, readability, and balance. Describe the structure clearly.`,

  componentIdeas: (componentType) =>
    `Suggest 5 thoughtful variations of a ${componentType} component. Include ideas for layout, interaction states, accessibility, and visual style.`,

  designSystem: (productType) =>
    `Propose a minimal but complete design system for a ${productType} product. Include color roles, typography scale, spacing tokens, and the core set of components.`,

  // --- Refinement ---
  refine: (instructions) =>
    `Improve this design based on the following feedback: ${instructions}. Maintain the overall style and structure while making targeted improvements.`,

  enhance: (aspect) =>
    `Improve the ${aspect} of this image while preserving the main subject and composition. Aim for a more polished and intentional result.`,

  // --- Icons & Assets ---
  iconSet: (theme, count = 6) =>
    `Design a consistent set of ${count} icons themed around "${theme}". Use a simple, modern style with clear silhouettes and consistent stroke weight.`,

  // --- Workflow helpers ---
  critique: (focus = 'overall') =>
    `Provide a constructive design critique focused on ${focus}. Point out strengths, clear issues, and specific, actionable improvements.`,
};
