# 🛍️ BabyShop - Modern E-Commerce Platform

![BabyShop Banner]([https://via.placeholder.com/1200x400?text=BabyShop+E-Commerce+Platform](https://drive.google.com/file/d/1a_MSzca0dwFhRtYCUU2Nwh2u8WNybWnW/view?usp=sharing))

> A full-stack, feature-rich e-commerce solution built with the latest web technologies. Designed for performance, scalability, and a premium user experience.

## 🚀 Tech Stack

### Client (Storefront)
-   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
-   **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Forms:** React Hook Form + Zod
-   **Icons:** Lucide React

### Server (API)
-   **Runtime:** [Node.js](https://nodejs.org/)
-   **Framework:** [Express.js](https://expressjs.com/)
-   **Database:** [MongoDB](https://www.mongodb.com/) + Mongoose
-   **Authentication:** JWT (JSON Web Tokens)
-   **Documentation:** Swagger UI

### Admin Dashboard
-   **Framework:** [Vite](https://vitejs.dev/) + React
-   **Styling:** Tailwind CSS
-   **Charts:** Recharts

---

## ✨ Key Features

-   **🔐 Secure Authentication:** Complete user registration and login flow with JWT and strictly typed form validation.
-   **🛒 Dynamic Cart & Checkout:** Real-time cart management with local storage persistence and secure checkout process.
-   **📦 Product Management:** Rich product catalog with categories, brands, ratings, and image galleries.
-   **📱 Fully Responsive:** Mobile-first design providing a native-app-like experience on all devices.
-   **⚡ High Performance:** Optimized with Next.js server-side rendering and static generation.
-   **🎨 Modern UI/UX:** Glassmorphism effects, smooth transitions, and interactive elements.
-   **🛠️ Admin Panel:** Dedicated dashboard for managing products, orders, and users.

---

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites
-   Node.js (v18+)
-   MongoDB (Local or Atlas)

### 1. Clone the Repository
```bash
git clone https://github.com/bandarupavankumar/E-commerece-website.git
cd E-commerece-website
```

### 2. Backend Setup (Server)
```bash
cd server
npm install

# Create .env file
# COPY .env.example content to .env and update MONGO_URI

# Seed Data (Optional)
npm run import-data

# Start Server
npm run dev
```
*Server runs on port 8000 by default.*

### 3. Frontend Setup (Client)
```bash
cd client
npm install

# Create .env file
# NEXT_PUBLIC_API_URL=http://localhost:8000/api

# Start Client
npm run dev
```
*Client runs on http://localhost:3000*

### 4. Admin Dashboard Setup
```bash
cd admin
npm install
npm run dev
```
*Admin runs on http://localhost:5173*

---

## 📂 Project Structure

```bash
├── 📁 client       # Next.js Storefront
├── 📁 server       # Express API
└── 📁 admin        # Vite Admin Dashboard
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
