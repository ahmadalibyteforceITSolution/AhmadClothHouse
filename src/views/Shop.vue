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

    <!-- NEW LUXURY TOOLBAR (Show Filters, Switcher, Sort) -->
    <div class="flex items-center justify-between py-6 px-4 md:px-8 border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-xl sticky top-0 z-[200] transition-colors duration-500">
      <!-- Left: Show Filters Toggle -->
      <button @click="showFilters = !showFilters" 
        class="flex items-center gap-3 group px-4 py-2 hover:bg-stone-50 dark:hover:bg-[#111] transition-all">
        <font-awesome-icon icon="fa-solid fa-sliders" 
          :class="showFilters ? 'text-[var(--primary-gold)]' : 'text-stone-400 group-hover:text-black dark:group-hover:text-white'"
          class="text-xs transition-colors" />
        <span class="text-[10px] font-black tracking-[0.3em] uppercase transition-colors"
          :class="showFilters ? 'text-black dark:text-white' : 'text-stone-400 group-hover:text-black dark:group-hover:text-white'">
          {{ showFilters ? 'Hide Filters' : "Show Filter's" }}
        </span>
      </button>

      <!-- Right: Switcher & Sort -->
      <div class="flex items-center gap-8">
        <!-- Grid Switcher -->
        <div class="hidden sm:flex items-center gap-2">
          <button @click="gridCols = 2" 
            :class="gridCols === 2 ? 'bg-stone-100 dark:bg-[#222] text-[var(--primary-gold)]' : 'text-stone-300 dark:text-stone-600 hover:text-black dark:hover:text-white'"
            class="w-10 h-10 flex items-center justify-center rounded-sm transition-all">
            <div class="flex gap-0.5">
              <div class="w-2.5 h-6 border-2 border-current rounded-[1px]"></div>
              <div class="w-2.5 h-6 border-2 border-current rounded-[1px]"></div>
            </div>
          </button>
          <button @click="gridCols = 3" 
            :class="gridCols === 3 ? 'bg-stone-100 dark:bg-[#222] text-[var(--primary-gold)]' : 'text-stone-300 dark:text-stone-600 hover:text-black dark:hover:text-white'"
            class="w-10 h-10 flex items-center justify-center rounded-sm transition-all">
            <div class="grid grid-cols-2 gap-0.5">
              <div v-for="i in 4" :key="i" class="w-2.5 h-2.5 border-2 border-current rounded-[1px]"></div>
            </div>
          </button>
          <button @click="gridCols = 4" 
            :class="gridCols === 4 ? 'bg-stone-100 dark:bg-[#222] text-[var(--primary-gold)]' : 'text-stone-300 dark:text-stone-600 hover:text-black dark:hover:text-white'"
            class="w-10 h-10 flex items-center justify-center rounded-sm transition-all">
            <div class="grid grid-cols-3 gap-0.5">
              <div v-for="i in 6" :key="i" class="w-2 h-2.5 border-2 border-current rounded-[1px]"></div>
            </div>
          </button>
        </div>

        <!-- Sort Button -->
        <div class="relative group">
          <button class="flex items-center gap-4 bg-stone-50 dark:bg-[#111] px-6 py-3 border border-black/5 dark:border-white/5 hover:border-[var(--primary-gold)] transition-all rounded-sm">
            <font-awesome-icon icon="fa-solid fa-arrow-up-wide-short" class="text-[10px] text-[var(--primary-gold)]" />
            <span class="text-[9px] font-black tracking-widest uppercase text-[#111] dark:text-white">{{ sortBy === 'default' ? 'Sort' : sortBy }}</span>
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-[8px] text-stone-400" />
          </button>
          <!-- Sort Dropdown -->
          <div class="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-[#111] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] border border-black/10 dark:border-white/10 py-3 z-[300] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <button v-for="option in ['Featured', 'Most relevant', 'Best selling', 'Alphabetically, A-Z', 'Alphabetically, Z-A', 'Price, low to high', 'Price, high to low', 'Date, old to new', 'Date, new to old']"
              :key="option"
              @click="sortBy = option" 
              :class="sortBy === option ? 'bg-stone-100 dark:bg-[#222] text-black dark:text-white font-bold' : 'text-stone-500 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-[#1a1a1a] hover:text-black dark:hover:text-white'"
              class="w-full text-left px-6 py-4 text-[10px] tracking-[0.1em] uppercase transition-all duration-200">
              {{ option }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- COLLAPSIBLE FILTERS SECTION -->
    <transition 
      @before-enter="beforeFilterEnter" 
      @enter="filterEnter" 
      @leave="filterLeave">
      <div v-if="showFilters" class="bg-stone-50 dark:bg-[#080808] border-b border-black/5 dark:border-white/5 overflow-hidden">
        <div class="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 md:p-12">
          
          <!-- Product Name Search -->
          <div class="md:col-span-3 relative group">
            <div class="flex items-center gap-4 mb-3">
              <span class="w-2 h-2 rounded-full border border-[var(--primary-gold)]"></span>
              <label class="text-[8px] font-black tracking-[0.4em] text-stone-400 uppercase">Item Name</label>
            </div>
            <div class="relative overflow-hidden">
              <select v-model="selectedProductName"
                class="w-full bg-white dark:bg-[#111] border border-black/5 dark:border-white/5 px-6 py-5 text-[10px] font-bold tracking-widest uppercase text-[#111] dark:text-white outline-none cursor-pointer hover:bg-stone-50 dark:hover:bg-[#151515] transition-all appearance-none">
                <option value="">All Masterpieces</option>
                <option v-for="name in uniqueProductNames" :key="name" :value="name">{{ name }}</option>
              </select>
              <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-[10px] text-[var(--primary-gold)]" />
              </div>
            </div>
          </div>

          <!-- Category Filter -->
          <div class="md:col-span-3 relative group">
            <div class="flex items-center gap-4 mb-3">
              <span class="w-2 h-2 rounded-full border border-[var(--primary-gold)]"></span>
              <label class="text-[8px] font-black tracking-[0.4em] text-stone-400 uppercase">Collection</label>
            </div>
            <div class="relative overflow-hidden">
              <select v-model="selectedCategory"
                class="w-full bg-white dark:bg-[#111] border border-black/5 dark:border-white/5 px-6 py-5 text-[10px] font-bold tracking-widest uppercase text-[#111] dark:text-white outline-none cursor-pointer hover:bg-stone-50 dark:hover:bg-[#151515] transition-all appearance-none">
                <option value="">All Collections</option>
                <option v-for="cat in uniqueCategories" :key="cat" :value="cat">{{ cat }}</option>
              </select>
              <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-[10px] text-[var(--primary-gold)]" />
              </div>
            </div>
          </div>

          <!-- Result Info -->
          <div class="md:col-span-2 flex flex-col items-center justify-center p-4 bg-white dark:bg-[#111] border border-black/5 dark:border-white/5">
            <span class="text-2xl font-playfair italic text-[var(--primary-gold)]">{{ filteredProducts.length }}</span>
            <span class="text-[7px] font-black tracking-[0.2em] text-stone-400 uppercase mt-1">Masterpieces Found</span>
          </div>

          <!-- Price Slider -->
          <div class="md:col-span-4 flex flex-col gap-6 pt-2">
            <div class="flex justify-between items-center px-1">
              <div class="flex items-center gap-4">
                <span class="w-2 h-2 rounded-full border border-[var(--primary-gold)]"></span>
                <label class="text-[8px] font-black tracking-[0.4em] text-stone-400 uppercase">Investment Limit</label>
              </div>
              <span class="text-[14px] font-medium font-playfair italic text-[var(--primary-gold)]">Rs. {{ Number(maxPrice).toLocaleString() }}</span>
            </div>
            <div class="relative py-4">
              <input type="range" min="0" max="500000" step="1000" v-model="maxPrice"
                class="luxury-home-range w-full cursor-pointer">
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Google AdSense: Shop Page — Slot B (unique to this page) -->
    <div class="max-w-7xl mx-auto px-6 mb-12">
      <AdSenseUnit slot="7312321912" format="auto" :full-width-responsive="true" />
    </div>

    <!-- Product Collection Grid -->
    <div class="max-w-7xl mx-auto px-6 min-h-[60vh]">
      <div v-if="filteredProducts.length > 0">
        <div class="max-w-[1700px] mx-auto grid gap-x-8 gap-y-16"
          :class="viewMode === 'list' ? 'flex flex-col gap-16 max-w-3xl mx-auto' : {
            'grid-cols-1 sm:grid-cols-2': gridCols === 2,
            'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3': gridCols === 3,
            'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4': gridCols === 4
          }">
          <div v-for="(product, i) in displayedProducts" :key="product.id" 
            class="animate-reveal group/grid-item" :style="{ animationDelay: `${(i % 4) * 0.12}s` }">
            <div class="luxury-card-wrapper relative transition-all duration-700">
               <!-- Decorative Corner Accents -->
               <div class="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-[var(--primary-gold)] opacity-0 group-hover/grid-item:opacity-100 transition-all duration-500"></div>
               <div class="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-[var(--primary-gold)] opacity-0 group-hover/grid-item:opacity-100 transition-all duration-500"></div>
               
               <ProductCard :product="product" @click-product="goToDetail" class="hover-3d-effect" />
               
               <!-- Subtle Reflection Overlay -->
               <div class="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover/grid-item:opacity-100 transition-opacity duration-1000"></div>
            </div>
          </div>
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
const gridCols = ref(4)
const sortBy = ref('default')
const showFilters = ref(false)

