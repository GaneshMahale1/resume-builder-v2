import { useState } from 'react'
import PropTypes from 'prop-types'

function SectionWrapper({ id, title, children, defaultCollapsed = false, className = '' , onMoveUp, onMoveDown }) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed)
  const [theme, setTheme] = useState('default')

  const toggle = () => setCollapsed((s) => !s)

  const baseStyle = { pageBreakInside: 'avoid', WebkitPrintColorAdjust: 'exact' }
  const themeStyle = {}
  if (theme === 'accent') {
    themeStyle.borderLeft = '4px solid var(--color-accent)'
  }

  return (
    <section
      id={id}
      className={`py-6 card-surface rounded-lg p-4 print:bg-white print:shadow-none ${className}`}
      style={{ ...baseStyle, ...themeStyle }}
      aria-labelledby={`${id}-heading`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <h2 id={`${id}-heading`} className="text-xl font-bold text-accent mb-2">
            {title}
          </h2>
          <button
            onClick={toggle}
            aria-expanded={!collapsed}
            aria-controls={`${id}-content`}
            className="text-sm muted hover:opacity-90 focus:outline-none rounded px-2 py-1"
            title={collapsed ? 'Expand section' : 'Collapse section'}
          >
            {collapsed ? '▸' : '▾'}
          </button>
        </div>

        <div className="flex items-center gap-2">
          <label className="sr-only">Theme</label>
          <select
            aria-label={`Theme for ${title}`}
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="text-sm p-1 border rounded focus:outline-none"
          >
            <option value="default">Default</option>
            <option value="subtle">Subtle</option>
            <option value="accent">Accent</option>
          </select>

          {typeof onMoveUp === 'function' && (
            <button onClick={onMoveUp} className="p-1 rounded hover:bg-gray-100" aria-label={`Move ${title} up`}>
              ↑
            </button>
          )}
          {typeof onMoveDown === 'function' && (
            <button onClick={onMoveDown} className="p-1 rounded hover:bg-gray-100" aria-label={`Move ${title} down`}>
              ↓
            </button>
          )}
        </div>
      </div>

      <div
        id={`${id}-content`}
        className={`${collapsed ? 'hidden' : 'block'} mt-3 muted`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') toggle()
        }}
      >
        {children}
      </div>
    </section>
  )
}

SectionWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  defaultCollapsed: PropTypes.bool,
  className: PropTypes.string,
  onMoveUp: PropTypes.func,
  onMoveDown: PropTypes.func,
}

export default SectionWrapper
