<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->
# 🛒 E-Commerce App

A modern and responsive online shop built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
Includes **user login**, **product filtering**, **pagination**, and an **admin dashboard** for managing the store.

---

## ⚙️ Tech Stack

- **Frontend**: Next.js, React, TypeScript  
- **Styling**: Tailwind CSS  
- **Backend**: MongoDB (for authentication)
- **Authentication**: JWT (via `jose` library)  
- **Validation**: Zod

---

## ✅ Features

- 🔐 Secure user login using JWT & HttpOnly cookies  
- 🛍️ Product listing with filters and pagination  
- 🧑‍💼 Admin dashboard to manage inventory  
- ⚡ Fast, responsive UI with Tailwind CSS  
- 🔄 Server-side rendering powered by Next.js

---

## 🚀 project structure 

NOTE:
MongoDB is used for the login/authentication part.
For the shopping cart and product data ,a local JSON file is used and served via json-server during development 

---

## 🚀 RUN THE PROJECT API SERVER 
npx json-server --watch src/database/data.json --port 8000

## 🚀 PROJECT STATUS: IN PROGRESS
additional features and improvment are planned...


