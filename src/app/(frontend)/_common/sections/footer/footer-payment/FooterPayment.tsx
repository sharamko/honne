import Image from 'next/image';
import Link from 'next/link';
import styles from './FooterPayment.module.scss';

const payments: { name: string; image: string }[] = [
  {
    name: 'visa',
    image: '/images/visa.svg',
  },
  {
    name: 'mastercard',
    image: '/images/mastercard.svg',
  },
  {
    name: 'google-pay',
    image: '/images/google-pay.svg',
  },
  {
    name: 'apple-pay',
    image: '/images/apple-pay.svg',
  },
];

const FooterPayment = () => {
  return (
    <div className={styles.root}>
      <span>методы оплаты:</span>
      <ul>
        {payments.map((item) => (
          <li key={item.name}>
            <Image src={item.image} alt={item.name} width={42} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterPayment;
