import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Reset from "./Reset";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState(0);
  const [tipFriendPercent, setTipFriendPercent] = useState(0);
  const averageTip = Math.round(((tipPercent + tipFriendPercent) / 200) * bill);

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage tipPercent={tipPercent} setTipPercent={setTipPercent}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        tipPercent={tipFriendPercent}
        setTipPercent={setTipFriendPercent}
      >
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 ? (
        <>
          <Output tip={averageTip} bill={bill} />
          <Reset
            onSetBill={setBill}
            onSetTipPercent={setTipPercent}
            onSetTipFriendPercent={setTipFriendPercent}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
}
