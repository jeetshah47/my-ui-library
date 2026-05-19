// ─── Untitled UI Pro — Typography Tokens ─────────────────────────────────────
// Source: Figma Variables › 6. Typography + local text styles
// DO NOT EDIT manually — regenerate from Figma via the token extraction script
//
// Scale: 11 steps across two families
//   Body    text-xs (12) → text-xl (20)
//   Display display-xs (24) → display-2xl (72)
//
// Letter spacing:
//   0em      → text-* + display-xs / display-sm
//   -0.02em  → display-md … display-2xl  (Figma: -2%)

// ─── Font Family ─────────────────────────────────────────────────────────────

export const fontFamily = {
  display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  body:    ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  sans:    ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
} as const;

// ─── Font Size ────────────────────────────────────────────────────────────────
// Tuple format: [fontSize, { lineHeight }]  ← Tailwind fontSize extension shape
// rem values at 16 px root; px source in comment

export const fontSize = {
  'text-xs':    ['0.75rem',  { lineHeight: '1.125rem' }],  // 12 / 18
  'text-sm':    ['0.875rem', { lineHeight: '1.25rem'  }],  // 14 / 20
  'text-md':    ['1rem',     { lineHeight: '1.5rem'   }],  // 16 / 24
  'text-lg':    ['1.125rem', { lineHeight: '1.75rem'  }],  // 18 / 28
  'text-xl':    ['1.25rem',  { lineHeight: '1.875rem' }],  // 20 / 30
  'display-xs': ['1.5rem',   { lineHeight: '2rem'     }],  // 24 / 32
  'display-sm': ['1.875rem', { lineHeight: '2.375rem' }],  // 30 / 38
  'display-md': ['2.25rem',  { lineHeight: '2.75rem'  }],  // 36 / 44
  'display-lg': ['3rem',     { lineHeight: '3.75rem'  }],  // 48 / 60
  'display-xl': ['3.75rem',  { lineHeight: '4.5rem'   }],  // 60 / 72
  'display-2xl':['4.5rem',   { lineHeight: '5.625rem' }],  // 72 / 90
} as const satisfies Record<string, readonly [string, { readonly lineHeight: string }]>;

// ─── Font Weight ──────────────────────────────────────────────────────────────
// Figma variable names → standard numeric CSS weights

export const fontWeight = {
  regular:  '400',
  medium:   '500',
  semibold: '600',
  bold:     '700',
} as const;

// ─── Letter Spacing ───────────────────────────────────────────────────────────
// Figma stores tracking as PERCENT of font size; converted to em here.
// Named after the use-case, not the step, so you can swap intent without
// hunting down every callsite.

export const letterSpacing = {
  normal:         '0em',     // text-* / display-xs / display-sm
  'display-tight': '-0.02em', // display-md … display-2xl  (-2% in Figma)
} as const;

// ─── Line Height (standalone) ─────────────────────────────────────────────────
// Use these when you need just the line-height value outside a fontSize tuple,
// e.g. in Tailwind's `lineHeight` extension or custom CSS vars.

export const lineHeight = {
  'text-xs':    '1.125rem',  // 18px
  'text-sm':    '1.25rem',   // 20px
  'text-md':    '1.5rem',    // 24px
  'text-lg':    '1.75rem',   // 28px
  'text-xl':    '1.875rem',  // 30px
  'display-xs': '2rem',      // 32px
  'display-sm': '2.375rem',  // 38px
  'display-md': '2.75rem',   // 44px
  'display-lg': '3.75rem',   // 60px
  'display-xl': '4.5rem',    // 72px
  'display-2xl':'5.625rem',  // 90px
} as const;

// ─── Raw px values (for CSS-in-JS or style props that require numbers) ────────

export const fontSizePx = {
  'text-xs':    12,
  'text-sm':    14,
  'text-md':    16,
  'text-lg':    18,
  'text-xl':    20,
  'display-xs': 24,
  'display-sm': 30,
  'display-md': 36,
  'display-lg': 48,
  'display-xl': 60,
  'display-2xl':72,
} as const;

export const lineHeightPx = {
  'text-xs':    18,
  'text-sm':    20,
  'text-md':    24,
  'text-lg':    28,
  'text-xl':    30,
  'display-xs': 32,
  'display-sm': 38,
  'display-md': 44,
  'display-lg': 60,
  'display-xl': 72,
  'display-2xl':90,
} as const;

// ─── CSS custom properties ────────────────────────────────────────────────────
// Import colors.css and paste this into :root {} (or extend it there)

export const typographyCssVars = `
  --font-family-display: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-family-body:    Inter, ui-sans-serif, system-ui, sans-serif;

  --font-weight-regular:  400;
  --font-weight-medium:   500;
  --font-weight-semibold: 600;
  --font-weight-bold:     700;

  --font-size-text-xs:    0.75rem;
  --font-size-text-sm:    0.875rem;
  --font-size-text-md:    1rem;
  --font-size-text-lg:    1.125rem;
  --font-size-text-xl:    1.25rem;
  --font-size-display-xs: 1.5rem;
  --font-size-display-sm: 1.875rem;
  --font-size-display-md: 2.25rem;
  --font-size-display-lg: 3rem;
  --font-size-display-xl: 3.75rem;
  --font-size-display-2xl:4.5rem;

  --line-height-text-xs:    1.125rem;
  --line-height-text-sm:    1.25rem;
  --line-height-text-md:    1.5rem;
  --line-height-text-lg:    1.75rem;
  --line-height-text-xl:    1.875rem;
  --line-height-display-xs: 2rem;
  --line-height-display-sm: 2.375rem;
  --line-height-display-md: 2.75rem;
  --line-height-display-lg: 3.75rem;
  --line-height-display-xl: 4.5rem;
  --line-height-display-2xl:5.625rem;

  --letter-spacing-normal:        0em;
  --letter-spacing-display-tight: -0.02em;
`.trim();

// ─── Tailwind theme.extend objects ───────────────────────────────────────────
// Usage in tailwind.config.ts:
//
//   import {
//     tailwindFontFamily, tailwindFontSize,
//     tailwindFontWeight, tailwindLetterSpacing, tailwindLineHeight
//   } from './src/tokens/typography'
//
//   export default {
//     theme: {
//       extend: {
//         fontFamily:    tailwindFontFamily,
//         fontSize:      tailwindFontSize,
//         fontWeight:    tailwindFontWeight,
//         letterSpacing: tailwindLetterSpacing,
//         lineHeight:    tailwindLineHeight,
//       },
//     },
//   }

export const tailwindFontFamily    = fontFamily;
export const tailwindFontSize      = fontSize;
export const tailwindFontWeight    = fontWeight;
export const tailwindLetterSpacing = letterSpacing;
export const tailwindLineHeight    = lineHeight;

// ─── Types ────────────────────────────────────────────────────────────────────

export type FontFamilyKey     = keyof typeof fontFamily;
export type FontSizeKey       = keyof typeof fontSize;
export type FontWeightKey     = keyof typeof fontWeight;
export type LetterSpacingKey  = keyof typeof letterSpacing;
export type LineHeightKey     = keyof typeof lineHeight;
