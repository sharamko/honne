import styles from './CheckoutSection.module.scss';

type CheckoutSectionProps = {
  title: string;
  children: React.ReactNode;
};

const CheckoutSection = ({ title, children }: CheckoutSectionProps) => {
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.group}>{children}</div>
    </div>
  );
};

export default CheckoutSection;
