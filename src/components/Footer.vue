<template>
  <footer class="luxury-footer bg-white dark:bg-[#0A0A0A] border-t border-black/5 dark:border-white/5 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6">
      
      <!-- Newsletter Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16 border-b border-black/5 dark:border-white/5">
        <div class="newsletter-text">
          <p class="text-[10px] tracking-[0.3em] font-bold text-[var(--primary-gold)] uppercase mb-3">EXCLUSIVE ACCESS</p>
          <h2 class="text-3xl md:text-4xl font-playfair font-bold text-[var(--luxury-black)] dark:text-white mb-4">
            JOIN THE <span class="text-[var(--deep-burgundy)]">COUTURE CIRCLE</span>
          </h2>
          <p class="text-gray-500 dark:text-gray-400 text-sm max-w-md">
            Be the first to know about new seasonal collections and exclusive design launches.
          </p>
        </div>

        <div class="newsletter-form">
          <div class="flex gap-2">
            <input 
              v-model="email"
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              class="flex-1 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-6 py-4 text-xs tracking-widest outline-none focus:border-[var(--primary-gold)] transition-colors"
            />
            <button 
              @click="handleJoin"
              :disabled="status.loading"
              class="bg-[var(--luxury-black)] dark:bg-white text-white dark:text-black px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[var(--deep-burgundy)] dark:hover:bg-[var(--primary-gold)] transition-colors disabled:opacity-50"
            >
              <span v-if="!status.loading">SUBSCRIBE</span>
              <span v-else class="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full"></span>
            </button>
          </div>
          <p v-if="status.message" :class="status.success ? 'text-green-600' : 'text-rose-600'" class="text-[10px] mt-3 font-bold tracking-wider">
            {{ status.message }}
          </p>
        </div>
      </div>

      <!-- Main Footer Links -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
        <!-- Brand Info -->
        <div class="space-y-6">
          <div class="flex flex-col cursor-pointer" @click="$router.push('/')">
            <img :src="ahmadlogo" alt="Ahmad Cloth House" class="w-32 h-32 object-contain -ml-4" />
          </div>
          <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
            Crafting the finest artisanal apparel and luxury couture with passion and heritage.
          </p>
          <div class="flex gap-4">
            <a href="https://www.instagram.com/ahmadclothfabrics_aroma/" target="_blank" class="w-8 h-8 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-[var(--deep-burgundy)] hover:border-[var(--deep-burgundy)] transition-all">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573629329844" target="_blank" class="w-8 h-8 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-[var(--deep-burgundy)] hover:border-[var(--deep-burgundy)] transition-all">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </a>
          </div>
        </div>

        <!-- Links -->
        <div v-for="(group, title) in footerLinks" :key="title" class="space-y-6">
          <h3 class="text-xs font-bold tracking-[0.2em] uppercase text-[var(--luxury-black)] dark:text-white">{{ title }}</h3>
          <ul class="space-y-3">
            <li v-for="link in group" :key="link.name">
              <router-link :to="link.path" class="text-gray-500 dark:text-gray-400 text-xs hover:text-[var(--deep-burgundy)] transition-colors">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-[10px] text-gray-400 tracking-widest uppercase">
          © 2026 AHMADCLOTHESHOUSE. ALL RIGHTS RESERVED.
        </p>
        <div class="flex gap-6">
          <font-awesome-icon :icon="['fab', 'cc-visa']" class="text-gray-300 text-xl" />
          <font-awesome-icon :icon="['fab', 'cc-mastercard']" class="text-gray-300 text-xl" />
          <font-awesome-icon :icon="['fab', 'cc-apple-pay']" class="text-gray-300 text-xl" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import ahmadlogo from '../assets/fugibles.png'
const Fugible = "https://loremflickr.com/200/80/fashion,logo?lock=1"

const email = ref('')
const status = ref({
  loading: false,
  message: '',
  success: false
})

const footerLinks = {
  'SHOP': [
    { name: 'New Arrivals', path: '/shop' },
    { name: 'Unstitched', path: '/shop/Unstitched' },
    { name: 'Ready To Wear', path: '/shop/Pret' },
    { name: 'Bridal Couture', path: '/shop/Bridal' }
  ],
  'INFORMATION': [
    { name: 'Our Story', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Fashion Blog', path: '/blog' },
    { name: 'Shipping Policy', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Cookies Policy', path: '/cookies' }
  ],
  'SUPPORT': [
    { name: 'Order Tracking', path: '/dashboard' },
    { name: 'Size Guide', path: '/terms' },
    { name: 'Returns & Exchange', path: '/terms' },
    { name: 'FAQ', path: '/about' }
  ]
}

const handleJoin = async () => {
  if (!email.value) return
  status.value.loading = true
  // Mock API call
  setTimeout(() => {
    status.value.loading = false
    status.value.message = 'WELCOME TO THE HOUSE OF COUTURE'
    status.value.success = true
    email.value = ''
  }, 1500)
}
</script>

<style scoped>
.luxury-footer {
  font-family: 'Inter', sans-serif;
}
</style>
