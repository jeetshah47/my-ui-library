import React, { useState } from 'react'
import type { Meta } from '@storybook/react'
import { colors } from '../src/tokens/colors'

const meta: Meta = {
  title: 'Foundation/Colors',
  parameters: { layout: 'fullscreen' },
}
export default meta

const STEPS = ['25', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] as const

// Palettes to show, in display order
const CORE_PALETTES   = ['gray', 'brand', 'error', 'warning', 'success'] as const
const GRAY_PALETTES   = ['grayDark', 'grayBlue', 'grayCool', 'grayModern', 'grayNeutral', 'grayIron', 'grayTrue', 'grayWarm'] as const
const COLOR_PALETTES  = ['moss', 'greenLight', 'green', 'teal', 'cyan', 'blueLight', 'blue', 'blueDark', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'orangeDark', 'orange', 'yellow'] as const

type PaletteKey = keyof typeof colors
type Scale = Record<string, string>

function isLight(hex: string) {
  const c = hex.replace('#', '')
  if (c.length < 6) return true
  const r = parseInt(c.slice(0, 2), 16)
  const g = parseInt(c.slice(2, 4), 16)
  const b = parseInt(c.slice(4, 6), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 160
}

function SwatchRow({ name, scale }: { name: string; scale: Scale }) {
  const [copied, setCopied] = useState('')

  function copy(val: string, key: string) {
    navigator.clipboard?.writeText(val).catch(() => {})
    setCopied(key)
    setTimeout(() => setCopied(k => (k === key ? '' : k)), 1500)
  }

  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: '#344054', marginBottom: 6, textTransform: 'capitalize' }}>
        {name}
      </div>
      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        {STEPS.map(step => {
          const val = (scale as Record<string, string>)[step]
          if (!val) return null
          const key = `${name}-${step}`
          const active = copied === key
          const light = isLight(val.startsWith('rgba') ? '#ffffff' : val)
          return (
            <button
              key={step}
              onClick={() => copy(val, key)}
              title={`${val} — click to copy`}
              style={{
                width: 56,
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: 0,
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 40,
                  borderRadius: 6,
                  background: val,
                  border: '1px solid rgba(0,0,0,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 10,
                  color: light ? '#344054' : '#fff',
                  fontWeight: 500,
                  transition: 'transform 0.1s',
                  transform: active ? 'scale(1.08)' : 'scale(1)',
                }}
              >
                {active ? '✓' : ''}
              </div>
              <div style={{ fontSize: 10, color: '#667085', marginTop: 3 }}>{step}</div>
              <div style={{ fontSize: 9, color: '#98a2b3' }}>{val.startsWith('rgba') ? 'α' : val.toUpperCase()}</div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{
        fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
        color: '#98a2b3', paddingBottom: 12, borderBottom: '1px solid #f2f4f7', marginBottom: 20,
      }}>
        {title}
      </div>
      {children}
    </div>
  )
}

export const Palette = {
  render: () => (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: '32px 40px', maxWidth: 900 }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: '#101828' }}>Color Palette</div>
        <div style={{ fontSize: 14, color: '#667085', marginTop: 4 }}>
          Click any swatch to copy its hex value.
        </div>
      </div>

      {/* Base */}
      <Section title="Base">
        <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
          {Object.entries(colors.base).filter(([, v]) => v !== 'transparent').map(([name, val]) => (
            <div key={name} style={{ textAlign: 'center' }}>
              <div style={{
                width: 56, height: 40, borderRadius: 6,
                background: val, border: '1px solid rgba(0,0,0,0.1)',
              }} />
              <div style={{ fontSize: 10, color: '#667085', marginTop: 3 }}>{name}</div>
              <div style={{ fontSize: 9, color: '#98a2b3' }}>{val.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Core */}
      <Section title="Core">
        {CORE_PALETTES.map(name => (
          <SwatchRow key={name} name={name} scale={colors[name] as Scale} />
        ))}
      </Section>

      {/* Extended grays */}
      <Section title="Extended Grays">
        {GRAY_PALETTES.map(name => (
          <SwatchRow key={name} name={name} scale={colors[name] as Scale} />
        ))}
      </Section>

      {/* Color palettes */}
      <Section title="Color Palettes">
        {COLOR_PALETTES.map(name => (
          <SwatchRow key={name} name={name} scale={colors[name] as Scale} />
        ))}
      </Section>
    </div>
  ),
}
