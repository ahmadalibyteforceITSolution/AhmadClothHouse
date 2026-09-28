<template>
  <div v-if="post" class="blog-detail-page bg-[#FCFCFA] dark:bg-[#070707] text-stone-800 dark:text-stone-200 min-h-screen pt-24 sm:pt-32 pb-24 transition-colors duration-300">
    <!-- Reading Progress Bar -->
    <div class="fixed top-0 left-0 right-0 h-1 bg-transparent z-50">
      <div class="h-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B8860B] transition-all duration-150" :style="{ width: `${readingProgress}%` }"></div>
    </div>

    <!-- Article Header & Masthead -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb Navigation -->
      <nav class="flex items-center justify-between text-[10px] tracking-[0.25em] uppercase text-stone-400 mb-8 pt-4">
        <router-link to="/blog" class="inline-flex items-center gap-2 hover:text-[#C9973A] transition-colors group">
          <span class="group-hover:-translate-x-1.5 transition-transform text-sm">←</span>
          <span>Return to Journal</span>
        </router-link>
        <span class="text-[#C9973A] font-semibold tracking-[0.3em]">{{ post.category }}</span>
      </nav>

      <!-- Category Tag & Date Pill -->
      <div class="text-center mb-6">
        <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#C9973A]/40 bg-[#C9973A]/5 text-[#C9973A] text-[9.5px] uppercase font-semibold tracking-[0.3em]">
          <span>{{ post.category }}</span>
          <span class="w-1.5 h-1.5 rounded-full bg-[#C9973A]"></span>
          <span>{{ post.date }}</span>
        </div>
      </div>

      <!-- Main Headline -->
      <h1 class="text-2xl sm:text-4xl md:text-5xl font-editorial font-normal text-stone-900 dark:text-white leading-[1.25] text-center tracking-tight mb-6">
        {{ post.title }}
      </h1>

      <!-- Byline & Reading Time -->
      <div class="flex items-center justify-center gap-4 text-stone-500 dark:text-stone-400 text-xs tracking-wider pb-10 border-b border-stone-200/70 dark:border-white/10 mb-10">
        <span class="uppercase text-[10px] tracking-[0.25em] font-medium">By {{ post.author || 'Ahmad Clothes House Atelier' }}</span>
        <span>•</span>
        <span class="text-[10px] tracking-[0.2em] uppercase font-medium">4 Min Read</span>
        <span>•</span>
        <span class="text-[10px] tracking-[0.2em] uppercase font-medium">Couture Guide</span>
      </div>
    </div>

    <!-- Featured Hero Image -->
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
      <div class="relative aspect-[16/10] sm:aspect-[21/10] overflow-hidden rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200/80 dark:border-white/10 shadow-2xl">
        <img 
          :src="post.image || DEFAULT_FALLBACK_IMAGE" 
          :alt="post.title"
          class="w-full h-full object-cover"
          loading="eager"
          @error="(e) => e.target.src = DEFAULT_FALLBACK_IMAGE"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div class="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white/80 text-[10px] uppercase tracking-widest">
          <span class="bg-black/40 backdrop-blur-md px-3 py-1 rounded border border-white/10">Haute Couture Collection</span>
          <span class="hidden sm:inline font-editorial italic text-stone-200">Ahmad Clothes House • Lahore Atelier</span>
        </div>
      </div>
    </div>

    <!-- Main Editorial Reading Body -->
    <main class="max-w-3xl mx-auto px-4 sm:px-6">
      <!-- Article Content -->
      <article class="prose prose-stone dark:prose-invert max-w-none">
        <div 
          v-html="parsedContent" 
          class="article-content text-stone-700 dark:text-stone-300 leading-relaxed text-base sm:text-lg space-y-6"
        ></div>
      </article>

      <!-- Luxury Pull Quote Callout -->
      <div class="my-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#FAF6EE] to-white dark:from-[#111] dark:to-[#0D0D0D] border-l-4 border-[#C9973A] border-y border-r border-[#C9973A]/20 shadow-sm relative overflow-hidden">
        <span class="absolute right-4 top-2 text-7xl sm:text-8xl font-editorial text-[#C9973A]/10 select-none pointer-events-none">“</span>
        <div class="flex items-center gap-2 text-[#C9973A] text-[9.5px] uppercase font-bold tracking-[0.35em] mb-3">
          <span class="w-2 h-2 rounded-full bg-[#C9973A]"></span>
          <span>Atelier Philosophy</span>
        </div>
        <p class="font-editorial italic text-stone-900 dark:text-white text-lg sm:text-xl leading-relaxed relative z-10">
          "True couture is not merely worn; it is an expression of heritage, master handcraft, and enduring elegance."
        </p>
        <div class="flex items-center justify-between mt-4 pt-4 border-t border-stone-200/60 dark:border-white/5">
          <span class="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-semibold">— Master Artisan, Ahmad Clothes House</span>
          <span class="text-[10px] text-[#C9973A] font-bold uppercase tracking-wider">Est. 2014</span>
        </div>
      </div>

      <!-- Shop The Look CTA Banner -->
      <div class="my-12 p-6 sm:p-8 rounded-2xl bg-[#141414] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#C9973A]/30 shadow-xl">
        <div class="space-y-1 text-center sm:text-left">
          <span class="text-[9px] uppercase font-bold tracking-[0.3em] text-[#D4AF37]">Explore The Collection</span>
          <h3 class="text-lg sm:text-xl font-editorial font-light text-white">Experience Handcrafted Elegance</h3>
          <p class="text-xs text-stone-400 max-w-sm">Shop our latest unstitched luxury lawn, chiffons, and bespoke bridal wear.</p>
        </div>
        <router-link 
          to="/shop" 
          class="shrink-0 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black text-[10px] font-bold uppercase tracking-[0.25em] rounded-full hover:brightness-110 transition-all shadow-md hover:scale-105"
        >
          Explore Boutique →
        </router-link>
      </div>

      <!-- Share & Bottom Actions -->
      <div class="mt-12 pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <router-link 
          to="/blog" 
          class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-700 dark:text-stone-300 hover:text-[#C9973A] dark:hover:text-[#C9973A] transition-colors"
        >
          <span>←</span>
          <span>Back to All Articles</span>
        </router-link>
        
        <div class="flex items-center gap-3">
          <span class="text-[10px] font-bold uppercase tracking-widest text-stone-400">Share Story:</span>
          <div class="flex items-center gap-2">
            <a 
              :href="getShareLink('facebook')" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="w-9 h-9 rounded-full border border-stone-200 dark:border-stone-800 hover:border-[#C9973A] hover:bg-[#C9973A] hover:text-black flex items-center justify-center text-xs transition-all"
              aria-label="Share on Facebook"
            >
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </a>
            <a 
              :href="getShareLink('whatsapp')" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="w-9 h-9 rounded-full border border-stone-200 dark:border-stone-800 hover:border-[#C9973A] hover:bg-[#C9973A] hover:text-black flex items-center justify-center text-xs transition-all"
              aria-label="Share on WhatsApp"
            >
              <font-awesome-icon :icon="['fab', 'whatsapp']" />
            </a>
            <a 
              :href="getShareLink('instagram')" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="w-9 h-9 rounded-full border border-stone-200 dark:border-stone-800 hover:border-[#C9973A] hover:bg-[#C9973A] hover:text-black flex items-center justify-center text-xs transition-all"
              aria-label="Visit Instagram"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
          </div>
        </div>
      </div>
    </main>

    <!-- Curated 3-Column Stories Grid -->
    <section v-if="relatedPosts.length" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28 pt-12 border-t border-stone-200 dark:border-stone-800">
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 dark:bg-white/5 border border-[#C9973A]/30 mb-3">
          <span class="w-1.5 h-1.5 rounded-full bg-[#C9973A]"></span>
          <span class="text-[9px] uppercase font-bold tracking-[0.35em] text-[#8B6508] dark:text-[#C9973A]">Curated Reads</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-editorial font-normal text-stone-900 dark:text-white">
          More From The Journal
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <article 
          v-for="rel in relatedPosts" 
          :key="rel.id"
          @click="navigateTo(rel.slug)"
          class="group cursor-pointer rounded-2xl overflow-hidden border border-stone-200/80 dark:border-white/10 bg-white dark:bg-[#11100D] hover:border-[#C9973A]/50 transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1"
        >
          <div class="aspect-[16/11] overflow-hidden rounded-xl mb-4 bg-stone-100 dark:bg-stone-900 relative">
            <img 
              :src="rel.image || DEFAULT_FALLBACK_IMAGE" 
              :alt="rel.title" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              loading="lazy"
              @error="(e) => e.target.src = DEFAULT_FALLBACK_IMAGE"
            />
            <div class="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-sm px-2.5 py-0.5 rounded border border-white/10">
              <span class="text-[8px] font-bold uppercase text-[#D4AF37] tracking-wider">{{ rel.category }}</span>
            </div>
          </div>
          <div class="flex-1 flex flex-col justify-between space-y-2">
            <div class="flex items-center gap-2 text-[9px] uppercase tracking-widest text-stone-400 font-semibold">
              <span>{{ rel.date }}</span>
              <span>•</span>
              <span>{{ rel.author || 'Ahmad Couture' }}</span>
            </div>
            <h3 class="text-base font-editorial font-normal text-stone-900 dark:text-white group-hover:text-[#C9973A] transition-colors leading-snug line-clamp-2">
              {{ rel.title }}
            </h3>
            <div class="pt-3 border-t border-stone-100 dark:border-white/5 flex items-center justify-between text-[9.5px] font-bold text-[#C9973A] uppercase tracking-wider">
              <span>Read Story</span>
              <span class="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>

  <!-- Article Not Found State -->
  <div v-else class="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA] dark:bg-[#080808] px-6 text-center">
    <div class="w-12 h-px bg-[#C9973A] mb-6"></div>
    <span class="text-[10px] font-bold uppercase tracking-[0.5em] text-[#C9973A] mb-3">404 • Journal Manuscript</span>
    <h1 class="text-2xl sm:text-3xl font-editorial font-light text-stone-900 dark:text-white uppercase tracking-wider mb-4">
      Article Not Found
    </h1>
    <p class="text-xs text-stone-500 dark:text-stone-400 max-w-md leading-relaxed mb-8">
      The journal story or fashion guide you are searching for is no longer available or the link has changed.
    </p>
    <router-link 
      to="/blog" 
      class="px-8 py-3.5 bg-black text-white dark:bg-white dark:text-black text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#C9973A] hover:text-black transition-all rounded-sm"
    >
      Browse All Articles
    </router-link>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { blogs as staticBlogs } from '../data/blogs'
import { useProductsStore } from '../stores/products'

const route = useRoute()
const router = useRouter()
const productStore = useProductsStore()

const DEFAULT_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1200'
const readingProgress = ref(0)

const updateReadingProgress = () => {
  if (typeof window === 'undefined') return
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  if (docHeight > 0) {
    readingProgress.value = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100))
  }
}

