# 🎲 Lottery-Game

A fun and interactive lottery game built with **React** by [techmuskan](https://github.com/techmuskan). Players enter a three-digit ticket, and if the sum of the digits equals **15**, they win. Otherwise, it’s a loss—but always a good time!

## ✨ Features

- 🎯 Input a 3-digit lottery ticket
- 🔢 Automatic digit sum calculation
- 🏆 Win if the sum is exactly 15
- ❌ Lose otherwise
- ⚡ Instant result display
- 🎨 Clean and responsive UI

## 🛠️ Built With

- React (Functional Components + Hooks)
- JavaScript
- CSS / Styled Components
- Vite or Create React App

## 🚀 Getting Started

### Clone the repo

```bash
git clone https://github.com/techmuskan/Lottery-Game.git
cd Lottery-Game
```

### Install dependencies

```bash
npm install
```

### Run the app

```bash
npm start
```

## 🎮 How to Play

1. Enter a 3-digit number (e.g., `456`)
2. Click the “Check” button
3. The app calculates the sum of the digits: `4 + 5 + 6 = 15`
4. If the sum is **15**, you win! 🎉  
   Otherwise, you lose 😢

## 📁 Project Structure

```
Lottery-Game/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── LotteryForm.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles.css
├── README.md
└── package.json
```

## 🧠 Logic Overview

```js
const checkWin = (ticket) => {
  const digits = ticket.split('').map(Number);
  const sum = digits.reduce((acc, val) => acc + val, 0);
  return sum === 15;
};
```

## 📌 Customization Ideas

- Add confetti animation for wins
- Store past attempts in localStorage
- Add sound effects
- Make it mobile-friendly

## 👩‍💻 Author

Made with ❤️ by [techmuskan](https://github.com/techmuskan)