<template>
  <div v-if="post" class="blog-detail-page bg-white dark:bg-[#050505] min-h-screen pt-32 pb-20">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Post Meta Header -->
      <div class="text-center mb-16">
        <div class="flex items-center justify-center gap-4 text-[9px] text-amber-500 font-bold uppercase tracking-[0.4em] mb-6">
          <span>{{ post.category }}</span>
          <span class="w-1.5 h-1.5 rounded-full bg-stone-300"></span>
          <span>{{ post.date }}</span>
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-playfair text-[var(--luxury-black)] dark:text-white leading-tight mb-8">
          {{ post.title }}
        </h1>
        <div class="flex items-center justify-center gap-3">
          <div class="w-10 h-[1px] bg-stone-200"></div>
          <span class="text-[10px] text-stone-400 uppercase tracking-widest italic">By {{ post.author }}</span>
          <div class="w-10 h-[1px] bg-stone-200"></div>
        </div>
      </div>

      <!-- Featured Image -->
      <div class="relative aspect-video overflow-hidden mb-16 bg-stone-100 dark:bg-white/5">
        <img 
          :src="post.image || 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1200'" 
          :alt="post.title"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Content Section -->
      <div class="prose prose-stone dark:prose-invert max-w-none">
        <div class="text-stone-600 dark:text-stone-300 leading-relaxed space-y-8 first-letter:text-5xl first-letter:font-playfair first-letter:mr-3 first-letter:float-left first-letter:text-amber-500">
          <p v-for="(paragraph, i) in paragraphs" :key="i" class="text-lg">
            {{ paragraph }}
          </p>
        </div>
      </div>

      <!-- Footer / Share -->
      <div class="mt-20 pt-10 border-t border-stone-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        <button @click="router.back()" class="text-[10px] font-black uppercase tracking-widest text-stone-400 hover:text-amber-500 flex items-center gap-2 transition-all">
          <font-awesome-icon icon="fa-solid fa-arrow-left" />
          Back to Journal
        </button>
        
        <div class="flex gap-6">
          <span class="text-[9px] font-bold uppercase tracking-widest text-stone-300">Share This Story</span>
          <div class="flex gap-4 text-stone-400">
            <a href="#" class="hover:text-amber-500 transition-colors"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
            <a href="#" class="hover:text-amber-500 transition-colors"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
            <a href="#" class="hover:text-amber-500 transition-colors"><font-awesome-icon :icon="['fab', 'whatsapp']" /></a>
          </div>
        </div>
      </div>

      <!-- Related Posts (Optional) -->
      <div class="mt-32">
        <h3 class="text-xl font-playfair text-center mb-12">More from the House Journal</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div 
             v-for="rel in relatedPosts" 
             :key="rel.id"
             @click="navigateTo(rel.slug)"
             class="group cursor-pointer flex gap-6 items-center"
          >
            <div class="w-24 h-24 flex-shrink-0 overflow-hidden bg-stone-100">
              <img :src="rel.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div>
              <span class="text-[8px] text-amber-500 uppercase font-black tracking-widest">{{ rel.date }}</span>
              <h4 class="text-sm font-playfair leading-tight group-hover:text-amber-500 transition-colors mt-1">{{ rel.title }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="min-h-screen flex items-center justify-center">
     <p class="text-stone-400 animate-pulse tracking-widest">TRANSLATING MANUSCRIPT...</p>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { blogs as staticBlogs } from '../data/blogs'
import { useProductsStore } from '../stores/products'

const route = useRoute()
const router = useRouter()
const productStore = useProductsStore()

onMounted(() => {
  productStore.fetchProducts()
})

const post = computed(() => {
  const staticPost = staticBlogs.find(b => b.slug === route.params.slug)
  if (!staticPost) return null

  // Try to find a product in the same category to use its image from DB
  const relatedProduct = productStore.products.find(p => 
    p.category?.toLowerCase() === staticPost.category.toLowerCase() || 
    p.parentCategory?.toLowerCase() === staticPost.category.toLowerCase()
  )

  return {
    ...staticPost,
    image: relatedProduct?.image || productStore.products[0]?.image || staticPost.image
  }
})

const paragraphs = computed(() => {
  if (!post.value) return []
  return post.value.content.split('\n\n')
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
    .slice(0, 2)
})

const navigateTo = (slug) => {
  router.push(`/blog/${slug}`)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.prose {
  font-family: 'Inter', sans-serif;
}
</style>
