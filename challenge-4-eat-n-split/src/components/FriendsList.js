import Friend from "./Friend";

export default function FriendsList({
  friends,
  onSelectedFriend,
  selectedFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          selectedFriend={selectedFriend}
          onSelectedFriend={onSelectedFriend}
          friend={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
