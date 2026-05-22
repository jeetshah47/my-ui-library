import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

// ─── Types ────────────────────────────────────────────────────────────────────

export type InputSize = 'sm' | 'md'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** sm = 40 px tall, md = 44 px tall (default) */
  size?: InputSize
  label?: string
  hint?: string
  /** Shown below the field when isError=true */
  errorMessage?: string
  isError?: boolean
  /** 20×20 icon rendered on the left edge of the field */
  leadingIcon?: ReactNode
  /** Custom 16×16 icon on the right edge — overrides helpIcon and the auto alert-circle */
  trailingIcon?: ReactNode
  /** Show the help-circle (?) icon on the right when the field is not in an error state */
  helpIcon?: boolean
  /** Applied to the outer wrapper div */
  wrapperClassName?: string
}

// ─── Internal icons (16 × 16) ────────────────────────────────────────────────

function HelpCircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z"
        stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M6.06 6a2 2 0 0 1 3.887.667c0 1.333-2 2-2 2"
        stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M8 10.667h.007"
        stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

function AlertCircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z"
        stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M8 5.333V8"
        stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M8 10.667h.007"
        stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

// ─── Input ────────────────────────────────────────────────────────────────────

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      label,
      hint,
      errorMessage,
      isError = false,
      leadingIcon,
      trailingIcon,
      helpIcon = false,
      wrapperClassName,
      className,
      disabled,
      required,
      id: idProp,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId()
    const id = idProp ?? generatedId

    // Right-side element priority: custom > auto-alert (error) > help-circle
    const trailingElement = trailingIcon ?? (isError ? <AlertCircleIcon /> : helpIcon ? <HelpCircleIcon /> : null)
    const trailingColor = !trailingIcon && isError ? 'text-error-500' : 'text-gray-400'

    return (
      <div className={cn('flex flex-col gap-1.5', wrapperClassName)}>

        {/* Label */}
        {label && (
          <label
            htmlFor={id}
            className="flex items-center gap-0.5 text-sm font-medium text-gray-700"
          >
            {label}
            {required && <span className="text-brand-600">*</span>}
          </label>
        )}

        {/* Input row */}
        <div
          className={cn(
            // Base layout
            'flex items-center gap-2 rounded-lg border bg-white transition-shadow',
            // Size padding  — sm: 12/8 px, md: 14/10 px
            size === 'sm' ? 'px-3 py-2' : 'px-3.5 py-2.5',
            // State-driven border + shadow
            disabled
              ? 'cursor-not-allowed bg-gray-50 border-gray-300 shadow-xs'
              : isError
                ? [
                    // idle: subtle red border + xs shadow
                    'border-error-300 shadow-xs',
                    // focused: solid red border + red focus ring  (no layout shift)
                    'focus-within:border-error-500',
                    'focus-within:shadow-[0px_0px_0px_1px_#f04438,var(--shadow-xs)]',
                  ]
                : [
                    // idle: gray border + xs shadow
                    'border-gray-300 shadow-xs',
                    // focused: brand border + brand focus ring (no layout shift)
                    'focus-within:border-brand-500',
                    'focus-within:shadow-[0px_0px_0px_1px_#9e77ed,var(--shadow-xs)]',
                  ],
          )}
        >
          {/* Leading icon — 20×20 */}
          {leadingIcon && (
            <span className="flex shrink-0 items-center justify-center size-5 text-gray-400">
              {leadingIcon}
            </span>
          )}

          {/* Native input */}
          <input
            ref={ref}
            id={id}
            disabled={disabled}
            required={required}
            className={cn(
              'flex-1 min-w-0 bg-transparent',
              // Text: 16 px / 24 px line-height per Figma (text-md token)
              'text-base leading-6 text-gray-900',
              'placeholder:text-gray-500',
              'outline-none',
              disabled && 'cursor-not-allowed text-gray-500',
              className,
            )}
            {...props}
          />

          {/* Trailing element — 16×16 */}
          {trailingElement && (
            <span className={cn('flex shrink-0 items-center justify-center size-4', trailingColor)}>
              {trailingElement}
            </span>
          )}
        </div>

        {/* Hint / error message */}
        {isError && errorMessage
          ? <p className="text-sm text-error-600">{errorMessage}</p>
          : hint
            ? <p className="text-sm text-gray-600">{hint}</p>
            : null
        }

      </div>
    )
  },
)
Input.displayName = 'Input'
