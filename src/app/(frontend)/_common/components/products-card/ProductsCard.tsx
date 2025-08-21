import { Product } from '@/app/(frontend)/page';
import styles from './ProductsCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import QtyBtns from './qty-btns/QtyBtns';

type ProductsCardProps = { data: Product; variant?: string };

const ProductsCard = ({ data, variant }: ProductsCardProps) => {
  return (
    <div className={`${styles.root} ${variant && styles[variant]}`}>
      <Image
        className={styles.bg}
        src="/images/card-bg.png"
        alt={data.title}
        width={464}
        height={590}
      />
      <Link className={styles.link} href={data.url || '#'}>
        <div className={styles.badge}>
          {data?.new && <span className={styles.new}>new</span>}
          {data?.discount && (
            <span className={styles.discount}>-{data.discount}%</span>
          )}
          {data?.vegan && <span className={styles.vegan}>🌿vegan</span>}
        </div>
        {data?.img && (
          <Image
            className={styles.img}
            src={data.img}
            alt={data.title}
            width={167}
            height={166}
          />
        )}
        {data?.qty && <span className={styles.qty}>{data?.qty}</span>}
        {data?.title && <span className={styles.title}>{data.title}</span>}
        {data?.description && (
          <span className={styles.description}>{data?.description}</span>
        )}
        {data?.price && <span className={styles.price}>{data.price} zł</span>}
      </Link>
      <QtyBtns />
    </div>
  );
};

export default ProductsCard;
