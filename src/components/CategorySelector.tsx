import React from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES } from '../utils/constants';

interface CategorySelectorProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-6 md:mt-10 px-4">
      <div className="flex flex-col gap-3">
        <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-accent mb-1 px-1">
          Target Theme
        </h3>
        
        <div className="flex overflow-x-auto gap-2 pb-4 category-scroll snap-x snap-mandatory">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              whileTap={{ scale: 0.95 }}
              className={`
                flex-shrink-0 min-w-[100px] h-[40px] md:h-[48px] px-6 rounded-2xl md:rounded-3xl snap-center
                text-xs md:text-sm font-black uppercase tracking-widest transition-all duration-300
                ${selectedCategory === cat 
                  ? 'bg-accent text-black shadow-lg shadow-accent/20' 
                  : 'bg-card-bg text-zinc-500 border border-white/5 hover:border-accent/40 hover:text-white'}
              `}
            >
              {selectedCategory === cat && '✓ '}
              {cat}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;
