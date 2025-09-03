'use client';
import { useField } from 'formik';
import styles from './RadioButtons.module.scss';

type Option = {
  value: string;
  label: string;
};

type RadioButtonsProps = {
  name: string;
  options: Option[];
};

export default function RadioButtons({ name, options }: RadioButtonsProps) {
  const [field, , helpers] = useField(name);

  return (
    <div className={styles.root}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => helpers.setValue(opt.value)}
          className={`${styles.button} ${
            field.value === opt.value ? styles.active : ''
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
