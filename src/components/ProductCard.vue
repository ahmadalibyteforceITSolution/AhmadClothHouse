<template>
  <div class="luxury-card group flex flex-col" @click="$emit('click-product', product)">
    <!-- Image Area -->
    <div class="card-image-wrap relative w-full overflow-hidden bg-[#fafaf8] dark:bg-[#050505]" @mouseleave="hoverIndex = 0">
      
      <!-- Variant Images -->
      <img v-for="(img, idx) in displayImages" :key="'img'+idx" 
           :src="img" 
           :alt="product.name + ' - ' + product.category + ' | AHMADCLOTHESFABRICS Premium Fashion'" 
           class="absolute inset-0 w-full h-full object-cover transition-all duration-[1s] ease-out"
           :class="idx === hoverIndex ? 'opacity-100 scale-[1.07] z-0' : 'opacity-0 scale-100 -z-10'" 
           loading="lazy" />
           
      <!-- Hover Trigger Zones (Invisible columns for tracking mouse movement) -->
      <div v-if="displayImages.length > 1" class="absolute inset-0 z-[5] flex">
        <div v-for="(_, idx) in displayImages" :key="'zone'+idx" 
             class="flex-1 h-full cursor-crosshair"
             @mouseenter="hoverIndex = idx">
        </div>
      </div>
      
      <!-- Variant Indicators Lines -->
      <div v-if="displayImages.length > 1" class="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div v-for="(_, idx) in displayImages" :key="'dot'+idx"
             class="h-0.5 rounded-full bg-white transition-all duration-500 shadow-xl"
             :class="idx === hoverIndex ? 'w-5 opacity-100' : 'w-2 opacity-40 mix-blend-overlay'">
        </div>
      </div>
      
      <!-- Luxurious Dark Gradient Overlay on Hover -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      
      <!-- Badges -->
      <div class="card-badges absolute top-4 left-4 flex flex-col gap-2 z-10">
        <span v-if="product.isNew" class="badge-new">NEW ARRIVAL</span>
        <span v-if="product.nature === 'limited'" class="badge-limited">LIMITED EDITION</span>
        <span v-if="product.discount" class="badge-sale">{{ product.discount }}% OFF</span>
      </div>

      <!-- Quick Actions (Minimalist Glassmorphism) -->
      <div class="card-quick-actions absolute bottom-6 left-0 right-0 flex justify-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-20">
        <button 
          @click.stop="favorites.toggleFavorite(product)"
          class="action-btn-lux group/fav"
          :class="{ 'text-amber-500': favorites.isFavorite(product.id) }"
          aria-label="Favorite"
        >
          <font-awesome-icon :icon="favorites.isFavorite(product.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'" class="group-hover/fav:scale-110 transition-transform" />
        </button>
        <button 
          v-if="!auth.isAdmin"
          @click.stop="cart.addToCart(product)"
          class="action-btn-lux group/cart"
          aria-label="Add to bag"
        >
          <font-awesome-icon icon="fa-solid fa-bag-shopping" class="group-hover/cart:scale-110 transition-transform" />
        </button>

        <!-- Admin Quick Delete -->
        <button 
          v-if="auth.isAdmin"
          @click.stop="handleDelete"
          class="action-btn-lux group/delete border-rose-500/30 text-rose-500 hover:bg-rose-500 hover:border-rose-500 hover:text-white"
          title="Direct Removal"
        >
          <font-awesome-icon icon="fa-solid fa-trash-can" class="group-hover/delete:scale-110 transition-transform" />
        </button>
      </div>
    </div>

    <!-- Details Meta Area -->
    <div class="card-info flex flex-col pt-5 pb-3 bg-transparent transition-all duration-500">
      <div class="flex items-center justify-between mb-2">
        <p class="text-[8px] font-black text-stone-400 dark:text-stone-500 uppercase tracking-[0.3em]">{{ product.category }}</p>
        <div v-if="product.nature" class="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-700"></div>
      </div>
      
      <h3 class="text-[#111] dark:text-white text-[11px] font-bold tracking-[0.1em] leading-snug line-clamp-2 mb-4 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors duration-300">
        {{ product.name }}
      </h3>
      
      <div class="mt-auto flex items-baseline justify-between pt-4 border-t border-black/5 dark:border-white/5">
        <div class="flex flex-col">
          <div class="flex items-baseline gap-1">
            <span class="text-[8px] font-black text-amber-500 uppercase tracking-widest">RS.</span>
            <span class="text-[14px] text-[#111] dark:text-white font-playfair font-normal tracking-wide">{{ Number(product.price || 0).toLocaleString() }}</span>
          </div>
          <p v-if="product.originalPrice && product.originalPrice > product.price" class="text-[9px] text-stone-400 line-through font-playfair italic mt-0.5">
            Rs. {{ Number(product.originalPrice || 0).toLocaleString() }}
          </p>
        </div>
        
        <div class="text-[8px] font-black tracking-[0.2em] uppercase text-stone-400 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors duration-300 flex items-center gap-2">
          <span>Explore</span>
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-[8px] -translate-x-1 group-hover:translate-x-0 transition-transform duration-500" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '../stores/cart'
import { useFavoritesStore } from '../stores/favorites'
import { useAuthStore } from '../stores/auth'
import { useProductsStore } from '../stores/products'

const props = defineProps(['product'])
const cart = useCartStore()
const favorites = useFavoritesStore()
const auth = useAuthStore()
const productStore = useProductsStore()

const hoverIndex = ref(0)
const displayImages = computed(() => {
  if (props.product.images && Array.isArray(props.product.images) && props.product.images.length > 0) {
    const mainImg = props.product.image
    const otherImg = props.product.images.filter(img => img && img !== mainImg)
    return [mainImg, ...otherImg]
  }
  return [props.product.image]
})

const handleDelete = () => {
  productStore.removeProduct(props.product.id)
}
</script>

<style scoped>
.luxury-card {
  position: relative;
  background: transparent;
  cursor: pointer;
}

.card-image-wrap {
  aspect-ratio: 3 / 4;
}

.card-badges {
  /* Positioning handled by Tailwind utilities in template */
}

.badge-new, .badge-limited, .badge-sale {
  font-size: 7px;
  font-weight: 800;
  padding: 4px 8px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  background: #111;
  color: white;
  display: inline-block;
  align-self: flex-start;
}

.badge-limited {
  background: #3B1E1E; /* Deep rich dark brown/burgundy */
  color: #E2D3B8; /* Champagne text */
}

.badge-sale {
  background: #D4AF37; /* Gold */
  color: #111;
}

/* Glassmorphism Action Buttons */
.action-btn-lux {
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 14px;
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.dark .action-btn-lux {
  background: rgba(0, 0, 0, 0.8);
  border-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.action-btn-lux:hover {
  background: #D4AF37;
  border-color: #D4AF37;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(212, 175, 55, 0.3);
}
</style>
