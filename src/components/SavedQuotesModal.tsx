import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, BookOpen, Bookmark, MessageCircle, Copy } from 'lucide-react';

interface SavedQuotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedQuotes: any[];
  onRemove: (ref: string) => void;
  onView: (v: any) => void;
  onShare: (v: any, p: 'whatsapp' | 'copy') => void;
}

const SavedQuotesModal: React.FC<SavedQuotesModalProps> = ({ 
  isOpen, onClose, savedQuotes, onRemove, onView, onShare 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative w-full max-w-2xl bg-[#08080a] border border-accent/20 rounded-[3rem] overflow-hidden shadow-2xl"
          >
             <div className="p-8 md:p-10 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-accent text-black">
                    <Bookmark size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-serif font-black text-white italic">Saved Collections</h2>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{savedQuotes.length} Sanctuary Items</p>
                  </div>
                </div>
                <button 
                  onClick={onClose}
                  className="p-3 hover:bg-white/5 rounded-full transition-colors text-zinc-500 hover:text-accent"
                >
                  <X size={24} />
                </button>
             </div>
             
             <div className="max-h-[60vh] overflow-y-auto p-6 md:p-10 space-y-8 custom-scrollbar">
                {savedQuotes.length === 0 ? (
                  <div className="py-24 text-center opacity-20">
                    <BookOpen size={64} className="mx-auto mb-6 text-accent" />
                    <p className="text-xs font-black uppercase tracking-[0.4em]">Your heart's library is currently empty</p>
                  </div>
                ) : (
                  <div className="grid gap-8">
                    {savedQuotes.map((q) => (
                      <div key={q.fullReference} className="bg-white/[0.03] border border-white/5 p-8 rounded-[2.5rem] group hover:border-accent/20 transition-all">
                         <div className="flex justify-between items-start mb-6">
                            <div>
                              <h3 className="text-accent font-serif font-bold text-xl mb-1">{q.fullReference}</h3>
                              <div className="flex items-center gap-3">
                                <span className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">{q.category}</span>
                                <span className="w-1 h-1 rounded-full bg-white/10" />
                                <span className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">{q.version}</span>
                              </div>
                            </div>
                            <button 
                              onClick={() => onRemove(q.fullReference)}
                              className="p-3 text-zinc-600 hover:text-red-500 hover:bg-red-500/10 rounded-2xl transition-all"
                              title="Discard"
                            >
                              <Trash2 size={18} />
                            </button>
                         </div>
                         <p className="text-zinc-300 text-sm leading-relaxed italic mb-8 border-l-2 border-accent/20 pl-6 line-clamp-3">
                           "{q.english}"
                         </p>
                         <div className="flex items-center justify-between">
                            <button 
                              onClick={() => onView(q)}
                              className="px-6 py-2.5 rounded-xl bg-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.2em] hover:bg-accent hover:text-black transition-all"
                            >
                              Reluminate
                            </button>
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => onShare(q, 'whatsapp')}
                                className="p-2.5 text-zinc-600 hover:text-accent"
                              >
                                <MessageCircle size={18} />
                              </button>
                              <button 
                                onClick={() => onShare(q, 'copy')}
                                className="p-2.5 text-zinc-600 hover:text-accent"
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
             <div className="p-6 text-center border-t border-white/5">
                <p className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-800">End Of Repository</p>
             </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SavedQuotesModal;
