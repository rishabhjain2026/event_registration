🗓️ Event Registration Backend

This is a Node.js + Express + MongoDB backend API for managing event registrations.
It allows users to register for events, ensures unique email registration, and retrieves all users registered for a specific event.

🚀 Features

✅ Create and manage user registrations for events

✅ Prevent duplicate registrations (unique email validation)

✅ Fetch all registrations for a specific event

✅ RESTful API design

✅ MongoDB as database with Mongoose ORM

🧩 Tech Stack
Component	Technology
Backend Framework	Node.js + Express.js
Database	MongoDB
ODM	Mongoose
Language	JavaScript (ES6)
📁 Folder Structure
Event/
├── backend/
│   ├── controller/
│   │   └── register.controller.js
│   ├── model/
│   │   └── user.model.js
│   ├── routes/
│   │   └── register.route.js
│   ├── server.js
│   └── .env
├── frontend/   (optional - if you add UI later)
└── README.md

⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/yourusername/event-registration-backend.git
cd event-registration-backend

2. Install Dependencies
npm install

3. Create a .env File

Create a file named .env in the root directory and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string

4. Start the Server
npm run dev
