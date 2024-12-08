Budget Tracker Application
Overview
The Budget Tracker is a web application designed to help users manage their financial records efficiently. 
It allows users to sign up, log in, add income and expenses, track their transactions visually using graphs, 
and store their personalized data securely. Each user has their own dashboard to view and manage their data.

Features:

/User Authentication

Sign up with a secure registration process.
Log in to access your personalized dashboard.
Logout functionality to end the session.

/Dashboard

View a summary of your income and expenses.
Access a graph visualizing your financial activity.
User-friendly navigation to manage budgets and transactions.

/Income and Expense Management

Add, edit, or delete income and expense entries.
Categorize transactions for better insights.

/Data Storage

Each user's data is securely stored in the database.
Ensures privacy by separating user data using authentication.

/Visualization

Interactive graphs and charts for better tracking.
See trends in spending and income over time.

Installation:

Prerequisites
> Node.js (v14+ recommended)
> MySQL server
> npm (Node Package Manager)
> A code editor (e.g., VSCode)

Steps
Clone this repository to your local machine:

bash
Copy code
git clone https://github.com/your-repo/budget-tracker.git

Navigate to the project directory:

bash
Copy code
cd budget-tracker
Install dependencies:

bash
Copy code
npm install
Configure your database:

Open config/database.js and update the credentials:
javascript
Copy code
const sequelize = new Sequelize('your_database', 'your_username', 'your_password', {
    host: 'localhost',
    dialect: 'mysql',
});
Run migrations to set up database tables:
bash
Copy code
npx sequelize-cli db:migrate
Start the development server:

bash
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000.

Usage Instructions

- Step 1: Sign Up

Navigate to the /auth route or click "Sign Up" on the homepage.
Fill out the registration form with your email, username, and password.
Submit the form to create your account.

- Step 2: Login
Navigate to the /auth route or click "Login."
Enter your credentials to access your dashboard.

- Step 3: Dashboard
After logging in, you’ll be redirected to your dashboard.
The dashboard includes:
A summary of your current balance.
Links to add transactions or view analytics.

- Step 4: Add Income or Expenses
Navigate to /transactions or use the "Add Income/Expense" button on your dashboard.
Fill in the form with the transaction details (title, amount, category, date).
Submit the form to save the transaction.

- Step 5: Track Finances
View your transactions in a table on the dashboard.
Navigate to the "Analytics" section to view graphs of your income and expenses over time.

- Step 6: Logout
Click the "Logout" button in the navigation bar to securely end your session.

Technical Details:

<Frontend>
Framework: React.js
Styling: CSS, styled-components
Graph Visualization: Chart.js or Recharts
  
<Backend>
Framework: Node.js with Express.js
Database: MySQL with Sequelize ORM
Authentication: JSON Web Tokens (JWT) for user sessions
Features
Authentication API

/api/auth/signup – Registers a new user.
/api/auth/login – Logs in an existing user.
/api/auth/logout – Logs out the current user.
Transaction Management API

/api/transactions (GET) – Retrieves all transactions for the logged-in user.
/api/transactions (POST) – Adds a new transaction.
/api/transactions/:id (DELETE) – Deletes a specific transaction.
Data Visualization

Graphs are dynamically updated based on stored transactions.
Visuals include bar graphs for income vs. expense and pie charts for category breakdown.
Future Enhancements
Add recurring transaction reminders.
Implement budget goals and savings tracking.
Provide advanced analytics (e.g., monthly trends).
Contributing
If you'd like to contribute, feel free to submit a pull request. For major changes, please open an issue first to discuss your proposed changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

