import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from '../src/components/Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size:  { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['gray', 'white', 'brand'] },
  },
}
export default meta
type Story = StoryObj<typeof Spinner>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: { size: 'md', color: 'brand' },
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner size="sm" color="brand" />
      <Spinner size="md" color="brand" />
      <Spinner size="lg" color="brand" />
    </div>
  ),
}

// ─── Colors ───────────────────────────────────────────────────────────────────

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-6 flex-wrap">
      <div className="flex flex-col items-center gap-2">
        <Spinner color="gray" size="md" />
        <span className="text-xs text-gray-500">gray</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner color="brand" size="md" />
        <span className="text-xs text-gray-500">brand</span>
      </div>
      <div className="flex flex-col items-center gap-2 bg-gray-800 rounded-lg p-3">
        <Spinner color="white" size="md" />
        <span className="text-xs text-gray-400">white</span>
      </div>
    </div>
  ),
}

// ─── In context ───────────────────────────────────────────────────────────────

export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-4">

      {/* In a primary button */}
      <button className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white">
        <Spinner size="sm" color="white" />
        Loading…
      </button>

      {/* In a secondary button */}
      <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700">
        <Spinner size="sm" color="gray" />
        Loading…
      </button>

      {/* Page-level loading */}
      <div className="flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-8">
        <Spinner size="lg" color="brand" />
        <span className="text-sm font-medium text-gray-600">Loading data…</span>
      </div>

    </div>
  ),
  name: 'In Context',
}

// ─── All variants ─────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {(['gray', 'brand'] as const).map(color => (
        <div key={color} className="flex flex-col gap-3">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{color}</p>
          <div className="flex items-center gap-6">
            {(['sm', 'md', 'lg'] as const).map(size => (
              <div key={size} className="flex flex-col items-center gap-2">
                <Spinner size={size} color={color} />
                <span className="text-xs text-gray-400">{size}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">white</p>
        <div className="flex items-center gap-6 bg-gray-900 rounded-lg p-4">
          {(['sm', 'md', 'lg'] as const).map(size => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Spinner size={size} color="white" />
              <span className="text-xs text-gray-500">{size}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  name: 'All Variants',
}
