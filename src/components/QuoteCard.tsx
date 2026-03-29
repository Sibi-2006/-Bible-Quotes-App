import React from 'react';
import { motion } from 'framer-motion';
import { Quote, BookOpen, MapPin, Tag, Heart, Share2, Copy, RefreshCw, Lightbulb, CheckCircle2 } from 'lucide-react';

interface QuoteCardProps {
  verse: any;
  loading: boolean;
  error: string | null;
  textSize: 'small' | 'medium' | 'large';
  onRefresh: () => void;
  onSave: () => void;
  onShare: (v: any, p: 'whatsapp' | 'copy') => void;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ 
  verse, loading, error, textSize, onRefresh, onSave, onShare 
}) => {
  
  const getFontSize = (base: number) => {
    const multi = textSize === 'small' ? 0.85 : textSize === 'large' ? 1.3 : 1;
    return `${base * multi}px`;
  };

  const getResponsiveFont = (mobile: string, desktop: string) => {
    // We can use tailwind classes or dynamic styles
    return {
      fontSize: getFontSize(parseInt(mobile)),
    };
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-40">
       <RefreshCw className="w-12 h-12 text-accent animate-spin mb-4" />
       <p className="text-zinc-600 font-black uppercase tracking-[0.4em] text-xs">Opening The Sacred Scrolls...</p>
    </div>
  );

  if (error) return (
    <div className="glass-morphism p-12 rounded-[3rem] text-center border-red-500/20 max-w-2xl mx-auto my-20">
      <p className="text-red-400 mb-6 font-black uppercase text-xs tracking-widest">{error}</p>
      <button 
        onClick={onRefresh}
        className="bg-accent/10 border border-accent/20 text-accent px-10 py-4 rounded-full hover:bg-accent/20 transition-all font-black uppercase text-xs tracking-widest"
      >
        Retry Fetch
      </button>
    </div>
  );

  if (!verse) return null;

  return (
    <motion.div
      key={verse.fullReference}
      initial={{ opacity: 0, scale: 0.98, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className="w-full max-w-5xl mx-auto px-4 my-10"
    >
      <div className="glass-morphism relative p-6 md:p-14 lg:p-20 rounded-[3rem] overflow-hidden border border-accent/20 group">
        
        {/* Decorative Background Accent */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 blur-[120px] -mr-48 -mt-48 pointer-events-none rounded-full" />
        
        <div className="flex flex-col gap-10 md:gap-14">
          
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-6 pb-10 border-b border-white/5">
             <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-accent/10 text-accent">
                  <BookOpen size={28} />
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-1">📖 Random Bible Quote</p>
                   <h3 
                    style={{ fontSize: getFontSize(textSize === 'small' ? 18 : textSize === 'large' ? 28 : 24) }}
                    className="font-serif font-black text-white italic tracking-tight"
                   >
                     {verse.fullReference} 
                     <span className="text-xs font-sans opacity-40 ml-3 font-medium bg-white/5 px-3 py-1 rounded text-accent">✅ {verse.version}</span>
                   </h3>
                </div>
             </div>
             <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10">
                <Tag size={16} className="text-accent" />
                <span className="text-xs font-black uppercase tracking-widest text-zinc-500">🏷️ Category: {verse.category}</span>
             </div>
          </div>

          {/* English Quote */}
          <div className="relative space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent/60 flex items-center gap-2">
              ✨ English Version:
            </h4>
             <div className="relative">
                <Quote className="absolute -top-6 -left-8 w-16 h-16 text-accent/5" />
                <p 
                  style={{ fontSize: getFontSize(textSize === 'small' ? 16 : textSize === 'large' ? 24 : 18) }}
                  className="font-serif italic font-medium leading-relaxed italic accent-glow"
                >
                  "{verse.english}"
                </p>
             </div>
          </div>

          {/* Tamil Quote */}
          <div className="bg-white/[0.02] p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-6">
             <div className="flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#22c55e]">🇹🇳 Tamil Version (தமிழ் மொழி):</span>
                <div className="h-px flex-1 bg-white/5" />
             </div>
             <p 
              style={{ fontSize: getFontSize(textSize === 'small' ? 14 : textSize === 'large' ? 22 : 16) }}
              className="font-sans font-medium text-zinc-300 leading-relaxed italic"
             >
                {verse.tamil}
             </p>
          </div>

          {/* Meaning / Context */}
          <div className="flex gap-6 items-start">
             <div className="p-3.5 rounded-2xl bg-orange-500/10 text-orange-400 shrink-0">
                <Lightbulb size={24} />
             </div>
             <div className="space-y-4">
                <h4 className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">💡 Meaning:</h4>
                <p 
                  style={{ fontSize: getFontSize(textSize === 'small' ? 13 : textSize === 'large' ? 18 : 14) }}
                  className="text-zinc-500 leading-relaxed font-medium transition-all"
                >
                  {verse.meaning}
                </p>
             </div>
          </div>

          {/* Card Actions */}
          <div className="pt-12 flex flex-wrap items-center justify-between gap-10 border-t border-white/5">
             <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
                <button 
                  onClick={onSave}
                  className="flex-1 md:flex-none flex items-center justify-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-accent/10 hover:border-accent/30 transition-all text-zinc-300 hover:text-accent group"
                >
                  <Heart size={18} className="text-red-500 fill-red-500 group-hover:scale-110 transition-transform" />
                  <span>❤️ Save Quote</span>
                </button>
                
                <div className="flex items-center gap-2 bg-white/[0.03] p-1.5 rounded-2xl border border-white/10 w-full md:w-auto justify-center">
                   <button 
                    onClick={() => onShare(verse, 'whatsapp')}
                    className="p-3.5 hover:bg-accent hover:text-black rounded-xl transition-all text-zinc-500"
                    title="Share to WhatsApp"
                   >
                     <Share2 size={18} />
                   </button>
                   <button 
                    onClick={() => onShare(verse, 'copy')}
                    className="p-3.5 hover:bg-accent hover:text-black rounded-xl transition-all text-zinc-500"
                    title="Copy Text"
                   >
                     <Copy size={18} />
                   </button>
                </div>
             </div>

             <button 
               onClick={onRefresh}
               className="w-full md:w-auto group flex items-center justify-center gap-3 bg-accent text-black px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-[#0099CC] transition-all active:scale-95 shadow-2xl shadow-accent/10"
             >
               <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-700" />
               <span>🔄 Get New Quote</span>
             </button>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default QuoteCard;
