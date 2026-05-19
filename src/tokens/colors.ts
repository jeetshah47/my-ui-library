// ─── Untitled UI Pro — Color Primitives ──────────────────────────────────────
// Source: Figma Variables › _Primitives collection
// DO NOT EDIT manually — regenerate from Figma via the token extraction script

// ─── Scale helpers ────────────────────────────────────────────────────────────

const grayScale = {
  '25': '#fdfdfd',
  '50': '#fafafa',
  '100': '#f5f5f5',
  '200': '#e9eaeb',
  '300': '#d5d7da',
  '400': '#a4a7ae',
  '500': '#717680',
  '600': '#535862',
  '700': '#414651',
  '800': '#252b37',
  '900': '#181d27',
  '950': '#0a0d12',
} as const;

const grayDarkScale = {
  '25': '#fafafa',
  '50': '#f7f7f7',
  '100': '#f0f0f1',
  '200': '#ececed',
  '300': '#cecfd2',
  '400': '#94979c',
  '500': '#85888e',
  '600': '#61656c',
  '700': '#373a41',
  '800': '#22262f',
  '900': '#13161b',
  '950': '#0c0e12',
} as const;

const brandScale = {
  '25': '#fcfaff',
  '50': '#f9f5ff',
  '100': '#f4ebff',
  '200': '#e9d7fe',
  '300': '#d6bbfb',
  '400': '#b692f6',
  '500': '#9e77ed',
  '600': '#7f56d9',
  '700': '#6941c6',
  '800': '#53389e',
  '900': '#42307d',
  '950': '#2c1c5f',
} as const;

// ─── colors ───────────────────────────────────────────────────────────────────

