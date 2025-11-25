# Jack's Book Selection - Astro + React + Framer Motion

這是一個將原始 React 組件重構為 Astro + React + Framer Motion 架構的項目。

## 技術棧

- **Astro**: 靜態網站生成器，提供優異的性能
- **React**: 用於互動組件
- **Framer Motion**: 用於流暢的動畫效果
- **Tailwind CSS**: 用於樣式設計
- **TypeScript**: 類型安全的開發體驗
- **Lucide React**: 優質圖標庫

## 項目結構

```
src/
├── components/
│   ├── App.tsx                    # 主應用程式組件
│   ├── ui/
│   │   └── Navigation.tsx         # 導航欄組件
│   └── sections/
│       ├── HeroSection.tsx        # 英雄區域
│       ├── ValueProposition.tsx   # 價值主張
│       ├── ServicesSection.tsx    # 服務區域
│       ├── CurationSection.tsx    # 鑑賞書單
│       └── ContactSection.tsx     # 聯絡區域
├── layouts/
│   └── Layout.astro              # Astro 佈局
├── pages/
│   └── index.astro               # 首頁
└── styles/
    └── global.css                # 全局樣式
```

## 開發命令

```bash
# 安裝依賴
npm install

# 啟動開發服務器
npm run dev

# 構建生產版本
npm run build

# 預覽生產版本
npm run preview

# 檢查 TypeScript 錯誤
npx astro check
```

## 重構亮點

### 1. 組件拆分
- 將單一大型 React 組件拆分為多個專注的子組件
- 提高程式碼可維護性和重用性

### 2. Framer Motion 動畫
- 將 CSS 動畫轉換為 Framer Motion
- 添加更豐富的交互动畫效果
- 改善性能和用戶體驗

### 3. Astro 架構
- 使用 Astro 的靜態生成能力
- 優化首屏載入性能
- 保持 React 的互動性

### 4. 類型安全
- 使用 TypeScript 提供完整的類型檢查
- 減少運行時錯誤

## 主要功能

- 響應式設計，適配各種設備
- 平滑的滾動動畫和交互动畫
- 聯絡表單功能
- 優雅的視覺設計和用戶體驗

## 部署

### 手動部署

```bash
# 構建生產版本
npm run build

# 預覽生產版本（可選）
npm run preview

# 將 dist/ 目錄部署到你的服務器
```

### GitHub Pages 部署

如果使用 GitHub Pages，可以配置 Actions 自動部署：

1. 在倉庫設置中啟用 GitHub Pages
2. 選擇 "GitHub Actions" 作為來源
3. 使用 Astro 的官方部署 Action

## 項目鏈接

- **GitHub 倉庫**: https://github.com/bboyyan/jackdemo
- **演示網站**: [待部署]

## 🚀 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
