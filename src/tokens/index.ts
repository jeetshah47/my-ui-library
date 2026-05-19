// ─── Token barrel ─────────────────────────────────────────────────────────────
// Single import point for all design tokens.
// Usage:
//   import { colors, spacing, fontSize } from '@/tokens'
//   import type { ColorStep, SpacingKey }  from '@/tokens'

// ─── Colors ───────────────────────────────────────────────────────────────────
export {
  colors,
  colorCssVars,
  tailwindColors,
} from './colors'

export type {
  Colors,
  ColorScale,
  ColorStep,
} from './colors'

// ─── Typography ───────────────────────────────────────────────────────────────
export {
  fontFamily,
  fontSize,
  fontSizePx,
  fontWeight,
  letterSpacing,
  lineHeight,
  lineHeightPx,
  typographyCssVars,
  tailwindFontFamily,
  tailwindFontSize,
  tailwindFontWeight,
  tailwindLetterSpacing,
  tailwindLineHeight,
} from './typography'

export type {
  FontFamilyKey,
  FontSizeKey,
  FontWeightKey,
  LetterSpacingKey,
  LineHeightKey,
} from './typography'

// ─── Spacing, Radius, Shadows ─────────────────────────────────────────────────
export {
  spacing,
  spacingPx,
  borderRadius,
  boxShadow,
  backdropBlur,
  maxWidth,
  container,
  spacingCssVars,
  tailwindSpacing,
  tailwindBorderRadius,
  tailwindBoxShadow,
  tailwindBackdropBlur,
  tailwindMaxWidth,
} from './spacing'

export type {
  SpacingKey,
  BorderRadiusKey,
  BoxShadowKey,
  BackdropBlurKey,
  MaxWidthKey,
} from './spacing'
