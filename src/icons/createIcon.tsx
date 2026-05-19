import { forwardRef } from 'react'

export interface IconProps {
  size?: number
  color?: string
  className?: string
}

/**
 * Factory that creates a typed, forwardRef-wrapped SVG icon component.
 * All stroke/fill styling inherits from the SVG element so individual
 * path elements only need to carry their geometry (the `d` attribute).
 */
export function createIcon(displayName: string, paths: React.ReactNode) {
  const Icon = forwardRef<SVGSVGElement, IconProps>(
    ({ size = 20, color = 'currentColor', className }, ref) => (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        {paths}
      </svg>
    ),
  )
  Icon.displayName = displayName
  return Icon
}
