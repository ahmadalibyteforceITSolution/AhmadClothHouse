<template>
  <transition name="detail-slide">
    <div v-if="order"
      class="mt-6 bg-white dark:bg-[#0a0a0a] border border-[var(--primary-gold)]/20 rounded-2xl overflow-hidden shadow-[0_30px_80px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.6)] relative">

      <!-- Gold accent top bar -->
      <div class="h-[3px] w-full bg-gradient-to-r from-transparent via-[var(--primary-gold)] to-transparent"></div>

      <!-- Header -->
      <div class="px-8 sm:px-12 pt-10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div class="flex items-center gap-3 mb-3">
            <div class="h-[1px] w-8 bg-[var(--primary-gold)]"></div>
            <span class="text-[var(--primary-gold)] font-bold text-[8px] uppercase tracking-[0.5em]">ORDER DOSSIER</span>
          </div>
          <h3 class="text-xl sm:text-2xl font-light uppercase tracking-tighter text-gray-900 dark:text-white font-playfair italic">
            Order <span class="text-[var(--primary-gold)]">#{{ shortId }}</span>
          </h3>
          <p class="text-[8px] font-bold text-stone-400 uppercase tracking-[0.3em] mt-2">{{ formattedDate }}</p>
        </div>
        <div class="flex items-center gap-4">
          <span :class="statusClass"
            class="px-6 py-3 text-[9px] font-bold uppercase tracking-[0.4em] border rounded-none">
            {{ order.status }}
          </span>
          <button @click="$emit('close')"
            class="w-10 h-10 rounded-full border border-[var(--primary-gold)]/20 flex items-center justify-center text-stone-400 hover:text-[var(--primary-gold)] hover:border-[var(--primary-gold)]/40 transition-all duration-300">
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </button>
        </div>
      </div>

      <!-- Content Grid -->
      <div class="px-8 sm:px-12 pb-12 space-y-10">

        <!-- ORDERED PRODUCTS -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <font-awesome-icon icon="fa-solid fa-bag-shopping" class="text-[var(--primary-gold)]/60 text-xs" />
            <span class="text-[9px] font-bold uppercase tracking-[0.4em] text-[var(--primary-gold)]">ORDERED PRODUCTS</span>
          </div>

          <div class="space-y-4">
            <div v-for="(item, idx) in order.items" :key="idx"
              class="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-[#fafaf8] dark:bg-white/[0.03] rounded-xl border border-[#d4af3711] hover:border-[var(--primary-gold)]/20 transition-all duration-500 group">

              <!-- Product Image -->
              <div class="w-20 h-20 rounded-lg overflow-hidden border border-[#d4af3711] shadow-lg shrink-0 bg-stone-100 dark:bg-stone-900">
                <img v-if="item.image" :src="item.image" :alt="item.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div v-else class="w-full h-full flex items-center justify-center">
                  <font-awesome-icon icon="fa-solid fa-shirt" class="text-2xl text-stone-300 dark:text-stone-700" />
                </div>
              </div>

              <!-- Product Info -->
              <div class="flex-grow grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 w-full items-center">
                <div class="col-span-2">
                  <p class="text-[8px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-1">PRODUCT NAME</p>
                  <p class="text-[12px] font-bold dark:text-white tracking-wide">{{ item.name }}</p>
                </div>
                <div>
                  <p class="text-[8px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-1">SIZE</p>
                  <p class="text-[11px] font-bold text-stone-600 dark:text-stone-400 uppercase">{{ item.size || '—' }}</p>
                </div>
                <div>
                  <p class="text-[8px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-1">COLOR</p>
                  <div class="flex items-center gap-2">
                    <div v-if="item.color" class="w-3 h-3 rounded-full border border-stone-200 dark:border-stone-700" 
                      :style="{ backgroundColor: item.color }"></div>
                    <p class="text-[11px] font-bold text-stone-600 dark:text-stone-400 uppercase">{{ item.color || '—' }}</p>
                  </div>
                </div>
                <div>
                  <p class="text-[8px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-1">QTY × PRICE</p>
                  <p class="text-[11px] font-bold dark:text-white">{{ item.quantity }} × Rs. {{ (item.price || 0).toLocaleString() }}</p>
                </div>
                <div>
                  <p class="text-[8px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-1">LINE TOTAL</p>
                  <p class="text-sm font-light font-playfair italic text-[var(--primary-gold)]">Rs. {{ ((item.price || 0) * (item.quantity || 1)).toLocaleString() }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Product Engagement Stats -->
          <div v-if="hasProductStats" class="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div v-for="(item, idx) in order.items" :key="'stats-'+idx" 
              class="p-4 bg-[#fafaf8] dark:bg-white/[0.03] rounded-lg border border-[#d4af3711]">
              <p class="text-[7px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-1 truncate" :title="item.name">{{ item.name }}</p>
              <div class="flex items-center gap-4 mt-2">
                <div class="flex items-center gap-1.5">
                  <font-awesome-icon icon="fa-solid fa-eye" class="text-[9px] text-blue-400/60" />
                  <span class="text-[10px] font-bold text-blue-400">{{ item.views || 0 }}</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <font-awesome-icon icon="fa-solid fa-cart-shopping" class="text-[9px] text-emerald-400/60" />
                  <span class="text-[10px] font-bold text-emerald-400">{{ item.sales || 0 }}</span>
                </div>
              </div>
              <p class="text-[7px] font-bold text-stone-400 uppercase tracking-widest mt-1">VIEWS / SALES</p>
            </div>
          </div>
        </div>

        <!-- DETAILS GRID: Customer, Shipping, Payment -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

          <!-- Customer Info -->
          <div class="p-8 bg-[#fafaf8] dark:bg-white/[0.03] rounded-xl border border-[#d4af3711]">
            <div class="flex items-center gap-3 mb-6">
              <font-awesome-icon icon="fa-solid fa-user-tie" class="text-[var(--primary-gold)]/60 text-xs" />
              <span class="text-[8px] font-bold uppercase tracking-[0.4em] text-[var(--primary-gold)]">CUSTOMER</span>
            </div>
            <div class="space-y-4">
              <div>
                <p class="text-[7px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-1">FULL NAME</p>
                <p class="text-[12px] font-bold dark:text-white">{{ order.shippingAddress?.fullName || order.user || 'N/A' }}</p>
              </div>
              <div>
                <p class="text-[7px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-1">EMAIL</p>
                <p class="text-[11px] font-bold text-stone-600 dark:text-stone-400">{{ order.userEmail || 'N/A' }}</p>
              </div>
              <div>
                <p class="text-[7px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-1">PHONE</p>
                <p class="text-[11px] font-bold text-stone-600 dark:text-stone-400">{{ order.shippingAddress?.phone || 'N/A' }}</p>
              </div>
            </div>
          </div>

          <!-- Shipping Address -->
          <div class="p-8 bg-[#fafaf8] dark:bg-white/[0.03] rounded-xl border border-[#d4af3711]">
            <div class="flex items-center gap-3 mb-6">
              <font-awesome-icon icon="fa-solid fa-location-dot" class="text-[var(--primary-gold)]/60 text-xs" />
              <span class="text-[8px] font-bold uppercase tracking-[0.4em] text-[var(--primary-gold)]">SHIPPING</span>
            </div>
            <div class="space-y-4">
              <div>
                <p class="text-[7px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-1">ADDRESS</p>
                <p class="text-[11px] font-bold dark:text-white leading-relaxed">{{ order.shippingAddress?.address || 'N/A' }}</p>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p class="text-[7px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-1">CITY</p>
                  <p class="text-[11px] font-bold text-stone-600 dark:text-stone-400">{{ order.shippingAddress?.city || 'N/A' }}</p>
                </div>
                <div>
                  <p class="text-[7px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-1">ZIP CODE</p>
                  <p class="text-[11px] font-bold text-stone-600 dark:text-stone-400">{{ order.shippingAddress?.zipCode || 'N/A' }}</p>
                </div>
              </div>
              <div>
                <p class="text-[7px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-1">COUNTRY</p>
                <p class="text-[11px] font-bold text-stone-600 dark:text-stone-400">{{ order.shippingAddress?.country || 'Pakistan' }}</p>
              </div>
            </div>
          </div>

          <!-- Payment & Financials -->
          <div class="p-8 bg-[#fafaf8] dark:bg-white/[0.03] rounded-xl border border-[#d4af3711]">
            <div class="flex items-center gap-3 mb-6">
              <font-awesome-icon icon="fa-solid fa-credit-card" class="text-[var(--primary-gold)]/60 text-xs" />
              <span class="text-[8px] font-bold uppercase tracking-[0.4em] text-[var(--primary-gold)]">PAYMENT</span>
            </div>
            <div class="space-y-4">
              <div>
                <p class="text-[7px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-1">METHOD</p>
                <span :class="paymentMethodClass" class="px-4 py-2 text-[9px] font-bold uppercase tracking-[0.3em] border rounded-none inline-block">{{ paymentMethodLabel }}</span>
              </div>
              <div>
                <p class="text-[7px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-1">PAYMENT STATUS</p>
                <p class="text-[11px] font-bold" :class="order.paymentStatus === 'Completed' || order.paymentStatus === 'Paid' ? 'text-emerald-500' : 'text-amber-500'">{{ order.paymentStatus || 'Pending' }}</p>
              </div>
              <div v-if="order.transactionId">
                <p class="text-[7px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-1">TRANSACTION ID</p>
                <p class="text-[11px] font-bold text-[var(--primary-gold)] font-mono italic">{{ order.transactionId }}</p>
              </div>
              <div class="pt-4 border-t border-[#d4af3711] space-y-2">
                <div class="flex justify-between text-[10px]">
                  <span class="text-stone-400 font-bold uppercase tracking-widest">Subtotal</span>
                  <span class="font-bold dark:text-white">Rs. {{ (order.subtotal || 0).toLocaleString() }}</span>
                </div>
                <div class="flex justify-between text-[10px]">
                  <span class="text-stone-400 font-bold uppercase tracking-widest">Delivery</span>
                  <span class="font-bold dark:text-white">Rs. {{ (order.deliveryCharge || 0).toLocaleString() }}</span>
                </div>
                <div class="flex justify-between text-[12px] pt-2 border-t border-[#d4af3711]">
                  <span class="text-[var(--primary-gold)] font-bold uppercase tracking-widest">Total</span>
                  <span class="font-light font-playfair italic text-lg text-[var(--primary-gold)]">Rs. {{ (order.amount || 0).toLocaleString() }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tracking Info -->
        <div v-if="order.trackingNumber || order.carrier" class="p-6 bg-black rounded-xl border border-[var(--primary-gold)]/10 flex flex-wrap items-center gap-8">
          <div class="flex items-center gap-3">
            <font-awesome-icon icon="fa-solid fa-truck-fast" class="text-[var(--primary-gold)] text-lg" />
            <span class="text-[9px] font-bold uppercase tracking-[0.4em] text-[var(--primary-gold)]">SHIPMENT TRACKING</span>
          </div>
          <div>
            <p class="text-[7px] font-bold text-white/30 uppercase tracking-widest mb-1">CARRIER</p>
            <p class="text-[11px] font-bold text-white">{{ order.carrier || 'Not Assigned' }}</p>
          </div>
          <div>
            <p class="text-[7px] font-bold text-white/30 uppercase tracking-widest mb-1">TRACKING NUMBER</p>
            <p class="text-[11px] font-bold text-[var(--primary-gold)] font-mono italic">{{ order.trackingNumber || 'PENDING_DISPATCH' }}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  order: {
    type: Object,
    default: null
  }
})

