import type { Meta, StoryObj } from '@storybook/react'
import { Toggle } from '../src/components/Toggle'

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size:    { control: 'select', options: ['sm', 'md'] },
    variant: { control: 'select', options: ['default', 'slim'] },
    checked: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof Toggle>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: { size: 'md', variant: 'default', label: 'Remember me', hint: 'Save my login details for next time.' },
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Toggle size="sm" defaultChecked />
        <Toggle size="md" defaultChecked />
      </div>
      <div className="flex items-center gap-4">
        <Toggle size="sm" />
        <Toggle size="md" />
      </div>
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
            <Toggle size={size} />
            <Toggle size={size} defaultChecked />
            <Toggle size={size} disabled />
            <Toggle size={size} defaultChecked disabled />
          </div>
        </div>
      ))}
    </div>
  ),
}

// ─── Slim variant ─────────────────────────────────────────────────────────────

export const Slim: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md'] as const).map(size => (
        <div key={size} className="flex flex-col gap-3">
          <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">slim {size}</p>
          <div className="flex items-center gap-6 flex-wrap">
            <Toggle size={size} variant="slim" />
            <Toggle size={size} variant="slim" defaultChecked />
            <Toggle size={size} variant="slim" disabled />
            <Toggle size={size} variant="slim" defaultChecked disabled />
          </div>
        </div>
      ))}
    </div>
  ),
  name: 'Slim Variant',
}

// ─── With label ───────────────────────────────────────────────────────────────

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md'] as const).map(size => (
        <div key={size} className="flex flex-col gap-3">
          <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">{size}</p>
          <Toggle size={size} label="Remember me" />
          <Toggle size={size} label="Remember me" hint="Save my login details for next time." />
          <Toggle size={size} label="Remember me" hint="Save my login details for next time." defaultChecked />
          <Toggle size={size} label="Disabled" hint="This option is not available." disabled />
          <Toggle size={size} label="Checked disabled" defaultChecked disabled />
        </div>
      ))}
    </div>
  ),
  name: 'With Label & Hint',
}

// ─── Slim with label ──────────────────────────────────────────────────────────

export const SlimWithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toggle size="md" variant="slim" label="Remember me" hint="Save my login details for next time." />
      <Toggle size="md" variant="slim" label="Remember me" hint="Save my login details for next time." defaultChecked />
      <Toggle size="md" variant="slim" label="Disabled" hint="This option is not available." disabled />
    </div>
  ),
  name: 'Slim with Label',
}

// ─── All variants ─────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 items-start">

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Default — all states</p>
        <div className="flex flex-col gap-4">
          {(['sm', 'md'] as const).map(size => (
            <div key={size} className="flex items-center gap-6 flex-wrap">
              <span className="text-xs text-gray-400 w-4">{size}</span>
              <Toggle size={size} />
              <Toggle size={size} defaultChecked />
              <Toggle size={size} disabled />
              <Toggle size={size} defaultChecked disabled />
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Slim — all states</p>
        <div className="flex flex-col gap-4">
          {(['sm', 'md'] as const).map(size => (
            <div key={size} className="flex items-center gap-6 flex-wrap">
              <span className="text-xs text-gray-400 w-4">{size}</span>
              <Toggle size={size} variant="slim" />
              <Toggle size={size} variant="slim" defaultChecked />
              <Toggle size={size} variant="slim" disabled />
              <Toggle size={size} variant="slim" defaultChecked disabled />
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">With label & hint</p>
        <div className="flex flex-col gap-3">
          <Toggle size="md" label="Unchecked" hint="Toggle is off." />
          <Toggle size="md" label="Checked" hint="Toggle is on." defaultChecked />
          <Toggle size="md" label="Disabled off" hint="Cannot be toggled." disabled />
          <Toggle size="md" label="Disabled on" defaultChecked disabled />
        </div>
      </section>

    </div>
  ),
  name: 'All Variants',
}
