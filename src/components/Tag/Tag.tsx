import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

// ─── X close icon ─────────────────────────────────────────────────────────────

function XCloseIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Check icon (for checkbox) ────────────────────────────────────────────────

function CheckIcon({ size = 10 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M2 5L4 7L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Types ────────────────────────────────────────────────────────────────────

export type TagSize = 'sm' | 'md' | 'lg'

// Padding lookup — each entry is { l, r, y } in px
const PADDING = {
  sm: { base: { l: 8, r: 8, y: 3 }, dot: { l: 6 }, icon: { l: 4 }, trailing: { r: 4 }, checkbox: { l: 5 } },
  md: { base: { l: 9, r: 9, y: 2 }, dot: { l: 7 }, icon: { l: 5 }, trailing: { r: 4 }, checkbox: { l: 4 } },
  lg: { base: { l: 10, r: 10, y: 4 }, dot: { l: 9 }, icon: { l: 7 }, trailing: { r: 4 }, checkbox: { l: 7 } },
} as const

// ─── Props ────────────────────────────────────────────────────────────────────

export interface TagProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'onChange'> {
  size?: TagSize
  /** Small dot indicator to the left of the label */
  dot?: boolean
  /** Avatar, flag or icon placed to the left (reduces left padding) */
  leftIcon?: ReactNode
  /** Shows a dismiss × button */
  onRemove?: () => void
  /** Shows a small count badge to the right */
  count?: number
  /** Shows a checkbox on the left; tag acts as its label */
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

// ─── Component ────────────────────────────────────────────────────────────────

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      size = 'md',
      dot = false,
      leftIcon,
      onRemove,
      count,
      checked,
      onCheckedChange,
      children,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const pd = PADDING[size]
    const hasCheckbox = checked !== undefined
    const hasTrailing = onRemove != null || count != null

    // Left padding priority: checkbox > leftIcon > dot > base
    const pl = hasCheckbox
      ? pd.checkbox.l
      : leftIcon
      ? pd.icon.l
      : dot
      ? pd.dot.l
      : pd.base.l

    const pr = hasTrailing ? pd.trailing.r : pd.base.r

    const iconSize  = size === 'sm' ? 16 : size === 'md' ? 18 : 20
    const closeSize = size === 'lg' ? 16 : 14

    const handleClick = hasCheckbox
      ? (e: React.MouseEvent<HTMLSpanElement>) => {
          onCheckedChange?.(!checked)
          onClick?.(e)
        }
      : onClick

    return (
      <span
        ref={ref}
        role={hasCheckbox ? 'checkbox' : undefined}
        aria-checked={hasCheckbox ? checked : undefined}
        tabIndex={hasCheckbox ? 0 : undefined}
        onKeyDown={
          hasCheckbox
            ? (e) => { if (e.key === ' ' || e.key === 'Enter') onCheckedChange?.(!checked) }
            : undefined
        }
        onClick={handleClick}
        className={cn(
          'inline-flex items-center gap-[3px] whitespace-nowrap',
          'bg-white border border-gray-200 text-gray-700 font-medium',
          'rounded-sm',
          size === 'sm' && 'h-6 text-xs',
          size === 'md' && 'h-6 text-sm',
          size === 'lg' && 'h-7 text-sm',
          hasCheckbox && 'cursor-pointer select-none',
          className,
        )}
        style={{ paddingLeft: pl, paddingRight: pr, paddingTop: pd.base.y, paddingBottom: pd.base.y }}
        {...props}
      >
        {/* Checkbox */}
        {hasCheckbox && (
          <span
            className={cn(
              'shrink-0 inline-flex items-center justify-center rounded-[3px] border',
              size === 'sm' && 'h-3 w-3',
              size === 'md' && 'h-3.5 w-3.5',
              size === 'lg' && 'h-4 w-4',
              checked
                ? 'bg-brand-600 border-brand-600 text-white'
                : 'bg-white border-gray-300 text-transparent',
            )}
            aria-hidden="true"
          >
            <CheckIcon size={size === 'lg' ? 11 : 9} />
          </span>
        )}

        {/* Dot */}
        {dot && !hasCheckbox && (
          <span className={cn(
            'shrink-0 rounded-full bg-brand-500',
            size === 'sm' && 'h-1.5 w-1.5',
            size === 'md' && 'h-1.5 w-1.5',
            size === 'lg' && 'h-2 w-2',
          )} />
        )}

        {/* Left icon (avatar / country flag / custom) */}
        {leftIcon && (
          <span className="shrink-0 leading-none" style={{ width: iconSize, height: iconSize }}>
            {leftIcon}
          </span>
        )}

        {/* Label */}
        <span className="truncate">{children}</span>

        {/* Count badge */}
        {count != null && (
          <span className={cn(
            'shrink-0 inline-flex items-center justify-center',
            'bg-gray-100 text-gray-600 font-medium tabular-nums rounded-[3px]',
            size === 'sm' && 'h-4 min-w-[16px] px-1 text-[11px]',
            size === 'md' && 'h-[18px] min-w-[19px] px-[5px] text-xs',
            size === 'lg' && 'h-5 min-w-[21px] px-1.5 text-xs',
          )}>
            {count}
          </span>
        )}

        {/* X close */}
        {onRemove && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onRemove() }}
            className="shrink-0 inline-flex items-center justify-center rounded-sm p-[3px] text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-500"
            aria-label="Remove"
          >
            <XCloseIcon size={closeSize} />
          </button>
        )}
      </span>
    )
  }
)
Tag.displayName = 'Tag'
