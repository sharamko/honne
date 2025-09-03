import HeaderLang from '../../sections/header/header-lang/HeaderLang';
import Nav from '../nav/Nav';
import CloseIcon from '../svg-icons/CloseIcon';
import styles from './Burger.module.scss';
import BurgerCat from './burger-cat/BurgerCat';
import { NavItem } from '@/app/(frontend)/layout';

type BurgerProps = {
  close: () => void;
  navItems: NavItem[];
  catItems: NavItem[];
};

const Burger = ({ close, navItems, catItems }: BurgerProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div onClick={() => close()} className={styles.close}>
          <CloseIcon />
        </div>
        <div className={styles.title}>меню</div>
        <HeaderLang variant="inBurger" active="PL" />
      </div>
      <div className={styles.content}>
        <div className={styles.nav}>
          <Nav variant="inBurger" data={navItems} />
        </div>
        <BurgerCat close={close} catItems={catItems} />
        <div className={styles.contacts}>
          <span>телефон для связи</span>
          <a href="tel:+48731902546">+48 731 90 25 46</a>
        </div>
      </div>
    </div>
  );
};

export default Burger;
