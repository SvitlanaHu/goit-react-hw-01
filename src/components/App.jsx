import { Profile } from "./Profile";
import userData from './userData.json';
import { FriendList } from './FriendList';
import friendsData from './friends.json';
import {TransactionHistory} from './TransactionHistory'
import transactionsData from './transactions.json'

export const App = () => {
  return (
    <div>
      <Profile items={userData}
      />
      <FriendList items={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
};