import gsap from 'gsap'

const beforeFilterEnter = (el) => {
  el.style.height = '0'
  el.style.opacity = '0'
}
const filterEnter = (el, done) => {
  gsap.to(el, {
    height: 'auto',
    opacity: 1,
    duration: 0.6,
    ease: 'power3.out',
    onComplete: done
  })
}
const filterLeave = (el, done) => {
  gsap.to(el, {
    height: 0,
    opacity: 0,
    duration: 0.5,
    ease: 'power3.inOut',
    onComplete: done
  })
}

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
    } else if (cat === 'hero') {
      main = 'Hero'
      accent = 'Collection 2026'
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
    'office': Hero4,
    'hero': Hero1
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
  
  let result = productStore.products.filter(p => {
    // 1. Discount/Sale Logic
    if (catRoute === 'discount' || catRoute === 'sale offer') {
      if (p.discount <= 0 && !p.category?.toLowerCase().includes('sale') && !p.parentCategory?.toLowerCase().includes('sale')) return false
    }

    // 1b. Hero Collection Logic
    if (catRoute === 'hero') {
      if (!p.id || !String(p.id).startsWith('hero-')) return false
    }
    
    // 2. Search Logic
    if (query && !p.name.toLowerCase().includes(query) && !p.category?.toLowerCase().includes(query)) return false
    
    // 3. Name Filter
    if (nameFilter && !p.name.toLowerCase().includes(nameFilter)) return false
    
    // 4. Category Logic (Normal Categories)
    if (catRoute && catRoute !== 'discount' && catRoute !== 'sale offer' && catRoute !== 'hero') {
      if (p.category?.toLowerCase() !== catRoute && p.parentCategory?.toLowerCase() !== catRoute) return false
    }

    // 5. Secondary Filter
    if (catFilter && p.category?.toLowerCase() !== catFilter) return false
    
    // 6. Price Logic
    if (p.price > maxPrice.value) return false
    
    return true
  })

  // 7. Advanced Sorting logic
  if (sortBy.value === 'Price, low to high') {
    result.sort((a, b) => a.price - b.price)
  } else if (sortBy.value === 'Price, high to low') {
    result.sort((a, b) => b.price - a.price)
  } else if (sortBy.value === 'Date, new to old') {
    result.sort((a, b) => b.id - a.id)
  } else if (sortBy.value === 'Date, old to new') {
    result.sort((a, b) => a.id - b.id)
  } else if (sortBy.value === 'Alphabetically, A-Z') {
    result.sort((a, b) => (a.title || a.name).localeCompare(b.title || b.name))
  } else if (sortBy.value === 'Alphabetically, Z-A') {
    result.sort((a, b) => (b.title || b.name).localeCompare(a.title || a.name))
  } else if (sortBy.value === 'Best selling') {
    result.sort((a, b) => (b.sales || 0) - (a.sales || 0))
  }

  return result
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
  maxPrice.value = 500000
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
