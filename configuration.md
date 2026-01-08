# BabyShop E-commerce - Environment Configuration Guide

## 📋 Overview

This document contains all the environment variables and configuration settings needed to set up and run the BabyShop e-commerce application across all platforms.

## 🔧 Prerequisites

Before setting up the environment variables, ensure you have the following:

1. **MongoDB Database** (Local or MongoDB Atlas)
2. **Cloudinary Account** (for image storage)
3. **JWT Secret Key** (for authentication)
4. **Expo Account** (for mobile app development)
5. **Domain Names** (for production deployment)

## 🌍 Environment Files Structure

```
babyshop/
├── server/
│   ├── .env                    # Main server environment
│   └── .env.local             # Local overrides (gitignored)
├── admin/
│   ├── .env                   # Development environment
│   ├── .env.production        # Production environment
│   └── .env.local             # Local overrides (gitignored)
├── client/
│   ├── .env                   # Development environment
│   ├── .env.production        # Production environment
│   └── .env.local             # Local overrides (gitignored)
└── app-client/
    ├── .env.development       # Mobile development environment
    ├── .env.production        # Mobile production environment
    └── .env.local             # Local overrides (gitignored)
```

## 🖥️ Server Configuration

### File: `server/.env`

```bash
# ===== SERVER CONFIGURATION =====
NODE_ENV=development
PORT=8000

# ===== DATABASE CONFIGURATION =====
# Local MongoDB
MONGODB_URI=mongodb://localhost:27017/babyshop

# MongoDB Atlas (Production)
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/babyshop?retryWrites=true&w=majority

# ===== JWT AUTHENTICATION =====
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random
JWT_EXPIRES_IN=7d

# ===== CLOUDINARY CONFIGURATION =====
CLOUDINARY_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

# ===== CORS ORIGINS =====
CLIENT_URL=http://localhost:3000
ADMIN_URL=http://localhost:5173
MOBILE_APP_URL=exp://localhost:8081

# ===== EMAIL CONFIGURATION (Optional) =====
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# ===== STRIPE CONFIGURATION (Optional) =====
STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=whsec_your-webhook-secret

# ===== PRODUCTION OVERRIDES =====
# Uncomment these for production
# NODE_ENV=production
# CLIENT_URL=https://babyshop.reactbd.com
# ADMIN_URL=https://admin.babyshop.reactbd.com
# MOBILE_APP_URL=https://your-mobile-app-domain.com
```

### Production Server Configuration

For production, create a separate `.env.production` or update the main `.env`:

```bash
# ===== PRODUCTION SERVER CONFIGURATION =====
NODE_ENV=production
PORT=8000

# ===== PRODUCTION DATABASE =====
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/babyshop?retryWrites=true&w=majority

# ===== PRODUCTION CORS ORIGINS =====
CLIENT_URL=https://babyshop.reactbd.com
ADMIN_URL=https://admin.babyshop.reactbd.com
MOBILE_APP_URL=https://your-mobile-app.com

# ===== PRODUCTION SECURITY =====
JWT_SECRET=your-production-jwt-secret-very-long-and-secure
```

## 🎛️ Admin Dashboard Configuration

### File: `admin/.env`

```bash
# ===== DEVELOPMENT CONFIGURATION =====
VITE_API_URL=http://localhost:8000
VITE_APP_NAME=BabyShop Admin
VITE_APP_VERSION=1.0.0

# ===== CLOUDINARY (For Admin Image Uploads) =====
VITE_CLOUDINARY_NAME=your-cloudinary-cloud-name
VITE_CLOUDINARY_UPLOAD_PRESET=your-upload-preset

# ===== ADMIN CONFIGURATION =====
VITE_ITEMS_PER_PAGE=10
VITE_MAX_FILE_SIZE=5242880
VITE_ALLOWED_FILE_TYPES=image/jpeg,image/png,image/webp
```

### File: `admin/.env.production`

```bash
# ===== PRODUCTION CONFIGURATION =====
VITE_API_URL=https://server.babyshop.reactbd.com
VITE_APP_NAME=BabyShop Admin
VITE_APP_VERSION=1.0.0

# ===== PRODUCTION CLOUDINARY =====
VITE_CLOUDINARY_NAME=your-cloudinary-cloud-name
VITE_CLOUDINARY_UPLOAD_PRESET=your-production-upload-preset

# ===== PRODUCTION ADMIN CONFIGURATION =====
VITE_ITEMS_PER_PAGE=20
VITE_MAX_FILE_SIZE=5242880
VITE_ALLOWED_FILE_TYPES=image/jpeg,image/png,image/webp
```

## 🌐 Client Website Configuration

### File: `client/.env`

