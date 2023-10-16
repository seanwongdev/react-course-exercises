import Button from "./Button";
import { useState } from "react";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = function (e) {
    e.preventDefault();
    if (!name || !image) return;

    onAddFriend({
      id: crypto.randomUUID(),
      name: name,
      image: `https://i.pravatar.cc/48?u=${image}`,
      balance: 0,
    });

    setName("");
    setImage("");
  };

  return (
    <>
      <form className="form-add-friend">
        <label>👫Friend name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <label>🖼 Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></input>

        <Button onClick={handleSubmit}>Add</Button>
      </form>
    </>
  );
}
