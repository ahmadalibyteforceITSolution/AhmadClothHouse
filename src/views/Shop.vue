<template>
  <div class="min-h-screen bg-[#fafaf8] dark:bg-[#050505] transition-colors duration-700 pb-32">

    <!-- SEO CONTENT (VISUALLY HIDDEN) -->
    <section class="sr-only">
      <h1>Shop Pakistani Designer Suits 2026 | AhmadClothesHouse Luxury Lawn & Couture</h1>
      <p>Explore AhmadClothesHouse's exclusive collection of 2026 unstitched ladies suits, luxury pret, and bridal couture. We offer the finest embroidered Maria B lawn, Sana Safinaz chiffon, and Asim Jofa premium collections with express shipping to USA, UK, Canada, UAE, Australia, and Europe. Buy authentic Pakistani dresses online.</p>
      <ul>
        <li>Pakistani Luxury Lawn 2026 AhmadClothesHouse</li>
        <li>Unstitched Designer Suits Maria B Sana Safinaz</li>
        <li>Luxury Pret Online Boutique Worldwide Shipping</li>
        <li>Bridal Couture Lahore 2026 High-end Wedding Wear</li>
        <li>Buy Pakistani Dresses Online USA UK Canada UAE</li>
        <li>Embroidered Chiffon & Silk Collections 2026</li>
        <li>Latest Party Wear Dresses & Eid Collections 2026</li>
        <li>Global Shipping Pakistani Designer Suits Online</li>
      </ul>
    </section>

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

    <!-- Luxury Filter Bar (Maria B Style) -->
    <div class="sticky top-0 z-40 bg-white/95 dark:bg-[#050505]/95 backdrop-blur-xl border-y border-black/5 dark:border-white/5 mb-20 pt-4 pb-2">
      <div class="max-w-[1700px] mx-auto px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        <!-- Result Count Minimalist -->
        <div class="flex items-center gap-4 order-2 lg:order-1 pt-2 lg:pt-0">
           <span class="text-[9px] font-medium tracking-[0.2em] text-stone-500 uppercase">{{ filteredProducts.length }} Masterpieces Found</span>
        </div>

        <!-- Filters Section -->
        <div class="flex flex-wrap items-center gap-6 lg:gap-14 order-1 lg:order-2 w-full lg:w-auto">
          
          <!-- Product Name Search -->
          <div class="flex flex-col gap-1 relative w-full sm:w-auto">
             <label class="text-[7px] font-black uppercase tracking-[0.3em] text-stone-400 mb-0.5">Item Name</label>
             <div class="luxury-dropdown-container w-full sm:w-auto" @click="isNameOpen = !isNameOpen">
                <div class="luxury-dropdown-selected flex justify-between items-center text-[#111] dark:text-white border-b border-black/10 dark:border-white/10 pb-2">
                   <span class="text-[10px] font-bold tracking-widest uppercase truncate max-w-[150px]">{{ selectedProductName || 'All Items' }}</span>
                   <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-[7px] ml-4 text-stone-400 transition-transform" :class="{'rotate-180': isNameOpen}" />
                </div>
                <transition name="dropdown-reveal">
                   <div v-if="isNameOpen" class="luxury-dropdown-list shadow-2xl border border-black/5 dark:border-white/5">
                      <div class="luxury-dropdown-item" @click="selectedProductName = ''">All Items</div>
                      <div v-for="name in uniqueProductNames" :key="name" class="luxury-dropdown-item" @click="selectedProductName = name">{{ name }}</div>
                   </div>
                </transition>
             </div>
          </div>

          <!-- Category/Nature Filter -->
          <div class="flex flex-col gap-1 relative w-full sm:w-auto">
             <label class="text-[7px] font-black uppercase tracking-[0.3em] text-stone-400 mb-0.5">Collection Type</label>
             <div class="luxury-dropdown-container w-full sm:w-auto" @click="isCatOpen = !isCatOpen" v-click-outside="() => isCatOpen = false">
                <div class="luxury-dropdown-selected flex justify-between items-center text-[#111] dark:text-white border-b border-black/10 dark:border-white/10 pb-2">
                   <span class="text-[10px] font-bold tracking-widest uppercase truncate max-w-[150px]">{{ selectedCategory || 'All Types' }}</span>
                   <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-[7px] ml-4 text-stone-400 transition-transform" :class="{'rotate-180': isCatOpen}" />
                </div>
                <transition name="dropdown-reveal">
                   <div v-if="isCatOpen" class="luxury-dropdown-list shadow-2xl border border-black/5 dark:border-white/5">
                      <div class="luxury-dropdown-item" @click="selectedCategory = ''">All Types</div>
                      <div v-for="cat in uniqueCategories" :key="cat" class="luxury-dropdown-item" @click="selectedCategory = cat">{{ cat }}</div>
                   </div>
                </transition>
             </div>
          </div>

          <!-- Price Range Slider -->
          <div class="flex flex-col gap-2 min-w-[200px] w-full sm:w-auto pt-1">
             <div class="flex justify-between items-baseline mb-1">
               <label class="text-[7px] font-black uppercase tracking-[0.3em] text-stone-400">Limit</label>
               <span class="text-[10px] font-bold tracking-wider text-[#111] dark:text-white font-playfair">Rs. {{ Number(maxPrice).toLocaleString() }}</span>
             </div>
             <input type="range" v-model="maxPrice" min="0" max="500000" step="1000" class="luxury-range">
          </div>

          <!-- Mode Toggle (Minimalist) -->
          <div class="flex gap-4 items-center hidden sm:flex pt-3 lg:pt-0">
             <button @click="viewMode = 'grid'" :class="viewMode === 'grid' ? 'text-[#111] dark:text-white' : 'text-stone-300 dark:text-stone-700 hover:text-[#111] dark:hover:text-white'" class="transition-colors"><font-awesome-icon icon="fa-solid fa-grip" class="text-[12px]" /></button>
             <button @click="viewMode = 'list'" :class="viewMode === 'list' ? 'text-[#111] dark:text-white' : 'text-stone-300 dark:text-stone-700 hover:text-[#111] dark:hover:text-white'" class="transition-colors"><font-awesome-icon icon="fa-solid fa-list" class="text-[12px]" /></button>
          </div>
        </div>
      </div>
    </div>

    <!-- Google AdSense: Shop Page — Slot B (unique to this page) -->
    <div class="max-w-7xl mx-auto px-6 mb-12">
      <AdSenseUnit slot="7312321912" format="auto" :full-width-responsive="true" />
    </div>

    <!-- Product Collection Grid -->
    <div class="max-w-7xl mx-auto px-6 min-h-[60vh]">
      <div v-if="filteredProducts.length > 0">
        <div :class="viewMode === 'list' ? 'flex flex-col gap-16 max-w-3xl mx-auto' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-20'">
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

