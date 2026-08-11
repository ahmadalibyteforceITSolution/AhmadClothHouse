<template>
  <nav class="shopify-bottom-nav">
    <router-link to="/" class="nav-item" :class="{ 'active': route.path === '/' }">
      <font-awesome-icon icon="fa-solid fa-house" class="nav-icon" />
      <span class="nav-label">Home</span>
    </router-link>

    <router-link to="/shop" class="nav-item" :class="{ 'active': route.path.startsWith('/shop') }">
      <font-awesome-icon icon="fa-solid fa-bag-shopping" class="nav-icon" />
      <span class="nav-label">Shop</span>
    </router-link>

    <router-link to="/cart" class="nav-item relative" :class="{ 'active': route.path === '/cart' }">
      <font-awesome-icon icon="fa-solid fa-cart-shopping" class="nav-icon" />
      <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
      <span class="nav-label">Cart</span>
    </router-link>

    <router-link to="/favorites" class="nav-item relative" :class="{ 'active': route.path === '/favorites' }">
      <font-awesome-icon icon="fa-solid fa-heart" class="nav-icon" />
      <span v-if="favCount > 0" class="cart-badge">{{ favCount }}</span>
      <span class="nav-label">Wishlist</span>
    </router-link>

    <router-link :to="auth.isAuthenticated ? '/dashboard' : '/login'" class="nav-item" :class="{ 'active': route.path.includes('dashboard') || route.path === '/login' }">
      <font-awesome-icon icon="fa-solid fa-user" class="nav-icon" />
      <span class="nav-label">Account</span>
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
/* ── Shopify-style bottom nav ─────────────────────────── */
.shopify-bottom-nav {
  display: none;
}

@media (max-width: 767px) {
  .shopify-bottom-nav {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10000;
    background: #ffffff;
    border-top: 1px solid #E5E7EB;
    padding: 8px 0;
    padding-bottom: calc(8px + env(safe-area-inset-bottom));
    justify-content: space-around;
    align-items: center;
  }
}

.dark .shopify-bottom-nav {
  background: #111111;
  border-top-color: #222222;
}

/* ── Nav Item ─────────────────────────────────────────── */
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  color: #9CA3AF;
  text-decoration: none;
  padding: 4px 12px;
  border-radius: 6px;
  transition: color 0.2s ease;
  position: relative;
}

.nav-item.active {
  color: #111111;
}

.dark .nav-item.active {
  color: #ffffff;
}

.nav-item:hover {
  color: #111111;
}

.dark .nav-item:hover {
  color: #ffffff;
}

/* ── Icon ─────────────────────────────────────────────── */
.nav-icon {
  font-size: 18px;
  transition: transform 0.2s ease;
}

.nav-item.active .nav-icon {
  transform: scale(1.1);
}

/* ── Label ────────────────────────────────────────────── */
.nav-label {
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* ── Badge ────────────────────────────────────────────── */
.cart-badge {
  position: absolute;
  top: 0;
  right: 4px;
  background: #111111;
  color: #ffffff;
  font-size: 8px;
  font-weight: 800;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #ffffff;
}

.dark .cart-badge {
  background: #B8860B;
  border-color: #111111;
}
</style>
