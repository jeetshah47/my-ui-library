import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from '../src/components/Tag'
import { Flag01Icon, User01Icon, ZapIcon, Tag01Icon } from '../src/icons'

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size:    { control: 'select', options: ['sm', 'md', 'lg'] },
    dot:     { control: 'boolean' },
    checked: { control: 'boolean' },
    count:   { control: 'number' },
  },
}
export default meta
type Story = StoryObj<typeof Tag>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: { size: 'md', children: 'Label' },
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  ),
}

// ─── Text only ────────────────────────────────────────────────────────────────

export const TextOnly: Story = {
  render: () => (
    <div className="flex flex-col gap-3 items-start">
      {(['sm', 'md', 'lg'] as const).map(size => (
        <div key={size} className="flex items-center gap-2">
          <span className="text-xs text-gray-400 w-4">{size}</span>
          <Tag size={size}>Design</Tag>
          <Tag size={size}>Engineering</Tag>
          <Tag size={size}>Product</Tag>
          <Tag size={size}>Marketing</Tag>
        </div>
      ))}
    </div>
  ),
  name: 'Text Only',
}

// ─── With dot ─────────────────────────────────────────────────────────────────

export const WithDot: Story = {
  render: () => (
    <div className="flex flex-col gap-3 items-start">
      {(['sm', 'md', 'lg'] as const).map(size => (
        <div key={size} className="flex items-center gap-2">
          <span className="text-xs text-gray-400 w-4">{size}</span>
          <Tag size={size} dot>Active</Tag>
          <Tag size={size} dot>In progress</Tag>
          <Tag size={size} dot>Completed</Tag>
        </div>
      ))}
    </div>
  ),
  name: 'With Dot',
}

// ─── With left icon ───────────────────────────────────────────────────────────

export const WithLeftIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <div>
        <p className="text-xs text-gray-400 mb-2">Country flag</p>
        <div className="flex items-center gap-2">
          {(['sm', 'md', 'lg'] as const).map(size => (
            <Tag key={size} size={size} leftIcon={<Flag01Icon size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} />}>
              Australia
            </Tag>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-2">Avatar</p>
        <div className="flex items-center gap-2">
          {(['sm', 'md', 'lg'] as const).map(size => (
            <Tag key={size} size={size} leftIcon={
              <span className={`flex items-center justify-center rounded-full bg-brand-100 text-brand-700 font-semibold overflow-hidden ${size === 'sm' ? 'text-[10px]' : 'text-xs'}`} style={{ width: size === 'sm' ? 16 : size === 'md' ? 18 : 20, height: size === 'sm' ? 16 : size === 'md' ? 18 : 20 }}>
                JD
              </span>
            }>
              John Doe
            </Tag>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-2">Custom icon</p>
        <div className="flex items-center gap-2">
          <Tag size="sm" leftIcon={<ZapIcon size={16} />}>Upgrade</Tag>
          <Tag size="md" leftIcon={<Tag01Icon size={18} />}>Category</Tag>
          <Tag size="lg" leftIcon={<User01Icon size={20} />}>Assigned</Tag>
        </div>
      </div>
    </div>
  ),
  name: 'With Left Icon',
}

// ─── Dismissible (X close) ────────────────────────────────────────────────────

export const Dismissible: Story = {
  render: () => (
    <div className="flex flex-col gap-3 items-start">
      {(['sm', 'md', 'lg'] as const).map(size => (
        <div key={size} className="flex items-center gap-2">
          <span className="text-xs text-gray-400 w-4">{size}</span>
          <Tag size={size} onRemove={() => {}}>Design</Tag>
          <Tag size={size} dot onRemove={() => {}}>Active</Tag>
          <Tag size={size} leftIcon={<Flag01Icon size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} />} onRemove={() => {}}>Australia</Tag>
        </div>
      ))}
    </div>
  ),
  name: 'Dismissible',
}

// ─── With count ───────────────────────────────────────────────────────────────

export const WithCount: Story = {
  render: () => (
    <div className="flex flex-col gap-3 items-start">
      {(['sm', 'md', 'lg'] as const).map(size => (
        <div key={size} className="flex items-center gap-2">
          <span className="text-xs text-gray-400 w-4">{size}</span>
          <Tag size={size} count={5}>Design</Tag>
          <Tag size={size} dot count={12}>Active</Tag>
          <Tag size={size} leftIcon={<Flag01Icon size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} />} count={3}>Australia</Tag>
        </div>
      ))}
    </div>
  ),
  name: 'With Count',
}

// ─── Checkbox (selectable) ────────────────────────────────────────────────────

export const Checkbox: Story = {
  render: () => (
    <div className="flex flex-col gap-3 items-start">
      {(['sm', 'md', 'lg'] as const).map(size => (
        <div key={size} className="flex items-center gap-2">
          <span className="text-xs text-gray-400 w-4">{size}</span>
          <Tag size={size} checked={false} onCheckedChange={() => {}}>Unchecked</Tag>
          <Tag size={size} checked={true}  onCheckedChange={() => {}}>Checked</Tag>
          <Tag size={size} checked={false} onCheckedChange={() => {}} leftIcon={<Flag01Icon size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} />}>Australia</Tag>
          <Tag size={size} checked={true}  onCheckedChange={() => {}} leftIcon={<Flag01Icon size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} />}>Australia</Tag>
          <Tag size={size} checked={false} onCheckedChange={() => {}} onRemove={() => {}}>Remove</Tag>
        </div>
      ))}
    </div>
  ),
  name: 'Checkbox (Selectable)',
}

