'use client';
import Image from 'next/image';
import styles from './HeaderLang.module.scss';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const HeaderLang = () => {
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef<HTMLUListElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div ref={wrapperRef} className={styles.headerLang}>
      <div
        className={styles.headerLang__toggle}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image src="/images/honne-pl.svg" alt="lang" width={19} height={12} />{' '}
        PL{' '}
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.08301 0.833252L4.00015 3.50492L6.91634 0.833252"
            stroke="#4F4634"
            strokeWidth="1.16667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {isOpen && (
        <ul ref={listRef} className={styles.headerLang__list}>
          <li>
            <Link href="#" onClick={() => setIsOpen(false)}>
              EN
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setIsOpen(false)}>
              RU
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HeaderLang;
