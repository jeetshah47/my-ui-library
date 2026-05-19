import React from 'react'
import type { Meta } from '@storybook/react'
import { spacing, spacingPx, borderRadius, boxShadow, backdropBlur } from '../src/tokens/spacing'

const meta: Meta = {
  title: 'Foundation/Tokens',
  parameters: { layout: 'fullscreen' },
}
export default meta

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{
        fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
        color: '#98a2b3', paddingBottom: 12, borderBottom: '1px solid #f2f4f7', marginBottom: 24,
      }}>
        {title}
      </div>
      {children}
    </div>
  )
}

export const Overview = {
  render: () => (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: '32px 40px', maxWidth: 900 }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: '#101828' }}>Design Tokens</div>
        <div style={{ fontSize: 14, color: '#667085', marginTop: 4 }}>
          Spacing, radius, shadows, and blur — sourced from Figma variables.
        </div>
      </div>

      {/* Spacing */}
      <Section title="Spacing Scale">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {(Object.entries(spacingPx) as [string, number][]).map(([name, px]) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 72, fontSize: 12, color: '#667085', fontFamily: 'monospace', flexShrink: 0 }}>{name}</div>
              <div style={{ width: 48, fontSize: 12, color: '#98a2b3', flexShrink: 0 }}>{px}px</div>
              <div style={{
                height: 20,
                width: px > 0 ? px : 1,
                background: '#7f56d9',
                borderRadius: 3,
                minWidth: px > 0 ? undefined : 1,
                opacity: px > 0 ? 1 : 0.2,
              }} />
            </div>
          ))}
        </div>
      </Section>

      {/* Border Radius */}
      <Section title="Border Radius">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {(Object.entries(borderRadius) as [string, string][]).map(([name, value]) => (
            <div key={name} style={{ textAlign: 'center' }}>
              <div style={{
                width: 64, height: 64,
                borderRadius: value,
                background: '#f4ebff',
                border: '2px solid #9e77ed',
              }} />
              <div style={{ fontSize: 11, color: '#667085', marginTop: 6 }}>{name}</div>
              <div style={{ fontSize: 10, color: '#98a2b3' }}>{value}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Shadows */}
      <Section title="Box Shadows">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {(Object.entries(boxShadow) as [string, string][]).filter(([n]) => !n.includes('focus')).map(([name, value]) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{ width: 80, fontSize: 12, color: '#667085', fontFamily: 'monospace', flexShrink: 0 }}>{name}</div>
              <div style={{
                width: 120, height: 48,
                borderRadius: 8,
                background: '#fff',
                boxShadow: value,
                border: '1px solid #f2f4f7',
                flexShrink: 0,
              }} />
              <div style={{ fontSize: 10, color: '#98a2b3', fontFamily: 'monospace' }}>{value}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Focus Rings */}
      <Section title="Focus Rings">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
          {(Object.entries(boxShadow) as [string, string][]).filter(([n]) => n.includes('focus')).map(([name, value]) => (
            <div key={name} style={{ textAlign: 'center' }}>
              <div style={{
                width: 120, height: 40,
                borderRadius: 8,
                background: '#fff',
                boxShadow: value,
                border: '1px solid #d0d5dd',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, color: '#344054',
              }}>
                Input
              </div>
              <div style={{ fontSize: 11, color: '#667085', marginTop: 8 }}>{name}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Backdrop Blur */}
      <Section title="Backdrop Blur">
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {(Object.entries(backdropBlur) as [string, string][]).map(([name, value]) => (
            <div key={name} style={{ textAlign: 'center' }}>
              <div style={{
                width: 100, height: 72,
                borderRadius: 8,
                background: 'linear-gradient(135deg, #9e77ed 0%, #2e90fa 100%)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  backdropFilter: `blur(${value})`,
                  background: 'rgba(255,255,255,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, color: '#fff', fontWeight: 600,
                }}>
                  blur
                </div>
              </div>
              <div style={{ fontSize: 11, color: '#667085', marginTop: 6 }}>{name}</div>
              <div style={{ fontSize: 10, color: '#98a2b3' }}>{value}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  ),
}