// ─── All variants overview ────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 items-start">

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Text only</p>
        <div className="flex gap-2">
          <Tag size="sm">Label</Tag>
          <Tag size="md">Label</Tag>
          <Tag size="lg">Label</Tag>
        </div>
      </section>

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">With icons</p>
        <div className="flex flex-wrap gap-2">
          <Tag size="md" dot>Dot</Tag>
          <Tag size="md" leftIcon={<Flag01Icon size={18} />}>Country flag</Tag>
          <Tag size="md" leftIcon={
            <span className="flex items-center justify-center rounded-full bg-brand-100 text-brand-700 text-xs font-semibold" style={{ width: 18, height: 18 }}>JD</span>
          }>Avatar</Tag>
          <Tag size="md" leftIcon={<ZapIcon size={18} />}>Custom icon</Tag>
        </div>
      </section>

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Actions</p>
        <div className="flex flex-wrap gap-2">
          <Tag size="md" onRemove={() => {}}>X close</Tag>
          <Tag size="md" count={5}>Count badge</Tag>
          <Tag size="md" dot onRemove={() => {}}>Dot + dismiss</Tag>
          <Tag size="md" leftIcon={<Flag01Icon size={18} />} onRemove={() => {}}>Flag + dismiss</Tag>
          <Tag size="md" leftIcon={<Flag01Icon size={18} />} count={3}>Flag + count</Tag>
        </div>
      </section>

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Checkbox / selectable</p>
        <div className="flex flex-wrap gap-2">
          <Tag size="md" checked={false} onCheckedChange={() => {}}>Unchecked</Tag>
          <Tag size="md" checked={true}  onCheckedChange={() => {}}>Checked</Tag>
          <Tag size="md" checked={false} onCheckedChange={() => {}} leftIcon={<Flag01Icon size={18} />}>With icon</Tag>
          <Tag size="md" checked={true}  onCheckedChange={() => {}} leftIcon={<Flag01Icon size={18} />}>With icon</Tag>
          <Tag size="md" checked={false} onCheckedChange={() => {}} onRemove={() => {}}>With dismiss</Tag>
        </div>
      </section>

    </div>
  ),
  name: 'All Variants',
}
