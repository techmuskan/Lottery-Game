import React, { useState } from "react";
import "./Lottary.css";

function Lottary() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [message, setMessage] = useState("");

  const generateThreeDigitNumber = () => {
    return Math.floor(100 + Math.random() * 900);
  };

  const sumOfDigits = (num) => {
    return num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  };

  const handleClick = () => {
    const newNumber = generateThreeDigitNumber();
    setRandomNumber(newNumber);

    const digitSum = sumOfDigits(newNumber);

    if (digitSum === 15) {
      setMessage("🎉 Congratulations! You won the lottery! 🎉");
    } else {
      setMessage("😅 Try again, new lottery generated!");
    }
  };

  return (
    <div className="lottery-container">
      <button className="lottery-btn" onClick={handleClick}>
        Get Lottery Number
      </button>
      {randomNumber && (
        <>
          <h2 className="lottery-number">{randomNumber}</h2>
          <p
            className={`lottery-message ${
              message.includes("won") ? "win" : "lose"
            }`}
          >
            {message}
          </p>
        </>
      )}
    </div>
  );
}

export default Lottary;
