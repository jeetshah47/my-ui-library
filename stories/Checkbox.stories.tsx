import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Checkbox } from '../src/components/Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size:    { control: 'select', options: ['sm', 'md'] },
    variant: { control: 'select', options: ['checkbox', 'radio'] },
    checked: { control: 'select', options: [true, false, 'indeterminate'] },
  },
}
export default meta
type Story = StoryObj<typeof Checkbox>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: { size: 'md', variant: 'checkbox', label: 'Remember me', hint: 'Save my login details for next time.' },
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox size="sm" label="Small checkbox" hint="Helper text" defaultChecked />
      <Checkbox size="md" label="Medium checkbox" hint="Helper text" defaultChecked />
    </div>
  ),
}

// ─── States ───────────────────────────────────────────────────────────────────

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md'] as const).map(size => (
        <div key={size} className="flex flex-col gap-3">
          <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">{size}</p>
          <div className="flex items-center gap-6 flex-wrap">
            <Checkbox size={size} />
            <Checkbox size={size} defaultChecked />
            <Checkbox size={size} checked="indeterminate" onCheckedChange={() => {}} />
            <Checkbox size={size} disabled />
            <Checkbox size={size} defaultChecked disabled />
          </div>
        </div>
      ))}
    </div>
  ),
}

// ─── With label ───────────────────────────────────────────────────────────────

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md'] as const).map(size => (
        <div key={size} className="flex flex-col gap-3">
          <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">{size}</p>
          <Checkbox size={size} label="I agree to the terms and conditions" />
          <Checkbox size={size} label="Receive marketing emails" hint="You can unsubscribe at any time." />
          <Checkbox size={size} label="Remember me" hint="Save my login details for next time." defaultChecked />
          <Checkbox size={size} label="Disabled option" hint="This option is not available." disabled />
          <Checkbox size={size} label="Checked disabled" defaultChecked disabled />
        </div>
      ))}
    </div>
  ),
  name: 'With Label & Hint',
}

// ─── Radio variant ────────────────────────────────────────────────────────────

export const RadioVariant: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md'] as const).map(size => (
        <div key={size} className="flex flex-col gap-3">
          <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">{size}</p>
          <div className="flex items-center gap-6">
            <Checkbox size={size} variant="radio" />
            <Checkbox size={size} variant="radio" defaultChecked />
            <Checkbox size={size} variant="radio" disabled />
            <Checkbox size={size} variant="radio" defaultChecked disabled />
          </div>
        </div>
      ))}
    </div>
  ),
  name: 'Radio Variant',
}

// ─── Radio with label ─────────────────────────────────────────────────────────

export const RadioWithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox size="md" variant="radio" label="Default option" />
      <Checkbox size="md" variant="radio" label="Option with hint" hint="This is extra info." />
      <Checkbox size="md" variant="radio" label="Selected option" hint="This one is selected." defaultChecked />
      <Checkbox size="md" variant="radio" label="Disabled option" disabled />
    </div>
  ),
  name: 'Radio with Label',
}

// ─── Indeterminate ────────────────────────────────────────────────────────────

export const Indeterminate: Story = {
  render: function IndeterminateStory() {
    const [items, setItems] = useState([false, true, false])
    const allChecked = items.every(Boolean)
    const someChecked = items.some(Boolean) && !allChecked

    function toggleAll() {
      setItems(items.map(() => !allChecked))
    }

    return (
      <div className="flex flex-col gap-3">
        <Checkbox
          size="md"
          label="Select all"
          checked={someChecked ? 'indeterminate' : allChecked}
          onCheckedChange={toggleAll}
        />
        <div className="ml-8 flex flex-col gap-3 border-l border-gray-100 pl-4">
          {['Option A', 'Option B', 'Option C'].map((opt, i) => (
            <Checkbox
              key={opt}
              size="md"
              label={opt}
              checked={items[i]}
              onCheckedChange={v => {
                const next = [...items]
                next[i] = v === true
                setItems(next)
              }}
            />
          ))}
        </div>
      </div>
    )
  },
  name: 'Indeterminate (select-all)',
}

// ─── Checkbox group ───────────────────────────────────────────────────────────

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-semibold text-gray-700">Notification preferences</p>
      <Checkbox size="md" label="Email notifications" hint="Get notified by email." defaultChecked />
      <Checkbox size="md" label="Push notifications" hint="Get push alerts on your device." />
      <Checkbox size="md" label="SMS notifications" hint="Receive text message alerts." />
    </div>
  ),
  name: 'Checkbox Group',
}

// ─── All variants overview ────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 items-start">

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Checkbox — all states</p>
        <div className="flex flex-col gap-4">
          {(['sm', 'md'] as const).map(size => (
            <div key={size} className="flex items-center gap-6 flex-wrap">
              <span className="text-xs text-gray-400 w-4">{size}</span>
              <Checkbox size={size} />
              <Checkbox size={size} defaultChecked />
              <Checkbox size={size} checked="indeterminate" onCheckedChange={() => {}} />
              <Checkbox size={size} disabled />
              <Checkbox size={size} defaultChecked disabled />
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Radio variant — all states</p>
        <div className="flex flex-col gap-4">
          {(['sm', 'md'] as const).map(size => (
            <div key={size} className="flex items-center gap-6 flex-wrap">
              <span className="text-xs text-gray-400 w-4">{size}</span>
              <Checkbox size={size} variant="radio" />
              <Checkbox size={size} variant="radio" defaultChecked />
              <Checkbox size={size} variant="radio" disabled />
              <Checkbox size={size} variant="radio" defaultChecked disabled />
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">With label & hint</p>
        <div className="flex flex-col gap-3">
          <Checkbox size="md" label="Unchecked with hint" hint="Some helper text goes here." />
          <Checkbox size="md" label="Checked with hint" hint="Some helper text goes here." defaultChecked />
          <Checkbox size="md" label="Disabled" hint="This option is unavailable." disabled />
          <Checkbox size="md" label="Checked disabled" hint="This option is unavailable." defaultChecked disabled />
        </div>
      </section>

    </div>
  ),
  name: 'All Variants',
}
