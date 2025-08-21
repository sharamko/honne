import DeliveryZoneIcon from '../../../components/svg-icons/DeliveryZone';
import styles from './DeliveryZone.module.scss';

const deliveryZoneData: { id: number; iconColor: string; text: string }[] = [
  {
    id: 1,
    iconColor: '#D67EE3',
    text: 'Strefa dostawy 1 Dostawa od 30-90 min / darmowa dostawa',
  },
  {
    id: 2,
    iconColor: '#E8D52E',
    text: 'Strefa dostawy 2 Dostawa od 60-120min / darmowa dostawa',
  },
  {
    id: 3,
    iconColor: '#318DFF',
    text: 'Strefa dostawy 3 Dostawa od 60-120 min / darmowa dostawa',
  },
  {
    id: 4,
    iconColor: '#1EE60E',
    text: 'Strefa dostawy 4 Dostawa od 90-150 min / darmowa dostawa',
  },
];

const DeliveryZone = () => {
  return (
    <ul className={styles.root}>
      {deliveryZoneData.map((item) => (
        <li key={item.id}>
          <div className={styles.icon} style={{ color: item.iconColor }}>
            <DeliveryZoneIcon />{' '}
          </div>
          <div className={styles.title}>{item.text}</div>
        </li>
      ))}
    </ul>
  );
};

export default DeliveryZone;
