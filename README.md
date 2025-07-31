<!-- # 🛒 E-Commerce App with Secure Authentication

A full-stack modern online shopping app built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.  
Includes **JWT-based user authentication**, dynamic **product listings with filters & pagination**, and an **admin dashboard** powered by mock data.

> ✅ Perfect for learning secure login systems, frontend/backend integration, and clean project architecture.

---

## 📦 Features

- 🔐 **Secure JWT authentication** using HttpOnly cookies
- 🧾 **Product listings** with filtering and pagination
- 🧑‍💼 **Admin dashboard** for managing mock inventory
- 💨 Responsive UI built with **Tailwind CSS**
- ⚡ Powered by **Next.js App Router** and **TypeScript**

---

## 🧠 Authentication Flow

This app implements secure session-based JWT authentication:

1. User submits login/register form
2. Input is validated with **Zod**
3. Password is hashed using **bcrypt**
4. On success:
   - A JWT is generated using `jose`
   - The token is stored in an **HttpOnly cookie**
5. Protected routes verify the JWT token from cookies

✅ Secure by design:
- Token is inaccessible via JavaScript
- Sessions persist across reloads
- Only authenticated users access protected routes (e.g., `/dashboard`)

---

## 🗂️ Project Structure

src/
├── app/ # App Router pages (login, register, dashboard)
│ └── api/ # API routes (login, register, session)
├── action/ # Server actions (e.g., register user)
├── lib/ # Utilities (session, DB, validation)
├── database/ # Mock data (products, discounts)

yaml
Copy
Edit

---

## 📁 `lib/` Folder Details

- **`db.ts`** – Connects to MongoDB using the native driver  
- **`session.ts`** – Handles JWT creation/verification using `jose`  
- **`rules.ts`** – Zod schemas for validating email, password, etc.

---

## 🧪 Demo Credentials

Use these to test the login system:

Email: maryamzarei@gmail.com
Password: P@ssw0rd

yaml
Copy
Edit

✅ In production:
- Passwords are hashed with `bcrypt`
- Session tokens are validated server-side on every request

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
2. Install dependencies
bash
Copy
Edit
npm install
3. Set environment variables
Create a .env.local file in the root:

ini
Copy
Edit
MONGODB_URI=your-mongodb-uri
SESSION_SECRET=your-secret-key
4. Start mock product API
bash
Copy
Edit
npx json-server --watch src/database/db.json --port 8000
5. Start the development server
bash
Copy
Edit
npm run dev
🛠 Tech Stack
Area	Tech Used
Frontend	Next.js (App Router), React, TypeScript
Styling	Tailwind CSS
Auth	bcrypt, jose, JWT, HttpOnly cookies
Validation	Zod
Database	MongoDB (native driver)
Mock API	JSON Server (for development only)

🔧 In Progress
🛒 Shopping cart & checkout

📧 Email verification and password reset

🔐 Role-based admin access

🎟️ Discount code support from mock JSON:

json
Copy
Edit
"discount": [
  { "id": "2", "code": "FF20", "percentage": 20 },
  { "id": "3", "code": "FF15", "percentage": 15 },
  { "id": "4", "code": "FF10", "percentage": 10 },
  { "id": "5", "code": "FF05", "percentage": 5 }
]
🧾 Order history for users

🙋‍♀️ Author
Built with ❤️ by Maryam Zarei

GitHub: https://github.com/mrymzr1111

./assest/screenshot(14).png
./assest/screenshot(15).png
./assest/screenshot(16).png
./assest/screenshot(16).png
./assest/screenshot(17).png
./assest/screenshot(18).png
./assest/screenshot(19).png
./assest/screenshot(20).png
./assest/screenshot(21).png
./assest/screenshot(22).png -->

🛒 E-Commerce App with Secure Authentication

A modern online shopping app built with Next.js (App Router), TypeScript, and Tailwind CSS. Includes JWT-based user authentication, dynamic product listings with filters & pagination, and an admin dashboard powered by mock data.


📦 Features
🔐 Authentication

    Secure JWT authentication using HttpOnly cookies

    User login, logout, and registration with full validation

    Inputs validated on client and server using Zod

    Passwords securely hashed with bcrypt

    Sessions handled via JWT stored in HttpOnly cookies

    Protected routes verify user authentication for secure access

🧾 Product Listings

    Product listings with filtering and pagination

🧑‍💼 Admin Dashboard

    Admin dashboard for managing mock inventory

💨 UI & Tech

    Responsive UI built with Tailwind CSS

    Powered by Next.js App Router and TypeScript

🔐 Authentication Flow

This app implements secure session-based JWT authentication:

    User submits login/register form

    Input is validated with Zod

    Password is hashed using bcrypt

    On success:

        A JWT is generated using jose

        The token is stored in an HttpOnly cookie

    Protected routes verify the JWT token from cookies

✅ Secure by Design

    Token is inaccessible via JavaScript

    Sessions persist across reloads

    Only authenticated users can access protected pages (like /dashboard)

🗂️ Project Structure

src/
├── app/                   # App Router pages (login, register, dashboard)
│   └── api/               # API routes (login, register, session)
├── action/                # Server actions (e.g., register user)
├── lib/                   # Utilities (session, DB, validation)
├── database/              # Mock data (products, discounts)

📁 lib/ Folder Details

    db.ts – Connects to MongoDB using the native driver

    session.ts – Handles JWT creation/verification using jose

    rules.ts – Zod schemas for validating email, password, etc.

🧪 Demo Credentials

Use these to test the login system:

    Email: maryamzarei@gmail.com

    Password: P@ssw0rd

✅ In Production

    Passwords are securely hashed with bcrypt

    Session tokens are validated server-side using JWT + HttpOnly cookies

🚀 Getting Started

    Clone the repository

git clone https://github.com/your-username/your-repo.git
cd your-repo

    Install dependencies

npm install

    Create environment variables
    Create a .env.local file in the root directory:

MONGODB_URI=your-mongodb-uri
SESSION_SECRET=your-secret-key

    Start mock product API

npx json-server --watch src/database/db.json --port 8000

    Run the development server

npm run dev

🛠 Tech Stack
Area	Tech Used
Frontend	Next.js (App Router), React, TypeScript
Styling	Tailwind CSS
Auth	bcrypt, jose, JWT, HttpOnly cookies
Validation	Zod
Database	MongoDB (native driver)
Mock API	JSON Server (for development only)
🔧 Features in Progress

    checkout

    


    Discount code support (via mock JSON):

"discount": [
  { "id": "2", "code": "FF20", "percentage": 20 },
  { "id": "3", "code": "FF15", "percentage": 15 },
  { "id": "4", "code": "FF10", "percentage": 10 },
  { "id": "5", "code": "FF05", "percentage": 5 }
]

    Order history for users

📸 Screenshots

Available in the assets folder:

    ./assest/screenshot(14).png

    ./assest/screenshot(15).png

    ./assest/screenshot(16).png

    ./assest/screenshot(17).png

    ./assest/screenshot(18).png

    ./assest/screenshot(19).png

    ./assest/screenshot(20).png

    ./assest/screenshot(21).png

    ./assest/screenshot(22).png

UI walkthrough of login, dashboard, product pages, and more:
Login & Register | Dashboard | Product List
🙋‍♀️ Author

Built with ❤️ by Maryam Zarei

    GitHub: https://github.com/mrymzr1111

⚠️ Note

This project is actively in progress. I’m currently working on integrating the shopping cart section with JSON mock data, while the login, admin dashboard, and CRUD operations for delete/update/view continue to work with MongoDB.
