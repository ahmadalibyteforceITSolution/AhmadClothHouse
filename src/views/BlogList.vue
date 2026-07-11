<template>
  <div class="blog-list-page bg-[#fafaf8] dark:bg-[#050505] min-h-screen pb-32 transition-colors duration-700">
    
    <!-- Cinematic Blog Hero -->
    <section class="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black mb-20">
      <div class="absolute inset-0 z-0">
        <img :src="Hero4" alt="AhmadClothesHouse Fashion Journal" 
             class="w-full h-full object-cover opacity-50 animate-slow-zoom" />
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[#fafaf8] dark:to-[#050505]"></div>
      </div>

      <div class="max-w-7xl mx-auto px-8 w-full relative z-10 flex flex-col items-center text-center">
        <div class="flex items-center gap-4 mb-6 animate-reveal">
          <div class="h-[1px] w-12 bg-amber-500"></div>
          <span class="text-amber-500 font-bold text-[10px] uppercase tracking-[0.6em]">THE HOUSE JOURNAL</span>
          <div class="h-[1px] w-12 bg-amber-500"></div>
        </div>

        <h1 class="text-6xl md:text-9xl font-playfair italic text-white leading-none tracking-tighter mb-10 drop-shadow-2xl animate-reveal-delay">
          Couture <br>
          <span class="text-stone-400 not-italic font-sans tracking-[0.2em] font-light">COLLECTIVE</span>
        </h1>

        <div class="max-w-xl bg-white/5 backdrop-blur-3xl border border-white/10 p-6 md:p-8 animate-reveal-delay" style="animation-delay: 0.4s">
          <p class="text-[10px] md:text-xs text-white/60 font-medium uppercase tracking-[0.4em] leading-loose italic">
            Exploring the artistry, deep-rooted heritage, and modern evolution of Pakistani high fashion.
          </p>
        </div>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-6">

      <!-- Categories Filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-16">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="selectedCategory = cat"
          :class="['px-6 py-2 text-[10px] font-bold tracking-widest uppercase border transition-all', 
                   selectedCategory === cat ? 'bg-amber-500 border-amber-500 text-black' : 'border-stone-200 dark:border-white/10 text-stone-500 hover:border-amber-500/50']"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Blog Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <article 
          v-for="(post, index) in filteredBlogs" 
          :key="post.id" 
          class="group cursor-pointer"
          @click="router.push(`/blog/${post.slug}`)"
        >
          <div class="relative aspect-[4/5] overflow-hidden mb-6 bg-stone-100 dark:bg-white/5">
            <img 
              :src="post.image || 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800'" 
              :alt="post.title"
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1">
              <span class="text-[8px] font-black uppercase text-black tracking-widest">{{ post.category }}</span>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex items-center gap-4 text-[8px] text-stone-400 uppercase tracking-widest">
              <span>{{ post.date }}</span>
              <span class="w-4 h-[1px] bg-amber-500/30"></span>
              <span>{{ post.author }}</span>
            </div>
            <h2 class="text-xl font-playfair text-[var(--luxury-black)] dark:text-white group-hover:text-amber-500 transition-colors leading-tight">
              {{ post.title }}
            </h2>
            <p class="text-stone-500 dark:text-stone-400 text-xs leading-relaxed line-clamp-2">
              {{ post.summary }}
            </p>
            <div class="pt-2">
              <span class="text-[9px] font-black text-amber-500 uppercase tracking-widest border-b border-amber-500/0 group-hover:border-amber-500/50 transition-all">Read Journal</span>
            </div>
          </div>
        </article>
      </div>

      <!-- Pagination/More (Simple for now) -->
      <div v-if="displayLimit < totalFiltered" class="mt-20 text-center">
        <button 
          @click="displayLimit += 12"
          class="px-10 py-4 bg-[var(--luxury-black)] dark:bg-white text-white dark:text-black text-[10px] font-black tracking-[0.3em] uppercase hover:bg-amber-500 dark:hover:bg-amber-500 transition-all"
        >
          Load More Entries
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
                If you are a fashion blogger, directory moderator, or guest writer reviewing the **Ahmad Fabrics Unstitched Collection** or **Ahmad Cloth House**, use our optimized anchor text mix. This ensures search engines index link citations naturally.
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

const brandedLinks = [
  { anchor: 'Ahmad Fabrics Unstitched Collection', url: `${BASE_URL}/shop/Unstitched` },
  { anchor: 'Ahmad Fabrics Lawn Collection', url: `${BASE_URL}/shop/Lawn` },
  { anchor: 'Ahmad Fabrics Summer Collection', url: `${BASE_URL}/shop` },
  { anchor: 'Ahmad Fabrics Luxury Lawn', url: `${BASE_URL}/shop/Lawn` }
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
