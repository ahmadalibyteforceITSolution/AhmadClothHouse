<template>
  <div class="blog-list-page bg-white dark:bg-[#050505] min-h-screen pt-32 pb-20">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-20">
        <span class="text-[10px] font-black text-amber-500 uppercase tracking-[0.6em] mb-4 block animate-reveal">The House Journal</span>
        <h1 class="text-4xl md:text-6xl font-playfair text-[var(--luxury-black)] dark:text-white mb-6 animate-reveal">COUTURE <span class="text-stone-400">&</span> CULTURE</h1>
        <p class="text-stone-500 dark:text-stone-400 text-sm max-w-2xl mx-auto tracking-widest uppercase leading-relaxed animate-reveal">
          Exploring the artistry, heritage, and modern evolution of Pakistani fashion.
        </p>
      </div>

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

const router = useRouter()
const productStore = useProductsStore()
const selectedCategory = ref('All')
const displayLimit = ref(12)

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
.animate-reveal {
  animation: reveal 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes reveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
