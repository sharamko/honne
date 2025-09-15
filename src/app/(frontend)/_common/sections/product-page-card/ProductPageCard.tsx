import Image from 'next/image';
import Container from '../../container/container';
import styles from './ProductPageCard.module.scss';
import BackBtn from '../../components/back-btn/BackBtn';
import { ProductType } from '@/app/(frontend)/(routes)/product/page';
import QtyBtns from '../../components/products-card/qty-btns/QtyBtns';
import ProductInfo from './product-info/ProductInfo';

interface ProductPageCardProps {
  data: ProductType;
}

const ProductPageCard = ({ data }: ProductPageCardProps) => {
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.topRow}>
          <BackBtn />
        </div>
        <div className={styles.content}>
          <div className={styles.img}>
            <div className={styles.badge}>
              {data?.new && <span className={styles.new}>new</span>}
              {data?.discount && (
                <span className={styles.discount}>-{data.discount}%</span>
              )}
              {data?.vegan && <span className={styles.vegan}>🌿vegan</span>}
            </div>
            <Image
              src={data.img}
              alt="product page card"
              width={436}
              height={436}
            />
          </div>
          <div className={styles.info}>
            <h1 className={styles.title}>{data.title}</h1>
            <div className={styles.priceRow}>
              <span className={styles.price}>{data.price} zł</span>
              <QtyBtns />
            </div>
            <ProductInfo data={data.info} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductPageCard;
