import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  theme: 'dark' | 'light';
  setTheme: (t: 'dark' | 'light') => void;
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b-2 border-accent p-3 md:p-5 flex items-center justify-between">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 md:gap-3"
      >
        <div className="bg-accent p-1.5 md:p-2 rounded-xl">
          <Sparkles className="text-black w-4 h-4 md:w-6 md:h-6" />
        </div>
        <div>
          <h1 className="text-lg md:text-2xl font-serif font-black italic tracking-tight text-white focus-within:">
            Bible Quotes <span className="text-accent">Generator</span>
          </h1>
          <p className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-widest hidden sm:block">
            Sibi's App | Divine Daily Inspiration
          </p>
        </div>
      </motion.div>
      
      <div className="flex items-center gap-4 md:gap-8">
        <div className="hidden md:flex items-center gap-6 text-zinc-400 text-xs font-black uppercase tracking-[0.2em]">
          <span className="hover:text-accent cursor-pointer transition-colors">Home</span>
          <span className="hover:text-accent cursor-pointer transition-colors">Scripture</span>
          <span className="hover:text-accent cursor-pointer transition-colors">About</span>
        </div>

        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-accent hover:text-black transition-all group active:scale-95"
          title="Toggle Theme"
        >
          {theme === 'dark' ? (
            <div className="flex items-center gap-2">
               <Moon size={18} className="group-hover:rotate-12 transition-transform" />
               <span className="text-[9px] font-black uppercase tracking-widest hidden sm:block">Dark Mode</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
               <Sun size={18} className="group-hover:rotate-90 transition-transform" />
               <span className="text-[9px] font-black uppercase tracking-widest hidden sm:block">Light Mode</span>
            </div>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
