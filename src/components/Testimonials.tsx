import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The first translation tool that actually captures the sarcastic tone of my English scripts into Japanese. Revolutionary.",
    author: "Marcus Chen",
    role: "Global Content Creator",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
  {
    quote: "Our enterprise deployment was seamless. The API handles millions of requests daily without a single drop in fidelity.",
    author: "Sarah Jenkins",
    role: "CTO at NexaCorp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    highlight: true,
  },
  {
    quote: "Traveling through rural Kazakhstan became effortless. The offline voice translation is literally a lifesaver.",
    author: "David Petrov",
    role: "Adventure Journalist",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
  },
];

export default function Testimonials() {
  return (
    <section className="px-8 max-w-7xl mx-auto mb-32">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl font-bold mb-4">Trusted by the Global Elite</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`glass-panel p-8 rounded-3xl space-y-6 ${t.highlight ? 'border-primary/40 ring-1 ring-primary/20 bg-primary/5' : ''}`}
          >
            <div className="flex gap-1 text-secondary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-lg italic text-on-surface">"{t.quote}"</p>
            <div className="flex items-center gap-4">
              <img 
                alt={t.author} 
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10" 
                referrerPolicy="no-referrer"
                src={t.avatar} 
              />
              <div>
                <p className="font-bold text-white">{t.author}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
