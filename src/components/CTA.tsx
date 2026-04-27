import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="px-8 max-w-5xl mx-auto mb-32">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative glass-panel rounded-[3rem] p-12 md:p-20 text-center overflow-hidden border-primary/20 shadow-[0_0_100px_rgba(160,120,255,0.1)]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-tertiary-container/20 -z-10" />
        
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Ready for Global<br />Communication?
        </h2>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hyper-aura-btn px-12 py-5 rounded-full text-xl font-bold text-white cursor-pointer"
        >
          Start Translating Free
        </motion.button>
        
        <p className="mt-6 text-slate-400">
          No credit card required. Includes 50,000 words free.
        </p>
        
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      </motion.div>
    </section>
  );
}
