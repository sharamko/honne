'use client';
import Image from 'next/image';
import { Product } from '@/app/page';
import { useCartStore, selectQtyById } from '@/store/cart';
import styles from './ProductCard.module.scss';

const ProductCard = ({ p }: { p: Product }) => {
  const qty = useCartStore(selectQtyById(p.id));
  const inc = useCartStore((s) => s.inc);
  const dec = useCartStore((s) => s.dec);

  return (
    <div className={styles.popularCard}>
      <div className={styles.popularCard__img}>
        <Image src={p.img} alt={p.title} width={100} height={100} />
      </div>

      <div className={styles.popularCard__info}>
        <h3 className={styles.popularCard__product_title}>{p.title}</h3>
        <div className={styles.popularCard__price}>{p.price} zł</div>
      </div>

      <div className={styles.popularCard__qty}>
        <button
          type="button"
          className={`${styles.popularCard__qty_btn} ${styles.popularCard__qty_btn_minus}`}
          onClick={() => dec(p.id)}
          aria-label="minus"
        >
          <Image
            src="/images/honne-minus.svg"
            alt="minus"
            width={24}
            height={24}
          />
        </button>

        <span className={styles.popularCard__qty_count}>{qty}</span>

        <button
          type="button"
          className={`${styles.popularCard__qty_btn} ${styles.popularCard__qty_btn_plus}`}
          onClick={() => inc(p.id)}
          aria-label="plus"
        >
          <Image
            src="/images/honne-plus.svg"
            alt="plus"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
