'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React, { useState } from 'react';
import { Story } from '@/app/page';
import styles from './Stories.module.scss';
import Image from 'next/image';
import StoriesModal from '@/components/stories-modal/StoriesModal';

type PropsType = {
  data: Story[];
};

const Stories = ({ data }: PropsType) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className={styles.stories}>
        <Swiper
          slidesPerView="auto"
          spaceBetween={8}
          breakpoints={{ 768: { spaceBetween: 17 } }}
          className={styles.stories__slider}
        >
          {data.map((item, idx) => (
            <SwiperSlide className={styles.stories__slide} key={item.id}>
              <div
                className={styles.card}
                onClick={() => setOpenIndex(idx)}
                aria-label={item.title}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={274}
                  height={450}
                  priority
                />
                <span className={styles.stories__title}>{item.title}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {openIndex !== null && (
        <StoriesModal
          slides={data}
          initialIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
};

export default Stories;
