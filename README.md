<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

  <br />
  <br />

  <p>
    <b>Real-time, Context-Aware, and Ultra-Fast AI Translations</b>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Groq_API-f55036?style=for-the-badge&logo=groq&logoColor=white" alt="Groq API" />
  </p>
</div>

---

## 🚀 Overview

**Translify AI** is a modern, high-performance web application designed to break down language barriers instantly. By leveraging the ultra-fast **Groq API** and powerful LLMs, it delivers context-aware, highly accurate translations rather than literal word-to-word mappings.

This project was built to demonstrate proficiency in **modern full-stack development, seamless API integration, performance optimization, and elegant UI/UX design**.

## ✨ Key Features & Technical Highlights

*   ⚡ **Ultra-Fast AI Translation:** Uses the Groq API (LLaMA3-based models) to process translation requests with incredibly low latency.
*   🧠 **Debounced Query Optimization:** Implements an 800ms debounce mechanism on text inputs to drastically reduce unnecessary API calls and prevent rate-limiting, ensuring a highly optimized network footprint.
*   🎙️ **Native Voice Integration:** Deeply integrates with the browser's native **Web Speech API** for hands-free live dictation (Speech Recognition) and multilingual read-aloud functionality (Speech Synthesis).
*   💾 **Persistent State & History:** Utilizes `localStorage` to securely save up to 20 recent translations. Custom React hooks handle serialization and retrieval seamlessly.
*   🌓 **Dynamic Theming System:** Employs a robust, context-driven CSS variable system for effortless switching between Light and Dark modes with fluid 0.3s transitions.
*   📱 **Responsive & Accessible UI:** Designed with **Tailwind CSS** and **Framer Motion** for a fluid, accessible, and responsive user experience across all device sizes.
*   📋 **Modern Web APIs:** Fully leverages the `Clipboard API` for one-click copying and the `Web Share API` for native mobile/desktop sharing menus.

## 🏗️ Architecture

1.  **Frontend Core:** React 19 driven interface, strictly typed with TypeScript. Bootstrapped with Vite for instant HMR and optimized production builds.
2.  **State Management:** Global state handled via React Context (e.g., `ThemeContext`), local state managed carefully with `useState` and optimized with `useEffect` for side-effects (like the debounced LLM API caller).
3.  **API Layer:** Direct HTTP POST requests to the Groq `/openai/v1/chat/completions` endpoint. Prompts are carefully engineered to return strict, direct translations without conversational fluff.

## ⚙️ Quick Start

Want to run Translify AI locally? Follow these steps:

### Prerequisites
*   [Node.js](https://nodejs.org/en/) (v18+)
*   A Groq API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/translify-ai.git
   cd translify-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add your Groq API credentials:
   ```env
   VITE_GROQ_API_KEY=your_groq_api_key_here
   VITE_GROQ_MODEL=llama3-70b-8192
   VITE_GROQ_API_URL=https://api.groq.com/openai/v1/chat/completions
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## 📈 Future Roadmap

- [ ] Implement caching with Redis for frequently translated phrases.
- [ ] Add document translation support (PDF, DOCX).
- [ ] Migrate to a robust backend (e.g., Next.js API routes or Express) to securely hide API keys.

---

<div align="center">
  <i>Built with ❤️ by a passionate developer dedicated to creating intuitive, scalable web experiences.</i>
</div>
