# Taskify – Full Stack Task Management System

Taskify is a full-stack web application developed as a course project.  
The system allows users to manage courses and tasks through a modern dashboard interface.

---

## 🚀 Technologies Used

### Backend
- Python
- Django
- Django REST Framework
- JWT Authentication
- PostgreSQL
- Docker & Docker Compose
- Swagger (OpenAPI)

### Frontend
- Next.js 15
- React
- TypeScript
- Tailwind CSS
- App Router Architecture

---

## 📁 Project Structure

taskify-fullstack/
│
├── backend/
│ ├── Dockerfile
│ ├── docker-compose.yml
│ ├── manage.py
│ ├── requirements.txt
│ ├── users/
│ ├── courses/
│ └── config/
│
├── frontend/
│ ├── app/
│ │ ├── dashboard/
│ │ ├── layout.tsx
│ │ └── page.tsx
│ ├── components/
│ ├── lib/
│ └── public/
│
├── .gitignore
└── README.md

---

## 🔐 Authentication

The backend uses **JWT authentication**.

Users must log in to receive an access token, which is required for all protected API endpoints.

---

## 📡 API Documentation

Swagger UI is available at:

http://localhost:8000/swagger/

---

## 🧠 Features

### Backend
- User authentication (JWT)
- Course management (CRUD)
- Task management (CRUD)
- Secure API endpoints
- Swagger documentation

### Frontend
- Dashboard layout
- Course listing
- Course statistics
- Responsive UI with Tailwind
- API integration with backend

---

## ▶️ How to Run the Project

### Backend

```bash
cd backend
docker-compose up --build
Backend will run at:
http://localhost:8000
cd frontend
npm install
npm run dev
Frontend will run at:
http://localhost:3000

📌 Notes
This project was developed for educational purposes.

Backend and frontend are separated following modern full-stack architecture principles.

Environment variables are excluded via .gitignore.

👨‍💻 Author

Student Project – Full Stack Development