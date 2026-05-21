import { cn } from '../../utils/cn'

// ─── Types ────────────────────────────────────────────────────────────────────

export type ProgressCircleSize  = 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
export type ProgressCircleShape = 'circle' | 'half'
export type ProgressCircleColor = 'brand' | 'success' | 'warning' | 'error'

export interface ProgressCircleProps {
  /** 0–100 */
  value?: number
  size?: ProgressCircleSize
  shape?: ProgressCircleShape
  color?: ProgressCircleColor
  /** Optional label rendered near the value */
  label?: string
  /** Show the numeric percentage (default true) */
  showValue?: boolean
  className?: string
}

// ─── Size / color tables ──────────────────────────────────────────────────────

interface SizeConfig {
  outer:      number
  stroke:     number
  labelClass: string
  numClass:   string
}

// Outer size, stroke width, and typography per Figma spec
const SIZE: Record<ProgressCircleSize, SizeConfig> = {
  xxs: {
    outer: 64,  stroke: 6,
    labelClass: 'text-xs  font-medium leading-[18px]',
    numClass:   'text-sm  font-semibold leading-5',
  },
  xs: {
    outer: 160, stroke: 16,
    labelClass: 'text-xs  font-medium leading-[18px]',
    numClass:   'text-2xl font-semibold leading-8',
  },
  sm: {
    outer: 200, stroke: 20,
    labelClass: 'text-xs  font-medium leading-[18px]',
    numClass:   'text-[30px] font-semibold leading-[38px]',
  },
  md: {
    outer: 240, stroke: 24,
    labelClass: 'text-sm  font-medium leading-5',
    numClass:   'text-4xl font-semibold leading-[44px]',
  },
  lg: {
    outer: 280, stroke: 28,
    labelClass: 'text-sm  font-medium leading-5',
    numClass:   'text-5xl font-semibold leading-[60px]',
  },
}

// Hex values for SVG stroke (must be hex, not CSS vars, inside SVG attributes)
const FILL_COLOR: Record<ProgressCircleColor, string> = {
  brand:   '#7f56d9',
  success: '#079455',
  warning: '#f79009',
  error:   '#f04438',
}

const TRACK_COLOR = '#e9eaeb'  // gray-200

// ─── ProgressCircle ───────────────────────────────────────────────────────────

export const ProgressCircle = ({
  value     = 0,
  size      = 'md',
  shape     = 'circle',
  color     = 'brand',
  label,
  showValue = true,
  className,
}: ProgressCircleProps) => {
  const clamped = Math.min(100, Math.max(0, value))
  const { outer, stroke, labelClass, numClass } = SIZE[size]

  const cx = outer / 2
  const cy = outer / 2
  // Radius = distance from center to the middle of the stroke path
  const r             = (outer - stroke) / 2
  const circumference = 2 * Math.PI * r
  const halfCirc      = Math.PI * r
  const fillColor     = FILL_COLOR[color]
  const isHalf        = shape === 'half'
  const isXxs         = size === 'xxs'

  // ── Half-circle gauge ────────────────────────────────────────────────────

  if (isHalf) {
    // Arc goes from 9 o'clock (left) clockwise over the top to 3 o'clock.
    // rotate(180) moves the path start from 3 o'clock → 9 o'clock.
    const svgH       = outer / 2 + stroke / 2   // show only the top arc + half-stroke
    const progressArc = halfCirc * (clamped / 100)
    const rot         = `rotate(180 ${cx} ${cy})`

    return (
      <div className={cn('inline-flex flex-col items-center', className)}>
        <svg
          width={outer}
          height={svgH}
          viewBox={`0 0 ${outer} ${svgH}`}
          fill="none"
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {/* Track */}
          <circle
            cx={cx} cy={cy} r={r}
            stroke={TRACK_COLOR}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${halfCirc} ${circumference}`}
            transform={rot}
          />
          {/* Progress */}
          {clamped > 0 && (
            <circle
              cx={cx} cy={cy} r={r}
              stroke={fillColor}
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={`${progressArc} ${circumference}`}
              transform={rot}
              style={{ transition: 'stroke-dasharray 0.3s ease-out' }}
            />
          )}
        </svg>

        {(label || showValue) && (
          <div className="flex flex-col items-center mt-1">
            {label     && <span className={cn(labelClass, 'text-gray-600')}>{label}</span>}
            {showValue && <span className={cn(numClass,   'text-gray-900')}>{clamped}%</span>}
          </div>
        )}
      </div>
    )
  }

  // ── Full circle ───────────────────────────────────────────────────────────

  // progress starts at 12 o'clock, fills clockwise
  const progressArc = circumference * (clamped / 100)
  const rot         = `rotate(-90 ${cx} ${cy})`

  // xxs: only value% inside the ring; label sits below (flex-col layout)
  if (isXxs) {
    return (
      <div className={cn('inline-flex flex-col items-center gap-1', className)}>
        <div className="relative" style={{ width: outer, height: outer }}>
          <svg
            width={outer} height={outer}
            viewBox={`0 0 ${outer} ${outer}`}
            fill="none"
            role="progressbar"
            aria-valuenow={clamped}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <circle cx={cx} cy={cy} r={r} stroke={TRACK_COLOR}  strokeWidth={stroke} strokeLinecap="round" />
            {clamped > 0 && (
              <circle
                cx={cx} cy={cy} r={r}
                stroke={fillColor}
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={`${progressArc} ${circumference - progressArc}`}
                transform={rot}
                style={{ transition: 'stroke-dasharray 0.3s ease-out' }}
              />
            )}
          </svg>
          {showValue && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={cn(numClass, 'text-gray-900')}>{clamped}%</span>
            </div>
          )}
        </div>
        {label && <span className={cn(labelClass, 'text-gray-600 text-center')}>{label}</span>}
      </div>
    )
  }

  // xs–lg: label + value stacked inside the ring
  return (
    <div
      className={cn('relative inline-flex items-center justify-center', className)}
      style={{ width: outer, height: outer }}
    >
      <svg
        width={outer} height={outer}
        viewBox={`0 0 ${outer} ${outer}`}
        fill="none"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <circle cx={cx} cy={cy} r={r} stroke={TRACK_COLOR}  strokeWidth={stroke} strokeLinecap="round" />
        {clamped > 0 && (
          <circle
            cx={cx} cy={cy} r={r}
            stroke={fillColor}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${progressArc} ${circumference - progressArc}`}
            transform={rot}
            style={{ transition: 'stroke-dasharray 0.3s ease-out' }}
          />
        )}
      </svg>

      {(label || showValue) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {label     && <span className={cn(labelClass, 'text-gray-600 text-center')}>{label}</span>}
          {showValue && <span className={cn(numClass,   'text-gray-900')}>{clamped}%</span>}
        </div>
      )}
    </div>
  )
}
ProgressCircle.displayName = 'ProgressCircle'
