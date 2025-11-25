import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goldText = 'text-amber-700';
  const goldBg = 'bg-amber-700';
  const goldBorder = 'border-amber-700';

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6 border-b border-white/10'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <span className={`font-serif text-2xl font-bold tracking-wider transition-colors ${
              scrolled ? 'text-zinc-900' : 'text-white'
            }`}>
              JACK<span className={goldText}>.</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-10 items-center">
            {['關於我', '專業服務', '鑑賞書單'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`text-sm font-medium uppercase tracking-widest hover:${goldText} transition-colors ${
                  scrolled ? 'text-zinc-600' : 'text-white/80'
                }`}
              >
                {item}
              </a>
            ))}
            <a
              href="#聯絡諮詢"
              className={`px-6 py-2.5 text-sm font-medium uppercase tracking-widest border transition-all ${
                scrolled ? `border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white` : `border-white text-white hover:bg-white hover:text-zinc-900`
              }`}
            >
              預約諮詢
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
