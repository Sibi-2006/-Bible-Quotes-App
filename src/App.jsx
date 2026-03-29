import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RefreshCw, 
  Heart, 
  Share2, 
  BookOpen, 
  Lightbulb, 
  Tag as TagIcon, 
  Sparkles,
  CheckCircle2,
  Copy,
  MessageSquare,
  X,
  Trash2,
  Bookmark
} from 'lucide-react';
import { BOOKS, CATEGORY_VERSES, TAMIL_MAP } from './data/verses';

const CATEGORIES = [
  'All', 'Faith', 'Love', 'Hope', 'Wisdom', 
  'Guidance', 'Courage', 'Forgiveness', 'Peace', 'Strength'
];

const VERSIONS = ['en-asv', 'en-kjv'];
const TAMIL_VERSION_ID = 'ta-irvtam';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSavedToast, setShowSavedToast] = useState(false);
  const [showCollections, setShowCollections] = useState(false);
  const [savedQuotes, setSavedQuotes] = useState([]);

  // Load saved quotes on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('saved_bible_quotes') || '[]');
    setSavedQuotes(saved);
  }, []);

  const fetchVerseData = async () => {
    setLoading(true);
    setError(null);
    try {
      let target;
      let finalCategory = selectedCategory;

      if (selectedCategory === 'All') {
        const catKeys = Object.keys(CATEGORY_VERSES);
        finalCategory = catKeys[Math.floor(Math.random() * catKeys.length)];
        const pool = CATEGORY_VERSES[finalCategory];
        target = pool[Math.floor(Math.random() * pool.length)];
      } else {
        const pool = CATEGORY_VERSES[selectedCategory];
        target = pool[Math.floor(Math.random() * pool.length)];
      }

      const version = VERSIONS[Math.floor(Math.random() * VERSIONS.length)];
      
      const engRes = await fetch(`https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${target.book}/chapters/${target.chapter}/verses/${target.verse}.json`);
      if (!engRes.ok) throw new Error("Reference not found in API");
      const engData = await engRes.json();

      let tamilText = TAMIL_MAP[`${target.book}:${target.verse}`] || TAMIL_MAP[`${target.book}:${target.chapter}:${target.verse}`];
      if (!tamilText) {
        try {
          const tamRes = await fetch(`https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${TAMIL_VERSION_ID}/books/${target.book}/chapters/${target.chapter}/verses/${target.verse}.json`);
          if (tamRes.ok) {
            const tamData = await tamRes.json();
            tamilText = tamData.text;
          }
        } catch (e) {
          tamilText = "தமிழ் மொழிபெயர்ப்பு விரைவில் வரும்...";
        }
      }

      const bookKey = target.book.toLowerCase();
      const bookDisplayName = engData.book || BOOKS[bookKey] || bookKey.charAt(0).toUpperCase() + bookKey.slice(1);

      setVerse({
        english: engData.text,
        bookName: bookDisplayName,
        chapter: target.chapter,
        verse: target.verse,
        version: version,
        tamil: tamilText,
        meaning: target.meaning,
        category: finalCategory,
        fullReference: `${bookDisplayName} ${target.chapter}:${target.verse}`
      });
    } catch (err) {
      console.error(err);
      setError("Failed to illuminate the Word. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVerseData();
  }, [selectedCategory]);

  const saveToLocal = () => {
    if (!verse) return;
    const existing = JSON.parse(localStorage.getItem('saved_bible_quotes') || '[]');
    if (existing.some(q => q.fullReference === verse.fullReference)) {
      alert("Already in your collection!");
      return;
    }
    const newSave = { ...verse, timestamp: Date.now() };
    const updated = [newSave, ...existing];
    localStorage.setItem('saved_bible_quotes', JSON.stringify(updated));
    setSavedQuotes(updated);
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 2000);
  };

  const removeSaved = (ref) => {
    const updated = savedQuotes.filter(q => q.fullReference !== ref);
    localStorage.setItem('saved_bible_quotes', JSON.stringify(updated));
    setSavedQuotes(updated);
  };

  const handleShare = (verseData, platform) => {
    if (!verseData) return;
    const text = `📖 *${verseData.fullReference}* (${verseData.version})\n\n✨ "${verseData.english}"\n\n🇹🇳 *தமிழ்:* ${verseData.tamil}\n\n🏷️ Category: ${verseData.category}`;
    
    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(text);
      alert('Copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 py-12 px-4 flex flex-col items-center justify-center font-sans selection:bg-gold/30">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-gold/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-orange-900/5 blur-[120px] rounded-full" />
      </div>

      <header className="mb-14 text-center w-full max-w-4xl relative z-20">
        <div className="flex justify-between items-start mb-10 flex-wrap gap-6">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl glass-morphism border-gold/20 text-gold text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles size={14} />
              Divine Daily Inspiration
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-black tracking-tight italic">
              Sacred <span className="text-gold">Quotes</span>
            </h1>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setShowCollections(true)}
            className="group relative flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-[1.5rem] hover:bg-white/10 transition-all font-black text-xs uppercase tracking-widest"
          >
            <Bookmark size={18} className="text-gold" />
            <span>Saved Collections</span>
            {savedQuotes.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {savedQuotes.length}
              </span>
            )}
          </motion.button>
        </div>
        
        {/* Category Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-4 glass-morphism rounded-3xl border-white/5 bg-white/[0.02]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`
                px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300
                ${selectedCategory === cat 
                  ? 'bg-gold text-black shadow-lg shadow-gold/20 scale-105' 
                  : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/10'}
              `}
            >
              {selectedCategory === cat && '✓ '}
              {cat}
            </button>
          ))}
        </div>
      </header>

      <main className="w-full max-w-4xl relative z-10">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-32"
            >
              <RefreshCw className="w-10 h-10 text-gold animate-spin mb-4" />
              <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.3em]">Opening the Scrolls...</p>
            </motion.div>
          ) : error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-morphism p-12 rounded-[2rem] text-center border-red-500/20"
            >
              <p className="text-red-400 mb-6 font-bold">{error}</p>
              <button 
                onClick={fetchVerseData}
                className="bg-red-500/10 border border-red-500/20 text-red-500 px-10 py-4 rounded-full hover:bg-red-500/20 transition-all font-black uppercase text-xs tracking-widest"
              >
                Try Again
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={verse.fullReference}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="glass-morphism relative p-6 md:p-14 lg:p-20 rounded-[3rem] border-white/5 overflow-hidden active:cursor-grabbing"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] -mr-32 -mt-32 pointer-events-none" />

              <div className="flex flex-col gap-12 relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-6 pb-10 border-b border-white/5">
                   <div className="flex items-center gap-4">
                      <div className="p-4 rounded-2xl bg-gold/10 text-gold">
                        <BookOpen size={28} />
                      </div>
                      <div>
                         <h2 className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-1">📖 Random Bible Quote</h2>
                         <p className="text-2xl md:text-3xl font-serif font-black text-white">
                           {verse.fullReference} 
                           <span className="text-xs font-sans opacity-40 ml-3 font-medium bg-white/5 px-2 py-1 rounded text-gold">✅ {verse.version}</span>
                         </p>
                      </div>
                   </div>
                   <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10">
                      <TagIcon size={16} className="text-gold" />
                      <span className="text-xs font-black uppercase tracking-widest text-zinc-300">🏷️ Category: {verse.category}</span>
                   </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold/60">✨ English Version:</h4>
                  <div className="relative">
                    <p className="verse-text gold-dim-glow leading-snug">
                       "{verse.english}"
                    </p>
                  </div>
                </div>

                <div className="bg-white/[0.03] p-10 rounded-[2.5rem] border border-white/5 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#22c55e]">🇹🇳 Tamil Version (தமிழ் மொழி):</span>
                    <div className="h-px flex-1 bg-white/5" />
                  </div>
                  <p className="tamil-text font-medium text-zinc-200 leading-relaxed italic">
                    {verse.tamil}
                  </p>
                </div>

                <div className="flex gap-6 items-start">
                   <div className="p-3.5 rounded-2xl bg-orange-500/10 text-orange-400 shrink-0">
                      <Lightbulb size={24} />
                   </div>
                   <div className="space-y-2">
                      <h4 className="text-xs font-black text-white uppercase tracking-widest opacity-80 flex items-center gap-2">
                        💡 Meaning:
                      </h4>
                      <p className="text-zinc-400 leading-relaxed font-medium">
                        {verse.meaning}
                      </p>
                   </div>
                </div>

                <div className="pt-12 flex flex-wrap items-center justify-between gap-8 border-t border-white/5">
                   <div className="flex items-center gap-4">
                      <button 
                        onClick={saveToLocal}
                        className="flex items-center gap-2.5 bg-white/5 text-zinc-300 hover:bg-white/10 px-6 py-3.5 rounded-2xl font-bold transition-all active:scale-95 border border-white/10"
                      >
                        <Heart size={18} className="text-red-500" />
                        <span>❤️ Save</span>
                      </button>
                      
                      <div className="flex items-center gap-2 bg-white/5 p-1 rounded-2xl border border-white/10">
                        <button 
                         onClick={() => handleShare(verse, 'whatsapp')}
                         className="p-3 hover:bg-white/10 rounded-xl text-zinc-400 hover:text-green-500 transition-colors"
                         title="Share to WhatsApp"
                        >
                          <MessageSquare size={18} />
                        </button>
                        <button 
                         onClick={() => handleShare(verse, 'copy')}
                         className="p-3 hover:bg-white/10 rounded-xl text-zinc-400 hover:text-blue-500 transition-colors"
                         title="Copy Reference"
                        >
                          <Copy size={18} />
                        </button>
                        <button 
                         className="p-3 hover:bg-white/10 rounded-xl text-zinc-400 hover:text-white transition-colors"
                         title="Internal Share"
                        >
                          <Share2 size={18} />
                        </button>
                      </div>
                   </div>

                   <button 
                     onClick={fetchVerseData}
                     className="group flex items-center gap-3 bg-white text-black px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-gold transition-all duration-500 active:scale-95 shadow-2xl shadow-white/5"
                   >
                     <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-700" />
                     <span>🔄 Get New Quote</span>
                   </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Collections Modal */}
      <AnimatePresence>
        {showCollections && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCollections(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-2xl bg-[#08080a] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl"
            >
               <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-gold/10 text-gold">
                      <Bookmark size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-serif font-black">My Collections</h2>
                      <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">{savedQuotes.length} Verses Saved</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowCollections(false)}
                    className="p-3 hover:bg-white/5 rounded-full transition-colors text-zinc-500 hover:text-white"
                  >
                    <X size={24} />
                  </button>
               </div>
               
               <div className="max-h-[60vh] overflow-y-auto p-6 md:p-8 space-y-6 custom-scrollbar">
                  {savedQuotes.length === 0 ? (
                    <div className="py-24 text-center opacity-20">
                      <BookOpen size={64} className="mx-auto mb-6" />
                      <p className="text-xs font-black uppercase tracking-[0.4em]">Your heart's library is empty</p>
                    </div>
                  ) : (
                    <div className="grid gap-6">
                      {savedQuotes.map((q) => (
                        <div key={q.fullReference} className="bg-white/[0.03] border border-white/5 p-8 rounded-[2rem] group hover:border-gold/20 transition-all">
                           <div className="flex justify-between items-start mb-6">
                              <div>
                                <h3 className="text-gold font-serif font-bold text-xl mb-1">{q.fullReference}</h3>
                                <div className="flex items-center gap-3">
                                  <span className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">{q.category}</span>
                                  <span className="w-1 h-1 rounded-full bg-white/10" />
                                  <span className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">{q.version}</span>
                                </div>
                              </div>
                              <button 
                                onClick={() => removeSaved(q.fullReference)}
                                className="p-3 text-zinc-600 hover:text-red-500 hover:bg-red-500/10 rounded-2xl transition-all"
                                title="Remove from collection"
                              >
                                <Trash2 size={18} />
                              </button>
                           </div>
                           <p className="text-zinc-300 leading-relaxed italic mb-8 border-l-2 border-gold/20 pl-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                             "{q.english}"
                           </p>
                           <div className="flex items-center justify-between">
                              <button 
                                onClick={() => { setVerse(q); setShowCollections(false); }}
                                className="px-6 py-2.5 rounded-xl bg-gold/10 text-gold text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-all"
                              >
                                View Verse
                              </button>
                              <div className="flex items-center gap-2">
                                <button 
                                  onClick={() => handleShare(q, 'whatsapp')}
                                  className="p-2.5 text-zinc-500 hover:text-green-500"
                                >
                                  <MessageSquare size={18} />
                                </button>
                                <button 
                                  onClick={() => handleShare(q, 'copy')}
                                  className="p-2.5 text-zinc-500 hover:text-blue-500"
                                >
                                  <Copy size={18} />
                                </button>
                              </div>
                           </div>
                        </div>
                      ))}
                    </div>
                  )}
               </div>
               
               {savedQuotes.length > 0 && (
                 <div className="p-6 bg-white/[0.01] border-t border-white/5 text-center">
                    <p className="text-[10px] text-zinc-700 font-black uppercase tracking-widest">End of Collections</p>
                 </div>
               )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSavedToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black text-xs uppercase shadow-2xl tracking-widest"
          >
            <CheckCircle2 size={20} className="text-green-600" />
            Added to Sanctuary
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-20 opacity-30 text-center">
        <p className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-500">Divine Wisdom • Excellence Built</p>
      </footer>
    </div>
  );
};

export default App;
