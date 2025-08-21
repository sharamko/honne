import Button from '../../../components/btn/Button';
import CloseIcon from '../../../components/svg-icons/CloseIcon';
import { Filter, SelectedMap } from '../Filters';
import FiltersGroup from '../filters-group/FiltersGroup';
import styles from './FiltersModal.module.scss';

type FiltersModalProps = {
  filters: Filter[];
  selected: SelectedMap;
  onToggle: (group: string, option: string) => void;
  onClear: () => void;
  onApply: () => void;
  close: () => void;
};

const FiltersModal = ({
  close,
  filters,
  selected,
  onToggle,
  onClear,
  onApply,
}: FiltersModalProps) => {
  return (
    <div className={styles.root} onClick={close}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>фильтры</h3>
          <button onClick={close}>
            <CloseIcon />
          </button>
        </div>

        <div className={styles.filters}>
          {filters.map((filter) => (
            <FiltersGroup
              key={filter.title}
              filter={filter}
              selected={selected[filter.title] || []}
              onToggle={onToggle}
            />
          ))}
        </div>

        <div className={styles.btns}>
          <Button className={styles.btn} variant="secondary" onClick={onClear}>
            Очистить
          </Button>
          <Button className={styles.btn} variant="primary" onClick={onApply}>
            Применить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FiltersModal;
