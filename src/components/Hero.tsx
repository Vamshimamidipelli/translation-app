import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-40 px-6 md:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      {/* Background blurs */}
      <div className="absolute top-20 -left-20 w-64 h-64 rounded-full blur-[100px] -z-10"
           style={{ backgroundColor: 'rgba(160,120,255,0.12)' }} />
      <div className="absolute bottom-40 -right-20 w-96 h-96 rounded-full blur-[120px] -z-10"
           style={{ backgroundColor: 'rgba(247,81,161,0.06)' }} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="relative z-10"
      >
        <span
          className="inline-block py-1 px-4 mb-6 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]"
          style={{
            backgroundColor: 'var(--bg-glass)',
            border: '1px solid var(--border-glass)',
            color: 'var(--color-secondary)',
          }}
        >
          Powered by Groq AI · Personal Project
        </span>

        <h1 className="font-display text-5xl md:text-7xl mb-6 leading-tight font-bold" style={{ color: 'var(--text-primary)' }}>
          Real-Time{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))' }}
          >
            AI Translation.
          </span>
          <br />
          Built from Scratch.
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: 'var(--text-muted)' }}>
          A full-stack translation app with voice input, text-to-speech, history and 25+ languages —
          powered by the Groq LLM API. Built to showcase end-to-end AI integration skills.
        </p>

        <motion.a
          href="#translator"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="hyper-aura-btn inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-bold text-white"
        >
          Try the Translator <ArrowDown size={20} />
        </motion.a>
      </motion.div>

      {/* Floating shapes */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [12, 16, 12] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-4 w-28 h-28 rounded-[2rem] rotate-12 opacity-20 blur-sm pointer-events-none hidden lg:block"
        style={{ backgroundColor: 'var(--bg-glass)', border: '1px solid var(--border-glass)' }}
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/4 w-20 h-20 rounded-full opacity-20 blur-2xl pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(to top right, var(--color-primary), var(--color-secondary))' }}
      />
    </section>
  );
}
