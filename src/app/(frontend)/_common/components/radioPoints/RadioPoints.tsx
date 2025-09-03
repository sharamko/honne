'use client';
import { useField } from 'formik';
import styles from './RadioPoints.module.scss';

type Option = {
  value: string;
  label: string;
};

type RadioPointsProps = {
  name: string;
  options: Option[];
};

export default function RadioPoints({ name, options }: RadioPointsProps) {
  const [field, , helpers] = useField(name);

  return (
    <div className={styles.root}>
      {options.map((opt) => (
        <label key={opt.value} className={styles.label}>
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={field.value === opt.value}
            onChange={() => helpers.setValue(opt.value)}
            className={styles.input}
          />
          <span className={styles.text}>{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
