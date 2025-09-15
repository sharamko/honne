import Checkout from '../../_common/sections/checkout/Checkout';
import ProductsSlider from '../../_common/sections/productsSlider/ProductsSlider';
import { Product, sets } from '../../page';
import CartList from '@/app/(frontend)/_common/sections/cart-list/CartList';

export type CartItemType = {
  product: Product;
  qty: number;
};

const cartItems: CartItemType[] = [
  {
    product: {
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
    qty: 1,
  },
  {
    product: {
      id: 2,
      title: 'калифорния с креветкой и огурцом',
      img: '/images/roll.png',
      price: '40',
      new: true,
      qty: '8 шт',
      url: '#',
      description:
        'креветка в темпуре / сливочный сыр со сладким соусом чили / сушеный жареный лук / сладкий соус чили',
    },
    qty: 2,
  },
];

export default function Cart() {
  return (
    <>
      <CartList cartItems={cartItems} />
      <ProductsSlider
        data={sets}
        title="возможно, вам так же будет интересно"
        variant="recommended"
      />
      <Checkout />
    </>
  );
}
