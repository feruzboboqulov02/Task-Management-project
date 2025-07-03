# Task Manager API

A simple and secure task management REST API built with **Node.js**, **Express.js**, **MongoDB**, and **JWT**. Users can register, log in, and manage their personal tasks (create, read, update, delete), with optional filters like task status and due date.

---

## Features

- JWT-based auth (register/login)
- CRUD for personal tasks
- Filter by `status` and `dueDate`
- Business logic in `services/`
- Secure route protection via middleware
- Hashed passwords with `bcryptjs`
- Centralized error handler
- Clean, modular structure
- Ready for Jest tests


---

## Tech Stack

- **Backend**: Express.js, Node.js
- **Database**: MongoDB (Mongoose)
- **Auth**: JWT, bcryptjs
- **Testing**: Jest, Supertest
- **Dev Tools**: dotenv, nodemon

---
task-manager-api/
├── src/
│ ├── config/ # MongoDB connection
│ ├── controllers/ # Route handlers (thin)
│ ├── middleware/ # JWT middleware
│ ├── models/ # Mongoose schemas
│ ├── routes/ # Express routers
│ ├── services/ # Business logic layer
│ ├── utils/ # errorHandler, CustomError
│ ├── app.js # Express app setup
│ └── server.js # Entry point
├── tests/ # Jest tests (optional)
├── .env # Environment variables
├── package.json
└── README.md

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/feruzboboqulov02/Task-Management-project.git
cd task-manager-api


#Install dependencies
npm install

# Create a .env
PORT=5000
MONGODB_URI=mongodb://admin:password@localhost:27017/workplace-connect?authSource=admin
JWT_SECRET=your_jwt_secret_key_here

#  Start the server
npm run dev


#API Endpoints
POST /api/auth/register - Register a new user
POST /api/auth/login - Login user

#TEST
npm test