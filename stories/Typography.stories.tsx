import React from 'react'
import type { Meta } from '@storybook/react'
import { fontSize, fontWeight, letterSpacing, lineHeight, fontSizePx, lineHeightPx } from '../src/tokens/typography'

const meta: Meta = {
  title: 'Foundation/Typography',
  parameters: { layout: 'fullscreen' },
}
export default meta

const SAMPLE = 'The quick brown fox jumps over the lazy dog'
const SAMPLE_SHORT = 'Ag — Display'

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

// Helper to get numeric px from rem string
function remToPx(rem: string) {
  return Math.round(parseFloat(rem) * 16)
}

export const TypeScale = {
  render: () => (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: '32px 40px', maxWidth: 960 }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: '#101828' }}>Typography</div>
        <div style={{ fontSize: 14, color: '#667085', marginTop: 4 }}>
          Inter — 11 sizes across body and display scales.
        </div>
      </div>

      {/* Type scale table */}
      <Section title="Type Scale">
        <div style={{ display: 'grid', gridTemplateColumns: '140px 60px 60px 70px 1fr', gap: '0 16px', alignItems: 'baseline' }}>
          {/* Header */}
          {['Name', 'Size', 'px', 'Leading', 'Sample'].map(h => (
            <div key={h} style={{ fontSize: 11, fontWeight: 600, color: '#98a2b3', paddingBottom: 8, borderBottom: '1px solid #f2f4f7', marginBottom: 4 }}>
              {h}
            </div>
          ))}

          {(Object.entries(fontSize) as [string, readonly [string, { readonly lineHeight: string }]][]).map(([name, [size, meta]]) => {
            const px = remToPx(size)
            const lhPx = remToPx(meta.lineHeight)
            const isDisplay = name.startsWith('display')
            const trackingStyle = isDisplay && px >= 36 ? { letterSpacing: '-0.02em' } : {}
            return (
              <React.Fragment key={name}>
                <div style={{ fontSize: 12, color: '#667085', fontFamily: 'monospace', paddingBottom: 16 }}>
                  {name}
                </div>
                <div style={{ fontSize: 12, color: '#98a2b3', paddingBottom: 16 }}>{size}</div>
                <div style={{ fontSize: 12, color: '#98a2b3', paddingBottom: 16 }}>{px}px</div>
                <div style={{ fontSize: 12, color: '#98a2b3', paddingBottom: 16 }}>{lhPx}px</div>
                <div style={{ fontSize: size, lineHeight: meta.lineHeight, color: '#101828', paddingBottom: 16, ...trackingStyle }}>
                  {isDisplay ? SAMPLE_SHORT : SAMPLE}
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </Section>

      {/* Font weights */}
      <Section title="Font Weights">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {(Object.entries(fontWeight) as [string, string][]).map(([name, weight]) => (
            <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}>
              <div style={{ width: 100, fontSize: 12, color: '#667085' }}>
                <span style={{ fontFamily: 'monospace' }}>{name}</span>
                <span style={{ color: '#98a2b3', marginLeft: 6 }}>{weight}</span>
              </div>
              <div style={{ fontSize: '1rem', fontWeight: parseInt(weight), color: '#101828' }}>
                ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Letter spacing */}
      <Section title="Letter Spacing">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {(Object.entries(letterSpacing) as [string, string][]).map(([name, value]) => (
            <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}>
              <div style={{ width: 160, fontSize: 12, color: '#667085' }}>
                <span style={{ fontFamily: 'monospace' }}>{name}</span>
                <span style={{ color: '#98a2b3', marginLeft: 6 }}>{value}</span>
              </div>
              <div style={{ fontSize: '2.25rem', letterSpacing: value, color: '#101828', lineHeight: 1.2 }}>
                Heading Example
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Semantic combinations */}
      <Section title="Common Pairings">
        {[
          { label: 'Display 2XL / Bold',   size: '4.5rem',   lh: '5.625rem', fw: '700', ls: '-0.02em' },
          { label: 'Display LG / Semibold', size: '3rem',    lh: '3.75rem',  fw: '600', ls: '-0.02em' },
          { label: 'Display SM / Semibold', size: '1.875rem', lh: '2.375rem', fw: '600', ls: '0em'    },
          { label: 'Text LG / Medium',      size: '1.125rem', lh: '1.75rem',  fw: '500', ls: '0em'    },
          { label: 'Text MD / Regular',     size: '1rem',    lh: '1.5rem',   fw: '400', ls: '0em'    },
          { label: 'Text SM / Regular',     size: '0.875rem', lh: '1.25rem',  fw: '400', ls: '0em'    },
          { label: 'Text XS / Medium',      size: '0.75rem', lh: '1.125rem', fw: '500', ls: '0em'    },
        ].map(({ label, size, lh, fw, ls }) => (
          <div key={label} style={{ paddingBottom: 16, borderBottom: '1px solid #f9fafb', marginBottom: 4 }}>
            <div style={{ fontSize: 11, color: '#98a2b3', marginBottom: 4 }}>{label}</div>
            <div style={{ fontSize: size, lineHeight: lh, fontWeight: parseInt(fw), letterSpacing: ls, color: '#101828' }}>
              {SAMPLE}
            </div>
          </div>
        ))}
      </Section>
    </div>
  ),
}
