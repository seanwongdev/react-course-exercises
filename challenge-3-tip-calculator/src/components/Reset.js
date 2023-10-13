export default function Reset({
  onSetBill,
  onSetTipPercent,
  onSetTipFriendPercent,
}) {
  const handleToggleReset = function () {
    onSetBill("");
    onSetTipFriendPercent(0);
    onSetTipPercent(0);
  };

  return <button onClick={handleToggleReset}>Reset</button>;
}
