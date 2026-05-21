import type { Meta, StoryObj } from '@storybook/react'
import { ProgressCircle } from '../src/components/ProgressCircle'

const meta: Meta<typeof ProgressCircle> = {
  title: 'Components/ProgressCircle',
  component: ProgressCircle,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    value:     { control: { type: 'range', min: 0, max: 100, step: 1 } },
    size:      { control: 'select', options: ['xxs', 'xs', 'sm', 'md', 'lg'] },
    shape:     { control: 'select', options: ['circle', 'half'] },
    color:     { control: 'select', options: ['brand', 'success', 'warning', 'error'] },
    showValue: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof ProgressCircle>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: { value: 40, size: 'md', shape: 'circle', color: 'brand', label: 'Active users', showValue: true },
}

// ─── Sizes — circle ───────────────────────────────────────────────────────────

export const CircleSizes: Story = {
  render: () => (
    <div className="flex items-end gap-8 flex-wrap">
      <ProgressCircle size="xxs" value={40} label="Users"        />
      <ProgressCircle size="xs"  value={40} label="Active users" />
      <ProgressCircle size="sm"  value={40} label="Active users" />
      <ProgressCircle size="md"  value={40} label="Active users" />
      <ProgressCircle size="lg"  value={40} label="Active users" />
    </div>
  ),
  name: 'Sizes — Circle',
}

// ─── Sizes — half circle ──────────────────────────────────────────────────────

export const HalfCircleSizes: Story = {
  render: () => (
    <div className="flex items-end gap-8 flex-wrap">
      <ProgressCircle size="xxs" shape="half" value={40} label="Users"        />
      <ProgressCircle size="xs"  shape="half" value={40} label="Active users" />
      <ProgressCircle size="sm"  shape="half" value={40} label="Active users" />
      <ProgressCircle size="md"  shape="half" value={40} label="Active users" />
      <ProgressCircle size="lg"  shape="half" value={40} label="Active users" />
    </div>
  ),
  name: 'Sizes — Half Circle',
}

// ─── Colors ───────────────────────────────────────────────────────────────────

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-8 flex-wrap">
      <ProgressCircle color="brand"   value={60} label="Brand"   />
      <ProgressCircle color="success" value={75} label="Success" />
      <ProgressCircle color="warning" value={45} label="Warning" />
      <ProgressCircle color="error"   value={30} label="Error"   />
    </div>
  ),
}

// ─── Edge values ──────────────────────────────────────────────────────────────

export const EdgeValues: Story = {
  render: () => (
    <div className="flex items-center gap-8 flex-wrap">
      <ProgressCircle value={0}   label="0%"    />
      <ProgressCircle value={1}   label="1%"    />
      <ProgressCircle value={50}  label="50%"   />
      <ProgressCircle value={99}  label="99%"   />
      <ProgressCircle value={100} color="success" label="Done" />
    </div>
  ),
  name: 'Edge Values',
}

// ─── All variants ─────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-12 items-start">

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Circle — all sizes</p>
        <div className="flex items-end gap-6 flex-wrap">
          {(['xxs', 'xs', 'sm', 'md', 'lg'] as const).map(s => (
            <ProgressCircle key={s} size={s} value={40} label={s === 'xxs' ? 'Users' : 'Active users'} />
          ))}
        </div>
      </section>

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Half circle — all sizes</p>
        <div className="flex items-end gap-6 flex-wrap">
          {(['xxs', 'xs', 'sm', 'md', 'lg'] as const).map(s => (
            <ProgressCircle key={s} size={s} shape="half" value={40} label={s === 'xxs' ? 'Users' : 'Active users'} />
          ))}
        </div>
      </section>

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Colors</p>
        <div className="flex items-center gap-6 flex-wrap">
          {(['brand', 'success', 'warning', 'error'] as const).map(c => (
            <ProgressCircle key={c} size="sm" value={60} color={c} label={c} />
          ))}
        </div>
      </section>

    </div>
  ),
  name: 'All Variants',
}
