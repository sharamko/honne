import Link from 'next/link';
import styles from './BurgerCat.module.scss';
import { NavItem } from '@/app/(frontend)/layout';

type BurgerCatProps = {
  close: () => void;
  catItems: NavItem[];
};

const BurgerCat = ({ catItems, close }: BurgerCatProps) => {
  return (
    <ul className={styles.root}>
      {catItems.map((item) => (
        <li key={item.title}>
          <Link onClick={() => close()} href={`/#${item.title}`}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BurgerCat;
