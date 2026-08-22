<template>
  <div v-if="product" class="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300 pb-32 text-neutral-900 dark:text-neutral-100">
    
    <!-- Top Bar / Breadcrumbs -->
    <div class="max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-4">
      <nav class="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-normal">
        <router-link to="/" class="hover:text-black dark:hover:text-white transition-colors">Home</router-link>
        <span class="text-neutral-400">&gt;</span>
        <router-link :to="`/shop/${product.parentCategory || 'Ladies Wear'}`" class="hover:text-black dark:hover:text-white transition-colors">
          {{ product.parentCategory || 'Luxury Formals' }}
        </router-link>
        <span class="text-neutral-400">&gt;</span>
        <router-link :to="`/shop/${product.category || 'Eid Collection'}`" class="hover:text-black dark:hover:text-white transition-colors">
          {{ product.category || 'Eid Collection' }}
        </router-link>
        <span class="text-neutral-400">&gt;</span>
        <span class="text-neutral-800 dark:text-neutral-200 font-medium truncate max-w-[200px] sm:max-w-none">
          {{ product.name }}
        </span>
      </nav>
    </div>

    <!-- Main 3-Column Layout Container -->
    <div class="max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-12 pt-4">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
        
        <!-- ========================================== -->
        <!-- COLUMN 1 (LEFT): PRODUCT CARE & FABRIC     -->
        <!-- ========================================== -->
        <div class="lg:col-span-3 order-3 lg:order-1 flex flex-col gap-6 pt-2">
          <div>
            <h2 class="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">
              Product Care
            </h2>
            
            <!-- Fabric Section -->
            <div class="mb-5">
              <h3 class="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                Fabric
              </h3>
              <p class="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {{ product.fabric || 'Mix Fabric Handle with care while cleaning' }}
              </p>
            </div>

            <!-- Care Section -->
            <div>
              <h3 class="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
                Care
              </h3>
              
              <div class="space-y-3">
                <!-- Care Card 1: Wash / Dry Clean -->
                <div class="flex items-center gap-3.5 p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm transition-all hover:border-neutral-300 dark:hover:border-neutral-700">
                  <div class="w-9 h-9 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 text-neutral-600 dark:text-neutral-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  <span class="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    Don't wash dry clean only
                  </span>
                </div>

                <!-- Care Card 2: Iron -->
                <div class="flex items-center gap-3.5 p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm transition-all hover:border-neutral-300 dark:hover:border-neutral-700">
                  <div class="w-9 h-9 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 text-neutral-600 dark:text-neutral-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span class="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    Can be ironed on low heat
                  </span>
                </div>

                <!-- Care Card 3: Bleach -->
                <div class="flex items-center gap-3.5 p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm transition-all hover:border-neutral-300 dark:hover:border-neutral-700">
                  <div class="w-9 h-9 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 text-neutral-600 dark:text-neutral-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <span class="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    Don't use too much bleach
                  </span>
                </div>
              </div>
            </div>

            <!-- Additional Guarantee Note -->
            <div class="mt-8 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 text-[11px] text-neutral-500 leading-relaxed">
              <span class="font-semibold text-neutral-800 dark:text-neutral-200">100% Authentic Guaranteed:</span> 
              Direct from artisan looms and verified luxury fabric stockists.
            </div>
          </div>
        </div>

        <!-- ========================================== -->
        <!-- COLUMN 2 (CENTER): MAIN GALLERY & THUMBS   -->
        <!-- ========================================== -->
        <div class="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center">
          <!-- Main Showcase Image -->
          <div class="w-full relative bg-neutral-100 dark:bg-neutral-900 rounded-sm overflow-hidden shadow-sm group">
            <img 
              :src="currentDisplayImage" 
              :alt="product.name" 
              class="w-full h-auto max-h-[700px] object-cover mx-auto transition-transform duration-700 group-hover:scale-105"
            />
            
            <!-- Floating Zoom or Watermark indicator -->
            <div class="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-sm">
              Original Atelier
            </div>
          </div>

          <!-- Thumbnail Gallery Row -->
          <div class="w-full mt-4 flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            <button 
              v-for="(img, idx) in allImages" 
              :key="idx"
              @click="selectImage(img)"
              class="w-16 h-20 sm:w-20 sm:h-24 rounded-sm overflow-hidden shrink-0 border-2 transition-all duration-200"
              :class="currentDisplayImage === img ? 'border-black dark:border-white shadow-md scale-95' : 'border-transparent opacity-60 hover:opacity-100 hover:border-neutral-300'"
            >
              <img :src="img" :alt="product.name" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        <!-- ========================================== -->
        <!-- COLUMN 3 (RIGHT): TITLE, PRICE & ADD CART  -->
        <!-- ========================================== -->
        <div class="lg:col-span-4 order-2 lg:order-3 flex flex-col pt-1">
          
          <!-- Top Title & In Stock Badge -->
          <div class="flex items-start justify-between gap-4 mb-2">
            <h1 class="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white capitalize">
              {{ product.name }}
            </h1>
            <span class="shrink-0 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs px-3 py-1 rounded font-medium border border-neutral-200 dark:border-neutral-700">
              In Stock
            </span>
          </div>

          <!-- SKU / Dynamic Code -->
          <div class="text-xs text-neutral-500 dark:text-neutral-400 mb-6 font-mono">
            {{ currentSku }}
          </div>

          <!-- Price Section -->
          <div class="flex items-baseline justify-between py-3 border-y border-neutral-200 dark:border-neutral-800 mb-5">
            <span class="text-sm font-medium text-neutral-600 dark:text-neutral-400">
              Price
            </span>
            <div class="flex items-baseline gap-3">
              <span v-if="product.originalPrice && product.originalPrice > product.price" class="text-sm text-neutral-400 line-through">
                Rs.{{ product.originalPrice.toLocaleString() }}
              </span>
              <span class="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                Rs.{{ product.price.toLocaleString() }}
              </span>
            </div>
          </div>

          <!-- Shipping Notice -->
          <div class="flex items-center justify-between text-xs py-2 mb-6">
            <span class="font-semibold uppercase tracking-wider text-neutral-500 text-[11px]">
              SHIPPING TIME
            </span>
            <span class="font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 text-[11px]">
              3-5 BUSINESS DAYS
            </span>
          </div>

          <!-- Size Selector -->
          <div class="mb-6">
            <div class="flex items-center justify-between mb-2.5">
              <span class="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                SIZE
              </span>
              <button 
                @click="showSizeModal = true" 
                class="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white font-medium transition-colors uppercase tracking-wider"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                <span>SIZE CHART</span>
              </button>
            </div>

            <!-- Size Buttons: XS, S, M, L, XL -->
            <div class="flex flex-wrap gap-2.5">
              <button 
                v-for="size in availableSizes" 
                :key="size"
                @click="selectSize(size)"
                class="min-w-[48px] px-3.5 h-10 flex items-center justify-center text-xs font-semibold uppercase tracking-wider border rounded-sm transition-all duration-200"
                :class="selectedSize === size 
                  ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white shadow-sm' 
                  : 'border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-black dark:hover:border-white bg-white dark:bg-neutral-900'"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <!-- Color Selector (if available) -->
          <div v-if="uniqueColors.length > 1" class="mb-6">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                COLOR: <span class="text-neutral-500 font-normal">{{ selectedColor }}</span>
              </span>
            </div>
            <div class="flex flex-wrap gap-2.5">
              <button 
                v-for="col in uniqueColors" 
                :key="col"
                @click="selectColor(col)"
                class="px-4 py-2 text-xs font-semibold uppercase tracking-wider border rounded-sm transition-all"
                :class="selectedColor === col 
                  ? 'bg-black text-white border-black dark:bg-white dark:text-black' 
                  : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-black'"
              >
                {{ col }}
              </button>
            </div>
          </div>

          <!-- Quantity Selector -->
          <div class="mb-6">
            <span class="block text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-2.5">
              QUANTITY
            </span>
            <div class="flex items-center">
              <button 
                @click="decreaseQty" 
                class="w-10 h-10 flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-bold transition-colors rounded-l-sm"
              >
                &minus;
              </button>
              <div class="w-12 h-10 flex items-center justify-center border-y border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 font-medium text-xs text-neutral-900 dark:text-white">
                {{ quantity }}
              </div>
              <button 
                @click="increaseQty" 
                class="w-10 h-10 flex items-center justify-center bg-black hover:bg-neutral-800 text-white font-bold transition-colors rounded-r-sm"
              >
                +
              </button>
            </div>
          </div>

          <!-- Action Buttons: ADD TO WISHLIST & ADD TO CART -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <!-- Wishlist Button -->
            <button 
              @click="favorites.toggleFavorite(product)"
              class="h-12 border border-black dark:border-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-sm text-neutral-900 dark:text-white"
            >
              <svg 
                class="w-4 h-4" 
                :class="favorites.isFavorite(product.id) ? 'text-red-600 fill-current' : 'text-neutral-700 dark:text-neutral-200'"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{{ favorites.isFavorite(product.id) ? 'IN WISHLIST' : 'ADD TO WISHLIST' }}</span>
            </button>

            <!-- Add To Cart Button -->
            <button 
              @click="handleAddToCart"
              class="h-12 bg-black dark:bg-white text-white dark:text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-sm shadow-sm"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>ADD TO CART</span>
            </button>
          </div>

          <!-- Instant Buy Now Button -->
          <button 
            @click="handleBuyNow"
            class="w-full h-11 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-colors flex items-center justify-center gap-2 mb-8 shadow-sm"
          >
            <font-awesome-icon icon="fa-solid fa-bolt" class="text-xs" />
            <span>BUY NOW &bull; INSTANT CHECKOUT</span>
          </button>

          <!-- Accordion Details -->
          <div class="border-t border-neutral-200 dark:border-neutral-800">
            <!-- Accordion 1: Description -->
            <div class="py-4 border-b border-neutral-200 dark:border-neutral-800 cursor-pointer" @click="activeAccordion = activeAccordion === 1 ? 0 : 1">
              <div class="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                <span>Description</span>
                <span class="text-base font-light transition-transform duration-200" :class="{'rotate-45': activeAccordion === 1}">+</span>
              </div>
              <div v-show="activeAccordion === 1" class="pt-3 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>{{ product.description || 'Elevate your wardrobe with this exquisite luxury ensemble. Crafted from high-density fabric with refined artistic embroidery detailing and immaculate tailoring.' }}</p>
              </div>
            </div>

            <!-- Accordion 2: Fabric Details -->
            <div v-if="product.details && product.details.length" class="py-4 border-b border-neutral-200 dark:border-neutral-800 cursor-pointer" @click="activeAccordion = activeAccordion === 2 ? 0 : 2">
              <div class="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                <span>Fabric & Inclusions</span>
                <span class="text-base font-light transition-transform duration-200" :class="{'rotate-45': activeAccordion === 2}">+</span>
              </div>
              <div v-show="activeAccordion === 2" class="pt-3 text-xs text-neutral-600 dark:text-neutral-400">
                <ul class="space-y-2">
                  <li v-for="d in product.details" :key="d" class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                    <span>{{ d }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Accordion 3: Delivery & Returns -->
            <div class="py-4 border-b border-neutral-200 dark:border-neutral-800 cursor-pointer" @click="activeAccordion = activeAccordion === 3 ? 0 : 3">
              <div class="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                <span>Delivery & Returns</span>
                <span class="text-base font-light transition-transform duration-200" :class="{'rotate-45': activeAccordion === 3}">+</span>
              </div>
              <div v-show="activeAccordion === 3" class="pt-3 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>Standard Pakistan delivery within 3-5 business days. Express worldwide shipping available. 7-day hassle-free exchange on unused items in original packaging.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

    <!-- Size Chart Modal -->
    <div v-if="showSizeModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" @click.self="showSizeModal = false">
      <div class="bg-white dark:bg-neutral-900 rounded-lg max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 dark:border-neutral-800 relative">
        <button @click="showSizeModal = false" class="absolute top-5 right-5 text-neutral-400 hover:text-black dark:hover:text-white text-lg">
          &times;
        </button>
        <h3 class="text-lg font-semibold uppercase tracking-wider text-neutral-900 dark:text-white mb-2">
          Standard Women's Size Guide
        </h3>
        <p class="text-xs text-neutral-500 mb-6">All measurements are in inches.</p>

        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left border-collapse">
            <thead>
              <tr class="border-b border-neutral-200 dark:border-neutral-700 text-neutral-500 uppercase tracking-wider text-[10px]">
                <th class="py-2.5 px-3">Size</th>
                <th class="py-2.5 px-3">Chest</th>
                <th class="py-2.5 px-3">Waist</th>
                <th class="py-2.5 px-3">Hip</th>
                <th class="py-2.5 px-3">Shirt Length</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-neutral-100 dark:divide-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium">
              <tr>
                <td class="py-2.5 px-3 font-bold">XS</td>
                <td class="py-2.5 px-3">36"</td>
                <td class="py-2.5 px-3">32"</td>
                <td class="py-2.5 px-3">38"</td>
                <td class="py-2.5 px-3">38"</td>
              </tr>
              <tr>
                <td class="py-2.5 px-3 font-bold">S</td>
                <td class="py-2.5 px-3">38"</td>
                <td class="py-2.5 px-3">34"</td>
                <td class="py-2.5 px-3">40"</td>
                <td class="py-2.5 px-3">39"</td>
              </tr>
              <tr>
                <td class="py-2.5 px-3 font-bold">M</td>
                <td class="py-2.5 px-3">41"</td>
                <td class="py-2.5 px-3">37"</td>
                <td class="py-2.5 px-3">43"</td>
                <td class="py-2.5 px-3">40"</td>
              </tr>
              <tr>
                <td class="py-2.5 px-3 font-bold">L</td>
                <td class="py-2.5 px-3">44"</td>
                <td class="py-2.5 px-3">40"</td>
                <td class="py-2.5 px-3">46"</td>
                <td class="py-2.5 px-3">41"</td>
              </tr>
              <tr>
                <td class="py-2.5 px-3 font-bold">XL</td>
                <td class="py-2.5 px-3">47"</td>
                <td class="py-2.5 px-3">43"</td>
                <td class="py-2.5 px-3">49"</td>
                <td class="py-2.5 px-3">42"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button @click="showSizeModal = false" class="w-full mt-6 py-2.5 bg-black text-white dark:bg-white dark:text-black font-semibold text-xs uppercase tracking-wider rounded">
          Close Guide
        </button>
      </div>
    </div>

    <!-- Guest Reviews Section -->
    <div class="max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-12 mt-24">
      <div class="py-12 border-t border-neutral-200 dark:border-neutral-800">
        <ReviewSection :product-id="product?.id || product?._id" />
      </div>
    </div>

    <!-- Related Products -->
    <div class="bg-neutral-50 dark:bg-neutral-900/40 py-20 mt-12 w-full">
      <div class="max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-12">
        <div class="flex items-center gap-6 mb-10">
          <h2 class="text-2xl font-playfair font-medium uppercase tracking-widest dark:text-white">
            Complete The Look
          </h2>
          <div class="h-[1px] flex-grow bg-neutral-200 dark:bg-neutral-800"></div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard v-for="p in relatedProducts" :key="p.id" :product="p" @click-product="goToDetail" />
        </div>
      </div>
    </div>

  </div>

  <!-- Loading State -->
  <div v-else class="h-screen flex flex-col items-center justify-center bg-white dark:bg-[#050505] gap-6">
    <div class="w-10 h-10 border-2 border-black dark:border-white border-t-transparent rounded-full animate-spin"></div>
    <span class="text-xs font-semibold tracking-widest uppercase text-neutral-600 dark:text-neutral-400">
      Loading Atelier Details...
    </span>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2'
import { computed, watch, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductsStore } from '../stores/products'
import { useCartStore } from '../stores/cart'
import { useFavoritesStore } from '../stores/favorites'
import ProductCard from '../components/ProductCard.vue'
import ReviewSection from '../components/ReviewSection.vue'

const props = defineProps(['id'])
const route = useRoute()
const router = useRouter()
const cart = useCartStore()
const favorites = useFavoritesStore()
const productStore = useProductsStore()

const product = computed(() => {
  const targetId = String(props.id || route.params.id)
  return productStore.products.find(p => String(p.id) === targetId || String(p._id) === targetId)
})

const quantity = ref(1)
const showSizeModal = ref(false)
const activeAccordion = ref(1)
const selectedVariant = ref(null)
const selectedColor = ref(null)
const selectedSize = ref('L')
const manuallySelectedImage = ref(null)

const standardSizes = ['XS', 'S', 'M', 'L', 'XL']

const availableSizes = computed(() => {
  if (product.value?.variants && product.value.variants.length > 0) {
    const rawSizes = [...new Set(product.value.variants.map(v => v.size).filter(Boolean))]
    if (rawSizes.length > 0 && !rawSizes.includes('Unstitched')) {
      return rawSizes
    }
  }
  return standardSizes
})

const uniqueColors = computed(() => {
  if (!product.value?.variants) return []
  return [...new Set(product.value.variants.map(v => v.color).filter(Boolean))]
})

const currentSku = computed(() => {
  if (product.value?.sku) {
    const baseSku = product.value.sku.split('-').slice(0, 2).join('-') || product.value.sku
    const color = selectedColor.value || 'Off White'
    const size = selectedSize.value || 'Large'
    return `${baseSku}-${color.replace(/\s+/g, '')}-${size}`
  }
  return `DW-EF26-201-${selectedColor.value || 'Off White'}-${selectedSize.value || 'Large'}`
})

const currentDisplayImage = computed(() => {
  if (manuallySelectedImage.value) return manuallySelectedImage.value
  if (selectedVariant.value && selectedVariant.value.image) {
    return selectedVariant.value.image
  }
  return product.value?.image
})

const allImages = computed(() => {
  if (!product.value) return []
  const images = new Set()
  if (product.value.image) images.add(product.value.image)
  if (product.value.variants) {
    product.value.variants.forEach(v => {
      if (v.image) images.add(v.image)
    })
  }
  return Array.from(images)
})

const increaseQty = () => {
  quantity.value++
}

const decreaseQty = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const selectSize = (size) => {
  selectedSize.value = size
  updateSelectedVariant()
}

const selectColor = (color) => {
  selectedColor.value = color
  updateSelectedVariant()
}

const selectImage = (img) => {
  manuallySelectedImage.value = img
  if (product.value?.variants) {
    const matchedVariant = product.value.variants.find(v => v.image === img)
    if (matchedVariant) {
      if (matchedVariant.color) selectedColor.value = matchedVariant.color
      if (matchedVariant.size) selectedSize.value = matchedVariant.size
      selectedVariant.value = matchedVariant
    }
  }
}

const updateSelectedVariant = () => {
  if (!product.value?.variants || !product.value.variants.length) return
  let variant = product.value.variants.find(v => v.color === selectedColor.value && v.size === selectedSize.value)
  if (!variant && selectedColor.value) {
    variant = product.value.variants.find(v => v.color === selectedColor.value)
  }
  if (!variant && selectedSize.value) {
    variant = product.value.variants.find(v => v.size === selectedSize.value)
  }
  if (variant) {
    selectedVariant.value = variant
  }
}

const handleAddToCart = () => {
  if (!product.value) return
  const variantToAdd = selectedVariant.value || {
    color: selectedColor.value || 'Standard',
    size: selectedSize.value || 'L',
    image: currentDisplayImage.value
  }

  cart.addToCart(product.value, variantToAdd, quantity.value)

  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: 'Added to Bag',
    text: `${quantity.value}x ${product.value.name} (${selectedSize.value || 'L'})`,
    showConfirmButton: false,
    timer: 2200,
    timerProgressBar: true
  })
}

