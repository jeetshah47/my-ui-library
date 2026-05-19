import { type CSSProperties, type HTMLAttributes, type ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

// ─── X close icon ─────────────────────────────────────────────────────────────

function XCloseIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M9 3L3 9M3 3L9 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ─── Types ────────────────────────────────────────────────────────────────────

export type BadgeColor =
  | 'gray' | 'brand' | 'error' | 'warning' | 'success'
  | 'blue-light' | 'blue' | 'indigo' | 'purple' | 'pink'
  | 'orange' | 'gray-blue' | 'blue-gray'

export type BadgeSize = 'sm' | 'md' | 'lg'
export type BadgeType = 'pill' | 'badge' | 'badge-modern'

// Outer halo ring colors for badge-modern
const MODERN_RING: Record<BadgeColor, string> = {
  gray:           'var(--color-gray-100)',
  brand:          'var(--color-brand-100)',
  error:          'var(--color-error-100)',
  warning:        'var(--color-warning-100)',
  success:        'var(--color-success-100)',
  'blue-light':   'var(--color-blue-light-100)',
  blue:           'var(--color-blue-100)',
  indigo:         'var(--color-indigo-100)',
  purple:         'var(--color-purple-100)',
  pink:           'var(--color-pink-100)',
  orange:         'var(--color-orange-100)',
  'gray-blue':    'var(--color-gray-blue-100)',
  'blue-gray':    'var(--color-gray-cool-100)',
}

// ─── Variants ─────────────────────────────────────────────────────────────────

const badgeVariants = cva(
  'inline-flex items-center font-medium border whitespace-nowrap',
  {
    variants: {
      color: {
        gray:           'bg-gray-100 border-gray-200 text-gray-700',
        brand:          'bg-brand-50 border-brand-200 text-brand-700',
        error:          'bg-error-50 border-error-200 text-error-700',
        warning:        'bg-warning-50 border-warning-200 text-warning-700',
        success:        'bg-success-50 border-success-200 text-success-700',
        'blue-light':   'bg-blue-light-50 border-blue-light-200 text-blue-light-700',
        blue:           'bg-blue-50 border-blue-200 text-blue-700',
        indigo:         'bg-indigo-50 border-indigo-200 text-indigo-700',
        purple:         'bg-purple-50 border-purple-200 text-purple-700',
        pink:           'bg-pink-50 border-pink-200 text-pink-700',
        orange:         'bg-orange-50 border-orange-200 text-orange-700',
        'gray-blue':    'bg-gray-blue-50 border-gray-blue-200 text-gray-blue-700',
        'blue-gray':    'bg-gray-cool-50 border-gray-cool-200 text-gray-cool-700',
      },
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-sm',
      },
      type: {
        pill:           'rounded-full',
        badge:          '',
        'badge-modern': 'rounded-full',
      },
    },
    compoundVariants: [
      // Pill base padding
      { type: 'pill',         size: 'sm', class: 'px-2 py-0.5 gap-1' },
      { type: 'pill',         size: 'md', class: 'px-2.5 py-0.5 gap-1.5' },
      { type: 'pill',         size: 'lg', class: 'px-3 py-1 gap-1.5' },
      // Badge radius + padding
      { type: 'badge',        size: 'sm', class: 'rounded-sm px-1.5 py-0.5 gap-1' },
      { type: 'badge',        size: 'md', class: 'rounded-sm px-2 py-0.5 gap-1.5' },
      { type: 'badge',        size: 'lg', class: 'rounded-md px-2.5 py-1 gap-1.5' },
      // Badge modern (pill shape + ring via inline style)
      { type: 'badge-modern', size: 'sm', class: 'px-2 py-0.5 gap-1' },
      { type: 'badge-modern', size: 'md', class: 'px-2.5 py-0.5 gap-1.5' },
      { type: 'badge-modern', size: 'lg', class: 'px-3 py-1 gap-1.5' },
    ],
    defaultVariants: {
      color: 'gray',
      size: 'md',
      type: 'pill',
    },
  }
)

// ─── Props ────────────────────────────────────────────────────────────────────

export interface BadgeProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  iconOnly?: boolean
  onRemove?: () => void
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Badge({
  color = 'gray',
  size = 'md',
  type = 'pill',
  dot = false,
  leftIcon,
  rightIcon,
  iconOnly = false,
  onRemove,
  children,
  className,
  style,
  ...props
}: BadgeProps) {
  const resolvedColor = color ?? 'gray'
  const resolvedSize  = size ?? 'md'
  const resolvedType  = type ?? 'pill'

  const isPillShape = resolvedType === 'pill' || resolvedType === 'badge-modern'
  const iconSize    = resolvedSize === 'lg' ? 14 : 12
  const hasLeading  = dot || !!leftIcon

  // Reduce left padding when a leading dot/icon is present
  const leadingPadding = hasLeading && !iconOnly
    ? isPillShape
      ? ({ sm: 'pl-1.5', md: 'pl-2',   lg: 'pl-2.5' } as const)[resolvedSize]
      : ({ sm: 'pl-1',   md: 'pl-1.5', lg: 'pl-2'   } as const)[resolvedSize]
    : undefined

  // Reduce right padding when trailing icon / remove button is present
  const trailingPadding = !iconOnly && onRemove
    ? 'pr-0.5'
    : !iconOnly && rightIcon
    ? isPillShape
      ? ({ sm: 'pr-1.5', md: 'pr-2', lg: 'pr-2' } as const)[resolvedSize]
      : ({ sm: 'pr-1',   md: 'pr-1.5', lg: 'pr-1.5' } as const)[resolvedSize]
    : undefined

  // Icon-only: collapse to equal square-ish padding
  const iconOnlyPadding = iconOnly
    ? (resolvedSize === 'lg' ? 'p-1' : 'p-0.5')
    : undefined

  // badge-modern: outer halo ring via box-shadow
  const modernStyle: CSSProperties = resolvedType === 'badge-modern'
    ? { boxShadow: `0 0 0 4px ${MODERN_RING[resolvedColor]}`, ...style }
    : (style ?? {})

  return (
    <span
      className={cn(
        badgeVariants({ color: resolvedColor, size: resolvedSize, type: resolvedType }),
        leadingPadding,
        trailingPadding,
        iconOnlyPadding,
        className,
      )}
      style={modernStyle}
      {...props}
    >
      {dot && !iconOnly && (
        <span className="shrink-0 h-1.5 w-1.5 rounded-full bg-current" />
      )}
      {leftIcon && (
        <span className="shrink-0 leading-none">{leftIcon}</span>
      )}
      {!iconOnly && children}
      {!iconOnly && rightIcon && (
        <span className="shrink-0 leading-none">{rightIcon}</span>
      )}
      {!iconOnly && onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="shrink-0 rounded-full p-0.5 hover:bg-black/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current"
          aria-label="Remove"
        >
          <XCloseIcon size={iconSize} />
        </button>
      )}
    </span>
  )
}