```bash
# ===== DEVELOPMENT CONFIGURATION =====
API_ENDPOINT=http://localhost:8000/api
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_NAME=BabyShop
NEXT_PUBLIC_APP_VERSION=1.0.0

# ===== NEXTAUTH CONFIGURATION =====
NEXTAUTH_SECRET=your-nextauth-secret-key
NEXTAUTH_URL=http://localhost:3000

# ===== CLOUDINARY (For Client Image Display) =====
NEXT_PUBLIC_CLOUDINARY_NAME=your-cloudinary-cloud-name

# ===== PAYMENT CONFIGURATION =====
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-publishable-key

# ===== GOOGLE ANALYTICS (Optional) =====
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# ===== SITE CONFIGURATION =====
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_PRODUCTS_PER_PAGE=12
NEXT_PUBLIC_ENABLE_WISHLIST=true
NEXT_PUBLIC_ENABLE_REVIEWS=true
```

### File: `client/.env.production`

```bash
# ===== PRODUCTION CONFIGURATION =====
API_ENDPOINT=https://server.babyshop.reactbd.com/api
NEXT_PUBLIC_API_URL=https://server.babyshop.reactbd.com
NEXT_PUBLIC_APP_NAME=BabyShop
NEXT_PUBLIC_APP_VERSION=1.0.0

# ===== PRODUCTION NEXTAUTH =====
NEXTAUTH_SECRET=your-production-nextauth-secret
NEXTAUTH_URL=https://babyshop.reactbd.com

# ===== PRODUCTION CLOUDINARY =====
NEXT_PUBLIC_CLOUDINARY_NAME=your-cloudinary-cloud-name

# ===== PRODUCTION PAYMENT =====
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your-stripe-live-key

# ===== PRODUCTION ANALYTICS =====
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# ===== PRODUCTION SITE CONFIGURATION =====
NEXT_PUBLIC_SITE_URL=https://babyshop.reactbd.com
NEXT_PUBLIC_PRODUCTS_PER_PAGE=16
NEXT_PUBLIC_ENABLE_WISHLIST=true
NEXT_PUBLIC_ENABLE_REVIEWS=true
```

## 📱 Mobile App Configuration

### File: `app-client/.env.development`

```bash
# ===== DEVELOPMENT CONFIGURATION =====
EXPO_PUBLIC_API_URL=http://localhost:8000/api
EXPO_PUBLIC_APP_NAME=BabyShop
EXPO_PUBLIC_APP_VERSION=1.0.0
EXPO_PUBLIC_APP_BUILD_VERSION=1

# ===== DEVELOPMENT API CONFIGURATION =====
EXPO_PUBLIC_API_TIMEOUT=10000
EXPO_PUBLIC_ENABLE_LOGGING=true

# ===== CLOUDINARY CONFIGURATION =====
EXPO_PUBLIC_CLOUDINARY_NAME=your-cloudinary-cloud-name

# ===== FEATURE FLAGS =====
EXPO_PUBLIC_ENABLE_BIOMETRIC_AUTH=true
EXPO_PUBLIC_ENABLE_PUSH_NOTIFICATIONS=true
EXPO_PUBLIC_ENABLE_OFFLINE_MODE=true
EXPO_PUBLIC_ENABLE_DEEP_LINKING=true

# ===== APP CONFIGURATION =====
EXPO_PUBLIC_PRODUCTS_PER_PAGE=10
EXPO_PUBLIC_CACHE_EXPIRY_HOURS=24
EXPO_PUBLIC_MAX_CART_ITEMS=99

# ===== PAYMENT CONFIGURATION =====
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-publishable-key

# ===== ANALYTICS (Optional) =====
EXPO_PUBLIC_ANALYTICS_ENABLED=false
```

### File: `app-client/.env.production`

