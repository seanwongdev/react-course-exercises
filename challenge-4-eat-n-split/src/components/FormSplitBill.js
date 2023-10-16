import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({
  selectedFriend,
  onBalanceOwed,
  onUpdateBalance,
}) {
  const [bill, setBill] = useState("");
  const [billByUser, setBillByUser] = useState("");
  const billByFriend = bill ? bill - billByUser : "";
  const [paidByUser, setPaidByUser] = useState(true);

  const handleSplitBill = function (e) {
    e.preventDefault();
    if (!bill) return;
    paidByUser ? onBalanceOwed(billByFriend) : onBalanceOwed(-billByUser);
    onUpdateBalance();
  };

  return (
    <form className="form-split-bill">
      <h2>Split a Bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      ></input>

      <label>🕴 Your expense</label>
      <input
        type="text"
        value={billByUser}
        onChange={(e) => setBillByUser(e.target.value)}
      ></input>

      <label>👬 {selectedFriend.name}'s expense</label>
      <input type="text" value={billByFriend} disabled></input>

      <label>🤑 Who is paying the bill?</label>
      <select
        value={paidByUser}
        onChange={(e) => setPaidByUser(e.target.value === "true")}
      >
        <option value="true">You</option>
        <option value="false">{selectedFriend.name}</option>
      </select>
      <Button onClick={handleSplitBill}>Split bill</Button>
    </form>
  );
}
