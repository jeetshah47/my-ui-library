import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from '../src/components/ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    value:       { control: { type: 'range', min: 0, max: 100, step: 1 } },
    size:        { control: 'select', options: ['sm', 'md', 'lg'] },
    color:       { control: 'select', options: ['brand', 'success', 'warning', 'error'] },
    showPercent: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
}
export default meta
type Story = StoryObj<typeof ProgressBar>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: { value: 60, size: 'md', color: 'brand', label: 'Loading…', showPercent: true },
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <ProgressBar size="sm" value={40} label="Small (4px)" showPercent />
      <ProgressBar size="md" value={60} label="Medium (8px)" showPercent />
      <ProgressBar size="lg" value={80} label="Large (12px)" showPercent />
    </div>
  ),
}

// ─── Colors ───────────────────────────────────────────────────────────────────

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <ProgressBar color="brand"   value={60} label="Brand"   showPercent />
      <ProgressBar color="success" value={75} label="Success" showPercent />
      <ProgressBar color="warning" value={45} label="Warning" showPercent />
      <ProgressBar color="error"   value={30} label="Error"   showPercent />
    </div>
  ),
}

// ─── Without label ────────────────────────────────────────────────────────────

export const Bare: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-80">
      <ProgressBar value={25} />
      <ProgressBar value={50} color="success" />
      <ProgressBar value={75} color="warning" size="lg" />
    </div>
  ),
  name: 'Bare (no label)',
}

// ─── Edge values ──────────────────────────────────────────────────────────────

export const EdgeValues: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <ProgressBar value={0}   label="Empty"    showPercent />
      <ProgressBar value={1}   label="1%"       showPercent />
      <ProgressBar value={50}  label="Half"     showPercent />
      <ProgressBar value={99}  label="Almost"   showPercent />
      <ProgressBar value={100} label="Complete" showPercent color="success" />
    </div>
  ),
  name: 'Edge Values',
}

// ─── All variants ─────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-96">
      {(['brand', 'success', 'warning', 'error'] as const).map(color => (
        <div key={color} className="flex flex-col gap-3">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider capitalize">{color}</p>
          <ProgressBar size="sm" value={35} color={color} />
          <ProgressBar size="md" value={60} color={color} label="With label" showPercent />
          <ProgressBar size="lg" value={85} color={color} />
        </div>
      ))}
    </div>
  ),
  name: 'All Variants',
}
