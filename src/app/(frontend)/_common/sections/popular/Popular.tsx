'use client';
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperRef } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { NavigationOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Product } from '@/app/(frontend)/page';
import styles from './Popular.module.scss';
import ArrowIcon from '@/app/(frontend)/_common/components/svg-icons/ArrowIcon';
import { useCartStore } from '@/app/(frontend)/store/cart';
import Link from 'next/link';
import Container from '../../container/container';
import MinusIcon from '../../components/svg-icons/MinusIcon';
import PlusIcon from '../../components/svg-icons/PlusIcon';

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
    <section className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>популярные позиции</h2>
          <div className={styles.nav}>
            <button ref={prevRef} className={styles.prev} aria-label="Prev">
              <ArrowIcon />
            </button>
            <button ref={nextRef} className={styles.next} aria-label="Next">
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
          className={styles.slider}
        >
          {data.map((p) => (
            <SwiperSlide className={styles.slide} key={p.id}>
              <div className={styles.img}>
                <Image src={p.img} alt={p.title} width={100} height={100} />
              </div>
              <div className={styles.info}>
                <Link href="#" className={styles.product_title}>
                  {p.title}
                </Link>
                <div className={styles.price}>{p.price} zł</div>
              </div>
              <div className={styles.qty}>
                <button
                  type="button"
                  className={`${styles.qty_btn} ${styles.qty_btn_minus}`}
                  onClick={() => dec(p.id)}
                  aria-label="minus"
                >
                  <MinusIcon />
                </button>
                <span className={styles.qty_count}>{getQty(p.id)}</span>
                <button
                  type="button"
                  className={`${styles.qty_btn} ${styles.qty_btn_plus}`}
                  onClick={() => inc(p.id)}
                  aria-label="plus"
                >
                  <PlusIcon />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Popular;
