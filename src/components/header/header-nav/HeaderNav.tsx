import styles from './HeaderNav.module.scss';

const HeaderNav = ({ data }: { data: string[] }) => {
  return (
    <nav className={styles.headerNav}>
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

export default HeaderNav;
