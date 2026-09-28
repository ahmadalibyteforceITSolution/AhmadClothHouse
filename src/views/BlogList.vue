<template>
  <div class="blog-list-page bg-[#FAF9F5] dark:bg-[#0A0908] min-h-screen pb-32 transition-colors duration-500 text-stone-900 dark:text-stone-100">
    
    <!-- ══════════ EDITORIAL MASTHEAD ══════════ -->
    <header class="pt-10 sm:pt-14 pb-12 px-6 sm:px-10 lg:px-14 border-b border-stone-200/70 dark:border-white/10 text-center max-w-5xl mx-auto">
      <!-- Breadcrumb -->
      <nav class="flex items-center justify-center gap-2 text-[11px] text-stone-500 uppercase tracking-widest mb-6">
        <router-link to="/" class="hover:text-black dark:hover:text-white transition-colors">Home</router-link>
        <span>&rsaquo;</span>
        <span class="text-[#D4AF37] font-semibold">The Fashion Journal</span>
      </nav>

      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 dark:bg-white/5 border border-[#D4AF37]/30 mb-4">
        <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
        <span class="text-[9px] uppercase font-bold tracking-[0.35em] text-[#8B6508] dark:text-[#D4AF37]">The House Chronicles</span>
      </div>

      <!-- Main Headline -->
      <h1 class="text-3xl sm:text-5xl lg:text-6xl font-editorial font-normal tracking-tight text-[#161412] dark:text-white mb-4">
        The Couture Journal
      </h1>

      <p class="text-xs sm:text-sm md:text-base text-stone-600 dark:text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
        Exploring the artistry, intricate embroideries, bridal heritage, and seasonal styling guides from Lahore's master artisans.
      </p>
    </header>

    <div class="max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-14 pt-10">

      <!-- ══════════ FEATURED LEAD STORY (HERO SPOTLIGHT) ══════════ -->
      <section v-if="filteredBlogs.length > 0" class="mb-16">
        <div 
          @click="router.push(`/blog/${filteredBlogs[0].slug}`)"
          class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white dark:bg-[#11100D] p-6 sm:p-8 lg:p-10 rounded-2xl border border-stone-200/80 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group"
        >
          <!-- Left Cover Photo -->
          <div class="lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-xl bg-stone-100 dark:bg-stone-900">
            <img 
              :src="filteredBlogs[0].image || DEFAULT_FALLBACK_IMAGE" 
              :alt="filteredBlogs[0].title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              @error="(e) => e.target.src = DEFAULT_FALLBACK_IMAGE"
            />
            <div class="absolute top-4 left-4 bg-[#141414]/90 backdrop-blur-md px-3.5 py-1.5 rounded-md border border-[#D4AF37]/40">
              <span class="text-[9px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">Featured Story &bull; {{ filteredBlogs[0].category }}</span>
            </div>
          </div>

          <!-- Right Content -->
          <div class="lg:col-span-5 flex flex-col justify-center space-y-4">
            <div class="flex items-center gap-3 text-[10px] text-stone-400 uppercase tracking-widest font-semibold">
              <span>{{ filteredBlogs[0].date }}</span>
              <span>&bull;</span>
              <span>{{ filteredBlogs[0].author || 'Ahmad Couture Team' }}</span>
            </div>

            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-editorial font-normal text-stone-900 dark:text-white group-hover:text-[#B8860B] dark:group-hover:text-[#D4AF37] transition-colors leading-tight">
              {{ filteredBlogs[0].title }}
            </h2>

            <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light leading-relaxed line-clamp-3">
              {{ filteredBlogs[0].summary }}
            </p>

            <div class="pt-2">
              <span class="inline-flex items-center gap-2 text-xs font-bold text-[#B8860B] dark:text-[#D4AF37] uppercase tracking-[0.2em] group-hover:translate-x-1.5 transition-transform">
                Read Full Manuscript &rarr;
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════ CATEGORIES FILTER BAR ══════════ -->
      <div class="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12 pb-6 border-b border-stone-200/60 dark:border-white/10">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="selectedCategory = cat"
          :class="['px-5 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-300 rounded-full cursor-pointer', 
                   selectedCategory === cat 
                     ? 'bg-[#141414] dark:bg-white text-white dark:text-black shadow-md' 
                     : 'bg-white dark:bg-white/5 border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-300 hover:border-[#D4AF37] hover:text-[#D4AF37]']"
        >
          {{ cat }}
        </button>
      </div>

      <!-- ══════════ EDITORIAL GRID (Remaining Stories) ══════════ -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        <article 
          v-for="(post, index) in filteredBlogs.slice(1)" 
          :key="post.id" 
          class="group cursor-pointer flex flex-col bg-white dark:bg-[#12110E] border border-stone-200/70 dark:border-white/10 p-4 sm:p-5 rounded-2xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
          @click="router.push(`/blog/${post.slug}`)"
        >
          <div class="relative aspect-[4/3] overflow-hidden mb-5 bg-stone-100 dark:bg-white/5 rounded-xl">
            <img 
              :src="post.image || DEFAULT_FALLBACK_IMAGE" 
              :alt="post.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              @error="(e) => e.target.src = DEFAULT_FALLBACK_IMAGE"
            />
            <div class="absolute top-3 left-3 bg-[#141414]/85 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10">
              <span class="text-[8.5px] font-bold uppercase text-[#D4AF37] tracking-wider">{{ post.category }}</span>
            </div>
          </div>

          <div class="space-y-2.5 flex-1 flex flex-col px-1">
            <div class="flex items-center gap-2 text-[9.5px] text-stone-400 uppercase tracking-widest font-semibold">
              <span>{{ post.date }}</span>
              <span>&bull;</span>
              <span>{{ post.author }}</span>
            </div>

            <h2 class="text-base sm:text-lg font-editorial font-normal text-stone-900 dark:text-white group-hover:text-[#B8860B] dark:group-hover:text-[#D4AF37] transition-colors leading-snug line-clamp-2">
              {{ post.title }}
            </h2>

            <p class="text-stone-500 dark:text-stone-400 text-xs leading-relaxed line-clamp-2 font-light">
              {{ post.summary }}
            </p>

            <div class="pt-3 mt-auto flex items-center justify-between border-t border-stone-100 dark:border-white/5">
              <span class="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#B8860B] dark:text-[#D4AF37] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                Read Article
                <span>&rarr;</span>
              </span>
              <span class="text-[9.5px] text-stone-400 font-medium">4 min read</span>
            </div>
          </div>
        </article>
      </div>

      <!-- Pagination / Load More -->
      <div v-if="displayLimit < totalFiltered" class="mt-16 text-center">
        <button 
          @click="displayLimit += 12"
          class="px-8 py-3.5 bg-[#141414] hover:bg-[#B8860B] dark:bg-white dark:hover:bg-[#B8860B] text-white dark:text-black dark:hover:text-white text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-full shadow-md cursor-pointer"
        >
          Load More Manuscripts
        </button>
      </div>

      <!-- Collapsible Partner Portal Section at the bottom of Blog List -->
      <section class="mt-24 pt-12 border-t border-stone-200 dark:border-white/10">
        <div class="text-center mb-8">
          <button 
            @click="showPartnerPortal = !showPartnerPortal"
            class="group inline-flex items-center gap-3 px-8 py-3 border border-amber-500/30 hover:border-amber-500 text-[10px] font-black tracking-[0.2em] text-stone-600 dark:text-stone-300 uppercase hover:text-amber-500 transition-all duration-300 rounded cursor-pointer"
          >
            <span>{{ showPartnerPortal ? 'Hide' : 'Show' }} Publisher & Backlink Guidelines</span>
            <span class="text-amber-500 transition-transform duration-300" :class="{ 'rotate-180': showPartnerPortal }">▼</span>
          </button>
        </div>

        <transition name="fade-slide">
          <div v-if="showPartnerPortal" class="bg-white dark:bg-[#0c0c0c] border border-stone-200/60 dark:border-white/5 p-8 md:p-12 rounded-xl shadow-sm space-y-12">
            
            <!-- Strategic Header -->
            <div class="text-center max-w-2xl mx-auto space-y-3">
              <h3 class="text-xl font-playfair text-[var(--luxury-black)] dark:text-white uppercase tracking-wider">
                SEO Linking &amp; Anchor Text Distribution Guide
              </h3>
              <p class="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                If you are a fashion blogger, directory moderator, or guest writer reviewing the **Ahmad Clothes House Unstitched Collection** or **Ahmad Clothes House**, use our optimized anchor text mix. This ensures search engines index link citations naturally.
              </p>
            </div>

            <!-- Visual Progress Bar -->
            <div class="space-y-4 max-w-3xl mx-auto">
              <div class="flex h-5 rounded-full overflow-hidden text-[8px] font-black text-white text-center tracking-widest uppercase">
                <div class="bg-amber-600 flex items-center justify-center" style="width: 40%">40% BRAND</div>
                <div class="bg-amber-500 flex items-center justify-center" style="width: 30%">30% PARTIAL</div>
                <div class="bg-[#4A0E0E] flex items-center justify-center" style="width: 20%">20% EXACT</div>
                <div class="bg-stone-500 flex items-center justify-center" style="width: 10%">10% GENERIC</div>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-[9px] tracking-wider uppercase font-semibold text-stone-500 text-center font-montserrat">
                <div class="flex items-center justify-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-amber-600"></span> Branded (40%)</div>
                <div class="flex items-center justify-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Partial Match (30%)</div>
                <div class="flex items-center justify-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-[#4A0E0E]"></span> Exact Match (20%)</div>
                <div class="flex items-center justify-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-stone-500"></span> Generic (10%)</div>
              </div>
            </div>

            <!-- Quick Copy Link Blocks -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
              <!-- Branded (40%) -->
              <div class="space-y-3 p-6 bg-stone-50 dark:bg-white/5 rounded-lg border border-stone-200/50 dark:border-white/5">
                <div class="flex justify-between items-center"><span class="text-xs font-bold text-amber-600 uppercase tracking-wider">Branded Anchors (40%)</span></div>
                <div class="space-y-2.5">
                  <div v-for="(link, i) in brandedLinks" :key="i" class="flex justify-between items-center text-[10px] p-2 bg-white dark:bg-black/20 rounded border border-stone-100 dark:border-white/5">
                    <span class="truncate text-stone-500 dark:text-stone-400">"{{ link.anchor }}"</span>
                    <button @click="copyLinkHtml(link)" class="text-amber-500 hover:text-amber-600 font-bold uppercase tracking-wider pl-4 flex-shrink-0 cursor-pointer">Copy HTML</button>
                  </div>
                </div>
              </div>

              <!-- Partial Match (30%) -->
              <div class="space-y-3 p-6 bg-stone-50 dark:bg-white/5 rounded-lg border border-stone-200/50 dark:border-white/5">
                <div class="flex justify-between items-center"><span class="text-xs font-bold text-amber-500 uppercase tracking-wider">Partial Match (30%)</span></div>
                <div class="space-y-2.5">
                  <div v-for="(link, i) in partialLinks" :key="i" class="flex justify-between items-center text-[10px] p-2 bg-white dark:bg-black/20 rounded border border-stone-100 dark:border-white/5">
                    <span class="truncate text-stone-500 dark:text-stone-400">"{{ link.anchor }}"</span>
                    <button @click="copyLinkHtml(link)" class="text-amber-500 hover:text-amber-600 font-bold uppercase tracking-wider pl-4 flex-shrink-0 cursor-pointer">Copy HTML</button>
                  </div>
                </div>
              </div>

              <!-- Exact Match (20%) -->
              <div class="space-y-3 p-6 bg-stone-50 dark:bg-white/5 rounded-lg border border-stone-200/50 dark:border-white/5">
                <div class="flex justify-between items-center"><span class="text-xs font-bold text-[#4A0E0E] dark:text-rose-400 uppercase tracking-wider">Exact Match (20%)</span></div>
                <div class="space-y-2.5">
                  <div v-for="(link, i) in exactLinks" :key="i" class="flex justify-between items-center text-[10px] p-2 bg-white dark:bg-black/20 rounded border border-stone-100 dark:border-white/5">
                    <span class="truncate text-stone-500 dark:text-stone-400">"{{ link.anchor }}"</span>
                    <button @click="copyLinkHtml(link)" class="text-amber-500 hover:text-amber-600 font-bold uppercase tracking-wider pl-4 flex-shrink-0 cursor-pointer">Copy HTML</button>
                  </div>
                </div>
              </div>

              <!-- Generic (10%) -->
              <div class="space-y-3 p-6 bg-stone-50 dark:bg-white/5 rounded-lg border border-stone-200/50 dark:border-white/5">
                <div class="flex justify-between items-center"><span class="text-xs font-bold text-stone-500 uppercase tracking-wider">Generic (10%)</span></div>
                <div class="space-y-2.5">
                  <div v-for="(link, i) in genericLinks" :key="i" class="flex justify-between items-center text-[10px] p-2 bg-white dark:bg-black/20 rounded border border-stone-100 dark:border-white/5">
                    <span class="truncate text-stone-500 dark:text-stone-400">"{{ link.anchor }}"</span>
                    <button @click="copyLinkHtml(link)" class="text-amber-500 hover:text-amber-600 font-bold uppercase tracking-wider pl-4 flex-shrink-0 cursor-pointer">Copy HTML</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- SEO Semantic Map Tables -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <!-- High CPC Keywords -->
              <div class="border border-stone-200/60 dark:border-white/5 p-6 rounded-lg bg-stone-50/50 dark:bg-white/5">
                <h4 class="text-xs font-bold uppercase tracking-wider text-[var(--luxury-black)] dark:text-white mb-4">High CPC Publisher Targets</h4>
                <div class="max-h-40 overflow-y-auto scrollbar-none text-[10px] space-y-2 text-stone-500">
                  <div v-for="kw in cpcKeywords" :key="kw" class="flex justify-between border-b border-stone-200/30 dark:border-white/5 pb-1">
                    <span>{{ kw }}</span>
                    <span class="text-green-600 font-semibold uppercase">High Value</span>
                  </div>
                </div>
              </div>

              <!-- Category Keywords -->
              <div class="border border-stone-200/60 dark:border-white/5 p-6 rounded-lg bg-stone-50/50 dark:bg-white/5">
                <h4 class="text-xs font-bold uppercase tracking-wider text-[var(--luxury-black)] dark:text-white mb-4">Boutique Category Semantics</h4>
                <div class="max-h-40 overflow-y-auto scrollbar-none text-[10px] space-y-2 text-stone-500">
                  <div v-for="cat in categoryMappings" :key="cat.name" class="flex flex-col border-b border-stone-200/30 dark:border-white/5 pb-1">
                    <span class="font-bold text-stone-700 dark:text-stone-300 mb-0.5">{{ cat.name }}</span>
                    <span class="text-stone-400">{{ cat.terms }}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </transition>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { blogs as staticBlogs } from '../data/blogs'
import { useProductsStore } from '../stores/products'
import Swal from 'sweetalert2'
import Hero4 from "../assets/ai/hero_1.png" // Using hero_1 for a fresh look

const router = useRouter()
const productStore = useProductsStore()
const selectedCategory = ref('All')
const displayLimit = ref(12)
const showPartnerPortal = ref(false)

const BASE_URL = 'https://ahmad-cloths.vercel.app'
const DEFAULT_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1200'

const brandedLinks = [
  { anchor: 'Ahmad Clothes House Online Boutique', url: `${BASE_URL}/` },
  { anchor: 'Ahmad Clothes House Unstitched Collection', url: `${BASE_URL}/shop/Unstitched` },
  { anchor: 'Ahmad Clothes House Luxury Lawn 2026', url: `${BASE_URL}/shop/Lawn` },
  { anchor: 'Ahmad Clothes House Bridal Couture', url: `${BASE_URL}/shop/Bridal` }
]

const partialLinks = [
  { anchor: 'buy unstitched lawn suits', url: `${BASE_URL}/shop/Lawn` },
  { anchor: 'premium cotton suits', url: `${BASE_URL}/shop` },
  { anchor: 'latest lawn collection', url: `${BASE_URL}/shop/Lawn` },
  { anchor: 'embroidered lawn suits', url: `${BASE_URL}/shop/Lawn` }
]

const exactLinks = [
  { anchor: 'buy unstitched lawn suits online', url: `${BASE_URL}/shop` },
  { anchor: 'shop unstitched clothes', url: `${BASE_URL}/shop/Unstitched` },
  { anchor: 'best lawn brands Pakistan', url: `${BASE_URL}/shop` },
  { anchor: 'luxury unstitched dresses Pakistan', url: `${BASE_URL}/shop` }
]

const genericLinks = [
  { anchor: 'visit website', url: `${BASE_URL}/` },
  { anchor: 'learn more', url: `${BASE_URL}/about` },
  { anchor: 'shop now', url: `${BASE_URL}/shop` }
]

const cpcKeywords = [
  'Buy Lawn Suits Online',
  'Pakistani Clothing Brand',
  'Women\'s Fashion Online',
  'Designer Lawn Collection',
  'Luxury Lawn Suits',
  'Branded Lawn Collection',
  'Online Boutique Pakistan',
  'Premium Clothing Store'
]

const categoryMappings = [
  { name: 'Unstitched Fabric', terms: 'Unstitched Suits, Lawn, Dresses, Clothes' },
  { name: 'Lawn Collection', terms: 'Luxury Lawn, Premium Lawn, Summer Lawn, Embroidered' },
  { name: 'Chiffon & Festive', terms: 'Chiffon Collection, Festive, Wedding Collection, Formal' }
]

const copyLinkHtml = (link) => {
  const code = `<a href="${link.url}" target="_blank" rel="noopener">${link.anchor}</a>`
  navigator.clipboard.writeText(code)
  
  Swal.fire({
    title: 'Copied!',
    text: 'HTML backlink code copied to clipboard.',
    icon: 'success',
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    background: '#1A1A1A',
    color: '#FFFFFF',
    iconColor: '#B8860B'
  })
}

onMounted(() => {
  productStore.fetchProducts()
})

const categories = computed(() => {
  const cats = ['All', ...new Set(staticBlogs.map(b => b.category))]
  return cats
})

const blogs = computed(() => {
  // Map static blogs to use product images from the database
  return staticBlogs.map((blog, index) => {
    // Try to find a product in the same category
    const relatedProduct = productStore.products.find(p => 
      p.category?.toLowerCase() === blog.category.toLowerCase() || 
      p.parentCategory?.toLowerCase() === blog.category.toLowerCase()
    )
    
    // Fallback to a random product if no category match
    const fallbackProduct = productStore.products[index % productStore.products.length]
    
    return {
      ...blog,
      image: relatedProduct?.image || fallbackProduct?.image || blog.image
    }
  })
})

const filteredBlogs = computed(() => {
  let result = blogs.value
  if (selectedCategory.value !== 'All') {
    result = blogs.value.filter(b => b.category === selectedCategory.value)
  }
  return result.slice(0, displayLimit.value)
})

const totalFiltered = computed(() => {
  if (selectedCategory.value === 'All') return blogs.value.length
  return blogs.value.filter(b => b.category === selectedCategory.value).length
})
</script>

<style scoped>
.animate-slow-zoom {
  animation: slow-zoom 40s infinite linear alternate;
}

@keyframes slow-zoom {
  from { transform: scale(1); }
  to { transform: scale(1.15); }
}

.animate-reveal {
  animation: reveal-bottom 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

.animate-reveal-delay {
  animation: reveal-bottom 1.5s cubic-bezier(0.19, 1, 0.22, 1) 0.2s forwards;
  opacity: 0;
}

@keyframes reveal-bottom {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