import Hero1 from "../assets/ai_new/hero_collage_1.png"
import Hero2 from "../assets/ai_new/hero_collage_2.png"
import Hero4 from "../assets/ai_new/hero_collage_4.png"
import BridalHighlight from "../assets/ai_new/bridal_highlight.png"

const route = useRoute()
const router = useRouter()
const productStore = useProductsStore()

onMounted(() => {
  productStore.fetchProducts()
})

const currentPage = ref(1)
const itemsPerPage = 8

const viewMode = ref('grid')

const selectedCategory = ref('')
const selectedProductName = ref('')
const maxPrice = ref(500000)

const isCatOpen = ref(false)
const isNameOpen = ref(false)

const category = computed(() => route.params.category)

watch([selectedCategory, category, () => route.query.q], () => {
  currentPage.value = 1
  const activeCat = selectedCategory.value || category.value || 'All Collections'
  document.title = `${activeCat} | Shop Pakistani Designer Suits 2026 - AhmadClothesHouse`
  
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', `Browse our latest ${activeCat} Pakistani designer suits 2026 at AhmadClothesHouse. Premium unstitched fabrics, luxury pret, and bridal wear shipping to USA, UK, and worldwide.`)
  }
}, { immediate: true })

const displayTitleParts = computed(() => {
  let main = 'All'
  let accent = 'Collections'
  
  if (route.query.q) {
    main = 'Search'
    accent = `"${route.query.q}"`
  } else if (category.value) {
    const cat = category.value.toLowerCase()
    if (cat === 'discount') {
      main = 'Luxury'
      accent = 'Discounts'
    } else if (cat === 'sale offer') {
      main = 'Seasonal'
      accent = 'Sale Event'
    } else if (cat === 'office') {
      main = 'Office'
      accent = 'Corporate Luxe'
    } else {
      const parts = category.value.split('-')
      main = parts[0].toUpperCase()
      accent = parts.slice(1).join(' ').toUpperCase() || 'COLLECTION'
    }
  }
  
  return { main, accent }
})

