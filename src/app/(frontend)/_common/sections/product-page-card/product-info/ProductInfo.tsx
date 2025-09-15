import { ProductInfoType } from '@/app/(frontend)/(routes)/product/page';
import styles from './ProductInfo.module.scss';

interface ProductInfoProps {
  data: ProductInfoType[];
}

const ProductInfo = ({ data }: ProductInfoProps) => {
  return (
    <ul className={styles.root}>
      {data.map((item) => (
        <li className={styles.item} key={item.name}>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.value}>{item.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default ProductInfo;
