<template>
  <div class="luxury-dashboard min-h-screen bg-[#FDFBF7] dark:bg-[#050505] transition-colors duration-700 font-sans relative overflow-x-hidden">
    
    <!-- ═══════════════════════════════════════════
         ELITE SIDEBAR (STATIONARY)
    ═══════════════════════════════════════════ -->
    <aside :class="isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'"
      class="fixed left-0 top-0 h-screen w-80 bg-white dark:bg-[#0A0A0A] border-r border-black/5 dark:border-white/5 p-12 flex flex-col z-[150] transition-transform duration-700 ease-in-out scrollbar-none">
      
      <!-- Brand Identity -->
      <div class="mb-20 flex flex-col gap-4">
        <div class="h-[1px] w-8 bg-[var(--primary-gold)]"></div>
        <div class="text-2xl font-playfair tracking-[0.2em] font-light text-black dark:text-white uppercase cursor-pointer"
          @click="router.push('/')">AHMADCLOTHS</div>
        <p class="text-[8px] font-black tracking-[0.4em] text-stone-400 uppercase opacity-60">Couture Membership</p>
      </div>

      <!-- Navigation Matrix -->
      <nav class="flex flex-col gap-2">
        <button v-for="link in navLinks" :key="link.id" @click="currentTab = link.id; isMobileMenuOpen = false"
          :class="currentTab === link.id
            ? 'text-black dark:text-white bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/5'
            : 'text-stone-400 hover:text-[var(--primary-gold)] border-transparent'"
          class="group flex items-center gap-6 p-5 rounded-none transition-all duration-500 border relative overflow-hidden">
          
          <div v-if="currentTab === link.id" 
               class="absolute left-0 top-0 h-full w-1 bg-[var(--primary-gold)] animate-reveal-height"></div>
          
          <font-awesome-icon :icon="link.icon" class="text-xs transition-transform group-hover:scale-125" />
          <span class="text-[10px] font-black uppercase tracking-[0.3em]">{{ link.name }}</span>
        </button>
      </nav>

      <!-- Signature Footer -->
      <div class="mt-auto pt-10 border-t border-black/5 dark:border-white/5 flex flex-col gap-10">
        <div class="flex items-center gap-5 group cursor-pointer">
          <div class="relative w-12 h-12">
             <div class="absolute inset-0 border border-[var(--primary-gold)]/20 rounded-full group-hover:rotate-180 transition-transform duration-1000"></div>
             <div class="absolute inset-0 flex items-center justify-center text-[10px] font-bold uppercase tracking-widest text-black dark:text-white">
                {{ userInitial }}
             </div>
          </div>
          <div class="flex flex-col">
            <span class="text-xs font-black text-gray-900 dark:text-white tracking-tight">{{ auth.user?.name || 'Guest User' }}</span>
            <span class="text-[8px] font-bold text-[var(--primary-gold)] uppercase tracking-[0.2em] opacity-80">Platinum Status</span>
          </div>
        </div>

        <button @click="handleLogout"
          class="group flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.5em] text-stone-400 hover:text-red-600 transition-colors">
          <span>EXIT ATELIER</span>
          <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" class="text-[8px] group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </aside>

    <!-- Mobile Backdrop -->
    <div v-if="isMobileMenuOpen" class="fixed inset-0 bg-black/80 backdrop-blur-md z-[140] lg:hidden" @click="isMobileMenuOpen = false"></div>

    <!-- ═══════════════════════════════════════════
         MAIN CANVAS AREA
    ═══════════════════════════════════════════ -->
    <div class="flex-grow flex flex-col lg:ml-80 relative">
      
      <!-- Ambient Background Pattern -->
      <div class="absolute inset-0 opacity-10 bg-damask pointer-events-none"></div>

      <!-- Mobile Header (Visible on handheld only) -->
      <header class="lg:hidden bg-white/90 dark:bg-[#080808]/90 backdrop-blur-xl border-b border-black/5 px-8 py-6 flex justify-between items-center z-[110] sticky top-0">
        <button @click="isMobileMenuOpen = true" class="text-black dark:text-white">
          <font-awesome-icon icon="fa-solid fa-bars-staggered" class="text-lg" />
        </button>
        <div class="text-sm font-playfair tracking-widest text-black dark:text-white uppercase">PROFILE</div>
        <div class="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[8px] font-bold">{{ userInitial }}</div>
      </header>

      <!-- Content Heart -->
      <main class="flex-grow p-10 lg:p-24 relative z-10 transition-all duration-700">
        <div class="max-w-6xl mx-auto">
          
          <!-- Tab Header -->
          <header class="mb-20 space-y-6">
            <div class="flex items-center gap-4">
              <div class="h-[1px] w-12 bg-[var(--primary-gold)]"></div>
              <p class="text-[8px] font-black tracking-[0.6em] text-[var(--primary-gold)] uppercase">Private Viewing</p>
            </div>
            <h2 class="text-5xl md:text-7xl font-playfair italic text-black dark:text-white leading-none tracking-tight">
               {{ currentTabTitleParts.main }} <span class="text-[var(--primary-gold)] not-italic font-sans font-extralight uppercase tracking-widest block mt-4 text-2xl md:text-3xl">{{ currentTabTitleParts.accent }}</span>
            </h2>
          </header>

          <!-- Tab Content with Luxury Transitions -->
          <transition name="luxury-tab" mode="out-in">
            <div :key="currentTab">
              
              <!-- 🛒 BASKET VIEW -->
              <div v-if="currentTab === 'cart'" class="animate-reveal">
                <div class="bg-white dark:bg-[#0A0A0A] p-0 md:p-12 border border-black/5 dark:border-white/5 shadow-2xl hover:shadow-black/20 transition-all duration-1000">
                   <CartComponent class="!p-0 !bg-transparent !min-h-0" />
                </div>
              </div>

              <!-- ❤️ FAVORITES VIEW -->
              <div v-else-if="currentTab === 'favorites'" class="animate-reveal">
                 <div class="bg-white dark:bg-[#0A0A0A] p-0 md:p-12 border border-black/5 dark:border-white/5 shadow-2xl transition-all duration-1000">
                    <FavoritesComponent class="!p-0 !bg-transparent !min-h-0" />
                 </div>
              </div>

              <!-- 📦 ORDERS LOG VIEW -->
              <div v-else-if="currentTab === 'orders'" class="space-y-16 animate-reveal">
                <div v-if="orders.length === 0" 
                     class="group flex flex-col items-center justify-center py-40 border border-black/5 dark:border-white/5 bg-white dark:bg-[#0A0A0A] shadow-lg">
                  <div class="w-24 h-24 rounded-full border border-[var(--primary-gold)]/10 flex items-center justify-center mb-10 group-hover:border-[var(--primary-gold)]/40 transition-all duration-1000">
                     <font-awesome-icon icon="fa-solid fa-box-open" class="text-3xl text-[var(--primary-gold)]/20 group-hover:text-[var(--primary-gold)] transition-all" />
                  </div>
                  <p class="text-[10px] font-black tracking-[0.5em] text-stone-400 uppercase">Your sartorial archive is waiting</p>
                  <router-link to="/shop" class="mt-8 text-[9px] font-black uppercase tracking-widest text-[var(--primary-gold)] border-b border-[var(--primary-gold)]/20 pb-2">Start a New Chapter</router-link>
                </div>

                <div v-else class="grid grid-cols-1 gap-12">
                  <div v-for="order in orders" :key="order.id" 
                       class="group bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/5 p-10 lg:p-16 hover:shadow-3xl transition-all duration-1000 relative overflow-hidden">
                    
                    <!-- Decorative Background Accent -->
                    <div class="absolute top-0 right-0 w-64 h-64 bg-damask opacity-5 -translate-y-1/4 translate-x-1/4 group-hover:scale-110 transition-transform duration-[2s]"></div>

                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
                      
                      <!-- Info Column -->
                      <div class="lg:col-span-8 flex flex-col gap-10">
                        <div class="flex flex-col gap-4">
                          <span class="text-[8px] font-black tracking-[0.6em] text-[var(--primary-gold)] uppercase">IDENTIFIER</span>
                          <h3 class="text-2xl font-playfair italic text-black dark:text-white">#{{ order.id.slice(-8).toUpperCase() }}</h3>
                        </div>

                        <!-- Delivery Progress -->
                        <div class="space-y-10">
                          <div class="flex justify-between items-end">
                            <span class="text-[8px] font-black tracking-[0.4em] text-stone-400 uppercase">Logistic Progression</span>
                            <span class="text-[10px] font-bold text-[var(--primary-gold)] tracking-widest uppercase">{{ order.status }}</span>
                          </div>
                          
                          <div class="relative h-1 bg-black/5 dark:bg-white/5">
                            <div class="absolute left-0 top-0 h-full bg-[var(--primary-gold)] transition-all duration-[2s] ease-in-out shadow-[0_0_15px_var(--primary-gold)]"
                                 :style="{ width: getStatusProgress(order.status) + '%' }"></div>
                            
                            <!-- Delivery Nodes -->
                            <div class="absolute inset-0 flex justify-between items-center px-0">
                               <div v-for="step in ['Pending', 'Processing', 'Shipped', 'Delivered']" :key="step"
                                    class="w-3 h-3 rounded-full border-4 border-white dark:border-[#0A0A0A] transition-all duration-700"
                                    :class="isStepComplete(order.status, step) ? 'bg-[var(--primary-gold)] scale-125' : 'bg-stone-200 dark:bg-stone-800'">
                               </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Value Column -->
                      <div class="lg:col-span-4 lg:text-right flex flex-col justify-between py-2 border-t lg:border-t-0 lg:border-l border-black/5 dark:border-white/5 lg:pl-16">
                        <div class="flex flex-col gap-4">
                          <span class="text-[8px] font-black tracking-[0.6em] text-stone-400 uppercase">Valuation</span>
                          <p class="text-4xl font-playfair italic text-black dark:text-white">Rs. {{ order.amount.toLocaleString() }}</p>
                        </div>
                        
                        <div v-if="order.trackingNumber" class="mt-10 flex flex-col gap-2">
                           <span class="text-[7px] font-black tracking-[0.3em] text-stone-400 uppercase">CONSIGNMENT REF</span>
                           <span class="text-[10px] font-black text-[var(--primary-gold)] tracking-widest uppercase">{{ order.trackingNumber }}</span>
                        </div>
                      </div>
                    </div>

                    <!-- Enhanced Logistic Map / Note -->
                    <div v-if="order.status === 'Shipped'" class="mt-16 pt-12 border-t border-black/5 dark:border-white/5 animate-reveal">
                       <div class="flex flex-col lg:flex-row gap-10 items-start lg:items-center justify-between">
                          <div class="flex gap-6 items-center flex-grow">
                             <div class="w-12 h-12 flex-shrink-0 rounded-full border border-[var(--primary-gold)]/20 flex items-center justify-center">
                                <font-awesome-icon icon="fa-solid fa-paper-plane" class="text-sm text-[var(--primary-gold)] animate-pulse" />
                             </div>
                             <p class="text-[9px] font-bold text-stone-500 uppercase tracking-widest leading-loose max-w-xl">
                                Curated transit via <span class="text-black dark:text-white">{{ order.carrier || 'Boutique Express' }}</span>. Expect arrival at <span class="text-[var(--primary-gold)]">{{ order.city }}</span> within our premium window.
                             </p>
                          </div>
                          <button @click="order.showMap = !order.showMap" 
                                  class="text-[9px] font-black tracking-[0.5em] text-[var(--primary-gold)] uppercase border border-[var(--primary-gold)]/30 px-10 py-4 hover:bg-[var(--primary-gold)] hover:text-black transition-all">
                             {{ order.showMap ? 'DISMISS GRID' : 'VISUALIZE LOGISTICS' }}
                          </button>
                       </div>

                       <transition name="luxury-map">
                         <div v-if="order.showMap" class="mt-10 grayscale dark:invert opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                           <iframe width="100%" height="350" frameborder="0" style="border:0" :src="getGoogleMapUrl(order.city)" allowfullscreen></iframe>
                         </div>
                       </transition>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </transition>
        </div>
      </main>
    </div>

    <!-- ═══════════════════════════════════════════
         AESTHETIC NOISE OVERLAY
    ═══════════════════════════════════════════ -->
    <div class="fixed inset-0 pointer-events-none opacity-20 bg-noise mix-blend-overlay"></div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useOrdersStore } from '../stores/orders'
