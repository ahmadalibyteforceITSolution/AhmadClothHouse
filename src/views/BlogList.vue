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
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { blogs as staticBlogs } from '../data/blogs'
import { useProductsStore } from '../stores/products'
import Hero4 from "../assets/ai/hero_1.png" // Using hero_1 for a fresh look

const router = useRouter()
const productStore = useProductsStore()
const selectedCategory = ref('All')
const displayLimit = ref(12)

onMounted(() => {
  productStore.fetchProducts()

  // === Inject blog list page SEO ===
  const BASE = 'https://ahmad-cloths.vercel.app'
  document.title = 'Fashion Blog | Pakistani Designer Trends & Luxury Style Guides | AhmadClothesHouse'

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

  setMeta('description', false, 'Read the latest Pakistani fashion blog posts at AhmadClothesHouse. Covering bridal trends, luxury lawn collections, fabric guides, and style tips for 2026.')
  setMeta('robots', false, 'index, follow')
  setMeta('keywords', false, 'Pakistani fashion blog, bridal wear 2026, lawn collection trends, luxury couture, AhmadClothesHouse blog')
  setMeta('og:title', true, 'AhmadClothesHouse Fashion Journal | Pakistani Couture Blog')
  setMeta('og:description', true, 'Explore expert editorial content on Pakistani fashion, bridal wear, luxury fabrics, and seasonal trends at the AhmadClothesHouse Journal.')
  setMeta('og:url', true, `${BASE}/blog`)
  setMeta('og:type', true, 'website')

  // Canonical
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
  canonical.href = `${BASE}/blog`

  // BreadcrumbList Schema
  let bcSchema = document.querySelector('script[id="blog-list-schema"]')
  if (bcSchema) bcSchema.remove()
  bcSchema = document.createElement('script')
  bcSchema.id = 'blog-list-schema'
  bcSchema.type = 'application/ld+json'
  bcSchema.text = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${BASE}/blog` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "AhmadClothesHouse Fashion Journal",
      "url": `${BASE}/blog`,
      "description": "Expert editorial on Pakistani fashion, bridal wear, and luxury couture trends.",
      "publisher": {
        "@type": "Organization",
        "name": "AhmadClothesHouse",
        "logo": { "@type": "ImageObject", "url": `${BASE}/favicon.svg` }
      }
    }
  ])
  document.head.appendChild(bcSchema)
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
