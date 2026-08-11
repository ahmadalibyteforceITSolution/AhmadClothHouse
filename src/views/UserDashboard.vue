<template>
  <div class="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-300 font-sans relative overflow-x-hidden">
    
    <!-- SIDEBAR (Desktop) -->
    <aside 
      :class="isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'"
      class="fixed left-0 top-0 h-screen w-72 bg-white dark:bg-[#111111] border-r border-[#E5E7EB] dark:border-white/10 p-8 flex flex-col z-[150] transition-transform duration-300 ease-in-out"
    >
      <!-- Brand Header -->
      <div class="mb-12 flex flex-col gap-1 cursor-pointer" @click="router.push('/')">
        <h1 class="text-lg font-bold tracking-tight text-[#111] dark:text-white uppercase">AHMAD CLOTH HOUSE</h1>
        <p class="text-[10px] text-stone-400 uppercase font-semibold">Customer Portal</p>
      </div>

      <!-- Nav Links -->
      <nav class="flex flex-col gap-1">
        <button 
          v-for="link in navLinks" 
          :key="link.id" 
          @click="currentTab = link.id; isMobileMenuOpen = false"
          :class="currentTab === link.id
            ? 'text-[#111] dark:text-white bg-stone-100 dark:bg-white/10 font-bold'
            : 'text-stone-500 hover:text-[#111] dark:hover:text-white font-medium'"
          class="flex items-center gap-4 px-4 py-3 rounded-md text-xs tracking-wide transition-all text-left"
        >
          <font-awesome-icon :icon="link.icon" class="text-sm w-4" />
          <span>{{ link.name }}</span>
        </button>
      </nav>

      <!-- Footer / Logout -->
      <div class="mt-auto pt-6 border-t border-stone-200 dark:border-white/10 flex flex-col gap-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-stone-100 dark:bg-white/10 text-stone-800 dark:text-white flex items-center justify-center font-bold text-xs">
            {{ userInitial }}
          </div>
          <div class="flex flex-col min-w-0">
            <span class="text-xs font-bold text-[#111] dark:text-white truncate">{{ auth.user?.name || 'Guest User' }}</span>
            <span class="text-[10px] text-stone-400 truncate">{{ auth.user?.email || 'Logged In' }}</span>
          </div>
        </div>

        <button 
          @click="handleLogout"
          class="flex items-center gap-2 text-xs font-semibold text-red-500 hover:text-red-600 transition-colors"
        >
          <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>

    <!-- Mobile Backdrop -->
    <div v-if="isMobileMenuOpen" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[140] lg:hidden" @click="isMobileMenuOpen = false"></div>

    <!-- MAIN AREA -->
    <div class="flex-grow flex flex-col lg:ml-72">
      <!-- Mobile Header -->
      <header class="lg:hidden bg-white dark:bg-[#111] border-b border-[#E5E7EB] dark:border-white/10 px-6 py-4 flex justify-between items-center z-[110] sticky top-0">
        <button @click="isMobileMenuOpen = true" class="text-[#111] dark:text-white">
          <font-awesome-icon icon="fa-solid fa-bars" class="text-base" />
        </button>
        <div class="text-sm font-bold text-[#111] dark:text-white uppercase">My Account</div>
        <div class="w-7 h-7 rounded-full bg-stone-100 dark:bg-white/10 text-stone-800 dark:text-white flex items-center justify-center text-[10px] font-bold">{{ userInitial }}</div>
      </header>

      <!-- Main Body -->
      <main class="flex-grow p-6 lg:p-12">
        <div class="max-w-5xl mx-auto">
          
          <header class="mb-8">
            <h2 class="text-2xl font-bold text-[#111] dark:text-white capitalize">
              {{ currentTabName }}
            </h2>
          </header>

          <transition name="fade" mode="out-in">
            <div :key="currentTab">
              
              <!-- CART TAB -->
              <div v-if="currentTab === 'cart'">
                <CartComponent class="!p-0 !bg-transparent !min-h-0" />
              </div>

              <!-- FAVORITES TAB -->
              <div v-else-if="currentTab === 'favorites'">
                <FavoritesComponent class="!p-0 !bg-transparent !min-h-0" />
              </div>

              <!-- ORDERS TAB -->
              <div v-else-if="currentTab === 'orders'" class="space-y-6">
                <div v-if="orders.length === 0" class="py-16 text-center bg-white dark:bg-[#111] border border-[#E5E7EB] dark:border-white/10 rounded-md">
                  <font-awesome-icon icon="fa-solid fa-box-open" class="text-3xl text-stone-300 mb-3" />
                  <h3 class="text-base font-bold text-[#111] dark:text-white mb-1">No Orders Yet</h3>
                  <p class="text-xs text-stone-500 mb-6">When you place an order, it will appear here with live tracking updates.</p>
                  <router-link to="/shop" class="btn-shopify">
                    Explore Shop
                  </router-link>
                </div>

                <div v-else class="space-y-4">
                  <div 
                    v-for="order in orders" 
                    :key="order.id" 
                    class="bg-white dark:bg-[#111] border border-[#E5E7EB] dark:border-white/10 rounded-md p-6 shadow-sm space-y-4"
                  >
                    <div class="flex flex-col sm:flex-row justify-between sm:items-center pb-4 border-b border-stone-100 dark:border-white/5 gap-2">
                      <div>
                        <span class="text-[10px] font-bold text-stone-400 uppercase">Order ID</span>
                        <h3 class="text-sm font-mono font-bold text-[#111] dark:text-white">#{{ order.id ? order.id.slice(-8).toUpperCase() : 'UNKNOWN' }}</h3>
                      </div>
                      <div class="text-right">
                        <span class="px-2.5 py-1 text-[10px] font-bold rounded uppercase bg-stone-100 dark:bg-white/10 text-[#111] dark:text-white">
                          {{ order.status }}
                        </span>
                      </div>
                    </div>

                    <!-- Progress Bar -->
                    <div class="space-y-2">
                      <div class="flex justify-between text-[11px] font-medium text-stone-500">
                        <span>Status: <strong class="text-[#111] dark:text-white">{{ order.status }}</strong></span>
                        <span>Total: <strong class="text-[#111] dark:text-white">Rs. {{ order.amount.toLocaleString() }}</strong></span>
                      </div>
                      <div class="w-full h-1.5 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
                        <div class="h-full bg-amber-600 transition-all duration-500" :style="{ width: getStatusProgress(order.status) + '%' }"></div>
                      </div>
                    </div>

                    <div v-if="order.trackingNumber" class="pt-2 flex justify-between items-center text-xs">
                      <span class="text-stone-400">Tracking Code: <strong class="font-mono text-amber-600">{{ order.trackingNumber }}</strong></span>
                      <router-link :to="'/track-order?id=' + order.id" class="text-xs font-bold text-[#111] dark:text-white underline">
                        View Details →
                      </router-link>
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
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useOrdersStore } from '../stores/orders'
import CartComponent from './Cart.vue'
import FavoritesComponent from './Favorites.vue'

