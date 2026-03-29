import React from 'react';
import { Github, Linkedin, MessageCircle, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#050505] border-t-2 border-accent p-6 md:p-12 mt-20 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[100px] bg-accent/5 blur-[80px] -mt-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10 text-center md:text-left">
        
        {/* Branding & Creator */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center md:justify-start gap-2">
             <p className="text-zinc-300 text-sm font-medium tracking-tight">Crafted with <Heart size={14} className="inline-block text-red-500 fill-red-500 mx-1" /> by <span className="text-white font-black underline decoration-accent decoration-2 underline-offset-4">Sibi</span></p>
          </div>
          <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-[0.4em] font-black">© 2025 ALL RIGHTS RESERVED | v1.0</p>
          <p className="text-zinc-500 text-[10px] font-bold max-w-xs leading-relaxed">
            Built for faith and spiritual inspiration for individuals worldwide. May the Word ignite your hearts.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-6 items-center md:items-start">
           <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Connect & Follow</h4>
           <div className="flex gap-6">
              <a href="https://github.com/Sibi-2006" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-2xl hover:bg-accent hover:text-black transition-all group">
                <Github size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://wa.me/917598382584" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-2xl hover:bg-accent hover:text-black transition-all group">
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/sibiraj-r-147936336/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-2xl hover:bg-accent hover:text-black transition-all group">
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
           </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-col gap-4 items-center md:items-end">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Tech Stack</h4>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-3 gap-y-1 text-[10px] md:text-xs font-black uppercase tracking-widest text-[#555]">
            <span className="text-zinc-500">React 18</span>
            <span>+</span>
            <span className="text-zinc-500">Vite</span>
            <span>+</span>
            <span className="text-zinc-500">Tailwind CSS</span>
            <span>+</span>
            <span className="text-zinc-500">TypeScript</span>
          </div>
          <div className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[9px] font-black uppercase text-accent tracking-widest">
            Bible API | Hosted on Render
          </div>
        </div>

      </div>

      <div className="mt-12 text-center border-t border-white/5 pt-8">
         <p className="text-[9px] font-black uppercase text-zinc-800 tracking-[1em]">Excellence Built • Divine Inspiration</p>
      </div>
    </footer>
  );
};

export default Footer;
