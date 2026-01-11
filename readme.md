# Taskify – Backend API

Taskify is a study & task management backend API built with **Django Rest Framework**,  
containerized using **Docker** and **PostgreSQL**.

This repository contains **only the backend**.  
Frontend (React / Next.js) can connect via REST API.

---

## 🚀 Backend Tech Stack

- Python3
- Django + Django Rest Framework
- PostgreSQL
- JWT Authentication
- Swagger (drf-yasg)
- Docker & Docker Compose

---

## 📦 Project Structure

taskify-hw/
│
├── backend/
│ ├── accounts/
│ ├── courses/
│ ├── tasks/
│ ├── config/
│ └── manage.py
│
├── docker-compose.yml
├── Dockerfile
├── .env
└── README.md


---

## 🐳 Run Project with Docker (Recommended)

### 1️⃣ Clone repository

```bash
git clone https://github.com/USERNAME/taskify-hw.git
cd taskify-hw

2️⃣ Create .env file
DEBUG=1
SECRET_KEY=super-secret-key

DB_NAME=taskify_db
DB_USER=taskify_user
DB_PASSWORD=taskify_pass
DB_HOST=db
DB_PORT=5432

DJANGO_SUPERUSER_EMAIL=admin@admin.com
DJANGO_SUPERUSER_USERNAME=admin
DJANGO_SUPERUSER_PASSWORD=admin123

3️⃣ Start containers
docker-compose up --build


Frontend will be use swagger api documentation:

http://localhost:8000/swagger

🛠 Initial Setup (First Time Only)

In a new terminal:

docker-compose exec backend python manage.py migrate
docker-compose exec backend python manage.py createsuperuser

