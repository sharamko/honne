import { useField } from 'formik';
import React from 'react';
import styles from './FormikInput.module.scss';

type DescriptionPosition = 'top-right' | 'bottom';

interface FormikInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  descriptionPosition?: DescriptionPosition;
  type?: string;
  as?: 'input' | 'textarea';
  rows?: number;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  promo?: 'ok' | 'error';
}

const FormikInput: React.FC<FormikInputProps> = ({
  name,
  label,
  placeholder,
  description,
  descriptionPosition = 'bottom',
  type = 'text',
  as = 'input',
  rows = 4,
  className,
  required = false,
  disabled = false,
  promo,
}) => {
  const [field, meta] = useField(name);

  const hasError = meta.touched && !!meta.error;
  const isFilled = !!field.value && !hasError;

  const inputClassName = [
    as === 'textarea' ? styles.textarea : styles.input,
    hasError ? styles.errorBorder : '',
    isFilled ? styles.filled : '',
    name === 'house' || 'flat' || 'entrance' || 'floor'
      ? styles.input__small
      : '',
  ].join(' ');

  const InputComponent =
    as === 'textarea' ? (
      <textarea
        {...field}
        id={name}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        className={inputClassName}
      />
    ) : promo ? (
      <div
        className={`${styles.promo} ${
          promo === 'ok' ? styles.promo__ok : styles.promo__error
        }`}
      >
        <input
          {...field}
          id={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={inputClassName}
        />
      </div>
    ) : (
      <input
        {...field}
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClassName}
      />
    );

  return (
    <div className={`${styles.root} ${className || ''}`}>
      {label && (
        <div className={styles.labelRow}>
          <label htmlFor={name} className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>

          {description && descriptionPosition === 'top-right' && (
            <div className={styles.descriptionInline}>{description}</div>
          )}
        </div>
      )}

      {InputComponent}

      {description &&
        (descriptionPosition === 'bottom' ? (
          <div className={styles.description}>{description}</div>
        ) : descriptionPosition === 'top-right' ? (
          <div className={styles.descriptionMobile}>{description}</div>
        ) : null)}

      {hasError && <div className={styles.error}>{meta.error}</div>}
    </div>
  );
};

export default FormikInput;
