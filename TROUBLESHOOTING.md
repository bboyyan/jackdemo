# 🚨 Jack's Book Selection - 部署故障排除指南

## 📋 專案概述

這是一個從單一 React 組件重構而成的 Astro + React + Framer Motion 專案，專為靜態託管平台優化。

**技術棧**: Astro 5.16.0, React 19, Framer Motion, Tailwind CSS, TypeScript

---

## 🔧 部署前檢查清單

### ✅ 必須確認的項目

- [ ] `package.json` 中的 `scripts.build` 存在且正確
- [ ] `astro.config.mjs` 設定 `output: 'static'`
- [ ] `Dockerfile` 使用多階段構建（如果適用）
- [ ] 所有依賴都在 `dependencies` 中（非 `devDependencies`）
- [ ] `public/` 目錄包含必要的靜態資源

### 🎯 部署平台設定

#### **Zeabur (推薦)**
```yaml
# 設定選項
部署類型: 靜態網站
Build Command: npm run build
Output Directory: dist
Node.js Version: 22
```

#### **Vercel**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro"
}
```

#### **Netlify**
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

---

## 🚨 常見部署問題與解決方案

### 1. ❌ 錯誤：`Cannot find module '@astrojs/tailwind'`

**現象**: 構建時報錯找不到 Tailwind 整合模組

**原因**: `@astrojs/tailwind` 在 `devDependencies` 中，但生產環境只安裝 `dependencies`

**✅ 解決方案**:
```bash
# 將 @astrojs/tailwind 移到 dependencies
npm install @astrojs/tailwind --save
npm uninstall @astrojs/tailwind  # 從 devDependencies 移除
```

### 2. ❌ 錯誤：`Blocked request. This host is not allowed`

**現象**: 生產環境中域名被 Vite 阻擋

**原因**: Vite 的安全性設定阻擋不認識的域名

**✅ 解決方案**:
```javascript
// vite.config.js
export default defineConfig({
  preview: {
    allowedHosts: ['your-domain.com', '.zeabur.app']
  }
});
```

### 3. ❌ 錯誤：`exit code: 1` 構建失敗

**現象**: Docker 構建或 CI/CD 構建失敗

**可能原因**:
- 依賴安裝失敗
- 環境變數缺失
- 記憶體不足

**✅ 解決方案**:
```dockerfile
# Dockerfile 修正
RUN npm ci --only=production  # 改為
RUN npm ci                    # 安裝所有依賴
```

### 4. ❌ 錯誤：`502 Bad Gateway`

**現象**: 應用部署成功但無法訪問

**可能原因**:
- Preview 模式監聽 localhost
- 端口配置錯誤
- 靜態文件路徑錯誤

**✅ 解決方案**:
```javascript
// package.json
"preview": "astro preview --host 0.0.0.0 --port 8080"

// 或者改為靜態部署
// astro.config.mjs
output: 'static'
```

### 5. ❌ 錯誤：`Module not found` 或依賴錯誤

**現象**: 生產環境缺少某些模組

**原因**: 某些依賴被誤放在 `devDependencies` 中

**✅ 解決方案**:
檢查並移動以下依賴到 `dependencies`:
```json
{
  "dependencies": {
    "@astrojs/tailwind": "^6.0.2",
    "@astrojs/react": "^4.4.2",
    "framer-motion": "^12.23.24",
    "lucide-react": "^0.554.0"
  }
}
```

### 6. ❌ 錯誤：`Build timeout` 或記憶體不足

**現象**: 構建過程超時或記憶體不足

**原因**: 大型專案在有限資源環境中構建

**✅ 解決方案**:
```bash
# 增加 Node.js 記憶體
NODE_OPTIONS="--max-old-space-size=4096" npm run build

# 或在 Dockerfile 中設定
ENV NODE_OPTIONS="--max-old-space-size=4096"
```

---

## 🔍 診斷工具

### 本地測試命令

```bash
# 測試構建
npm run build

# 測試預覽模式
npm run preview

# 檢查 Astro 配置
npx astro check

# 驗證依賴
npm ls --depth=0
```

### 檢查關鍵文件

```bash
# 確認靜態輸出設定
grep "output.*static" astro.config.mjs

# 確認構建腳本
grep "build" package.json

# 檢查 Docker 設置
cat Dockerfile
```

---

## 🐛 依賴問題排查

### 版本衝突檢查

```bash
# 查看所有依賴版本
npm list --depth=0

# 檢查是否有重複依賴
npm ls framer-motion
npm ls tailwindcss
```

### 清理並重新安裝

```bash
# 完全清理
rm -rf node_modules package-lock.json
npm cache clean --force

# 重新安裝
npm install
```

---

## 🚀 部署最佳實踐

### 1. **靜態部署 (推薦)**

```javascript
// astro.config.mjs
export default defineConfig({
  output: 'static',  // 靜態輸出
  integrations: [react(), tailwind()]
});
```

**優點**:
- 🚀 載入速度快
- 💰 成本低
- 🔒 安全性高
- 🌐 CDN 友好

### 2. **環境變數**

```bash
# .env.example
NODE_ENV=production
```

### 3. **CI/CD 最佳化**

```yaml
# GitHub Actions 示例
- name: Build
  run: npm run build
  env:
    NODE_OPTIONS: --max-old-space-size=4096
```

---

## 📞 聯絡與支援

如果您遇到本文未涵蓋的問題：

1. **檢查部署平台日誌**
2. **提供具體錯誤訊息**
3. **說明您的部署平台和設定**

---

## 📝 更新日誌

- **v1.0.0** (2025-11-26): 初始版本，涵蓋常見 Astro + React 部署問題
- 涵蓋 Zeabur, Vercel, Netlify 等平台
- 包含 Docker 部署疑難排解

---

**🎉 希望這個指南能幫助您順利部署！如果有任何問題，歡迎回報。**
