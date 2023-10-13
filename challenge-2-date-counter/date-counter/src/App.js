import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const Counter = function () {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const newDate = new Date();
  newDate.setDate(newDate.getDate() + count);

  const handleAddCount = function () {
    setCount((c) => c + step);
  };

  const handleMinusCount = function () {
    setCount((c) => c - step);
  };

  const handleReset = function () {
    setStep((step) => 1);
    setCount((count) => 0);
  };

  return (
    <div className="container">
      <div>
        <div className="stepButton">
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          <span>{step}</span>
          {/* <button onClick={handleMinusStep}>-</button>
          <p>Step: {step}</p>
          <button onClick={handleAddStep}>+</button> */}
        </div>
        <div className="countButton">
          <button onClick={handleMinusCount}>-</button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          ></input>
          <button onClick={handleAddCount}> +</button>
        </div>
      </div>
      <p>
        {count < 0 && `${-count} days ago was `}
        {count === 0 && "Today is "}
        {count > 0 && `${count} days from today is `}
        {newDate.toDateString()}
      </p>
      {count === 0 && step === 1 ? (
        ""
      ) : (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
};
