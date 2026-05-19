// ─── Untitled UI Pro — Spacing, Radius, Shadow & Layout Tokens ───────────────
// Sources:
//   Figma Variables  › 3. Spacing, 2. Radius, 4. Widths, 5. Containers
//   Figma Effect Styles › Shadows/*, Focus rings/*, Backdrop blurs/*
// DO NOT EDIT manually — regenerate from Figma via the token extraction script
//
// Shadow base color: rgba(10, 13, 18, α) ≈ gray-950 (#0a0d12)
// Focus ring color:  rgba(158, 119, 237, 1) = brand-500 / #9e77ed
// Focus error color: rgba(240, 68, 56, 1)   = error-500 / #f04438

// ─── Spacing ─────────────────────────────────────────────────────────────────
// 17-step scale (0 → 160 px). Named after Untitled UI's semantic size names.
// All Tailwind spacing keys are additive to the default scale.

export const spacing = {
  'none': '0px',
  'xxs':  '0.125rem',  //   2px
  'xs':   '0.25rem',   //   4px
  'sm':   '0.375rem',  //   6px
  'md':   '0.5rem',    //   8px
  'lg':   '0.75rem',   //  12px
  'xl':   '1rem',      //  16px
  '2xl':  '1.25rem',   //  20px
  '3xl':  '1.5rem',    //  24px
  '4xl':  '2rem',      //  32px
  '5xl':  '2.5rem',    //  40px
  '6xl':  '3rem',      //  48px
  '7xl':  '4rem',      //  64px
  '8xl':  '5rem',      //  80px
  '9xl':  '6rem',      //  96px
  '10xl': '8rem',      // 128px
  '11xl': '10rem',     // 160px
} as const;

export const spacingPx = {
  none:  0,
  xxs:   2,
  xs:    4,
  sm:    6,
  md:    8,
  lg:   12,
  xl:   16,
  '2xl': 20,
  '3xl': 24,
  '4xl': 32,
  '5xl': 40,
  '6xl': 48,
  '7xl': 64,
  '8xl': 80,
  '9xl': 96,
  '10xl': 128,
  '11xl': 160,
} as const;

// ─── Border Radius ────────────────────────────────────────────────────────────
// 11-step scale (0 → 9999 px).

export const borderRadius = {
  none: '0px',
  xxs:  '0.125rem',   //  2px
  xs:   '0.25rem',    //  4px
  sm:   '0.375rem',   //  6px
  md:   '0.5rem',     //  8px
  lg:   '0.625rem',   // 10px
  xl:   '0.75rem',    // 12px
  '2xl': '1rem',      // 16px
  '3xl': '1.25rem',   // 20px
  '4xl': '1.5rem',    // 24px
  full: '9999px',
} as const;

// ─── Box Shadows ─────────────────────────────────────────────────────────────
// Multi-layer CSS box-shadow strings, matched 1:1 to Figma effect styles.
// Shadow base: rgba(10, 13, 18, α) — gray-950 at varying opacities.

