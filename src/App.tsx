/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TranslationInterface from './components/TranslationInterface';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div
        className="min-h-screen relative overflow-hidden particle-bg"
        style={{ backgroundColor: 'var(--bg)', color: 'var(--text-primary)' }}
      >
        {/* Background decorations */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20">
          <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full blur-[120px] animate-pulse-slow"
               style={{ backgroundColor: 'rgba(160,120,255,0.06)' }} />
          <div className="absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] rounded-full blur-[100px] animate-pulse-slow"
               style={{ backgroundColor: 'rgba(76,215,246,0.05)' }} />
        </div>

        <Navigation />

        <main>
          <Hero />
          <TranslationInterface />
          <Features />
          <HowItWorks />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
