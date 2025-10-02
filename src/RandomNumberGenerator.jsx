import React, { useState } from "react";

function RandomNumberGenerator() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [message, setMessage] = useState("");

  // Generate random 3-digit number (100–999)
  const generateThreeDigitNumber = () => {
    return Math.floor(100 + Math.random() * 900);
  };

  // Function to calculate sum of digits
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
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={handleClick}>Get Lottery Number</button>
      {randomNumber && (
        <>
          <h2>Generated Number: {randomNumber}</h2>
          <p>{message}</p>
        </>
      )}
    </div>
  );
}

export default RandomNumberGenerator;
