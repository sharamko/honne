import { NavItem } from '@/app/(frontend)/layout';
import styles from './HeaderCategories.module.scss';

const HeaderCategories = ({ data }: { data: NavItem[] }) => {
  return (
    <nav className={styles.root}>
      <ul>
        {data.map((item) => (
          <li key={item.title}>
            <a href={`/#${item.title}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderCategories;
