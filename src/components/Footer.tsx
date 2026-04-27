import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="w-full py-10 border-t font-display text-sm"
      style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-glass)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left space-y-1">
          <div className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Translify AI</div>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Built by{' '}
            <span className="font-semibold" style={{ color: 'var(--color-primary)' }}>
              Vamshi Mamidipelli
            </span>{' '}
            · {new Date().getFullYear()}
          </p>
        </div>

        {/* Tech stack badge */}
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
          style={{
            backgroundColor: 'var(--bg-glass)',
            border: '1px solid var(--border-glass)',
            color: 'var(--text-muted)',
          }}
        >
          <span>React</span>
          <span style={{ color: 'var(--border-glass)' }}>·</span>
          <span>TypeScript</span>
          <span style={{ color: 'var(--border-glass)' }}>·</span>
          <span>Groq API</span>
          <span style={{ color: 'var(--border-glass)' }}>·</span>
          <span>Vite</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Vamshimamidipelli"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/vamshimamidipelli"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-secondary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
