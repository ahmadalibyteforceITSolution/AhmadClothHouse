<template>
  <div class="min-h-screen bg-[#FDFBF7] dark:bg-[#050505] transition-colors duration-700 pb-32 font-sans">
    
    <!-- LUXURY HEADER -->
    <header class="w-full py-12 px-8 border-b border-stone-200 dark:border-stone-800 flex flex-col items-center gap-2 mb-16 transition-colors bg-white dark:bg-[#0A0A0A] sticky top-0 z-[100] backdrop-blur-xl bg-opacity-90">
       <div class="flex items-center gap-6 mb-2">
          <div class="h-[1px] w-8 bg-[var(--primary-gold)] opacity-40"></div>
          <h1 class="text-3xl font-playfair tracking-[0.4em] font-light text-[var(--luxury-black)] dark:text-white uppercase cursor-pointer" @click="router.push('/')">AHMADCLOTHS HOUSE</h1>
          <div class="h-[1px] w-8 bg-[var(--primary-gold)] opacity-40"></div>
       </div>
       <span class="text-[8px] tracking-[0.6em] text-[var(--primary-gold)] uppercase font-bold opacity-80 italic">Order Tracking & Logistics</span>
    </header>

    <div class="max-w-4xl mx-auto px-6">
      <!-- Search Section -->
      <section class="bg-white dark:bg-[#0A0A0A] p-10 md:p-16 border border-stone-100 dark:border-stone-900 shadow-sm space-y-12 mb-12 animate-reveal">
        <div class="text-center space-y-4">
          <h2 class="text-4xl font-playfair italic text-[var(--luxury-black)] dark:text-white">Locate Your Couture</h2>
          <p class="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400">Enter your signature order identification</p>
        </div>

        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-grow relative">
            <input v-model="orderIdInput" type="text" placeholder="ORDER ID (e.g. 65ec...)" 
              class="mariab-input w-full text-center tracking-[0.3em]" @keyup.enter="handleTrack">
          </div>
          <button @click="handleTrack" :disabled="loading"
            class="px-12 py-5 bg-[var(--luxury-black)] dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[var(--deep-burgundy)] dark:hover:bg-[var(--primary-gold)] transition-all disabled:opacity-50">
            {{ loading ? 'VERIFYING...' : 'TRACK' }}
          </button>
        </div>
      </section>

      <!-- Results Section -->
      <transition name="slide-up">
        <div v-if="order" class="space-y-8 animate-reveal">
          <!-- Status Grid -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div v-for="step in steps" :key="step.label" 
              class="p-6 border transition-all duration-700 flex flex-col items-center gap-3"
              :class="isStepReached(step.label) ? 'border-[var(--primary-gold)] bg-[var(--primary-gold)]/5' : 'border-stone-100 dark:border-stone-900 opacity-30'">
              <font-awesome-icon :icon="step.icon" class="text-xl" :class="isStepReached(step.label) ? 'text-[var(--primary-gold)]' : 'text-stone-300'" />
              <span class="text-[8px] font-bold uppercase tracking-widest">{{ step.label }}</span>
            </div>
          </div>

          <!-- Tracking Details & Map -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Details -->
            <div class="bg-white dark:bg-[#0A0A0A] border border-stone-100 dark:border-stone-900 p-10 space-y-8">
              <div class="space-y-2 border-b border-stone-50 dark:border-stone-900 pb-6">
                <p class="text-[8px] font-black text-[var(--primary-gold)] uppercase tracking-[0.3em]">Consignment Details</p>
                <h3 class="text-xl font-playfair italic text-[var(--luxury-black)] dark:text-white">Order #{{ order._id.substring(0, 8) }}</h3>
              </div>

              <div class="space-y-6">
                <div class="flex justify-between items-center group">
                  <span class="text-[9px] font-bold text-stone-400 uppercase tracking-widest">Courier Partner</span>
                  <span class="text-[10px] font-black text-[var(--luxury-black)] dark:text-white uppercase">{{ order.tracking?.carrier || 'Manual Dispatch' }}</span>
                </div>
                <div class="flex justify-between items-center group">
                  <span class="text-[9px] font-bold text-stone-400 uppercase tracking-widest">Tracking Reference</span>
                  <span class="text-[10px] font-black text-[var(--primary-gold)] uppercase">{{ order.tracking?.trackingNumber || 'PENDING' }}</span>
                </div>
                <div class="flex justify-between items-center group">
                  <span class="text-[9px] font-bold text-stone-400 uppercase tracking-widest">Current Status</span>
                  <span class="px-3 py-1 bg-stone-100 dark:bg-stone-900 text-[8px] font-black uppercase tracking-widest">{{ order.status }}</span>
                </div>
              </div>

              <div class="pt-8 border-t border-stone-50 dark:border-stone-900">
                <p class="text-[8px] text-stone-400 leading-loose italic uppercase tracking-widest">
                  Estimated Arrival: {{ order.tracking?.estimatedDelivery ? new Date(order.tracking.estimatedDelivery).toLocaleDateString() : 'Verifying with Logistic Partner...' }}
                </p>
              </div>
            </div>

            <!-- Google Map Integration -->
            <div class="h-full min-h-[300px] border border-stone-100 dark:border-stone-900 relative group overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
              <iframe
                width="100%"
                height="100%"
                frameborder="0" style="border:0"
                :src="googleMapUrl"
                allowfullscreen>
              </iframe>
              <div class="absolute top-4 left-4 bg-black/80 text-white text-[7px] font-bold uppercase tracking-[0.4em] px-4 py-2 border border-[var(--primary-gold)]/20">
                Live Logistic Surveillance
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- Empty State -->
      <div v-if="!order && searched" class="text-center py-20 animate-reveal">
        <font-awesome-icon icon="fa-solid fa-box-open" class="text-4xl text-stone-200 mb-6" />
        <p class="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400">Order ID not found in our archives.</p>
        <p class="text-[8px] mt-2 text-stone-300 italic uppercase">Please verify your ID or contact concierge</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import api from '../api'
