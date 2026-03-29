import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import CategorySelector from './components/CategorySelector';
import SettingsBar from './components/SettingsBar';
import QuoteCard from './components/QuoteCard';
import Footer from './components/Footer';
import SavedQuotesModal from './components/SavedQuotesModal';
import { BOOKS, CATEGORY_VERSES, TAMIL_MAP } from './utils/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  // --- States ---
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [verse, setVerse] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showSavedToast, setShowSavedToast] = useState<boolean>(false);
  const [showCollections, setShowCollections] = useState<boolean>(false);
  
  // Settings States
  const [textSize, setTextSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [language, setLanguage] = useState<'en' | 'tamil'>('en');
  const [version, setVersion] = useState<'EN-KJV' | 'EN-ASV'>('EN-KJV');
  
  // Persistence
  const [savedQuotes, setSavedQuotes] = useState<any[]>([]);

  // --- Load Preferences ---
  useEffect(() => {
    try {
      const savedPrefs = localStorage.getItem('sibi_app_prefs');
      if (savedPrefs) {
        const prefs = JSON.parse(savedPrefs);
        if (prefs && typeof prefs === 'object') {
          if (prefs.textSize) setTextSize(prefs.textSize);
          if (prefs.theme) setTheme(prefs.theme);
          if (prefs.language) setLanguage(prefs.language);
          if (prefs.version) setVersion(prefs.version);
        }
      }
      const savedItems = localStorage.getItem('sibi_saved_quotes');
      if (savedItems) {
        const items = JSON.parse(savedItems);
        if (Array.isArray(items)) setSavedQuotes(items);
      }
    } catch (e) {
      console.error("Local storage corruption detected", e);
    }
  }, []);

  // --- Save Preferences ---
  useEffect(() => {
    localStorage.setItem('sibi_app_prefs', JSON.stringify({ textSize, theme, language, version }));
    document.documentElement.setAttribute('data-theme', theme);
  }, [textSize, theme, language, version]);

  const fetchVerseData = useCallback(async () => {
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

      const currentVersion = version.toLowerCase();
      
      const engRes = await fetch(`https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${currentVersion}/books/${target.book}/chapters/${target.chapter}/verses/${target.verse}.json`);
      if (!engRes.ok) throw new Error("Reference not found in API");
      const engData = await engRes.json();

      let tamilText = TAMIL_MAP[`${target.book}:${target.verse}`] || TAMIL_MAP[`${target.book}:${target.chapter}:${target.verse}`];
      if (!tamilText) {
        try {
          const tamRes = await fetch(`https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/ta-irvtam/books/${target.book}/chapters/${target.chapter}/verses/${target.verse}.json`);
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
      setError("Failed to fetch fresh bread. Please check connection.");
    } finally {
      setLoading(false);
    }
  }, [selectedCategory, version]);

  useEffect(() => {
    fetchVerseData();
  }, [fetchVerseData]);

  // --- Actions ---
  const saveQuote = () => {
    if (!verse) return;
    if (savedQuotes.some(q => q.fullReference === verse.fullReference)) {
      alert("Sanctuary Item Already Exists!");
      return;
    }
    const updated = [verse, ...savedQuotes];
    setSavedQuotes(updated);
    localStorage.setItem('sibi_saved_quotes', JSON.stringify(updated));
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 2000);
  };

  const removeQuote = (ref: string) => {
    const updated = savedQuotes.filter(q => q.fullReference !== ref);
    setSavedQuotes(updated);
    localStorage.setItem('sibi_saved_quotes', JSON.stringify(updated));
  };

  const handleShare = (verseData: any, platform: 'whatsapp' | 'copy') => {
    if (!verseData) return;
    const text = `📖 *${verseData.fullReference}* (${verseData.version})\n\n✨ "${verseData.english}"\n\n🇹🇳 *தமிழ்:* ${verseData.tamil}\n\n🏷️ Category: ${verseData.category}\n\nBuilt with Faith by Sibi's App`;
    
    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(text);
      alert('Copied to Clipboard!');
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#000000] text-zinc-100' : 'bg-white text-black'} transition-colors duration-700`}>
      <Header />
      
      <main className="relative pb-20">
        <CategorySelector 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
        
        <SettingsBar 
          textSize={textSize} setTextSize={setTextSize}
          theme={theme} setTheme={setTheme}
          language={language} setLanguage={setLanguage}
          version={version} setVersion={setVersion}
        />

        <QuoteCard 
          verse={verse} 
          loading={loading} 
          error={error} 
          textSize={textSize}
          onRefresh={fetchVerseData}
          onSave={saveQuote}
          onShare={handleShare}
        />
      </main>

      <Footer />

      {/* Overlays */}
      <SavedQuotesModal 
        isOpen={showCollections} 
        onClose={() => setShowCollections(false)}
        savedQuotes={savedQuotes}
        onRemove={removeQuote}
        onView={(v) => { setVerse(v); setShowCollections(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        onShare={handleShare}
      />

      <AnimatePresence>
        {showSavedToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-24 left-1/2 z-[200] flex items-center gap-3 bg-accent text-black px-8 py-4 rounded-2xl font-black text-[10px] uppercase shadow-2xl tracking-widest"
          >
            <CheckCircle2 size={18} />
            Added to Sanctuary
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button for Collections on Mobile */}
      <motion.button
         whileTap={{ scale: 0.9 }}
         onClick={() => setShowCollections(true)}
         className="fixed bottom-6 right-6 md:hidden z-50 bg-accent text-black p-4 rounded-full shadow-2xl border-4 border-black font-black"
      >
        <span className="text-[10px] absolute -top-2 -right-2 bg-red-600 text-white w-5 h-5 flex items-center justify-center rounded-full">
          {savedQuotes.length}
        </span>
        Saved
      </motion.button>
    </div>
  );
};

export default App;
