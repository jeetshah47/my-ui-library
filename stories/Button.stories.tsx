import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../src/components/Button'
import { SearchMdIcon, PlusIcon, ArrowRightIcon, DownloadCloud01Icon } from '../src/icons'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'link', 'link-gray'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    destructive: { control: 'boolean' },
    loading:     { control: 'boolean' },
    disabled:    { control: 'boolean' },
    iconOnly:    { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof Button>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    children: 'Button CTA',
    variant: 'primary',
    size: 'md',
  },
}

// ─── Variants ─────────────────────────────────────────────────────────────────

export const Primary: Story = {
  args: { children: 'Button CTA', variant: 'primary' },
}

export const Secondary: Story = {
  args: { children: 'Button CTA', variant: 'secondary' },
}

export const Tertiary: Story = {
  args: { children: 'Button CTA', variant: 'tertiary' },
}

export const LinkColor: Story = {
  args: { children: 'Button CTA', variant: 'link' },
  name: 'Link (color)',
}

export const LinkGray: Story = {
  args: { children: 'Button CTA', variant: 'link-gray' },
  name: 'Link (gray)',
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">X-Large</Button>
    </div>
  ),
}

// ─── With Icons ───────────────────────────────────────────────────────────────

export const WithLeftIcon: Story = {
  args: { children: 'Download', variant: 'primary', leftIcon: <DownloadCloud01Icon size={20} /> },
}

export const WithRightIcon: Story = {
  args: { children: 'Continue', variant: 'primary', rightIcon: <ArrowRightIcon size={20} /> },
}

export const IconOnly: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm" iconOnly leftIcon={<SearchMdIcon size={20} />} aria-label="Search" />
      <Button size="md" iconOnly leftIcon={<SearchMdIcon size={20} />} aria-label="Search" />
      <Button size="lg" iconOnly leftIcon={<PlusIcon size={20} />} aria-label="Add" />
      <Button size="xl" iconOnly leftIcon={<PlusIcon size={20} />} aria-label="Add" />
    </div>
  ),
}

// ─── States ───────────────────────────────────────────────────────────────────

export const Loading: Story = {
  args: { children: 'Saving...', variant: 'primary', loading: true },
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="primary" disabled>Primary</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="tertiary" disabled>Tertiary</Button>
      <Button variant="link" disabled>Link</Button>
    </div>
  ),
}

// ─── Destructive ──────────────────────────────────────────────────────────────

export const Destructive: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Button variant="primary" destructive>Delete account</Button>
        <Button variant="secondary" destructive>Delete account</Button>
        <Button variant="tertiary" destructive>Delete account</Button>
        <Button variant="link" destructive>Delete account</Button>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="primary" destructive disabled>Disabled</Button>
        <Button variant="secondary" destructive disabled>Disabled</Button>
      </div>
    </div>
  ),
}

// ─── All variants at all sizes ────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {(['primary', 'secondary', 'tertiary', 'link', 'link-gray'] as const).map(variant => (
        <div key={variant} className="flex items-center gap-3">
          {(['sm', 'md', 'lg', 'xl'] as const).map(size => (
            <Button key={size} variant={variant} size={size}>
              {variant} {size}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
  name: 'All Variants × Sizes',
}

// ─── AsChild (polymorphic) ────────────────────────────────────────────────────

export const AsLink: Story = {
  render: () => (
    <Button asChild variant="primary">
      <a href="#top">Open link</a>
    </Button>
  ),
  name: 'asChild (renders as <a>)',
}
