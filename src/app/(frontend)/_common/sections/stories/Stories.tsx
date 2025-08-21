'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React, { useState } from 'react';
import { Story } from '@/app/(frontend)/page';
import styles from './Stories.module.scss';
import Image from 'next/image';
import Container from '../../container/container';
import StoriesModal from './stories-modal/StoriesModal';

type PropsType = {
  data: Story[];
};

const Stories = ({ data }: PropsType) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className={styles.root}>
        <Container className={styles.container}>
          <Swiper
            slidesPerView="auto"
            spaceBetween={8}
            breakpoints={{ 768: { spaceBetween: 17 } }}
            className={styles.slider}
          >
            {data.map((item, idx) => (
              <SwiperSlide className={styles.slide} key={item.id}>
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
                  <span className={styles.title}>{item.title}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
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
