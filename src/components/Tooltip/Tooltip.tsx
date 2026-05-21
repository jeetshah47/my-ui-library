import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { type ReactNode } from 'react'
import { cn } from '../../utils/cn'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface TooltipProps {
  /** The tooltip label — always shown */
  content: ReactNode
  /** Optional secondary description text */
  supportingText?: ReactNode
  /** The element that triggers the tooltip */
  children: ReactNode
  /** Which side the tooltip appears on */
  side?: 'top' | 'bottom' | 'left' | 'right'
  /** Alignment along the side axis */
  align?: 'start' | 'center' | 'end'
  /** Show the directional arrow caret */
  showArrow?: boolean
  /** Gap in px between the trigger and tooltip */
  sideOffset?: number
  /** Delay in ms before the tooltip opens */
  delayDuration?: number
  className?: string
}

// ─── TooltipProvider ──────────────────────────────────────────────────────────

export const TooltipProvider = TooltipPrimitive.Provider

// ─── Tooltip ──────────────────────────────────────────────────────────────────

export const Tooltip = ({
  content,
  supportingText,
  children,
  side = 'top',
  align = 'center',
  showArrow = true,
  sideOffset = 8,
  delayDuration = 400,
  className,
}: TooltipProps) => (
  <TooltipPrimitive.Provider delayDuration={delayDuration}>
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>
        {children}
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side={side}
          align={align}
          sideOffset={sideOffset}
          className={cn(
            'z-50 max-w-xs rounded-lg bg-gray-950',
            supportingText ? 'p-3' : 'py-2 px-3',
            // enter / exit transitions — origin tracks the Radix transform-origin CSS var
            'origin-[--radix-tooltip-content-transform-origin]',
            'transition-[opacity,transform] duration-150 ease-out',
            'data-[state=delayed-open]:opacity-100 data-[state=delayed-open]:scale-100',
            'data-[state=instant-open]:opacity-100 data-[state=instant-open]:scale-100',
            'data-[state=closed]:opacity-0 data-[state=closed]:scale-95',
            className,
          )}
        >
          {supportingText ? (
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-semibold text-white leading-[18px]">
                {content}
              </span>
              <span className="text-xs font-medium text-gray-300 leading-[18px]">
                {supportingText}
              </span>
            </div>
          ) : (
            <span className="text-xs font-semibold text-white leading-[18px]">
              {content}
            </span>
          )}
          {showArrow && (
            <TooltipPrimitive.Arrow width={12} height={6} className="fill-gray-950" />
          )}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
)
Tooltip.displayName = 'Tooltip'
