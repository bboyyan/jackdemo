import React, { useState, useEffect } from 'react';
import { Book, User, Phone, Mail, MessageCircle, Star, Library, Award, ArrowRight, Send, MapPin, ChevronDown } from 'lucide-react';

// 加入 Google Fonts (Playfair Display for Serif fonts)
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// 定義古銅金色
const goldText = 'text-amber-700';
const goldBg = 'bg-amber-700';
const goldBorder = 'border-amber-700';

const App = () => {
  const [formStatus, setFormStatus] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 模擬的推薦書單數據
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

  // 服務項目數據
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

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900 font-sans selection:bg-amber-200 selection:text-amber-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation - Scroll effect */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6 border-b border-white/10'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 group cursor-pointer">
               <span className={`font-serif text-2xl font-bold tracking-wider transition-colors ${scrolled ? 'text-zinc-900' : 'text-white'}`}>
                JACK<span className={goldText}>.</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-10 items-center">
              {['關於我', '專業服務', '鑑賞書單'].map((item) => (
                <a key={item} href={`#${item}`} className={`text-sm font-medium uppercase tracking-widest hover:${goldText} transition-colors ${scrolled ? 'text-zinc-600' : 'text-white/80'}`}>
                  {item}
                </a>
              ))}
              <a 
                href="#聯絡諮詢"
                className={`px-6 py-2.5 text-sm font-medium uppercase tracking-widest border transition-all ${scrolled ? `border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white` : `border-white text-white hover:bg-white hover:text-zinc-900`}`}
              >
                預約諮詢
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Dark & Moody */}
      <header className="relative min-h-screen flex items-center bg-zinc-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2690&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Library Background"
                className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900/90 to-zinc-900/60 mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
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
                <a href="#聯絡諮詢" className={`bg-white text-zinc-900 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-zinc-100 transition-colors flex items-center gap-3`}>
                  啟動合作專案 <ArrowRight size={18} />
                </a>
              </div>
              
              <div className="mt-16 flex items-center gap-12 text-white/60">
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
              </div>
            </div>
            
            {/* Professional Photo Placeholder - Cleaner Look */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="aspect-[3/4] relative z-10">
                {/* 這裡替換成您穿著西裝或專業形象的照片 */}
                <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Jack's Portrait" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out shadow-2xl shadow-zinc-950/50"
                />
                {/* Decor */}
                <div className={`absolute -bottom-6 -left-6 w-full h-full border-2 ${goldBorder} -z-10`}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <a href="#關於我" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce z-10">
            <ChevronDown size={32} />
        </a>
      </header>

      {/* Value Proposition - Clean & Sharp */}
      <section id="關於我" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
                <span className={`${goldText} font-medium tracking-[0.2em] uppercase mb-4 block`}>Why Work With Me</span>
                <h2 className="text-4xl font-serif font-bold text-zinc-900 leading-tight">
                    不僅是銷售，<br/>更是您的<span className="italic">知識顧問</span>。
                </h2>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="group">
                    <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-3">
                        <span className={`${goldText} opacity-50 font-sans text-sm`}>01.</span>
                        精準選書眼光
                    </h3>
                    <p className="text-zinc-600 leading-relaxed font-light">長期關注出版市場動態，跳脫暢銷榜迷思，根據您的組織文化與目標，推薦真正具備長期價值的書單。</p>
                </div>
                <div className="group">
                     <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-3">
                        <span className={`${goldText} opacity-50 font-sans text-sm`}>02.</span>
                        高效採購流程
                    </h3>
                    <p className="text-zinc-600 leading-relaxed font-light">深諳公家機關與大型企業核銷程序。提供迅速、透明的報價與調書服務，讓繁瑣的採購變的簡單。</p>
                </div>
                <div className="group">
                     <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-3">
                        <span className={`${goldText} opacity-50 font-sans text-sm`}>03.</span>
                        長期夥伴關係
                    </h3>
                    <p className="text-zinc-600 leading-relaxed font-light">服務不止於交貨。提供完善的售後諮詢、退換貨協助，致力於成為您可信賴的長期圖書顧問。</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Elegant Grid */}
      <section id="專業服務" className="py-28 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <span className={`${goldText} font-medium tracking-[0.2em] uppercase block mb-4`}>Expertise Area</span>
            <h2 className="text-4xl font-serif font-bold text-zinc-900">全方位圖書解決方案</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200 border-t border-b border-zinc-200">
            {services.map((service, index) => (
              <div key={index} className="group p-10 text-center hover:bg-white transition-all duration-500">
                <div className={`mb-8 ${goldText} mx-auto flex justify-center transform group-hover:scale-110 transition-transform duration-500`}>{service.icon}</div>
                <h3 className="text-xl font-serif font-bold text-zinc-900 mb-4">{service.title}</h3>
                <p className="text-zinc-600 leading-relaxed font-light text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curation Section (Formerly Recommended Books) */}
      <section id="鑑賞書單" className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className={`${goldText} font-medium tracking-[0.2em] uppercase block mb-4`}>Monthly Curation</span>
              <h2 className="text-4xl font-serif font-bold text-zinc-900">本月鑑賞選書</h2>
              <p className="text-zinc-500 mt-4 text-lg font-light max-w-md">精選具備洞見與影響力的著作，為您的組織注入新思維。</p>
            </div>
            <a href="#聯絡諮詢" className={`group flex items-center gap-3 ${goldText} font-medium uppercase tracking-widest hover:opacity-70 transition-opacity`}>
              索取完整書單目錄 <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {recommendedBooks.map((book) => (
              <div key={book.id} className="group cursor-pointer">
                {/* Book Cover Art Style */}
                <div className={`relative aspect-[3/4] ${book.coverColor} mb-8 shadow-xl transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-2xl`}>
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
                </div>

                <div className="pl-4 border-l border-zinc-200 transition-all duration-500 group-hover:border-amber-700">
                  <span className={`${goldText} text-xs font-bold tracking-[0.15em] uppercase mb-3 block`}>{book.category}</span>
                  <p className="text-zinc-600 text-sm leading-relaxed font-light line-clamp-3">{book.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Sophisticated Dark Theme */}
      <section id="聯絡諮詢" className="py-28 bg-zinc-900 text-white relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <span className={`${goldText} font-medium tracking-[0.2em] uppercase block mb-6`}>Get in Touch</span>
              <h2 className="text-4xl font-serif font-bold mb-8 leading-tight">
                開啟您的<br/>專業閱讀計畫
              </h2>
              <p className="text-zinc-400 mb-16 text-lg font-light max-w-md leading-relaxed">
                無論是機構採購需求、合作提案或索取報價，歡迎隨時與我聯繫。我將以最專業的態度為您服務。
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <Phone size={24} className={goldText} />
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">專線 / Mobile</p>
                    <p className="font-serif text-2xl">0912-345-678</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <MessageCircle size={24} className={goldText} />
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">LINE ID</p>
                    <p className="font-serif text-xl">jack_books_888</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <Mail size={24} className={goldText} />
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Email</p>
                    <p className="font-medium">jack.sales@bookstore.com</p>
                  </div>
                </div>

                 <div className="flex items-start gap-6">
                  <MapPin size={24} className={goldText} />
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">主要服務地區</p>
                    <p className="font-medium">大台北地區、桃竹苗 (其他地區可議)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Minimalist */}
            <div className="bg-white p-10 lg:p-12 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-10">發送諮詢 / Request Pricing</h3>
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                  <div className={`w-16 h-16 ${goldBg} text-white rounded-full flex items-center justify-center mb-6`}>
                    <Send size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-3">訊息已送出</h4>
                  <p className="text-zinc-600 font-light">感謝您的聯繫，我將在 24 小時內親自回覆您。</p>
                  <button 
                    onClick={() => setFormStatus('')}
                    className={`mt-8 ${goldText} hover:text-zinc-900 text-sm uppercase tracking-widest font-bold transition-colors`}
                  >
                    發送新訊息
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                      <label className="block text-xs uppercase tracking-widest font-bold text-zinc-500 mb-2 group-focus-within:text-amber-700 transition-colors">您的稱呼 / Name</label>
                      <input type="text" required className="w-full pb-3 border-b border-zinc-300 text-zinc-900 focus:border-amber-700 outline-none transition-all bg-transparent rounded-none font-medium" placeholder="王經理" />
                    </div>
                    <div className="group">
                      <label className="block text-xs uppercase tracking-widest font-bold text-zinc-500 mb-2 group-focus-within:text-amber-700 transition-colors">聯絡電話 / Phone</label>
                      <input type="tel" className="w-full pb-3 border-b border-zinc-300 text-zinc-900 focus:border-amber-700 outline-none transition-all bg-transparent rounded-none font-medium" placeholder="09xx-xxx-xxx" />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-xs uppercase tracking-widest font-bold text-zinc-500 mb-2 group-focus-within:text-amber-700 transition-colors">單位名稱 / Organization (選填)</label>
                    <input type="text" className="w-full pb-3 border-b border-zinc-300 text-zinc-900 focus:border-amber-700 outline-none transition-all bg-transparent rounded-none font-medium" placeholder="XX大學 / XX股份有限公司" />
                  </div>

                  <div className="group">
                    <label className="block text-xs uppercase tracking-widest font-bold text-zinc-500 mb-2 group-focus-within:text-amber-700 transition-colors">需求類型 / Inquiry Type</label>
                    <select className="w-full pb-3 border-b border-zinc-300 text-zinc-900 focus:border-amber-700 outline-none transition-all bg-transparent rounded-none font-medium cursor-pointer">
                      <option>大宗採購詢價 (Bulk Purchase)</option>
                      <option>圖書館書單諮詢 (Library Curation)</option>
                      <option>企業讀書會規劃 (Corporate Reading)</option>
                      <option>書展/講座合作 (Events)</option>
                      <option>其他合作 (Others)</option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="block text-xs uppercase tracking-widest font-bold text-zinc-500 mb-2 group-focus-within:text-amber-700 transition-colors">訊息內容 / Message</label>
                    <textarea required rows="4" className="w-full pb-3 border-b border-zinc-300 text-zinc-900 focus:border-amber-700 outline-none transition-all bg-transparent rounded-none font-medium resize-none" placeholder="請簡述您的需求與預算範圍..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className={`w-full ${goldBg} text-white font-bold uppercase tracking-[0.2em] py-5 hover:bg-zinc-900 transition-all flex items-center justify-center gap-3 ${formStatus === 'submitting' ? 'opacity-70 cursor-wait' : ''}`}
                  >
                    {formStatus === 'submitting' ? '傳送中...' : <>確認發送 <ArrowRight size={18} /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
            <p>© 2023 Jack's Book Selection. All rights reserved.</p>
            <p className="font-serif italic mt-4 md:mt-0">Curated Knowledge for Professionals.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;