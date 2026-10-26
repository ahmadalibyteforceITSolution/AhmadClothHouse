<template>
  <div class="blog-list-page min-h-screen bg-[#F8F5F0] dark:bg-[#080706] transition-colors duration-500">

    <!-- ══════════ MASTHEAD BANNER ══════════ -->
    <div class="relative overflow-hidden bg-[#111] text-white">
      <div class="absolute inset-0 bg-gradient-to-br from-[#1a1208] via-[#111] to-[#0d0d0d]"></div>
      <div class="absolute inset-0 opacity-10"
        style="background-image: repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(212,175,55,0.15) 40px,rgba(212,175,55,0.15) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(212,175,55,0.15) 40px,rgba(212,175,55,0.15) 41px)">
      </div>

      <div class="relative max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24 text-center">
        <div class="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10">
          <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
          <span class="text-[9px] font-black uppercase tracking-[0.45em] text-[#D4AF37]">The Couture Chronicle</span>
        </div>
        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-editorial font-normal tracking-tight text-white mb-5 leading-[1.1]">
          Fashion <em class="text-[#D4AF37] not-italic">Journal</em>
        </h1>
        <p class="text-stone-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
          Curated insights on Pakistani couture, seasonal trends, fabric mastery, bridal heritage, and the artisans behind South Asia's most beloved fashion house.
        </p>

        <!-- Category Filter Pills -->
        <div class="flex items-center justify-center flex-wrap gap-2 mt-10">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            :class="selectedCategory === cat
              ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-black shadow-lg shadow-[#D4AF37]/20'
              : 'bg-white/5 text-stone-400 border-white/10 hover:border-[#D4AF37]/50 hover:text-white'"
            class="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 cursor-pointer"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 py-14">

      <!-- ══════════ HERO FEATURED POST ══════════ -->
      <section v-if="filteredBlogs.length > 0" class="mb-16">
        <div
          @click="router.push(`/blog/${filteredBlogs[0].slug}`)"
          class="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-700 border border-stone-200/50 dark:border-white/5"
        >
          <!-- Image Side -->
          <div class="relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px] overflow-hidden bg-stone-900">
            <img
              :src="filteredBlogs[0].image || DEFAULT_FALLBACK_IMAGE"
              :alt="filteredBlogs[0].title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              @error="(e) => e.target.src = DEFAULT_FALLBACK_IMAGE"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20 lg:to-black/60"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden"></div>
            <!-- Category Badge -->
            <div class="absolute top-5 left-5">
              <span class="bg-[#D4AF37] text-black text-[9px] font-black uppercase tracking-[0.25em] px-3 py-1.5 rounded-full">
                {{ filteredBlogs[0].category }}
              </span>
            </div>
          </div>

          <!-- Content Side -->
          <div class="flex flex-col justify-center p-8 sm:p-12 bg-white dark:bg-[#0F0E0B] lg:border-l border-stone-100 dark:border-white/5">
            <div class="flex items-center gap-3 mb-5 text-[10px] text-stone-400 uppercase tracking-widest font-semibold">
              <span>{{ filteredBlogs[0].date }}</span>
              <span class="w-4 h-px bg-[#D4AF37]"></span>
              <span class="text-[#D4AF37]">{{ filteredBlogs[0].author || 'Ahmad Couture Team' }}</span>
            </div>

            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-editorial font-normal text-stone-900 dark:text-white leading-[1.25] mb-5 group-hover:text-[#B8860B] dark:group-hover:text-[#D4AF37] transition-colors duration-300">
              {{ filteredBlogs[0].title }}
            </h2>

            <p class="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-8 line-clamp-3 font-light">
              {{ filteredBlogs[0].summary }}
            </p>

            <!-- Tags row -->
            <div class="flex flex-wrap gap-2 mb-8">
              <span
                v-for="tag in ['Pakistani Fashion', 'Style Guide', '2026 Collection']"
                :key="tag"
                class="text-[9px] px-3 py-1 rounded-full bg-stone-100 dark:bg-white/5 text-stone-500 dark:text-stone-400 font-semibold uppercase tracking-wider"
              >{{ tag }}</span>
            </div>

            <div class="flex items-center justify-between pt-6 border-t border-stone-100 dark:border-white/5">
              <span class="inline-flex items-center gap-2 text-xs font-black text-[#B8860B] dark:text-[#D4AF37] uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-300">
                Read Full Story
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </span>
              <span class="text-[10px] text-stone-400 font-medium">6 min read</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════ SECTION LABEL ══════════ -->
      <div class="flex items-center gap-5 mb-10">
        <div class="flex items-center gap-3">
          <span class="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
          <span class="text-[10px] font-black uppercase tracking-[0.4em] text-stone-500 dark:text-stone-400">Latest Articles</span>
        </div>
        <div class="flex-1 h-px bg-stone-200 dark:bg-white/5"></div>
        <span class="text-[10px] text-stone-400 font-medium">{{ filteredBlogs.length - 1 }} Stories</span>
      </div>

      <!-- ══════════ MAIN GRID ══════════ -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        <article
          v-for="(post, index) in filteredBlogs.slice(1)"
          :key="post.id"
          class="group cursor-pointer flex flex-col bg-white dark:bg-[#0F0E0B] rounded-2xl overflow-hidden border border-stone-200/70 dark:border-white/5 hover:border-[#D4AF37]/40 dark:hover:border-[#D4AF37]/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
          @click="router.push(`/blog/${post.slug}`)"
          :class="index === 0 ? 'sm:col-span-2' : ''"
        >
          <!-- Image -->
          <div
            class="relative overflow-hidden bg-stone-100 dark:bg-stone-900"
            :class="index === 0 ? 'aspect-[16/7]' : 'aspect-[4/3]'"
          >
            <img
              :src="post.image || DEFAULT_FALLBACK_IMAGE"
              :alt="post.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              @error="(e) => e.target.src = DEFAULT_FALLBACK_IMAGE"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <!-- Category -->
            <div class="absolute top-3 left-3">
              <span class="bg-[#111]/85 backdrop-blur-sm text-[#D4AF37] text-[8.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border border-[#D4AF37]/20">
                {{ post.category }}
              </span>
            </div>
            <!-- Read time badge -->
            <div class="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
              <span class="bg-white/90 dark:bg-black/80 backdrop-blur-md text-[9px] text-stone-700 dark:text-stone-300 font-bold px-2.5 py-1 rounded-full">
                5 min read
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="flex-1 flex flex-col p-5">
            <!-- Meta -->
            <div class="flex items-center gap-2 text-[9px] text-stone-400 uppercase tracking-widest font-semibold mb-3">
              <span>{{ post.date }}</span>
              <span class="w-3 h-px bg-stone-300 dark:bg-stone-700"></span>
              <span class="text-[#B8860B] dark:text-[#D4AF37] truncate">{{ post.author }}</span>
            </div>

            <!-- Title -->
            <h2
              class="font-editorial font-normal text-stone-900 dark:text-white group-hover:text-[#B8860B] dark:group-hover:text-[#D4AF37] transition-colors leading-snug mb-3"
              :class="index === 0 ? 'text-xl sm:text-2xl line-clamp-2' : 'text-base line-clamp-2'"
            >
              {{ post.title }}
            </h2>

            <!-- Summary -->
            <p class="text-stone-500 dark:text-stone-400 text-xs leading-relaxed line-clamp-2 font-light mb-4 flex-1">
              {{ post.summary }}
            </p>

            <!-- Footer -->
            <div class="flex items-center justify-between pt-3.5 border-t border-stone-100 dark:border-white/5 mt-auto">
              <span class="inline-flex items-center gap-1.5 text-[10px] font-black text-[#B8860B] dark:text-[#D4AF37] uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">
                Read Article
                <span>→</span>
              </span>
              <div class="flex items-center gap-1.5">
                <span class="w-1 h-1 rounded-full bg-[#D4AF37]"></span>
                <span class="text-[9px] text-stone-400">{{ post.category }}</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- Load More -->
      <div v-if="displayLimit < totalFiltered" class="mt-16 flex flex-col items-center gap-4">
        <button
          @click="displayLimit += 12"
          class="group flex items-center gap-3 px-10 py-4 bg-[#111] dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] dark:hover:text-black transition-all duration-300 shadow-lg cursor-pointer"
        >
          <span>Load More Stories</span>
          <svg class="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <span class="text-[10px] text-stone-400 uppercase tracking-widest">{{ totalFiltered - displayLimit }} more stories</span>
      </div>

      <!-- End of feed -->
      <div v-else-if="filteredBlogs.length > 1" class="mt-16 flex items-center gap-6 justify-center">
        <div class="h-px flex-1 max-w-24 bg-stone-200 dark:bg-white/10"></div>
        <span class="text-[9px] uppercase tracking-[0.5em] text-stone-400 font-bold">All {{ filteredBlogs.length }} Stories</span>
        <div class="h-px flex-1 max-w-24 bg-stone-200 dark:bg-white/10"></div>
      </div>

      <!-- ══════════ NEWSLETTER CTA ══════════ -->
      <section class="mt-20 rounded-3xl overflow-hidden bg-[#111] text-white p-8 sm:p-14 relative">
        <div class="absolute inset-0 opacity-5" style="background: radial-gradient(ellipse at 20% 50%, #D4AF37 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, #B8860B 0%, transparent 60%)"></div>
        <div class="relative text-center max-w-2xl mx-auto">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span class="text-[9px] font-black uppercase tracking-[0.4em] text-[#D4AF37]">Ahmad Clothes House</span>
          </div>
          <h3 class="text-3xl sm:text-4xl font-editorial font-normal text-white mb-4 leading-tight">
            Ready to <em class="text-[#D4AF37] not-italic">Shop</em> the Collection?
          </h3>
          <p class="text-stone-400 text-sm leading-relaxed mb-8">
            Explore Pakistan's finest Dhanak, Lawn, Pret, and Bridal collections. Nationwide delivery + express shipping to UK, USA, UAE & Canada.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <router-link
              to="/shop"
              class="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#B8860B] text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full transition-all duration-300 shadow-lg hover:shadow-[#D4AF37]/30 hover:scale-105"
            >
              Browse Collection →
            </router-link>
            <router-link
              to="/contact"
              class="px-8 py-3.5 border border-white/20 hover:border-[#D4AF37] text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full transition-all duration-300"
            >
              Contact Concierge
            </router-link>
          </div>
        </div>
      </section>

      <!-- ══════════ COLLAPSIBLE PARTNER PORTAL ══════════ -->
      <section class="mt-16 pt-10 border-t border-stone-200 dark:border-white/10">
        <div class="text-center mb-6">
          <button
            @click="showPartnerPortal = !showPartnerPortal"
            class="inline-flex items-center gap-3 px-6 py-2.5 border border-stone-300 dark:border-white/10 hover:border-[#D4AF37] text-[10px] font-bold tracking-[0.2em] text-stone-500 dark:text-stone-400 uppercase hover:text-[#D4AF37] transition-all duration-300 rounded-full cursor-pointer"
          >
            <span>{{ showPartnerPortal ? 'Hide' : 'Publisher & Backlink Guidelines' }}</span>
            <span class="text-[#D4AF37] transition-transform duration-300" :class="{ 'rotate-180': showPartnerPortal }">▼</span>
          </button>
        </div>

        <transition name="fade-slide">
          <div v-if="showPartnerPortal" class="bg-white dark:bg-[#0c0c0c] border border-stone-200/60 dark:border-white/5 p-8 md:p-12 rounded-2xl shadow-sm space-y-10">
            <div class="text-center max-w-2xl mx-auto space-y-3">
              <h3 class="text-xl font-playfair text-stone-900 dark:text-white uppercase tracking-wider">
                SEO Linking & Anchor Text Distribution Guide
              </h3>
              <p class="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                If you are a fashion blogger, directory moderator, or guest writer reviewing the Ahmad Clothes House collection, use our optimized anchor text mix for natural search engine indexing.
              </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div v-for="(section, key) in linkSections" :key="key" class="space-y-3 p-6 bg-stone-50 dark:bg-white/5 rounded-xl border border-stone-200/50 dark:border-white/5">
                <span class="text-xs font-bold uppercase tracking-wider" :class="section.color">{{ section.label }}</span>
                <div class="space-y-2">
                  <div v-for="(link, i) in section.links" :key="i" class="flex justify-between items-center text-[10px] p-2 bg-white dark:bg-black/20 rounded border border-stone-100 dark:border-white/5">
                    <span class="truncate text-stone-500 dark:text-stone-400">"{{ link.anchor }}"</span>
                    <button @click="copyLinkHtml(link)" class="text-[#D4AF37] hover:text-[#B8860B] font-bold uppercase tracking-wider pl-4 flex-shrink-0 cursor-pointer">Copy</button>
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

const router = useRouter()
const productStore = useProductsStore()
const selectedCategory = ref('All')
const displayLimit = ref(16)
const showPartnerPortal = ref(false)

const BASE_URL = 'https://ahmad-cloths.vercel.app'
const DEFAULT_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1200'

const linkSections = {
  branded: {
    label: 'Branded Anchors (40%)',
    color: 'text-amber-600',
    links: [
      { anchor: 'Ahmad Clothes House Online Boutique', url: `${BASE_URL}/` },
      { anchor: 'Ahmad Clothes House Unstitched Collection', url: `${BASE_URL}/shop/Unstitched` },
      { anchor: 'Ahmad Clothes House Luxury Lawn 2026', url: `${BASE_URL}/shop/Lawn` },
      { anchor: 'Ahmad Clothes House Bridal Couture', url: `${BASE_URL}/shop/Bridal` }
    ]
  },
  partial: {
    label: 'Partial Match (30%)',
    color: 'text-amber-500',
    links: [
      { anchor: 'buy unstitched lawn suits', url: `${BASE_URL}/shop/Lawn` },
      { anchor: 'premium cotton suits', url: `${BASE_URL}/shop` },
      { anchor: 'latest lawn collection', url: `${BASE_URL}/shop/Lawn` },
      { anchor: 'embroidered lawn suits', url: `${BASE_URL}/shop/Lawn` }
    ]
  },
  exact: {
    label: 'Exact Match (20%)',
    color: 'text-rose-700 dark:text-rose-400',
    links: [
      { anchor: 'buy unstitched lawn suits online', url: `${BASE_URL}/shop` },
      { anchor: 'shop unstitched clothes', url: `${BASE_URL}/shop/Unstitched` },
      { anchor: 'best lawn brands Pakistan', url: `${BASE_URL}/shop` },
      { anchor: 'luxury unstitched dresses Pakistan', url: `${BASE_URL}/shop` }
    ]
  },
  generic: {
    label: 'Generic (10%)',
    color: 'text-stone-500',
    links: [
      { anchor: 'visit website', url: `${BASE_URL}/` },
      { anchor: 'learn more', url: `${BASE_URL}/about` },
      { anchor: 'shop now', url: `${BASE_URL}/shop` }
    ]
  }
}

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
  return staticBlogs.map((blog, index) => {
    const relatedProduct = productStore.products.find(p =>
      p.category?.toLowerCase() === blog.category.toLowerCase() ||
      p.parentCategory?.toLowerCase() === blog.category.toLowerCase()
    )
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
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
