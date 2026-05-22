import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from '../src/components/Divider'

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    label: { control: 'text' },
  },
}
export default meta
type Story = StoryObj<typeof Divider>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: { orientation: 'horizontal', label: '' },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
}

// ─── Horizontal ───────────────────────────────────────────────────────────────

export const Horizontal: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <p className="text-sm text-gray-600">Above the divider</p>
      <Divider />
      <p className="text-sm text-gray-600">Below the divider</p>
    </div>
  ),
}

// ─── With label ───────────────────────────────────────────────────────────────

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Divider label="or" />
      <Divider label="Continue with" />
      <Divider label="Section" />
    </div>
  ),
  name: 'With Label',
}

// ─── Vertical ─────────────────────────────────────────────────────────────────

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-4 h-8">
      <span className="text-sm text-gray-600">Left</span>
      <Divider orientation="vertical" />
      <span className="text-sm text-gray-600">Middle</span>
      <Divider orientation="vertical" />
      <span className="text-sm text-gray-600">Right</span>
    </div>
  ),
}

// ─── In context ───────────────────────────────────────────────────────────────

export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">

      {/* Auth form divider */}
      <div className="flex flex-col gap-4">
        <button className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700">
          Continue with Google
        </button>
        <Divider label="or" />
        <button className="w-full rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white">
          Sign in with email
        </button>
      </div>

      <Divider />

      {/* Navigation-style divider */}
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-600">Item one</span>
        <Divider />
        <span className="text-sm text-gray-600">Item two</span>
        <Divider />
        <span className="text-sm text-gray-600">Item three</span>
      </div>

    </div>
  ),
  name: 'In Context',
}
