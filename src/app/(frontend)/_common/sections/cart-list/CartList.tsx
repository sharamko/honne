'use client';
import styles from './CartList.module.scss';
import Container from '../../container/container';
import { CartItemType } from '@/app/(frontend)/(routes)/cart/page';
import CartListItems from './cart-list-items/CartListItems';
import Button from '../../components/btn/Button';

type CartListProps = {
  cartItems: CartItemType[];
};

const CartList = ({ cartItems }: CartListProps) => {
  const total = cartItems.reduce(
    (acc, item) => acc + +item.product.price * +item.qty,
    0
  );
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.top}>
          <h1 className={styles.title}>оформление заказа</h1>
          <span>минимальная сумма заказа для доставки 70 zł</span>
        </div>
        <CartListItems cartItems={cartItems} />
        <div className={styles.bottom}>
          <div className={styles.total}>
            <span>итого:</span> <b>{total} zł</b>
          </div>
          <Button
            className={styles.btn}
            href={'/cart/#checkout'}
            variant="tertiary"
          >
            оформить заказ
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CartList;
