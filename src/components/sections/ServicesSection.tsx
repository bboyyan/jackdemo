import React from 'react';
import { Library, Book, User, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const goldText = 'text-amber-700';

  const services = [
    {
      icon: <Library className="w-10 h-10" />,
      title: "機構圖書館採購",
      desc: "為學校機關、企業圖書館提供專業書單諮詢與大宗採購優惠方案，精準編列預算。"
    },
    {
      icon: <Book className="w-10 h-10" />,
      title: "專業教材與參考書",
      desc: "深耕教育市場，協助教師與培訓單位尋找最適合的教學資源與教科書經銷。"
    },
    {
      icon: <User className="w-10 h-10" />,
      title: "企業知識賦能",
      desc: "協助企業規劃內部讀書會、主管培訓書單，提升團隊核心競爭力與文化素養。"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "高端展售策劃",
      desc: "協助策劃精品級校園書展、主題書展與作家講座，提升閱讀品味與風氣。"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="專業服務" className="py-28 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={`${goldText} font-medium tracking-[0.2em] uppercase block mb-4`}>Expertise Area</span>
          <h2 className="text-4xl font-serif font-bold text-zinc-900">全方位圖書解決方案</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200 border-t border-b border-zinc-200"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group p-10 text-center hover:bg-white transition-all duration-500"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className={`mb-8 ${goldText} mx-auto flex justify-center`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-serif font-bold text-zinc-900 mb-4">{service.title}</h3>
              <p className="text-zinc-600 leading-relaxed font-light text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
