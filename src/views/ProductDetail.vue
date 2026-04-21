<template>
  <div v-if="product" class="min-h-screen bg-white dark:bg-[#050505] transition-colors duration-1000 pb-40 text-[#1a1a1a] dark:text-[#f9f9f9]">
    
    <!-- Ultra-Luxury Top Banner -->
    <div class="w-full h-12 bg-black dark:bg-[#1a1a1a] flex items-center justify-center overflow-hidden mb-12">
       <span class="text-[8px] md:text-[9px] font-medium tracking-[0.4em] text-white uppercase animate-pulse">
         COMPLIMENTARY NATIONWIDE SHIPPING ON LUXURY ATELIERS
       </span>
    </div>

    <div class="max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
       
       <!-- Left Side: Grand Image Presentation (Maria B Style) -->
       <div class="lg:col-span-7 flex flex-col gap-6">
         <!-- Main Hero Image -->
         <div class="relative w-full overflow-hidden bg-[#fafaf8] dark:bg-[#080808] aspect-[3/4] group mb-4">
           <!-- Subtle zoom effect on hover -->
           <img 
             :src="currentDisplayImage" 
             :alt="product.name" 
             class="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110 ease-out"
           />
           <!-- Minimalist Watermark -->
           <div class="absolute inset-0 border border-black/5 dark:border-white/5 pointer-events-none"></div>
           <div class="absolute bottom-6 left-6 rotate-[-90deg] origin-bottom-left text-[8px] font-black tracking-[0.5em] text-black/30 dark:text-white/30 uppercase mix-blend-difference">
              MARIA.B INSPIRED
           </div>
         </div>
         
         <!-- Thumbnail Grid -->
         <div v-if="allImages.length > 1" class="grid grid-cols-4 gap-4">
           <button 
             v-for="(img, idx) in allImages" :key="idx"
             @click="selectImage(img)"
             class="aspect-[3/4] overflow-hidden relative group transition-opacity duration-500"
             :class="currentDisplayImage === img ? 'opacity-100 ring-1 ring-black dark:ring-white ring-offset-2 dark:ring-offset-[#050505]' : 'opacity-50 hover:opacity-100'"
           >
             <img :src="img" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105">
           </button>
         </div>
       </div>

       <!-- Right Side: Clean Minimalist Details -->
       <div class="lg:col-span-5 flex flex-col relative">
         <div class="lg:sticky lg:top-10 animate-fade-in-up">
            
            <!-- Breadcrumb -->
            <nav class="flex items-center gap-2 text-[9px] font-black tracking-[0.3em] uppercase text-stone-400 mb-8">
               <router-link to="/" class="hover:text-black dark:hover:text-white transition-colors">Home</router-link>
               <span class="opacity-50">/</span>
               <router-link :to="`/shop/${product.category}`" class="hover:text-black dark:hover:text-white transition-colors">{{ product.category }}</router-link>
               <span class="opacity-50">/</span>
               <span class="text-black dark:text-white line-clamp-1 max-w-[150px]">{{ product.name }}</span>
            </nav>

            <!-- Title & Price Block -->
            <div class="border-b border-black/10 dark:border-white/10 pb-8 mb-8">
              <h1 class="text-3xl md:text-5xl font-playfair font-normal leading-[1.1] mb-6 tracking-tight text-[#111] dark:text-[#fff]">
                 {{ product.name }}
              </h1>
              <div class="flex items-baseline gap-4">
                 <span class="text-2xl font-light tracking-wide">PKR {{ product.price.toLocaleString() }}</span>
                 <span v-if="product.originalPrice && product.originalPrice > product.price" class="text-sm text-stone-400 line-through opacity-70">
                   PKR {{ product.originalPrice.toLocaleString() }}
                 </span>
              </div>
              <p class="text-[10px] font-medium uppercase tracking-[0.2em] text-[#d4af37] mt-3">Inclusive of all taxes</p>
            </div>

            <!-- Interactivity (Variants) -->
            <div class="space-y-8 mb-12">
              <div v-if="uniqueColors.length > 0">
                <div class="flex justify-between items-center mb-4">
                   <h3 class="text-[10px] font-bold uppercase tracking-[0.3em] text-[#111] dark:text-[#eee]">Color</h3>
                   <span class="text-[9px] font-medium text-stone-400 uppercase tracking-widest">{{ selectedColor || 'Select' }}</span>
                </div>
                <div class="flex flex-wrap gap-3">
                  <button 
                    v-for="color in uniqueColors" :key="color"
                    @click="selectColor(color)"
                    class="relative px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors border"
                    :class="selectedColor === color ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white' : 'border-stone-200 dark:border-stone-800 text-stone-500 hover:border-black dark:hover:border-white'"
                  >
                    {{ color }}
                  </button>
                </div>
              </div>
              
              <div v-if="uniqueSizes.length > 0">
                <div class="flex justify-between items-center mb-4">
                   <h3 class="text-[10px] font-bold uppercase tracking-[0.3em] text-[#111] dark:text-[#eee]">Size</h3>
                   <span class="text-[9px] cursor-pointer font-medium border-b border-black dark:border-white uppercase tracking-widest hover:text-[#d4af37] hover:border-[#d4af37] transition-colors">Size Guide</span>
                </div>
                <div class="flex flex-wrap gap-3">
                  <button 
                    v-for="size in uniqueSizes" :key="size"
                    @click="selectSize(size)"
                    class="w-12 h-12 flex items-center justify-center text-[10px] font-bold uppercase tracking-widest border transition-all"
                    :class="selectedSize === size ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white' : 'border-stone-200 dark:border-stone-800 text-stone-500 hover:border-black dark:hover:border-white'"
                  >
                    {{ size }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col gap-4 mb-16">
               <button 
                 @click="handleAddToCart"
                 class="w-full bg-black dark:bg-white text-white dark:text-black py-4 md:py-5 text-[11px] font-bold uppercase tracking-[0.4em] transition-transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-4 group"
               >
                 <span>ADD TO CART</span>
                 <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-[10px] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
               </button>
               
               <button 
                 @click="favorites.toggleFavorite(product)"
                 class="w-full bg-transparent border border-black dark:border-white text-black dark:text-white py-4 md:py-5 text-[11px] font-bold uppercase tracking-[0.4em] transition-colors hover:bg-stone-50 dark:hover:bg-stone-900 flex items-center justify-center gap-4"
               >
                 <font-awesome-icon :icon="favorites.isFavorite(product.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'" :class="favorites.isFavorite(product.id) ? 'text-[#d4af37]' : ''" />
                 <span>{{ favorites.isFavorite(product.id) ? 'SAVED TO WISHLIST' : 'ADD TO WISHLIST' }}</span>
               </button>
            </div>

            <!-- Accordion Details (Maria B Style) -->
            <div class="border-t border-black/10 dark:border-white/10">
               <!-- Accordion Item 1 -->
               <div class="py-6 border-b border-black/10 dark:border-white/10 group cursor-pointer" @click="activeAccordion = activeAccordion === 1 ? 0 : 1">
                  <div class="flex justify-between items-center">
                     <span class="text-[11px] font-black uppercase tracking-[0.3em]">Description</span>
                     <span class="text-lg font-light transition-transform duration-300" :class="{'rotate-45': activeAccordion === 1}">+</span>
                  </div>
                  <div class="overflow-hidden transition-all duration-500 max-h-0" :class="{'max-h-[500px] mt-6': activeAccordion === 1}">
                     <p class="text-[13px] text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                        {{ product.description || 'Elevate your wardrobe with our latest unstitched ensemble. An exquisite curation of fine fabric and precise embroidery detailing.' }}
                     </p>
                  </div>
               </div>

               <!-- Accordion Item 2 -->
               <div v-if="product.details && product.details.length" class="py-6 border-b border-black/10 dark:border-white/10 group cursor-pointer" @click="activeAccordion = activeAccordion === 2 ? 0 : 2">
                  <div class="flex justify-between items-center">
                     <span class="text-[11px] font-black uppercase tracking-[0.3em]">Fabric Details</span>
                     <span class="text-lg font-light transition-transform duration-300" :class="{'rotate-45': activeAccordion === 2}">+</span>
                  </div>
                  <div class="overflow-hidden transition-all duration-500 max-h-0" :class="{'max-h-[500px] mt-6': activeAccordion === 2}">
                     <ul class="space-y-3">
                        <li v-for="detail in product.details" :key="detail" class="text-[12px] text-stone-600 dark:text-stone-400 font-light flex items-start gap-4">
                           <span class="w-1 h-1 rounded-full bg-black dark:bg-white mt-1.5 shrink-0"></span>
                           <span class="tracking-wide">{{ detail }}</span>
                        </li>
                     </ul>
                  </div>
               </div>
               
               <!-- Accordion Item 3 -->
               <div class="py-6 border-b border-black/10 dark:border-white/10 group cursor-pointer" @click="activeAccordion = activeAccordion === 3 ? 0 : 3">
                  <div class="flex justify-between items-center">
                     <span class="text-[11px] font-black uppercase tracking-[0.3em]">Delivery & Returns</span>
                     <span class="text-lg font-light transition-transform duration-300" :class="{'rotate-45': activeAccordion === 3}">+</span>
                  </div>
                  <div class="overflow-hidden transition-all duration-500 max-h-0" :class="{'max-h-[500px] mt-6': activeAccordion === 3}">
                     <p class="text-[12px] text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                        Orders are dispatched within 24-48 hours. Express delivery across Pakistan takes 2-4 working days. International delivery takes 5-10 working days. Unstitched items can be exchanged within 7 days of purchase.
                     </p>
                  </div>
               </div>
            </div>

         </div>
       </div>
    </div>
    
    <!-- Guest Reviews Section Container -->
    <div class="max-w-[1800px] mx-auto px-6 sm:px-12 mt-32">
       <div class="py-16 border-t border-black/10 dark:border-white/10">
         <ReviewSection :product-id="product?.id || product?._id" />
       </div>
    </div>

    <!-- Related Products -->
    <div class="bg-stone-50 dark:bg-[#0a0a0a] py-32 mt-12 w-full">
       <div class="max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-20">
          <div class="flex items-center gap-6 mb-16">
             <h2 class="text-3xl font-playfair uppercase tracking-widest dark:text-white">Complete The Look</h2>
             <div class="h-[1px] flex-grow bg-black/10 dark:bg-white/10"></div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             <ProductCard v-for="p in relatedProducts" :key="p.id" :product="p" @click-product="goToDetail" />
          </div>
       </div>
    </div>

  </div>
  <div v-else class="h-screen flex flex-col items-center justify-center bg-white dark:bg-[#050505] gap-10">
     <div class="w-12 h-12 border border-black dark:border-white border-t-transparent rounded-full animate-spin"></div>
     <span class="text-[10px] font-black text-black dark:text-white tracking-[0.5em] uppercase">Curating Detail...</span>
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
import ReviewSection from '../components/ReviewSection.vue'

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
       // Track Meta ViewContent Event
       if (typeof window !== 'undefined' && window.fbq) {
         window.fbq('track', 'ViewContent', {
           content_name: product.value.name,
           content_ids: [product.value.id || product.value._id],
           content_type: 'product',
           value: product.value.price,
           currency: 'PKR'
         })
       }
    }
  }
})

