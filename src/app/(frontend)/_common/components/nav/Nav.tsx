import { NavItem } from '@/app/(frontend)/layout';
import styles from './Nav.module.scss';

type NavProps = {
  data: NavItem[];
  variant?: 'inHeader' | 'inBurger' | 'inFooter';
};

const Nav = ({ data, variant = 'inHeader' }: NavProps) => {
  return (
    <nav className={`${styles.root} ${styles[variant]}`}>
      <ul>
        {data.map((item) => (
          <li key={item.title}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
