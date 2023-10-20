// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState, useEffect } from "react";

export default function App() {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [amount, setAmount] = useState("23");
  const [result, setResult] = useState("");

  useEffect(
    function () {
      async function convertExchange() {
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${currencyFrom}&to=${currencyTo}`
          );
          console.log(res);
          if (!res.ok)
            throw new Error(
              "Currency To should be different from Currency From"
            );
          const data = await res.json();

          console.log(data);
          setResult(data.rates[currencyTo]);
        } catch (err) {
          setResult(err.message);
        }
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
      <Output result={result} />
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

function Output({ result }) {
  return <p>{result}</p>;
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