const router = useRouter()
const auth = useAuthStore()
const orderStore = useOrdersStore()

const currentTab = ref('orders')
const isMobileMenuOpen = ref(false)

const navLinks = [
  { id: 'orders', name: 'Order History', icon: 'fa-solid fa-box' },
  { id: 'cart', name: 'Shopping Cart', icon: 'fa-solid fa-cart-shopping' },
  { id: 'favorites', name: 'Wishlist', icon: 'fa-solid fa-heart' }
]

const currentTabName = computed(() => {
  const match = navLinks.find(l => l.id === currentTab.value)
  return match ? match.name : 'Account'
})

const userInitial = computed(() => {
  if (auth.user?.name) return auth.user.name.charAt(0).toUpperCase()
  return 'U'
})

const orders = computed(() => {
  return orderStore.orders.map(o => ({
    id: o._id || o.id,
    status: o.status || 'Pending',
    amount: o.totalAmount || 0,
    trackingNumber: o.tracking?.trackingNumber || '',
    carrier: o.tracking?.carrier || '',
    city: o.shippingAddress?.city || 'Lahore'
  }))
})

const getStatusProgress = (status) => {
  const s = status ? status.toLowerCase() : ''
  if (s.includes('deliver')) return 100
  if (s.includes('ship')) return 75
  if (s.includes('process')) return 40
  return 15
}

const handleLogout = () => {
  auth.logout()
  router.push('/login')
}

onMounted(() => {
  orderStore.fetchOrders()
})
</script>
