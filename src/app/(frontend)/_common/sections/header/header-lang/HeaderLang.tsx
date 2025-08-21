'use client';
import Image from 'next/image';
import styles from './HeaderLang.module.scss';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import ArrowDown from '../../../components/svg-icons/ArrowDown';

type HeaderLangProps = {
  variant: 'inHeader' | 'inBurger';
  active: 'PL' | 'EN' | 'UA' | 'RU';
};

const languages: { locale: string; name: string }[] = [
  {
    locale: 'PL',
    name: 'polska',
  },
  {
    locale: 'EN',
    name: 'english',
  },
  {
    locale: 'UA',
    name: 'українська',
  },
  {
    locale: 'RU',
    name: 'русский',
  },
];

const HeaderLang = ({ variant, active }: HeaderLangProps) => {
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
    <div ref={wrapperRef} className={`${styles.root} ${styles[variant]}`}>
      <div
        className={`${styles.toggle} ${isOpen ? styles.toggle__open : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image src="/images/honne-pl.svg" alt="lang" width={19} height={12} />{' '}
        {active} <ArrowDown isOpen={isOpen} />
      </div>
      {isOpen && (
        <ul ref={listRef} className={styles.list}>
          {languages.map(({ locale, name }) => (
            <li key={locale}>
              <Link
                href={`/${locale.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
              >
                <span>{name}</span>{' '}
                {locale === active && (
                  <Image
                    src={`/images/Check.svg`}
                    alt="active lang"
                    width={16}
                    height={16}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HeaderLang;
