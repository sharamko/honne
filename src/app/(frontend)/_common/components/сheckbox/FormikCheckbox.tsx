import { useField } from 'formik';
import React from 'react';
import styles from './FormikCheckbox.module.scss';

interface FormikCheckboxProps {
  name: string;
  label: string;
  className?: string;
}

const FormikCheckbox: React.FC<FormikCheckboxProps> = ({
  name,
  label,
  className,
}) => {
  const [field, meta, helpers] = useField({ name, type: 'checkbox' });

  return (
    <div className={`${styles.wrapper} ${className || ''}`}>
      <input
        id={name}
        type="checkbox"
        checked={!!field.value}
        onChange={() => helpers.setValue(!field.value)}
        className={styles.input}
      />
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      {meta.touched && meta.error && (
        <div className={styles.error}>{meta.error}</div>
      )}
    </div>
  );
};

export default FormikCheckbox;
