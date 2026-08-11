<template>
  <div class="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-300 pb-32 font-sans">
    
    <!-- SEO Heading (Visually Hidden) -->
    <h1 class="sr-only">Your Shopping Cart | Ahmad Cloth House</h1>

    <div class="max-w-7xl mx-auto px-6 py-12">

      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-[#E5E7EB] dark:border-white/10 gap-4">
        <div>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-[#111111] dark:text-white">Your Cart</h2>
          <p class="text-xs text-stone-500 mt-1">({{ cart.totalItems }} {{ cart.totalItems === 1 ? 'item' : 'items' }})</p>
        </div>
        <router-link to="/shop" class="text-xs font-bold text-stone-600 dark:text-stone-300 underline hover:text-[#111] dark:hover:text-white transition-colors">
          Continue Shopping →
        </router-link>
      </div>

      <!-- Free Shipping Goal Progress Bar (Shopify Standard) -->
      <div v-if="cart.items.length > 0" class="mb-8 p-4 bg-white dark:bg-[#111] border border-[#E5E7EB] dark:border-white/10 rounded-md">
        <div class="flex justify-between items-center text-xs font-semibold text-[#111] dark:text-white mb-2">
          <span>
            <font-awesome-icon icon="fa-solid fa-truck-fast" class="text-amber-600 mr-2" />
            <span v-if="freeShippingRemaining > 0">
              Add <strong class="text-amber-600">Rs. {{ freeShippingRemaining.toLocaleString() }}</strong> more for <strong>FREE Worldwide Shipping!</strong>
            </span>
            <span v-else class="text-green-600 font-bold">
              🎉 Congratulations! You unlocked FREE Worldwide Shipping!
            </span>
          </span>
          <span class="text-[10px] text-stone-400 font-mono">{{ freeShippingPercent }}%</span>
        </div>
        <div class="w-full h-2 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
          <div 
            class="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-500"
            :style="{ width: freeShippingPercent + '%' }"
          ></div>
        </div>
      </div>

      <!-- Empty Cart State -->
      <div v-if="cart.items.length === 0" class="py-20 flex flex-col items-center justify-center text-center bg-white dark:bg-[#111] border border-[#E5E7EB] dark:border-white/10 rounded-lg shadow-sm">
        <div class="w-20 h-20 bg-stone-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-6 text-2xl text-stone-400">
          <font-awesome-icon icon="fa-solid fa-bag-shopping" />
        </div>
        <h3 class="text-xl font-bold text-[#111] dark:text-white mb-2">Your cart is empty</h3>
        <p class="text-xs text-stone-500 max-w-sm mb-8">Before you can checkout, you must add some items to your shopping cart.</p>
        <router-link to="/shop" class="btn-shopify">
          Start Shopping
        </router-link>
      </div>

      <!-- Main Cart Layout -->
      <div v-else class="flex flex-col lg:flex-row gap-12 items-start">
        
        <!-- Cart Items Table / List -->
        <div class="flex-grow w-full space-y-4">
          <div 
            v-for="item in displayedCartItems" 
            :key="item.cartId || item.id" 
            class="bg-white dark:bg-[#111] p-5 md:p-6 flex flex-col sm:flex-row gap-6 border border-[#E5E7EB] dark:border-white/10 rounded-md shadow-sm relative group"
          >
            <!-- Product Thumbnail -->
            <div class="w-24 h-32 bg-stone-100 dark:bg-stone-900 rounded overflow-hidden shrink-0 cursor-pointer" @click="goToDetail(item.id)">
              <img :src="item.cartImage || item.image" :alt="item.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            </div>

            <!-- Details -->
            <div class="flex-grow flex flex-col justify-between">
              <div>
                <div class="flex justify-between items-start gap-4">
                  <div>
                    <span class="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">{{ item.category }}</span>
                    <h3 @click="goToDetail(item.id)" class="text-sm font-bold text-[#111] dark:text-white cursor-pointer hover:text-amber-600 transition-colors line-clamp-1">
                      {{ item.name }}
                    </h3>

                    <!-- Selected Variants -->
                    <div v-if="item.selectedVariant || item.variant" class="mt-2 flex flex-wrap gap-2">
                      <span v-if="item.selectedVariant?.size || item.variant?.size" class="px-2 py-0.5 bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 text-[10px] font-medium text-stone-600 dark:text-stone-300 rounded">
                        Size: {{ item.selectedVariant?.size || item.variant?.size }}
                      </span>
                      <span v-if="item.selectedVariant?.color || item.variant?.color" class="px-2 py-0.5 bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 text-[10px] font-medium text-stone-600 dark:text-stone-300 rounded">
                        Color: {{ item.selectedVariant?.color || item.variant?.color }}
                      </span>
                    </div>
                  </div>

                  <!-- Remove Button -->
                  <button 
                    @click="cart.removeFromCart(item.cartId || item.id)" 
                    class="text-stone-400 hover:text-red-500 p-1 transition-colors"
                    aria-label="Remove item"
                    title="Remove item"
                  >
                    <font-awesome-icon icon="fa-solid fa-trash-can" class="text-xs" />
                  </button>
                </div>
              </div>

              <!-- Quantity Controls & Subtotal -->
              <div class="flex items-center justify-between pt-4 mt-4 border-t border-stone-100 dark:border-white/5">
                <!-- Quantity Picker -->
                <div class="flex items-center border border-stone-300 dark:border-stone-700 rounded overflow-hidden">
                  <button 
                    @click="cart.updateQuantity(item.cartId || item.id, item.quantity - 1)" 
                    class="w-8 h-8 flex items-center justify-center text-stone-500 hover:bg-stone-100 dark:hover:bg-white/10 font-bold transition-colors"
                    aria-label="Decrease quantity"
                  >-</button>
                  <span class="w-8 text-center text-xs font-bold text-[#111] dark:text-white">{{ item.quantity }}</span>
                  <button 
                    @click="cart.updateQuantity(item.cartId || item.id, item.quantity + 1)" 
                    class="w-8 h-8 flex items-center justify-center text-stone-500 hover:bg-stone-100 dark:hover:bg-white/10 font-bold transition-colors"
                    aria-label="Increase quantity"
                  >+</button>
                </div>

                <!-- Price -->
                <div class="text-right">
                  <span class="text-xs text-stone-400 font-normal mr-1">Rs. {{ item.price.toLocaleString() }} × {{ item.quantity }} =</span>
                  <span class="text-sm font-bold text-[#111] dark:text-white">Rs. {{ (item.price * item.quantity).toLocaleString() }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination if items > 4 -->
          <div v-if="totalPages > 1" class="pt-6 flex items-center justify-between">
            <button 
              @click="currentPage > 1 && (currentPage--)" 
              :disabled="currentPage === 1"
              class="px-4 py-2 text-xs font-bold bg-white dark:bg-[#111] border border-stone-200 dark:border-white/10 rounded disabled:opacity-40 hover:bg-stone-50"
            >Previous</button>

            <span class="text-xs text-stone-500">Page {{ currentPage }} of {{ totalPages }}</span>

            <button 
              @click="currentPage < totalPages && (currentPage++)" 
              :disabled="currentPage === totalPages"
              class="px-4 py-2 text-xs font-bold bg-white dark:bg-[#111] border border-stone-200 dark:border-white/10 rounded disabled:opacity-40 hover:bg-stone-50"
            >Next</button>
          </div>
        </div>

        <!-- Order Summary Sidebar (Shopify Standard) -->
        <div class="lg:w-[380px] w-full shrink-0 sticky top-24">
          <div class="bg-white dark:bg-[#111] p-6 border border-[#E5E7EB] dark:border-white/10 rounded-md shadow-sm space-y-6">
            <h3 class="text-base font-bold text-[#111] dark:text-white border-b border-stone-100 dark:border-white/10 pb-4">
              Order Summary
            </h3>

            <div class="space-y-3 text-xs">
              <div class="flex justify-between text-stone-600 dark:text-stone-400">
                <span>Subtotal</span>
                <span class="font-bold text-[#111] dark:text-white">Rs. {{ cart.totalPrice.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between text-stone-600 dark:text-stone-400">
                <span>Estimated Shipping</span>
                <span class="font-bold text-amber-600">
                  {{ freeShippingRemaining <= 0 ? 'FREE' : 'Calculated at checkout' }}
                </span>
              </div>
            </div>

            <!-- Promo Code Input -->
            <div class="pt-3 border-t border-stone-100 dark:border-white/10">
              <div class="flex gap-2">
                <input 
                  type="text" 
                  v-model="promoCode" 
                  placeholder="Discount code" 
                  class="flex-1 px-3 py-2 text-xs bg-stone-50 dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded outline-none uppercase font-mono focus:border-[#111]"
                />
                <button 
                  @click="applyPromo"
                  class="px-4 py-2 bg-stone-100 dark:bg-white/10 hover:bg-stone-200 text-xs font-bold text-[#111] dark:text-white rounded transition-colors"
                >Apply</button>
              </div>
              <p v-if="promoMsg" :class="promoSuccess ? 'text-green-600' : 'text-red-500'" class="text-[11px] font-semibold mt-2">
                {{ promoMsg }}
              </p>
            </div>

            <!-- Total -->
            <div class="pt-4 border-t border-stone-200 dark:border-white/10 flex justify-between items-baseline">
              <div>
                <span class="text-sm font-bold text-[#111] dark:text-white block">Total</span>
                <span class="text-[10px] text-stone-400">Includes taxes</span>
              </div>
              <div class="text-right">
                <span class="text-xl font-extrabold text-[#111] dark:text-white">
                  Rs. {{ (cart.totalPrice - discountAmount).toLocaleString() }}
                </span>
              </div>
            </div>

            <!-- Checkout CTA Button -->
            <button 
              @click="router.push('/checkout')" 
              class="btn-shopify w-full !h-12 !text-sm flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-xs" />
            </button>

            <!-- Trust Badges -->
            <div class="pt-2 text-center space-y-2">
              <div class="flex justify-center items-center gap-4 text-stone-400 text-xs">
                <span class="flex items-center gap-1">
                  <font-awesome-icon icon="fa-solid fa-lock" class="text-[10px]" />
                  Secure Checkout
                </span>
                <span>•</span>
                <span>Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'

const router = useRouter()
const cart = useCartStore()

const itemsPerPage = 6
const currentPage = ref(1)

const promoCode = ref('')
const promoMsg = ref('')
const promoSuccess = ref(false)
const discountAmount = ref(0)

const freeShippingThreshold = 15000
const freeShippingRemaining = computed(() => {
  const diff = freeShippingThreshold - cart.totalPrice
  return diff > 0 ? diff : 0
})

const freeShippingPercent = computed(() => {
  if (cart.totalPrice >= freeShippingThreshold) return 100
  return Math.min(100, Math.round((cart.totalPrice / freeShippingThreshold) * 100))
})

const totalPages = computed(() => {
  return Math.ceil(cart.items.length / itemsPerPage)
})

const displayedCartItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return cart.items.slice(start, end)
})

const goToDetail = (id) => {
  router.push({ name: 'product-detail', params: { id } })
}

const applyPromo = () => {
  if (!promoCode.value) return
  if (promoCode.value.toUpperCase() === 'EID20' || promoCode.value.toUpperCase() === 'AHMAD20') {
    discountAmount.value = Math.round(cart.totalPrice * 0.20)
    promoMsg.value = '✓ 20% Discount applied!'
    promoSuccess.value = true
  } else {
    promoMsg.value = 'Invalid discount code'
    promoSuccess.value = false
  }
}
</script>
