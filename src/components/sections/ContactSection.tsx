import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState('');

  const goldText = 'text-amber-700';
  const goldBg = 'bg-amber-700';
  const goldBorder = 'border-amber-700';

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const contactItems = [
    {
      icon: <Phone size={24} className={goldText} />,
      label: "專線 / Mobile",
      value: "0912-345-678"
    },
    {
      icon: <MessageCircle size={24} className={goldText} />,
      label: "LINE ID",
      value: "jack_books_888"
    },
    {
      icon: <Mail size={24} className={goldText} />,
      label: "Email",
      value: "jack.sales@bookstore.com"
    },
    {
      icon: <MapPin size={24} className={goldText} />,
      label: "主要服務地區",
      value: "大台北地區、桃竹苗 (其他地區可議)"
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="聯絡諮詢" className="py-28 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={`${goldText} font-medium tracking-[0.2em] uppercase block mb-6`}>Get in Touch</span>
            <h2 className="text-4xl font-serif font-bold mb-8 leading-tight">
              開啟您的<br/>專業閱讀計畫
            </h2>
            <p className="text-zinc-400 mb-16 text-lg font-light max-w-md leading-relaxed">
              無論是機構採購需求、合作提案或索取報價，歡迎隨時與我聯繫。我將以最專業的態度為您服務。
            </p>

            <motion.div
              className="space-y-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-6"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="font-serif text-2xl">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form - Minimalist */}
          <motion.div
            className="bg-white p-10 lg:p-12 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-10">發送諮詢 / Request Pricing</h3>
            {formStatus === 'success' ? (
              <motion.div
                className="h-full flex flex-col items-center justify-center text-center p-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`w-16 h-16 ${goldBg} text-white rounded-full flex items-center justify-center mb-6`}>
                  <Send size={28} />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-3">訊息已送出</h4>
                <p className="text-zinc-600 font-light">感謝您的聯繫，我將在 24 小時內親自回覆您。</p>
                <motion.button
                  onClick={() => setFormStatus('')}
                  className={`mt-8 ${goldText} hover:text-zinc-900 text-sm uppercase tracking-widest font-bold transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  發送新訊息
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleContactSubmit}
                className="space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    className="group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-xs uppercase tracking-widest font-bold text-zinc-500 mb-2 group-focus-within:text-amber-700 transition-colors">您的稱呼 / Name</label>
                    <input
                      type="text"
                      required
                      className="w-full pb-3 border-b border-zinc-300 text-zinc-900 focus:border-amber-700 outline-none transition-all bg-transparent rounded-none font-medium"
                      placeholder="王經理"
                    />
                  </motion.div>
                  <motion.div
                    className="group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-xs uppercase tracking-widest font-bold text-zinc-500 mb-2 group-focus-within:text-amber-700 transition-colors">聯絡電話 / Phone</label>
                    <input
                      type="tel"
                      className="w-full pb-3 border-b border-zinc-300 text-zinc-900 focus:border-amber-700 outline-none transition-all bg-transparent rounded-none font-medium"
                      placeholder="09xx-xxx-xxx"
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-xs uppercase tracking-widest font-bold text-zinc-500 mb-2 group-focus-within:text-amber-700 transition-colors">單位名稱 / Organization (選填)</label>
                  <input
                    type="text"
                    className="w-full pb-3 border-b border-zinc-300 text-zinc-900 focus:border-amber-700 outline-none transition-all bg-transparent rounded-none font-medium"
                    placeholder="XX大學 / XX股份有限公司"
                  />
                </motion.div>

                <motion.div
                  className="group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-xs uppercase tracking-widest font-bold text-zinc-500 mb-2 group-focus-within:text-amber-700 transition-colors">需求類型 / Inquiry Type</label>
                  <select className="w-full pb-3 border-b border-zinc-300 text-zinc-900 focus:border-amber-700 outline-none transition-all bg-transparent rounded-none font-medium cursor-pointer">
                    <option>大宗採購詢價 (Bulk Purchase)</option>
                    <option>圖書館書單諮詢 (Library Curation)</option>
                    <option>企業讀書會規劃 (Corporate Reading)</option>
                    <option>書展/講座合作 (Events)</option>
                    <option>其他合作 (Others)</option>
                  </select>
                </motion.div>

                <motion.div
                  className="group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-xs uppercase tracking-widest font-bold text-zinc-500 mb-2 group-focus-within:text-amber-700 transition-colors">訊息內容 / Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full pb-3 border-b border-zinc-300 text-zinc-900 focus:border-amber-700 outline-none transition-all bg-transparent rounded-none font-medium resize-none"
                    placeholder="請簡述您的需求與預算範圍..."
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full ${goldBg} text-white font-bold uppercase tracking-[0.2em] py-5 hover:bg-zinc-900 transition-all flex items-center justify-center gap-3 ${formStatus === 'submitting' ? 'opacity-70 cursor-wait' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {formStatus === 'submitting' ? '傳送中...' : <>確認發送 <ArrowRight size={18} /></>}
                </motion.button>
              </motion.form>
            )}
          </motion.div>
        </div>

        <motion.div
          className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>© 2023 Jack's Book Selection. All rights reserved.</p>
          <p className="font-serif italic mt-4 md:mt-0">Curated Knowledge for Professionals.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
