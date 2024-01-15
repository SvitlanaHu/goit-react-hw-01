import { GrStatusGoodSmall } from "react-icons/gr";
import { GrStatusGood } from "react-icons/gr";
import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const StatusIcon = isOnline ? GrStatusGood : GrStatusGoodSmall;
  const statusText = isOnline ? 'Online' : 'Offline';
  const statusClass = isOnline ? styles.online : styles.offline;

  return (
    <li className={styles.item}>
      <img className={styles.avatar} src={avatar} alt={`Avatar of ${name}`} width="48" />
      <p className={styles.name}>{name}</p>
      <div className={styles.statusWrapper}>
        <StatusIcon className={`${styles.statusIcon} ${statusClass}`} />
        <span className={`${styles.statusText} ${statusClass}`}>{statusText}</span>
      </div>
    </li>
  );
};
