
# 💰 Finance Backend System

🚀 This project is developed as part of the **Backend Developer Assessment for Zorvyn**.

It is a secure and scalable backend system for managing financial records with authentication, role-based access, and dashboard analytics.

---

## 🔥 Features

- 🔐 JWT Authentication (Register/Login)
- 👤 Role-Based Access Control (Admin)
- 📊 Financial Record Management
  - Add Income
  - Add Expense
  - View Records
  - Delete Records
- 📈 Dashboard Summary
  - Total Income
  - Total Expense
  - Balance Calculation
- ⚡ Secure API endpoints with middleware
- 🧾 Error handling & validation

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

---

## 📂 Project Structure

```

finance-backend/
│── config/
│── controllers/
│── middleware/
│── models/
│── routes/
│── server.js
│── package.json

```

## 🔗 API Endpoints

### 🔑 Auth Routes

- `POST /api/auth/register` → Register user  
- `POST /api/auth/login` → Login user (returns token)

---

### 👤 User Routes

- `GET /api/users` → Get all users (Protected)

---

### 💰 Finance Routes

- `POST /api/finance` → Add income/expense  
- `GET /api/finance` → Get all records  
- `DELETE /api/finance/:id` → Delete record  
- `GET /api/finance/dashboard` → Dashboard summary  

---

## 🔐 Authorization

All protected routes require:

```

Authorization: Bearer <JWT_TOKEN>

````

---

## 📊 Sample Dashboard Response

```json
{
  "totalIncome": 5000,
  "totalExpense": 1500,
  "balance": 3500
}
````

---

## 📸 Screenshots

### Register

![Register](./screenshots/register.png)

### Login

![Login](./screenshots/login.png)

### Users

![Users](./screenshots/users.png)

### Add Income

![Income](./screenshots/income.png)

### Add Expense

![Expense](./screenshots/expense.png)

### Dashboard

![Dashboard](./screenshots/dashboard.png)

---

## ⚙️ Setup Instructions

1. Clone repository
2. Install dependencies

   ```
   npm install
   ```
3. Create `.env` file

   ```
   MONGO_URI=your_mongodb_connection
   JWT_SECRET=your_secret_key
   ```
4. Run server

   ```
   npm run dev
   ```

---

## 🏆 Highlights

* Clean MVC architecture
* Secure authentication system
* Real-world finance tracking logic
* Aggregation-based dashboard

---

## 👩‍💻 Author

**Shafail Siddiqha**

---

## 📌 Note

This project was built as part of a **technical assessment for Zorvyn**, demonstrating backend development skills including API design, authentication, and data handling.

```

---
