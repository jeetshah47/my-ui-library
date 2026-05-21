import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { forwardRef, useId, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

// ─── Icons ────────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IndeterminateIcon() {
  return (
    <svg width="10" height="2" viewBox="0 0 10 2" fill="none" aria-hidden="true">
      <path d="M1 1H9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// ─── Types ────────────────────────────────────────────────────────────────────

export type CheckboxSize = 'sm' | 'md'
export type CheckboxVariant = 'checkbox' | 'radio'

export interface CheckboxProps extends Omit<CheckboxPrimitive.CheckboxProps, 'asChild'> {
  size?: CheckboxSize
  variant?: CheckboxVariant
  label?: ReactNode
  hint?: string
}

// ─── Size maps ────────────────────────────────────────────────────────────────

const BOX_SIZE: Record<CheckboxSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
}

const CORNER: Record<CheckboxSize, string> = {
  sm: 'rounded-[4px]',
  md: 'rounded-[6px]',
}

const LABEL_TEXT: Record<CheckboxSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
}

const GAP: Record<CheckboxSize, string> = {
  sm: 'gap-2',
  md: 'gap-3',
}

// ─── Checkbox ─────────────────────────────────────────────────────────────────

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ size = 'md', variant = 'checkbox', label, hint, className, id: idProp, ...props }, ref) => {
    const autoId = useId()
    const id = idProp ?? autoId
    const isRadio = variant === 'radio'
    const shape = isRadio ? 'rounded-full' : CORNER[size]

    const box = (
      <CheckboxPrimitive.Root
        ref={ref}
        id={id}
        className={cn(
          'group shrink-0 inline-flex items-center justify-center',
          'border border-gray-300 bg-white',
          'transition-colors duration-100',
          // checked / indeterminate — brand fill, border collapses (brand on brand = invisible)
          'data-[state=checked]:bg-brand-600 data-[state=checked]:border-brand-600',
          'data-[state=indeterminate]:bg-brand-600 data-[state=indeterminate]:border-brand-600',
          // focus ring: 2px white gap then 2px brand-500 ring (box-shadow: 0 0 0 2px white, 0 0 0 4px #9e77ed)
          'focus-visible:outline-none',
          'focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
          // disabled: gray-50 bg, same gray-300 border
          'disabled:cursor-not-allowed disabled:bg-gray-50',
          'disabled:data-[state=checked]:bg-gray-50 disabled:data-[state=checked]:border-gray-300',
          'disabled:data-[state=indeterminate]:bg-gray-50 disabled:data-[state=indeterminate]:border-gray-300',
          BOX_SIZE[size],
          shape,
          className,
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center">
          <span className="hidden group-data-[state=indeterminate]:block"><IndeterminateIcon /></span>
          <span className="hidden group-data-[state=checked]:block"><CheckIcon /></span>
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    )

    if (!label && !hint) return box

    return (
      <div className={cn('flex items-start', GAP[size])}>
        <div className="flex items-center" style={{ height: size === 'sm' ? 20 : 24 }}>
          {box}
        </div>
        <div className="flex flex-col gap-0.5">
          {label && (
            <label
              htmlFor={id}
              className={cn(
                LABEL_TEXT[size],
                'font-medium text-gray-700 cursor-pointer leading-snug',
                props.disabled && 'cursor-not-allowed text-gray-400',
              )}
            >
              {label}
            </label>
          )}
          {hint && (
            <p className={cn(LABEL_TEXT[size], 'text-gray-600 leading-snug', props.disabled && 'text-gray-400')}>
              {hint}
            </p>
          )}
        </div>
      </div>
    )
  }
)
Checkbox.displayName = 'Checkbox'
