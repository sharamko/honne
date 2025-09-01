'use client';

import styles from './Success.module.scss';
import Container from '../../container/container';
import { OrderDataType } from '@/app/(frontend)/(routes)/success/page';
import { useEffect } from 'react';
import SuccessContent from './success-content/SuccessContent';

type SuccessSectionProps = {
  orderData: OrderDataType;
};

const SuccessSection = ({ orderData }: SuccessSectionProps) => {
  useEffect(() => {
    document.body.style.backgroundColor = '#fff8ea';
    const header = document.querySelector('header');
    if (header) header.style.backgroundColor = '#fff8ea';

    return () => {
      document.body.style.backgroundColor = '#fff';
      const header = document.querySelector('header');
      if (header) header.style.backgroundColor = '#fff';
    };
  }, []);

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.idintifier}>#{orderData?.orderId}</div>
        <SuccessContent orderData={orderData} />
      </Container>
    </section>
  );
};

export default SuccessSection;
