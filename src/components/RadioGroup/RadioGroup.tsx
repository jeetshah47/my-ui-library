import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { forwardRef, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

// ─── Types ────────────────────────────────────────────────────────────────────

export type RadioGroupSize = 'sm' | 'md'

// ─── RadioGroup ───────────────────────────────────────────────────────────────

export interface RadioGroupProps extends Omit<RadioGroupPrimitive.RadioGroupProps, 'asChild'> {
  className?: string
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, ...props }, ref) => (
    <RadioGroupPrimitive.Root
      ref={ref}
      className={cn('flex flex-col gap-3', className)}
      {...props}
    />
  )
)
RadioGroup.displayName = 'RadioGroup'

// ─── Size tables ──────────────────────────────────────────────────────────────

const DOT_SIZE: Record<RadioGroupSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
}

const ITEM_GAP: Record<RadioGroupSize, string> = {
  sm: 'gap-2',   // 8px
  md: 'gap-3',   // 12px
}

const LABEL_TEXT: Record<RadioGroupSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
}

// ─── RadioGroupItem ───────────────────────────────────────────────────────────

export interface RadioGroupItemProps {
  value: string
  label: ReactNode
  description?: ReactNode
  size?: RadioGroupSize
  disabled?: boolean
  className?: string
}

export const RadioGroupItem = forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  ({ value, label, description, size = 'md', disabled, className }, ref) => (
    <RadioGroupPrimitive.Item
      ref={ref}
      value={value}
      disabled={disabled}
      className={cn(
        'group w-full rounded-xl border bg-white p-4',
        'text-left cursor-pointer transition-colors duration-100',
        // unselected border
        'border-gray-200',
        // selected: 2px brand-500 border
        'data-[state=checked]:border-2 data-[state=checked]:border-[#9e77ed]',
        // focus ring
        'focus-visible:outline-none',
        'focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
        // disabled
        'data-[disabled]:bg-gray-50 data-[disabled]:border-gray-200 data-[disabled]:cursor-not-allowed',
        className,
      )}
    >
      <div className={cn('flex items-start', ITEM_GAP[size])}>

        {/* Radio dot indicator */}
        <div
          className={cn(
            'shrink-0 rounded-full border border-gray-300 bg-white transition-colors duration-100',
            'mt-[2px] flex items-center justify-center',
            DOT_SIZE[size],
            // selected: solid brand-600 fill, no border
            'group-data-[state=checked]:bg-brand-600 group-data-[state=checked]:border-transparent',
            // disabled
            'group-data-[disabled]:bg-gray-50 group-data-[disabled]:border-gray-300',
          )}
        >
          {/* Hidden indicator for Radix a11y — visual is handled via CSS above */}
          <RadioGroupPrimitive.Indicator className="hidden" />
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-0.5 min-w-0 flex-1">
          <span
            className={cn(
              LABEL_TEXT[size],
              'font-medium text-gray-700 leading-snug',
              'group-data-[disabled]:text-gray-400',
            )}
          >
            {label}
          </span>
          {description && (
            <span
              className={cn(
                LABEL_TEXT[size],
                'text-gray-600 leading-snug',
                'group-data-[disabled]:text-gray-400',
              )}
            >
              {description}
            </span>
          )}
        </div>

      </div>
    </RadioGroupPrimitive.Item>
  )
)
RadioGroupItem.displayName = 'RadioGroupItem'
