import { motion } from 'motion/react';
import { Bolt, Languages, Brain } from 'lucide-react';

const features = [
  {
    icon: Bolt,
    title: 'Fast Translation',
    description: 'Latency-free processing engine that delivers results in under 100ms globally.',
    bgColor: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    icon: Languages,
    title: 'Multi-language Support',
    description: 'Native fluency in over 120 languages, including rare dialects and technical jargon.',
    bgColor: 'bg-secondary/10',
    iconColor: 'text-secondary',
  },
  {
    icon: Brain,
    title: 'AI Accuracy',
    description: 'Context-aware neural models that maintain tone and intent across all translations.',
    bgColor: 'bg-tertiary/10',
    iconColor: 'text-tertiary',
  },
];

export default function Features() {
  return (
    <section id="features" className="px-4 md:px-8 max-w-7xl mx-auto mb-24">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Precision in Every Syllable</h2>
        <p className="max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
          Engineered with neural networks that understand context, nuance, and cultural intent.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-8 rounded-[2rem] transition-colors group cursor-default"
            style={{ border: '1px solid var(--border-glass)' }}
          >
            <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <feature.icon className={`${feature.iconColor} w-8 h-8`} />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{feature.title}</h3>
            <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
