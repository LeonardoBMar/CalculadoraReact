// src/App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleEqual = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Erro");
    }
  };

  return (
    <div className="calculator">
      <div className="output">
        <span className="result">{result || input || "0"}</span>
      </div>
      <div className="buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>x</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleEqual} className="bg-green">=</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={handleClear} className="bg-red">C</button>
      </div>
    </div>
  );
}

export default App;
