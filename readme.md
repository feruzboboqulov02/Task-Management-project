# Task Manager API

A simple and secure task management REST API built with **Node.js**, **Express.js**, **MongoDB**, and **JWT**. Users can register, log in, and manage their personal tasks (create, read, update, delete), with optional filters like task status and due date.

---

## Features

- User registration and login with JWT
- Create, view, update, delete personal tasks
- Filter tasks by status or due date
- JWT-based route protection (middleware)
- Tests with Jest & Supertest
- Organized project structure
- Centralized error handling
- Clean, maintainable code

---

## Tech Stack

- **Backend**: Express.js, Node.js
- **Database**: MongoDB (Mongoose)
- **Auth**: JWT, bcryptjs
- **Testing**: Jest, Supertest
- **Dev Tools**: dotenv, nodemon

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/feruzboboqulov02/Task-Management-project.git
cd task-manager-api


#Install dependencies
npm install

# Create a .env file in the root and add:
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_super_secret_key

#  Start the server
npm run dev
