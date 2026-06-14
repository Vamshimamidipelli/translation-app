<div align="center">
  <img width="1200" height="475" alt="Translify AI — Real-Time AI Translation App" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

  <br />

  <h3>⚡ Real-Time AI-Powered Translation — Built from Scratch</h3>

  <p>
    A polished, production-grade translation web app that leverages the <b>Groq LLM API</b> for <br />
    context-aware translations across <b>25+ languages</b> with voice input, text-to-speech, <br />
    persistent history, and a beautiful glassmorphic UI.
  </p>

  <br />

  <p>
    <img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=000" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=fff" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=fff" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=fff" alt="Tailwind CSS v4" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=fff" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Groq_LLM_API-F55036?style=for-the-badge&logo=groq&logoColor=fff" alt="Groq API" />
  </p>

  <p>
    <a href="#-demo">View Demo</a> · <a href="#-quick-start">Quick Start</a> · <a href="#-architecture--engineering-decisions">Architecture</a>
  </p>
</div>

<br />

---

## 📌 Why This Project Stands Out

This isn't a tutorial clone or a wrapper around Google Translate. **Translify AI** was designed and engineered end-to-end to demonstrate:

| Skill Area | What's Demonstrated |
|---|---|
| **AI / LLM Integration** | Direct HTTP integration with the Groq inference API; carefully engineered system prompts for strict, clean translation output |
| **Performance Engineering** | Custom debounce mechanism (800ms) preventing redundant API calls on every keystroke — protecting both UX and rate limits |
| **Web Platform Mastery** | Deep integration with 4 native browser APIs: Speech Recognition, Speech Synthesis, Clipboard, and Web Share |
| **State Architecture** | React Context for global theming, lazy `localStorage` initialization, and optimistic state updates for history management |
| **UI/UX Design** | Glassmorphic design system powered by 35+ CSS custom properties, dual-theme support with fluid transitions, and Framer Motion micro-animations |
| **TypeScript Discipline** | Strict typing throughout — interfaces for data models, typed refs, discriminated event handlers, and zero `any` usage |

---

## ✨ Features

### 🧠 AI Translation Engine
- **LLM-Powered:** Sends structured prompts to the Groq API (`/openai/v1/chat/completions`) running LLaMA-based models with `temperature: 0.3` for deterministic, accurate output
- **Smart Debouncing:** A `useRef`-based timeout pattern waits 800ms after the last keystroke before firing the API call — dramatically reducing network requests while feeling instant to the user
- **Prompt Engineering:** System prompt explicitly instructs the model to return *only* the translated text — no explanations, no quotes, no conversational filler

### 🎙️ Voice Input & Text-to-Speech
- **Speech-to-Text:** Integrates `window.SpeechRecognition` / `webkitSpeechRecognition` with dynamic language matching — the recognition language auto-syncs with the selected source language
- **Text-to-Speech:** Uses `SpeechSynthesisUtterance` with accent-matched `.lang` property, so French translations are read with a French voice
- **Playback Control:** Visual state feedback (active/inactive icons) with `speechSynthesis.cancel()` for instant stop

### 💾 Persistent History System
- **Auto-Save:** Every successful translation is serialized to `localStorage` as a typed `HistoryItem` object (capped at 20 entries for storage efficiency)
- **One-Click Restore:** Clicking any history entry restores the full translation state — source text, translated text, and both language selections
- **Granular Deletion:** Individual items can be removed via filtered array updates that immediately re-persist to `localStorage`
- **Slide-In Panel:** History renders in a Framer Motion spring-animated drawer with a backdrop blur overlay

### 🌓 Advanced Theming
- **CSS Variable Architecture:** 35+ design tokens (`--bg`, `--text-primary`, `--bg-glass`, `--border-glass`, etc.) defined on `:root` and swapped via `html.light` / `html.dark` class toggling
- **Persistent Preference:** Theme choice is saved to `localStorage` and restored on load via a lazy state initializer
- **Fluid Transitions:** A global `0.3s ease-in-out` transition on `background-color`, `color`, and `border-color` ensures every pixel transitions smoothly between modes

### 📋 Native Web API Integration
- **Clipboard API:** `navigator.clipboard.writeText()` with visual confirmation (icon swaps to ✓ for 2 seconds)
- **Web Share API:** `navigator.share()` opens the OS-native share sheet on supported devices; gracefully degrades to clipboard copy on desktop

### 🌍 Language Support
25+ languages including English, Spanish, French, German, Italian, Portuguese, Russian, Chinese (Simplified & Traditional), Japanese, Korean, Arabic, Hindi, Bengali, Urdu, Turkish, Polish, Dutch, Swedish, Greek, Hebrew, Thai, Vietnamese, Indonesian, Persian, and Swahili — each with searchable, filterable dropdowns and flag indicators.