import CartComponent from './Cart.vue'
import FavoritesComponent from './Favorites.vue'

const router = useRouter()
const auth = useAuthStore()
const orderStore = useOrdersStore()

const currentTab = ref('orders') // default to orders to show off the new cards
const isMobileMenuOpen = ref(false)

const navLinks = [
  { id: 'orders', name: 'Order Logs', icon: ['fas', 'truck-fast'] },
  { id: 'cart', name: 'My Basket', icon: ['fas', 'cart-shopping'] },
  { id: 'favorites', name: 'My Favorites', icon: ['fas', 'heart'] }
]

const orders = computed(() => {
  return orderStore.orders.map(o => ({
    id: o._id || o.id,
    status: o.status || 'Pending',
    amount: o.totalAmount || 0,
    trackingNumber: o.tracking?.trackingNumber || '',
    carrier: o.tracking?.carrier || '',
    city: o.shippingAddress?.city || 'Lahore',
    showMap: false
  }))
})

const getGoogleMapUrl = (city) => {
  const query = `${city}, Pakistan`
  return `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''}&q=${encodeURIComponent(query)}&zoom=12`
}

onMounted(() => {
  if (auth.user?.id || auth.user?._id) {
    orderStore.fetchUserOrders(auth.user.id || auth.user._id)
  }
  window.scrollTo(0, 0)
})