export const colors = {
  base: {
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',
  },

  // Primary gray — light mode
  gray: grayScale,

  // Primary gray — dark mode solids
  grayDark: grayDarkScale,

  // Primary gray — dark mode alpha (white with opacity)
  grayDarkAlpha: {
    '25': 'rgba(255, 255, 255, 0.98)',
    '50': 'rgba(255, 255, 255, 0.96)',
    '100': 'rgba(255, 255, 255, 0.94)',
    '200': 'rgba(255, 255, 255, 0.92)',
    '300': 'rgba(255, 255, 255, 0.80)',
    '400': 'rgba(255, 255, 255, 0.56)',
    '500': 'rgba(255, 255, 255, 0.50)',
    '600': 'rgba(255, 255, 255, 0.35)',
    '700': 'rgba(255, 255, 255, 0.16)',
    '800': 'rgba(255, 255, 255, 0.08)',
    '900': 'rgba(255, 255, 255, 0.04)',
    '950': 'rgba(255, 255, 255, 0.00)',
  },

  // Brand (purple) — also aliased as `primary`
  brand: brandScale,
  primary: brandScale,

  error: {
    '25': '#fffbfa',
    '50': '#fef3f2',
    '100': '#fee4e2',
    '200': '#fecdca',
    '300': '#fda29b',
    '400': '#f97066',
    '500': '#f04438',
    '600': '#d92d20',
    '700': '#b42318',
    '800': '#912018',
    '900': '#7a271a',
    '950': '#55160c',
  },

  warning: {
    '25': '#fffcf5',
    '50': '#fffaeb',
    '100': '#fef0c7',
    '200': '#fedf89',
    '300': '#fec84b',
    '400': '#fdb022',
    '500': '#f79009',
    '600': '#dc6803',
    '700': '#b54708',
    '800': '#93370d',
    '900': '#7a2e0e',
    '950': '#4e1d09',
  },

  success: {
    '25': '#f6fef9',
    '50': '#ecfdf3',
    '100': '#dcfae6',
    '200': '#abefc6',
    '300': '#75e0a7',
    '400': '#47cd89',
    '500': '#17b26a',
    '600': '#079455',
    '700': '#067647',
    '800': '#085d3a',
    '900': '#074d31',
    '950': '#053321',
  },

  // ─── Extended gray palettes ────────────────────────────────────────────────

  grayBlue: {
    '25': '#fcfcfd',
    '50': '#f8f9fc',
    '100': '#eaecf5',
    '200': '#d5d9eb',
    '300': '#b3b8db',
    '400': '#717bbc',
    '500': '#4e5ba6',
    '600': '#3e4784',
    '700': '#363f72',
    '800': '#293056',
    '900': '#101323',
    '950': '#0d0f1c',
  },

  grayCool: {
    '25': '#fcfcfd',
    '50': '#f9f9fb',
    '100': '#eff1f5',
    '200': '#dcdfea',
    '300': '#b9c0d4',
    '400': '#7d89b0',
    '500': '#5d6b98',
    '600': '#4a5578',
    '700': '#404968',
    '800': '#30374f',
    '900': '#111322',
    '950': '#0e101b',
  },

  grayModern: {
    '25': '#fcfcfd',
    '50': '#f8fafc',
    '100': '#eef2f6',
    '200': '#e3e8ef',
    '300': '#cdd5df',
    '400': '#9aa4b2',
    '500': '#697586',
    '600': '#4b5565',
    '700': '#364152',
    '800': '#202939',
    '900': '#121926',
    '950': '#0d121c',
  },

  grayNeutral: {
    '25': '#fcfcfd',
    '50': '#f9fafb',
    '100': '#f3f4f6',
    '200': '#e5e7eb',
    '300': '#d2d6db',
    '400': '#9da4ae',
    '500': '#6c737f',
    '600': '#4d5761',
    '700': '#384250',
    '800': '#1f2a37',
    '900': '#111927',
    '950': '#0d121c',
  },

  grayIron: {
    '25': '#fcfcfc',
    '50': '#fafafa',
    '100': '#f4f4f5',
    '200': '#e4e4e7',
    '300': '#d1d1d6',
    '400': '#a0a0ab',
    '500': '#70707b',
    '600': '#51525c',
    '700': '#3f3f46',
    '800': '#26272b',
    '900': '#1a1a1e',
    '950': '#131316',
  },

  grayTrue: {
    '25': '#fcfcfc',
    '50': '#f7f7f7',
    '100': '#f5f5f5',
    '200': '#e5e5e5',
    '300': '#d6d6d6',
    '400': '#a3a3a3',
    '500': '#737373',
    '600': '#525252',
    '700': '#424242',
    '800': '#292929',
    '900': '#141414',
    '950': '#0f0f0f',
  },

  grayWarm: {
    '25': '#fdfdfc',
    '50': '#fafaf9',
    '100': '#f5f5f4',
    '200': '#e7e5e4',
    '300': '#d7d3d0',
    '400': '#a9a29d',
    '500': '#79716b',
    '600': '#57534e',
    '700': '#44403c',
    '800': '#292524',
    '900': '#1c1917',
    '950': '#171412',
  },

  // ─── Color palettes ────────────────────────────────────────────────────────

  moss: {
    '25': '#fafdf7',
    '50': '#f5fbee',
    '100': '#e6f4d7',
    '200': '#ceeab0',
    '300': '#acdc79',
    '400': '#86cb3c',
    '500': '#669f2a',
    '600': '#4f7a21',
    '700': '#3f621a',
    '800': '#335015',
    '900': '#2b4212',
    '950': '#1a280b',
  },

  greenLight: {
    '25': '#fafef5',
    '50': '#f3fee7',
    '100': '#e3fbcc',
    '200': '#d0f8ab',
    '300': '#a6ef67',
    '400': '#85e13a',
    '500': '#66c61c',
    '600': '#4ca30d',
    '700': '#3b7c0f',
    '800': '#326212',
    '900': '#2b5314',
    '950': '#15290a',
  },

  green: {
    '25': '#f6fef9',
    '50': '#edfcf2',
    '100': '#d3f8df',
    '200': '#aaf0c4',
    '300': '#73e2a3',
    '400': '#3ccb7f',
    '500': '#16b364',
    '600': '#099250',
    '700': '#087443',
    '800': '#095c37',
    '900': '#084c2e',
    '950': '#052e1c',
  },

  teal: {
    '25': '#f6fefc',
    '50': '#f0fdf9',
    '100': '#ccfbef',
    '200': '#99f6e0',
    '300': '#5fe9d0',
    '400': '#2ed3b7',
    '500': '#15b79e',
    '600': '#0e9384',
    '700': '#107569',
    '800': '#125d56',
    '900': '#134e48',
    '950': '#0a2926',
  },

  cyan: {
    '25': '#f5feff',
    '50': '#ecfdff',
    '100': '#cff9fe',
    '200': '#a5f0fc',
    '300': '#67e3f9',
    '400': '#22ccee',
    '500': '#06aed4',
    '600': '#088ab2',
    '700': '#0e7090',
    '800': '#155b75',
    '900': '#164c63',
    '950': '#0d2d3a',
  },

  blueLight: {
    '25': '#f5fbff',
    '50': '#f0f9ff',
    '100': '#e0f2fe',
    '200': '#b9e6fe',
    '300': '#7cd4fd',
    '400': '#36bffa',
    '500': '#0ba5ec',
    '600': '#0086c9',
    '700': '#026aa2',
    '800': '#065986',
    '900': '#0b4a6f',
    '950': '#062c41',
  },

  blue: {
    '25': '#f5faff',
    '50': '#eff8ff',
    '100': '#d1e9ff',
    '200': '#b2ddff',
    '300': '#84caff',
    '400': '#53b1fd',
    '500': '#2e90fa',
    '600': '#1570ef',
    '700': '#175cd3',
    '800': '#1849a9',
    '900': '#194185',
    '950': '#102a56',
  },

  blueDark: {
    '25': '#f5f8ff',
    '50': '#eff4ff',
    '100': '#d1e0ff',
    '200': '#b2ccff',
    '300': '#84adff',
    '400': '#528bff',
    '500': '#2970ff',
    '600': '#155eef',
    '700': '#004eeb',
    '800': '#0040c1',
    '900': '#00359e',
    '950': '#002266',
  },

  indigo: {
    '25': '#f5f8ff',
    '50': '#eef4ff',
    '100': '#e0eaff',
    '200': '#c7d7fe',
    '300': '#a4bcfd',
    '400': '#8098f9',
    '500': '#6172f3',
    '600': '#444ce7',
    '700': '#3538cd',
    '800': '#2d31a6',
    '900': '#2d3282',
    '950': '#1f235b',
  },

  violet: {
    '25': '#fbfaff',
    '50': '#f5f3ff',
    '100': '#ece9fe',
    '200': '#ddd6fe',
    '300': '#c3b5fd',
    '400': '#a48afb',
    '500': '#875bf7',
    '600': '#7839ee',
    '700': '#6927da',
    '800': '#5720b7',
    '900': '#491c96',
    '950': '#2e125e',
  },

  purple: {
    '25': '#fafaff',
    '50': '#f4f3ff',
    '100': '#ebe9fe',
    '200': '#d9d6fe',
    '300': '#bdb4fe',
    '400': '#9b8afb',
    '500': '#7a5af8',
    '600': '#6938ef',
    '700': '#5925dc',
    '800': '#4a1fb8',
    '900': '#3e1c96',
    '950': '#27115f',
  },

  fuchsia: {
    '25': '#fefaff',
    '50': '#fdf4ff',
    '100': '#fbe8ff',
    '200': '#f6d0fe',
    '300': '#eeaafd',
    '400': '#e478fa',
    '500': '#d444f1',
    '600': '#ba24d5',
    '700': '#9f1ab1',
    '800': '#821890',
    '900': '#6f1877',
    '950': '#47104c',
  },

  pink: {
    '25': '#fef6fb',
    '50': '#fdf2fa',
    '100': '#fce7f6',
    '200': '#fcceee',
    '300': '#faa7e0',
    '400': '#f670c7',
    '500': '#ee46bc',
    '600': '#dd2590',
    '700': '#c11574',
    '800': '#9e165f',
    '900': '#851651',
    '950': '#4e0d30',
  },

  rose: {
    '25': '#fff5f6',
    '50': '#fff1f3',
    '100': '#ffe4e8',
    '200': '#fecdd6',
    '300': '#fea3b4',
    '400': '#fd6f8e',
    '500': '#f63d68',
    '600': '#e31b54',
    '700': '#c01048',
    '800': '#a11043',
    '900': '#89123e',
    '950': '#510b24',
  },

  orangeDark: {
    '25': '#fff9f5',
    '50': '#fff4ed',
    '100': '#ffe6d5',
    '200': '#ffd6ae',
    '300': '#ff9c66',
    '400': '#ff692e',
    '500': '#ff4405',
    '600': '#e62e05',
    '700': '#bc1b06',
    '800': '#97180c',
    '900': '#771a0d',
    '950': '#57130a',
  },

  orange: {
    '25': '#fefaf5',
    '50': '#fef6ee',
    '100': '#fdead7',
    '200': '#f9dbaf',
    '300': '#f7b27a',
    '400': '#f38744',
    '500': '#ef6820',
    '600': '#e04f16',
    '700': '#b93815',
    '800': '#932f19',
    '900': '#772917',
    '950': '#511c10',
  },

  yellow: {
    '25': '#fefdf0',
    '50': '#fefbe8',
    '100': '#fef7c3',
    '200': '#feee95',
    '300': '#fde272',
    '400': '#fac515',
    '500': '#eaaa08',
    '600': '#ca8504',
    '700': '#a15c07',
    '800': '#854a0e',
    '900': '#713b12',
    '950': '#542c0d',
  },
} as const;

export type Colors = typeof colors;
export type ColorScale = keyof Omit<Colors, 'base'>;
export type ColorStep = '25' | '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';

// ─── CSS custom properties string ─────────────────────────────────────────────
// Paste into a <style> tag or inject via JS

