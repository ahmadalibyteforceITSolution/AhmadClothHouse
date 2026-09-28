import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cart')) || [],
    isDrawerOpen: false,
    drawerStep: 'cart' // 'cart' | 'checkout' | 'success'
  }),
  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    formattedTotalPrice: (state) => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString()
  },
  actions: {
    openDrawer(step = 'cart') {
      this.drawerStep = step
      this.isDrawerOpen = true
    },
    openCheckout() {
      this.drawerStep = 'checkout'
      this.isDrawerOpen = true
    },
    closeDrawer() {
      this.isDrawerOpen = false
      setTimeout(() => {
        this.drawerStep = 'cart'
      }, 300)
    },
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen
    },
    addToCart(product, variant = null, quantity = 1) {
      const cartId = variant ? `${product.id}-${variant.color}-${variant.size}` : String(product.id)
      const existing = this.items.find(i => (i.cartId || String(i.id)) === cartId)
      if (existing) {
        existing.quantity += quantity
      } else {
        this.items.push({ 
          ...product, 
          cartId: cartId,
          selectedVariant: variant,
          cartImage: variant?.image || product.image,
          quantity: quantity 
        })
      }
      this.sync()
      this.isDrawerOpen = true // Auto-open right slide drawer on add to cart like Shopify

      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'AddToCart', {
          content_name: product.name,
          content_ids: [product.id || product._id],
          content_type: 'product',
          value: product.price,
          currency: 'PKR'
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
        if (qty <= 0) {
          this.removeFromCart(idOrCartId)
        } else {
          item.quantity = qty
          this.sync()
        }
      }
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