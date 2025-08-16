import Image from 'next/image';
import styles from './Header.module.scss';
import Link from 'next/link';
import HeaderCart from './header-cart/HeaderCart';
import HeaderCategories from './header-cat/HeaderCategories';
import HeaderNav from './header-nav/HeaderNav';
import HeaderLang from './header-lang/HeaderLang';

const catItems: string[] = [
  'роллы',
  'сеты',
  'суши',
  'закуски',
  'запеченные',
  'десерты',
  'соусы',
  'напитки',
];
const navItems: string[] = ['зона доставки', 'контакты'];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__top}`}>
        <div className={styles.header__top_left}>
          <button className={styles.header__burger}>
            <Image
              src="/images/honne-burger.svg"
              alt="burger menu"
              width={24}
              height={24}
            />
          </button>
          <Link href={'/'} className={styles.header__logo}>
            <Image
              src="/images/honne-logo.png"
              alt="burger menu"
              width={78}
              height={20}
            />
            <div>
              <span>Asian</span>
              <br />
              <span>street&nbsp;food</span>
            </div>
          </Link>
        </div>
        <HeaderNav data={navItems} />
        <HeaderCart type="top" />
        <div className={styles.header__top_right}>
          <Link className={styles.header__phone} href="tel:+48731902546">
            +48 731 90 25 46
          </Link>
          <HeaderLang />
        </div>
      </div>
      <div className={`container ${styles.header__bottom}`}>
        <HeaderCategories data={catItems} />
        <HeaderCart type="bottom" />
      </div>
    </header>
  );
};

export default Header;
