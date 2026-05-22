import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { type ReactNode } from 'react'
import { cn } from '../../utils/cn'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface DividerProps {
  /** Horizontal (default) or vertical */
  orientation?: 'horizontal' | 'vertical'
  /** Optional label centred along the line — only used with horizontal orientation */
  label?: ReactNode
  /** Label text style */
  labelClassName?: string
  className?: string
}

// ─── Divider ──────────────────────────────────────────────────────────────────

export const Divider = ({
  orientation = 'horizontal',
  label,
  labelClassName,
  className,
}: DividerProps) => {
  const isVertical = orientation === 'vertical'

  // Vertical: thin column, no label support
  if (isVertical) {
    return (
      <SeparatorPrimitive.Root
        orientation="vertical"
        decorative
        className={cn('w-px self-stretch bg-gray-200', className)}
      />
    )
  }

  // Horizontal without label: simple 1px rule
  if (!label) {
    return (
      <SeparatorPrimitive.Root
        orientation="horizontal"
        decorative
        className={cn('h-px w-full bg-gray-200', className)}
      />
    )
  }

  // Horizontal with label: line — label — line
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <SeparatorPrimitive.Root
        orientation="horizontal"
        decorative
        className="h-px flex-1 bg-gray-200"
      />
      <span className={cn('shrink-0 text-sm font-medium text-gray-500', labelClassName)}>
        {label}
      </span>
      <SeparatorPrimitive.Root
        orientation="horizontal"
        decorative
        className="h-px flex-1 bg-gray-200"
      />
    </div>
  )
}
Divider.displayName = 'Divider'
