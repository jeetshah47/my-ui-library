import * as SwitchPrimitive from '@radix-ui/react-switch'
import { forwardRef, useId, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

// ─── Types ────────────────────────────────────────────────────────────────────

export type ToggleSize = 'sm' | 'md'
export type ToggleVariant = 'default' | 'slim'

export interface ToggleProps extends Omit<SwitchPrimitive.SwitchProps, 'asChild'> {
  size?: ToggleSize
  variant?: ToggleVariant
  label?: ReactNode
  hint?: string
}

// ─── Size tables ──────────────────────────────────────────────────────────────

// Track outer dimensions (w × h)
const TRACK: Record<ToggleVariant, Record<ToggleSize, string>> = {
  default: { sm: 'w-9 h-5',   md: 'w-11 h-6'  },  // 36×20 | 44×24
  slim:    { sm: 'w-8 h-4',   md: 'w-10 h-5'  },  // 32×16 | 40×20
}

// Thumb size
const THUMB: Record<ToggleSize, string> = {
  sm: 'w-4 h-4',  // 16×16
  md: 'w-5 h-5',  // 20×20
}

// Thumb travel distance (off→on)
// Default sm: 36-16-2-2=16px | Default md: 44-20-2-2=20px
// Slim sm:    32-16=16px      | Slim md:    40-20=20px
const TRANSLATE: Record<ToggleSize, string> = {
  sm: 'data-[state=checked]:translate-x-4',   // 16px
  md: 'data-[state=checked]:translate-x-5',   // 20px
}

const GAP: Record<ToggleSize, string> = {
  sm: 'gap-2',
  md: 'gap-3',
}

const LABEL_TEXT: Record<ToggleSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
}

// ─── Toggle ───────────────────────────────────────────────────────────────────

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  ({ size = 'md', variant = 'default', label, hint, className, id: idProp, ...props }, ref) => {
    const autoId = useId()
    const id = idProp ?? autoId
    const isSlim = variant === 'slim'

    const track = (
      <SwitchPrimitive.Root
        ref={ref}
        id={id}
        className={cn(
          'relative inline-flex shrink-0 cursor-pointer items-center rounded-full',
          'transition-colors duration-150',
          // off: gray-100 | on: brand-600 | hover on: brand-700
          'bg-gray-100',
          'data-[state=checked]:bg-brand-600',
          'hover:data-[state=checked]:bg-brand-700',
          // slim variant: 1px inset border when off (doesn't affect box model)
          isSlim && [
            'data-[state=unchecked]:ring-1',
            'data-[state=unchecked]:ring-inset',
            'data-[state=unchecked]:ring-gray-200',
          ],
          // focus ring: 2px white gap + 2px brand-500 ring
          'focus-visible:outline-none',
          'focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
          // disabled: gray track regardless of state, no-pointer
          'disabled:cursor-not-allowed',
          'disabled:data-[state=checked]:bg-gray-100',
          'disabled:hover:data-[state=checked]:bg-gray-100',
          TRACK[variant][size],
          className,
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            'block rounded-full bg-white transition-transform duration-150',
            // Default thumb: subtle depth shadows
            !isSlim && '[box-shadow:0_0_2px_-1px_rgba(10,13,18,0.18),_0_0_3px_0_rgba(10,13,18,0.08)]',
            // Slim thumb: thinner ambient shadow + colored ring border
            isSlim && [
              '[box-shadow:0_0_2px_0_rgba(10,13,18,0.08)]',
              'ring-1 ring-inset ring-gray-300',
              'data-[state=checked]:ring-brand-600',
            ],
            // disabled thumb fill
            'data-[disabled]:bg-gray-50',
            THUMB[size],
            // Default type: 2px padding inset from left edge when unchecked
            !isSlim && 'ml-[2px]',
            TRANSLATE[size],
          )}
        />
      </SwitchPrimitive.Root>
    )

    if (!label && !hint) return track

    return (
      <div className={cn('flex items-start', GAP[size])}>
        <div className="flex items-center" style={{ height: size === 'sm' ? 20 : 24 }}>
          {track}
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
Toggle.displayName = 'Toggle'
