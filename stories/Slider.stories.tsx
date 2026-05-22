import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from '../src/components/Slider'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    step:     { control: { type: 'number', min: 1, max: 25 } },
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
}
export default meta
type Story = StoryObj<typeof Slider>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: { defaultValue: [40], label: 'Volume', min: 0, max: 100, step: 1 },
}

// ─── Single value ─────────────────────────────────────────────────────────────

export const SingleValue: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Slider defaultValue={[0]}   label="0%" />
      <Slider defaultValue={[25]}  label="25%" />
      <Slider defaultValue={[50]}  label="50%" />
      <Slider defaultValue={[75]}  label="75%" />
      <Slider defaultValue={[100]} label="100%" />
    </div>
  ),
  name: 'Single Value',
}

// ─── Range ────────────────────────────────────────────────────────────────────

export const Range: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Slider defaultValue={[0, 100]}  label="Full range" />
      <Slider defaultValue={[25, 75]}  label="Middle range" />
      <Slider defaultValue={[40, 60]}  label="Narrow range" />
    </div>
  ),
  name: 'Range (two thumbs)',
}

// ─── With step ────────────────────────────────────────────────────────────────

export const WithStep: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Slider defaultValue={[50]} label="Step 10" step={10} />
      <Slider defaultValue={[25, 75]} label="Range — step 25" step={25} />
    </div>
  ),
  name: 'With Step',
}

// ─── Disabled ─────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Slider defaultValue={[40]} label="Disabled single" disabled />
      <Slider defaultValue={[20, 70]} label="Disabled range" disabled />
    </div>
  ),
}

// ─── No label ─────────────────────────────────────────────────────────────────

export const NoLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Slider defaultValue={[60]} />
      <Slider defaultValue={[20, 80]} />
    </div>
  ),
  name: 'No Label',
}
