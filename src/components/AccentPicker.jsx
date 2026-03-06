import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const PRESETS = [
  { name: 'Indigo', value: '#6366f1' },
  { name: 'Teal', value: '#14b8a6' },
  { name: 'Rose', value: '#fb7185' },
  { name: 'Amber', value: '#f59e0b' },
]

export default function AccentPicker({ className = '' }) {
  const [accent, setAccent] = useState(() => {
    return localStorage.getItem('resumeBuilder_accent') || PRESETS[0].value
  })

  useEffect(() => {
    document.documentElement.style.setProperty('--color-accent', accent)
    localStorage.setItem('resumeBuilder_accent', accent)
  }, [accent])

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {PRESETS.map((p) => (
        <button
          key={p.value}
          aria-label={`Set accent ${p.name}`}
          title={p.name}
          onClick={() => setAccent(p.value)}
          className={`w-7 h-7 rounded-full border-2 ui-transition focus:outline-none focus:ring-2 focus:ring-offset-2`} 
          style={{ backgroundColor: p.value, borderColor: p.value === accent ? '#fff' : 'rgba(0,0,0,0.12)' }}
        />
      ))}
    </div>
  )
}