```bash
# ===== PRODUCTION CONFIGURATION =====
EXPO_PUBLIC_API_URL=https://server.babyshop.reactbd.com/api
EXPO_PUBLIC_APP_NAME=BabyShop
EXPO_PUBLIC_APP_VERSION=1.0.0
EXPO_PUBLIC_APP_BUILD_VERSION=1

# ===== PRODUCTION API CONFIGURATION =====
EXPO_PUBLIC_API_TIMEOUT=15000
EXPO_PUBLIC_ENABLE_LOGGING=false

# ===== PRODUCTION CLOUDINARY =====
EXPO_PUBLIC_CLOUDINARY_NAME=your-cloudinary-cloud-name

# ===== PRODUCTION FEATURE FLAGS =====
EXPO_PUBLIC_ENABLE_BIOMETRIC_AUTH=true
EXPO_PUBLIC_ENABLE_PUSH_NOTIFICATIONS=true
EXPO_PUBLIC_ENABLE_OFFLINE_MODE=true
EXPO_PUBLIC_ENABLE_DEEP_LINKING=true

# ===== PRODUCTION APP CONFIGURATION =====
EXPO_PUBLIC_PRODUCTS_PER_PAGE=15
EXPO_PUBLIC_CACHE_EXPIRY_HOURS=12
EXPO_PUBLIC_MAX_CART_ITEMS=99

# ===== PRODUCTION PAYMENT =====
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your-stripe-live-key

# ===== PRODUCTION ANALYTICS =====
EXPO_PUBLIC_ANALYTICS_ENABLED=true
EXPO_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🔐 Security Configuration

### JWT Secret Generation

```bash
# Generate a secure JWT secret
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Or use online generator
# https://randomkeygen.com/
```

### Environment Security Best Practices

1. **Never commit `.env` files** to version control
2. **Use different secrets** for development and production
3. **Rotate secrets regularly** in production
4. **Use environment-specific values** for each deployment
5. **Limit access** to production environment variables

### `.gitignore` Configuration

```gitignore
# Environment Variables
.env
.env.local
.env.development
.env.production
.env.staging

# Admin
admin/.env
admin/.env.local
admin/.env.production

# Client
client/.env
client/.env.local
client/.env.production

# Mobile App
app-client/.env
app-client/.env.local
app-client/.env.development
app-client/.env.production

# Server
server/.env
server/.env.local
```

## 🔗 API Endpoints Configuration

### Development URLs

```bash
# Server API Base
http://localhost:8000/api

# Admin Dashboard
http://localhost:5173

# Client Website
http://localhost:3000

# Mobile App (Expo)
exp://localhost:8081
```

### Production URLs

```bash
# Server API Base
https://server.babyshop.reactbd.com/api

# Admin Dashboard
https://admin.babyshop.reactbd.com

# Client Website
https://babyshop.reactbd.com

# Mobile App
https://your-mobile-app.com
```

## 📊 Third-Party Service Configuration

### Cloudinary Setup

1. Create account at [cloudinary.com](https://cloudinary.com)
2. Get your cloud name, API key, and API secret
3. Create upload presets for different environments
4. Configure transformation settings

### Stripe Setup (Optional)

1. Create account at [stripe.com](https://stripe.com)
2. Get test and live API keys
3. Configure webhooks for order processing
4. Set up payment methods

### MongoDB Atlas Setup

1. Create account at [mongodb.com](https://mongodb.com)
2. Create a new cluster
3. Set up database user and network access
4. Get connection string

## 🚀 Deployment Configuration

### Vercel Deployment (Recommended for Client & Admin)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy admin
cd admin
vercel --prod

# Deploy client
cd ../client
vercel --prod
```

### Railway/Heroku Deployment (Server)

```bash
# Set environment variables in deployment platform
PORT=8000
NODE_ENV=production
MONGODB_URI=your-atlas-connection-string
JWT_SECRET=your-production-jwt-secret
# ... other variables
```

### Expo App Store Deployment (Mobile)

```bash
# Build for production
cd app-client
npx expo build:android
npx expo build:ios

# Submit to stores
npx expo submit:android
npx expo submit:ios
```

## 🔍 Environment Validation

### Validation Script

Create `scripts/validate-env.js`:

```javascript
const requiredEnvVars = {
  server: ["NODE_ENV", "PORT", "MONGODB_URI", "JWT_SECRET"],
  admin: ["VITE_API_URL"],
  client: ["API_ENDPOINT", "NEXTAUTH_SECRET"],
  mobile: ["EXPO_PUBLIC_API_URL", "EXPO_PUBLIC_APP_NAME"],
};

// Validation logic here
```

## 📝 Environment Templates

### Quick Setup Templates

Copy and customize these templates for your environment:

```bash
# Copy server template
cp server/.env.example server/.env

# Copy admin template
cp admin/.env.example admin/.env

# Copy client template
cp client/.env.example client/.env

# Copy mobile template
cp app-client/.env.example app-client/.env.development
```

## 🔄 Environment Switching

### Development vs Production

```bash
# Switch to development
export NODE_ENV=development

# Switch to production
export NODE_ENV=production

# Use environment-specific files
cp .env.development .env
cp .env.production .env
```

---

## 📞 Support

If you encounter issues with environment configuration:

1. Check the console for specific error messages
2. Verify all required environment variables are set
3. Ensure API URLs are accessible
4. Validate third-party service credentials
5. Check network connectivity and CORS settings

## 🔄 Updates

This configuration file should be updated whenever:

- New environment variables are added
- Third-party services change
- API endpoints are modified
- New deployment platforms are used

Last updated: August 2025