onMounted(() => {
  productStore.fetchProducts()
  window.addEventListener('scroll', updateReadingProgress, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateReadingProgress)
})

const post = computed(() => {
  const staticPost = staticBlogs.find(b => b.slug === route.params.slug)
  if (!staticPost) return null

  const relatedProduct = productStore.products.find(p => 
    p.category?.toLowerCase() === staticPost.category.toLowerCase() || 
    p.parentCategory?.toLowerCase() === staticPost.category.toLowerCase()
  )

  return {
    ...staticPost,
    image: relatedProduct?.image || productStore.products[0]?.image || staticPost.image
  }
})

// === Dynamic SEO per blog post ===
const injectBlogMeta = (p) => {
  if (!p) return

  const BASE_URL = 'https://ahmad-cloths.vercel.app'
  const pageUrl = `${BASE_URL}/blog/${p.slug}`
  const pageTitle = `${p.title} | AhmadClothesHouse Fashion Blog`
  const pageDesc = p.summary || `Read about ${p.title} on the Ahmad Clothes House fashion blog. Expert insights into Pakistani couture, luxury fabric trends, and bridal wear.`
  const pageImage = typeof p.image === 'string' && p.image.startsWith('http') 
    ? p.image 
    : `${BASE_URL}/og-image.png`

  // Title
  document.title = pageTitle

  const setMeta = (selector, attr, value) => {
    let el = document.querySelector(selector)
    if (!el) {
      el = document.createElement('meta')
      // Parse selector like meta[name="description"] or meta[property="og:title"]
      const attrMatch = selector.match(/\[(name|property)="([^"]+)"\]/)
      if (attrMatch) el.setAttribute(attrMatch[1], attrMatch[2])
      document.head.appendChild(el)
    }
    el.setAttribute(attr, value)
  }

  // Standard meta
  setMeta('meta[name="description"]', 'content', pageDesc)
  setMeta('meta[name="robots"]', 'content', 'index, follow')
  setMeta('meta[name="keywords"]', 'content', `${p.category}, Pakistani fashion, ${p.title}, AhmadClothesHouse, luxury couture, unstitched suits`)

  // Open Graph
  setMeta('meta[property="og:title"]', 'content', pageTitle)
  setMeta('meta[property="og:description"]', 'content', pageDesc)
  setMeta('meta[property="og:url"]', 'content', pageUrl.replace(/\/$/, '') || '/')
  setMeta('meta[property="og:image"]', 'content', pageImage)
  setMeta('meta[property="og:type"]', 'content', 'article')

  // Twitter
  setMeta('meta[property="twitter:title"]', 'content', pageTitle)
  setMeta('meta[property="twitter:description"]', 'content', pageDesc)
  setMeta('meta[property="twitter:url"]', 'content', pageUrl.replace(/\/$/, '') || '/')
  setMeta('meta[property="twitter:image"]', 'content', pageImage)

  // Canonical
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = pageUrl.replace(/\/$/, '') || '/'

  // Article JSON-LD Schema
  let schema = document.querySelector('script[id="blog-schema"]')
  if (schema) schema.remove()
  schema = document.createElement('script')
  schema.id = 'blog-schema'
  schema.type = 'application/ld+json'
  schema.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": p.title,
    "description": pageDesc,
    "image": pageImage,
    "url": pageUrl,
    "datePublished": p.date,
    "dateModified": p.date,
    "author": {
      "@type": "Person",
      "name": p.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "AhmadClothesHouse",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ahmad-cloths.vercel.app/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
    },
    "articleSection": p.category,
    "keywords": `Pakistani fashion, ${p.category}, luxury couture, AhmadClothesHouse`
  })
  document.head.appendChild(schema)
}

