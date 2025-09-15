'use client';
import { useEffect } from 'react';

type Props = {
  color?: string;
};

const ChangeBg = ({ color = '#fff8ea' }: Props) => {
  useEffect(() => {
    document.body.style.backgroundColor = color;
    const header = document.querySelector('header');
    if (header) header.style.backgroundColor = color;

    return () => {
      document.body.style.backgroundColor = '#fff';
      const header = document.querySelector('header');
      if (header) header.style.backgroundColor = '#fff';
    };
  }, []);

  return null;
};

export default ChangeBg;
