import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const goldText = 'text-amber-700';
  const goldBg = 'bg-amber-700';
  const goldBorder = 'border-amber-700';

  return (
    <header className="relative min-h-screen flex items-center bg-zinc-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "linear" }}
      >
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2690&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Library Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900/90 to-zinc-900/60 mix-blend-multiply"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className={`${goldText} font-medium tracking-[0.2em] uppercase mb-6 flex items-center gap-3`}>
              <span className={`h-[1px] w-12 ${goldBg}`}></span>
              資深圖書經紀人 / 業務代表
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-white mb-8">
              以專業視角，<br />
              <span className="italic relative z-10">
                為您策展知識的價值。
                <span className={`absolute bottom-2 left-0 w-full h-3 ${goldBg} opacity-30 -z-10 transform -skew-x-12`}></span>
              </span>
            </h1>
            <p className="text-xl text-zinc-300 mb-10 leading-relaxed max-w-2xl font-light">
              我是 Jack，擁有十年圖書市場經驗。我不僅提供書籍，更為企業與教育機構提供精準的知識解決方案與採購策略。
            </p>
            <div className="flex flex-wrap gap-6">
              <motion.a
                href="#聯絡諮詢"
                className={`bg-white text-zinc-900 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-zinc-100 transition-colors flex items-center gap-3`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                啟動合作專案 <ArrowRight size={18} />
              </motion.a>
            </div>

            <motion.div
              className="mt-16 flex items-center gap-12 text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold text-white">50+</span>
                <span className="text-xs uppercase tracking-wider mt-1">合作學術機構</span>
              </div>
              <div className="w-[1px] h-10 bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold text-white">20+</span>
                <span className="text-xs uppercase tracking-wider mt-1">知名企業客戶</span>
              </div>
              <div className="w-[1px] h-10 bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold text-white">10YR</span>
                <span className="text-xs uppercase tracking-wider mt-1">專業深耕經驗</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Professional Photo Placeholder - Cleaner Look */}
          <motion.div
            className="lg:col-span-5 relative hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="aspect-[3/4] relative z-10">
              {/* 這裡替換成您穿著西裝或專業形象的照片 */}
              <motion.img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Jack's Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out shadow-2xl shadow-zinc-950/50"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              {/* Decor */}
              <div className={`absolute -bottom-6 -left-6 w-full h-full border-2 ${goldBorder} -z-10`}></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#關於我"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.a>
    </header>
  );
};

export default HeroSection;
