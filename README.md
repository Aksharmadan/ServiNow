# 🚀 ServiNow — Smart Service Management Web App

ServiNow is a **full-stack web application** that provides an intelligent interface for managing and tracking service requests and tasks efficiently via a web dashboard.  
It simulates a service management system where users can submit service requests and administrators can view, prioritize, and update tickets.

This project is suitable for academic submissions, portfolio showcase, and interview demos.

---

## 🎯 Objective

The main goals of ServiNow are to:

- Provide a **simple interface for creating service tickets**
- Display a list of active tickets with status tracking
- Allow administrators to update and resolve requests
- Demonstrate CRUD operations using a backend API

---

## 🔥 Features

- 📝 Create new service requests
- 📋 View all submitted tickets
- 🔄 Update ticket status
- ❌ Delete tickets
- 💡 Clean UI with intuitive controls
- ⚡ Functional backend REST API


## 🏗️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Tools
- JSON data handling (simulating a database)
- REST API routing


## 📂 Project Structure

This is a common setup for ServiNow:

ServiNow/
├── public/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── server.js
├── package.json
└── README.md


✨ **Everything runs from a Node.js server that serves static pages + REST endpoints.**

## 🚀 How to Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Aksharmadan/ServiNow.git
cd ServiNow

2️⃣ Install Dependencies
npm install


This will install Express and any necessary modules defined in package.json.

3️⃣ Run the App
node server.js


You should see output similar to:

Server running at http://localhost:3000
