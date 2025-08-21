import styles from './Products.module.scss';
import Container from '../../container/container';
import { Product } from '@/app/(frontend)/page';
import ProductsCard from '../../components/products-card/ProductsCard';

type ProductsProps = {
  data: Product[];
  title: string;
  variant?: string;
};

const Products = ({ data, title, variant }: ProductsProps) => {
  return (
    <section
      id={title.toLowerCase()}
      className={`${styles.root} ${variant ? styles[variant] : ''}`}
    >
      <Container className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.list}>
          {data.map((item) => (
            <li key={item.id} className={styles.item}>
              <ProductsCard variant={variant} data={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Products;
