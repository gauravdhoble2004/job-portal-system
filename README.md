# 🚀 Job Portal System

![Job Portal Banner](https://img.shields.io/badge/Job%20Portal-React%20%7C%20Node%20%7C%20MongoDB-blueviolet)

A modern **Job Portal System** built with **MERN stack** (MongoDB, Express.js, React.js, Node.js) featuring candidate & employer dashboards, job listings, resume parsing, and admin moderation.  

---

## 🌟 Features

- ✅ **Job Listings & Applications** – Post, browse, and apply for jobs easily  
- ✅ **Resume Parsing & Job Matching** – Automatically match candidate profiles with relevant jobs  
- ✅ **Employer & Candidate Dashboards** – Manage applications, job postings, and profile  
- ✅ **Admin Panel** – Moderate jobs, users, and monitor activity  
- ✅ **Authentication & Authorization** – JWT-based secure login for different roles  
- ✅ **LinkedIn API Integration** – Import LinkedIn profiles for faster registration *(optional add-on)*  

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Tokens)  
- **Resume Parsing:** pdf-parse  
- **Security:** Helmet & Rate Limiting  
- **File Uploads:** Multer  

---

## 🎨 UI / Screenshots

![Home Page](https://img.shields.io/badge/Home%20Page-Screenshot-success)  
![Login Page](https://img.shields.io/badge/Login%20Page-Screenshot-success)  
![Dashboard](https://img.shields.io/badge/Dashboard-Screenshot-success)  

 

---

## ⚡ Getting Started

### Prerequisites

- Node.js >= 18  
- npm >= 9  
- MongoDB (local or Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/job-portal.git
cd job-portal

# Backend setup
cd server
npm install
cp .env.example .env
# Update MONGO_URI, JWT_SECRET
npm run dev

# Frontend setup
cd ../client
npm install
cp .env.example .env
# Ensure VITE_API_URL points to backend
npm run dev

| Role      | Email                                                 | Password |
| --------- | ----------------------------------------------------- | -------- |
| Admin     | [admin@example.com](mailto:admin@example.com)         | admin123 |
| Employer  | [employer@example.com](mailto:employer@example.com)   | emp123   |
| Candidate | [candidate@example.com](mailto:candidate@example.com) | cand123  |


📦 Folder Structure
job-portal/
├─ client/       # React frontend
│  ├─ src/
│  └─ vite.config.mjs
├─ server/       # Node.js backend
│  ├─ src/
│  └─ .env
└─ README.md

🔗 API Endpoints

Auth: /api/auth/login, /api/auth/register

Jobs: /api/jobs

Applications: /api/applications

Admin: /api/admin

(Check server/routes for full API documentation)

🌐 Advanced Add-ons

LinkedIn OAuth / API integration

Resume keyword matching

Notification system for job updates

Email verification & password reset

📌 License

MIT License © Gaurav Dhoble


⭐ Made with ❤️ by Gaurav