import Swal from 'sweetalert2'

const router = useRouter()
const orderIdInput = ref('')
const order = ref(null)
const loading = ref(false)
const searched = ref(false)

const steps = [
  { label: 'Pending', icon: 'fa-solid fa-clock' },
  { label: 'Processing', icon: 'fa-solid fa-scissors' },
  { label: 'Shipped', icon: 'fa-solid fa-truck-fast' },
  { label: 'Delivered', icon: 'fa-solid fa-house-circle-check' }
]

const isStepReached = (status) => {
  const statusMap = {
    'Pending': 0,
    'Processing': 1,
    'Shipped': 2,
    'Delivered': 3,
    'Cancelled': -1
  }
  const currentLevel = statusMap[order.value?.status] || 0
  const stepLevel = statusMap[status]
  return currentLevel >= stepLevel
}

const handleTrack = async () => {
  if (!orderIdInput.value.trim()) return
  
  loading.value = true
  searched.value = true
  try {
    const res = await api.get(`/orders/${orderIdInput.value.trim()}`)
    if (res.data.success) {
      order.value = res.data.data
    } else {
      order.value = null
    }
  } catch (err) {
    console.error("TRACK_ERROR:", err)
    order.value = null
  } finally {
    loading.value = false
  }
}

const googleMapUrl = computed(() => {
  const city = order.value?.shippingAddress?.city || 'Lahore'
  const query = `${city}, Pakistan`
  return `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''}&q=${encodeURIComponent(query)}&zoom=12`
})
</script>

<style scoped>
.mariab-input {
   background: transparent;
   border: none;
   border-bottom: 1px solid rgba(0, 0, 0, 0.05);
   padding: 18px 0;
   font-size: 13px;
   font-weight: 500;
   letter-spacing: 0.1em;
   outline: none;
   transition: all 0.5s ease;
   color: #1a1a1a;
}

.dark .mariab-input {
   color: white;
   border-bottom-color: rgba(255, 255, 255, 0.1);
}

.mariab-input:focus {
   border-bottom-color: var(--primary-gold);
   padding-left: 12px;
}

.animate-reveal {
  animation: reveal 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

@keyframes reveal {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.slide-up-enter-active {
  transition: all 0.6s ease-out;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(40px);
}

.luxury-scroll::-webkit-scrollbar {
  width: 2px;
}
.luxury-scroll::-webkit-scrollbar-thumb {
  background: var(--primary-gold);
}
</style>
