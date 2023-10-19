// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  return (
    <div>
      <Amount />
      <Currency />
      <Currency />
      <Output />
    </div>
  );
}

function Currency() {
  return (
    <select>
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

function Amount() {
  return <input type="text" />;
}
