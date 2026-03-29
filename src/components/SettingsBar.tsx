import React from 'react';
import { motion } from 'framer-motion';
import { Type, Moon, Sun, Globe, Book } from 'lucide-react';

interface SettingsBarProps {
  textSize: 'small' | 'medium' | 'large';
  setTextSize: (size: 'small' | 'medium' | 'large') => void;
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
  language: 'en' | 'tamil';
  setLanguage: (lang: 'en' | 'tamil') => void;
  version: 'EN-KJV' | 'EN-ASV';
  setVersion: (v: 'EN-KJV' | 'EN-ASV') => void;
}

const SettingsBar: React.FC<SettingsBarProps> = ({ 
  textSize, setTextSize, theme, setTheme, language, setLanguage, version, setVersion 
}) => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-8 md:mt-12 px-4 mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-6 bg-card-bg border border-white/5 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden">
        
        {/* Text Size */}
        <div className="flex flex-col gap-3">
          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
            <Type size={14} className="text-accent" />
            Text Size
          </label>
          <div className="flex gap-2">
            {['small', 'medium', 'large'].map((s) => (
              <button
                key={s}
                onClick={() => setTextSize(s as any)}
                className={`flex-1 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${textSize === s ? 'bg-accent text-black scale-105 shadow-md shadow-accent/20' : 'bg-white/5 text-zinc-400 hover:text-white border border-white/5'}`}
              >
                {s === 'small' ? 'A-' : s === 'medium' ? 'A' : 'A+'}
              </button>
            ))}
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="flex flex-col gap-3">
          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
            {theme === 'dark' ? <Moon size={14} className="text-accent" /> : <Sun size={14} className="text-accent" />}
            Theme
          </label>
          <div className="flex gap-2">
             <button
                onClick={() => setTheme('dark')}
                className={`flex-1 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${theme === 'dark' ? 'bg-accent text-black scale-105' : 'bg-white/5 text-zinc-400 border border-white/5'}`}
              >
                Dark
              </button>
              <button
                onClick={() => setTheme('light')}
                className={`flex-1 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${theme === 'light' ? 'bg-accent text-black scale-105' : 'bg-white/5 text-zinc-400 border border-white/5'}`}
              >
                Light
              </button>
          </div>
        </div>

        {/* Version Selection */}
        <div className="flex flex-col gap-3">
          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
            <Book size={14} className="text-accent" />
            Version
          </label>
          <div className="flex gap-2">
             <button
                onClick={() => setVersion('EN-KJV')}
                className={`flex-1 py-1 px-4 h-9 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${version === 'EN-KJV' ? 'bg-accent text-black scale-105' : 'bg-white/5 text-zinc-400 border border-white/5'}`}
              >
                KJV
              </button>
              <button
                onClick={() => setVersion('EN-ASV')}
                className={`flex-1 py-1 px-4 h-9 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${version === 'EN-ASV' ? 'bg-accent text-black scale-105' : 'bg-white/5 text-zinc-400 border border-white/5'}`}
              >
                ASV
              </button>
          </div>
        </div>

        {/* Language Selection */}
        <div className="flex flex-col gap-3">
          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
            <Globe size={14} className="text-accent" />
            Language
          </label>
          <div className="flex gap-2">
             <button
                onClick={() => setLanguage('en')}
                className={`flex-1 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${language === 'en' ? 'bg-accent text-black scale-105' : 'bg-white/5 text-zinc-400 border border-white/5'}`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('tamil')}
                className={`flex-1 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${language === 'tamil' ? 'bg-accent text-black scale-105' : 'bg-white/5 text-zinc-400 border border-white/5'}`}
              >
                 தமிழ்
              </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SettingsBar;
