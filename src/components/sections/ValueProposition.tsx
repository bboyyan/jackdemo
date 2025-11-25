import React from 'react';
import { motion } from 'framer-motion';

const ValueProposition = () => {
  const goldText = 'text-amber-700';

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
    <section id="關於我" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="flex flex-col lg:flex-row gap-16 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            className="lg:w-1/3"
            variants={itemVariants}
          >
            <span className={`${goldText} font-medium tracking-[0.2em] uppercase mb-4 block`}>Why Work With Me</span>
            <h2 className="text-4xl font-serif font-bold text-zinc-900 leading-tight">
              不僅是銷售，<br/>更是您的<span className="italic">知識顧問</span>。
            </h2>
          </motion.div>
          <motion.div
            className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={containerVariants}
          >
            {[
              {
                number: "01.",
                title: "精準選書眼光",
                description: "長期關注出版市場動態，跳脫暢銷榜迷思，根據您的組織文化與目標，推薦真正具備長期價值的書單。"
              },
              {
                number: "02.",
                title: "高效採購流程",
                description: "深諳公家機關與大型企業核銷程序。提供迅速、透明的報價與調書服務，讓繁瑣的採購變的簡單。"
              },
              {
                number: "03.",
                title: "長期夥伴關係",
                description: "服務不止於交貨。提供完善的售後諮詢、退換貨協助，致力於成為您可信賴的長期圖書顧問。"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-3">
                  <span className={`${goldText} opacity-50 font-sans text-sm`}>{item.number}</span>
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed font-light">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