const getStatusProgress = (status) => {
  const s = status?.toLowerCase()
  if (s === 'pending') return 25
  if (s === 'processing') return 50
  if (s === 'shipped') return 75
  if (s === 'delivered') return 100
  return 0
}

const isStepComplete = (currentStatus, step) => {
  const steps = ['Pending', 'Processing', 'Shipped', 'Delivered']
  return steps.indexOf(currentStatus) >= steps.indexOf(step)
}

const currentTabTitleParts = computed(() => {
  const name = navLinks.find(l => l.id === currentTab.value)?.name || 'Dashboard'
  const parts = name.split(' ')
  return { main: parts[0], accent: parts[1] || '' }
})

const userInitial = computed(() => auth.user?.name?.charAt(0) || 'A')
const handleLogout = () => { auth.logout(); router.push('/login') }
</script>

<style scoped>
.animate-reveal {
  animation: reveal-bottom 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  opacity: 0;
}

.animate-reveal-height {
  animation: reveal-height 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

@keyframes reveal-height {
  from { height: 0; }
  to { height: 100%; }
}

@keyframes reveal-bottom {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.luxury-tab-enter-active, .luxury-tab-leave-active {
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}

.luxury-tab-enter-from { opacity: 0; transform: translateX(20px); }
.luxury-tab-leave-to { opacity: 0; transform: translateX(-20px); }

.luxury-map-enter-active, .luxury-map-leave-active {
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
  max-height: 400px;
}
.luxury-map-enter-from, .luxury-map-leave-to {
  opacity: 0;
  max-height: 0;
}

.font-playfair { font-family: 'Cormorant Garamond', serif; }

.bg-damask {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='%23B8860B' fill-opacity='0.05'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3C/g%3E%3C/svg%3E");
}

.bg-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

.shadow-3xl {
  box-shadow: 0 40px 120px -20px rgba(0, 0, 0, 0.15);
}

:deep(.dashboard-card) {
   background: transparent !important;
   border: none !important;
   padding: 0 !important;
}

:deep(.py-20) { padding: 0 !important; }
</style>
