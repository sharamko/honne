import Popular from '@/app/(frontend)/_common/sections/popular/Popular';
import Stories from '@/app/(frontend)/_common/sections/stories/Stories';
import Delivery from '@/app/(frontend)/_common/sections/delivery/Delivery';
import Filters from '@/app/(frontend)/_common/sections/filters/Filters';
import Products from '@/app/(frontend)/_common/sections/products/Products';

export type Story = {
  id: number;
  title: string;
  img: string;
  button?: string;
  href?: string;
};
export type Product = {
  id: number;
  title: string;
  description?: string;
  qty?: string;
  img: string;
  price: string;
  new?: boolean;
  discount?: string;
  vegan?: boolean;
  url?: string;
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
    href: '#',
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

const rolls: Product[] = [
  {
    id: 1,
    title: 'калифорния с креветкой и огурцом',
    img: '/images/roll.png',
    price: '55',
    new: true,
    qty: '8 шт',
    url: '#',
    description:
      'креветка в темпуре / сливочный сыр со сладким соусом чили / сушеный жареный лук / сладкий соус чили',
  },
  {
    id: 2,
    title: 'калифорния с креветкой и огурцом',
    img: '/images/roll.png',
    price: '43',
    discount: '15',
    new: true,
    vegan: true,
    qty: '8 шт',
    url: '#',
    description:
      'креветка в темпуре / сливочный сыр со сладким соусом чили / сушеный жареный лук / сладкий соус чили',
  },
  {
    id: 3,
    title: 'калифорния с креветкой и огурцом',
    img: '/images/roll.png',
    price: '55',
    vegan: true,
    qty: '8 шт',
    url: '#',
    description:
      'креветка в темпуре / сливочный сыр со сладким соусом чили / сушеный жареный лук / сладкий соус чили',
  },
  {
    id: 4,
    title: 'калифорния с креветкой и огурцом',
    img: '/images/roll.png',
    price: '66',
    new: true,
    qty: '8 шт',
    url: '#',
    description:
      'креветка в темпуре / сливочный сыр со сладким соусом чили / сушеный жареный лук / сладкий соус чили',
  },
  {
    id: 5,
    title: 'калифорния с креветкой и огурцом',
    img: '/images/roll.png',
    price: '43',
    vegan: true,
    qty: '8 шт',
    url: '#',
    description:
      'креветка в темпуре / сливочный сыр со сладким соусом чили / сушеный жареный лук / сладкий соус чили',
  },
  {
    id: 6,
    title: 'калифорния с креветкой и огурцом',
    img: '/images/roll.png',
    price: '65',
    discount: '15',
    qty: '8 шт',
    url: '#',
    description:
      'креветка в темпуре / сливочный сыр со сладким соусом чили / сушеный жареный лук / сладкий соус чили',
  },
  {
    id: 7,
    title: 'калифорния с креветкой и огурцом',
    img: '/images/roll.png',
    price: '55',

    qty: '8 шт',
    url: '#',
    description:
      'креветка в темпуре / сливочный сыр со сладким соусом чили / сушеный жареный лук / сладкий соус чили',
  },
  {
    id: 8,
    title: 'калифорния с креветкой и огурцом',
    img: '/images/roll.png',
    price: '55',

    qty: '8 шт',
    url: '#',
    description:
      'креветка в темпуре / сливочный сыр со сладким соусом чили / сушеный жареный лук / сладкий соус чили',
  },
];
const sets: Product[] = [
  {
    id: 1,
    title: 'сет №5',
    img: '/images/set.png',
    price: '55',
    new: true,
    qty: '48 шт',
    url: '#',
    description:
      'копченый лосось / свежий огурец / сливочный сыр / такуан / стружка тунца',
  },
  {
    id: 2,
    title: 'сет футомаки темпура',
    img: '/images/set.png',
    price: '43',
    discount: '15',
    new: true,
    vegan: true,
    qty: '48 шт',
    url: '#',
    description:
      'креветка в темпуре / сливочный сыр со сладким соусом чили / сушеный жареный лук / сладкий соус чили',
  },
  {
    id: 3,
    title: 'сет темпура',
    img: '/images/set.png',
    price: '55',
    vegan: true,
    qty: '64 шт',
    url: '#',
    description:
      'креветка в темпуре / сливочный сыр / пикантный соус майами / свежий огурец / сыр чеддер / паприка',
  },
  {
    id: 4,
    title: 'сет хосомаки',
    img: '/images/set.png',
    price: '66',
    new: true,
    qty: '8 шт',
    url: '#',
    description:
      'угорь / копченый лосось / сливочный сыр / японский омлет / салат айсберг / соус унаги / черный кунжут',
  },
];
const appetizers: Product[] = [
  {
    id: 1,
    title: 'суши банко',
    img: '/images/appetizer.png',
    price: '13',
    new: true,
    qty: '1 шт',
    url: '#',
    description: 'тунец / рис',
  },
  {
    id: 2,
    title: 'суши банко роял с свежим угрем',
    img: '/images/appetizer.png',
    price: '43',
    discount: '49',
    new: true,
    vegan: true,
    qty: '1 шт',
    url: '#',
    description: 'суши банко роял с свежим угрем',
  },
  {
    id: 3,
    title: 'суши ляни',
    img: '/images/appetizer.png',
    price: '38',
    vegan: true,
    qty: '1 шт',
    url: '#',
    description: 'рис / нори / красная икра',
  },
  {
    id: 4,
    title: 'суши с креветкой',
    img: '/images/appetizer.png',
    price: '23',
    new: true,
    qty: '2 шт',
    url: '#',
    description: 'рис / креветка',
  },
];
const bakeds: Product[] = [
  {
    id: 1,
    title: 'классическая филадельфия',
    img: '/images/baked.png',
    price: '55',
    new: true,
    qty: '8 шт',
    url: '#',
    description:
      'копченый лосось / свежий огурец / сливочный сыр / такуан / стружка тунца',
  },
  {
    id: 2,
    title: 'калифорния с креветкой и огурцом',
    img: '/images/baked.png',
    price: '49',
    discount: '25',
    new: true,
    vegan: true,
    qty: '8 шт',
    url: '#',
    description:
      'креветка в темпуре / сливочный сыр со сладким соусом чили / сушеный жареный лук / сладкий соус чили',
  },
  {
    id: 3,
    title: 'бонито с копченым лососем и такуаном',
    img: '/images/baked.png',
    price: '38',
    vegan: true,
    qty: '8 шт',
    url: '#',
    description:
      'креветка в темпуре / сливочный сыр / пикантный соус майами / свежий огурец / сыр чеддер / паприка',
  },
];
const desserts: Product[] = [
  {
    id: 1,
    title: 'сладкий ролл с клубникой и сливочной начинкой',
    img: '/images/desserts.png',
    price: '55',
    new: true,
    qty: '8 шт',
    url: '#',
    description:
      'десерт на основе свежих сливок и нежного сыра, с легкой ноткой лимона и ароматом ванили',
  },
  {
    id: 2,
    title:
      'десерт из воздушного белого шоколада и насыщенного горького шоколада в сочетании с нежным бисквитом',
    img: '/images/desserts.png',
    price: '55',
    discount: '25',
    new: true,
    vegan: true,
    qty: '100 г',
    url: '#',
    description:
      'креветка в темпуре / сливочный сыр со сладким соусом чили / сушеный жареный лук / сладкий соус чили',
  },
  {
    id: 3,
    title: 'сладкий ролл с клубникой и сливочной начинкой',
    img: '/images/desserts.png',
    price: '55',
    vegan: true,
    qty: '8 шт',
    url: '#',
    description:
      'десерт на основе свежих сливок и нежного сыра, с легкой ноткой лимона и ароматом ванили',
  },
];
const drinks: Product[] = [
  {
    id: 1,
    title: 'sprite',
    img: '/images/drinks.png',
    price: '13',
    new: true,
    qty: '0,33 л.',
    url: '#',
  },
  {
    id: 2,
    title: 'вода без газа',
    img: '/images/drinks.png',
    price: '5',
    discount: '10',
    qty: '1 л.',
    url: '#',
  },
  {
    id: 3,
    title: 'сок яблочный',
    img: '/images/drinks.png',
    price: '12',
    vegan: true,
    qty: '0,33 л.',
    url: '#',
  },
  {
    id: 4,
    title: 'fanta',
    img: '/images/drinks.png',
    price: '13',
    qty: '0,33 л.',
    url: '#',
  },
  {
    id: 5,
    title: 'sprite',
    img: '/images/drinks.png',
    price: '13',
    new: true,
    qty: '0,33 л.',
    url: '#',
  },
  {
    id: 6,
    title: 'вода без газа',
    img: '/images/drinks.png',
    price: '5',
    discount: '10',
    qty: '1 л.',
    url: '#',
  },
  {
    id: 7,
    title: 'сок яблочный',
    img: '/images/drinks.png',
    price: '12',
    vegan: true,
    qty: '0,33 л.',
    url: '#',
  },
  {
    id: 8,
    title: 'fanta',
    img: '/images/drinks.png',
    price: '13',
    qty: '0,33 л.',
    url: '#',
  },
];
const sauces: Product[] = [
  {
    id: 1,
    title: 'острый соус кимчи',
    img: '/images/sauces.png',
    price: '13',
    new: true,
    qty: '25 г.',
    url: '#',
  },
  {
    id: 2,
    title: 'ореховый соус',
    img: '/images/sauces.png',
    price: '49',
    discount: '10',
    qty: '25 г.',
    url: '#',
  },
  {
    id: 3,
    title: 'соус терияки',
    img: '/images/sauces.png',
    price: '12',
    vegan: true,
    qty: '25 г.',
    url: '#',
  },
  {
    id: 4,
    title: 'соевый соус',
    img: '/images/sauces.png',
    price: '13',
    qty: '25 г.',
    url: '#',
  },
];
export default function Home() {
  return (
    <>
      <Stories data={stories} />
      <Popular data={products} />
      <Filters />
      <Products title="Роллы" data={rolls} />
      <Products title="Сеты" data={sets} />
      <Products title="Закуски" data={appetizers} />
      <Products title="запеченные" data={bakeds} />
      <Products variant="desserts" title="десерты" data={desserts} />
      <Products variant="drinks" title="напитки" data={drinks} />
      <Products title="соусы" data={sauces} />
      <Delivery />
    </>
  );
}
