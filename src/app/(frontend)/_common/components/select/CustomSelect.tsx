'use client';
import { useField, useFormikContext } from 'formik';
import { useState, useRef, useEffect } from 'react';
import styles from './CustomSelect.module.scss';
import Image from 'next/image';

type DescriptionPosition = 'top-right' | 'bottom';

type Option = {
  value: string;
  label: string;
};

interface CustomSelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  descriptionPosition?: DescriptionPosition;
  options: Option[];
  className?: string;
  required?: boolean;
  disabled?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  label,
  options,
  className,
  disabled = false,
}) => {
  const [field, helpers] = useField(name);
  const { setFieldValue } = useFormikContext<any>();

  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const selected = options.find((o) => o.value === field.value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleClassName = [
    styles.selectToggle,
    isOpen ? styles.selectToggle__active : '',
  ].join(' ');

  return (
    <div ref={wrapperRef} className={`${styles.root} ${className || ''}`}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}

      <div
        className={toggleClassName}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
      >
        <span className={styles.value}>{selected ? selected.label : ''}</span>
        <Image
          style={{ transform: isOpen ? 'rotate(180deg)' : '' }}
          src="/images/arrow-select.svg"
          alt="arrow"
          width={24}
          height={24}
        />
      </div>

      {isOpen && (
        <ul className={styles.list}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={styles.item}
              onClick={() => {
                setFieldValue(name, opt.value);

                setIsOpen(false);
              }}
            >
              <span>{opt.label}</span>
              {opt.value === field.value && (
                <Image
                  src="/images/Check.svg"
                  alt="selected"
                  width={16}
                  height={16}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