defineEmits(['close'])

const shortId = computed(() => {
  const id = props.order?.id || ''
  return id.length > 8 ? '...' + id.slice(-8) : id
})

const formattedDate = computed(() => {
  if (!props.order?.createdAt) return 'N/A'
  return new Date(props.order.createdAt).toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  }).toUpperCase()
})

const statusClass = computed(() => {
  const s = props.order?.status
  if (s === 'Delivered' || s === 'Completed') return 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5'
  if (s === 'Cancelled') return 'text-red-500 border-red-500/20 bg-red-500/5'
  if (s === 'Shipped') return 'text-blue-500 border-blue-500/20 bg-blue-500/5'
  return 'text-[var(--primary-gold)] border-[var(--primary-gold)]/20 bg-[var(--primary-gold)]/5'
})

const paymentMethodLabel = computed(() => {
  const m = props.order?.paymentMethod
  if (m === 'cod') return 'Cash on Delivery'
  if (m === 'easypaisa') return 'EasyPaisa'
  if (m === 'jazzcash') return 'JazzCash'
  return m || 'N/A'
})

const paymentMethodClass = computed(() => {
  const m = props.order?.paymentMethod
  if (m === 'easypaisa') return 'text-green-500 border-green-500/20 bg-green-500/5'
  if (m === 'jazzcash') return 'text-red-500 border-red-500/20 bg-red-500/5'
  return 'text-amber-600 border-amber-600/20 bg-amber-600/5'
})

const hasProductStats = computed(() => {
  return props.order?.items?.some(item => item.views > 0 || item.sales > 0)
})
</script>

<style scoped>
.detail-slide-enter-active {
  animation: detail-open 0.6s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}
.detail-slide-leave-active {
  animation: detail-open 0.4s cubic-bezier(0.19, 1, 0.22, 1) reverse forwards;
}
@keyframes detail-open {
  from {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    max-height: 2000px;
    transform: translateY(0);
  }
}
</style>
