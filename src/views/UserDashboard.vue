<template>
  <div
    class="min-h-screen bg-[#fafaf8] dark:bg-[#050505] flex transition-colors duration-700 font-sans relative overflow-x-hidden">
    <!-- Sidebar -->
    <aside :class="isMobileMenuOpen ? 'translate-x-0 shadow-2xl shadow-black/50' : '-translate-x-full lg:translate-x-0'"
      class="fixed left-0 top-0 h-screen w-72 bg-white dark:bg-[#080808] border-r border-[#d4af371a] p-6 sm:p-10 flex flex-col z-[150] transition-transform duration-500 ease-in-out overflow-y-auto scrollbar-none">
      <div class="mb-16 flex items-center justify-between">
        <h1
          class="text-xl font-playfair tracking-[0.2em] font-light text-[var(--luxury-black)] dark:text-white uppercase cursor-pointer"
          @click="router.push('/')">AHMADCLOTHS</h1>
        <button @click="isMobileMenuOpen = false" class="lg:hidden p-2 text-stone-400">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
      </div>

      <nav class="flex flex-col gap-4 overflow-y-auto scrollbar-none">
        <button v-for="link in navLinks" :key="link.name" @click="currentTab = link.id; isMobileMenuOpen = false"
          :class="currentTab === link.id
            ? 'text-black dark:text-white bg-[var(--primary-gold)]/5 border-[var(--primary-gold)]/20'
            : 'text-gray-400 dark:text-stone-600 hover:text-[var(--primary-gold)] dark:hover:text-[var(--primary-gold)] border-transparent'"
          class="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] p-4 rounded-xl transition-all duration-500 border">
          <font-awesome-icon :icon="link.icon" class="text-xs" />
          {{ link.name }}
          <div v-if="currentTab === link.id"
            class="ml-auto w-1 h-1 rounded-full bg-[var(--primary-gold)] shadow-[0_0_10px_rgba(184,134,11,0.5)]"></div>
        </button>
      </nav>

      <div class="mt-auto pt-10 border-t border-[#d4af371a]">
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-[10px] font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 shadow-inner">
            {{ userInitial }}
          </div>
          <div class="flex flex-col">
            <span class="text-[9px] font-bold uppercase tracking-widest text-[var(--primary-gold)] mb-0.5">GUEST
              MEMBER</span>
            <span class="text-xs font-bold text-gray-900 dark:text-white">{{ auth.user?.name || 'Guest' }}</span>
          </div>
        </div>

        <button @click="handleLogout"
          class="w-full py-4 text-[9px] font-bold uppercase tracking-[0.4em] text-red-800/60 dark:text-red-400/40 hover:text-red-600 dark:hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl transition-all duration-500">
          Sign Out
        </button>
      </div>
    </aside>

    <!-- Mobile Backdrop -->
    <div v-if="isMobileMenuOpen"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[140] lg:hidden transition-opacity duration-500"
      @click="isMobileMenuOpen = false"></div>

    <!-- Main Content Area -->
    <div class="flex-grow flex flex-col overflow-hidden relative lg:ml-72">
      <!-- Background Decorative Element -->
      <div
        class="absolute -top-24 -right-24 w-96 h-96 bg-[var(--primary-gold)]/5 blur-[120px] rounded-full pointer-events-none">
      </div>

      <!-- Mobile Header -->
      <header
        class="lg:hidden bg-white dark:bg-[#080808] border-b border-[#d4af371a] px-4 sm:px-8 py-4 sm:py-5 flex justify-between items-center z-[110] shrink-0">
        <div class="flex items-center gap-2 sm:gap-4">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-4 -ml-4 text-stone-400 shrink-0 relative z-[120]" aria-label="Toggle Menu">
            <font-awesome-icon :icon="isMobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" class="text-lg" />
          </button>
          <h1
            class="text-lg font-playfair tracking-[0.2em] font-light text-[var(--luxury-black)] dark:text-white uppercase cursor-pointer"
            @click="router.push('/')">AHMADCLOTHS</h1>
        </div>
        <div class="flex items-center gap-2 sm:gap-4">
          <button v-for="link in navLinks" :key="'m-' + link.id" @click="currentTab = link.id"
            class="p-2 text-stone-400" :class="{ 'text-[var(--primary-gold)]': currentTab === link.id }">
            <font-awesome-icon :icon="link.icon" />
          </button>
        </div>
      </header>

      <!-- Scroll Content Container -->
      <main class="flex-grow overflow-y-auto p-6 md:p-12 lg:p-20 scroll-smooth">
        <div class="max-w-6xl mx-auto">
          <header class="mb-16">
            <div class="flex items-center gap-4 mb-4">
              <div class="h-[1px] w-12 bg-[var(--primary-gold)]/40"></div>
              <span class="text-[9px] font-bold uppercase tracking-[0.4em] text-[var(--primary-gold)]/80">BOUTIQUE
                RECEPTION</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-light uppercase tracking-tighter text-gray-900 dark:text-white font-playfair italic">
              {{ currentTabTitleParts.main }} <span class="text-[var(--primary-gold)] italic font-serif font-light">{{ currentTabTitleParts.accent }}</span>
            </h1>
          </header>

          <transition name="fade-slide" mode="out-in">
            <div :key="currentTab" class="relative">
              <div v-if="currentTab === 'cart'" class="dashboard-card">
                <CartComponent class="!p-0 !bg-transparent !min-h-0" />
              </div>
              <div v-else-if="currentTab === 'favorites'" class="dashboard-card">
                <FavoritesComponent class="!p-0 !bg-transparent !min-h-0" />
              </div>
              <div v-else-if="currentTab === 'orders'" class="dashboard-card">
                <div class="space-y-12">
                  <div v-if="orders.length === 0"
                    class="text-center py-32 border border-dashed border-[#d4af3722] rounded-3xl">
                    <font-awesome-icon icon="fa-solid fa-box-open"
                      class="text-5xl text-[var(--primary-gold)]/20 mb-8" />
                    <p class="text-[9px] font-bold uppercase tracking-[0.5em] text-stone-400">Your fashion archive is
                      currently empty</p>
                    <button @click="router.push('/shop')"
                      class="mt-8 text-[var(--primary-gold)] font-bold text-[10px] uppercase tracking-widest hover:underline decoration-1">Begin
                      Collection</button>
                  </div>
                  <div v-else class="space-y-6">
                    <div v-for="order in orders" :key="order.id"
                      class="p-6 sm:p-10 bg-white dark:bg-black/40 border border-[#d4af3711] group hover:border-[var(--primary-gold)]/40 transition-all duration-700">
                      <div class="flex flex-col md:flex-row justify-between gap-8 md:gap-10">
                        <div class="flex flex-col gap-6">
                          <div class="flex items-center gap-4">
                            <span class="text-[8px] font-bold uppercase tracking-widest text-stone-400">ORDER
                              REF:</span>
                            <span class="text-xs font-bold text-[var(--primary-gold)] font-mono italic">{{ order.id
                            }}</span>
                          </div>
                          <div class="flex items-center gap-6">
                            <div
                              class="px-6 py-2 bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 text-[8px] font-bold uppercase tracking-widest text-stone-500">
                              {{ order.status }}
                            </div>
                            <div v-if="order.trackingNumber"
                              class="text-[9px] font-bold uppercase tracking-widest text-emerald-500">
                              TRACKING: {{ order.trackingNumber }}
                            </div>
                          </div>
                        </div>
                        <div
                          class="text-left md:text-right mt-4 md:mt-0 pt-6 md:pt-0 border-t md:border-t-0 border-[#d4af3711]">
                          <p class="text-[9px] font-bold uppercase tracking-widest text-stone-400 mb-1">TOTAL INVESTMENT
                          </p>
                          <p class="text-2xl font-light font-playfair italic text-gray-900 dark:text-white">Rs. {{
                            order.amount.toLocaleString() }}</p>
                        </div>
                      </div>

                      <!-- Delivery Progress Tracking UI -->
                      <div class="mt-12 pt-12 border-t border-[#d4af3711]">
                        <h4 class="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 mb-10">DELIVERY
                          STATUS_</h4>
                        <div class="relative">
                          <div
                            class="absolute top-1/2 left-0 right-0 h-0.5 bg-stone-100 dark:bg-white/5 -translate-y-1/2">
                          </div>
                          <div
                            class="absolute top-1/2 left-0 h-0.5 bg-[var(--primary-gold)] -translate-y-1/2 transition-all duration-1000"
                            :style="{ width: getStatusProgress(order.status) + '%' }"></div>

                          <div class="relative flex justify-between px-2 sm:px-6">
                            <div v-for="step in ['Processing', 'Shipped', 'Delivered']" :key="step"
                              class="flex flex-col items-center">
                              <div
                                :class="isStepComplete(order.status, step) ? 'bg-[var(--primary-gold)] text-white shadow-[0_0_15px_rgba(184,134,11,0.5)]' : 'bg-white dark:bg-black border-2 border-stone-100 dark:border-white/5 text-stone-300'"
                                class="w-6 h-6 rounded-full flex items-center justify-center text-[8px] relative z-20 transition-all duration-700">
                                <font-awesome-icon icon="fa-solid fa-check" v-if="isStepComplete(order.status, step)" />
                              </div>
                              <span
                                class="mt-4 text-[7px] font-bold uppercase tracking-widest text-stone-400 text-center">{{
                                  step }}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                        <div v-if="order.status === 'Shipped'"
                          class="mt-10 p-6 bg-[var(--primary-gold)]/5 border border-[var(--primary-gold)]/20">
                          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                            <p class="text-[9px] font-bold text-[var(--primary-gold)] uppercase tracking-[0.2em] leading-relaxed max-w-lg">
                              DESIGNER'S NOTE: Your package is currently in transit with {{ order.carrier || 'BoutiqueCourier' }}. Arrival expected within 3-5 business days.
                            </p>
                            <button @click="order.showMap = !order.showMap" 
                              class="text-[8px] font-black uppercase tracking-[0.4em] px-6 py-3 border border-[var(--primary-gold)] text-[var(--primary-gold)] hover:bg-[var(--primary-gold)] hover:text-black transition-all">
                              {{ order.showMap ? 'Hide Logistic Map' : 'View Logistic Map' }}
                            </button>
                          </div>

                          <transition name="fade">
                            <div v-if="order.showMap" class="mt-8 h-64 w-full border border-[var(--primary-gold)]/20 transition-all duration-1000">
                              <iframe
                                width="100%"
                                height="100%"
                                frameborder="0" style="border:0"
                                :src="getGoogleMapUrl(order.city)"
                                allowfullscreen>
                              </iframe>
                            </div>
                          </transition>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import Fugible from "../assets/fugibles.png"
