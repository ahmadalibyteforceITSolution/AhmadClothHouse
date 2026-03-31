import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cart')) || []
  }),
  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2),
  },
  actions: {
    addToCart(product, variant = null) {
      const cartId = variant ? `${product.id}-${variant.color}-${variant.size}` : String(product.id)
      const existing = this.items.find(i => (i.cartId || String(i.id)) === cartId)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ 
          ...product, 
          cartId: cartId,
          selectedVariant: variant,
          cartImage: variant?.image || product.image,
          quantity: 1 
        })
      }
      this.sync()

      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'AddToCart', {
          content_name: product.name,
          content_ids: [product.id],
          content_type: 'product',
          value: product.price,
          currency: 'USD'
        })
      }
    },
    removeFromCart(idOrCartId) {
      this.items = this.items.filter(i => (i.cartId || String(i.id)) !== String(idOrCartId))
      this.sync()
    },
    updateQuantity(idOrCartId, qty) {
      const item = this.items.find(i => (i.cartId || String(i.id)) === String(idOrCartId))
      if (item) {
        item.quantity = Math.max(1, qty)
      }
      this.sync()
    },
    clearCart() {
      this.items = []
      this.sync()
    },
    sync() {
      localStorage.setItem('cart', JSON.stringify(this.items))
    }
  }
})