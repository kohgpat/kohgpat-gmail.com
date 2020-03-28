import { FiPlusCircle } from "react-icons/fi";
import Avatar from "../../../../components/Avatar";
import styles from "./index.module.css";

const ExpensesUsers = ({ users }) => (
  <ul className={styles.users}>
    {users.map((user, idx) => (
      <li
        key={user.id}
        className={styles.user}
        style={{ zIndex: users.length - idx }}
      >
        <Avatar className={styles.userAvatar} />
      </li>
    ))}

    <li className={styles.newUser}>
      <button type="button" className={styles.newUserButton}>
        <div className={styles.newUserButtonContent}>
          <FiPlusCircle />
        </div>
      </button>
    </li>
  </ul>
);

ExpensesUsers.defaultProps = {
  users: []
};

export default ExpensesUsers;
