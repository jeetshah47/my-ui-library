import * as SliderPrimitive from '@radix-ui/react-slider'
import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SliderProps extends Omit<SliderPrimitive.SliderProps, 'asChild'> {
  /** Optional label rendered above the track */
  label?: string
  className?: string
}

// ─── Slider ───────────────────────────────────────────────────────────────────

export const Slider = forwardRef<HTMLSpanElement, SliderProps>(
  ({ label, className, ...props }, ref) => {
    // Infer thumb count from value or defaultValue array length (default 1)
    const thumbCount = (props.value ?? props.defaultValue ?? [0]).length

    return (
      <div className={cn('flex flex-col gap-2', className)}>
        {label && (
          <span className="text-sm font-medium text-gray-700">{label}</span>
        )}
        <SliderPrimitive.Root
          ref={ref}
          className="relative flex w-full touch-none select-none items-center py-3"
          {...props}
        >
          {/* Track background */}
          <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
            {/* Filled range */}
            <SliderPrimitive.Range className="absolute h-full rounded-full bg-brand-600" />
          </SliderPrimitive.Track>

          {/* One thumb per value */}
          {Array.from({ length: thumbCount }).map((_, i) => (
            <SliderPrimitive.Thumb
              key={i}
              className={cn(
                // Size + shape
                'block h-6 w-6 shrink-0 rounded-full',
                // Appearance
                'border-2 border-brand-600 bg-white',
                // Default shadow — matches Figma DROP_SHADOW specs
                '[box-shadow:0_2px_4px_-2px_rgba(10,13,18,0.06),0_4px_6px_-1px_rgba(10,13,18,0.10)]',
                // Focus ring: 2px white gap → 4px brand-500 ring, then standard shadows
                'focus-visible:outline-none',
                'focus-visible:[box-shadow:0_0_0_2px_white,0_0_0_6px_#9e77ed,0_1px_2px_rgba(10,13,18,0.10),0_1px_3px_rgba(10,13,18,0.10)]',
                // Disabled
                'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
              )}
            />
          ))}
        </SliderPrimitive.Root>
      </div>
    )
  }
)
Slider.displayName = 'Slider'
