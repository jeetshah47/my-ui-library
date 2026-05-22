import { cn } from '../../utils/cn'

// ─── Types ────────────────────────────────────────────────────────────────────

export type SpinnerSize  = 'sm' | 'md' | 'lg'
export type SpinnerColor = 'gray' | 'white' | 'brand'

export interface SpinnerProps {
  size?:      SpinnerSize
  color?:     SpinnerColor
  className?: string
}

// ─── Size / color tables ──────────────────────────────────────────────────────

interface SizeConfig { outer: number; r: number; stroke: number }

// Figma spec: sm=20px (ellipse 18px, stroke 2px), md=24px (ellipse 20px, stroke 2px)
// r = (ellipse - stroke) / 2  →  sm: (18-2)/2=8, md: (20-2)/2=9
// lg extrapolated to match scale
const SIZE: Record<SpinnerSize, SizeConfig> = {
  sm: { outer: 20, r: 8,  stroke: 2 },
  md: { outer: 24, r: 9,  stroke: 2 },
  lg: { outer: 32, r: 12, stroke: 2.5 },
}

// Colors from Figma (primary btn uses brand-200, link uses brand-500, others use gray-400)
// These are the standalone defaults; callers may override via `className text-*`
const COLOR: Record<SpinnerColor, string> = {
  gray:  '#a4a7ae',  // gray-400
  white: '#ffffff',
  brand: '#9e77ed',  // brand-500
}

// ─── Spinner ──────────────────────────────────────────────────────────────────

export const Spinner = ({ size = 'md', color = 'gray', className }: SpinnerProps) => {
  const { outer, r, stroke } = SIZE[size]
  const cx           = outer / 2
  const cy           = outer / 2
  const circumference = 2 * Math.PI * r
  // Show ~75% of the circle as the spinning arc (matches Figma visual)
  const arc           = circumference * 0.75
  const strokeColor   = COLOR[color]

  return (
    <svg
      width={outer}
      height={outer}
      viewBox={`0 0 ${outer} ${outer}`}
      fill="none"
      role="status"
      aria-label="Loading"
      // transform-box + origin-center ensure rotation happens around the SVG centre
      className={cn(
        'animate-spin [transform-box:fill-box] origin-center',
        className,
      )}
    >
      {/* Track — full circle at 30% opacity */}
      <circle
        cx={cx} cy={cy} r={r}
        stroke={strokeColor}
        strokeWidth={stroke}
        strokeLinecap="round"
        opacity={0.3}
      />
      {/* Arc — 270° segment that spins */}
      <circle
        cx={cx} cy={cy} r={r}
        stroke={strokeColor}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${arc} ${circumference - arc}`}
      />
    </svg>
  )
}
Spinner.displayName = 'Spinner'
