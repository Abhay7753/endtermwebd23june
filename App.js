import React, { useState } from "react";
import "./App.css";

function App() {
  const [char, setChar] = useState("");
  const [result, setResult] = useState("");

  const checkCharacter = () => {
    const ch = char.toLowerCase();

    if (ch.length !== 1) {
      setResult("Please enter a single character");
    } else if ("aeiou".includes(ch)) {
      setResult("Vowel");
    } else if (ch >= "a" && ch <= "z") {
      setResult("Consonant");
    } else {
      setResult("Not an Alphabet");
    }
  };

  return (
    <div className="container">
      <h1>Vowel & Consonant Checker</h1>

      <input
        type="text"
        maxLength="1"
        value={char}
        onChange={(e) => setChar(e.target.value)}
        placeholder="Enter a character"
      />

      <button onClick={checkCharacter}>Check</button>

      <h2>{result}</h2>
    </div>
  );
}

export default App;