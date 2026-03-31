<template>
  <div v-if="product" class="min-h-screen bg-[#fafaf8] dark:bg-[#050505] transition-colors duration-700 pb-48 pt-24 px-8 selection:bg-[var(--primary-gold)]/30">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 relative">
       
       <!-- Sticky Media Gallery -->
       <div class="lg:w-3/5 lg:sticky lg:top-32 h-fit">
         <div class="aspect-[4/5] overflow-hidden bg-white dark:bg-[#080808] border border-[#d4af3711] shadow-3xl relative group">
           <!-- Dynamic Focus Overlay -->
           <div class="absolute inset-0 bg-[var(--primary-gold)]/5 group-hover:opacity-0 transition-opacity duration-1000 z-10"></div>
           
           <img 
             :src="currentDisplayImage" 
             :alt="product.name" 
             class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
           />
           
           <!-- Perspective Mask -->
           <div class="absolute inset-0 border-[24px] border-[#fafaf8] dark:border-[#050505] transition-all duration-700 group-hover:border-[0px] z-20 pointer-events-none"></div>

           <!-- Label Overlay -->
           <div class="absolute bottom-12 left-12 z-20">
              <div class="bg-black/80 backdrop-blur-3xl px-8 py-4 border border-white/10 text-white flex flex-col items-center">
                 <span class="text-[9px] font-bold uppercase tracking-[0.5em] mb-1">AHMADCLOTHS_ORIGINAL</span>
                 <div class="h-[1px] w-8 bg-[var(--primary-gold)]"></div>
              </div>
           </div>
         </div>
         
         <!-- Minimal Thumbnail Navigation -->
         <div v-if="allImages.length > 1" class="mt-10 flex gap-6 overflow-x-auto pb-6 scrollbar-none justify-center">
           <button 
             v-for="(img, idx) in allImages" :key="idx"
             @click="selectImage(img)"
             class="w-20 h-28 flex-shrink-0 border transition-all duration-700 relative overflow-hidden group"
             :class="currentDisplayImage === img ? 'border-[var(--primary-gold)] shadow-xl scale-110' : 'border-[#d4af3711] opacity-40 hover:opacity-100'"
           >
             <img :src="img" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700">
             <div v-if="currentDisplayImage === img" class="absolute bottom-0 left-0 right-0 h-1 bg-[var(--primary-gold)]"></div>
           </button>
         </div>
       </div>

       <!-- Information Curation -->
       <div class="lg:w-2/5 flex flex-col font-sans">
         <div class="mb-16">
            <div class="flex items-center gap-3 mb-6 animate-reveal">
               <div class="h-[1px] w-12 bg-[var(--primary-gold)]"></div>
               <span class="text-[var(--primary-gold)] font-bold text-[9px] uppercase tracking-[0.5em]">{{ product.category.toUpperCase() }}</span>
            </div>
            
            <h1 class="text-5xl md:text-7xl font-light uppercase tracking-tighter text-gray-900 dark:text-white mb-8 font-playfair italic underline decoration-[var(--primary-gold)]/10 underline-offset-[16px] leading-[0.9]">
               {{ product.name }}
            </h1>
            
            <div class="flex flex-col mb-12">
                <div class="flex items-baseline gap-6 mb-2">
                   <span class="text-4xl font-bold text-[var(--primary-gold)] font-serif italic">Rs. {{ product.price.toLocaleString() }}</span>
                   <span v-if="product.originalPrice && product.originalPrice > product.price" class="text-xl font-bold text-stone-400 line-through font-serif italic opacity-50">Rs. {{ product.originalPrice.toLocaleString() }}</span>
                   <span class="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-300 dark:text-stone-700">Luxury Piece</span>
                </div>
                <div v-if="product.originalPrice && product.originalPrice > product.price" class="flex items-center gap-4">
                   <span class="bg-[#ff4757]/10 text-[#ff4757] px-4 py-1.5 text-[8px] font-bold uppercase tracking-[0.3em] border border-[#ff4757]/20">
                     EXCLUSIVE SAVINGS: {{ Math.round((1 - product.price / product.originalPrice) * 100) }}% OFF
                   </span>
                </div>
             </div>
         </div>

         <!-- Core Interactivity -->
         <div class="space-y-16">
            
            <!-- Variants -->
            <div v-if="product.variants && product.variants.length > 0" class="space-y-12 pb-12 border-b border-[#d4af3711]">
              <div v-if="uniqueColors.length > 0">
                <h3 class="text-[9px] font-bold uppercase tracking-[0.5em] text-stone-400 mb-6">Color / Shade</h3>
                <div class="flex flex-wrap gap-4">
                  <button 
                    v-for="color in uniqueColors" :key="color"
                    @click="selectColor(color)"
                    class="px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border"
                    :class="selectedColor === color ? 'bg-black text-white border-black dark:bg-[var(--primary-gold)] dark:border-[var(--primary-gold)]' : 'border-[#d4af3722] text-stone-500 hover:border-[var(--primary-gold)]/40 hover:text-[var(--primary-gold)]'"
                  >
                    {{ color.toUpperCase() }}
                  </button>
                </div>
              </div>
              
              <div v-if="uniqueSizes.length > 0">
                <h3 class="text-[9px] font-bold uppercase tracking-[0.5em] text-stone-400 mb-6">Size / Fit</h3>
                <div class="flex flex-wrap gap-4">
                  <button 
                    v-for="size in uniqueSizes" :key="size"
                    @click="selectSize(size)"
                    class="w-14 h-14 flex items-center justify-center text-[10px] font-bold uppercase tracking-widest transition-all duration-500 border rounded-full"
                    :class="selectedSize === size ? 'bg-[var(--primary-gold)] text-white border-[var(--primary-gold)] shadow-xl shadow-[var(--primary-gold)]/20' : 'border-[#d4af3722] text-stone-500 hover:border-[var(--primary-gold)]/40 hover:text-[var(--primary-gold)]'"
                  >
                    {{ size }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Narrative / Notes -->
            <div class="animate-reveal">
               <h3 class="text-[9px] font-bold uppercase tracking-[0.5em] text-stone-400 mb-8 border-l-2 border-[var(--primary-gold)]/20 pl-4 italic">Design Philosophy</h3>
               <p class="text-xl text-stone-600 dark:text-stone-400 leading-loose font-light italic font-playfair mb-10 transition-all hover:text-gray-900 dark:hover:text-white">
                 "{{ product.description || 'A timeless ensemble meticulously crafted for the elegant style, blending premium fabrics with artisanal precision.' }}"
               </p>
               
               <ul class="space-y-6">
                  <li v-for="feat in ['Hand-crafted Quality', 'Premium Luxury Fabrics', 'Exclusive Designer Wear', 'Worldwide Secure Shipping']" :key="feat" class="flex items-center gap-6 group">
                     <div class="w-1.5 h-1.5 rounded-full bg-[var(--primary-gold)] group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(184,134,11,0.5)]"></div>
                     <p class="text-[10px] font-bold text-stone-500 uppercase tracking-[0.3em] group-hover:text-[var(--primary-gold)] transition-colors">{{ feat }}</p>
                  </li>
               </ul>
            </div>

            <!-- Deployment Command -->
            <div class="pt-12 flex flex-col gap-8">
               <div class="flex items-center gap-6">
                  <button 
                    @click="handleAddToCart"
                    class="flex-grow bg-black dark:bg-[var(--primary-gold)] text-white py-8 px-12 text-[11px] font-bold uppercase tracking-[0.5em] shadow-3xl transition-all duration-700 hover:bg-[var(--deep-burgundy)] active:scale-95 flex items-center justify-center gap-6 group"
                  >
                    <font-awesome-icon icon="fa-solid fa-bag-shopping" class="text-[11px] group-hover:scale-120 transition-transform" /> 
                    <span>ADD TO BAG</span>
                  </button>
                  
                  <button 
                    @click="favorites.toggleFavorite(product)"
                    class="w-24 h-24 border border-[#d4af3722] transition-all duration-700 hover:border-[var(--primary-gold)]/50 flex items-center justify-center text-2xl group relative overflow-hidden"
                    :class="favorites.isFavorite(product.id) ? 'text-[var(--primary-gold)] bg-[var(--primary-gold)]/5 border-[var(--primary-gold)]' : 'text-stone-300'"
                  >
                    <div class="absolute inset-0 bg-[var(--primary-gold)]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    <font-awesome-icon :icon="favorites.isFavorite(product.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'" class="relative z-10" />
                  </button>
               </div>
               
               <p class="text-center text-[8px] text-stone-400 font-bold tracking-[0.4em] uppercase py-4 opacity-40">
                  Secure worldwide shipping active | Quality guaranteed on arrival.
               </p>
            </div>

            <!-- Details Partition -->
            <div v-if="product.details && product.details.length" class="pt-16 animate-reveal">
               <h3 class="text-[9px] font-bold uppercase tracking-[0.5em] text-stone-400 mb-10">FABRIC & CARE</h3>
               <div class="grid grid-cols-1 gap-6">
                  <div v-for="detail in product.details" :key="detail" class="flex items-center justify-between border-b border-[#d4af3711] pb-6 hover:border-[var(--primary-gold)]/20 transition-all group">
                     <span class="text-[11px] text-stone-600 dark:text-stone-400 font-bold uppercase tracking-widest group-hover:text-[var(--primary-gold)] transition-colors">{{ detail }}</span>
                     <font-awesome-icon icon="fa-solid fa-check" class="text-[9px] text-[var(--primary-gold)]/40" />
                  </div>
               </div>
            </div>
         </div>
       </div>
    </div>
    
    <!-- Horizon Section -->
    <div class="max-w-7xl mx-auto mt-64 animate-reveal">
       <div class="flex items-center gap-6 mb-20 px-8">
          <div class="h-[1px] flex-grow bg-amber-400/10"></div>
          <h2 class="text-2xl font-black uppercase tracking-[0.3em] dark:text-white font-playfair italic">Similar Designs</h2>
          <div class="h-[1px] flex-grow bg-amber-400/10"></div>
       </div>
       <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-8">
          <ProductCard v-for="p in relatedProducts" :key="p.id" :product="p" @click-product="goToDetail" />
       </div>
    </div>

  </div>
  <div v-else class="h-screen flex flex-col items-center justify-center bg-black gap-10">
     <div class="w-16 h-16 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
     <span class="text-[9px] font-black text-amber-500 tracking-[0.6em] uppercase">Preparing Delight...</span>
  </div>
</template>

<script setup>
import { computed, watch, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductsStore } from '../stores/products'
import { useCartStore } from '../stores/cart'
import { useFavoritesStore } from '../stores/favorites'
import { useAuthStore } from '../stores/auth'
import ProductCard from '../components/ProductCard.vue'

const props = defineProps(['id'])
const route = useRoute()
const router = useRouter()
const cart = useCartStore()
const favorites = useFavoritesStore()
const auth = useAuthStore()
const productStore = useProductsStore()

const product = computed(() => {
  const targetId = String(props.id || route.params.id)
  return productStore.products.find(p => String(p.id) === targetId || String(p._id) === targetId)
})

onMounted(async () => {
  window.scrollTo(0, 0)
  const targetId = String(props.id || route.params.id)
  if (targetId) {
    // Fetch full details if variants are missing
    const existing = productStore.products.find(p => String(p.id) === targetId || String(p._id) === targetId)
    if (!existing || !existing.variants || existing.variants.length === 0) {
      await productStore.fetchProductById(targetId)
    }
    if (product.value?.id || product.value?._id) {
       productStore.incrementView(product.value.id || product.value._id)
    }
  }
})

const selectedVariant = ref(null)
const selectedColor = ref(null)
const selectedSize = ref(null)
const manuallySelectedImage = ref(null)

const currentDisplayImage = computed(() => {
  if (manuallySelectedImage.value) return manuallySelectedImage.value
  if (selectedVariant.value && selectedVariant.value.image) {
    return selectedVariant.value.image
  }
  return product.value?.image
})

const allImages = computed(() => {
  if (!product.value) return []
  const images = new Set()
  if (product.value.image) images.add(product.value.image)
  if (product.value.variants) {
    product.value.variants.forEach(v => {
      if (v.image) images.add(v.image)
    })
  }
  return Array.from(images)
})

const uniqueColors = computed(() => {
  if (!product.value?.variants) return []
  return [...new Set(product.value.variants.map(v => v.color))]
})

const uniqueSizes = computed(() => {
  if (!product.value?.variants) return []
  return [...new Set(product.value.variants.map(v => v.size))]
})

watch(product, (p) => {
  selectedVariant.value = null
  selectedColor.value = null
  selectedSize.value = null
  manuallySelectedImage.value = null
}, { immediate: true })

const selectImage = (img) => {
  manuallySelectedImage.value = img
  if (product.value?.variants) {
    const matchedVariant = product.value.variants.find(v => v.image === img)
    if (matchedVariant) {
      selectedColor.value = matchedVariant.color
      selectedSize.value = matchedVariant.size
      selectedVariant.value = matchedVariant
    }
  }
}

const selectColor = (color) => {
  selectedColor.value = color
  updateSelectedVariant()
}

const selectSize = (size) => {
  selectedSize.value = size
  updateSelectedVariant()
}

const updateSelectedVariant = () => {
  manuallySelectedImage.value = null
  if (!product.value?.variants || !product.value.variants.length) return
  let variant = product.value.variants.find(v => v.color === selectedColor.value && v.size === selectedSize.value)
  if (!variant && selectedColor.value) {
    variant = product.value.variants.find(v => v.color === selectedColor.value)
    if (variant) selectedSize.value = variant.size
  }
  if (variant) {
    selectedVariant.value = variant
  }
}

const handleAddToCart = () => {
  if (product.value.variants && product.value.variants.length > 0) {
    let variantToAdd = selectedVariant.value
    if (!variantToAdd) {
      const randomIndex = Math.floor(Math.random() * product.value.variants.length)
      variantToAdd = product.value.variants[randomIndex]
      selectedColor.value = variantToAdd.color
      selectedSize.value = variantToAdd.size
      selectedVariant.value = variantToAdd
    }
    cart.addToCart(product.value, variantToAdd)
  } else {
    cart.addToCart(product.value)
  }
}

const relatedProducts = computed(() => {
  return productStore.products.filter(p => (p.id || p._id) !== (product.value?.id || product.value?._id)).slice(0, 4)
})

const goToDetail = (nextProduct) => {
  const nid = nextProduct.id || nextProduct._id
  router.push({ name: 'product-detail', params: { id: nid } })
}

watch(() => route.params.id, (newId) => {
  if (newId) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const pid = product.value?.id || product.value?._id
    if (pid) productStore.incrementView(pid)
  }
})


</script>

<style scoped>
.shadow-3xl {
  box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.2);
}
.dark .shadow-3xl {
  box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.6);
}

.animate-reveal { animation: reveal-bottom 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards; }

@keyframes reveal-bottom {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.font-playfair { font-family: 'Playfair Display', serif; }
.scrollbar-none::-webkit-scrollbar { display: none; }
.scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
</style>