const selectedVariant = ref(null)
const selectedColor = ref(null)
const selectedSize = ref(null)
const manuallySelectedImage = ref(null)
const activeAccordion = ref(1) // Controls the accordion state

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

    // Advanced SEO Injection (Maria B Style Editorial Meta)
    if (typeof document !== 'undefined' && p) {
      const BASE = 'https://ahmad-cloths.vercel.app'
      const pageUrl = `${BASE}${route.path}`
      const pageTitle = `${p.name} | Pakistani Designer 2026 | AhmadClothesHouse`
      const pageDesc = p.description ? p.description.slice(0, 160) : `Shop ${p.name} from AhmadClothesHouse 2026 Collection. Premium luxury unstitched lawn and handcrafted Pakistani couture with worldwide shipping.`
      const pageImage = p.image || `${BASE}/og-image.png`

      document.title = pageTitle

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

      setMeta('description', false, pageDesc)
      setMeta('robots', false, 'index, follow')
      setMeta('og:title', true, pageTitle)
      setMeta('og:description', true, pageDesc)
      setMeta('og:url', true, pageUrl)
      setMeta('og:image', true, pageImage)
      setMeta('og:type', true, 'product')
      setMeta('product:price:amount', true, p.price)
      setMeta('product:price:currency', true, 'PKR')

      // Canonical
      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
      canonical.href = pageUrl

      // Product & Breadcrumb Schema
      const schemas = [
        {
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": p.name,
          "image": [p.image],
          "description": pageDesc,
          "sku": p.sku || p.id || p._id,
          "brand": { "@type": "Brand", "name": "AhmadClothesHouse" },
          "offers": {
            "@type": "Offer",
            "url": pageUrl,
            "priceCurrency": "PKR",
            "price": p.price,
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "AhmadClothesHouse" }
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE },
            { "@type": "ListItem", "position": 2, "name": p.category, "item": `${BASE}/shop/${p.category}` },
            { "@type": "ListItem", "position": 3, "name": p.name, "item": pageUrl }
          ]
        }
      ]

      let script = document.getElementById('product-schema-json-ld')
      if (!script) {
        script = document.createElement('script')
        script.id = 'product-schema-json-ld'
        script.type = 'application/ld+json'
        document.head.appendChild(script)
      }
      script.text = JSON.stringify(schemas)
    }
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
    if (pid) {
      productStore.incrementView(pid)
      // Track Meta ViewContent Event on route change
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'ViewContent', {
          content_name: product.value.name,
          content_ids: [pid],
          content_type: 'product',
          value: product.value.price,
          currency: 'PKR'
        })
      }
    }
  }
})


</script>

<style scoped>
/* Ultra-Luxury Maria B Styles */
.font-playfair { font-family: 'Playfair Display', serif; }

.animate-fade-in-up {
  animation: fadeInUp 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Hide scrollbar for cleaner look if needed on specific elements */
.scrollbar-none::-webkit-scrollbar { display: none; }
.scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
</style>
