import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from '../src/components/Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    side:  { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    align: { control: 'select', options: ['start', 'center', 'end'] },
    showArrow: { control: 'boolean' },
    delayDuration: { control: 'number' },
  },
}
export default meta
type Story = StoryObj<typeof Tooltip>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    content: 'This is a tooltip',
    supportingText: undefined,
    side: 'top',
    align: 'center',
    showArrow: true,
  },
  render: (args) => (
    <Tooltip {...args}>
      <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700">
        Hover me
      </button>
    </Tooltip>
  ),
}

// ─── Label only ───────────────────────────────────────────────────────────────

export const LabelOnly: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      {(['top', 'bottom', 'left', 'right'] as const).map(side => (
        <Tooltip key={side} content="This is a tooltip" side={side}>
          <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 capitalize">
            {side}
          </button>
        </Tooltip>
      ))}
    </div>
  ),
  name: 'Label Only — Sides',
}

// ─── With supporting text ─────────────────────────────────────────────────────

export const WithSupportingText: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      {(['top', 'bottom', 'left', 'right'] as const).map(side => (
        <Tooltip
          key={side}
          content="This is a tooltip"
          supportingText="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."
          side={side}
        >
          <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 capitalize">
            {side}
          </button>
        </Tooltip>
      ))}
    </div>
  ),
  name: 'With Supporting Text',
}

// ─── Arrow alignment ──────────────────────────────────────────────────────────

export const ArrowAlignment: Story = {
  render: () => (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex gap-6">
        {(['start', 'center', 'end'] as const).map(align => (
          <Tooltip key={align} content="This is a tooltip" side="top" align={align}>
            <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 capitalize">
              top / {align}
            </button>
          </Tooltip>
        ))}
      </div>
      <div className="flex gap-6">
        {(['start', 'center', 'end'] as const).map(align => (
          <Tooltip key={align} content="This is a tooltip" side="bottom" align={align}>
            <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 capitalize">
              bottom / {align}
            </button>
          </Tooltip>
        ))}
      </div>
    </div>
  ),
  name: 'Arrow Alignment',
}

// ─── No arrow ─────────────────────────────────────────────────────────────────

export const NoArrow: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Tooltip content="This is a tooltip" showArrow={false}>
        <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700">
          No arrow
        </button>
      </Tooltip>
      <Tooltip
        content="This is a tooltip"
        supportingText="Tooltips help users understand meaning, function or alt-text."
        showArrow={false}
      >
        <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700">
          No arrow + description
        </button>
      </Tooltip>
    </div>
  ),
  name: 'No Arrow',
}

// ─── All variants ─────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-12 items-center">

      <section className="flex flex-col gap-3 items-center">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Label only</p>
        <div className="flex gap-4">
          {(['top', 'bottom', 'left', 'right'] as const).map(side => (
            <Tooltip key={side} content="This is a tooltip" side={side}>
              <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 capitalize">
                {side}
              </button>
            </Tooltip>
          ))}
          <Tooltip content="This is a tooltip" showArrow={false}>
            <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700">
              no arrow
            </button>
          </Tooltip>
        </div>
      </section>

      <section className="flex flex-col gap-3 items-center">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">With supporting text</p>
        <div className="flex gap-4">
          {(['top', 'bottom', 'left', 'right'] as const).map(side => (
            <Tooltip
              key={side}
              content="This is a tooltip"
              supportingText="Tooltips help users understand meaning, function or alt-text."
              side={side}
            >
              <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 capitalize">
                {side}
              </button>
            </Tooltip>
          ))}
        </div>
      </section>

    </div>
  ),
  name: 'All Variants',
}
