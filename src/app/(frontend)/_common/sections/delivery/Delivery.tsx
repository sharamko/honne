import styles from './Delivery.module.scss';
import Container from '../../container/container';
import DeliveryZone from './delivery-zone/DeliveryZone';

const Delivery = () => {
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <h2 className={styles.title}>область доставки</h2>
        <div className={styles.map}></div>
        <div className={styles.zone}>
          <DeliveryZone />
        </div>
      </Container>
    </section>
  );
};

export default Delivery;
