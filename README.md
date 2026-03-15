Social Media Website

A full-stack social media web application where users can create and view posts.
The project demonstrates a typical React + Node.js + Express + MongoDB architecture with a separated frontend and backend.

⸻

Features
	•	Create posts
	•	View posts from the database
	•	REST API built with Express
	•	MongoDB database integration
	•	React frontend for user interaction
	•	Axios for API communication

⸻

Tech Stack

Frontend
	•	React
	•	Vite
	•	Axios
	•	CSS

Backend
	•	Node.js
	•	Express.js

Database
	•	MongoDB (MongoDB Atlas)

⸻

Project Structure

social-media-website
│
├── Frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── backend
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md


⸻

Installation

1. Clone the repository

git clone https://github.com/sanskrutee99/social-media-website.git
cd social-media-website


⸻

Backend Setup

Navigate to backend:

cd backend
npm install

Create a .env file inside the backend folder:

MONGO_URI=your_mongodb_connection_string
PORT=3000

Start the backend server:

node server.js


⸻

Frontend Setup

Open another terminal:

cd Frontend
npm install
npm run dev

The frontend will run on:

http://localhost:5173


⸻

API Example

Create Post

POST /create-post

Request Body

{
  "title": "My first post",
  "content": "Hello world"
}


⸻

Get Posts

GET /posts

Returns all posts stored in the database.

⸻

Environment Variables

Example .env file:

MONGO_URI=your_mongodb_connection_string
PORT=3000

Do not commit .env files to GitHub.

⸻

Future Improvements
	•	User authentication
	•	Like and comment system
	•	Image upload support
	•	User profiles
	•	Deployment
