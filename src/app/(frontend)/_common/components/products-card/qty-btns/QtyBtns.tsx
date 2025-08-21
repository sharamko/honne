import Image from 'next/image';
import styles from './QtyBtns.module.scss';
import MinusIcon from '../../svg-icons/MinusIcon';
import PlusIcon from '../../svg-icons/PlusIcon';

const QtyBtns = () => {
  return (
    <div className={styles.root}>
      <button
        type="button"
        className={`${styles.btn} ${styles.btn_minus}`}
        aria-label="minus"
      >
        <MinusIcon />
      </button>
      <span className={styles.count}>0</span>
      <button
        type="button"
        className={`${styles.btn} ${styles.btn_plus}`}
        aria-label="plus"
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default QtyBtns;