export const colorCssVars = `
  --color-base-white: ${colors.base.white};
  --color-base-black: ${colors.base.black};

  --color-gray-25: ${colors.gray['25']};
  --color-gray-50: ${colors.gray['50']};
  --color-gray-100: ${colors.gray['100']};
  --color-gray-200: ${colors.gray['200']};
  --color-gray-300: ${colors.gray['300']};
  --color-gray-400: ${colors.gray['400']};
  --color-gray-500: ${colors.gray['500']};
  --color-gray-600: ${colors.gray['600']};
  --color-gray-700: ${colors.gray['700']};
  --color-gray-800: ${colors.gray['800']};
  --color-gray-900: ${colors.gray['900']};
  --color-gray-950: ${colors.gray['950']};

  --color-gray-dark-25: ${colors.grayDark['25']};
  --color-gray-dark-50: ${colors.grayDark['50']};
  --color-gray-dark-100: ${colors.grayDark['100']};
  --color-gray-dark-200: ${colors.grayDark['200']};
  --color-gray-dark-300: ${colors.grayDark['300']};
  --color-gray-dark-400: ${colors.grayDark['400']};
  --color-gray-dark-500: ${colors.grayDark['500']};
  --color-gray-dark-600: ${colors.grayDark['600']};
  --color-gray-dark-700: ${colors.grayDark['700']};
  --color-gray-dark-800: ${colors.grayDark['800']};
  --color-gray-dark-900: ${colors.grayDark['900']};
  --color-gray-dark-950: ${colors.grayDark['950']};

  --color-gray-dark-alpha-25: ${colors.grayDarkAlpha['25']};
  --color-gray-dark-alpha-50: ${colors.grayDarkAlpha['50']};
  --color-gray-dark-alpha-100: ${colors.grayDarkAlpha['100']};
  --color-gray-dark-alpha-200: ${colors.grayDarkAlpha['200']};
  --color-gray-dark-alpha-300: ${colors.grayDarkAlpha['300']};
  --color-gray-dark-alpha-400: ${colors.grayDarkAlpha['400']};
  --color-gray-dark-alpha-500: ${colors.grayDarkAlpha['500']};
  --color-gray-dark-alpha-600: ${colors.grayDarkAlpha['600']};
  --color-gray-dark-alpha-700: ${colors.grayDarkAlpha['700']};
  --color-gray-dark-alpha-800: ${colors.grayDarkAlpha['800']};
  --color-gray-dark-alpha-900: ${colors.grayDarkAlpha['900']};
  --color-gray-dark-alpha-950: ${colors.grayDarkAlpha['950']};

  --color-brand-25: ${colors.brand['25']};
  --color-brand-50: ${colors.brand['50']};
  --color-brand-100: ${colors.brand['100']};
  --color-brand-200: ${colors.brand['200']};
  --color-brand-300: ${colors.brand['300']};
  --color-brand-400: ${colors.brand['400']};
  --color-brand-500: ${colors.brand['500']};
  --color-brand-600: ${colors.brand['600']};
  --color-brand-700: ${colors.brand['700']};
  --color-brand-800: ${colors.brand['800']};
  --color-brand-900: ${colors.brand['900']};
  --color-brand-950: ${colors.brand['950']};

  --color-primary-25: var(--color-brand-25);
  --color-primary-50: var(--color-brand-50);
  --color-primary-100: var(--color-brand-100);
  --color-primary-200: var(--color-brand-200);
  --color-primary-300: var(--color-brand-300);
  --color-primary-400: var(--color-brand-400);
  --color-primary-500: var(--color-brand-500);
  --color-primary-600: var(--color-brand-600);
  --color-primary-700: var(--color-brand-700);
  --color-primary-800: var(--color-brand-800);
  --color-primary-900: var(--color-brand-900);
  --color-primary-950: var(--color-brand-950);

  --color-error-25: ${colors.error['25']};
  --color-error-50: ${colors.error['50']};
  --color-error-100: ${colors.error['100']};
  --color-error-200: ${colors.error['200']};
  --color-error-300: ${colors.error['300']};
  --color-error-400: ${colors.error['400']};
  --color-error-500: ${colors.error['500']};
  --color-error-600: ${colors.error['600']};
  --color-error-700: ${colors.error['700']};
  --color-error-800: ${colors.error['800']};
  --color-error-900: ${colors.error['900']};
  --color-error-950: ${colors.error['950']};

  --color-warning-25: ${colors.warning['25']};
  --color-warning-50: ${colors.warning['50']};
  --color-warning-100: ${colors.warning['100']};
  --color-warning-200: ${colors.warning['200']};
  --color-warning-300: ${colors.warning['300']};
  --color-warning-400: ${colors.warning['400']};
  --color-warning-500: ${colors.warning['500']};
  --color-warning-600: ${colors.warning['600']};
  --color-warning-700: ${colors.warning['700']};
  --color-warning-800: ${colors.warning['800']};
  --color-warning-900: ${colors.warning['900']};
  --color-warning-950: ${colors.warning['950']};

  --color-success-25: ${colors.success['25']};
  --color-success-50: ${colors.success['50']};
  --color-success-100: ${colors.success['100']};
  --color-success-200: ${colors.success['200']};
  --color-success-300: ${colors.success['300']};
  --color-success-400: ${colors.success['400']};
  --color-success-500: ${colors.success['500']};
  --color-success-600: ${colors.success['600']};
  --color-success-700: ${colors.success['700']};
  --color-success-800: ${colors.success['800']};
  --color-success-900: ${colors.success['900']};
  --color-success-950: ${colors.success['950']};

  --color-gray-blue-25: ${colors.grayBlue['25']};
  --color-gray-blue-50: ${colors.grayBlue['50']};
  --color-gray-blue-100: ${colors.grayBlue['100']};
  --color-gray-blue-200: ${colors.grayBlue['200']};
  --color-gray-blue-300: ${colors.grayBlue['300']};
  --color-gray-blue-400: ${colors.grayBlue['400']};
  --color-gray-blue-500: ${colors.grayBlue['500']};
  --color-gray-blue-600: ${colors.grayBlue['600']};
  --color-gray-blue-700: ${colors.grayBlue['700']};
  --color-gray-blue-800: ${colors.grayBlue['800']};
  --color-gray-blue-900: ${colors.grayBlue['900']};
  --color-gray-blue-950: ${colors.grayBlue['950']};

  --color-gray-cool-25: ${colors.grayCool['25']};
  --color-gray-cool-50: ${colors.grayCool['50']};
  --color-gray-cool-100: ${colors.grayCool['100']};
  --color-gray-cool-200: ${colors.grayCool['200']};
  --color-gray-cool-300: ${colors.grayCool['300']};
  --color-gray-cool-400: ${colors.grayCool['400']};
  --color-gray-cool-500: ${colors.grayCool['500']};
  --color-gray-cool-600: ${colors.grayCool['600']};
  --color-gray-cool-700: ${colors.grayCool['700']};
  --color-gray-cool-800: ${colors.grayCool['800']};
  --color-gray-cool-900: ${colors.grayCool['900']};
  --color-gray-cool-950: ${colors.grayCool['950']};

  --color-gray-modern-25: ${colors.grayModern['25']};
  --color-gray-modern-50: ${colors.grayModern['50']};
  --color-gray-modern-100: ${colors.grayModern['100']};
  --color-gray-modern-200: ${colors.grayModern['200']};
  --color-gray-modern-300: ${colors.grayModern['300']};
  --color-gray-modern-400: ${colors.grayModern['400']};
  --color-gray-modern-500: ${colors.grayModern['500']};
  --color-gray-modern-600: ${colors.grayModern['600']};
  --color-gray-modern-700: ${colors.grayModern['700']};
  --color-gray-modern-800: ${colors.grayModern['800']};
  --color-gray-modern-900: ${colors.grayModern['900']};
  --color-gray-modern-950: ${colors.grayModern['950']};

  --color-gray-neutral-25: ${colors.grayNeutral['25']};
  --color-gray-neutral-50: ${colors.grayNeutral['50']};
  --color-gray-neutral-100: ${colors.grayNeutral['100']};
  --color-gray-neutral-200: ${colors.grayNeutral['200']};
  --color-gray-neutral-300: ${colors.grayNeutral['300']};
  --color-gray-neutral-400: ${colors.grayNeutral['400']};
  --color-gray-neutral-500: ${colors.grayNeutral['500']};
  --color-gray-neutral-600: ${colors.grayNeutral['600']};
  --color-gray-neutral-700: ${colors.grayNeutral['700']};
  --color-gray-neutral-800: ${colors.grayNeutral['800']};
  --color-gray-neutral-900: ${colors.grayNeutral['900']};
  --color-gray-neutral-950: ${colors.grayNeutral['950']};

  --color-gray-iron-25: ${colors.grayIron['25']};
  --color-gray-iron-50: ${colors.grayIron['50']};
  --color-gray-iron-100: ${colors.grayIron['100']};
  --color-gray-iron-200: ${colors.grayIron['200']};
  --color-gray-iron-300: ${colors.grayIron['300']};
  --color-gray-iron-400: ${colors.grayIron['400']};
  --color-gray-iron-500: ${colors.grayIron['500']};
  --color-gray-iron-600: ${colors.grayIron['600']};
  --color-gray-iron-700: ${colors.grayIron['700']};
  --color-gray-iron-800: ${colors.grayIron['800']};
  --color-gray-iron-900: ${colors.grayIron['900']};
  --color-gray-iron-950: ${colors.grayIron['950']};

  --color-gray-true-25: ${colors.grayTrue['25']};
  --color-gray-true-50: ${colors.grayTrue['50']};
  --color-gray-true-100: ${colors.grayTrue['100']};
  --color-gray-true-200: ${colors.grayTrue['200']};
  --color-gray-true-300: ${colors.grayTrue['300']};
  --color-gray-true-400: ${colors.grayTrue['400']};
  --color-gray-true-500: ${colors.grayTrue['500']};
  --color-gray-true-600: ${colors.grayTrue['600']};
  --color-gray-true-700: ${colors.grayTrue['700']};
  --color-gray-true-800: ${colors.grayTrue['800']};
  --color-gray-true-900: ${colors.grayTrue['900']};
  --color-gray-true-950: ${colors.grayTrue['950']};

  --color-gray-warm-25: ${colors.grayWarm['25']};
  --color-gray-warm-50: ${colors.grayWarm['50']};
  --color-gray-warm-100: ${colors.grayWarm['100']};
  --color-gray-warm-200: ${colors.grayWarm['200']};
  --color-gray-warm-300: ${colors.grayWarm['300']};
  --color-gray-warm-400: ${colors.grayWarm['400']};
  --color-gray-warm-500: ${colors.grayWarm['500']};
  --color-gray-warm-600: ${colors.grayWarm['600']};
  --color-gray-warm-700: ${colors.grayWarm['700']};
  --color-gray-warm-800: ${colors.grayWarm['800']};
  --color-gray-warm-900: ${colors.grayWarm['900']};
  --color-gray-warm-950: ${colors.grayWarm['950']};

  --color-moss-25: ${colors.moss['25']};
  --color-moss-50: ${colors.moss['50']};
  --color-moss-100: ${colors.moss['100']};
  --color-moss-200: ${colors.moss['200']};
  --color-moss-300: ${colors.moss['300']};
  --color-moss-400: ${colors.moss['400']};
  --color-moss-500: ${colors.moss['500']};
  --color-moss-600: ${colors.moss['600']};
  --color-moss-700: ${colors.moss['700']};
  --color-moss-800: ${colors.moss['800']};
  --color-moss-900: ${colors.moss['900']};
  --color-moss-950: ${colors.moss['950']};

  --color-green-light-25: ${colors.greenLight['25']};
  --color-green-light-50: ${colors.greenLight['50']};
  --color-green-light-100: ${colors.greenLight['100']};
  --color-green-light-200: ${colors.greenLight['200']};
  --color-green-light-300: ${colors.greenLight['300']};
  --color-green-light-400: ${colors.greenLight['400']};
  --color-green-light-500: ${colors.greenLight['500']};
  --color-green-light-600: ${colors.greenLight['600']};
  --color-green-light-700: ${colors.greenLight['700']};
  --color-green-light-800: ${colors.greenLight['800']};
  --color-green-light-900: ${colors.greenLight['900']};
  --color-green-light-950: ${colors.greenLight['950']};

  --color-green-25: ${colors.green['25']};
  --color-green-50: ${colors.green['50']};
  --color-green-100: ${colors.green['100']};
  --color-green-200: ${colors.green['200']};
  --color-green-300: ${colors.green['300']};
  --color-green-400: ${colors.green['400']};
  --color-green-500: ${colors.green['500']};
  --color-green-600: ${colors.green['600']};
  --color-green-700: ${colors.green['700']};
  --color-green-800: ${colors.green['800']};
  --color-green-900: ${colors.green['900']};
  --color-green-950: ${colors.green['950']};

  --color-teal-25: ${colors.teal['25']};
  --color-teal-50: ${colors.teal['50']};
  --color-teal-100: ${colors.teal['100']};
  --color-teal-200: ${colors.teal['200']};
  --color-teal-300: ${colors.teal['300']};
  --color-teal-400: ${colors.teal['400']};
  --color-teal-500: ${colors.teal['500']};
  --color-teal-600: ${colors.teal['600']};
  --color-teal-700: ${colors.teal['700']};
  --color-teal-800: ${colors.teal['800']};
  --color-teal-900: ${colors.teal['900']};
  --color-teal-950: ${colors.teal['950']};

  --color-cyan-25: ${colors.cyan['25']};
  --color-cyan-50: ${colors.cyan['50']};
  --color-cyan-100: ${colors.cyan['100']};
  --color-cyan-200: ${colors.cyan['200']};
  --color-cyan-300: ${colors.cyan['300']};
  --color-cyan-400: ${colors.cyan['400']};
  --color-cyan-500: ${colors.cyan['500']};
  --color-cyan-600: ${colors.cyan['600']};
  --color-cyan-700: ${colors.cyan['700']};
  --color-cyan-800: ${colors.cyan['800']};
  --color-cyan-900: ${colors.cyan['900']};
  --color-cyan-950: ${colors.cyan['950']};

  --color-blue-light-25: ${colors.blueLight['25']};
  --color-blue-light-50: ${colors.blueLight['50']};
  --color-blue-light-100: ${colors.blueLight['100']};
  --color-blue-light-200: ${colors.blueLight['200']};
  --color-blue-light-300: ${colors.blueLight['300']};
  --color-blue-light-400: ${colors.blueLight['400']};
  --color-blue-light-500: ${colors.blueLight['500']};
  --color-blue-light-600: ${colors.blueLight['600']};
  --color-blue-light-700: ${colors.blueLight['700']};
  --color-blue-light-800: ${colors.blueLight['800']};
  --color-blue-light-900: ${colors.blueLight['900']};
  --color-blue-light-950: ${colors.blueLight['950']};

  --color-blue-25: ${colors.blue['25']};
  --color-blue-50: ${colors.blue['50']};
  --color-blue-100: ${colors.blue['100']};
  --color-blue-200: ${colors.blue['200']};
  --color-blue-300: ${colors.blue['300']};
  --color-blue-400: ${colors.blue['400']};
  --color-blue-500: ${colors.blue['500']};
  --color-blue-600: ${colors.blue['600']};
  --color-blue-700: ${colors.blue['700']};
  --color-blue-800: ${colors.blue['800']};
  --color-blue-900: ${colors.blue['900']};
  --color-blue-950: ${colors.blue['950']};

  --color-blue-dark-25: ${colors.blueDark['25']};
  --color-blue-dark-50: ${colors.blueDark['50']};
  --color-blue-dark-100: ${colors.blueDark['100']};
  --color-blue-dark-200: ${colors.blueDark['200']};
  --color-blue-dark-300: ${colors.blueDark['300']};
  --color-blue-dark-400: ${colors.blueDark['400']};
  --color-blue-dark-500: ${colors.blueDark['500']};
  --color-blue-dark-600: ${colors.blueDark['600']};
  --color-blue-dark-700: ${colors.blueDark['700']};
  --color-blue-dark-800: ${colors.blueDark['800']};
  --color-blue-dark-900: ${colors.blueDark['900']};
  --color-blue-dark-950: ${colors.blueDark['950']};

  --color-indigo-25: ${colors.indigo['25']};
  --color-indigo-50: ${colors.indigo['50']};
  --color-indigo-100: ${colors.indigo['100']};
  --color-indigo-200: ${colors.indigo['200']};
  --color-indigo-300: ${colors.indigo['300']};
  --color-indigo-400: ${colors.indigo['400']};
  --color-indigo-500: ${colors.indigo['500']};
  --color-indigo-600: ${colors.indigo['600']};
  --color-indigo-700: ${colors.indigo['700']};
  --color-indigo-800: ${colors.indigo['800']};
  --color-indigo-900: ${colors.indigo['900']};
  --color-indigo-950: ${colors.indigo['950']};

  --color-violet-25: ${colors.violet['25']};
  --color-violet-50: ${colors.violet['50']};
  --color-violet-100: ${colors.violet['100']};
  --color-violet-200: ${colors.violet['200']};
  --color-violet-300: ${colors.violet['300']};
  --color-violet-400: ${colors.violet['400']};
  --color-violet-500: ${colors.violet['500']};
  --color-violet-600: ${colors.violet['600']};
  --color-violet-700: ${colors.violet['700']};
  --color-violet-800: ${colors.violet['800']};
  --color-violet-900: ${colors.violet['900']};
  --color-violet-950: ${colors.violet['950']};

  --color-purple-25: ${colors.purple['25']};
  --color-purple-50: ${colors.purple['50']};
  --color-purple-100: ${colors.purple['100']};
  --color-purple-200: ${colors.purple['200']};
  --color-purple-300: ${colors.purple['300']};
  --color-purple-400: ${colors.purple['400']};
  --color-purple-500: ${colors.purple['500']};
  --color-purple-600: ${colors.purple['600']};
  --color-purple-700: ${colors.purple['700']};
  --color-purple-800: ${colors.purple['800']};
  --color-purple-900: ${colors.purple['900']};
  --color-purple-950: ${colors.purple['950']};

  --color-fuchsia-25: ${colors.fuchsia['25']};
  --color-fuchsia-50: ${colors.fuchsia['50']};
  --color-fuchsia-100: ${colors.fuchsia['100']};
  --color-fuchsia-200: ${colors.fuchsia['200']};
  --color-fuchsia-300: ${colors.fuchsia['300']};
  --color-fuchsia-400: ${colors.fuchsia['400']};
  --color-fuchsia-500: ${colors.fuchsia['500']};
  --color-fuchsia-600: ${colors.fuchsia['600']};
  --color-fuchsia-700: ${colors.fuchsia['700']};
  --color-fuchsia-800: ${colors.fuchsia['800']};
  --color-fuchsia-900: ${colors.fuchsia['900']};
  --color-fuchsia-950: ${colors.fuchsia['950']};

  --color-pink-25: ${colors.pink['25']};
  --color-pink-50: ${colors.pink['50']};
  --color-pink-100: ${colors.pink['100']};
  --color-pink-200: ${colors.pink['200']};
  --color-pink-300: ${colors.pink['300']};
  --color-pink-400: ${colors.pink['400']};
  --color-pink-500: ${colors.pink['500']};
  --color-pink-600: ${colors.pink['600']};
  --color-pink-700: ${colors.pink['700']};
  --color-pink-800: ${colors.pink['800']};
  --color-pink-900: ${colors.pink['900']};
  --color-pink-950: ${colors.pink['950']};

  --color-rose-25: ${colors.rose['25']};
  --color-rose-50: ${colors.rose['50']};
  --color-rose-100: ${colors.rose['100']};
  --color-rose-200: ${colors.rose['200']};
  --color-rose-300: ${colors.rose['300']};
  --color-rose-400: ${colors.rose['400']};
  --color-rose-500: ${colors.rose['500']};
  --color-rose-600: ${colors.rose['600']};
  --color-rose-700: ${colors.rose['700']};
  --color-rose-800: ${colors.rose['800']};
  --color-rose-900: ${colors.rose['900']};
  --color-rose-950: ${colors.rose['950']};

  --color-orange-dark-25: ${colors.orangeDark['25']};
  --color-orange-dark-50: ${colors.orangeDark['50']};
  --color-orange-dark-100: ${colors.orangeDark['100']};
  --color-orange-dark-200: ${colors.orangeDark['200']};
  --color-orange-dark-300: ${colors.orangeDark['300']};
  --color-orange-dark-400: ${colors.orangeDark['400']};
  --color-orange-dark-500: ${colors.orangeDark['500']};
  --color-orange-dark-600: ${colors.orangeDark['600']};
  --color-orange-dark-700: ${colors.orangeDark['700']};
  --color-orange-dark-800: ${colors.orangeDark['800']};
  --color-orange-dark-900: ${colors.orangeDark['900']};
  --color-orange-dark-950: ${colors.orangeDark['950']};

  --color-orange-25: ${colors.orange['25']};
  --color-orange-50: ${colors.orange['50']};
  --color-orange-100: ${colors.orange['100']};
  --color-orange-200: ${colors.orange['200']};
  --color-orange-300: ${colors.orange['300']};
  --color-orange-400: ${colors.orange['400']};
  --color-orange-500: ${colors.orange['500']};
  --color-orange-600: ${colors.orange['600']};
  --color-orange-700: ${colors.orange['700']};
  --color-orange-800: ${colors.orange['800']};
  --color-orange-900: ${colors.orange['900']};
  --color-orange-950: ${colors.orange['950']};

  --color-yellow-25: ${colors.yellow['25']};
  --color-yellow-50: ${colors.yellow['50']};
  --color-yellow-100: ${colors.yellow['100']};
  --color-yellow-200: ${colors.yellow['200']};
  --color-yellow-300: ${colors.yellow['300']};
  --color-yellow-400: ${colors.yellow['400']};
  --color-yellow-500: ${colors.yellow['500']};
  --color-yellow-600: ${colors.yellow['600']};
  --color-yellow-700: ${colors.yellow['700']};
  --color-yellow-800: ${colors.yellow['800']};
  --color-yellow-900: ${colors.yellow['900']};
  --color-yellow-950: ${colors.yellow['950']};
`.trim();

