import Container from '../../container/container';
import styles from './SeoText.module.scss';

type SeoTextProps = {
  title: string;
  text: string;
};

const SeoText = ({ title, text }: SeoTextProps) => {
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </Container>
    </section>
  );
};

export default SeoText;
