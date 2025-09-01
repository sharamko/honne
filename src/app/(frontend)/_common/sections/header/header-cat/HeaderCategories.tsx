import { NavItem } from '@/app/(frontend)/layout';
import styles from './HeaderCategories.module.scss';
import Link from 'next/link';

const HeaderCategories = ({ data }: { data: NavItem[] }) => {
  return (
    <nav className={styles.root}>
      <ul>
        {data.map((item) => (
          <li key={item.title}>
            <Link href={`/#${item.title}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderCategories;
