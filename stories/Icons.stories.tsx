import React, { useState } from 'react'
import type { Meta } from '@storybook/react'
import * as Icons from '../src/icons'

const allIcons = Object.entries(Icons) as [string, React.ComponentType<{ size?: number; color?: string; className?: string }>][]

const meta: Meta = {
  title: 'Foundation/Icons',
  parameters: { layout: 'fullscreen' },
}
export default meta

export const Gallery = {
  args: {
    size: 20,
    color: '#101828',
  },
  argTypes: {
    size:  { control: { type: 'range', min: 12, max: 48, step: 2 } },
    color: { control: 'color' },
  },
  render: ({ size, color }: { size: number; color: string }) => {
    const [search,  setSearch]  = useState('')
    const [copied,  setCopied]  = useState('')

    const filtered = allIcons.filter(([name]) =>
      name.toLowerCase().includes(search.toLowerCase())
    )

    function copy(name: string) {
      navigator.clipboard?.writeText(`<${name} />`).catch(() => {})
      setCopied(name)
      setTimeout(() => setCopied(n => (n === name ? '' : n)), 1500)
    }

    return (
      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 24 }}>
        {/* Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <input
            type="search"
            placeholder="Search 1173 icons…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              padding: '8px 12px',
              border: '1px solid #d0d5dd',
              borderRadius: 8,
              fontSize: 14,
              width: 280,
              outline: 'none',
            }}
          />
          <span style={{ fontSize: 13, color: '#667085' }}>
            {filtered.length} icon{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
            gap: 8,
          }}
        >
          {filtered.map(([name, Icon]) => {
            const label = name.replace(/Icon$/, '')
            const active = copied === name
            return (
              <button
                key={name}
                onClick={() => copy(name)}
                title={`<${name} /> — click to copy`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                  padding: '14px 8px 10px',
                  border: `1px solid ${active ? '#2e90fa' : '#e4e7ec'}`,
                  borderRadius: 8,
                  background: active ? '#eff8ff' : '#fff',
                  cursor: 'pointer',
                  transition: 'border-color 0.1s, background 0.1s',
                  minWidth: 0,
                }}
              >
                <Icon size={size} color={active ? '#2e90fa' : color} />
                <span
                  style={{
                    fontSize: 10,
                    color: active ? '#2e90fa' : '#667085',
                    textAlign: 'center',
                    lineHeight: 1.4,
                    wordBreak: 'break-word',
                    width: '100%',
                  }}
                >
                  {active ? 'Copied!' : label}
                </span>
              </button>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', color: '#667085', paddingTop: 48, fontSize: 14 }}>
            No icons match &ldquo;{search}&rdquo;
          </div>
        )}
      </div>
    )
  },
}
