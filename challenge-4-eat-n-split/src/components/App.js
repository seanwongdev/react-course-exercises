import FriendsList from "./FriendsList";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [showFormBill, setShowFormBill] = useState(false);

  const handleUpdateBalance = function (value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + Number(value) }
          : friend
      )
    );
  };

  const handleSelectedFriend = function (friend) {
    setSelectedFriend(friend);
    setShowFormBill((showFormBill) => !showFormBill);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelectedFriend={handleSelectedFriend}
        />
        <FormAddFriend />
        <Button>Add friend</Button>;
      </div>
      {showFormBill && (
        <FormSplitBill
          onUpdateBalance={handleUpdateBalance}
          selectedFriend={selectedFriend}
        />
      )}
    </div>
  );
}