import CartComponent from './Cart.vue'
import FavoritesComponent from './Favorites.vue'
import { useOrdersStore } from '../stores/orders'
import { onMounted } from 'vue'

const router = useRouter()
const auth = useAuthStore()
const orderStore = useOrdersStore()

const currentTab = ref('cart')
const isMobileMenuOpen = ref(false)

watch(isMobileMenuOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

const navLinks = [
  { id: 'cart', name: 'My Basket', icon: ['fas', 'cart-shopping'] },
  { id: 'favorites', name: 'My Favorites', icon: ['fas', 'heart'] },
  { id: 'orders', name: 'Order Logs', icon: ['fas', 'truck-fast'] }
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
})

const getStatusProgress = (status) => {
  const s = status?.toLowerCase()
  if (s === 'pending') return 10
  if (s === 'processing') return 30
  if (s === 'shipped') return 60
  if (s === 'delivered') return 100
  if (s === 'cancelled') return 0
  return 0
}

const isStepComplete = (currentStatus, step) => {
  const steps = ['Processing', 'Shipped', 'Delivered']
  return steps.indexOf(currentStatus) >= steps.indexOf(step)
}

const currentTabTitleParts = computed(() => {
  const name = navLinks.find(l => l.id === currentTab.value)?.name || 'Dashboard'
  const parts = name.split(' ')
  return {
    main: parts[0],
    accent: parts[1] || ''
  }
})

const userInitial = computed(() => {
  return auth.user?.name?.charAt(0) || 'F'
})

const handleLogout = () => {
  auth.logout()
  router.push('/login')
}
</script>

<style scoped>
.dashboard-card {
  animation: card-reveal 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

@keyframes card-reveal {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

/* Remove any injected padding/bg from subcomponents to maintain dashboard integrity */
:deep(.min-h-screen) {
  min-height: auto !important;
  padding: 0 !important;
  background: transparent !important;
}

:deep(h2) {
  display: none !important;
  /* Hide redundant titles in dashboard view */
}

:deep(.py-20) {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
</style>
