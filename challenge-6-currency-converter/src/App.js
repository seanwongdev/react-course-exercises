// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState, useEffect } from "react";

export default function App() {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [amount, setAmount] = useState("23");

  useEffect(
    function () {
      async function convertExchange() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${currencyFrom}&to=${currencyTo}`
        );
        const data = res.json();
        console.log(data);
      }
      convertExchange();
    },
    [amount, currencyFrom, currencyTo]
  );

  return (
    <div>
      <Amount amount={amount} setAmount={setAmount} />
      <Currency
        currencySelect={currencyFrom}
        setCurrencySelect={setCurrencyFrom}
      />
      <Currency currencySelect={currencyTo} setCurrencySelect={setCurrencyTo} />
      <Output />
    </div>
  );
}

function Currency({ currencySelect, setCurrencySelect }) {
  return (
    <select
      value={currencySelect}
      onChange={(e) => setCurrencySelect(e.target.value)}
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}

function Output() {
  return <p>output</p>;
}

function Amount({ amount, setAmount }) {
  return (
    <input
      type="text"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
    />
  );
}