const headerImage = computed(() => {
  const cat = category.value?.toLowerCase()
  const mapping = {
    'unstitched-lawn': Hero1,
    'pret': Hero4,
    'bridal': BridalHighlight,
    'm.print': Hero2,
    'discount': Hero1,
    'sale offer': Hero2,
    'office': Hero4
  }
  return mapping[cat] || Hero4
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
    // 1. Discount/Sale Logic
    if (catRoute === 'discount' || catRoute === 'sale offer') {
      if (p.discount <= 0 && !p.category?.toLowerCase().includes('sale') && !p.parentCategory?.toLowerCase().includes('sale')) return false
    }
    
    // 2. Search Logic
    if (query && !p.name.toLowerCase().includes(query) && !p.category?.toLowerCase().includes(query)) return false
    
    // 3. Name Filter
    if (nameFilter && !p.name.toLowerCase().includes(nameFilter)) return false
    
    // 4. Category Logic (Normal Categories)
    if (catRoute && catRoute !== 'discount' && catRoute !== 'sale offer') {
      if (p.category?.toLowerCase() !== catRoute && p.parentCategory?.toLowerCase() !== catRoute) return false
    }

    // 5. Secondary Filter
    if (catFilter && p.category?.toLowerCase() !== catFilter) return false
    
    // 6. Price Logic
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
  min-width: 140px;
  cursor: pointer;
  user-select: none;
}

.luxury-dropdown-selected {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #111;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}
.dark .luxury-dropdown-selected { color: white; }

.luxury-dropdown-list {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: white;
  border-top: 2px solid #111;
  z-index: 100;
  max-height: 250px;
  overflow-y: auto;
  border-radius: 0;
}
.dark .luxury-dropdown-list { 
  background: #0a0a0a; 
  border-top: 2px solid white;
}

.luxury-dropdown-item {
  padding: 14px 16px;
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #555;
  transition: all 0.2s ease;
  cursor: pointer;
  border-bottom: 1px solid rgba(0,0,0,0.03);
}
.dark .luxury-dropdown-item { 
  color: #aaa; 
  border-bottom: 1px solid rgba(255,255,255,0.03);
}

.luxury-dropdown-item:hover {
  background: #fdfdfd;
  color: #111;
  padding-left: 20px;
}
.dark .luxury-dropdown-item:hover {
  background: #111;
  color: white;
}

/* Custom Scrollbar Minimalist */
.luxury-dropdown-list::-webkit-scrollbar { width: 4px; }
.luxury-dropdown-list::-webkit-scrollbar-track { background: transparent; }
.luxury-dropdown-list::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.1); }
.dark .luxury-dropdown-list::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); }

.dropdown-reveal-enter-active, .dropdown-reveal-leave-active {
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
}
.dropdown-reveal-enter-from, .dropdown-reveal-leave-to {
  opacity: 0;
  transform: translateY(5px);
}

.shadow-2xl {
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.08);
}
.dark .shadow-2xl {
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.6);
}

/* Minimalist Range Slider */
.luxury-range {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  outline: none;
}
.dark .luxury-range { background: rgba(255, 255, 255, 0.1); }

.luxury-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  background: #111;
  border: 1px solid #fff;
  border-radius: 0%;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
}
.dark .luxury-range::-webkit-slider-thumb {
  background: #fff;
  border-color: #111;
}

.luxury-range::-webkit-slider-thumb:hover { 
  transform: scale(1.2); 
}

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
