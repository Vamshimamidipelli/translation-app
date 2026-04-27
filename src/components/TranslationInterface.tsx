import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, X, Mic, MicOff, Volume2, Copy, Share2, History, ArrowLeftRight, Check, Loader2, Trash2 } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },
  { code: 'zh', name: 'Chinese (Simplified)', flag: '🇨🇳' },
  { code: 'zh-tw', name: 'Chinese (Traditional)', flag: '🇹🇼' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷' },
  { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'bn', name: 'Bengali', flag: '🇧🇩' },
  { code: 'ur', name: 'Urdu', flag: '🇵🇰' },
  { code: 'tr', name: 'Turkish', flag: '🇹🇷' },
  { code: 'pl', name: 'Polish', flag: '🇵🇱' },
  { code: 'nl', name: 'Dutch', flag: '🇳🇱' },
  { code: 'sv', name: 'Swedish', flag: '🇸🇪' },
  { code: 'el', name: 'Greek', flag: '🇬🇷' },
  { code: 'he', name: 'Hebrew', flag: '🇮🇱' },
  { code: 'th', name: 'Thai', flag: '🇹🇭' },
  { code: 'vi', name: 'Vietnamese', flag: '🇻🇳' },
  { code: 'id', name: 'Indonesian', flag: '🇮🇩' },
  { code: 'fa', name: 'Persian', flag: '🇮🇷' },
  { code: 'sw', name: 'Swahili', flag: '🇰🇪' },
];

interface HistoryItem {
  id: string;
  sourceText: string;
  translatedText: string;
  sourceLang: string;
  targetLang: string;
  timestamp: number;
}

