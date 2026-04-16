<template>
  <div class="min-h-screen bg-[#fafaf8] transition-colors duration-700 dark:bg-[#050505] pb-32">
    
    <!-- SEO Heading (Visually Hidden) -->
    <h1 class="sr-only">AHMADCLOTHESFABRICS | Your Saved Couture - Favorite Luxury Designs</h1>

    <div class="max-w-7xl mx-auto px-6 py-20">
      <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div class="w-full">
           <div class="flex items-center gap-3 mb-6">
              <div class="h-[1px] w-12 bg-[var(--primary-gold)]"></div>
              <span class="text-[var(--primary-gold)] font-bold text-[10px] uppercase tracking-[0.4em] block transition-all">SAVED DESIGNS</span>
           </div>
          <h2 class="text-4xl md:text-6xl font-light uppercase leading-none text-gray-900 dark:text-white mb-2 transition-colors font-playfair italic tracking-tighter">Your Favorites</h2>
          <p class="text-[9px] font-bold tracking-[0.3em] uppercase text-stone-400 mt-4">{{ favorites.totalFavorites }} SAVED PIECES</p>
        </div>
      </div>

      <div v-if="favorites.items.length === 0" class="h-[60vh] flex flex-col items-center justify-center text-center">
        <div class="w-24 h-24 bg-white dark:bg-[#080808] border border-[#d4af3711] rounded-full flex items-center justify-center mb-10 text-3xl shadow-2xl">
          <font-awesome-icon icon="fa-regular fa-heart" class="text-stone-300 dark:text-stone-700" />
        </div>
        <h3 class="text-2xl font-light uppercase tracking-widest mb-4 dark:text-white transition-colors font-playfair italic">No Favorites Found</h3>
        <p class="text-stone-400 dark:text-stone-600 mb-12 max-w-[280px] uppercase text-[9px] font-bold leading-relaxed tracking-[0.3em] transition-colors">You haven't saved any designs to your favorites yet.</p>
        <router-link to="/" class="bg-black dark:bg-[var(--primary-gold)] text-white px-12 py-5 rounded-none font-bold uppercase text-[10px] tracking-[0.4em] shadow-2xl transition-all hover:scale-[1.05] active:scale-95">Explore Boutique</router-link>
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <ProductCard 
          v-for="product in favorites.items" 
          :key="product.id" 
          :product="product" 
          @click-product="goToDetail"
          class="luxury-card-animation"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useFavoritesStore } from '../stores/favorites'
import ProductCard from '../components/ProductCard.vue'

const router = useRouter()
const favorites = useFavoritesStore()

const goToDetail = (product) => {
  router.push({ name: 'product-detail', params: { id: product.id } })
}
</script>

<style scoped>
.luxury-card-animation {
  animation: reveal-up 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  opacity: 0;
}

@keyframes reveal-up {
  from { opacity: 0; transform: translateY(30px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.grid > div:nth-child(1) { animation-delay: 0.1s; }
.grid > div:nth-child(2) { animation-delay: 0.2s; }
.grid > div:nth-child(3) { animation-delay: 0.3s; }
.grid > div:nth-child(4) { animation-delay: 0.4s; }
</style>
