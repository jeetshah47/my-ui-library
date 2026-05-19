import type { Meta, StoryObj } from '@storybook/react'
import { ButtonGroup, ButtonGroupItem } from '../src/components/ButtonGroup'
import { Grid01Icon, ListIcon, BarChart01Icon, CalendarIcon, LayoutAlt01Icon } from '../src/icons'

const meta: Meta = {
  title: 'Components/ButtonGroup',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj

// ─── Text only ────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupItem>Monthly</ButtonGroupItem>
      <ButtonGroupItem current>Annual</ButtonGroupItem>
      <ButtonGroupItem>One-time</ButtonGroupItem>
    </ButtonGroup>
  ),
}

export const FourItems: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupItem>Day</ButtonGroupItem>
      <ButtonGroupItem>Week</ButtonGroupItem>
      <ButtonGroupItem current>Month</ButtonGroupItem>
      <ButtonGroupItem>Year</ButtonGroupItem>
    </ButtonGroup>
  ),
}

// ─── With leading icon ────────────────────────────────────────────────────────

export const WithLeadingIcon: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupItem leftIcon={<Grid01Icon size={16} />}>Grid</ButtonGroupItem>
      <ButtonGroupItem leftIcon={<ListIcon size={16} />} current>List</ButtonGroupItem>
      <ButtonGroupItem leftIcon={<BarChart01Icon size={16} />}>Chart</ButtonGroupItem>
    </ButtonGroup>
  ),
}

// ─── Icon only ────────────────────────────────────────────────────────────────

export const IconOnly: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupItem iconOnly leftIcon={<Grid01Icon size={20} />} aria-label="Grid view" />
      <ButtonGroupItem iconOnly current leftIcon={<ListIcon size={20} />} aria-label="List view" />
      <ButtonGroupItem iconOnly leftIcon={<LayoutAlt01Icon size={20} />} aria-label="Layout view" />
    </ButtonGroup>
  ),
}

// ─── With dot indicator ───────────────────────────────────────────────────────

export const WithDot: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupItem dot>Overview</ButtonGroupItem>
      <ButtonGroupItem dot current>Analytics</ButtonGroupItem>
      <ButtonGroupItem dot>Reports</ButtonGroupItem>
    </ButtonGroup>
  ),
}

// ─── States ───────────────────────────────────────────────────────────────────

export const WithDisabled: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupItem>Active</ButtonGroupItem>
      <ButtonGroupItem current>Selected</ButtonGroupItem>
      <ButtonGroupItem disabled>Disabled</ButtonGroupItem>
    </ButtonGroup>
  ),
}

// ─── Two items ────────────────────────────────────────────────────────────────

export const TwoItems: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupItem leftIcon={<CalendarIcon size={16} />} current>Calendar</ButtonGroupItem>
      <ButtonGroupItem leftIcon={<ListIcon size={16} />}>List</ButtonGroupItem>
    </ButtonGroup>
  ),
}

// ─── All variants ─────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 items-start">
      <div>
        <p className="text-xs text-gray-400 mb-2">Text only</p>
        <ButtonGroup>
          <ButtonGroupItem>Option A</ButtonGroupItem>
          <ButtonGroupItem current>Option B</ButtonGroupItem>
          <ButtonGroupItem>Option C</ButtonGroupItem>
        </ButtonGroup>
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-2">Leading icon</p>
        <ButtonGroup>
          <ButtonGroupItem leftIcon={<Grid01Icon size={16} />}>Grid</ButtonGroupItem>
          <ButtonGroupItem leftIcon={<ListIcon size={16} />} current>List</ButtonGroupItem>
          <ButtonGroupItem leftIcon={<BarChart01Icon size={16} />}>Chart</ButtonGroupItem>
        </ButtonGroup>
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-2">Icon only</p>
        <ButtonGroup>
          <ButtonGroupItem iconOnly leftIcon={<Grid01Icon size={20} />} aria-label="Grid" />
          <ButtonGroupItem iconOnly current leftIcon={<ListIcon size={20} />} aria-label="List" />
          <ButtonGroupItem iconOnly leftIcon={<LayoutAlt01Icon size={20} />} aria-label="Layout" />
        </ButtonGroup>
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-2">With dot</p>
        <ButtonGroup>
          <ButtonGroupItem dot>Overview</ButtonGroupItem>
          <ButtonGroupItem dot current>Analytics</ButtonGroupItem>
          <ButtonGroupItem dot>Reports</ButtonGroupItem>
        </ButtonGroup>
      </div>
    </div>
  ),
  name: 'All Variants',
}
