import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../src/components/Input'

// ─── Demo icons (20×20 — leading) ────────────────────────────────────────────

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M1.667 5.833 10 11.667l8.333-5.834M2.5 16.667h15a.833.833 0 0 0 .833-.834V4.167a.833.833 0 0 0-.833-.834h-15a.833.833 0 0 0-.833.834v11.666c0 .46.373.834.833.834Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M17.5 17.5 13.875 13.875M15.833 9.167a6.667 6.667 0 1 1-13.333 0 6.667 6.667 0 0 1 13.333 0Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M16.667 17.5c0-1.841-1.491-3.333-3.334-3.333H6.667c-1.843 0-3.334 1.492-3.334 3.333M13.333 5.833a3.333 3.333 0 1 1-6.666 0 3.333 3.333 0 0 1 6.666 0Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2.5 4.167C2.5 3.246 3.246 2.5 4.167 2.5h2.146a.833.833 0 0 1 .784.553l1.074 3.22a.833.833 0 0 1-.19.866L6.544 8.477a9.167 9.167 0 0 0 4.98 4.98l1.337-1.438a.833.833 0 0 1 .867-.19l3.22 1.074a.833.833 0 0 1 .552.784v2.146c0 .92-.746 1.667-1.667 1.667C7.635 17.5 2.5 12.365 2.5 6.25V4.167Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Demo icons (16×16 — trailing) ───────────────────────────────────────────

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M1.333 8S3.333 3.333 8 3.333 14.667 8 14.667 8 12.667 12.667 8 12.667 1.333 8 1.333 8Z"
        stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="8" r="2"
        stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function EyeOffIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 2l12 12M6.666 6.723A2 2 0 0 0 9.277 9.334M3.457 3.538C2.33 4.434 1.333 6 1.333 8c0 0 2 4.667 6.667 4.667a6.4 6.4 0 0 0 3.21-.876M6 2.667A6.4 6.4 0 0 1 8 2.333c4.667 0 6.667 5.667 6.667 5.667s-.498 1.35-1.538 2.462"
        stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size:         { control: 'select', options: ['sm', 'md'] },
    label:        { control: 'text' },
    hint:         { control: 'text' },
    errorMessage: { control: 'text' },
    isError:      { control: 'boolean' },
    helpIcon:     { control: 'boolean' },
    placeholder:  { control: 'text' },
    disabled:     { control: 'boolean' },
    required:     { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof Input>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    size: 'md',
    label: 'Email',
    placeholder: 'olivia@untitledui.com',
    hint: 'This is a hint text to help user.',
    helpIcon: true,
    isError: false,
    required: true,
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Input
        size="sm"
        label="Small"
        placeholder="olivia@untitledui.com"
        hint="This is a hint text to help user."
        helpIcon
        required
      />
      <Input
        size="md"
        label="Medium"
        placeholder="olivia@untitledui.com"
        hint="This is a hint text to help user."
        helpIcon
        required
      />
    </div>
  ),
}

// ─── States ───────────────────────────────────────────────────────────────────

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      {/* Placeholder */}
      <Input
        label="Placeholder"
        placeholder="olivia@untitledui.com"
        hint="This is a hint text to help user."
        helpIcon
        required
      />
      {/* Filled (defaultValue simulates filled) */}
      <Input
        label="Filled"
        defaultValue="olivia@untitledui.com"
        hint="This is a hint text to help user."
        helpIcon
        required
      />
      {/* Disabled */}
      <Input
        label="Disabled"
        placeholder="olivia@untitledui.com"
        hint="This is a hint text to help user."
        helpIcon
        required
        disabled
      />
    </div>
  ),
  name: 'States',
}

// ─── Error / Destructive ──────────────────────────────────────────────────────

export const ErrorStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      {/* Error idle */}
      <Input
        label="Error (idle)"
        placeholder="olivia@untitledui.com"
        isError
        errorMessage="This is an error message."
        required
      />
      {/* Error filled */}
      <Input
        label="Error (filled)"
        defaultValue="invalid-email"
        isError
        errorMessage="This is an error message."
        required
      />
    </div>
  ),
  name: 'Error States',
}

// ─── With Leading Icon ────────────────────────────────────────────────────────

