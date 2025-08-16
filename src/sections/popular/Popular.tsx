'use client';
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperRef } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { NavigationOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Product } from '@/app/page';
import styles from './Popular.module.scss';
import ArrowIcon from '@/components/ArrowIcon';
import { useCartStore } from '@/store/cart';
import Link from 'next/link';

type QtyMap = Record<number, number> & Record<string, number>;

const Popular = ({ data }: { data: Product[] }) => {
  const inc = useCartStore((s) => s.inc);
  const dec = useCartStore((s) => s.dec);
  const qtyMap = useCartStore((s) => s.qty) as QtyMap;

  const getQty = (id: number) => {
    return qtyMap[id] ?? qtyMap[String(id)] ?? 0;
  };

  const swiperRef = useRef<SwiperRef | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (
      swiper &&
      swiper.params.navigation &&
      typeof swiper.params.navigation !== 'boolean' &&
      prevRef.current &&
      nextRef.current
    ) {
      const navigationParams: NavigationOptions = swiper.params.navigation;
      navigationParams.prevEl = prevRef.current;
      navigationParams.nextEl = nextRef.current;

      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <section className={styles.popular}>
      <div className={styles.popular__header}>
        <h2 className={styles.popular__title}>популярные позиции</h2>
        <div className={styles.popular__nav}>
          <button
            ref={prevRef}
            className={styles.popular__prev}
            aria-label="Prev"
          >
            <ArrowIcon />
          </button>
          <button
            ref={nextRef}
            className={styles.popular__next}
            aria-label="Next"
          >
            <ArrowIcon />
          </button>
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        slidesPerView="auto"
        spaceBetween={8}
        breakpoints={{ 768: { spaceBetween: 24 } }}
        navigation={{ prevEl: null, nextEl: null }}
        modules={[Navigation]}
        className={styles.popular__slider}
      >
        {data.map((p) => (
          <SwiperSlide className={styles.popular__slide} key={p.id}>
            <div className={styles.popular__img}>
              <Image src={p.img} alt={p.title} width={100} height={100} />
            </div>
            <div className={styles.popular__info}>
              <Link href="#" className={styles.popular__product_title}>
                {p.title}
              </Link>
              <div className={styles.popular__price}>{p.price} zł</div>
            </div>
            <div className={styles.popular__qty}>
              <button
                type="button"
                className={`${styles.popular__qty_btn} ${styles.popular__qty_btn_minus}`}
                onClick={() => dec(p.id)}
                aria-label="minus"
              >
                <Image
                  src="/images/honne-minus.svg"
                  alt="minus"
                  width={24}
                  height={24}
                />
              </button>
              <span className={styles.popular__qty_count}>{getQty(p.id)}</span>
              <button
                type="button"
                className={`${styles.popular__qty_btn} ${styles.popular__qty_btn_plus}`}
                onClick={() => inc(p.id)}
                aria-label="plus"
              >
                <Image
                  src="/images/honne-plus.svg"
                  alt="plus"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Popular;
