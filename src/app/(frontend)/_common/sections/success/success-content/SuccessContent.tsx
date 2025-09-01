import { OrderDataType } from '@/app/(frontend)/(routes)/success/page';
import styles from './SuccessContent.module.scss';
import OrderInfo from '../order-info/OrderInfo';

type SuccessSectionProps = {
  orderData: OrderDataType;
};

const SuccessContent = ({ orderData }: SuccessSectionProps) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        спасибо, ваш заказ
        <br /> успешно оформлен!
      </h1>
      <OrderInfo orderData={orderData} />
    </div>
  );
};

export default SuccessContent;
