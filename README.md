# Guess the Country Name - Web App

## 📌 Overview
"Guess the Country Name" is an interactive web app where users guess country names based on provided clues. The game integrates AI to generate clues, fun facts, and trivia for over 100 destinations.

## 🚀 Features
### 1️⃣ **Dataset & AI Integration**
- Starter dataset provided.
- AI tools (ChatGPT, OpenAI API, Web Scraping, etc.) used to expand the dataset to 100+ destinations.
- Dataset includes clues, fun facts, and trivia for each country.

### 2️⃣ **Functional Web App**
- ✅ Presents **1–2 random clues** for a randomly selected country.
- ✅ Allows users to **select from multiple possible country names**.
- ✅ Provides immediate feedback:
  - 🎉 **Correct Answer**: Confetti animation + fun fact.
  - 😢 **Incorrect Answer**: Sad-face animation + fun fact.
- ✅ Includes a **‘Play Again’ or ‘Next’** button for a new challenge.
- ✅ Tracks and displays **total user score (correct & incorrect answers)**.
- ✅ **Backend storage** ensures that the dataset remains hidden from users.

### 3️⃣ **Challenge a Friend Feature**
- ✅ Users **enter a unique username** upon starting.
- ✅ Clicking ‘Challenge a Friend’:
  - Generates a **shareable invite link & dynamic image** for WhatsApp.
  - Allows invited friends to **see the inviter’s score** before playing.
  - Ensures anyone with the link can play the game.

## 🛠️ Tech Stack
### **Frontend**
- React.js
- Bootstrap
- CSS

### **Backend**
- Express.js
- MongoDB

## 🎯 Installation & Setup
### **Prerequisites**
Ensure you have the following installed:
- Node.js & npm
- MongoDB (locally or via cloud services like MongoDB Atlas)

### **Steps to Run the Project**
1. **Clone the repository**
   ```sh
   git clone https://github.com/Sanjayan-Ganesan/guess-it.git
   cd guess-the-country
   ```
2. **Install frontend dependencies**
   ```sh
   cd frontend
   npm install
   ```
3. **Start the frontend server**
   ```sh
   npm start
   ```
4. **Install backend dependencies**
   ```sh
   cd ../backend
   npm install
   ```
5. **Configure environment variables** (e.g., `.env` file for database connection)
6. **Start the backend server**
   ```sh
   npm start
   ```
7. **Visit the app** at `http://localhost:3000`.

## 📌 Future Enhancements
- ✨ Add difficulty levels (Easy, Medium, Hard).
- 🌍 Implement a leaderboard system.
- 📱 Optimize for mobile gameplay.

## 💡 Contributing
Pull requests are welcome! For major changes, open an issue first to discuss the proposal.

## 📜 License
MIT License

---
Happy Coding! 🎮

