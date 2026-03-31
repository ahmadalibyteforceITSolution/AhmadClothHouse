import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('favorites')) || []
  }),
  getters: {
    isFavorite: (state) => (productId) => state.items.some(i => String(i.id) === String(productId)),
    totalFavorites: (state) => state.items.length
  },
  actions: {
    toggleFavorite(product) {
      const idx = this.items.findIndex(i => String(i.id) === String(product.id))
      if (idx > -1) {
        this.items.splice(idx, 1)
      } else {
        this.items.push(product)
      }
      this.sync()
    },
    sync() {
      localStorage.setItem('favorites', JSON.stringify(this.items))
    }
  }
})