// ─── Tailwind colors extension ─────────────────────────────────────────────────
// Usage in tailwind.config.ts:
//   import { tailwindColors } from './src/tokens/colors'
//   export default { theme: { extend: { colors: tailwindColors } } }

const cssVar = (name: string) => `var(${name})`;

export const tailwindColors = {
  transparent: 'transparent',
  current: 'currentColor',
  white: cssVar('--color-base-white'),
  black: cssVar('--color-base-black'),
  gray: {
    '25': cssVar('--color-gray-25'),
    '50': cssVar('--color-gray-50'),
    '100': cssVar('--color-gray-100'),
    '200': cssVar('--color-gray-200'),
    '300': cssVar('--color-gray-300'),
    '400': cssVar('--color-gray-400'),
    '500': cssVar('--color-gray-500'),
    '600': cssVar('--color-gray-600'),
    '700': cssVar('--color-gray-700'),
    '800': cssVar('--color-gray-800'),
    '900': cssVar('--color-gray-900'),
    '950': cssVar('--color-gray-950'),
  },
  'gray-dark': {
    '25': cssVar('--color-gray-dark-25'),
    '50': cssVar('--color-gray-dark-50'),
    '100': cssVar('--color-gray-dark-100'),
    '200': cssVar('--color-gray-dark-200'),
    '300': cssVar('--color-gray-dark-300'),
    '400': cssVar('--color-gray-dark-400'),
    '500': cssVar('--color-gray-dark-500'),
    '600': cssVar('--color-gray-dark-600'),
    '700': cssVar('--color-gray-dark-700'),
    '800': cssVar('--color-gray-dark-800'),
    '900': cssVar('--color-gray-dark-900'),
    '950': cssVar('--color-gray-dark-950'),
  },
  'gray-dark-alpha': {
    '25': cssVar('--color-gray-dark-alpha-25'),
    '50': cssVar('--color-gray-dark-alpha-50'),
    '100': cssVar('--color-gray-dark-alpha-100'),
    '200': cssVar('--color-gray-dark-alpha-200'),
    '300': cssVar('--color-gray-dark-alpha-300'),
    '400': cssVar('--color-gray-dark-alpha-400'),
    '500': cssVar('--color-gray-dark-alpha-500'),
    '600': cssVar('--color-gray-dark-alpha-600'),
    '700': cssVar('--color-gray-dark-alpha-700'),
    '800': cssVar('--color-gray-dark-alpha-800'),
    '900': cssVar('--color-gray-dark-alpha-900'),
    '950': cssVar('--color-gray-dark-alpha-950'),
  },
  brand: {
    '25': cssVar('--color-brand-25'),
    '50': cssVar('--color-brand-50'),
    '100': cssVar('--color-brand-100'),
    '200': cssVar('--color-brand-200'),
    '300': cssVar('--color-brand-300'),
    '400': cssVar('--color-brand-400'),
    '500': cssVar('--color-brand-500'),
    '600': cssVar('--color-brand-600'),
    '700': cssVar('--color-brand-700'),
    '800': cssVar('--color-brand-800'),
    '900': cssVar('--color-brand-900'),
    '950': cssVar('--color-brand-950'),
  },
  primary: {
    '25': cssVar('--color-primary-25'),
    '50': cssVar('--color-primary-50'),
    '100': cssVar('--color-primary-100'),
    '200': cssVar('--color-primary-200'),
    '300': cssVar('--color-primary-300'),
    '400': cssVar('--color-primary-400'),
    '500': cssVar('--color-primary-500'),
    '600': cssVar('--color-primary-600'),
    '700': cssVar('--color-primary-700'),
    '800': cssVar('--color-primary-800'),
    '900': cssVar('--color-primary-900'),
    '950': cssVar('--color-primary-950'),
  },
  error: {
    '25': cssVar('--color-error-25'),
    '50': cssVar('--color-error-50'),
    '100': cssVar('--color-error-100'),
    '200': cssVar('--color-error-200'),
    '300': cssVar('--color-error-300'),
    '400': cssVar('--color-error-400'),
    '500': cssVar('--color-error-500'),
    '600': cssVar('--color-error-600'),
    '700': cssVar('--color-error-700'),
    '800': cssVar('--color-error-800'),
    '900': cssVar('--color-error-900'),
    '950': cssVar('--color-error-950'),
  },
  warning: {
    '25': cssVar('--color-warning-25'),
    '50': cssVar('--color-warning-50'),
    '100': cssVar('--color-warning-100'),
    '200': cssVar('--color-warning-200'),
    '300': cssVar('--color-warning-300'),
    '400': cssVar('--color-warning-400'),
    '500': cssVar('--color-warning-500'),
    '600': cssVar('--color-warning-600'),
    '700': cssVar('--color-warning-700'),
    '800': cssVar('--color-warning-800'),
    '900': cssVar('--color-warning-900'),
    '950': cssVar('--color-warning-950'),
  },
  success: {
    '25': cssVar('--color-success-25'),
    '50': cssVar('--color-success-50'),
    '100': cssVar('--color-success-100'),
    '200': cssVar('--color-success-200'),
    '300': cssVar('--color-success-300'),
    '400': cssVar('--color-success-400'),
    '500': cssVar('--color-success-500'),
    '600': cssVar('--color-success-600'),
    '700': cssVar('--color-success-700'),
    '800': cssVar('--color-success-800'),
    '900': cssVar('--color-success-900'),
    '950': cssVar('--color-success-950'),
  },
  'gray-blue': {
    '25': cssVar('--color-gray-blue-25'),
    '50': cssVar('--color-gray-blue-50'),
    '100': cssVar('--color-gray-blue-100'),
    '200': cssVar('--color-gray-blue-200'),
    '300': cssVar('--color-gray-blue-300'),
    '400': cssVar('--color-gray-blue-400'),
    '500': cssVar('--color-gray-blue-500'),
    '600': cssVar('--color-gray-blue-600'),
    '700': cssVar('--color-gray-blue-700'),
    '800': cssVar('--color-gray-blue-800'),
    '900': cssVar('--color-gray-blue-900'),
    '950': cssVar('--color-gray-blue-950'),
  },
  'gray-cool': {
    '25': cssVar('--color-gray-cool-25'),
    '50': cssVar('--color-gray-cool-50'),
    '100': cssVar('--color-gray-cool-100'),
    '200': cssVar('--color-gray-cool-200'),
    '300': cssVar('--color-gray-cool-300'),
    '400': cssVar('--color-gray-cool-400'),
    '500': cssVar('--color-gray-cool-500'),
    '600': cssVar('--color-gray-cool-600'),
    '700': cssVar('--color-gray-cool-700'),
    '800': cssVar('--color-gray-cool-800'),
    '900': cssVar('--color-gray-cool-900'),
    '950': cssVar('--color-gray-cool-950'),
  },
  'gray-modern': {
    '25': cssVar('--color-gray-modern-25'),
    '50': cssVar('--color-gray-modern-50'),
    '100': cssVar('--color-gray-modern-100'),
    '200': cssVar('--color-gray-modern-200'),
    '300': cssVar('--color-gray-modern-300'),
    '400': cssVar('--color-gray-modern-400'),
    '500': cssVar('--color-gray-modern-500'),
    '600': cssVar('--color-gray-modern-600'),
    '700': cssVar('--color-gray-modern-700'),
    '800': cssVar('--color-gray-modern-800'),
    '900': cssVar('--color-gray-modern-900'),
    '950': cssVar('--color-gray-modern-950'),
  },
  'gray-neutral': {
    '25': cssVar('--color-gray-neutral-25'),
    '50': cssVar('--color-gray-neutral-50'),
    '100': cssVar('--color-gray-neutral-100'),
    '200': cssVar('--color-gray-neutral-200'),
    '300': cssVar('--color-gray-neutral-300'),
    '400': cssVar('--color-gray-neutral-400'),
    '500': cssVar('--color-gray-neutral-500'),
    '600': cssVar('--color-gray-neutral-600'),
    '700': cssVar('--color-gray-neutral-700'),
    '800': cssVar('--color-gray-neutral-800'),
    '900': cssVar('--color-gray-neutral-900'),
    '950': cssVar('--color-gray-neutral-950'),
  },
  'gray-iron': {
    '25': cssVar('--color-gray-iron-25'),
    '50': cssVar('--color-gray-iron-50'),
    '100': cssVar('--color-gray-iron-100'),
    '200': cssVar('--color-gray-iron-200'),
    '300': cssVar('--color-gray-iron-300'),
    '400': cssVar('--color-gray-iron-400'),
    '500': cssVar('--color-gray-iron-500'),
    '600': cssVar('--color-gray-iron-600'),
    '700': cssVar('--color-gray-iron-700'),
    '800': cssVar('--color-gray-iron-800'),
    '900': cssVar('--color-gray-iron-900'),
    '950': cssVar('--color-gray-iron-950'),
  },
  'gray-true': {
    '25': cssVar('--color-gray-true-25'),
    '50': cssVar('--color-gray-true-50'),
    '100': cssVar('--color-gray-true-100'),
    '200': cssVar('--color-gray-true-200'),
    '300': cssVar('--color-gray-true-300'),
    '400': cssVar('--color-gray-true-400'),
    '500': cssVar('--color-gray-true-500'),
    '600': cssVar('--color-gray-true-600'),
    '700': cssVar('--color-gray-true-700'),
    '800': cssVar('--color-gray-true-800'),
    '900': cssVar('--color-gray-true-900'),
    '950': cssVar('--color-gray-true-950'),
  },
  'gray-warm': {
    '25': cssVar('--color-gray-warm-25'),
    '50': cssVar('--color-gray-warm-50'),
    '100': cssVar('--color-gray-warm-100'),
    '200': cssVar('--color-gray-warm-200'),
    '300': cssVar('--color-gray-warm-300'),
    '400': cssVar('--color-gray-warm-400'),
    '500': cssVar('--color-gray-warm-500'),
    '600': cssVar('--color-gray-warm-600'),
    '700': cssVar('--color-gray-warm-700'),
    '800': cssVar('--color-gray-warm-800'),
    '900': cssVar('--color-gray-warm-900'),
    '950': cssVar('--color-gray-warm-950'),
  },
  moss: {
    '25': cssVar('--color-moss-25'),
    '50': cssVar('--color-moss-50'),
    '100': cssVar('--color-moss-100'),
    '200': cssVar('--color-moss-200'),
    '300': cssVar('--color-moss-300'),
    '400': cssVar('--color-moss-400'),
    '500': cssVar('--color-moss-500'),
    '600': cssVar('--color-moss-600'),
    '700': cssVar('--color-moss-700'),
    '800': cssVar('--color-moss-800'),
    '900': cssVar('--color-moss-900'),
    '950': cssVar('--color-moss-950'),
  },
  'green-light': {
    '25': cssVar('--color-green-light-25'),
    '50': cssVar('--color-green-light-50'),
    '100': cssVar('--color-green-light-100'),
    '200': cssVar('--color-green-light-200'),
    '300': cssVar('--color-green-light-300'),
    '400': cssVar('--color-green-light-400'),
    '500': cssVar('--color-green-light-500'),
    '600': cssVar('--color-green-light-600'),
    '700': cssVar('--color-green-light-700'),
    '800': cssVar('--color-green-light-800'),
    '900': cssVar('--color-green-light-900'),
    '950': cssVar('--color-green-light-950'),
  },
  green: {
    '25': cssVar('--color-green-25'),
    '50': cssVar('--color-green-50'),
    '100': cssVar('--color-green-100'),
    '200': cssVar('--color-green-200'),
    '300': cssVar('--color-green-300'),
    '400': cssVar('--color-green-400'),
    '500': cssVar('--color-green-500'),
    '600': cssVar('--color-green-600'),
    '700': cssVar('--color-green-700'),
    '800': cssVar('--color-green-800'),
    '900': cssVar('--color-green-900'),
    '950': cssVar('--color-green-950'),
  },
  teal: {
    '25': cssVar('--color-teal-25'),
    '50': cssVar('--color-teal-50'),
    '100': cssVar('--color-teal-100'),
    '200': cssVar('--color-teal-200'),
    '300': cssVar('--color-teal-300'),
    '400': cssVar('--color-teal-400'),
    '500': cssVar('--color-teal-500'),
    '600': cssVar('--color-teal-600'),
    '700': cssVar('--color-teal-700'),
    '800': cssVar('--color-teal-800'),
    '900': cssVar('--color-teal-900'),
    '950': cssVar('--color-teal-950'),
  },
  cyan: {
    '25': cssVar('--color-cyan-25'),
    '50': cssVar('--color-cyan-50'),
    '100': cssVar('--color-cyan-100'),
    '200': cssVar('--color-cyan-200'),
    '300': cssVar('--color-cyan-300'),
    '400': cssVar('--color-cyan-400'),
    '500': cssVar('--color-cyan-500'),
    '600': cssVar('--color-cyan-600'),
    '700': cssVar('--color-cyan-700'),
    '800': cssVar('--color-cyan-800'),
    '900': cssVar('--color-cyan-900'),
    '950': cssVar('--color-cyan-950'),
  },
  'blue-light': {
    '25': cssVar('--color-blue-light-25'),
    '50': cssVar('--color-blue-light-50'),
    '100': cssVar('--color-blue-light-100'),
    '200': cssVar('--color-blue-light-200'),
    '300': cssVar('--color-blue-light-300'),
    '400': cssVar('--color-blue-light-400'),
    '500': cssVar('--color-blue-light-500'),
    '600': cssVar('--color-blue-light-600'),
    '700': cssVar('--color-blue-light-700'),
    '800': cssVar('--color-blue-light-800'),
    '900': cssVar('--color-blue-light-900'),
    '950': cssVar('--color-blue-light-950'),
  },
  blue: {
    '25': cssVar('--color-blue-25'),
    '50': cssVar('--color-blue-50'),
    '100': cssVar('--color-blue-100'),
    '200': cssVar('--color-blue-200'),
    '300': cssVar('--color-blue-300'),
    '400': cssVar('--color-blue-400'),
    '500': cssVar('--color-blue-500'),
    '600': cssVar('--color-blue-600'),
    '700': cssVar('--color-blue-700'),
    '800': cssVar('--color-blue-800'),
    '900': cssVar('--color-blue-900'),
    '950': cssVar('--color-blue-950'),
  },
  'blue-dark': {
    '25': cssVar('--color-blue-dark-25'),
    '50': cssVar('--color-blue-dark-50'),
    '100': cssVar('--color-blue-dark-100'),
    '200': cssVar('--color-blue-dark-200'),
    '300': cssVar('--color-blue-dark-300'),
    '400': cssVar('--color-blue-dark-400'),
    '500': cssVar('--color-blue-dark-500'),
    '600': cssVar('--color-blue-dark-600'),
    '700': cssVar('--color-blue-dark-700'),
    '800': cssVar('--color-blue-dark-800'),
    '900': cssVar('--color-blue-dark-900'),
    '950': cssVar('--color-blue-dark-950'),
  },
  indigo: {
    '25': cssVar('--color-indigo-25'),
    '50': cssVar('--color-indigo-50'),
    '100': cssVar('--color-indigo-100'),
    '200': cssVar('--color-indigo-200'),
    '300': cssVar('--color-indigo-300'),
    '400': cssVar('--color-indigo-400'),
    '500': cssVar('--color-indigo-500'),
    '600': cssVar('--color-indigo-600'),
    '700': cssVar('--color-indigo-700'),
    '800': cssVar('--color-indigo-800'),
    '900': cssVar('--color-indigo-900'),
    '950': cssVar('--color-indigo-950'),
  },
  violet: {
    '25': cssVar('--color-violet-25'),
    '50': cssVar('--color-violet-50'),
    '100': cssVar('--color-violet-100'),
    '200': cssVar('--color-violet-200'),
    '300': cssVar('--color-violet-300'),
    '400': cssVar('--color-violet-400'),
    '500': cssVar('--color-violet-500'),
    '600': cssVar('--color-violet-600'),
    '700': cssVar('--color-violet-700'),
    '800': cssVar('--color-violet-800'),
    '900': cssVar('--color-violet-900'),
    '950': cssVar('--color-violet-950'),
  },
  purple: {
    '25': cssVar('--color-purple-25'),
    '50': cssVar('--color-purple-50'),
    '100': cssVar('--color-purple-100'),
    '200': cssVar('--color-purple-200'),
    '300': cssVar('--color-purple-300'),
    '400': cssVar('--color-purple-400'),
    '500': cssVar('--color-purple-500'),
    '600': cssVar('--color-purple-600'),
    '700': cssVar('--color-purple-700'),
    '800': cssVar('--color-purple-800'),
    '900': cssVar('--color-purple-900'),
    '950': cssVar('--color-purple-950'),
  },
  fuchsia: {
    '25': cssVar('--color-fuchsia-25'),
    '50': cssVar('--color-fuchsia-50'),
    '100': cssVar('--color-fuchsia-100'),
    '200': cssVar('--color-fuchsia-200'),
    '300': cssVar('--color-fuchsia-300'),
    '400': cssVar('--color-fuchsia-400'),
    '500': cssVar('--color-fuchsia-500'),
    '600': cssVar('--color-fuchsia-600'),
    '700': cssVar('--color-fuchsia-700'),
    '800': cssVar('--color-fuchsia-800'),
    '900': cssVar('--color-fuchsia-900'),
    '950': cssVar('--color-fuchsia-950'),
  },
  pink: {
    '25': cssVar('--color-pink-25'),
    '50': cssVar('--color-pink-50'),
    '100': cssVar('--color-pink-100'),
    '200': cssVar('--color-pink-200'),
    '300': cssVar('--color-pink-300'),
    '400': cssVar('--color-pink-400'),
    '500': cssVar('--color-pink-500'),
    '600': cssVar('--color-pink-600'),
    '700': cssVar('--color-pink-700'),
    '800': cssVar('--color-pink-800'),
    '900': cssVar('--color-pink-900'),
    '950': cssVar('--color-pink-950'),
  },
  rose: {
    '25': cssVar('--color-rose-25'),
    '50': cssVar('--color-rose-50'),
    '100': cssVar('--color-rose-100'),
    '200': cssVar('--color-rose-200'),
    '300': cssVar('--color-rose-300'),
    '400': cssVar('--color-rose-400'),
    '500': cssVar('--color-rose-500'),
    '600': cssVar('--color-rose-600'),
    '700': cssVar('--color-rose-700'),
    '800': cssVar('--color-rose-800'),
    '900': cssVar('--color-rose-900'),
    '950': cssVar('--color-rose-950'),
  },
  'orange-dark': {
    '25': cssVar('--color-orange-dark-25'),
    '50': cssVar('--color-orange-dark-50'),
    '100': cssVar('--color-orange-dark-100'),
    '200': cssVar('--color-orange-dark-200'),
    '300': cssVar('--color-orange-dark-300'),
    '400': cssVar('--color-orange-dark-400'),
    '500': cssVar('--color-orange-dark-500'),
    '600': cssVar('--color-orange-dark-600'),
    '700': cssVar('--color-orange-dark-700'),
    '800': cssVar('--color-orange-dark-800'),
    '900': cssVar('--color-orange-dark-900'),
    '950': cssVar('--color-orange-dark-950'),
  },
  orange: {
    '25': cssVar('--color-orange-25'),
    '50': cssVar('--color-orange-50'),
    '100': cssVar('--color-orange-100'),
    '200': cssVar('--color-orange-200'),
    '300': cssVar('--color-orange-300'),
    '400': cssVar('--color-orange-400'),
    '500': cssVar('--color-orange-500'),
    '600': cssVar('--color-orange-600'),
    '700': cssVar('--color-orange-700'),
    '800': cssVar('--color-orange-800'),
    '900': cssVar('--color-orange-900'),
    '950': cssVar('--color-orange-950'),
  },
  yellow: {
    '25': cssVar('--color-yellow-25'),
    '50': cssVar('--color-yellow-50'),
    '100': cssVar('--color-yellow-100'),
    '200': cssVar('--color-yellow-200'),
    '300': cssVar('--color-yellow-300'),
    '400': cssVar('--color-yellow-400'),
    '500': cssVar('--color-yellow-500'),
    '600': cssVar('--color-yellow-600'),
    '700': cssVar('--color-yellow-700'),
    '800': cssVar('--color-yellow-800'),
    '900': cssVar('--color-yellow-900'),
    '950': cssVar('--color-yellow-950'),
  },
} as const;
