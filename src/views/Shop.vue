<template>
  <div class="min-h-screen bg-[#fafaf8] dark:bg-[#050505] transition-colors duration-700 pb-32">

    <!-- Cinematic Category Header -->
    <div class="relative h-[60vh] min-h-[450px] overflow-hidden bg-black flex items-center px-6">
      <div class="absolute inset-0 opacity-40">
        <img 
           :src="headerImage" 
           class="w-full h-full object-cover animate-pan"
           alt="Banner"
           fetchpriority="high"
        />
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40"></div>
      
      <div class="max-w-7xl mx-auto w-full relative z-10">
        <div class="flex items-center gap-4 mb-6 animate-reveal">
          <div class="h-[1px] w-12 bg-[var(--primary-gold)]"></div>
          <span class="text-[var(--primary-gold)] font-bold text-[10px] uppercase tracking-[0.5em] block">PAKISTANI DESIGNER SUITS</span>
        </div>
        
        <h1 class="text-5xl md:text-8xl font-light uppercase tracking-tighter leading-none mb-8 text-white transition-all font-playfair italic">
          {{ displayTitleParts.main }}<br>
          <span class="text-[var(--primary-gold)] font-sans tracking-widest font-light ml-2 uppercase">LUXURY UNSTITCHED</span>
        </h1>
        
        <p class="text-[9px] font-black tracking-[0.4em] text-white/40 uppercase max-w-xs leading-relaxed animate-reveal-delay">
          Discover a curated selection of luxury apparel and timeless couture.
        </p>
      </div>

      <!-- Scroll Cue -->
      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
         <div class="w-[1px] h-12 bg-gradient-to-b from-amber-400 to-transparent"></div>
         <span class="text-[7px] font-black uppercase tracking-[0.4em] text-white">DISCOVER</span>
      </div>
    </div>

    <!-- Filter Bar -->
    <div class="sticky top-0 z-40 bg-white/80 dark:bg-[#080808]/80 backdrop-blur-3xl border-b border-[#d4af3711] mb-20">
      <div class="max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        
        <!-- Result Count -->
        <div class="flex items-center gap-4">
           <span class="text-[10px] font-black text-amber-600 dark:text-amber-400 bg-amber-500/5 px-4 py-2 border border-[#d4af371a]">{{ filteredProducts.length }} ITEMS FOUND</span>
        </div>

        <!-- Filters Section -->
        <div class="flex flex-wrap items-center gap-8 lg:gap-12">
          
          <!-- Product Name Search -->
          <div class="flex flex-col gap-2 relative">
             <label class="text-[8px] font-black uppercase tracking-widest text-stone-400">Item Name</label>
             <div class="luxury-dropdown-container" @click="isNameOpen = !isNameOpen">
                <div class="luxury-dropdown-selected">
                   {{ selectedProductName || 'All Items' }}
                   <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-[8px] transition-transform" :class="{'rotate-180': isNameOpen}" />
                </div>
                <transition name="dropdown-reveal">
                   <div v-if="isNameOpen" class="luxury-dropdown-list shadow-3xl">
                      <div class="luxury-dropdown-item" @click="selectedProductName = ''">All Items</div>
                      <div v-for="name in uniqueProductNames" :key="name" class="luxury-dropdown-item" @click="selectedProductName = name">{{ name }}</div>
                   </div>
                </transition>
             </div>
          </div>

          <!-- Category/Nature Filter -->
          <div class="flex flex-col gap-2 relative">
             <label class="text-[8px] font-black uppercase tracking-widest text-stone-400">Item Type</label>
             <div class="luxury-dropdown-container" @click="isCatOpen = !isCatOpen" v-click-outside="() => isCatOpen = false">
                <div class="luxury-dropdown-selected">
                   {{ selectedCategory || 'All Types' }}
                   <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-[8px] transition-transform" :class="{'rotate-180': isCatOpen}" />
                </div>
                <transition name="dropdown-reveal">
                   <div v-if="isCatOpen" class="luxury-dropdown-list shadow-3xl">
                      <div class="luxury-dropdown-item" @click="selectedCategory = ''">All Types</div>
                      <div v-for="cat in uniqueCategories" :key="cat" class="luxury-dropdown-item" @click="selectedCategory = cat">{{ cat }}</div>
                   </div>
                </transition>
             </div>
          </div>

          <!-- Price Range Slider -->
          <div class="flex flex-col gap-3 min-w-[200px]">
             <div class="flex justify-between items-center px-1">
               <label class="text-[8px] font-black uppercase tracking-widest text-stone-400">Price Limit</label>
               <span class="text-[10px] font-black text-amber-600 dark:text-amber-400">Rs. {{ maxPrice }}</span>
             </div>
             <input type="range" v-model="maxPrice" min="0" max="500000" step="1000" class="luxury-range">
          </div>

          <!-- Mode Toggle -->
          <div class="flex gap-2">
             <button class="w-8 h-8 flex items-center justify-center text-amber-500 border border-amber-500/20 bg-amber-500/5"><font-awesome-icon icon="fa-solid fa-grip" class="text-[10px]" /></button>
             <button class="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-amber-500 transition-colors"><font-awesome-icon icon="fa-solid fa-list" class="text-[10px]" /></button>
          </div>
        </div>
      </div>
    </div>

    <!-- Google AdSense: Shop Page — Slot B (unique to this page) -->
    <div class="max-w-7xl mx-auto px-6 mb-12">
      <AdSenseUnit slot="7312321912" format="auto" :full-width-responsive="true" />
    </div>

    <!-- Product Collection Grid -->
    <div class="max-w-7xl mx-auto px-6">
      <div v-if="filteredProducts.length > 0">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-20">
          <ProductCard 
            v-for="(product, i) in displayedProducts" 
            :key="product.id" 
            :product="product" 
            @click-product="goToDetail"
            class="shop-card-reveal"
            :style="{ animationDelay: `${(i % 4) * 0.15}s` }"
          />
        </div>
        
        <!-- Pagination - Luxury Style -->
        <div v-if="totalPages > 1" class="mt-32 pt-16 border-t border-[#d4af3711] flex flex-wrap items-center justify-center gap-6">
           <button 
             @click="currentPage > 1 && (currentPage--)" 
             :disabled="currentPage === 1"
             class="pagination-step-btn"
           >
              <font-awesome-icon icon="fa-solid fa-arrow-left" />
           </button>
 
           <div class="flex items-center gap-4">
              <template v-for="(page, index) in displayedPages" :key="index">
                <button 
                  v-if="page !== '...'"
                  @click="currentPage = page"
                  class="w-10 h-10 flex items-center justify-center rounded-full text-[10px] font-black transition-all duration-500"
                  :class="currentPage === page ? 'bg-amber-500 text-white shadow-xl shadow-amber-500/20 scale-110' : 'text-stone-400 hover:text-amber-500'"
                >
                   {{ page }}
                </button>
                <span v-else class="text-stone-300 font-black px-4">...</span>
              </template>
           </div>
 
           <button 
             @click="currentPage < totalPages && (currentPage++)" 
             :disabled="currentPage === totalPages"
              class="pagination-step-btn"
           >
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
           </button>
        </div>
      </div>

      <div v-else class="h-[50vh] flex flex-col items-center justify-center text-center">
         <div class="w-24 h-24 border border-[#d4af3711] rounded-full flex items-center justify-center mb-10 opacity-40 text-2xl">
            <font-awesome-icon icon="fa-solid fa-shirt" class="text-amber-500/40" />
         </div>
         <h3 class="text-2xl font-black uppercase tracking-[0.2em] text-gray-400 font-playfair italic">No Designs Found</h3>
         <p class="text-[9px] text-stone-400 font-black mt-4 uppercase tracking-[0.4em] max-w-xs leading-loose transition-all">Our collection for this specific category is currently being curated or is temporarily unavailable.</p>
         <button @click="resetFilters" class="mt-12 text-[10px] font-black uppercase text-amber-600 tracking-[0.4em] border-b border-amber-500/20 pb-1 hover:border-amber-500 transition-all">Clear All Filters</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductsStore } from '../stores/products'
