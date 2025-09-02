import Image from 'next/image';
import styles from './CartListItems.module.scss';
import { CartItemType } from '@/app/(frontend)/(routes)/cart/page';
import QtyBtns from '../../../components/products-card/qty-btns/QtyBtns';

type CartListItemsProps = {
  cartItems: CartItemType[];
};

const CartListItems = ({ cartItems }: CartListItemsProps) => {
  return (
    <ul className={styles.root}>
      {cartItems?.map((item) => (
        <li className={styles.item} key={item.product.id}>
          <div className={styles.left}>
            <div className={styles.left__info}>
              <span className={styles.left__qty}>{item.product.qty}</span>
              <span className={styles.left__title}>{item.product.title}</span>
              <span className={styles.left__description}>
                {item.product.description}
              </span>
            </div>
            <Image
              className={styles.left__img}
              src={item.product.img}
              alt={item.product.title}
              width={100}
              height={100}
            />
          </div>
          <div className={styles.right}>
            <QtyBtns />
            <span className={styles.price}>{item.product.price} zł</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartListItems;
