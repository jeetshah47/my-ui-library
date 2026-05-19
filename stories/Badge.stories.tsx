import type { Meta, StoryObj } from '@storybook/react'
import { Badge, type BadgeColor } from '../src/components/Badge'
import { CheckIcon, ZapIcon, Bell01Icon, Tag01Icon, User01Icon } from '../src/icons'

const ALL_COLORS: BadgeColor[] = [
  'gray', 'brand', 'error', 'warning', 'success',
  'blue-light', 'blue', 'indigo', 'purple', 'pink', 'orange',
  'gray-blue', 'blue-gray',
]

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ALL_COLORS },
    size:  { control: 'select', options: ['sm', 'md', 'lg'] },
    type:  { control: 'select', options: ['pill', 'badge', 'badge-modern'] },
    dot:      { control: 'boolean' },
    iconOnly: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof Badge>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    color: 'brand',
    size:  'md',
    type:  'pill',
    children: 'Label',
  },
}

// ─── All colors ───────────────────────────────────────────────────────────────

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {ALL_COLORS.map(color => (
        <Badge key={color} color={color}>{color}</Badge>
      ))}
    </div>
  ),
  name: 'All Colors (Pill md)',
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      {(['sm', 'md', 'lg'] as const).map(size => (
        <div key={size} className="flex items-center gap-2">
          <span className="text-xs text-gray-400 w-4">{size}</span>
          <Badge color="brand" size={size}>Label</Badge>
          <Badge color="success" size={size} type="badge">Label</Badge>
          <Badge color="error" size={size} type="badge-modern" dot>Label</Badge>
        </div>
      ))}
    </div>
  ),
}

// ─── Types ────────────────────────────────────────────────────────────────────

export const Types: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400 w-24">Pill</span>
        {ALL_COLORS.map(c => <Badge key={c} color={c} type="pill">Label</Badge>)}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400 w-24">Badge</span>
        {ALL_COLORS.map(c => <Badge key={c} color={c} type="badge">Label</Badge>)}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400 w-24">Badge modern</span>
        {ALL_COLORS.map(c => <Badge key={c} color={c} type="badge-modern" dot>Label</Badge>)}
      </div>
    </div>
  ),
}

// ─── With dot ─────────────────────────────────────────────────────────────────

export const WithDot: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {ALL_COLORS.map(color => (
        <Badge key={color} color={color} dot>{color}</Badge>
      ))}
    </div>
  ),
  name: 'With Dot',
}

// ─── With leading icon ────────────────────────────────────────────────────────

export const WithLeadingIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge color="gray"    leftIcon={<Tag01Icon size={12} />}>Category</Badge>
      <Badge color="brand"   leftIcon={<ZapIcon size={12} />}>Upgrade</Badge>
      <Badge color="success" leftIcon={<CheckIcon size={12} />}>Verified</Badge>
      <Badge color="warning" leftIcon={<Bell01Icon size={12} />}>Alert</Badge>
      <Badge color="error"   leftIcon={<Bell01Icon size={12} />}>Critical</Badge>
    </div>
  ),
  name: 'With Leading Icon',
}

// ─── With trailing icon ───────────────────────────────────────────────────────

export const WithTrailingIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge color="gray"    rightIcon={<ZapIcon size={12} />}>Category</Badge>
      <Badge color="brand"   rightIcon={<ZapIcon size={12} />}>Upgrade</Badge>
      <Badge color="success" rightIcon={<CheckIcon size={12} />}>Verified</Badge>
    </div>
  ),
  name: 'With Trailing Icon',
}

// ─── With X close (dismissible) ──────────────────────────────────────────────

export const Dismissible: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {ALL_COLORS.map(color => (
        <Badge key={color} color={color} onRemove={() => {}}>{color}</Badge>
      ))}
    </div>
  ),
  name: 'Dismissible (X close)',
}

// ─── Icon only ────────────────────────────────────────────────────────────────

export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge color="gray"    iconOnly leftIcon={<Tag01Icon size={12} />} />
      <Badge color="brand"   iconOnly leftIcon={<ZapIcon size={12} />} />
      <Badge color="success" iconOnly leftIcon={<CheckIcon size={12} />} />
      <Badge color="warning" iconOnly leftIcon={<Bell01Icon size={12} />} />
      <Badge color="error"   iconOnly leftIcon={<Bell01Icon size={12} />} />
      <Badge color="indigo"  iconOnly leftIcon={<User01Icon size={12} />} />
    </div>
  ),
  name: 'Icon Only',
}

// ─── Badge modern (all colors) ───────────────────────────────────────────────

export const BadgeModern: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {ALL_COLORS.map(color => (
        <Badge key={color} color={color} type="badge-modern" dot size="sm">{color}</Badge>
      ))}
    </div>
  ),
  name: 'Badge Modern',
}

// ─── All variants overview ────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 items-start">

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Pill — sm / md / lg</p>
        <div className="flex flex-col gap-2 items-start">
          {(['sm', 'md', 'lg'] as const).map(size => (
            <div key={size} className="flex flex-wrap gap-2">
              <Badge color="gray"    size={size}>Label</Badge>
              <Badge color="brand"   size={size}>Label</Badge>
              <Badge color="success" size={size}>Label</Badge>
              <Badge color="error"   size={size}>Label</Badge>
              <Badge color="warning" size={size}>Label</Badge>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Badge — sm / md / lg</p>
        <div className="flex flex-col gap-2 items-start">
          {(['sm', 'md', 'lg'] as const).map(size => (
            <div key={size} className="flex flex-wrap gap-2">
              <Badge color="gray"    size={size} type="badge">Label</Badge>
              <Badge color="brand"   size={size} type="badge">Label</Badge>
              <Badge color="success" size={size} type="badge">Label</Badge>
              <Badge color="error"   size={size} type="badge">Label</Badge>
              <Badge color="warning" size={size} type="badge">Label</Badge>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">With icon variants</p>
        <div className="flex flex-wrap gap-2">
          <Badge color="brand"   dot>Dot</Badge>
          <Badge color="success" leftIcon={<CheckIcon size={12} />}>Leading icon</Badge>
          <Badge color="gray"    rightIcon={<ZapIcon size={12} />}>Trailing icon</Badge>
          <Badge color="error"   onRemove={() => {}}>Dismissible</Badge>
          <Badge color="indigo"  iconOnly leftIcon={<User01Icon size={12} />} />
        </div>
      </section>

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Badge modern (sm)</p>
        <div className="flex flex-wrap gap-2">
          {(['gray', 'brand', 'error', 'warning', 'success', 'blue', 'purple'] as const).map(c => (
            <Badge key={c} color={c} type="badge-modern" dot size="sm">{c}</Badge>
          ))}
        </div>
      </section>

    </div>
  ),
  name: 'All Variants',
}