import ProductCard from '../components/ProductCard.vue'
import AdSenseUnit from '../components/AdSenseUnit.vue'

const route = useRoute()
const router = useRouter()
const productStore = useProductsStore()

onMounted(() => {
  productStore.fetchProducts()
})

const currentPage = ref(1)
const itemsPerPage = 8

const selectedCategory = ref('')
const selectedProductName = ref('')
const maxPrice = ref(2000)

const isCatOpen = ref(false)
const isNameOpen = ref(false)

const category = computed(() => route.params.category)

watch([selectedCategory, category], ([newCat, routeCat]) => {
  currentPage.value = 1
  const activeCat = newCat || routeCat || 'All Collections'
  document.title = `${activeCat} | Shop Pakistani Designer Suits - AHMADCLOTHESFABRICS`
  
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', `Browse our ${activeCat} collection at AHMADCLOTHESFABRICS. Premium unstitched suits, luxury pret, and bridal wear. Best quality Pakistani designer fashion online.`)
  }
}, { immediate: true })

const displayTitleParts = computed(() => {
  let title = 'All Categories'
  if (route.query.q) title = `Search: ${route.query.q}`
  else if (category.value) title = category.value.replace(/-/g, ' ')
  
  const words = title.split(' ')
  return {
    main: words[0].toUpperCase(),
    accent: words.slice(1).join(' ').toUpperCase() || 'CATALOG'
  }
})

