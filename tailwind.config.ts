// ─── Tailwind CSS v4 — JavaScript config ─────────────────────────────────────
//
// In Tailwind v4 the JS config has a reduced role:
//   • theme tokens  → CSS `@theme` in src/styles/globals.css  ← the real config
//   • content paths → CSS `@source` in src/styles/globals.css
//   • plugins       → CSS `@plugin` in src/styles/globals.css
//   • darkMode      → still here (only option honoured via @config)
//
// This file is wired up by src/styles/globals.css:
//   @config '../../tailwind.config.ts';
//
// If you ever need to downgrade to Tailwind v3, the `tailwind*` extension
// objects exported from each token file are already formatted for
// `theme.extend` — just uncomment the block below and remove @theme from CSS.
// ─────────────────────────────────────────────────────────────────────────────

import type { Config } from 'tailwindcss'

// // ── Tailwind v3 theme.extend (not active in v4) ───────────────────────────
// import {
//   tailwindColors,
//   tailwindFontFamily, tailwindFontSize, tailwindFontWeight,
//   tailwindLetterSpacing, tailwindLineHeight,
//   tailwindSpacing, tailwindBorderRadius, tailwindBoxShadow,
//   tailwindBackdropBlur, tailwindMaxWidth,
// } from './src/tokens'
//
// theme: {
//   extend: {
//     colors:        tailwindColors,
//     fontFamily:    tailwindFontFamily,
//     fontSize:      tailwindFontSize,
//     fontWeight:    tailwindFontWeight,
//     letterSpacing: tailwindLetterSpacing,
//     lineHeight:    tailwindLineHeight,
//     spacing:       tailwindSpacing,
//     borderRadius:  tailwindBorderRadius,
//     boxShadow:     tailwindBoxShadow,
//     backdropBlur:  tailwindBackdropBlur,
//     maxWidth:      tailwindMaxWidth,
//   },
// },

export default {
  // 'class' strategy: add/remove the `dark` class on <html> to toggle dark mode.
  // Swap to 'media' if you want to follow the OS preference instead.
  darkMode: 'class',

  // Plugins are registered via CSS `@plugin` in v4 (see globals.css).
  // Add PostCSS-only plugins here only if they cannot be loaded that way.
  plugins: [],
} satisfies Config
