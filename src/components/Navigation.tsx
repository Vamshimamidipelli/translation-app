import { motion } from 'motion/react';
import { Globe, Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = ['Features', 'How it Works'];

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 backdrop-blur-xl border-b h-20 transition-colors duration-300"
        style={{
          backgroundColor: 'var(--nav-bg)',
          borderColor: 'var(--border-glass)',
          boxShadow: '0 0 30px rgba(139,92,246,0.10)',
        }}
      >
        <div className="flex justify-between items-center px-6 md:px-10 h-full max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                 style={{ background: 'linear-gradient(135deg, var(--color-primary-c), var(--color-tertiary-c))' }}>
              <Globe size={16} className="text-white" />
            </div>
            <span
              className="text-xl font-black font-display tracking-tight bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, var(--color-primary), var(--color-tertiary-c))' }}
            >
              Translify AI
            </span>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item, i) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="font-display text-sm tracking-tight transition-colors duration-200 hover:opacity-100"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Dark / Light Toggle */}
            <motion.button
              id="theme-toggle"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-200"
              style={{
                backgroundColor: 'var(--bg-glass)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-muted)',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark'
                ? <Sun size={17} />
                : <Moon size={17} />
              }
            </motion.button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full"
              style={{ color: 'var(--text-muted)' }}
              aria-label="Open menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed top-20 left-0 right-0 z-40 border-b backdrop-blur-xl py-4 px-6 flex flex-col gap-4"
          style={{
            backgroundColor: 'var(--nav-bg)',
            borderColor: 'var(--border-glass)',
          }}
        >
          {NAV_LINKS.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-semibold py-2"
              style={{ color: 'var(--text-primary)' }}
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
}
