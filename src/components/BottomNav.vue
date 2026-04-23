<template>
  <nav class="md:hidden fixed bottom-0 left-0 right-0 z-[10000] bg-black/80 backdrop-blur-xl border-t border-white/10 px-6 py-3 flex justify-between items-center safe-area-bottom">
    <router-link to="/" class="nav-item" :class="{ 'active': route.path === '/' }">
      <font-awesome-icon icon="fa-solid fa-house" />
      <span>Home</span>
    </router-link>

    <router-link to="/shop" class="nav-item" :class="{ 'active': route.path.startsWith('/shop') }">
      <font-awesome-icon icon="fa-solid fa-bag-shopping" />
      <span>Shop</span>
    </router-link>

    <router-link to="/cart" class="nav-item relative" :class="{ 'active': route.path === '/cart' }">
      <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
      <span>Cart</span>
    </router-link>

    <router-link to="/favorites" class="nav-item relative" :class="{ 'active': route.path === '/favorites' }">
      <font-awesome-icon icon="fa-solid fa-heart" />
      <span v-if="favCount > 0" class="cart-badge">{{ favCount }}</span>
      <span>Wishlist</span>
    </router-link>

    <router-link :to="auth.isAuthenticated ? '/dashboard' : '/login'" class="nav-item" :class="{ 'active': route.path.includes('dashboard') || route.path === '/login' }">
      <font-awesome-icon icon="fa-solid fa-user" />
      <span>Account</span>
    </router-link>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useCartStore } from '../stores/cart'
import { useFavoritesStore } from '../stores/favorites'

const route = useRoute()
const auth = useAuthStore()
const cart = useCartStore()
const favorites = useFavoritesStore()

const cartCount = computed(() => cart.totalItems)
const favCount = computed(() => favorites.totalFavorites)
</script>

<style scoped>
@reference "../style.css";

.nav-item {
  @apply flex flex-col items-center gap-1 text-[#888] transition-all duration-300;
}

.nav-item svg {
  @apply text-lg;
}

.nav-item span {
  @apply text-[10px] uppercase font-bold tracking-widest;
}

.nav-item.active {
  @apply text-[var(--primary-gold)];
}

.nav-item.active svg {
  @apply scale-110;
}

.cart-badge {
  @apply absolute -top-1 -right-1 bg-[var(--primary-gold)] text-black text-[8px] font-black w-4 h-4 flex items-center justify-center rounded-full border-2 border-black;
}

.safe-area-bottom {
  padding-bottom: calc(0.75rem + env(safe-area-inset-bottom));
}
</style>
