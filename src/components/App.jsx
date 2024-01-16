import { Profile } from "./Profile";
import userData from './userData.json';
import { FriendList } from './FriendList';
import friendsData from './friends.json';
import {TransactionHistory} from './TransactionHistory'
import transactionsData from './transactions.json'
import styles from './App.module.css'

export const App = () => {
  return (
    <div className={styles.container}>
      <Profile items={userData}
      />
      <FriendList items={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
};