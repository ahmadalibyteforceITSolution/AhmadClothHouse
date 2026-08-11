<template>
  <div class="luxury-card group flex flex-col" @click="$emit('click-product', product)">

    <!-- ─── Image Area ─── -->
    <div
      class="card-image-wrap relative w-full overflow-hidden"
      @mouseleave="stopCycle"
      @mouseenter="startCycle"
    >
      <!-- Stacked variant images -->
      <img
        v-for="(img, idx) in displayImages"
        :key="'img' + idx"
        :src="img"
        :alt="product.name + ' | AHMADCLOTHESFABRICS'"
        class="card-img absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
        :class="idx === hoverIndex ? 'opacity-100 scale-[1.04] z-0' : 'opacity-0 scale-100 -z-10'"
        :loading="loading"
        width="400"
        height="533"
      />

      <!-- Hover trigger zones (invisible columns) -->
      <div v-if="displayImages.length > 1" class="absolute inset-0 z-[5] flex pointer-events-auto">
        <div
          v-for="(_, idx) in displayImages"
          :key="'zone' + idx"
          class="flex-1 h-full"
          @mouseenter="manualIndex = idx; hoverIndex = idx"
        />
      </div>

      <!-- Subtle overlay on hover -->
      <div class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-[6]" />

      <!-- ── Badges (top-left) ── -->
      <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
        <span v-if="discountPercent" class="badge-discount">{{ discountPercent }}% OFF</span>
        <span v-if="product.isNew && !discountPercent" class="badge-new">NEW</span>
        <span v-if="product.nature === 'limited'" class="badge-limited">LIMITED</span>
      </div>

      <!-- ── Wishlist button top-right (Shopify style) ── -->
      <button
        @click.stop="favorites.toggleFavorite(product)"
        class="wishlist-btn"
        :class="{ 'wishlist-btn--active': favorites.isFavorite(product.id) }"
        aria-label="Wishlist"
      >
        <font-awesome-icon :icon="favorites.isFavorite(product.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'" />
      </button>

      <!-- ── Variant dot indicators (bottom-center) ── -->
      <div
        v-if="displayImages.length > 1"
        class="absolute bottom-14 left-0 right-0 flex justify-center gap-1.5 z-[7] pointer-events-none
               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span
          v-for="(_, idx) in displayImages"
          :key="'dot' + idx"
          class="block rounded-full bg-white shadow transition-all duration-300"
          :class="idx === hoverIndex ? 'w-5 h-[3px] opacity-100' : 'w-2 h-[3px] opacity-50'"
        />
      </div>

      <!-- ── Add to Cart — Shopify full-width slide-up ── -->
      <div class="card-atc-wrap">
        <button
          v-if="!auth.isAdmin"
          @click.stop="handleAddToCart"
          class="card-atc-btn"
          aria-label="Add to cart"
        >
          <font-awesome-icon icon="fa-solid fa-bag-shopping" class="text-[11px]" />
          <span>Add to Cart</span>
        </button>

        <button
          v-if="auth.isAdmin"
          @click.stop="handleDelete"
          class="card-atc-btn card-atc-btn--danger"
          aria-label="Delete product"
        >
          <font-awesome-icon icon="fa-solid fa-trash-can" class="text-[11px]" />
          <span>Delete</span>
        </button>
      </div>
    </div>

    <!-- ─── Info Area ─── -->
    <div class="card-info flex flex-col pt-3 pb-1 bg-transparent">
      <!-- Category -->
      <p class="card-category">{{ product.category }}</p>

      <!-- Product Name -->
      <h3 class="card-name">
        {{ product.name }}
      </h3>

      <!-- Price row -->
      <div class="flex items-center gap-2 mt-1.5">
        <span class="price-current">Rs. {{ formatPrice(effectivePrice) }}</span>
        <span v-if="discountPercent && product.originalPrice > effectivePrice" class="price-original">
          Rs. {{ formatPrice(product.originalPrice) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { useCartStore } from '../stores/cart'
import { useFavoritesStore } from '../stores/favorites'
import { useAuthStore } from '../stores/auth'
import { useProductsStore } from '../stores/products'

import Swal from 'sweetalert2'

const props = defineProps({
  product: { type: Object, required: true },
  loading: { type: String, default: 'lazy' }
})
defineEmits(['click-product'])

const cart = useCartStore()
const favorites = useFavoritesStore()
const auth = useAuthStore()
const productStore = useProductsStore()

// ── Images ──────────────────────────────────────────────
const hoverIndex  = ref(0)
const manualIndex = ref(null)
let   cycleTimer  = null

const displayImages = computed(() => {
  const p = props.product
  if (p.images && Array.isArray(p.images) && p.images.length > 0) {
    const others = p.images.filter(img => img && img !== p.image)
    return [p.image, ...others].filter(Boolean)
  }
  return [p.image].filter(Boolean)
})

// Auto-cycle through variants while hovering (if no manual hover zone selected)
function startCycle() {
  if (displayImages.value.length <= 1) return
  manualIndex.value = null
  cycleTimer = setInterval(() => {
    // Only auto-advance if user hasn't manually hovered a zone
    if (manualIndex.value === null) {
      hoverIndex.value = (hoverIndex.value + 1) % displayImages.value.length
    }
  }, 1200)
}

function stopCycle() {
  clearInterval(cycleTimer)
  cycleTimer = null
  hoverIndex.value  = 0
  manualIndex.value = null
}

onUnmounted(stopCycle)

// ── Pricing ──────────────────────────────────────────────
const effectivePrice = computed(() => Number(props.product.price || 0))

const discountPercent = computed(() => {
  const p = props.product
  // Use explicit discount field first
  if (p.discount && Number(p.discount) > 0) return Number(p.discount)
  // Calculate from originalPrice vs price
  if (p.originalPrice && p.originalPrice > effectivePrice.value && effectivePrice.value > 0) {
    return Math.round(((p.originalPrice - effectivePrice.value) / p.originalPrice) * 100)
  }
  return null
})

function formatPrice(val) {
  return Number(val || 0).toLocaleString('en-PK')
}

// ── Admin ─────────────────────────────────────────────────
function handleDelete() {
  productStore.removeProduct(props.product.id)
}

// ── Add to Cart (auth-guarded with instant feedback) ──────
function handleAddToCart() {
  if (!auth.isAuthenticated) {
    window.dispatchEvent(new CustomEvent('acl:show-login-modal'))
    return
  }
  cart.addToCart(props.product)

  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: 'Added to Cart',
    text: props.product.name,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true
  })
}
</script>

