import { motion } from 'motion/react';

const steps = [
  {
    number: 1,
    title: 'Input Context',
    description: 'Type, speak, or upload a document. Our AI detects language and intent automatically.',
    bgColor: 'bg-primary/20',
    textColor: 'text-primary',
    borderColor: 'border-primary/20',
  },
  {
    number: 2,
    title: 'Neural Refinement',
    description: 'Our engine compares multiple neural paths to find the most natural phrasing for your audience.',
    bgColor: 'bg-secondary/20',
    textColor: 'text-secondary',
    borderColor: 'border-secondary/20',
  },
  {
    number: 3,
    title: 'Seamless Output',
    description: 'Receive high-fidelity text or voice output instantly with one-click export options.',
    bgColor: 'bg-tertiary/20',
    textColor: 'text-tertiary',
    borderColor: 'border-tertiary/20',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 md:px-8 max-w-7xl mx-auto mb-24">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-12">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
              Three Steps to<br />Universal Flow
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
              We've removed the friction from communication. No complicated setups, just pure translation power.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className={`w-10 h-10 rounded-full ${step.bgColor} flex items-center justify-center ${step.textColor} font-bold shrink-0 border ${step.borderColor}`}>
                  {step.number}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{step.title}</h4>
                  <p style={{ color: 'var(--text-muted)' }}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-tertiary/20 blur-[60px] -z-10" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
            viewport={{ once: true }}
            className="glass-panel p-4 rounded-[2rem]"
          >
            <div className="overflow-hidden rounded-2xl aspect-video relative group">
              <img
                alt="Neural Network Tech Visualization"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                src="/images/network-viz.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-2">Safe Work</p>
                  <p className="text-xs text-slate-400">AI Safety Protocols Active</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
