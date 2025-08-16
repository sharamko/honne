import styles from './HeaderCategories.module.scss';

const HeaderCategories = ({ data }: { data: string[] }) => {
  return (
    <nav className={styles.headerCategories}>
      <ul>
        {data.map((item) => (
          <li key={item}>
            <a href={'#'}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderCategories;
