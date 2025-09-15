import CloseIcon from '../svg-icons/CloseIcon';
import styles from './BackBtn.module.scss';

const BackBtn = () => {
  return (
    <button className={styles.root}>
      <CloseIcon />
      <span className={styles.text}>вернуться в меню</span>
    </button>
  );
};

export default BackBtn;
