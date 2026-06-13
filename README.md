# AI Futuristic CV Website

Website CV cá nhân phong cách công nghệ, AI, tương lai, kỹ thuật số. Dự án dùng ReactJS + Vite, chia nhỏ component rõ ràng, dữ liệu CV nằm trong một file riêng để dễ sửa.

## Cài đặt

```bash
npm install
npm run dev
```

Mở địa chỉ local mà terminal hiển thị, thường là `http://localhost:5173`.

## Build production

```bash
npm run build
npm run preview
```

## Sửa thông tin CV

Mở file:

```txt
src/data/cvData.js
```

Sau đó sửa các trường như `name`, `jobTitle`, `about`, `skills`, `experience`, `projects`, `education`, `email`, `phone`, `socials`.

## Cấu trúc thư mục

```txt
ai-cv-website/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── components/
    ├── data/
    ├── hooks/
    └── styles/
```