watch(post, (p) => {
  if (p) {
    injectBlogMeta(p)
  } else {
    if (typeof document !== 'undefined') {
      document.title = 'Article Not Found | Ahmad Clothes House'
      let robots = document.querySelector('meta[name="robots"]')
      if (!robots) {
        robots = document.createElement('meta')
        robots.setAttribute('name', 'robots')
        document.head.appendChild(robots)
      }
      robots.setAttribute('content', 'noindex, nofollow')
    }
  }
}, { immediate: true })

const parsedContent = computed(() => {
  if (!post.value) return ''
  const rawContent = post.value.content
  
  // Split content by lines
  const lines = rawContent.split('\n')
  let html = []
  let inList = false
  let listType = null // 'ul' or 'ol'
  let inTable = false
  let tableRows = []

  const closeList = () => {
    if (inList) {
      html.push(`</${listType}>`)
      inList = false
      listType = null
    }
  }

  const closeTable = () => {
    if (inTable) {
      if (tableRows.length > 0) {
        html.push('<div class="overflow-x-auto my-8 border border-stone-200 dark:border-stone-800 rounded-lg">')
        html.push('<table class="min-w-full divide-y divide-stone-200 dark:divide-stone-800 text-sm">')
        
        // Render header
        const headerCells = tableRows[0]
        html.push('<thead class="bg-stone-50 dark:bg-stone-900/50"><tr>')
        headerCells.forEach(cell => {
          html.push(`<th class="px-6 py-4 text-left font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider">${cell}</th>`)
        })
        html.push('</tr></thead>')
        
        // Render body
        html.push('<tbody class="divide-y divide-stone-100 dark:divide-stone-900 bg-white dark:bg-black/20 text-xs">')
        for (let i = 1; i < tableRows.length; i++) {
          if (tableRows[i].some(cell => cell.trim().startsWith('---') || cell.trim().endsWith('---'))) {
            continue
          }
          html.push('<tr class="hover:bg-stone-50/50 dark:hover:bg-stone-900/30 transition-colors">')
          tableRows[i].forEach(cell => {
            html.push(`<td class="px-6 py-4 text-stone-600 dark:text-stone-400">${cell}</td>`)
          })
          html.push('</tr>')
        }
        html.push('</tbody></table></div>')
      }
      tableRows = []
      inTable = false
    }
  }

  const parseInline = (text) => {
    let parsed = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    parsed = parsed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
      const isInternal = url.startsWith('/')
      if (isInternal) {
        return `<a href="${url}" class="text-amber-500 hover:text-amber-600 underline font-semibold transition-colors">${linkText}</a>`
      } else {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-amber-500 hover:text-amber-600 underline font-semibold transition-colors">${linkText}</a>`
      }
    })
    return parsed
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    if (!line) {
      closeList()
      closeTable()
      continue
    }

    if (line.startsWith('### ')) {
      closeList()
      closeTable()
      html.push(`<h3 class="text-lg sm:text-xl font-editorial font-normal text-stone-900 dark:text-white mt-8 mb-3 tracking-tight">${parseInline(line.substring(4))}</h3>`)
      continue
    }
    if (line.startsWith('## ')) {
      closeList()
      closeTable()
      html.push(`<h2 class="text-xl sm:text-2xl font-editorial font-light text-stone-900 dark:text-white mt-10 mb-4 pb-2 border-b border-stone-200/60 dark:border-white/5 tracking-tight">${parseInline(line.substring(3))}</h2>`)
      continue
    }
    if (line.startsWith('# ')) {
      closeList()
      closeTable()
      html.push(`<h1 class="text-2xl sm:text-3xl font-editorial font-light text-stone-900 dark:text-white mt-12 mb-6 tracking-tight">${parseInline(line.substring(2))}</h1>`)
      continue
    }

    if (line.startsWith('> ')) {
      closeList()
      closeTable()
      html.push(`<blockquote class="border-l-2 border-[#C9973A] pl-4 sm:pl-6 my-6 italic text-stone-700 dark:text-stone-300 font-editorial text-lg">${parseInline(line.substring(2))}</blockquote>`)
      continue
    }

    if (line.startsWith('|')) {
      closeList()
      inTable = true
      const cells = line.split('|').map(c => c.trim()).filter((c, idx, arr) => idx > 0 && idx < arr.length - 1)
      tableRows.push(cells.map(c => parseInline(c)))
      continue
    } else {
      closeTable()
    }

    const unorderedMatch = line.match(/^[-*]\s+(.*)/)
    if (unorderedMatch) {
      if (inList && listType !== 'ul') {
        closeList()
      }
      if (!inList) {
        inList = true
        listType = 'ul'
        html.push('<ul class="list-disc pl-6 my-6 space-y-2.5 text-stone-600 dark:text-stone-300 text-sm sm:text-base">')
      }
      html.push(`<li>${parseInline(unorderedMatch[1])}</li>`)
      continue
    }

    const orderedMatch = line.match(/^(\d+)\.\s+(.*)/)
    if (orderedMatch) {
      if (inList && listType !== 'ol') {
        closeList()
      }
      if (!inList) {
        inList = true
        listType = 'ol'
        html.push('<ol class="list-decimal pl-6 my-6 space-y-2.5 text-stone-600 dark:text-stone-300 text-sm sm:text-base">')
      }
      html.push(`<li>${parseInline(orderedMatch[2])}</li>`)
      continue
    }

    closeList()
    closeTable()
    html.push(`<p class="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed my-4">${parseInline(line)}</p>`)
  }

  closeList()
  closeTable()

  return html.join('\n')
})

const relatedPosts = computed(() => {
  if (!post.value) return []
  const allBlogs = staticBlogs.map((b, index) => ({
    ...b,
    image: productStore.products[index % productStore.products.length]?.image || b.image
  }))

  return allBlogs
    .filter(b => b.id !== post.value.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
})

const navigateTo = (slug) => {
  router.push(`/blog/${slug}`)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const getShareLink = (platform) => {
  if (typeof window === 'undefined') return '#'
  const url = encodeURIComponent(window.location.href)
  const title = encodeURIComponent(post.value?.title || '')
  if (platform === 'facebook') return `https://www.facebook.com/sharer/sharer.php?u=${url}`
  if (platform === 'whatsapp') return `https://api.whatsapp.com/send?text=${title}%20${url}`
  if (platform === 'instagram') return 'https://instagram.com/ahmadclothfabrics_aroma/'
  return '#'
}
</script>

<style scoped>
.article-content :deep(p:first-of-type)::first-letter {
  font-family: 'Cinzel', 'Playfair Display', serif;
  font-size: 3.5rem;
  line-height: 1;
  float: left;
  margin-right: 0.75rem;
  color: #C9973A;
  font-weight: 500;
}
</style>