export const boxShadow = {
  // ── Standard elevation shadows ────────────────────────────────────────────
  xs:
    '0px 1px 2px 0px rgba(10, 13, 18, 0.05)',

  'xs-skeuomorphic':
    '0px 1px 2px 0px rgba(10, 13, 18, 0.05), ' +
    'inset 0px -2px 0px 0px rgba(10, 13, 18, 0.05), ' +
    'inset 0px 0px 0px 1px rgba(10, 13, 18, 0.18)',

  sm:
    '0px 1px 2px -1px rgba(10, 13, 18, 0.10), ' +
    '0px 1px 3px 0px rgba(10, 13, 18, 0.10)',

  md:
    '0px 2px 4px -2px rgba(10, 13, 18, 0.06), ' +
    '0px 4px 6px -1px rgba(10, 13, 18, 0.10)',

  lg:
    '0px 2px 2px -1px rgba(10, 13, 18, 0.04), ' +
    '0px 4px 6px -2px rgba(10, 13, 18, 0.03), ' +
    '0px 12px 16px -4px rgba(10, 13, 18, 0.08)',

  xl:
    '0px 3px 3px -1.5px rgba(10, 13, 18, 0.04), ' +
    '0px 8px 8px -4px rgba(10, 13, 18, 0.03), ' +
    '0px 20px 24px -4px rgba(10, 13, 18, 0.08)',

  '2xl':
    '0px 4px 4px -2px rgba(10, 13, 18, 0.04), ' +
    '0px 24px 48px -12px rgba(10, 13, 18, 0.18)',

  '3xl':
    '0px 5px 5px -2.5px rgba(10, 13, 18, 0.04), ' +
    '0px 32px 64px -12px rgba(10, 13, 18, 0.14)',

  // ── Focus rings ───────────────────────────────────────────────────────────
  // White inner band (2px) + brand/error outer ring (4px).
  // Layer order: first shadow renders on top in CSS.

  'focus-ring':
    '0px 0px 0px 4px rgba(158, 119, 237, 1), ' +   // brand-500
    '0px 0px 0px 2px rgba(255, 255, 255, 1)',

  'focus-ring-shadow-xs':
    '0px 0px 0px 4px rgba(158, 119, 237, 1), ' +
    '0px 0px 0px 2px rgba(255, 255, 255, 1), ' +
    '0px 1px 2px 0px rgba(10, 13, 18, 0.05)',

  'focus-ring-shadow-xs-skeuomorphic':
    '0px 0px 0px 4px rgba(158, 119, 237, 1), ' +
    '0px 0px 0px 2px rgba(255, 255, 255, 1), ' +
    '0px 1px 2px 0px rgba(10, 13, 18, 0.05), ' +
    'inset 0px -2px 0px 0px rgba(10, 13, 18, 0.05), ' +
    'inset 0px 0px 0px 1px rgba(10, 13, 18, 0.18)',

  'focus-ring-shadow-sm':
    '0px 0px 0px 4px rgba(158, 119, 237, 1), ' +
    '0px 0px 0px 2px rgba(255, 255, 255, 1), ' +
    '0px 1px 2px 0px rgba(10, 13, 18, 0.10), ' +
    '0px 1px 3px 0px rgba(10, 13, 18, 0.10)',

  'focus-ring-error':
    '0px 0px 0px 4px rgba(240, 68, 56, 1), ' +       // error-500
    '0px 0px 0px 2px rgba(255, 255, 255, 1)',

  'focus-ring-error-shadow-xs':
    '0px 0px 0px 4px rgba(240, 68, 56, 1), ' +
    '0px 0px 0px 2px rgba(255, 255, 255, 1), ' +
    '0px 1px 2px 0px rgba(10, 13, 18, 0.05)',

  'focus-ring-error-shadow-xs-skeuomorphic':
    '0px 0px 0px 4px rgba(240, 68, 56, 1), ' +
    '0px 0px 0px 2px rgba(255, 255, 255, 1), ' +
    '0px 1px 2px 0px rgba(10, 13, 18, 0.05), ' +
    'inset 0px -2px 0px 0px rgba(10, 13, 18, 0.05), ' +
    'inset 0px 0px 0px 1px rgba(10, 13, 18, 0.18)',
} as const;

// ─── Backdrop Blur ────────────────────────────────────────────────────────────
// Maps to Tailwind's `backdropBlur` extension.

export const backdropBlur = {
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '40px',
} as const;

// ─── Layout — Max Widths ──────────────────────────────────────────────────────
// Container / breakpoint-aligned width scale.

export const maxWidth = {
  xxs:               '20rem',    //  320px
  xs:                '24rem',    //  384px
  sm:                '30rem',    //  480px
  md:                '35rem',    //  560px
  lg:                '40rem',    //  640px
  xl:                '48rem',    //  768px
  '2xl':             '64rem',    // 1024px
  '3xl':             '80rem',    // 1280px
  '4xl':             '90rem',    // 1440px
  '5xl':             '100rem',   // 1600px
  '6xl':             '120rem',   // 1920px
  'paragraph':       '45rem',    //  720px — readable line length cap
  'screen-desktop':  '80rem',    // 1280px — container-max-width-desktop
} as const;

