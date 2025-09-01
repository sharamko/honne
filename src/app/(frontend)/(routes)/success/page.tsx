import SuccessSection from '@/app/(frontend)/_common/sections/success/Success';

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
  return <SuccessSection orderData={orderData} />;
}