function LangDropdown({
  selected,
  onSelect,
  exclude,
}: {
  selected: string;
  onSelect: (code: string) => void;
  exclude?: string;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const lang = LANGUAGES.find(l => l.code === selected)!;

  const filtered = LANGUAGES.filter(
    l => l.code !== exclude && l.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200"
        style={{
          backgroundColor: 'var(--bg-glass)',
          border: '1px solid var(--border-glass)',
          color: 'var(--text-primary)',
        }}
      >
        <span>{lang.flag}</span>
        <span>{lang.name}</span>
        <ChevronDown size={13} style={{ color: 'var(--text-muted)' }} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="lang-dropdown absolute top-full mt-2 left-0 z-50 w-56"
          >
            <div className="p-2">
              <input
                autoFocus
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search language..."
                className="w-full px-3 py-1.5 text-sm rounded-lg outline-none"
                style={{
                  backgroundColor: 'var(--dropdown-hover)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-glass)',
                }}
              />
            </div>
            <div className="max-h-52 overflow-y-auto">
              {filtered.map(l => (
                <div
                  key={l.code}
                  className={`lang-option flex items-center gap-2 ${selected === l.code ? 'selected' : ''}`}
                  onClick={() => { onSelect(l.code); setOpen(false); setSearch(''); }}
                >
                  <span>{l.flag}</span>
                  <span>{l.name}</span>
                </div>
              ))}
              {filtered.length === 0 && (
                <p className="text-center py-3 text-xs" style={{ color: 'var(--text-muted)' }}>No results</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function IconBtn({ onClick, title, active, children }: { onClick: () => void; title: string; active?: boolean; children: React.ReactNode; }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200"
      style={{
        backgroundColor: active ? 'var(--color-primary-c)' : 'var(--bg-glass)',
        border: '1px solid var(--border-glass)',
        color: active ? '#fff' : 'var(--text-muted)',
      }}
      onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'; }}
      onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
    >
      {children}
    </button>
  );
}

export default function TranslationInterface() {
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const [listening, setListening] = useState(false);
  const [speakingInput, setSpeakingInput] = useState(false);
  const [speakingOutput, setSpeakingOutput] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('translify-history') || '[]');
    } catch { return []; }
  });

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // ── Groq Translation ──────────────────────────────────────
  const translate = useCallback(async (input: string, src: string, tgt: string) => {
    if (!input.trim()) { setTranslated(''); return; }
    setLoading(true);
    setError('');
    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY;
      const apiUrl = import.meta.env.VITE_GROQ_API_URL;
      const model = import.meta.env.VITE_GROQ_MODEL;

      const srcName = LANGUAGES.find(l => l.code === src)?.name ?? src;
      const tgtName = LANGUAGES.find(l => l.code === tgt)?.name ?? tgt;

      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: [
            {
              role: 'system',
              content: `You are a professional translator. Translate the user's text from ${srcName} to ${tgtName}. Return ONLY the translated text. No explanations, no notes, no quotes.`,
            },
            { role: 'user', content: input },
          ],
          temperature: 0.3,
          max_tokens: 2048,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error?.message || `API error ${res.status}`);
      }

      const data = await res.json();
      const result = data.choices?.[0]?.message?.content?.trim() ?? '';
      setTranslated(result);

      // Save to history
      if (result) {
        const item: HistoryItem = {
          id: Date.now().toString(),
          sourceText: input,
          translatedText: result,
          sourceLang: src,
          targetLang: tgt,
          timestamp: Date.now(),
        };
        setHistory(prev => {
          const next = [item, ...prev].slice(0, 20);
          localStorage.setItem('translify-history', JSON.stringify(next));
          return next;
        });
      }
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Translation failed.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Debounced translate on text/lang change
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!text.trim()) { setTranslated(''); return; }
    debounceRef.current = setTimeout(() => translate(text, sourceLang, targetLang), 800);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [text, sourceLang, targetLang, translate]);

  // ── Mic ───────────────────────────────────────────────────
  const toggleMic = () => {
    const SR = (window.SpeechRecognition || window.webkitSpeechRecognition) as (new() => SpeechRecognition) | undefined;

    if (!SR) {
      alert('Speech recognition is not supported in this browser. Try Chrome.');
      return;
    }

    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
      return;
    }

    const recognition = new SR();
    recognition.lang = sourceLang;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (e: SpeechRecognitionEvent) => {
      const transcript = e.results[0][0].transcript;
      setText(prev => prev ? prev + ' ' + transcript : transcript);
    };
    recognition.onend = () => setListening(false);
    recognition.onerror = () => setListening(false);

    recognitionRef.current = recognition;
    recognition.start();
    setListening(true);
  };

  // ── Speaker ───────────────────────────────────────────────
  const speak = (t: string, langCode: string, isInput: boolean) => {
    if (!t.trim()) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(t);
    utt.lang = langCode;
    utt.rate = 1;
    utt.pitch = 1;
    const setter = isInput ? setSpeakingInput : setSpeakingOutput;
    setter(true);
    utt.onend = () => setter(false);
    utt.onerror = () => setter(false);
    window.speechSynthesis.speak(utt);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setSpeakingInput(false);
    setSpeakingOutput(false);
  };

  // ── Copy ─────────────────────────────────────────────────
  const handleCopy = async () => {
    if (!translated) return;
    await navigator.clipboard.writeText(translated);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ── Share ─────────────────────────────────────────────────
  const handleShare = async () => {
    if (!translated) return;
    if (navigator.share) {
      try { await navigator.share({ text: translated }); } catch { /* user cancelled */ }
    } else {
      await navigator.clipboard.writeText(translated);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  // ── Swap languages ────────────────────────────────────────
  const handleSwap = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setText(translated);
    setTranslated(text);
  };

  // ── Delete History Item ───────────────────────────────────
  const deleteHistoryItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setHistory(prev => {
      const next = prev.filter(item => item.id !== id);
      localStorage.setItem('translify-history', JSON.stringify(next));
      return next;
    });
  };

  return (
    <section id="translator" className="px-4 md:px-8 max-w-6xl mx-auto mb-24 relative z-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glow-border-primary rounded-[2.5rem] p-2"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-[2.2rem] overflow-hidden relative transition-colors duration-300"
          style={{ backgroundColor: 'var(--bg-glass)' }}
        >
          {/* ── Input Panel ── */}
          <div className="p-6 md:p-8 space-y-5 transition-colors duration-300" style={{ borderRight: '1px solid var(--border-glass)', backgroundColor: 'var(--input-bg)' }}>
            <div className="flex justify-between items-center">
              <LangDropdown selected={sourceLang} onSelect={setSourceLang} exclude={targetLang} />
              <button
                onClick={() => setText('')}
                title="Clear"
                style={{ color: 'var(--text-muted)' }}
                className="hover:text-red-400 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative h-56">
              <textarea
                id="source-text"
                value={text}
                onChange={e => setText(e.target.value)}
                maxLength={5000}
                className="w-full h-full bg-transparent border-none focus:outline-none resize-none text-lg font-medium"
                style={{ color: 'var(--text-primary)' }}
                placeholder="Type or paste text to translate..."
              />
            </div>

            <div className="flex justify-between items-center border-t pt-4" style={{ borderColor: 'var(--border-glass)' }}>
              <div className="flex gap-3">
                <IconBtn onClick={toggleMic} title={listening ? 'Stop listening' : 'Speak to translate'} active={listening}>
                  {listening ? <MicOff size={17} /> : <Mic size={17} />}
                </IconBtn>
                <IconBtn
                  onClick={() => speakingInput ? stopSpeaking() : speak(text, sourceLang, true)}
                  title="Read source text aloud"
                  active={speakingInput}
                >
                  <Volume2 size={17} />
                </IconBtn>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{text.length} / 5000</span>
                <div className="w-28 h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--border-glass)' }}>
                  <motion.div
                    animate={{ width: `${(text.length / 5000) * 100}%` }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: 'var(--color-primary-c)' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Swap Button ── */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:block">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSwap}
              title="Swap languages"
              className="w-11 h-11 rounded-full flex items-center justify-center shadow-xl transition-all"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-glass)',
                color: 'var(--color-primary)',
              }}
            >
              <ArrowLeftRight size={18} />
            </motion.button>
          </div>

          {/* ── Output Panel ── */}
          <div className="p-6 md:p-8 space-y-5 transition-colors duration-300" style={{ backgroundColor: 'var(--panel-bg)' }}>
            <div className="flex justify-between items-center">
              <LangDropdown selected={targetLang} onSelect={setTargetLang} exclude={sourceLang} />
              <span
                className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter"
                style={{
                  backgroundColor: 'rgba(76,215,246,0.1)',
                  color: 'var(--color-secondary)',
                  border: '1px solid rgba(76,215,246,0.25)',
                }}
              >
                Groq AI
              </span>
            </div>

            <div className="h-56 overflow-y-auto relative">
              {loading ? (
                <div className="flex items-center gap-2 mt-4" style={{ color: 'var(--text-muted)' }}>
                  <Loader2 size={18} className="animate-spin" />
                  <span className="text-sm">Translating…</span>
                </div>
              ) : error ? (
                <p className="text-red-400 text-sm mt-2">{error}</p>
              ) : (
                <p className={`text-lg font-medium leading-relaxed transition-colors duration-300 ${translated ? '' : 'opacity-30'}`}
                   style={{ color: 'var(--text-primary)' }}>
                  {translated || 'Translation will appear here…'}
                </p>
              )}
            </div>

            <div className="flex justify-between items-center border-t pt-4" style={{ borderColor: 'var(--border-glass)' }}>
              <div className="flex gap-3">
                <IconBtn
                  onClick={() => speakingOutput ? stopSpeaking() : speak(translated, targetLang, false)}
                  title="Read translation aloud"
                  active={speakingOutput}
                >
                  <Volume2 size={17} />
                </IconBtn>
                <IconBtn onClick={handleCopy} title="Copy translation" active={copied}>
                  {copied ? <Check size={17} /> : <Copy size={17} />}
                </IconBtn>
                <IconBtn onClick={handleShare} title="Share translation" active={shared}>
                  {shared ? <Check size={17} /> : <Share2 size={17} />}
                </IconBtn>
              </div>
              <button
                onClick={() => setHistoryOpen(true)}
                className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--color-primary)' }}
              >
                <History size={15} />
                History
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── History Panel ── */}
      <AnimatePresence>
        {historyOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setHistoryOpen(false)}
            />
            {/* Slide-in panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="history-panel fixed right-0 top-0 h-full w-full max-w-sm z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: 'var(--border-glass)' }}>
                <div className="flex items-center gap-2">
                  <History size={18} style={{ color: 'var(--color-primary)' }} />
                  <h3 className="font-bold text-base font-display" style={{ color: 'var(--text-primary)' }}>Translation History</h3>
                </div>
                <div className="flex items-center gap-3">
                  {history.length > 0 && (
                    <button
                      onClick={() => {
                        setHistory([]);
                        localStorage.removeItem('translify-history');
                      }}
                      className="text-xs px-2 py-1 rounded-md"
                      style={{ color: 'var(--text-muted)', backgroundColor: 'var(--border-glass)' }}
                    >
                      Clear all
                    </button>
                  )}
                  <button onClick={() => setHistoryOpen(false)} style={{ color: 'var(--text-muted)' }} className="hover:text-red-400 transition-colors">
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                {history.length === 0 ? (
                  <div className="text-center py-16" style={{ color: 'var(--text-muted)' }}>
                    <History size={32} className="mx-auto mb-3 opacity-30" />
                    <p className="text-sm">No translations yet</p>
                  </div>
                ) : (
                  history.map(item => {
                    const src = LANGUAGES.find(l => l.code === item.sourceLang);
                    const tgt = LANGUAGES.find(l => l.code === item.targetLang);
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-xl p-4 cursor-pointer transition-colors duration-150"
                        style={{ backgroundColor: 'var(--bg-glass)', border: '1px solid var(--border-glass)' }}
                        onClick={() => {
                          setText(item.sourceText);
                          setTranslated(item.translatedText);
                          setSourceLang(item.sourceLang);
                          setTargetLang(item.targetLang);
                          setHistoryOpen(false);
                        }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold" style={{ color: 'var(--color-secondary)' }}>
                            {src?.flag} {src?.name} → {tgt?.flag} {tgt?.name}
                          </span>
                          <div className="ml-auto flex items-center gap-2">
                            <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
                              {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                            <button
                              onClick={(e) => deleteHistoryItem(item.id, e)}
                              className="text-red-400 opacity-50 hover:opacity-100 transition-opacity p-1 -mr-1"
                              title="Remove item"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                        <p className="text-sm truncate mb-1" style={{ color: 'var(--text-primary)' }}>{item.sourceText}</p>
                        <p className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>{item.translatedText}</p>
                      </motion.div>
                    );
                  })
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
