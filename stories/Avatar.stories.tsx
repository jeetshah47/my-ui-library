import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarGroup } from '../src/components/Avatar'

const PHOTO = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=face'
const PHOTO2 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=face'
const PHOTO3 = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop&crop=face'
const PHOTO4 = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop&crop=face'
const PHOTO5 = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=face'

const SIZES = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size:     { control: 'select', options: SIZES },
    online:   { control: 'boolean' },
    verified: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof Avatar>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: { src: PHOTO, alt: 'User avatar', size: 'md' },
}

// ─── Sizes — image ────────────────────────────────────────────────────────────

export const SizesImage: Story = {
  render: () => (
    <div className="flex items-end gap-3">
      {SIZES.map(size => <Avatar key={size} size={size} src={PHOTO} alt="User" />)}
    </div>
  ),
  name: 'Sizes — Image',
}

// ─── Sizes — initials ─────────────────────────────────────────────────────────

export const SizesInitials: Story = {
  render: () => (
    <div className="flex items-end gap-3">
      {SIZES.map(size => <Avatar key={size} size={size} fallback="JD" />)}
    </div>
  ),
  name: 'Sizes — Initials',
}

// ─── Sizes — placeholder ──────────────────────────────────────────────────────

export const SizesPlaceholder: Story = {
  render: () => (
    <div className="flex items-end gap-3">
      {SIZES.map(size => <Avatar key={size} size={size} />)}
    </div>
  ),
  name: 'Sizes — Placeholder',
}

// ─── Online indicator ─────────────────────────────────────────────────────────

export const OnlineIndicator: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <div>
        <p className="text-xs text-gray-400 mb-2">Online</p>
        <div className="flex items-end gap-3">
          {SIZES.map(size => <Avatar key={size} size={size} src={PHOTO} alt="User" online={true} />)}
        </div>
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-2">Offline</p>
        <div className="flex items-end gap-3">
          {SIZES.map(size => <Avatar key={size} size={size} src={PHOTO} alt="User" online={false} />)}
        </div>
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-2">Initials + online</p>
        <div className="flex items-end gap-3">
          {SIZES.map(size => <Avatar key={size} size={size} fallback="JD" online={true} />)}
        </div>
      </div>
    </div>
  ),
  name: 'Online Indicator',
}

// ─── Verified badge ───────────────────────────────────────────────────────────

export const Verified: Story = {
  render: () => (
    <div className="flex items-end gap-3">
      {SIZES.map(size => <Avatar key={size} size={size} src={PHOTO} alt="User" verified />)}
    </div>
  ),
  name: 'Verified Badge',
}

// ─── Company icon badge ───────────────────────────────────────────────────────

export const CompanyIcon: Story = {
  render: () => (
    <div className="flex items-end gap-3">
      {SIZES.map(size => (
        <Avatar
          key={size}
          size={size}
          src={PHOTO}
          alt="User"
          companyIcon={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png"
              alt="Google"
              className="w-full h-full object-contain p-0.5"
            />
          }
        />
      ))}
    </div>
  ),
  name: 'Company Icon Badge',
}

// ─── Fallback behavior ────────────────────────────────────────────────────────

export const Fallback: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-2">
        <Avatar size="lg" src={PHOTO} alt="User" />
        <span className="text-xs text-gray-400">Image</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="lg" fallback="JD" />
        <span className="text-xs text-gray-400">Initials</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="lg" />
        <span className="text-xs text-gray-400">Placeholder</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="lg" src="broken-url" fallback="JD" />
        <span className="text-xs text-gray-400">Broken → fallback</span>
      </div>
    </div>
  ),
  name: 'Fallback Behavior',
}

// ─── Avatar Group ─────────────────────────────────────────────────────────────

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      {SIZES.map(size => (
        <AvatarGroup key={size} size={size}>
          <Avatar size={size} src={PHOTO}  alt="User 1" />
          <Avatar size={size} src={PHOTO2} alt="User 2" />
          <Avatar size={size} src={PHOTO3} alt="User 3" />
          <Avatar size={size} src={PHOTO4} alt="User 4" />
          <Avatar size={size} src={PHOTO5} alt="User 5" />
        </AvatarGroup>
      ))}
    </div>
  ),
  name: 'Avatar Group',
}

// ─── Group with overflow ──────────────────────────────────────────────────────

export const GroupOverflow: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <AvatarGroup size="md" max={3}>
        <Avatar size="md" src={PHOTO}  alt="User 1" />
        <Avatar size="md" src={PHOTO2} alt="User 2" />
        <Avatar size="md" src={PHOTO3} alt="User 3" />
        <Avatar size="md" src={PHOTO4} alt="User 4" />
        <Avatar size="md" src={PHOTO5} alt="User 5" />
        <Avatar size="md" fallback="JD" />
        <Avatar size="md" fallback="AB" />
      </AvatarGroup>
      <AvatarGroup size="sm" max={4}>
        <Avatar size="sm" src={PHOTO}  alt="User 1" />
        <Avatar size="sm" src={PHOTO2} alt="User 2" />
        <Avatar size="sm" src={PHOTO3} alt="User 3" />
        <Avatar size="sm" src={PHOTO4} alt="User 4" />
        <Avatar size="sm" src={PHOTO5} alt="User 5" />
        <Avatar size="sm" fallback="JD" />
      </AvatarGroup>
    </div>
  ),
  name: 'Group with Overflow',
}

// ─── All variants overview ────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 items-start">

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Image</p>
        <div className="flex items-end gap-3">
          {SIZES.map(s => <Avatar key={s} size={s} src={PHOTO} alt="User" />)}
        </div>
      </section>

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Initials</p>
        <div className="flex items-end gap-3">
          {SIZES.map(s => <Avatar key={s} size={s} fallback="OR" />)}
        </div>
      </section>

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Placeholder</p>
        <div className="flex items-end gap-3">
          {SIZES.map(s => <Avatar key={s} size={s} />)}
        </div>
      </section>

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Status badges (md size)</p>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Avatar size="md" src={PHOTO} alt="User" online={true} />
            <span className="text-xs text-gray-400">Online</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="md" src={PHOTO} alt="User" online={false} />
            <span className="text-xs text-gray-400">Offline</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="md" src={PHOTO} alt="User" verified />
            <span className="text-xs text-gray-400">Verified</span>
          </div>
        </div>
      </section>

      <section>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Group</p>
        <AvatarGroup size="md" max={4}>
          <Avatar size="md" src={PHOTO}  alt="User 1" />
          <Avatar size="md" src={PHOTO2} alt="User 2" />
          <Avatar size="md" src={PHOTO3} alt="User 3" />
          <Avatar size="md" src={PHOTO4} alt="User 4" />
          <Avatar size="md" src={PHOTO5} alt="User 5" />
          <Avatar size="md" fallback="JD" />
        </AvatarGroup>
      </section>

    </div>
  ),
  name: 'All Variants',
}
