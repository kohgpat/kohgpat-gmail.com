import Link from 'next/link';
import {useRouter} from 'next/router';
import cn from 'classnames';
import styles from './index.module.css';

const SidebarNavigation = () => {
  const router = useRouter();

  const isActiveLink = (...hrefs) => {
    let match = false;

    for (const href of hrefs) {
      match = router.pathname === href;

      if (match) {
        break;
      }
    }

    return match;
  };

  return (
    <nav className={styles.navigation}>
      <Link href="/dashboard">
        <a
          className={cn(
            styles.link,
            isActiveLink('/dashboard', '/') && styles.linkActive,
          )}>
          Dashboard
        </a>
      </Link>

      <Link href="/expenses">
        <a
          className={cn(
            styles.link,
            isActiveLink('/expenses') && styles.linkActive,
          )}>
          Expenses
        </a>
      </Link>

      <Link href="/wallets">
        <a
          className={cn(
            styles.link,
            isActiveLink('/wallets') && styles.linkActive,
          )}>
          Wallets
        </a>
      </Link>

      <Link href="/accounts">
        <a
          className={cn(
            styles.link,
            isActiveLink('/accounts') && styles.linkActive,
          )}>
          Accounts
        </a>
      </Link>

      <Link href="/settings">
        <a
          className={cn(
            styles.link,
            isActiveLink('/settings') && styles.linkActive,
          )}>
          Settings
        </a>
      </Link>
    </nav>
  );
};

export default SidebarNavigation;
