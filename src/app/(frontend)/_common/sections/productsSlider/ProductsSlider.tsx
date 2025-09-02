'use client';
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperRef } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { NavigationOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import { Product } from '@/app/(frontend)/page';
import styles from './ProductsSlider.module.scss';
import ArrowIcon from '@/app/(frontend)/_common/components/svg-icons/ArrowIcon';

import Container from '../../container/container';
import ProductsCard from '../../components/products-card/ProductsCard';
import ProductsCardPopular from './products-card-popular/ProductsCardPopular';

type ProductsSliderProps = {
  data: Product[];
  variant: 'popular' | 'recommended';
  title: string;
};

const ProductsSlider = ({ data, variant, title }: ProductsSliderProps) => {
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
          <h2 className={styles.title}>{title}</h2>
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
            <SwiperSlide
              className={`${styles.slide} ${styles[variant]}`}
              key={p.id}
            >
              {variant === 'popular' ? (
                <ProductsCardPopular data={p} />
              ) : (
                <ProductsCard variant="inCart" data={p} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default ProductsSlider;
