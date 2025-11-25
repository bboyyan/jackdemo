# 多階段構建 - 第一階段：構建
FROM node:22-alpine AS builder

LABEL "language"="nodejs"
LABEL "framework"="astro"

WORKDIR /src

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝所有依賴（包括 devDependencies 用於構建）
RUN npm ci

# 複製源碼
COPY . .

# 構建應用
RUN npm run build

# 第二階段：運行（使用 nginx 提供靜態文件）
FROM nginx:alpine

# 複製構建好的靜態文件到 nginx
COPY --from=builder /src/dist /usr/share/nginx/html

# 複製 nginx 配置（如果需要的話）
# COPY nginx.conf /etc/nginx/nginx.conf

# 暴露端口 80（nginx 默認端口）
EXPOSE 80

# 啟動 nginx
CMD ["nginx", "-g", "daemon off;"]
