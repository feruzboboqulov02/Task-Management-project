# Task Manager API
A simple and secure task management REST API built with **Node.js**, **Express.js**, **MongoDB**, and **JWT**. Users can register, log in, and manage their personal tasks (create, read, update, delete), with optional filters like task status and due date.
---
## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
---
## Features
- JWT-based authentication (register/login)
- CRUD operations for personal tasks
- Filter tasks by `status` and `dueDate`
- Business logic organized in `services/`
- Secure route protection via middleware
- Hashed passwords using `bcryptjs`
- Centralized error handling
- Clean, modular project structure
- Ready for Jest tests
---
## Tech Stack
- **Backend**: Express.js, Node.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT, bcryptjs
- **Testing**: Jest, Supertest
- **Development Tools**: dotenv, nodemon
---
## Project Structure

task-manager-api/
├── src/
│   ├── config/          # MongoDB connection
│   ├── controllers/     # Route handlers (thin)
│   ├── middleware/      # JWT middleware
│   ├── models/          # Mongoose schemas
│   ├── routes/          # Express routers
│   ├── services/        # Business logic layer
│   ├── utils/           # errorHandler, CustomError
│   ├── app.js           # Express app setup
│   └── server.js        # Entry point
├── tests/               # Jest tests (optional)
├── .env                 # Environment variables
├── package.json
└── README.md

---
## Getting Started
### 1. Clone the repository
git clone https://github.com/feruzboboqulov02/Task-Management-project.git
cd task-manager-api

### 2. Install dependencies
npm install

### 3. Create a `.env` file
Add the following environment variables to your `.env` file:
PORT=5000
MONGODB_URI=mongodb://admin:password@localhost:27017/workplace-connect?authSource=admin
JWT_SECRET=your_jwt_secret_key_here

### 4. Start the server
npm run dev

### 5. Start the fronend

cd client 
npm start


---
## API Endpoints
- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login user
---
## Testing
Run the tests using Jest:
npm test