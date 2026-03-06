import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const PRESETS = [
  {
    id: 'modern-light',
    name: 'Modern (Light)',
    vars: {
      '--bg': '#f8fafc',
      '--surface': '#ffffff',
      '--text': '#0f172a',
      '--muted': '#6b7280',
      '--color-accent': '#6366f1',
      'fontFamily': 'Inter, system-ui, -apple-system, "Segoe UI", Roboto',
    },
  },
  {
    id: 'modern-dark',
    name: 'Modern (Dark)',
    vars: {
      '--bg': '#0b1220',
      '--surface': '#0f172a',
      '--text': '#e6eef8',
      '--muted': '#94a3b8',
      '--color-accent': '#60a5fa',
      'fontFamily': 'Inter, system-ui, -apple-system, "Segoe UI", Roboto',
    },
  },
  {
    id: 'minimal',
    name: 'Minimal Serif',
    vars: {
      '--bg': '#ffffff',
      '--surface': '#ffffff',
      '--text': '#0f172a',
      '--muted': '#6b7280',
      '--color-accent': '#111827',
      'fontFamily': 'Georgia, "Times New Roman", serif',
    },
  },
  {
    id: 'soft',
    name: 'Soft Pastel',
    vars: {
      '--bg': '#fbfbfd',
      '--surface': '#ffffff',
      '--text': '#0f172a',
      '--muted': '#6b7280',
      '--color-accent': '#f472b6',
      'fontFamily': 'Inter, system-ui, -apple-system, "Segoe UI", Roboto',
    },
  },
]

export default function ThemeControls({ className = '' }) {
  const [active, setActive] = useState(() => localStorage.getItem('resumeBuilder_theme_preset') || 'modern-light')
  function applyPreset(id) {
    const preset = PRESETS.find(p => p.id === id)
    if (!preset) return
    Object.entries(preset.vars).forEach(([k, v]) => {
      if (k === 'fontFamily') {
        document.body.style.fontFamily = v
      } else {
        document.documentElement.style.setProperty(k, v)
      }
    })
    localStorage.setItem('resumeBuilder_theme_preset', id)
    setActive(id)
  }

  useEffect(() => {
    // run once on mount with the initial active preset
    applyPreset(active)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <label className="text-sm text-gray-600">Theme</label>
      <select
        aria-label="Select theme preset"
        value={active}
        onChange={(e) => applyPreset(e.target.value)}
        className="text-sm px-2 py-1 border rounded-md bg-white dark:bg-gray-800"
      >
        {PRESETS.map(p => (
          <option key={p.id} value={p.id}>{p.name}</option>
        ))}
      </select>
    </div>
  )
}