const handleBuyNow = () => {
  handleAddToCart()
  router.push('/checkout')
}

const relatedProducts = computed(() => {
  return productStore.products
    .filter(p => (p.id || p._id) !== (product.value?.id || product.value?._id))
    .slice(0, 4)
})

const goToDetail = (nextProduct) => {
  const nid = nextProduct.id || nextProduct._id
  router.push({ name: 'product-detail', params: { id: nid } })
}

watch(product, (p) => {
  quantity.value = 1
  selectedVariant.value = null
  manuallySelectedImage.value = null
  if (p) {
    if (p.variants && p.variants.length > 0) {
      selectedColor.value = p.variants[0].color || null
      selectedSize.value = p.variants[0].size || 'L'
      selectedVariant.value = p.variants[0]
    } else {
      selectedColor.value = null
      selectedSize.value = 'L'
    }

    if (typeof document !== 'undefined') {
      const BASE = 'https://ahmad-cloths.vercel.app'
      const pageUrl = `${BASE}${route.path}`
      const pageTitle = `${p.name} | Pakistani Designer 2026 | AhmadClothesHouse`
      const pageDesc = p.description ? p.description.slice(0, 160) : `Shop ${p.name} from AhmadClothesHouse 2026 Collection.`
      const pageImage = p.image || `${BASE}/og-image.png`

      document.title = pageTitle

      const setMeta = (name, isProperty, value) => {
        const attr = isProperty ? `[property="${name}"]` : `[name="${name}"]`
        let el = document.querySelector(`meta${attr}`)
        if (!el) {
          el = document.createElement('meta')
          el.setAttribute(isProperty ? 'property' : 'name', name)
          document.head.appendChild(el)
        }
        el.setAttribute('content', value)
      }

      setMeta('description', false, pageDesc)
      setMeta('robots', false, 'index, follow')
      setMeta('og:title', true, pageTitle)
      setMeta('og:description', true, pageDesc)
      setMeta('og:url', true, pageUrl.replace(/\/$/, '') || '/')
      setMeta('og:image', true, pageImage)
      setMeta('og:type', true, 'product')
      setMeta('product:price:amount', true, p.price)
      setMeta('product:price:currency', true, 'PKR')
    }
  }
}, { immediate: true })

onMounted(() => {
  window.scrollTo(0, 0)
  const targetId = String(props.id || route.params.id)
  if (targetId && product.value?.id) {
    productStore.incrementView(product.value.id || product.value._id)
  }
})
</script>

<style scoped>
.font-playfair {
  font-family: 'Playfair Display', serif;
}

.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
}

.animate-fade-in {
  animation: fadeIn 0.2s ease-out forwards;
}
</style>
