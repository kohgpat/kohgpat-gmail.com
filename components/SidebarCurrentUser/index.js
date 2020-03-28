import Avatar from '../Avatar';
import styles from './index.module.css';

const SidebarCurrentUser = ({ currentUser }) => (
  <div className={styles.currentUser}>
    <Avatar className={styles.avatar} />
    <h1 className={styles.name}>{currentUser.name}</h1>
    <span className={styles.email}>{currentUser.email}</span>
  </div>
);

export default SidebarCurrentUser;