import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, RadioGroupItem } from '../src/components/RadioGroup'

const meta: Meta<typeof RadioGroupItem> = {
  title: 'Components/RadioGroup',
  component: RadioGroupItem,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
    disabled: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof RadioGroupItem>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option-1" className="w-80">
      <RadioGroupItem {...args} value="option-1" label="Option 1" description="This is the first option." />
      <RadioGroupItem {...args} value="option-2" label="Option 2" description="This is the second option." />
      <RadioGroupItem {...args} value="option-3" label="Option 3" description="This is the third option." />
    </RadioGroup>
  ),
  args: { size: 'md' },
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {(['sm', 'md'] as const).map(size => (
        <div key={size} className="flex flex-col gap-3">
          <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">{size}</p>
          <RadioGroup defaultValue="a" className="w-80">
            <RadioGroupItem size={size} value="a" label="Default plan" description="Up to 3 users — perfect for small teams." />
            <RadioGroupItem size={size} value="b" label="Startup plan" description="Up to 20 users and extended storage." />
          </RadioGroup>
        </div>
      ))}
    </div>
  ),
}

// ─── States ───────────────────────────────────────────────────────────────────

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {(['sm', 'md'] as const).map(size => (
        <div key={size} className="flex flex-col gap-3">
          <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">{size}</p>
          <RadioGroup defaultValue="selected" className="w-80">
            <RadioGroupItem size={size} value="unselected" label="Unselected" description="Default unchecked state." />
            <RadioGroupItem size={size} value="selected" label="Selected" description="Active checked state." />
            <RadioGroupItem size={size} value="disabled-off" label="Disabled" description="This option is unavailable." disabled />
            <RadioGroupItem size={size} value="disabled-on" label="Disabled selected" description="Checked but not editable." disabled />
          </RadioGroup>
        </div>
      ))}
    </div>
  ),
}

// ─── Without description ──────────────────────────────────────────────────────

export const LabelOnly: Story = {
  render: () => (
    <RadioGroup defaultValue="b" className="w-72">
      <RadioGroupItem value="a" label="Personal" />
      <RadioGroupItem value="b" label="Startup" />
      <RadioGroupItem value="c" label="Enterprise" />
    </RadioGroup>
  ),
  name: 'Label Only',
}

// ─── All variants ─────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-10 items-start">
      {(['sm', 'md'] as const).map(size => (
        <section key={size}>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Size: {size}</p>
          <div className="flex gap-6">

            <div className="flex flex-col gap-2">
              <p className="text-xs text-gray-400 mb-1">With description</p>
              <RadioGroup defaultValue="b" className="w-72">
                <RadioGroupItem size={size} value="a" label="Free tier" description="For individuals and small projects." />
                <RadioGroupItem size={size} value="b" label="Pro plan" description="For growing teams with more needs." />
                <RadioGroupItem size={size} value="c" label="Enterprise" description="Tailored for large organisations." disabled />
              </RadioGroup>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs text-gray-400 mb-1">Label only</p>
              <RadioGroup defaultValue="y" className="w-52">
                <RadioGroupItem size={size} value="x" label="Monthly" />
                <RadioGroupItem size={size} value="y" label="Annual" />
                <RadioGroupItem size={size} value="z" label="Custom" disabled />
              </RadioGroup>
            </div>

          </div>
        </section>
      ))}
    </div>
  ),
  name: 'All Variants',
}
