import { ContactType } from '../Footer';
import styles from './FooterContacts.module.scss';

type FooterContactsProps = {
  label: string;
  url?: string;
  text?: string;
};

const FooterContacts = ({ data }: { data: FooterContactsProps[] }) => {
  return (
    <div className={styles.root}>
      <ul>
        {data.map((item: ContactType) => (
          <li key={item.label}>
            <span>{item.label}</span>
            {item.url ? (
              <a href={item.url}>{item.text}</a>
            ) : (
              <div>{item.text}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterContacts;
