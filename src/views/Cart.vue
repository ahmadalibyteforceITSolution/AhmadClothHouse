<template>
  <div class="min-h-screen bg-[#fafaf8] transition-colors duration-700 dark:bg-[#050505] pb-32">
    
    <!-- SEO Heading (Visually Hidden) -->
    <h1 class="sr-only">Ahmadcloths House | Your Shopping Bag - Premium Fashion Selections</h1>

    <div class="max-w-7xl mx-auto px-6 py-20">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
           <div class="flex items-center gap-3 mb-4">
              <div class="h-[1px] w-10 bg-[var(--primary-gold)]"></div>
              <span class="text-[var(--primary-gold)] font-bold text-[10px] uppercase tracking-[0.4em] block">MY BAG</span>
           </div>
          <h2 class="text-3xl md:text-5xl font-light uppercase leading-none text-gray-900 dark:text-white transition-colors mb-2 font-playfair italic">CURATED SELECTIONS ({{ cart.totalItems }})</h2>
        </div>
      </div>

      <div v-if="cart.items.length === 0" class="h-[50vh] flex flex-col items-center justify-center text-center">
        <div class="w-32 h-32 bg-white dark:bg-[#080808] border border-[var(--primary-gold)]/10 rounded-full flex items-center justify-center mb-8 text-4xl shadow-xl">
          <font-awesome-icon icon="fa-solid fa-bag-shopping" class="text-[var(--primary-gold)]/30" />
        </div>
        <h3 class="text-2xl font-light uppercase tracking-widest mb-4 dark:text-white font-playfair italic">Your Bag is Empty</h3>
        <p class="text-gray-400 dark:text-stone-600 mb-10 max-w-xs uppercase text-[9px] font-bold leading-relaxed tracking-[0.3em]">It seems you haven't found your favorite designs yet.</p>
        <router-link to="/" class="bg-black dark:bg-[var(--primary-gold)] text-white px-10 py-5 font-bold uppercase text-[10px] tracking-[0.4em] shadow-2xl transition-all hover:scale-[1.05] active:scale-95">Explore Boutique</router-link>
      </div>

      <div v-else class="flex flex-col lg:flex-row gap-16">
        <!-- Items List -->
        <div class="flex-grow space-y-10">
          <div v-for="item in displayedCartItems" :key="item.id" class="bg-white dark:bg-[#080808] p-8 md:p-10 flex flex-col md:flex-row gap-10 shadow-sm border border-[var(--primary-gold)]/10 group relative overflow-hidden transition-all duration-500 hover:shadow-2xl">
              
              <!-- Subtle Background Text -->
              <div class="absolute -right-10 -bottom-10 text-[100px] font-bold opacity-[0.02] dark:opacity-[0.03] pointer-events-none select-none italic">{{ item.category }}</div>

             <div class="w-full md:w-56 aspect-[3/4] overflow-hidden bg-stone-100 dark:bg-stone-900 flex-shrink-0">
                <img :src="item.cartImage || item.image" :alt="item.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000">
             </div>
             
             <div class="flex-grow flex flex-col justify-between py-2 relative z-10">
                <div>
                   <div class="flex justify-between items-start mb-6">
                      <div>
                         <p class="text-[9px] text-[var(--primary-gold)] font-bold uppercase tracking-[0.3em] mb-2">{{ item.category }}</p>
                         <h3 @click="goToDetail(item.id)" class="text-2xl font-light uppercase tracking-tight text-gray-900 dark:text-white cursor-pointer hover:text-[var(--primary-gold)] transition-colors font-playfair italic">{{ item.name }}</h3>
                         
                         <div v-if="item.selectedVariant" class="mt-4 flex gap-3">
                            <span class="px-3 py-1.5 border border-[var(--primary-gold)]/20 bg-[var(--primary-gold)]/5 text-[var(--primary-gold)] text-[9px] font-bold uppercase tracking-widest">{{ item.selectedVariant.size }}</span>
                            <span class="px-3 py-1.5 border border-[var(--primary-gold)]/20 bg-[var(--primary-gold)]/5 text-[var(--primary-gold)] text-[9px] font-bold uppercase tracking-widest">{{ item.selectedVariant.color }}</span>
                         </div>
                      </div>
                      <button @click="cart.removeFromCart(item.cartId || item.id)" class="w-10 h-10 flex items-center justify-center text-stone-300 hover:text-red-500 dark:hover:text-red-400 transition-all hover:bg-red-50 dark:hover:bg-red-900/10 rounded-full">
                        <font-awesome-icon icon="fa-solid fa-xmark" />
                      </button>
                   </div>
                   
                   <div class="flex flex-wrap items-center justify-between gap-6 sm:gap-12 mb-10">
                      <div class="space-y-3">
                         <label class="text-[9px] block text-stone-400 font-bold uppercase tracking-widest">Quantity</label>
                         <div class="flex items-center gap-3 sm:gap-6 bg-[#fafaf8] dark:bg-black/50 px-3 py-2 sm:px-5 sm:py-3 border border-[var(--primary-gold)]/10 rounded-sm">
                            <button @click="cart.updateQuantity(item.cartId || item.id, item.quantity - 1)" class="w-6 h-6 flex items-center justify-center font-bold text-stone-400 hover:text-[var(--primary-gold)]">-</button>
                            <span class="w-6 text-center text-sm font-bold dark:text-white">{{ item.quantity }}</span>
                            <button @click="cart.updateQuantity(item.cartId || item.id, item.quantity + 1)" class="w-6 h-6 flex items-center justify-center font-bold text-stone-400 hover:text-[var(--primary-gold)]">+</button>
                         </div>
                      </div>
                      <div class="text-right space-y-1">
                        <label class="text-[9px] block text-stone-400 font-bold uppercase tracking-widest">Unit Price</label>
                        <p class="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-none whitespace-nowrap">Rs. {{ item.price.toLocaleString() }}</p>
                      </div>
                   </div>
                </div>

                <div class="flex justify-between items-center text-[var(--primary-gold)] font-bold text-2xl border-t border-[var(--primary-gold)]/10 pt-8 mt-2 sm:mt-0">
                   <p class="text-stone-400 uppercase text-[9px] font-bold tracking-[0.4em]">Item Subtotal</p>
                   <p class="font-bold font-playfair italic whitespace-nowrap">Rs. {{ (item.price * item.quantity).toLocaleString() }}</p>
                </div>
             </div>
          </div>


          <!-- Pagination -->
          <div v-if="totalPages > 1" class="pt-20 flex items-center justify-between border-t border-[var(--primary-gold)]/10">
             <button 
               @click="currentPage > 1 && (currentPage--)" 
               :disabled="currentPage === 1"
               class="w-12 h-12 flex items-center justify-center rounded-full border border-[var(--primary-gold)]/20 disabled:opacity-20 hover:bg-black hover:text-white dark:hover:bg-[var(--primary-gold)] transition-all dark:text-white"
             >
               <font-awesome-icon icon="fa-solid fa-arrow-left" />
             </button>
             
             <div class="flex gap-3">
                <template v-for="(p, i) in displayedPages" :key="i">
                  <button 
                    v-if="p !== '...'"
                    @click="currentPage = p"
                    class="w-10 h-10 rounded-full font-bold text-[10px] transition-all"
                    :class="currentPage === p ? 'bg-[var(--primary-gold)] text-white shadow-[0_5px_15px_rgba(184,134,11,0.2)]' : 'bg-transparent text-stone-400 hover:text-[var(--primary-gold)]'"
                  >
                    {{ p }}
                  </button>
                  <span v-else class="w-8 flex justify-center items-center text-stone-300 font-bold text-xs">...</span>
                </template>
             </div>

             <button 
               @click="currentPage < totalPages && (currentPage++)" 
               :disabled="currentPage === totalPages"
               class="w-12 h-12 flex items-center justify-center rounded-full border border-[var(--primary-gold)]/20 disabled:opacity-20 hover:bg-black hover:text-white dark:hover:bg-[var(--primary-gold)] transition-all dark:text-white"
             >
               <font-awesome-icon icon="fa-solid fa-arrow-right" />
             </button>
          </div>
        </div>


        <!-- Summary -->
        <div class="lg:w-[450px]">
          <div class="bg-white dark:bg-[#080808] p-12 border border-[var(--primary-gold)]/10 shadow-2xl sticky top-32">
            <h3 class="text-xl md:text-2xl font-light uppercase tracking-[0.2em] mb-12 border-b border-[var(--primary-gold)]/10 pb-8 leading-none dark:text-white font-playfair italic">Bag Overview</h3>
            
            <div class="space-y-8">
              <div class="flex justify-between items-center text-stone-400">
                <span class="text-[9px] font-bold uppercase tracking-[0.4em]">Items Subtotal</span>
                <span class="text-sm font-bold dark:text-white font-playfair italic">Rs. {{ cart.totalPrice.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between items-center text-stone-400">
                <span class="text-[9px] font-bold uppercase tracking-[0.4em]">Tax Estimate</span>
                <span class="text-sm font-bold dark:text-white font-playfair italic">Rs. 0</span>
              </div>
              <div class="pt-8 border-t border-[var(--primary-gold)]/20 flex justify-between items-end">
                <div>
                  <p class="text-[8px] font-bold text-[var(--primary-gold)] uppercase tracking-[0.5em] mb-2">Total Amount</p>
                  <h4 class="text-3xl font-light text-gray-900 dark:text-white font-playfair italic leading-none">Rs. {{ cart.totalPrice.toLocaleString() }}</h4>
                </div>
              </div>
            </div>

            <button @click="router.push('/checkout')" class="w-full bg-black dark:bg-[var(--primary-gold)] text-white py-8 px-6 font-bold uppercase text-[10px] tracking-[0.5em] shadow-3xl hover:bg-[var(--deep-burgundy)] transition-all active:scale-95 mt-10 flex items-center justify-center gap-6 group">
               <span>SECURE CHECKOUT</span>
               <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-[9px] group-hover:translate-x-2 transition-transform" />
            </button>

            <p class="text-center text-[7px] font-bold uppercase tracking-[0.4em] text-stone-400 opacity-40 leading-loose mt-8">
               Taxes and shipping calculated at checkout.<br>Ahmadcloths secure checkout active.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'

const router = useRouter()
const cart = useCartStore()

const itemsPerPage = 4
const currentPage = ref(1)

const totalPages = computed(() => {
  return Math.ceil(cart.items.length / itemsPerPage)
})

const displayedPages = computed(() => {
  const pages = []
  const maxDelta = 1
  for (let i = 1; i <= totalPages.value; i++) {
    if (i === 1 || i === totalPages.value || (i >= currentPage.value - maxDelta && i <= currentPage.value + maxDelta)) {
      pages.push(i)
    } else if (i === currentPage.value - maxDelta - 1 || i === currentPage.value + maxDelta + 1) {
      if (!pages.includes('...')) pages.push('...')
    }
  }
  return pages.filter((v, i, a) => v !== '...' || a[i-1] !== '...')
})

const displayedCartItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return cart.items.slice(start, end)
})

const goToDetail = (id) => {
  router.push({ name: 'product-detail', params: { id } })
}
</script>
