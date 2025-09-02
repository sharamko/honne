import Image from 'next/image';
import styles from './ProductsCardPopular.module.scss';
import Link from 'next/link';
import MinusIcon from '../../../components/svg-icons/MinusIcon';
import PlusIcon from '../../../components/svg-icons/PlusIcon';
import { Product } from '@/app/(frontend)/page';

type ProductsCardPopularProps = {
  data: Product;
};

const ProductsCardPopular = ({ data }: ProductsCardPopularProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <Image src={data.img} alt={data.title} width={100} height={100} />
      </div>
      <div className={styles.info}>
        <Link href="#" className={styles.product_title}>
          {data.title}
        </Link>
        <div className={styles.price}>{data.price} zł</div>
      </div>
      <div className={styles.qty}>
        <button
          type="button"
          className={`${styles.qty_btn} ${styles.qty_btn_minus}`}
          aria-label="minus"
        >
          <MinusIcon />
        </button>
        <span className={styles.qty_count}>0</span>
        <button
          type="button"
          className={`${styles.qty_btn} ${styles.qty_btn_plus}`}
          aria-label="plus"
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default ProductsCardPopular;