// ─── Layout — Container ───────────────────────────────────────────────────────

export const container = {
  paddingMobile:  '1rem',   // 16px
  paddingDesktop: '2rem',   // 32px
  maxWidth:       '80rem',  // 1280px
} as const;

// ─── CSS custom properties ────────────────────────────────────────────────────

export const spacingCssVars = `
  --spacing-none: 0px;
  --spacing-xxs:  0.125rem;
  --spacing-xs:   0.25rem;
  --spacing-sm:   0.375rem;
  --spacing-md:   0.5rem;
  --spacing-lg:   0.75rem;
  --spacing-xl:   1rem;
  --spacing-2xl:  1.25rem;
  --spacing-3xl:  1.5rem;
  --spacing-4xl:  2rem;
  --spacing-5xl:  2.5rem;
  --spacing-6xl:  3rem;
  --spacing-7xl:  4rem;
  --spacing-8xl:  5rem;
  --spacing-9xl:  6rem;
  --spacing-10xl: 8rem;
  --spacing-11xl: 10rem;

  --radius-none: 0px;
  --radius-xxs:  0.125rem;
  --radius-xs:   0.25rem;
  --radius-sm:   0.375rem;
  --radius-md:   0.5rem;
  --radius-lg:   0.625rem;
  --radius-xl:   0.75rem;
  --radius-2xl:  1rem;
  --radius-3xl:  1.25rem;
  --radius-4xl:  1.5rem;
  --radius-full: 9999px;

  --shadow-xs:   ${boxShadow.xs};
  --shadow-sm:   ${boxShadow.sm};
  --shadow-md:   ${boxShadow.md};
  --shadow-lg:   ${boxShadow.lg};
  --shadow-xl:   ${boxShadow.xl};
  --shadow-2xl:  ${boxShadow['2xl']};
  --shadow-3xl:  ${boxShadow['3xl']};

  --focus-ring:             ${boxShadow['focus-ring']};
  --focus-ring-error:       ${boxShadow['focus-ring-error']};
  --focus-ring-shadow-xs:   ${boxShadow['focus-ring-shadow-xs']};
  --focus-ring-shadow-sm:   ${boxShadow['focus-ring-shadow-sm']};

  --backdrop-blur-sm: 8px;
  --backdrop-blur-md: 16px;
  --backdrop-blur-lg: 24px;
  --backdrop-blur-xl: 40px;

  --container-padding-mobile:  1rem;
  --container-padding-desktop: 2rem;
  --container-max-width:       80rem;
  --paragraph-max-width:       45rem;
`.trim();

// ─── Tailwind theme.extend objects ───────────────────────────────────────────
// Usage in tailwind.config.ts:
//
//   import {
//     tailwindSpacing, tailwindBorderRadius, tailwindBoxShadow,
//     tailwindBackdropBlur, tailwindMaxWidth,
//   } from './src/tokens/spacing'
//
//   export default {
//     theme: {
//       extend: {
//         spacing:      tailwindSpacing,
//         borderRadius: tailwindBorderRadius,
//         boxShadow:    tailwindBoxShadow,
//         backdropBlur: tailwindBackdropBlur,
//         maxWidth:     tailwindMaxWidth,
//       },
//     },
//   }

export const tailwindSpacing      = spacing;
export const tailwindBorderRadius = borderRadius;
export const tailwindBoxShadow    = boxShadow;
export const tailwindBackdropBlur = backdropBlur;
export const tailwindMaxWidth     = maxWidth;

// ─── Types ────────────────────────────────────────────────────────────────────

export type SpacingKey       = keyof typeof spacing;
export type BorderRadiusKey  = keyof typeof borderRadius;
export type BoxShadowKey     = keyof typeof boxShadow;
export type BackdropBlurKey  = keyof typeof backdropBlur;
export type MaxWidthKey      = keyof typeof maxWidth;
