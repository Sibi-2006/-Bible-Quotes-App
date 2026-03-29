import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
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
          <h1 className="text-lg md:text-2xl font-serif font-black italic tracking-tight text-white">
            Bible Quotes <span className="text-accent">Generator</span>
          </h1>
          <p className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-widest hidden sm:block">
            Sibi's App | Divine Daily Inspiration
          </p>
        </div>
      </motion.div>
      
      <div className="hidden md:flex items-center gap-6 text-zinc-400 text-xs font-black uppercase tracking-[0.2em]">
        <span className="hover:text-accent cursor-pointer transition-colors">Home</span>
        <span className="hover:text-accent cursor-pointer transition-colors">Scripture</span>
        <span className="hover:text-accent cursor-pointer transition-colors">About</span>
      </div>
    </header>
  );
};

export default Header;