const headerImage = computed(() => {
  const mapping = {
    'unstitched lawn': 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1600&auto=format&fit=crop',
    'unstitched silk': 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=1600&auto=format&fit=crop',
    'unstitched chiffon': 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1600&auto=format&fit=crop',
    'unstitched bridal': 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1600&auto=format&fit=crop',
    'unstitched khaddar': 'https://images.unsplash.com/photo-1445205170230-053b830c6050?w=1600&auto=format&fit=crop',
    'unstitched velvet': 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1600&auto=format&fit=crop'
  }
  return mapping[category.value?.toLowerCase()] || 'https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?w=1600&auto=format&fit=crop'
})

const uniqueCategories = computed(() => {
  const cats = new Set()
  productStore.products.forEach(p => {
    if (p.category) cats.add(p.category)
  })
  return Array.from(cats)
})

const uniqueProductNames = computed(() => {
  const catRoute = category.value?.toLowerCase()
  const catFilter = selectedCategory.value?.toLowerCase()
  
  const names = new Set()
  productStore.products.forEach(p => {
    const matchesRoute = !catRoute ||
      p.category?.toLowerCase() === catRoute ||
      p.parentCategory?.toLowerCase() === catRoute
    const matchesDrop = !catFilter || p.category?.toLowerCase() === catFilter
    if (matchesRoute && matchesDrop && p.name) names.add(p.name)
  })
  return Array.from(names).slice(0, 100)
})

const filteredProducts = computed(() => {
  const query = route.query.q ? String(route.query.q).toLowerCase() : ''
  const catRoute = category.value?.toLowerCase()
  const catFilter = selectedCategory.value?.toLowerCase()
  const nameFilter = selectedProductName.value?.toLowerCase()
  
  return productStore.products.filter(p => {
    if (query && !p.name.toLowerCase().includes(query)) return false
    if (nameFilter && !p.name.toLowerCase().includes(nameFilter)) return false
    if (catRoute && p.category?.toLowerCase() !== catRoute && p.parentCategory?.toLowerCase() !== catRoute) return false
    if (catFilter && p.category?.toLowerCase() !== catFilter) return false
    if (p.price > maxPrice.value) return false
    return true
  })
})

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage))

const displayedPages = computed(() => {
  const pages = []
  if (totalPages.value <= 5) {
    for (let i = 1; i <= totalPages.value; i++) pages.push(i)
    return pages
  }
  pages.push(1)
  let start = Math.max(2, currentPage.value - 1)
  let end = Math.min(totalPages.value - 1, currentPage.value + 1)
  if (currentPage.value <= 2) end = 4
  else if (currentPage.value >= totalPages.value - 1) start = totalPages.value - 3
  if (start > 2) pages.push('...')
  for (let i = start; i <= end; i++) pages.push(i)
  if (end < totalPages.value - 1) pages.push('...')
  pages.push(totalPages.value)
  return pages
})

const displayedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredProducts.value.slice(start, start + itemsPerPage)
})

const resetFilters = () => {
  selectedCategory.value = ''
  selectedProductName.value = ''
  maxPrice.value = 2000
  if (route.query.q) {
    router.push({ path: route.path, query: {} })
  }
}

const goToDetail = (product) => {
  router.push({ name: 'product-detail', params: { id: product.id } })
}
</script>

<script>
// Click outside directive
export default {
  directives: {
    'click-outside': {
      mounted(el, binding) {
        el._clickOutside = (event) => {
          if (!(el === event.target || el.contains(event.target))) {
            binding.value(event)
          }
        }
        document.body.addEventListener('click', el._clickOutside)
      },
      unmounted(el) {
        document.body.removeEventListener('click', el._clickOutside)
      }
    }
  }
}
</script>

<style scoped>
.luxury-dropdown-container {
  position: relative;
  min-width: 160px;
  cursor: pointer;
  user-select: none;
}

.luxury-dropdown-selected {
  border-bottom: 1px solid #d4af3722;
  padding: 10px 0;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #1a1a1a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease;
}
.dark .luxury-dropdown-selected { color: white; }
.luxury-dropdown-container:hover .luxury-dropdown-selected { border-color: #d4af37; padding-left: 8px; }

.luxury-dropdown-list {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #d4af3711;
  z-index: 100;
  max-height: 300px;
  overflow-y: auto;
  padding: 8px;
  border-radius: 4px;
}
.dark .luxury-dropdown-list { 
  background: rgba(8, 8, 8, 0.95); 
  backdrop-filter: blur(20px);
  border-color: rgba(212, 175, 55, 0.1);
}

.luxury-dropdown-item {
  padding: 12px 14px;
  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #666;
  transition: all 0.3s ease;
  border-radius: 4px;
}
.dark .luxury-dropdown-item { color: rgba(255, 255, 255, 0.5); }

.luxury-dropdown-item:hover {
  background: rgba(212, 175, 55, 0.05);
  color: #d4af37;
  padding-left: 18px;
}

/* Custom Scrollbar */
.luxury-dropdown-list::-webkit-scrollbar { width: 3px; }
.luxury-dropdown-list::-webkit-scrollbar-track { background: transparent; }
.luxury-dropdown-list::-webkit-scrollbar-thumb { background: rgba(212, 175, 55, 0.2); border-radius: 10px; }

.dropdown-reveal-enter-active, .dropdown-reveal-leave-active {
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.dropdown-reveal-enter-from, .dropdown-reveal-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.shadow-3xl {
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.15);
}
.dark .shadow-3xl {
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.5);
}

.luxury-range {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 2px;
  background: #d4af3711;
  outline: none;
  accent-color: #d4af37;
}

.luxury-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  background: #d4af37;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
}
.luxury-range::-webkit-slider-thumb:hover { transform: scale(1.4); }

.animate-pan {
  animation: slow-pan 60s infinite alternate linear;
}
@keyframes slow-pan {
  from { transform: scale(1.1) translateX(-5%); }
  to { transform: scale(1.1) translateX(5%); }
}

.animate-reveal { animation: reveal-left 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
.animate-reveal-delay { animation: reveal-left 1.5s cubic-bezier(0.19, 1, 0.22, 1) 0.3s forwards; opacity: 0; }
@keyframes reveal-left {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

.shop-card-reveal {
  opacity: 0;
  animation: card-reveal 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}
@keyframes card-reveal {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.pagination-step-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #d4af3722;
  color: #d4af37;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  cursor: pointer;
}
.pagination-step-btn:hover:not(:disabled) { background: #d4af37; color: white; border-color: #d4af37; }
.pagination-step-btn:disabled { opacity: 0.1; cursor: not-allowed; }
</style>
