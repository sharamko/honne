import Popular from '@/sections/popular/Popular';
import Stories from '@/sections/stories/Stories';

export type Story = {
  id: number;
  title: string;
  img: string;
  button?: string;
};
export type Product = {
  id: number;
  title: string;
  img: string;
  price: string;
};

const stories: Story[] = [
  {
    id: 1,
    title: 'egzotyczna kropla',
    img: '/images/honne-story-1.png',
    button: 'Получить скидку',
  },
  {
    id: 2,
    title: 'nowy kod promocyjny',
    img: '/images/honne-story-2.png',
  },
  {
    id: 3,
    title: 'Światło w Filadelfii, nowe',
    img: '/images/honne-story-3.png',
    button: 'Акция',
  },
  {
    id: 4,
    title: 'pieczone szczęście',
    img: '/images/honne-story-4.png',
  },
  {
    id: 5,
    title: 'idealny obiad dla dwojga',
    img: '/images/honne-story-5.png',
    button: 'Получить скидку',
  },
];
const products: Product[] = [
  {
    id: 1,
    title: 'классическая филадельфия',
    img: '/images/honne-product-1.png',
    price: '40',
  },
  {
    id: 2,
    title: 'филадельфия с огурцом лайт',
    img: '/images/honne-product-2.png',
    price: '55',
  },
  {
    id: 3,
    title: 'хот-маки с окунем и сладким чили',
    img: '/images/honne-product-3.png',
    price: '24',
  },
  {
    id: 4,
    title: 'ролл с опаленным тунцом тартар',
    img: '/images/honne-product-4.png',
    price: '48',
  },
];

export default function Home() {
  return (
    <>
      <Stories data={stories} />
      <Popular data={products} />
    </>
  );
}
