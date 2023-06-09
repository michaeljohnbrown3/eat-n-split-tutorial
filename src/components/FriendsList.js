import Friend from "./Friend";

export default function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} selectedFriend={selectedFriend} onSelection={onSelection} key={friend.id} />
      ))}
    </ul>
  );
}
