import type { Meta, StoryObj } from '@storybook/react'
import { SocialButton, type SocialProvider } from '../src/components/SocialButton'

const PROVIDERS: SocialProvider[] = ['google', 'facebook', 'apple', 'twitter', 'figma', 'dribbble']

const meta: Meta<typeof SocialButton> = {
  title: 'Components/SocialButton',
  component: SocialButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    provider: {
      control: 'select',
      options: PROVIDERS,
    },
    theme: {
      control: 'select',
      options: ['brand', 'color', 'gray'],
    },
    iconOnly: { control: 'boolean' },
    loading:  { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof SocialButton>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    provider: 'google',
    theme: 'color',
  },
}

// ─── All providers — Color theme ──────────────────────────────────────────────

export const ColorTheme: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      {PROVIDERS.map(p => (
        <SocialButton key={p} provider={p} theme="color" />
      ))}
    </div>
  ),
  name: 'Theme: Color (white bg + colored icon)',
}

// ─── All providers — Brand theme ──────────────────────────────────────────────

export const BrandTheme: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      {PROVIDERS.map(p => (
        <SocialButton key={p} provider={p} theme="brand" />
      ))}
    </div>
  ),
  name: 'Theme: Brand (provider bg)',
}

// ─── All providers — Gray theme ───────────────────────────────────────────────

export const GrayTheme: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      {PROVIDERS.map(p => (
        <SocialButton key={p} provider={p} theme="gray" />
      ))}
    </div>
  ),
  name: 'Theme: Gray (white bg + gray icon)',
}

// ─── Icon only ────────────────────────────────────────────────────────────────

export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs text-gray-400 mb-3">Color</p>
        <div className="flex items-center gap-3">
          {PROVIDERS.map(p => <SocialButton key={p} provider={p} theme="color" iconOnly />)}
        </div>
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-3">Brand</p>
        <div className="flex items-center gap-3">
          {PROVIDERS.map(p => <SocialButton key={p} provider={p} theme="brand" iconOnly />)}
        </div>
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-3">Gray</p>
        <div className="flex items-center gap-3">
          {PROVIDERS.map(p => <SocialButton key={p} provider={p} theme="gray" iconOnly />)}
        </div>
      </div>
    </div>
  ),
}

// ─── States ───────────────────────────────────────────────────────────────────

export const Loading: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <SocialButton provider="google" theme="color" loading />
      <SocialButton provider="facebook" theme="brand" loading />
      <SocialButton provider="google" theme="color" iconOnly loading />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      {(['color', 'brand', 'gray'] as const).map(theme => (
        <div key={theme} className="flex items-center gap-3">
          {PROVIDERS.slice(0, 3).map(p => (
            <SocialButton key={p} provider={p} theme={theme} disabled />
          ))}
        </div>
      ))}
    </div>
  ),
}

// ─── All themes × all providers ───────────────────────────────────────────────

export const AllThemes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {(['color', 'brand', 'gray'] as const).map(theme => (
        <div key={theme}>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{theme}</p>
          <div className="flex flex-col gap-2">
            {PROVIDERS.map(p => (
              <SocialButton key={p} provider={p} theme={theme} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  name: 'All Themes × All Providers',
}

// ─── Custom label ─────────────────────────────────────────────────────────────

export const CustomLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <SocialButton provider="google" theme="color">Continue with Google</SocialButton>
      <SocialButton provider="apple" theme="brand">Sign up with Apple</SocialButton>
      <SocialButton provider="figma" theme="gray">Connect Figma</SocialButton>
    </div>
  ),
}
