import {
  MdPayment,
  MdAccountBalance,
  MdAccountBalanceWallet,
  MdAddCircleOutline,
} from 'react-icons/md';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  const getTypeIcon = type => {
    switch (type.toLowerCase()) {
      case 'invoice':
        return <MdAccountBalanceWallet className={styles.invoiceIcon} />;
      case 'payment':
        return <MdPayment className={styles.paymentIcon} />;
      case 'withdrawal':
        return <MdAccountBalance className={styles.withdrawalIcon} />;
        case 'deposit':
          return <MdAddCircleOutline className={styles.depositIcon} />;
      default:
        return null;
    }
  };

  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>
              {getTypeIcon(type)}
              <span
                className={`${styles[type.toLowerCase()]} ${styles.typeText}`}
              >
                {type}
              </span>
            </td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