---

## 🏗️ Architecture & Engineering Decisions

```
translify-ai/
├── src/
│   ├── App.tsx                          # Root layout with ThemeProvider wrapper
│   ├── main.tsx                         # React 19 entry point
│   ├── index.css                        # Design system (35+ CSS variables, glassmorphism, animations)
│   ├── context/
│   │   └── ThemeContext.tsx              # Global theme state via React Context + localStorage
│   └── components/
│       ├── Navigation.tsx               # Fixed nav with theme toggle, mobile hamburger menu
│       ├── Hero.tsx                     # Animated landing section with gradient text + floating shapes
│       ├── TranslationInterface.tsx     # Core translation engine (600 lines — API, voice, history, utils)
│       ├── Features.tsx                 # Feature showcase cards with hover animations
│       ├── HowItWorks.tsx               # Step-by-step explainer with parallax image
│       ├── Footer.tsx                   # Branded footer with social links
│       └── CTA.tsx                      # Call-to-action section
├── vite.config.ts                       # Vite + React + Tailwind CSS v4 plugin config
├── tsconfig.json                        # Strict TypeScript configuration
└── .env                                 # API keys (Groq) — gitignored in production
```

### Key Design Decisions

| Decision | Rationale |
|---|---|
| **Groq API over OpenAI** | Groq's inference speed (LPU hardware) delivers near-instant translations, creating a real-time feel that's impossible with standard API latency |
| **Debounce via `useRef` + `setTimeout`** | Avoids external debounce libraries; the ref persists across renders without causing re-renders, keeping the component lean |
| **CSS variables over Tailwind dark classes** | Allows the entire color palette to be swapped by toggling a single class on `<html>`, enabling fluid transitions on *every* element simultaneously |
| **`localStorage` lazy initialization** | `useState(() => JSON.parse(...))` — the initializer function runs only on first render, preventing JSON parsing on every re-render |
| **No state management library** | React Context + `useState` is sufficient for this app's complexity; avoids over-engineering with Redux/Zustand |
| **Framer Motion for animations** | Provides declarative `AnimatePresence` for mount/unmount transitions (dropdowns, history panel) that CSS alone can't handle cleanly |

---

## ⚙️ Quick Start

### Prerequisites
- **Node.js** v18+
- A free **[Groq API Key](https://console.groq.com/keys)**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Vamshimamidipelli/translify-ai.git
cd translify-ai

# 2. Install dependencies
npm install

# 3. Configure environment
#    Create a .env file in the root directory:
```

```env
VITE_GROQ_API_KEY=your_groq_api_key_here
VITE_GROQ_MODEL=llama3-70b-8192
VITE_GROQ_API_URL=https://api.groq.com/openai/v1/chat/completions
```

```bash
# 4. Start the dev server
npm run dev
```

The app will be running at **`http://localhost:3000`**.

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with HMR on port 3000 |
| `npm run build` | Create an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run TypeScript type checking (`tsc --noEmit`) |

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | React 19 | Component architecture with hooks |
| **Language** | TypeScript | End-to-end type safety |
| **Build Tool** | Vite | Instant HMR, optimized production bundles |
| **Styling** | Tailwind CSS v4 + CSS Variables | Utility classes + custom design token system |
| **Animations** | Framer Motion (motion/react) | Spring physics, `AnimatePresence`, scroll-triggered reveals |
| **Icons** | Lucide React | Consistent, tree-shakeable icon library |
| **AI Backend** | Groq API (LLaMA3) | Ultra-low-latency LLM inference |
| **Typography** | Poppins + Space Grotesk | Modern, clean typefaces via Google Fonts |

---

## 📈 Roadmap

- [ ] Migrate API calls to a secure backend proxy (Express / Next.js API routes) to protect API keys
- [ ] Add streaming responses (`ReadableStream`) for real-time character-by-character translation output
- [ ] Implement Redis caching for frequently translated phrases
- [ ] Add document translation support (PDF, DOCX) via file upload
- [ ] PWA support with offline translation history access

---

## 👤 Author

**Vamshi Mamidipelli**

[![GitHub](https://img.shields.io/badge/GitHub-Vamshimamidipelli-181717?style=flat-square&logo=github)](https://github.com/Vamshimamidipelli)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-vamshimamidipelli-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/vamshimamidipelli)

---

<div align="center">
  <sub>Designed & engineered with precision by Vamshi Mamidipelli · 2025</sub>
</div>
