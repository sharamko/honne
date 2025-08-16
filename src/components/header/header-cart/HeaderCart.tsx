'use client';
import Link from 'next/link';
import styles from './HeaderCart.module.scss';
import Image from 'next/image';
import { selectTotalCount, useCartStore } from '@/store/cart';
const HeaderCart = ({ type }: { type: 'top' | 'bottom' }) => {
  const total = useCartStore(selectTotalCount);
  return (
    <header
      className={`${styles.headerCart} ${
        type === 'top' ? styles.headerCart__top : styles.headerCart__bottom
      }`}
    >
      <span className={styles.headerCart__total}>138.85 zł</span>
      <Link href={'#'}>
        <Image src="/images/honne-cart.svg" alt="cart" width={20} height={20} />{' '}
        Корзина
        {total > 0 && <span>{total}</span>}
      </Link>
    </header>
  );
};

export default HeaderCart;
