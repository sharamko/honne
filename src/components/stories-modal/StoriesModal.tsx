'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperRef } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import styles from './StoriesModal.module.scss';
import { Story } from '@/app/page';

type Props = {
  slides: Story[];
  initialIndex: number;
  onClose: () => void;
};

const DURATION_MS = 5000;

const StoriesModal = ({ slides, initialIndex, onClose }: Props) => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [progress, setProgress] = useState(0);
  const startedAtRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const tick = useCallback(() => {
    if (startedAtRef.current === null) return;
    const elapsed = Date.now() - startedAtRef.current;
    const p = Math.min(1, elapsed / DURATION_MS);
    setProgress(p);
    if (p >= 1) {
      const swiper = swiperRef.current?.swiper;
      if (swiper) swiper.slideNext();
      return;
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const restartTimer = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startedAtRef.current = Date.now();
    setProgress(0);
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const onSlideChange = useCallback(() => {
    const swiper = swiperRef.current?.swiper;
    const i = swiper ? swiper.realIndex : 0;
    setActiveIndex(i);
    restartTimer();
  }, [restartTimer]);

  const handleClose = useCallback(() => onClose(), [onClose]);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') swiperRef.current?.swiper?.slideNext();
      if (e.key === 'ArrowLeft') swiperRef.current?.swiper?.slidePrev();
    },
    [handleClose]
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    restartTimer();
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('keydown', handleKey);
    };
  }, [handleKey, restartTimer]);

  const timers = useMemo(
    () =>
      slides.map((_, i) =>
        i < activeIndex ? 1 : i > activeIndex ? 0 : progress
      ),
    [slides, activeIndex, progress]
  );

  return (
    <div
      className={styles.storiesModal}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={styles.storiesModal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.storiesModal__stage}>
          <div className={styles.storiesModal__frame}>
            <button
              className={styles.storiesModal__close}
              onClick={handleClose}
            >
              <Image
                src="/images/honne-x.svg"
                alt="close"
                width={11}
                height={11}
              />
            </button>
            <div className={styles.storiesModal__timer}>
              <div className={styles.storiesModal__timer_track}>
                <span
                  className={styles.storiesModal__timer_progress}
                  style={{ transform: `scaleX(${timers[activeIndex] ?? 0})` }}
                />
              </div>
            </div>

            <Swiper
              ref={swiperRef}
              initialSlide={initialIndex}
              slidesPerView={1}
              loop={true}
              onSlideChange={onSlideChange}
              className={styles.storiesModal__slider}
            >
              {slides?.map((s) => (
                <SwiperSlide className={styles.storiesModal__slide} key={s.id}>
                  <div className={styles.storiesModal__slide_mediaWrap}>
                    <Image
                      className={styles.storiesModal__slide_media}
                      src={s.img}
                      alt={s.title}
                      width={318}
                      height={566}
                      priority
                    />
                  </div>
                  <div className={styles.storiesModal__slide_caption}>
                    <h3 className={styles.storiesModal__slide_title}>
                      {s.title}
                    </h3>
                    {s?.button && (
                      <button className={styles.storiesModal__slide_cta}>
                        {s.button}
                      </button>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.storiesModal__btns}>
            <button
              className={`${styles.storiesModal__arrow} ${styles.storiesModal__arrow_prev}`}
              onClick={() => swiperRef.current?.swiper?.slidePrev()}
            >
              <Image
                width={18}
                height={18}
                src="/images/honne-arrow.svg"
                alt="arrow"
              />
            </button>

            <button
              className={`${styles.storiesModal__arrow} ${styles.storiesModal__arrow_next}`}
              onClick={() => swiperRef.current?.swiper?.slideNext()}
            >
              <Image
                width={18}
                height={18}
                src="/images/honne-arrow.svg"
                alt="arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesModal;
