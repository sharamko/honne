import styles from './CheckoutInfo.module.scss';

type CheckoutInfoProps = {
  total: number;
  discount: number;
};

const CheckoutInfo = ({ total, discount }: CheckoutInfoProps) => {
  const totalDiscount = total * (discount / 100);
  const totalSum = total - totalDiscount;
  return (
    <div className={styles.root}>
      <div className={styles.cart}>
        <span>товары:</span> <span>{total.toFixed(2)} zł</span>
      </div>
      <div className={styles.discount}>
        <span>скидка по промокоду:</span>
        <span>-{totalDiscount.toFixed(2)} zł</span>
      </div>
      <div className={styles.total}>
        <span>итого:</span>
        <span>{totalSum.toFixed(2)} zł</span>
      </div>
    </div>
  );
};

export default CheckoutInfo;