export const WithLeadingIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Input
        label="Email"
        placeholder="olivia@untitledui.com"
        leadingIcon={<MailIcon />}
        hint="This is a hint text to help user."
        helpIcon
        required
      />
      <Input
        label="Search"
        placeholder="Search…"
        leadingIcon={<SearchIcon />}
      />
      <Input
        label="Full name"
        placeholder="Olivia Rhye"
        leadingIcon={<UserIcon />}
        required
      />
      <Input
        label="Phone number"
        type="tel"
        placeholder="+1 (555) 000-0000"
        leadingIcon={<PhoneIcon />}
      />
    </div>
  ),
  name: 'With Leading Icon',
}

// ─── With Trailing Icon ───────────────────────────────────────────────────────

export const WithTrailingIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      {/* Custom trailing icon (password) */}
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        trailingIcon={<EyeIcon />}
        hint="Must be at least 8 characters."
      />
      {/* Help icon (default) */}
      <Input
        label="Website"
        type="url"
        placeholder="https://www.example.com"
        helpIcon
        hint="Include the full URL with https://"
      />
      {/* Error with auto alert-circle */}
      <Input
        label="Email"
        defaultValue="not-an-email"
        isError
        errorMessage="This is an error message."
      />
    </div>
  ),
  name: 'With Trailing Icon',
}

// ─── Required & Hint ──────────────────────────────────────────────────────────

export const LabelVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      {/* No label */}
      <Input placeholder="No label" hint="This is a hint text to help user." />
      {/* Label only */}
      <Input label="Label" placeholder="Placeholder" />
      {/* Label + hint */}
      <Input label="Label" placeholder="Placeholder" hint="This is a hint text to help user." />
      {/* Required */}
      <Input label="Required field" placeholder="Placeholder" required hint="This field is required." />
    </div>
  ),
  name: 'Label Variants',
}

// ─── All sizes × states grid ─────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-12">
      {(['sm', 'md'] as const).map(size => (
        <div key={size} className="flex flex-col gap-6 w-80">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{size}</p>

          {/* Placeholder */}
          <Input size={size} label="Placeholder" placeholder="olivia@untitledui.com"
            hint="This is a hint text to help user." helpIcon required />

          {/* Filled */}
          <Input size={size} label="Filled" defaultValue="olivia@untitledui.com"
            hint="This is a hint text to help user." helpIcon required />

          {/* With leading icon */}
          <Input size={size} label="With icon" placeholder="olivia@untitledui.com"
            leadingIcon={<MailIcon />} hint="This is a hint text to help user." helpIcon required />

          {/* Disabled */}
          <Input size={size} label="Disabled" placeholder="olivia@untitledui.com"
            hint="This is a hint text to help user." helpIcon required disabled />

          {/* Error idle */}
          <Input size={size} label="Error" placeholder="olivia@untitledui.com"
            isError errorMessage="This is an error message." required />

          {/* Error with icon */}
          <Input size={size} label="Error + icon" defaultValue="invalid"
            leadingIcon={<MailIcon />} isError errorMessage="This is an error message." required />
        </div>
      ))}
    </div>
  ),
  name: 'All Variants',
}

// ─── In context ───────────────────────────────────────────────────────────────

export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-gray-900">Create an account</h2>
        <p className="text-sm text-gray-600">Start your 30-day free trial today.</p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex gap-4">
          <Input label="First name" placeholder="Olivia" required size="md" />
          <Input label="Last name" placeholder="Rhye" required size="md" />
        </div>

        <Input
          label="Email"
          type="email"
          placeholder="olivia@untitledui.com"
          leadingIcon={<MailIcon />}
          helpIcon
          required
        />

        <Input
          label="Password"
          type="password"
          placeholder="Create a password"
          trailingIcon={<EyeIcon />}
          hint="Must be at least 8 characters."
          required
        />

        {/* Error example */}
        <Input
          label="Company website"
          type="url"
          defaultValue="not-a-url"
          isError
          errorMessage="Please enter a valid URL."
        />
      </div>

      <button className="w-full rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors">
        Get started
      </button>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <a href="#" className="font-semibold text-brand-600 hover:text-brand-700">Log in</a>
      </p>
    </div>
  ),
  name: 'In Context',
}
