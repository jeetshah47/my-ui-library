import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

// ─── Spinner ─────────────────────────────────────────────────────────────────

function Spinner({ className }: { className?: string }) {
  return (
    <svg className={cn('animate-spin', className)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" aria-hidden="true">
      <circle className="opacity-25" cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2.5" />
      <path className="opacity-75" fill="currentColor" d="M10 2a8 8 0 018 8h-2.5A5.5 5.5 0 0010 4.5V2z" />
    </svg>
  )
}

// ─── Brand icons ─────────────────────────────────────────────────────────────

function GoogleIcon({ colorful, size = 24 }: { colorful?: boolean; size?: number }) {
  if (colorful) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    )
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09zM12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23zM5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84zM12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="currentColor"
      />
    </svg>
  )
}

function FacebookIcon({ colorful, size = 24 }: { colorful?: boolean; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        fill={colorful ? '#1877F2' : 'currentColor'}
      />
    </svg>
  )
}

function AppleIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52 4.17 4.17 0 0 0-1 3.09 3.69 3.69 0 0 0 2.94-1.42zm2.52 7.44a4.51 4.51 0 0 1 2.16-3.81 4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91s-2-.89-3.3-.87a4.92 4.92 0 0 0-4.14 2.53C2.93 12.45 4.24 17 6 19.47c.8 1.21 1.8 2.58 3.12 2.53s1.75-.82 3.28-.82 2 .82 3.3.79 2.22-1.24 3.06-2.45a11 11 0 0 0 1.38-2.85 4.41 4.41 0 0 1-2.68-4.04z" />
    </svg>
  )
}

function TwitterIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FigmaIcon({ colorful, size = 24 }: { colorful?: boolean; size?: number }) {
  if (colorful) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 24c2.208 0 4-1.792 4-4v-4H8a4 4 0 0 0 0 8z" fill="#0ACF83" />
        <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8a4 4 0 0 1-4-4z" fill="#A259FF" />
        <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8A4 4 0 0 1 4 4z" fill="#F24E1E" />
        <path d="M12 0h4a4 4 0 0 1 0 8h-4V0z" fill="#FF7262" />
        <path d="M20 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" fill="#1ABCFE" />
      </svg>
    )
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 24c2.208 0 4-1.792 4-4v-4H8a4 4 0 0 0 0 8zM4 12c0-2.208 1.792-4 4-4h4v8H8a4 4 0 0 1-4-4zM4 4c0-2.208 1.792-4 4-4h4v8H8A4 4 0 0 1 4 4zM12 0h4a4 4 0 0 1 0 8h-4V0zM20 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
    </svg>
  )
}

function DribbbleIcon({ colorful, size = 24 }: { colorful?: boolean; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.017-8.04 6.404 1.73 1.35 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.073c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.176zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702C17.0 3.74 14.62 2.754 12 2.754c-.825 0-1.63.1-2.4.285v.013zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"
        fill={colorful ? '#EA4C89' : 'currentColor'}
      />
    </svg>
  )
}

// ─── Provider config ──────────────────────────────────────────────────────────

export type SocialProvider = 'google' | 'facebook' | 'apple' | 'twitter' | 'figma' | 'dribbble'
export type SocialTheme = 'brand' | 'color' | 'gray'

const PROVIDER_NAME: Record<SocialProvider, string> = {
  google: 'Google',
  facebook: 'Facebook',
  apple: 'Apple',
  twitter: 'Twitter',
  figma: 'Figma',
  dribbble: 'Dribbble',
}

// Color variant: white bg + colored icon
const WHITE_THEME = [
  'bg-white text-gray-700 border border-gray-300 shadow-xs',
  'hover:bg-gray-50 hover:text-gray-800',
  'focus-visible:ring-brand-500',
].join(' ')

// Brand theme: each provider has its own bg; Google is always white
const BRAND_THEME: Record<SocialProvider, string> = {
  google:   WHITE_THEME,
  facebook: 'bg-[#1877F2] text-white border-2 border-[rgba(255,255,255,0.12)] shadow-xs hover:bg-[#166FE5] focus-visible:ring-[#1877F2]',
  apple:    'bg-black text-white border-2 border-[rgba(255,255,255,0.12)] shadow-xs hover:bg-neutral-800 focus-visible:ring-gray-800',
  twitter:  'bg-black text-white border-2 border-[rgba(255,255,255,0.12)] shadow-xs hover:bg-neutral-800 focus-visible:ring-gray-800',
  figma:    'bg-black text-white border-2 border-[rgba(255,255,255,0.12)] shadow-xs hover:bg-neutral-800 focus-visible:ring-gray-800',
  dribbble: 'bg-[#EA4C89] text-white border-2 border-[rgba(255,255,255,0.12)] shadow-xs hover:bg-[#E62872] focus-visible:ring-[#EA4C89]',
}

function getIcon(provider: SocialProvider, colorful: boolean, size: number): ReactNode {
  switch (provider) {
    case 'google':   return <GoogleIcon colorful={colorful} size={size} />
    case 'facebook': return <FacebookIcon colorful={colorful} size={size} />
    case 'apple':    return <AppleIcon size={size} />
    case 'twitter':  return <TwitterIcon size={size} />
    case 'figma':    return <FigmaIcon colorful={colorful} size={size} />
    case 'dribbble': return <DribbbleIcon colorful={colorful} size={size} />
  }
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SocialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  provider: SocialProvider
  theme?: SocialTheme
  iconOnly?: boolean
  loading?: boolean
}

// ─── Component ────────────────────────────────────────────────────────────────

export const SocialButton = forwardRef<HTMLButtonElement, SocialButtonProps>(
  (
    {
      provider,
      theme = 'color',
      iconOnly = false,
      loading = false,
      disabled,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading
    // icon is colorful when theme=color, or when theme=brand and google (always white bg)
    const colorful = theme === 'color' || (theme === 'brand' && provider === 'google')
    const icon = loading
      ? <Spinner className="h-6 w-6 shrink-0" />
      : <span className="shrink-0">{getIcon(provider, colorful, 24)}</span>

    const themeClasses = theme === 'brand' ? BRAND_THEME[provider] : WHITE_THEME

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        aria-label={iconOnly ? `Sign in with ${PROVIDER_NAME[provider]}` : undefined}
        className={cn(
          'inline-flex items-center justify-center',
          'h-11 rounded-md text-md font-semibold whitespace-nowrap',
          'transition-colors duration-150',
          'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:bg-gray-100 disabled:text-gray-400 disabled:border disabled:border-gray-200 disabled:shadow-none',
          iconOnly ? 'w-11 px-0 gap-0' : 'px-4 py-2.5 gap-3',
          themeClasses,
          className
        )}
        {...props}
      >
        {icon}
        {!iconOnly && (
          <span>{children ?? `Sign in with ${PROVIDER_NAME[provider]}`}</span>
        )}
      </button>
    )
  }
)
SocialButton.displayName = 'SocialButton'
