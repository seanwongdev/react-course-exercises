import Friend from "./Friend";

export default function FriendsList({ friends, onSelectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          onSelectedFriend={onSelectedFriend}
          friend={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
