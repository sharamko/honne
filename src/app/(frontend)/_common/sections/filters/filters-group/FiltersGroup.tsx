import Image from 'next/image';
import { Filter } from '../Filters';
import styles from './FiltersGroup.module.scss';

type Props = {
  filter: Filter;
  selected: string[];
  onToggle: (group: string, option: string) => void;
};

const FiltersGroup = ({ filter, selected, onToggle }: Props) => {
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>{filter.title}</h3>
      <ul className={styles.list}>
        {filter.options.map((item) => {
          const isActive = selected.includes(item.title);
          return (
            <li
              key={item.title}
              className={`${styles.item} ${
                isActive ? styles.item__active : ''
              }`}
              onClick={() => onToggle(filter.title, item.title)}
            >
              {item.img && (
                <Image src={item.img} alt={item.title} width={32} height={32} />
              )}
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FiltersGroup;
