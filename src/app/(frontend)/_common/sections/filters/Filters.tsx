'use client';
import styles from './Filters.module.scss';
import Container from '../../container/container';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import FiltersModal from './filters-modal/FiltersModal';
import FiltersGroup from './filters-group/FiltersGroup';

type FilterOptionType = { img?: string; title: string };
export type Filter = { title: string; options: FilterOptionType[] };

const filters1: Filter[] = [
  {
    title: 'фильтры',
    options: [
      { title: 'новинки' },
      { title: 'топ продаж' },
      { title: 'для двоих' },
      { title: 'до 30 zł' },
      { title: '14 февраля' },
    ],
  },
];
const filters2: Filter[] = [
  {
    title: 'предпочтения:',
    options: [
      { title: 'острое', img: '/images/filter-1.png' },
      { title: 'вегетарианское', img: '/images/filter-2.png' },
    ],
  },
];
const filters3: Filter[] = [
  {
    title: 'ингредиенты:',
    options: [
      { title: 'łosoś', img: '/images/filter-3.png' },
      { title: 'tuńczyk', img: '/images/filter-4.png' },
      { title: 'trądzik', img: '/images/filter-5.png' },
      { title: 'awokado', img: '/images/filter-6.png' },
      { title: 'krewetka', img: '/images/filter-7.png' },
    ],
  },
];

const filters: Filter[] = [...filters1, ...filters2, ...filters3];

export type SelectedMap = Record<string, string[]>;

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SelectedMap>({});

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const toggleOption = (group: string, option: string) => {
    setSelected((prev) => {
      const prevArr = prev[group] || [];
      const exists = prevArr.includes(option);
      const nextArr = exists
        ? prevArr.filter((v) => v !== option)
        : [...prevArr, option];
      const next = { ...prev, [group]: nextArr };
      if (nextArr.length === 0) delete next[group];
      return next;
    });
  };

  const clearAll = () => setSelected({});
  const applyAndClose = () => setIsOpen(false);

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <h2 className={styles.title}>наше меню</h2>
        <button onClick={() => setIsOpen(true)} className={styles.btn}>
          <Image
            src="/images/filter.svg"
            alt="filters"
            width={24}
            height={24}
          />
          дополнительные фильтры
        </button>
        <div className={styles.groups}>
          {filters.map((filter) => (
            <FiltersGroup
              key={filter.title}
              filter={filter}
              selected={selected[filter.title] || []}
              onToggle={toggleOption}
            />
          ))}
        </div>
      </Container>

      {isOpen && (
        <FiltersModal
          filters={filters}
          selected={selected}
          onToggle={toggleOption}
          onClear={clearAll}
          onApply={applyAndClose}
          close={() => setIsOpen(false)}
        />
      )}
    </section>
  );
};

export default Filters;
