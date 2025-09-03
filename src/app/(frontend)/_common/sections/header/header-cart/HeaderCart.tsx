'use client';
import Link from 'next/link';
import styles from './HeaderCart.module.scss';
import { selectTotalCount, useCartStore } from '@/app/(frontend)/store/cart';
import CartIcon from '../../../components/svg-icons/CartIcon';
const HeaderCart = ({ type }: { type: 'top' | 'bottom' }) => {
  const total = useCartStore(selectTotalCount);
  return (
    <div
      className={`${styles.root} ${
        type === 'top' ? styles.top : styles.bottom
      } ${total > 0 ? styles.root__active : ''}`}
    >
      {total > 0 && <span className={styles.total}>138.85 zł</span>}
      <Link href={'/cart'}>
        <CartIcon /> Корзина
        {total > 0 && <span>{total}</span>}
      </Link>
    </div>
  );
};

export default HeaderCart;
