

🛒 Next.js E-Commerce Platform
A fully responsive, secure e-commerce application built with Next.js, TypeScript, Tailwind CSS, and JOSE for JWT authentication. This platform features a dynamic product listing, admin dashboard, cart functionality, pagination, and protected routes with a mobile-first UX approach.

🚀 Features
🔐 Authentication & Security
JWT Authentication with HttpOnly Cookies using jose

Secure Login, Logout & Register

Middleware-protected routes for users and admins

Session persistence using tokens

Redirect logic for protected/public pages

🛍️ E-Commerce Functionality
Fully dynamic product listing

Shopping Cart (add/remove items)

Pagination for products

Product Search functionality

Apply discounts (admin controlled)

🧑‍💼 Admin Dashboard
Full CRUD operations for products

Add/Edit/Delete merchandise

Dynamic route protection

Admin-only pages (e.g., /admin/mainpanel, /admin/addmerch, etc.)
-----------------------------------------------------------------------------------------------------------
✅ Form Validation
Zod schema validation on all forms (register, login, product forms)

Use these to test the login system:

    Email: maryamzarei@gmail.com

    Password: P@ssw0rd
    ------------------------------------------------------------------------------------------------------
🎨 UI/UX & Styling
Fully responsive, mobile-first design

Tailwind CSS 3+

Framer Motion animations

React Icons and Lucide icons

Glassmorphic and gradient styling

Accessible forms and focus states

🧱 Tech Stack
Tech	Purpose
Next.js 15+	React framework with App Router
TypeScript	Static typing
Tailwind CSS	Styling and layout
Zod	Form validation
JOSE	Secure JWT encoding/decoding
MongoDB	Database
Axios	HTTP requests
Framer Motion	Animation
React Hot Toast	Feedback messages
React Icons	Iconography

📁 Project Structure
bash
Copy
Edit
/app
  /auth         # Login, Register Pages
  /admin        # Admin Dashboard, Add/Edit Product
  /(store)      # Main E-commerce store
  /utils        # Utility functions (toast, auth)
  /lib          # Server-side logic (getAuthUser)
  /middleware.ts# Protect routes via JWT check
/action         # Server Actions (Login, Register, CRUD)
🔐 Route Protection
ts
Copy
Edit
const protectedRoutes = ["/admin/mainpanel", "/admin/addmerch"];
const publicRoutes = ["/auth/signin", "/auth/register"];

const user = await getAuthUser();

if (protectedRoutes.includes(path) && !user?.userId) {
  return NextResponse.redirect(new URL("/auth/signin", req.nextUrl));
}

if (publicRoutes.includes(path) && user?.userId) {
  return NextResponse.redirect(new URL("/admin/mainpanel", req.nextUrl));
}
🛠 Installation & Setup
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/your-project-name.git
cd your-project-name
Install dependencies

bash
Copy
Edit
npm install
Add environment variables

Create a .env.local file with:

env
Copy
Edit
DATABASE_URL=your_mongo_connection
JWT_SECRET=your_super_secret_key
Run the dev server

bash
Copy
Edit
npm run dev
Visit: http://localhost:3000

✅ Scripts
json
Copy
Edit
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "type-check": "tsc --noEmit"
}
📦 Key Dependencies
json
Copy
Edit
"next": "^15.3.1",
"react": "^19.0.0",
"tailwindcss": "^4.1.11",
"zod": "^3.25.17",
"jose": "^6.0.11",
"axios": "^1.9.0",
"react-hot-toast": "^2.5.2",
"lucide-react": "^0.534.0",
"framer-motion": "^12.18.1"
📸 UI Preview
(Add these screenshots in /public/screenshots)

Login / Register Pages

Product Grid

Admin Panel

Mobile & Desktop views

🔒 Authentication Flow
User logs in → LogIn action generates JWT → stored in HttpOnly cookie.

Middleware checks token on every protected page.

Admin-only routes are fully restricted.

.........................................................................................................
#####
**🛍️ Storefront (User Side)**
Products are fetched from a local JSON data file (data.json)

Supports:

Add to Cart

Remove from Cart

Product Search

Pagination

🧑‍💼 Admin Dashboard
Product data is stored and managed via MongoDB

Full CRUD functionality:

Add New Product

Edit Existing Product

Delete Product

All admin routes are JWT-protected using HttpOnly cookies


📄 License
MIT © 2025
Developed by Maryam Zarei

