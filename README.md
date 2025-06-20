# Laravel 12 + Inertia React CRUD

This is a modern full-stack CRUD application built with **Laravel 12** and **React 19** using **Inertia.js**. The project is styled with Tailwind CSS and bundled using Vite.

## 🛠️ Tech Stack

- **Laravel 12** – PHP backend framework
- **Inertia.js (React)** – SPA experience without API
- **React 19** – Frontend JavaScript library
- **Vite 6** – Fast frontend build tool
- **Tailwind CSS 4** – Utility-first CSS framework
- **Axios** – HTTP requests
- **Laravel Vite Plugin** – Seamless Vite integration with Laravel

## 🚀 Features

- Simple CRUD functionality (Create, Read, Update, Delete)
- Inertia-powered page transitions
- Modern React components
- Tailwind-powered responsive UI
- Flash messages

## ⚙️ Project Setup
> Make sure you have **PHP**, **Composer**, and **Node.js/NPM** installed before running the following steps.

### 1. Clone the Repository

```bash
git clone https://github.com/kojuzz/inertia-react.git
cd inertia-react
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
composer run dev

💡 Note: If the terminal prompts for any confirmation during the process (e.g., “ The SQLite database configured for this application does not exist: database/database.sqlite.  Do you want to create it? (yes/no) [no]:  yes”), just choose yes and press Enter.