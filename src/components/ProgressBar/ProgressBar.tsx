import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cn } from '../../utils/cn'

// ─── Types ────────────────────────────────────────────────────────────────────

export type ProgressBarSize = 'sm' | 'md' | 'lg'
export type ProgressBarColor = 'brand' | 'success' | 'warning' | 'error'

export interface ProgressBarProps {
  /** 0–100 */
  value?: number
  size?: ProgressBarSize
  color?: ProgressBarColor
  /** Label shown above-left */
  label?: string
  /** Show the numeric percentage above-right */
  showPercent?: boolean
  className?: string
}

// ─── Size / color tables ──────────────────────────────────────────────────────

const TRACK_H: Record<ProgressBarSize, string> = {
  sm: 'h-1',   // 4px
  md: 'h-2',   // 8px
  lg: 'h-3',   // 12px
}

const FILL_COLOR: Record<ProgressBarColor, string> = {
  brand:   'bg-brand-600',
  success: 'bg-success-600',
  warning: 'bg-warning-500',
  error:   'bg-error-500',
}

// ─── ProgressBar ─────────────────────────────────────────────────────────────

export const ProgressBar = ({
  value = 0,
  size = 'md',
  color = 'brand',
  label,
  showPercent = false,
  className,
}: ProgressBarProps) => {
  const clamped = Math.min(100, Math.max(0, value))

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {(label || showPercent) && (
        <div className="flex items-center justify-between gap-2">
          {label && (
            <span className="text-sm font-medium text-gray-700">{label}</span>
          )}
          {showPercent && (
            <span className="ml-auto text-sm font-medium text-gray-700">
              {clamped}%
            </span>
          )}
        </div>
      )}
      <ProgressPrimitive.Root
        value={clamped}
        className={cn(
          'w-full overflow-hidden rounded-full bg-gray-200',
          TRACK_H[size],
        )}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            'h-full rounded-full transition-[width] duration-300 ease-out',
            FILL_COLOR[color],
          )}
          style={{ width: `${clamped}%` }}
        />
      </ProgressPrimitive.Root>
    </div>
  )
}
ProgressBar.displayName = 'ProgressBar'
