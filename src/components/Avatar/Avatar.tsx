import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { Children, forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

// ─── Icons ────────────────────────────────────────────────────────────────────

function PlaceholderIcon({ size }: { size: number }) {
  return (
    <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function VerifiedIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="#1570EF" />
      <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Types ────────────────────────────────────────────────────────────────────

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const SIZE_PX: Record<AvatarSize, number> = { xs: 24, sm: 32, md: 40, lg: 48, xl: 56, '2xl': 64 }

const SIZE_TEXT: Record<AvatarSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-display-xs',
}

// Indicator dot size per avatar size
const INDICATOR_PX: Record<AvatarSize, number> = { xs: 6, sm: 8, md: 10, lg: 12, xl: 14, '2xl': 16 }

// Company badge size per avatar size
const COMPANY_PX: Record<AvatarSize, number> = { xs: 10, sm: 12, md: 14, lg: 16, xl: 18, '2xl': 20 }

// ─── Props ────────────────────────────────────────────────────────────────────

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /** Image source URL */
  src?: string
  alt?: string
  /** Initials shown when no image (e.g. "JD") */
  fallback?: string
  size?: AvatarSize
  /** Green online dot when true, gray offline dot when false, hidden when undefined */
  online?: boolean
  /** Blue verified checkmark badge */
  verified?: boolean
  /** Company logo badge (ReactNode sized to the slot) */
  companyIcon?: ReactNode
}

// ─── Avatar ───────────────────────────────────────────────────────────────────

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      src,
      alt = '',
      fallback,
      size = 'md',
      online,
      verified,
      companyIcon,
      className,
      ...props
    },
    ref
  ) => {
    const px           = SIZE_PX[size]
    const indicatorPx  = INDICATOR_PX[size]
    const companyPx    = COMPANY_PX[size]
    const hasStatus    = online !== undefined || verified || !!companyIcon

    return (
      <span
        ref={ref}
        className={cn('relative inline-flex shrink-0', className)}
        style={{ width: px, height: px }}
        {...props}
      >
        {/* Avatar circle */}
        <AvatarPrimitive.Root
          className={cn(
            'flex h-full w-full items-center justify-center overflow-hidden rounded-full',
            'bg-gray-100 ring-1 ring-gray-200 text-gray-600',
            SIZE_TEXT[size],
            'font-semibold select-none',
          )}
        >
          <AvatarPrimitive.Image
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
          />
          <AvatarPrimitive.Fallback delayMs={0} className="flex h-full w-full items-center justify-center">
            {fallback
              ? <span>{fallback}</span>
              : <PlaceholderIcon size={px} />
            }
          </AvatarPrimitive.Fallback>
        </AvatarPrimitive.Root>

        {/* Status badge — bottom-right corner */}
        {hasStatus && (
          <span
            className="absolute bottom-0 right-0 block rounded-full ring-2 ring-white"
            aria-hidden="true"
          >
            {verified ? (
              <VerifiedIcon size={indicatorPx + 2} />
            ) : companyIcon ? (
              <span
                className="flex items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-gray-200"
                style={{ width: companyPx, height: companyPx }}
              >
                {companyIcon}
              </span>
            ) : (
              <span
                className={cn(
                  'block rounded-full',
                  online ? 'bg-success-500' : 'bg-gray-300',
                )}
                style={{ width: indicatorPx, height: indicatorPx }}
              />
            )}
          </span>
        )}
      </span>
    )
  }
)
Avatar.displayName = 'Avatar'

// ─── AvatarGroup ──────────────────────────────────────────────────────────────

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  size?: AvatarSize
  /** Max avatars shown before "+N" overflow */
  max?: number
  children: ReactNode
}

export function AvatarGroup({ size = 'md', max = 5, children, className, ...props }: AvatarGroupProps) {
  const items    = Children.toArray(children)
  const visible  = items.slice(0, max)
  const overflow = items.length - max
  // Overlap ≈ 25% of avatar diameter
  const overlapPx = Math.round(SIZE_PX[size] * 0.25)

  return (
    <div className={cn('flex items-center', className)} {...props}>
      {visible.map((child, i) => (
        <span
          key={i}
          className="rounded-full ring-2 ring-white shrink-0 block"
          style={i !== 0 ? { marginLeft: -overlapPx } : undefined}
        >
          {child}
        </span>
      ))}
      {overflow > 0 && (
        <span
          className="rounded-full ring-2 ring-white shrink-0 block"
          style={{ marginLeft: -overlapPx }}
        >
          <Avatar
            size={size}
            fallback={`+${overflow}`}
            className="bg-gray-100 text-gray-600"
          />
        </span>
      )}
    </div>
  )
}
