import { defineStore } from 'pinia'

type Item = {
  id: string,
  quantity: number,
  price: number,
}


interface CartState {
  cart: Item[]
}

export const useCart = defineStore('cart', {
  state: (): CartState => ({
    cart: [],
  }),

  actions: {
    addToCart(item: Item) {
      const cartItemIndex = this.cart.findIndex((pr: Item) => pr?.id === item?.id);
      const cartItem = this.cart.find((pr: Item) => pr?.id === item?.id);
      const inCart = cartItemIndex !== -1;

      if (!inCart) {
        this.cart.push({
          ...item,
          quantity: 1,
        });
      } else {
        this.cart.splice(cartItemIndex, 1, {
          ...item,
          quantity: (cartItem?.quantity || 0) + 1,
        })
      }
    },
    removeFromCart(itemID: string) {
      const cartItemIndex = this.cart.findIndex((pr: Item) => pr?.id === itemID);

      this.cart.splice(cartItemIndex, 1)
    }
  },

  getters: {
    getCart: (state) => {
      return state.cart;
    },
    getCartTotalPrice: (state) => {
      return state.cart.reduce(
          (accumulator, product: Item) => accumulator + (product.price * product.quantity),
          0,
      ) || 0;
    },
    getProductCartCount: (state) => {
      return (productID: string) => state.cart.find((prod) => prod.id === productID)?.quantity || 0
    },
    getCartLength(state): number {
      return state.cart.length || 0
    },
  }
})
