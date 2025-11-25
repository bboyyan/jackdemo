import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CurationSection = () => {
  const goldText = 'text-amber-700';

  const recommendedBooks = [
    {
      id: 1,
      title: "原子習慣",
      author: "James Clear",
      category: "Business / 商業理財",
      description: "建立好習慣的終極指南。每天進步1%，一年後你會進步37倍。",
      coverColor: "bg-zinc-200"
    },
    {
      id: 2,
      title: "被討厭的勇氣",
      author: "岸見一郎",
      category: "Philosophy / 心理勵志",
      description: "所謂的自由，就是被別人討厭。自我啟發之父阿德勒的哲學課。",
      coverColor: "bg-stone-300"
    },
    {
      id: 3,
      title: "晶片戰爭",
      author: "Chris Miller",
      category: "History / 人文社科",
      description: "揭開全球最關鍵技術的權力鬥爭，理解未來地緣政治必讀。",
      coverColor: "bg-zinc-300"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="鑑賞書單" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className={`${goldText} font-medium tracking-[0.2em] uppercase block mb-4`}>Monthly Curation</span>
            <h2 className="text-4xl font-serif font-bold text-zinc-900">本月鑑賞選書</h2>
            <p className="text-zinc-500 mt-4 text-lg font-light max-w-md">精選具備洞見與影響力的著作，為您的組織注入新思維。</p>
          </div>
          <motion.a
            href="#聯絡諮詢"
            className={`group flex items-center gap-3 ${goldText} font-medium uppercase tracking-widest hover:opacity-70 transition-opacity`}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            索取完整書單目錄 <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {recommendedBooks.map((book) => (
            <motion.div
              key={book.id}
              className="group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Book Cover Art Style */}
              <motion.div
                className={`relative aspect-[3/4] ${book.coverColor} mb-8 shadow-xl transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-2xl`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* 模擬書封設計 - 實際使用請換成真實書封圖片 */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between bg-gradient-to-tr from-black/20 to-transparent mix-blend-overlay">
                  <span className="text-zinc-900/50 font-serif text-sm uppercase tracking-widest">{book.category.split('/')[0]}</span>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-zinc-900 leading-tight mb-2">{book.title}</h3>
                    <span className="text-zinc-700 font-medium block">— {book.author}</span>
                  </div>
                </div>
                {/* Decorative Spine */}
                <div className="absolute left-0 top-0 h-full w-3 bg-black/10"></div>
              </motion.div>

              <div className="pl-4 border-l border-zinc-200 transition-all duration-500 group-hover:border-amber-700">
                <span className={`${goldText} text-xs font-bold tracking-[0.15em] uppercase mb-3 block`}>{book.category}</span>
                <p className="text-zinc-600 text-sm leading-relaxed font-light line-clamp-3">{book.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CurationSection;