<style scoped>
/* ── Card Shell ─────────────────────────────────────── */
.luxury-card {
  position: relative;
  background: transparent;
  cursor: pointer;
}

/* ── Image Wrapper ──────────────────────────────────── */
.card-image-wrap {
  aspect-ratio: 3 / 4;
  background: #F4F4F4;
}
.dark .card-image-wrap {
  background: #111111;
}

/* ── Badges ─────────────────────────────────────────── */
.badge-discount {
  display: inline-block;
  align-self: flex-start;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 3px 8px;
  background: #E8232A;
  color: #ffffff;
  line-height: 1.4;
  border-radius: 2px;
}

.badge-new {
  display: inline-block;
  align-self: flex-start;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 3px 8px;
  background: #111111;
  color: #ffffff;
  line-height: 1.4;
  border-radius: 2px;
}

.badge-limited {
  display: inline-block;
  align-self: flex-start;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 3px 8px;
  background: #B8860B;
  color: #fff;
  line-height: 1.4;
  border-radius: 2px;
}

/* ── Wishlist Button (top-right, Shopify style) ──────── */
.wishlist-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 20;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(0, 0, 0, 0.06);
  color: #555;
  transition: all 0.25s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  opacity: 0;
  transform: scale(0.85);
}

.group:hover .wishlist-btn {
  opacity: 1;
  transform: scale(1);
}

@media (max-width: 1023px) {
  .wishlist-btn {
    opacity: 1 !important;
    transform: scale(1) !important;
  }
}

.dark .wishlist-btn {
  background: rgba(20, 20, 20, 0.92);
  border-color: rgba(255,255,255,0.08);
  color: #ccc;
}

.wishlist-btn:hover {
  background: #fff;
  color: #E8232A;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

.wishlist-btn--active {
  color: #E8232A;
  opacity: 1 !important;
  transform: scale(1) !important;
}

/* ── Add to Cart — Shopify full-width slide-up ───────── */
.card-atc-wrap {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  transform: translateY(100%);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.group:hover .card-atc-wrap {
  transform: translateY(0);
}

@media (max-width: 1023px) {
  .card-atc-wrap {
    transform: translateY(0) !important;
  }
}

.card-atc-btn {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #111111;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
}

.card-atc-btn:hover {
  background: #333333;
}

.dark .card-atc-btn {
  background: #ffffff;
  color: #111111;
}

.dark .card-atc-btn:hover {
  background: #E5E7EB;
}

.card-atc-btn--danger {
  background: #E8232A;
}

.card-atc-btn--danger:hover {
  background: #c81e24;
}

/* ── Info Area ──────────────────────────────────────── */
.card-info {
  padding-top: 12px;
  padding-bottom: 6px;
}

.card-category {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #9CA3AF;
  margin-bottom: 4px;
}
.dark .card-category {
  color: #6b7280;
}

.card-name {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #111;
  margin-bottom: 0;
}
.dark .card-name {
  color: #F5F5F5;
}

/* ── Price ──────────────────────────────────────────── */
.price-current {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #111111;
  line-height: 1;
}
.dark .price-current {
  color: #F5F5F5;
}

.price-original {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #9CA3AF;
  text-decoration: line-through;
  line-height: 1;
}
</style>
