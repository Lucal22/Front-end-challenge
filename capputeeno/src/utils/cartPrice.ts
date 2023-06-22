import { Products } from '@/types/products';

export function cartPrice() {
  const cartItems = localStorage.getItem('cart-items');
  if (cartItems) {
    const cartItemsArray: [Products] = JSON.parse(cartItems) || null;
    if (cartItemsArray) {
      let price = 0;
      for (let i = 0; i < cartItemsArray.length; i++) {
        price += ((cartItemsArray[i].quantity as number) *
          cartItemsArray[i].price_in_cents) as number;
      }
      return price;
    }
  }
  return 0;
}
