<template>
  <div class="luxury-card group" @click="$emit('click-product', product)">
    <!-- Image Area -->
    <div class="card-image-wrap">
      <img :src="product.image" :alt="product.name + ' - ' + product.category + ' | Ahmadcloths house Premium Fashion'" class="card-img" loading="lazy" />
      
      <!-- Overlays -->
      <div class="card-overlay"></div>
      
      <!-- Badges -->
      <div class="card-badges">
        <span v-if="product.isNew" class="badge-new">NEW ARRIVAL</span>
        <span v-if="product.nature === 'limited'" class="badge-limited">LIMITED EDITION</span>
        <span v-if="product.discount" class="badge-sale">{{ product.discount }}% OFF</span>
      </div>

      <!-- Quick Actions -->
      <div class="card-quick-actions">
        <button 
          @click.stop="favorites.toggleFavorite(product)"
          class="action-btn"
          :class="{ 'active': favorites.isFavorite(product.id) }"
        >
          <font-awesome-icon :icon="favorites.isFavorite(product.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'" />
        </button>
        <button 
          v-if="!auth.isAdmin"
          @click.stop="cart.addToCart(product)"
          class="action-btn action-cart"
        >
          <font-awesome-icon icon="fa-solid fa-bag-shopping" />
        </button>
      </div>
    </div>

    <!-- Info Area -->
    <div class="card-info bg-white dark:bg-[#111] p-4 transition-all duration-500">
      <div class="info-header mb-1">
        <p class="p-cat text-[9px] text-[var(--primary-gold)] uppercase tracking-[0.2em] font-bold">{{ product.category }}</p>
      </div>
      
      <h3 class="p-name text-[var(--luxury-black)] dark:text-white/90 group-hover:text-[var(--primary-gold)] transition-colors duration-500 font-playfair text-base sm:text-lg italic leading-tight">{{ product.name }}</h3>
      
      <div class="p-footer mt-2 flex items-center justify-between">
        <div class="p-price-wrap flex flex-col">
          <div class="flex items-center">
            <span class="p-currency text-[10px] text-gray-500 mr-1 uppercase">Rs.</span>
            <span class="p-price text-[var(--luxury-black)] dark:text-white font-bold text-lg font-serif">{{ product.price.toLocaleString() }}</span>
          </div>
          <p v-if="product.originalPrice && product.originalPrice > product.price" class="text-[9px] text-gray-400 line-through font-serif italic tracking-wider">
            Rs. {{ product.originalPrice.toLocaleString() }}
          </p>
        </div>
        <div class="p-shop-tag text-[9px] font-bold tracking-widest text-gray-400 group-hover:text-[var(--primary-gold)] transition-all duration-500">
          <span class="mr-1">EXPLORE</span>
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-[7px] -translate-x-1 group-hover:translate-x-0 transition-all duration-500" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
import { useFavoritesStore } from '../stores/favorites'
import { useAuthStore } from '../stores/auth'

const props = defineProps(['product'])
const cart = useCartStore()
const favorites = useFavoritesStore()
const auth = useAuthStore()
</script>

<style scoped>
.luxury-card {
  position: relative;
  background: white;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  border: 1px solid rgba(0,0,0,0.03);
}

.dark .luxury-card {
  background: #111;
  border-color: rgba(255,255,255,0.03);
}

.luxury-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
}

.card-image-wrap {
  position: relative;
  aspect-ratio: 3 / 4;
  background: #F9F9F9;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.luxury-card:hover .card-img {
  transform: scale(1.08);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.02);
  transition: background 0.5s ease;
}

.luxury-card:hover .card-overlay {
  background: rgba(0, 0, 0, 0.05);
}

.card-badges {
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 10;
}

.badge-new, .badge-limited {
  font-size: 8px;
  font-weight: 800;
  padding: 4px 10px;
  letter-spacing: 0.15em;
  background: white;
  color: var(--luxury-black);
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.badge-limited {
  background: var(--deep-burgundy);
  color: white;
}

.badge-sale {
  font-size: 8px;
  font-weight: 800;
  padding: 4px 10px;
  letter-spacing: 0.15em;
  background: #ff4757;
  color: white;
  box-shadow: 0 4px 10px rgba(255, 71, 87, 0.2);
}

.card-quick-actions {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  display: flex;
  gap: 10px;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 20;
}

.luxury-card:hover .card-quick-actions {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.action-btn {
  width: 40px;
  height: 40px;
  background: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: var(--luxury-black);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.action-btn:hover {
  background: var(--deep-burgundy);
  color: white;
}

.action-btn.active {
  color: #ff4757;
}

.action-cart:hover {
  background: var(--primary-gold);
}
</style>
