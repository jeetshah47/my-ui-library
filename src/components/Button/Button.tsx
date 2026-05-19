import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

// ─── Spinner ─────────────────────────────────────────────────────────────────

function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn('animate-spin', className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="10" cy="10" r="8"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M10 2a8 8 0 018 8h-2.5A5.5 5.5 0 0010 4.5V2z"
      />
    </svg>
  )
}

// ─── Variants ─────────────────────────────────────────────────────────────────

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center font-semibold whitespace-nowrap',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-brand-500',
    'disabled:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-brand-600 text-white border border-brand-600 shadow-xs',
          'hover:bg-brand-700 hover:border-brand-700',
          'disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 disabled:shadow-none',
        ],
        secondary: [
          'bg-white text-gray-700 border border-gray-300 shadow-xs',
          'hover:bg-gray-50 hover:text-gray-800',
          'disabled:text-gray-300 disabled:border-gray-200 disabled:shadow-none',
        ],
        tertiary: [
          'bg-transparent text-gray-700',
          'hover:bg-gray-50 hover:text-gray-800',
          'disabled:text-gray-300',
        ],
        link: [
          'bg-transparent text-brand-700 underline-offset-4',
          'hover:text-brand-800 hover:underline',
          'disabled:text-gray-300',
        ],
        'link-gray': [
          'bg-transparent text-gray-600 underline-offset-4',
          'hover:text-gray-700 hover:underline',
          'disabled:text-gray-300',
        ],
      },

      destructive: {
        true: '', // overridden by compoundVariants
      },

      size: {
        sm: 'h-9 px-3 py-2 text-sm rounded-md gap-1',
        md: 'h-10 px-3.5 py-2.5 text-sm rounded-md gap-1',
        lg: 'h-11 px-4 py-2.5 text-md rounded-lg gap-1.5',
        xl: 'h-12 px-[1.125rem] py-3 text-md rounded-lg gap-1.5',
      },
    },

    compoundVariants: [
      // ── Destructive color overrides ───────────────────────────────────────
      {
        variant: 'primary',
        destructive: true,
        class: [
          'bg-error-600 text-white border-error-600',
          'hover:bg-error-700 hover:border-error-700',
          'focus-visible:ring-error-500',
          'disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200',
        ],
      },
      {
        variant: 'secondary',
        destructive: true,
        class: [
          'text-error-700 border-error-300',
          'hover:bg-error-50 hover:text-error-800',
          'focus-visible:ring-error-500',
        ],
      },
      {
        variant: 'tertiary',
        destructive: true,
        class: [
          'text-error-700',
          'hover:bg-error-50 hover:text-error-800',
          'focus-visible:ring-error-500',
        ],
      },
      {
        variant: 'link',
        destructive: true,
        class: ['text-error-700 hover:text-error-800', 'focus-visible:ring-error-500'],
      },
    ],

    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

// Icon-only square sizes (not a CVA variant — applied conditionally)
const ICON_ONLY_SIZE: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'w-9 px-0',
  md: 'w-10 px-0',
  lg: 'w-11 px-0',
  xl: 'w-12 px-0',
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof buttonVariants>, 'destructive'> {
  destructive?: boolean
  asChild?: boolean
  loading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  iconOnly?: boolean
}

// ─── Component ────────────────────────────────────────────────────────────────

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size = 'md',
      destructive,
      asChild = false,
      loading = false,
      iconOnly = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    const isDisabled = disabled || loading

    return (
      <Comp
        ref={ref}
        disabled={isDisabled}
        data-loading={loading || undefined}
        className={cn(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          buttonVariants({ variant, size, destructive: destructive as any }),
          iconOnly && ICON_ONLY_SIZE[size ?? 'md'],
          className
        )}
        {...props}
      >
        {loading ? (
          <Spinner className={iconOnly ? 'h-5 w-5' : 'h-5 w-5'} />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}

        {!iconOnly && children && (
          <span>{children}</span>
        )}

        {!loading && rightIcon && !iconOnly && (
          <span className="shrink-0">{rightIcon}</span>
        )}
      </Comp>
    )
  }
)

Button.displayName = 'Button'
