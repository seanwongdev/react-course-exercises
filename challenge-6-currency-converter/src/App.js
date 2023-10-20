// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState, useEffect } from "react";

export default function App() {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [amount, setAmount] = useState("23");
  const [result, setResult] = useState("");
  const [loading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function convertExchange() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${currencyFrom}&to=${currencyTo}`
          );
          console.log(res);
          if (!res.ok) throw new Error("Fetching went wrong");
          const data = await res.json();

          console.log(data);
          setResult(data.rates[currencyTo]);
        } catch (err) {
          setResult(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (currencyFrom === currencyTo) return setResult(amount);
      convertExchange();
    },
    [amount, currencyFrom, currencyTo]
  );

  return (
    <div>
      <Amount amount={amount} setAmount={setAmount} loading={loading} />
      <Currency
        currencySelect={currencyFrom}
        setCurrencySelect={setCurrencyFrom}
      />
      <Currency currencySelect={currencyTo} setCurrencySelect={setCurrencyTo} />
      <Output result={result} currencyTo={currencyTo} />
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

function Output({ result, currencyTo }) {
  return (
    <p>
      {result} {currencyTo}
    </p>
  );
}

function Amount({ amount, setAmount, loading }) {
  return (
    <input
      type="text"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      disabled={loading}
    />
  );
}
