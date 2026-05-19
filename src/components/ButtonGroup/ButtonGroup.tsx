import { forwardRef, type ButtonHTMLAttributes, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

// ─── ButtonGroupItem ──────────────────────────────────────────────────────────

export interface ButtonGroupItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  current?: boolean
  leftIcon?: ReactNode
  iconOnly?: boolean
  dot?: boolean
}

export const ButtonGroupItem = forwardRef<HTMLButtonElement, ButtonGroupItemProps>(
  ({ current, leftIcon, iconOnly, dot, children, disabled, className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      disabled={disabled}
      aria-pressed={current}
      className={cn(
        'relative inline-flex items-center justify-center min-h-10 py-2',
        'text-sm font-semibold whitespace-nowrap select-none',
        'border-r border-gray-300 last:border-r-0',
        'transition-colors duration-150',
        current ? 'bg-gray-50 text-gray-800' : 'bg-white text-gray-700',
        !disabled && 'hover:bg-gray-50 hover:text-gray-800',
        'focus-visible:outline-none focus-visible:z-10',
        'focus-visible:shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_var(--color-brand-500)]',
        'disabled:pointer-events-none disabled:text-gray-400',
        iconOnly ? 'w-10 px-3' : leftIcon ? 'gap-1.5 pl-3.5 pr-4' : dot ? 'gap-2 px-4' : 'px-4',
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            'shrink-0 h-2 w-2 rounded-full',
            disabled ? 'bg-gray-300' : current ? 'bg-brand-500' : 'bg-gray-400'
          )}
        />
      )}
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {!iconOnly && children && <span>{children}</span>}
    </button>
  )
)
ButtonGroupItem.displayName = 'ButtonGroupItem'

// ─── ButtonGroup ──────────────────────────────────────────────────────────────

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function ButtonGroup({ children, className, ...props }: ButtonGroupProps) {
  return (
    <div
      role="group"
      className={cn('inline-flex overflow-hidden rounded-md border border-gray-300 shadow-xs', className)}
      {...props}
    >
      {children}
    </div>
  )
}
