'use client';
import Image from 'next/image';
import styles from './Header.module.scss';
import Link from 'next/link';
import HeaderCart from './header-cart/HeaderCart';
import HeaderCategories from './header-cat/HeaderCategories';
import Nav from '../../components/nav/Nav';
import HeaderLang from './header-lang/HeaderLang';
import Container from '../../container/container';
import { useEffect, useState } from 'react';
import Logo from '../../components/logo/Logo';
import Burger from '../../components/burger/Burger';
import { NavItem } from '@/app/(frontend)/layout';

type HeaderProps = {
  catItems: NavItem[];
  navItems: NavItem[];
};

const Header = ({ catItems, navItems }: HeaderProps) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isBurgerOpen ? 'hidden' : '';
  }, [isBurgerOpen]);
  return (
    <header className={styles.root}>
      {isBurgerOpen && (
        <Burger
          catItems={catItems}
          navItems={navItems}
          close={() => setIsBurgerOpen(false)}
        />
      )}
      <Container className={`${styles.container} ${styles.top__container}`}>
        <div className={styles.top}>
          <div className={styles.top_left}>
            <button
              onClick={() => setIsBurgerOpen(true)}
              className={styles.burger}
            >
              <Image
                src="/images/honne-burger.svg"
                alt="burger menu"
                width={24}
                height={24}
              />
            </button>
            <Logo />
          </div>
          <Nav data={navItems} />
          <HeaderCart type="top" />
          <div className={styles.top_right}>
            <Link className={styles.phone} href="tel:+48731902546">
              +48 731 90 25 46
            </Link>
            <HeaderLang variant="inHeader" active="PL" />
          </div>
        </div>
      </Container>
      <div className="divider"></div>
      <Container className={styles.container}>
        <div className={styles.bottom}>
          <HeaderCategories data={catItems} />
          <HeaderCart type="bottom" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
