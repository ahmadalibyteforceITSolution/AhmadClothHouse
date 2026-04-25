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
        loading="lazy"
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

      <!-- Subtle dark gradient at bottom -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[6]" />

      <!-- ── Badges (top-left) ── -->
      <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
        <span v-if="discountPercent" class="badge-discount">{{ discountPercent }}% OFF</span>
        <span v-if="product.isNew && !discountPercent" class="badge-new">NEW ARRIVAL</span>
        <span v-if="product.nature === 'limited'" class="badge-limited">LIMITED EDITION</span>
      </div>

      <!-- ── Variant dot indicators (bottom-center) ── -->
      <div
        v-if="displayImages.length > 1"
        class="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none
               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span
          v-for="(_, idx) in displayImages"
          :key="'dot' + idx"
          class="block rounded-full bg-white shadow transition-all duration-400"
          :class="idx === hoverIndex ? 'w-5 h-[3px] opacity-100' : 'w-2 h-[3px] opacity-50'"
        />
      </div>

      <!-- ── Quick Action Buttons ── -->
      <div
        class="card-quick-actions absolute bottom-6 left-0 right-0 flex justify-center gap-3
               opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0
               transition-all duration-400 ease-out z-20"
      >
        <!-- Wishlist -->
        <button
          @click.stop="favorites.toggleFavorite(product)"
          class="action-btn"
          :class="{ 'action-btn--active': favorites.isFavorite(product.id) }"
          aria-label="Wishlist"
        >
          <font-awesome-icon :icon="favorites.isFavorite(product.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'" />
        </button>

        <!-- Add to Bag (non-admin) -->
        <button
          v-if="!auth.isAdmin"
          @click.stop="cart.addToCart(product)"
          class="action-btn"
          aria-label="Add to bag"
        >
          <font-awesome-icon icon="fa-solid fa-bag-shopping" />
        </button>

        <!-- Admin Delete -->
        <button
          v-if="auth.isAdmin"
          @click.stop="handleDelete"
          class="action-btn action-btn--danger"
          aria-label="Delete product"
        >
          <font-awesome-icon icon="fa-solid fa-trash-can" />
        </button>
      </div>
    </div>

    <!-- ─── Info Area ─── -->
    <div class="card-info flex flex-col pt-4 pb-2 bg-transparent">

      <!-- Category + dot -->
      <div class="flex items-center justify-between mb-1">
        <p class="card-category">{{ product.category }}</p>
        <span v-if="product.nature" class="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-700" />
      </div>

      <!-- Product Name -->
      <h3 class="card-name group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
        {{ product.name }}
      </h3>

      <!-- Price row + Explore link -->
      <div class="flex items-end justify-between pt-3 mt-auto border-t border-black/8 dark:border-white/8">

        <!-- Price block -->
        <div class="flex flex-col gap-0.5">
          <!-- Sale / current price -->
          <div class="flex items-baseline gap-1">
            <span class="price-label">RS.</span>
            <span class="price-current">{{ formatPrice(effectivePrice) }}</span>
          </div>
          <!-- Original (crossed out) — only when discount exists -->
          <p v-if="discountPercent && product.originalPrice > effectivePrice" class="price-original">
            Rs. {{ formatPrice(product.originalPrice) }}
          </p>
        </div>

        <!-- Explore -->
        <div class="explore-link group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
          <span>EXPLORE</span>
          <font-awesome-icon
            icon="fa-solid fa-arrow-right"
            class="text-[8px] -translate-x-1 group-hover:translate-x-0 transition-transform duration-400"
          />
        </div>
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

const props = defineProps(['product'])
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
  background: #fafaf8;
}
.dark .card-image-wrap {
  background: #080808;
}

/* ── Badges ─────────────────────────────────────────── */
.badge-discount {
  display: inline-block;
  align-self: flex-start;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 4px 9px;
  background: #E8232A;   /* bold red — matches reference */
  color: #ffffff;
  line-height: 1;
}

.badge-new {
  display: inline-block;
  align-self: flex-start;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 4px 9px;
  background: #111111;
  color: #ffffff;
  line-height: 1;
}

.badge-limited {
  display: inline-block;
  align-self: flex-start;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 4px 9px;
  background: #3B1E1E;
  color: #E2D3B8;
  line-height: 1;
}

/* ── Quick Action Buttons ───────────────────────────── */
.action-btn {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.93);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.06);
  color: #111;
  transition: all 0.35s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  cursor: pointer;
}
.dark .action-btn {
  background: rgba(15, 15, 15, 0.88);
  border-color: rgba(255, 255, 255, 0.08);
  color: #fff;
}
.action-btn:hover {
  background: #B8860B;
  border-color: #B8860B;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 14px 36px rgba(184, 134, 11, 0.32);
}
.action-btn--active {
  color: #E8232A;
}
.action-btn--danger:hover {
  background: #E8232A;
  border-color: #E8232A;
  box-shadow: 0 14px 36px rgba(232, 35, 42, 0.28);
}

/* ── Info Area ──────────────────────────────────────── */
.card-info {
  padding-top: 14px;
  padding-bottom: 8px;
}

.card-category {
  font-size: 8px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.28em;
  color: #9ca3af;
}
.dark .card-category {
  color: #6b7280;
}

.card-name {
  font-family: 'Jost', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  line-height: 1.45;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #111;
  margin-bottom: 0;
  margin-top: 4px;
}
.dark .card-name {
  color: #f5f5f5;
}

/* ── Price ──────────────────────────────────────────── */
.price-label {
  font-size: 8px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: #B8860B;
}

.price-current {
  font-family: 'Cormorant Garamond', serif;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: #111;
  line-height: 1;
}
.dark .price-current {
  color: #f5f5f5;
}

.price-original {
  font-family: 'Cormorant Garamond', serif;
  font-size: 10px;
  font-style: italic;
  color: #9ca3af;
  text-decoration: line-through;
  margin-top: 1px;
  line-height: 1;
}

/* ── Explore link ───────────────────────────────────── */
.explore-link {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #9ca3af;
}
.dark .explore-link {
  color: #6b7280;
}
</style>
