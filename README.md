# Activity-booking-system
Created a simple REST API backend for a "Basic Activity Booking App" 

Features :-

User Registration & Login with JWT authentication
List Activities (Public Endpoint)
Book an Activity (Authorized Users Only)
Get My Bookings (Authorized Users Only)

Tech Stack :-

Backend: Node.js with Express.js
Database: MongoDB
Authentication: JWT Token-based auth
Validation: Joi
Password Hashing: bcryptjs

Project Structure :-

activity-booking-api/
├── controllers/        # Route controllers
├── middleware/         # Custom middleware functions
├── models/             # Mongoose models
├── routes/             # API routes
├── utils/              # Utility functions
├── .env                # Environment variables
├── package.json        # Dependencies
├── README.md           # Project documentation
└── server.js           # Entry point

Setup Instructions

Prerequisites :-

Node.js 
MongoDB 

Installation

Clone the repository
git clone https://github.com/sweetymiss018/activity-booking-api.git
cd activity-booking-api

Install dependencies
npm install

Set up environment variables
Create a .env file in the root directory and add :
PORT=5000
MONGO_URI=mongodb://localhost:27017/activity-booking-app
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=30d

Start the server:-

npm start
