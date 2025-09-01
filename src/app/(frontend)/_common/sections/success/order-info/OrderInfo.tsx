import { OrderDataType } from '@/app/(frontend)/(routes)/success/page';
import styles from './OrderInfo.module.scss';

type OrderInfoProps = {
  orderData: OrderDataType;
};

const OrderInfo = ({ orderData }: OrderInfoProps) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>информация о доставке</h2>
      <ul>
        <li>
          <span>адрес:</span> <span>{orderData?.address}</span>
        </li>
        <li>
          <span>время:</span> <span>{orderData?.time}</span>
        </li>
        <li>
          <span>способ оплаты:</span> <span>{orderData?.payment}</span>
        </li>
        <li>
          <span>сумма к оплате:</span> <span>{orderData?.total} zł</span>
        </li>
        <li>
          <span>кол-во людей:</span> <span>{orderData?.qtyPpl}</span>
        </li>
      </ul>
    </div>
  );
};

export default OrderInfo;
