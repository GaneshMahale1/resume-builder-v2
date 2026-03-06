import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function Header() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationGroups = {
    resume: {
      label: 'Resume',
      items: [
        { path: '/personal', label: 'Personal Details', icon: '👤' },
        { path: '/education', label: 'Education', icon: '🎓' },
        { path: '/experience', label: 'Experience', icon: '💼' },
        { path: '/skills', label: 'Skills', icon: '⚡' },
        { path: '/technicalskills', label: 'Technical Skills', icon: '💻' },
      ]
    },
    academics: {
      label: 'Academics',
      items: [
        { path: '/coursework', label: 'Coursework', icon: '📚' },
        { path: '/publications', label: 'Publications', icon: '📄' },
        { path: '/research', label: 'Research', icon: '🔬' },
        { path: '/research-interest', label: 'Research Interest', icon: '🎯' },
      ]
    },
    achievements: {
      label: 'Achievements',
      items: [
        { path: '/achievements', label: 'Achievements', icon: '🏆' },
      ]
    },
    actions: {
      label: 'Actions',
      items: [
        { path: '/dashboard', label: 'Dashboard', icon: '📊' },
        { path: '/preview', label: 'Resume Preview', icon: '👁️' },
      ]
    }
  }

  const allNavItems = Object.values(navigationGroups).flatMap(g => g.items)
  const isActive = (path) => location.pathname === path

  return (
    <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white dark:bg-gray-900 shadow-lg'
        : 'bg-white dark:bg-gray-900 shadow-md'
    }`}>
      <div className="w-full">
        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">RB</span>
              </div>
              <span className="hidden sm:block text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Resume Builder
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {allNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 group relative ${
                    isActive(item.path)
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Controls & Mobile Menu */}
            <div className="flex items-center space-x-3">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg animate-slide-down">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
              {/* Mobile Navigation Groups */}
              {Object.entries(navigationGroups).map(([key, group]) => (
                <div key={key} className="mb-6 last:mb-0">
                  <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-3">
                    {group.label}
                  </h3>
                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`px-4 py-3 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                          isActive(item.path)
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                        {isActive(item.path) && (
                          <svg className="w-5 h-5 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

Header.propTypes = {}

export default Header