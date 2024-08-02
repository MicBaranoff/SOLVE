import { defineStore } from 'pinia'

interface CartState {
  cart: [],
}

export const useCart = defineStore('cart', {
  state: (): CartState => ({
    cart: [],
  }),

  actions: {
    addToCart(item: object) {
      const cartItemIndex = this.cart.findIndex((pr: object) => pr?.id === item?.id);
      const cartItem = this.cart.find((pr: object) => pr?.id === item?.id);
      const inCart = cartItemIndex !== -1;

      if (!inCart) {
        this.cart.push({
          ...item,
          quantity: 1,
        });
      } else {
        this.cart.splice(cartItemIndex, 1, {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        })
      }

      console.log(this.cart);
    }
  }
})
