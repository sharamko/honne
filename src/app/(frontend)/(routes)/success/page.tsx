import SuccessSection from '@/app/(frontend)/_common/sections/success/Success';
import ChangeBg from '../../_common/components/change-bg/ChangeBg';

export type OrderDataType = {
  orderId: number;
  address: string;
  time: string;
  payment: string;
  total: string;
  qtyPpl: string;
};

const orderData: OrderDataType = {
  orderId: 402356,
  address: 'Warszawa, Krańcowa 24, кв 42, поверх 14',
  time: 'ближайшее время',
  payment: 'наличными курьеру',
  total: '150',
  qtyPpl: '2',
};

export default function Success() {
  return (
    <>
      <ChangeBg />
      <SuccessSection orderData={orderData} />;
    </>
  );
}
