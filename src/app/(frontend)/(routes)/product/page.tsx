import ChangeBg from '../../_common/components/change-bg/ChangeBg';
import ProductPageCard from '../../_common/sections/product-page-card/ProductPageCard';
import Products from '../../_common/sections/products/Products';
import SeoText from '../../_common/sections/seo-text/SeoText';
import { drinks } from '../../page';

export type ProductInfoType = {
  name: string;
  value: string;
};

export type ProductType = {
  title: string;
  img: string;
  price: string;
  info: ProductInfoType[];
  new?: boolean;
  discount?: string;
  vegan?: boolean;
};

const product: ProductType = {
  title: 'бонито с копченым лососем и такуаном',
  img: '/images/roll.png',
  price: '49',
  new: true,
  info: [
    {
      name: 'состав:',
      value:
        'креветка в темпуре / сливочный сыр со сладким соусом чили / сушеный жареный лук / сладкий соус чили',
    },
    {
      name: 'аллергены:',
      value: 'рыба, морепродукты, мидии',
    },
    {
      name: 'количество:',
      value: '8 шт',
    },
    {
      name: 'вес:',
      value: '400 г',
    },
  ],
};

export default function Product() {
  return (
    <>
      <ChangeBg />
      <ProductPageCard data={product} />
      <Products
        variant="drinks"
        title="не забудьте про напитки :)"
        data={drinks}
      />
      <SeoText
        title="текст для SEO"
        text="Основная камера iPhone 16e представлена 48-мегапиксельным модулем Fusion, способным делать фотографии разрешением 24 и 48 МП. Также в распоряжении пользователя – 12-мегапиксельный 2x телеобъектив для четкого оптического приближения. В условиях недостаточного освещения помогают технологии Photonic Engine, Deep Fusion и Smart HDR 5, благодаря которым снимки получаются максимально детализированными. Фронтальная 12-мегапиксельная камера с автофокусом и ночным режимом подходит как для селфи, так и для видеоконференций в высоком разрешении."
      />
    </>
  );
}
