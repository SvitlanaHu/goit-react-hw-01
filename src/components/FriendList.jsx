import styles from './FriendList.css';
import {FriendListItem} from './FriendListItem';

export const FriendList = ({ items }) => {
  return (
    <ul className={styles.friendList}>
      {items.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};
