import { Products } from '@/types/products';

export function productToCart(id: string, data: Products) {
  const cartItems = localStorage.getItem('cart-items');
  if (cartItems) {
    const cartItemsArray = JSON.parse(cartItems);
    const addedProductsIndex = cartItemsArray.findIndex(
      (item: Products) => item.id === id,
    );
    if (addedProductsIndex != -1) {
      cartItemsArray[addedProductsIndex].quantity += 1;
    } else {
      cartItemsArray.push({ ...data, quantity: 1 });
    }
    localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));
  } else {
    localStorage.setItem(
      'cart-items',
      JSON.stringify([
        {
          ...data,
          quantity: 1,
        },
      ]),
    );
  }
}
