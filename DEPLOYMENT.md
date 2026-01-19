# 🚀 Deployment Guide

Follow these steps to deploy your BabyShop application.

## 1. 🛠️ Prerequisite: Push Code to GitHub
Ensure your latest code (including this guide!) is pushed to GitHub.
*(I am fixing the git sync issue for you now, just run `git push` after I finish).*

---

## 2. 🌍 Backend Deployment (Render)

We will deploy the `server` folder to Render.

1.  **Sign Up/Login** to [Render](https://render.com/).
2.  Click **New +** -> **Web Service**.
3.  Connect your GitHub repository: `bandarupavankumar/E-commerece-website`.
4.  **Configuration**:
    *   **Name**: `babyshop-server` (or similar)
    *   **Root Directory**: `server`
    *   **Runtime**: `Node`
    *   **Build Command**: `npm install`
    *   **Start Command**: `npm start`
    *   **Region**: Closest to you (e.g., Singapore, Oregon).
5.  **Environment Variables** (Scroll down to "Environment Variables"):
    *   `MONGO_URI`: Your MongoDB Connection String (from Atlas).
    *   `JWT_SECRET`: A secret string (e.g., `mysecretkey123`).
    *   `PORT`: `8000` (Render might override this, but good to set).
    *   `CLIENT_URL`: `https://your-vercel-frontend-url.vercel.app` (You will update this *after* deploying frontend).
    *   `ADMIN_URL`: `https://your-admin-url.netlify.app` (Update after deploying admin).
    *   `NODE_ENV`: `production`
6.  Click **Create Web Service**.
7.  **Copy the Backend URL**: Once deployed, copy the URL (e.g., `https://babyshop-server.onrender.com`). You need this for the Frontend.

---

## 3. 🎨 Frontend Deployment (Vercel)

We will deploy the `client` folder to Vercel.

1.  **Sign Up/Login** to [Vercel](https://vercel.com/).
2.  Click **Add New...** -> **Project**.
3.  Import your GitHub repository.
4.  **Configuration**:
    *   **Framework Preset**: `Next.js`
    *   **Root Directory**: Click "Edit" and select `client`.
5.  **Environment Variables**:
    *   `NEXT_PUBLIC_API_URL`: Paste your Render Backend URL + `/api` (e.g., `https://babyshop-server.onrender.com/api`).
    *   `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Your Stripe Key (if using payments).
    *   `NEXT_PUBLIC_SITE_URL`: The Vercel URL (available after deploy, can set later).
6.  Click **Deploy**.

---

## 4. ⚙️ Admin Dashboard (Vercel)

We will deploy the `admin` folder to Vercel (separate project).

1.  Go to Vercel Dashboard -> **Add New...** -> **Project**.
2.  Import the **SAME** GitHub repository again.
3.  **Configuration**:
    *   **Project Name**: `babyshop-admin`
    *   **Framework Preset**: `Vite`
    *   **Root Directory**: Click "Edit" and select `admin`.
4.  **Environment Variables**:
    *   `VITE_API_URL`: Your Render Backend URL + `/api` (e.g., `https://babyshop-server.onrender.com/api`).
5.  Click **Deploy**.

---

## 5. 🔄 Final Configuration

1.  Go back to **Render (Backend)** Dashboard -> Environment Variables.
2.  Update `CLIENT_URL` with your actual Vercel Client URL.
3.  Update `ADMIN_URL` with your actual Vercel Admin URL.
4.  **Redeploy** the backend (Manual Deploy -> Clear cache and deploy) to apply changes.
