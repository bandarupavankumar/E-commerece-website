# BabyShop - Full Stack E-Commerce Platform

A modern, full-featured e-commerce platform built with Next.js, React, Node.js, and MongoDB. Perfect for baby products and kids' essentials with a comprehensive admin dashboard and customer-facing storefront.

![BabyShop](https://img.shields.io/badge/Version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![Node](https://img.shields.io/badge/Node-18+-green.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)

## 📸 Preview

![BabyShop Preview](public/preview.png)

<div align="center">
  <p><em>A modern, responsive e-commerce platform for baby products</em></p>
</div>

---

## 🎯 Get Premium Access

<div align="center">
  
### 🚀 Unlock All Premium Features & Source Code

This project includes **premium locked features** that showcase advanced e-commerce functionality. Get full access to all features, complete source code, and lifetime updates!

<table>
  <tr>
    <td align="center" width="50%">
      <h3>� Common Monorepo Setup</h3>
      <p>Server in JavaScript, Client & Admin in TypeScript</p>
      <p><small>Traditional monorepo with pnpm workspaces</small></p>
      <a href="https://buymeacoffee.com/reactbd/e/432469" target="_blank">
        <img src="https://img.shields.io/badge/Buy%20Now-Common%20Setup-F7DF1E?style=for-the-badge&logo=pnpm&logoColor=black" alt="Buy Common Setup Version" />
      </a>
    </td>
    <td align="center" width="50%">
      <h3>⚡ Turborepo Setup</h3>
      <p>Full TypeScript (Server, Client & Admin)</p>
      <p><small>Optimized with Turborepo for faster builds</small></p>
      <a href="https://buymeacoffee.com/reactbd/e/493505" target="_blank">
        <img src="https://img.shields.io/badge/Buy%20Now-Turborepo-3178C6?style=for-the-badge&logo=turborepo&logoColor=white" alt="Buy Turborepo Version" />
      </a>
    </td>
  </tr>
</table>

**✨ What's Included:**

- ✅ Complete source code for all 3 projects (Client + Admin + Server)
- ✅ All premium features unlocked
- ✅ Lifetime access and updates
- ✅ Comprehensive documentation
- ✅ Priority support
- ✅ Production-ready code
- ✅ No hidden fees or subscriptions

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Running the Application](#-running-the-application)
- [Available Scripts](#-available-scripts)
- [API Documentation](#-api-documentation)
- [Premium Features](#-premium-features)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### Customer Frontend (Client)

- 🛍️ **Modern Shopping Experience**

  - Product browsing with advanced filtering and sorting
  - Real-time search functionality
  - Product detail pages with image galleries
  - Shopping cart with quantity management
  - Wishlist functionality
  - User authentication and profile management

- 💳 **Secure Checkout**

  - Stripe payment integration
  - Multiple address management
  - Order tracking and history
  - Payment success/failure handling

- 📱 **Responsive Design**

  - Mobile-first approach
  - Beautiful UI with Tailwind CSS
  - Dark mode support
  - Smooth animations and transitions

- 🎯 **User Features**
  - Account dashboard
  - Order history and details
  - Profile management
  - Wishlist management
  - Address book

### Admin Dashboard

- 📊 **Analytics & Insights**

  - Sales statistics and charts
  - Revenue tracking
  - Product performance metrics
  - User analytics

- 🏪 **Product Management**

  - Add, edit, delete products
  - Image upload with Cloudinary
  - Inventory tracking
  - Category and brand management

- 📦 **Order Management**

  - View and manage orders
  - Update order status
  - Order details and tracking
  - Customer information

- 👥 **User Management**

  - Customer list and details
  - User activity tracking
  - Account management

- 🎨 **Content Management**
  - Banner management
  - Category management
  - Brand management

### Backend API (Server)

- 🔐 **Authentication & Security**

  - JWT-based authentication
  - Password encryption with bcrypt
  - Protected routes and middleware
  - CORS configuration

- 📡 **RESTful API**

  - Comprehensive API endpoints
  - Swagger documentation
  - Error handling
  - Request validation

- 💾 **Database**

  - MongoDB with Mongoose ODM
  - Optimized queries
  - Data validation
  - Relationships and references

- 📧 **Email Service**
  - Order confirmation emails
  - User notifications
  - Nodemailer integration

## 🛠️ Tech Stack

### Frontend (Client)

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI, shadcn/ui
- **State Management:** Zustand
- **Forms:** React Hook Form + Zod
- **Payment:** Stripe
- **HTTP Client:** Axios
- **Icons:** Lucide React

### Admin Panel

- **Framework:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI, shadcn/ui
- **State Management:** Zustand
- **Routing:** React Router DOM
- **Charts:** Recharts
- **Forms:** React Hook Form + Zod

### Backend (Server)

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (jsonwebtoken)
- **File Upload:** Cloudinary, Multer
- **Email:** Nodemailer
- **API Docs:** Swagger
- **Security:** bcryptjs, CORS

## 📁 Project Structure

```
babyshop-yt/
├── client/                 # Next.js Customer Frontend
│   ├── app/               # App router pages
│   │   ├── (public)/     # Public pages (about, terms, etc.)
│   │   ├── api/          # API routes
│   │   ├── auth/         # Authentication pages
│   │   ├── product/      # Product pages
│   │   ├── shop/         # Shop page
│   │   ├── user/         # User dashboard
│   │   └── layout.tsx    # Root layout
│   ├── components/        # React components
│   │   ├── common/       # Shared components
│   │   ├── pages/        # Page-specific components
│   │   ├── skeleton/     # Loading skeletons
│   │   └── ui/           # shadcn/ui components
│   ├── lib/              # Utilities and API clients
│   ├── hooks/            # Custom React hooks
│   ├── public/           # Static assets
│   └── package.json
│
├── admin/                 # React Admin Dashboard
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Dashboard pages
│   │   ├── hooks/        # Custom hooks
│   │   ├── store/        # Zustand stores
│   │   └── lib/          # Utilities
│   ├── public/           # Static assets
│   └── package.json
│
├── server/                # Node.js Backend API
│   ├── config/           # Configuration files
│   │   ├── db.js        # MongoDB connection
│   │   ├── cloudinary.js # Cloudinary setup
│   │   └── swagger.js   # API documentation
│   ├── controllers/      # Route controllers
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── utils/           # Helper functions
│   ├── scripts/         # Data import/export scripts
│   ├── data/            # Seed data
│   └── package.json
│
├── .env.example          # Environment variables template
└── README.md            # This file
```

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **pnpm** (v8 or higher) - `npm install -g pnpm`
- **MongoDB** - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (cloud) or local installation
- **Git** - [Download](https://git-scm.com/)

### Required Accounts

- **MongoDB Atlas** - For database hosting
- **Cloudinary** - For image storage
- **Stripe** - For payment processing
- **Email Service** - Gmail or SendGrid for emails

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/babyshop-yt.git
cd babyshop-yt
```

### 2. Install Dependencies

Install dependencies for all three projects:

```bash
# Install client dependencies
cd client
pnpm install

# Install admin dependencies
cd ../admin
pnpm install

# Install server dependencies
cd ../server
pnpm install
```

## 🔧 Configuration

### 1. Server Configuration

Create `.env` file in the `server/` directory:

```bash
cd server
cp .env.example .env
```

Edit the `.env` file with your credentials:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
# Get your MongoDB URI from: https://www.mongodb.com/cloud/atlas/register
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/babyshop?retryWrites=true&w=majority

# JWT Configuration
# Generate with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d

# Cloudinary Configuration
# Get credentials from: https://console.cloudinary.com/console
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe Payment Configuration
# Get keys from: https://dashboard.stripe.com/test/apikeys
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_specific_password
EMAIL_FROM=noreply@babyshop.com

# Client URLs
CLIENT_URL=http://localhost:3000
ADMIN_URL=http://localhost:5173
```

### 2. Client Configuration

Create `.env` file in the `client/` directory:

```bash
cd ../client
cp .env.example .env
```

Edit the `.env` file:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Stripe Configuration
# Get your publishable key from: https://dashboard.stripe.com/test/apikeys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key

# NextAuth Configuration
# Generate with: openssl rand -base64 32
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=BabyShop
```

### 3. Admin Configuration

Create `.env` file in the `admin/` directory:

```bash
cd ../admin
cp .env.example .env
```

Edit the `.env` file:

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api

# Admin Configuration
VITE_APP_NAME=BabyShop Admin
VITE_APP_VERSION=1.0.0

# Environment
VITE_NODE_ENV=development
```

## 🏃 Running the Application

### Option 1: Run All Services Separately

Open three terminal windows and run:

**Terminal 1 - Backend Server:**

```bash
cd server
pnpm dev
# Server runs on http://localhost:5000
```

**Terminal 2 - Client Frontend:**

```bash
cd client
pnpm dev
# Client runs on http://localhost:3000
```

**Terminal 3 - Admin Dashboard:**

```bash
cd admin
pnpm dev
# Admin runs on http://localhost:5173
```

### Option 2: Using npm-run-all (Optional)

You can create a root `package.json` to run all services:

```json
{
  "scripts": {
    "dev:server": "cd server && pnpm dev",
    "dev:client": "cd client && pnpm dev",
    "dev:admin": "cd admin && pnpm dev",
    "dev": "npm-run-all --parallel dev:*"
  }
}
```

Then run:

```bash
pnpm install npm-run-all
pnpm dev
```

## 📜 Available Scripts

### Server Scripts

```bash
pnpm dev                # Start development server with nodemon
pnpm start              # Start production server
pnpm export-data        # Export data to JSON
pnpm import-data        # Import data from JSON
```

### Client Scripts

```bash
pnpm dev                # Start Next.js development server
pnpm build              # Build for production
pnpm start              # Start production server
pnpm lint               # Run ESLint
```

### Admin Scripts

```bash
pnpm dev                # Start Vite development server
pnpm build              # Build for production
pnpm preview            # Preview production build
pnpm lint               # Run ESLint
```

## 📚 API Documentation

Once the server is running, access the Swagger API documentation at:

```
http://localhost:5000/api-docs
```

### Key API Endpoints

#### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

#### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

#### Orders

- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order by ID
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id` - Update order status (Admin)

#### Cart

- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove from cart

#### Wishlist

- `GET /api/wishlist` - Get user wishlist
- `POST /api/wishlist` - Add to wishlist
- `DELETE /api/wishlist/:id` - Remove from wishlist

## 💎 Premium Features

This project includes premium features that are locked by default. These features showcase advanced e-commerce functionality:

### Locked Premium Features:

- ✨ **Advanced Shop** - Filtering, sorting, and search capabilities
- 📊 **Analytics Dashboard** - Comprehensive business insights
- 🧾 **Invoice Generator** - Professional invoicing system
- 📦 **Order Details** - Detailed order tracking
- 📄 **Legal Pages** - Privacy Policy, Terms & Conditions
- 🌟 **Testimonials** - Customer review management
- 🔄 **Returns/Exchange** - Return management system
- 🤝 **Partnership Programs** - Affiliate and wholesale programs

To unlock these features:

- Purchase the JavaScript version: [Buy here](https://buymeacoffee.com/reactbd/e/432469)
- Purchase the TypeScript version: [Buy here](https://buymeacoffee.com/reactbd/e/493505)

### Enabling Features for Development

To enable premium features during development, locate the feature component and change:

```typescript
const ENABLE_FREE_ACCESS = false; // Change to true
```

## 🚢 Deployment

### Backend Deployment (Vercel/Railway/Render)

**Using Vercel:**

```bash
cd server
vercel deploy
```

**Using Railway:**

1. Connect your GitHub repository
2. Add environment variables
3. Deploy automatically

**Using Render:**

1. Create a new Web Service
2. Connect your repository
3. Add environment variables
4. Deploy

### Client Deployment (Vercel/Netlify)

**Using Vercel:**

```bash
cd client
vercel deploy
```

**Using Netlify:**

```bash
cd client
pnpm build
netlify deploy --prod --dir=.next
```

### Admin Deployment (Vercel/Netlify)

**Using Vercel:**

```bash
cd admin
vercel deploy
```

**Using Netlify:**

```bash
cd admin
pnpm build
netlify deploy --prod --dir=dist
```

### Environment Variables for Production

Update all `.env` files with production URLs:

- Replace `localhost` with your deployed URLs
- Use production MongoDB URI
- Use production Stripe keys
- Update CORS settings in the server

## 🔒 Security Considerations

- Never commit `.env` files to version control
- Use strong JWT secrets (32+ characters)
- Enable HTTPS in production
- Implement rate limiting for API endpoints
- Regularly update dependencies
- Use environment-specific configurations
- Sanitize user inputs
- Implement proper error handling

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error:**

```bash
# Check your MONGO_URI in .env
# Ensure your IP is whitelisted in MongoDB Atlas
# Verify network connectivity
```

**Port Already in Use:**

```bash
# Change PORT in .env file
# Or kill the process using the port:
lsof -ti:5000 | xargs kill -9  # macOS/Linux
```

**Cloudinary Upload Error:**

```bash
# Verify CLOUDINARY credentials
# Check file size limits
# Ensure proper file format
```

**Stripe Payment Issues:**

```bash
# Use test cards: 4242 4242 4242 4242
# Verify STRIPE_PUBLISHABLE_KEY is in client .env
# Check STRIPE_SECRET_KEY in server .env
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Support

For support, email support@babyshop.com or open an issue in the GitHub repository.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting solutions
- shadcn/ui for beautiful components
- Stripe for payment processing
- MongoDB Atlas for database hosting
- Cloudinary for image management

## 📱 Connect

- YouTube: [Your Channel](https://youtube.com)
- Twitter: [@yourusername](https://twitter.com/yourusername)
- Website: [https://babyshop.com](https://babyshop.com)

---

Made with ❤️ by [Your Name]

**⭐ Star this repository if you find it helpful!**
#   E - c o m m e r e c e - w e b s i t e  
 