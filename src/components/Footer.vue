<template>
  <footer class="luxury-footer bg-white dark:bg-[#0A0A0A] border-t border-black/5 dark:border-white/5 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6">
      
      <!-- Unified Footer Row (Newsletter + Brand + Links all in one grid) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-black/5 dark:border-white/5">
        
        <!-- Column 1: Brand Info -->
        <div class="lg:col-span-2 space-y-6">
          <div class="flex flex-col cursor-pointer" @click="$router.push('/')">
            <img :src="ahmadlogo" alt="Ahmad Cloth House" class="w-24 h-24 object-contain -ml-4" width="96" height="96" />
          </div>
          <p class="text-stone-500 dark:text-stone-400 text-xs leading-relaxed max-w-sm">
            Crafting the finest artisanal apparel and luxury couture with passion and heritage. Discover timeless Pakistani bridal wear and unstitched collections.
          </p>
          <div class="flex gap-4">
            <a href="https://www.instagram.com/ahmadclothfabrics_aroma/" target="_blank" rel="noopener" aria-label="Instagram" class="w-9 h-9 rounded-full border border-stone-200 dark:border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:border-transparent hover:bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] transition-all duration-300 group">
              <font-awesome-icon :icon="['fab', 'instagram']" class="text-sm group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573629329844" target="_blank" rel="noopener" aria-label="Facebook" class="w-9 h-9 rounded-full border border-stone-200 dark:border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:border-blue-600 hover:bg-blue-600 transition-all duration-300 group">
              <font-awesome-icon :icon="['fab', 'facebook-f']" class="text-sm group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.youtube.com/@ahmadfabrics_aroma" target="_blank" rel="noopener" aria-label="YouTube" class="w-9 h-9 rounded-full border border-stone-200 dark:border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:border-red-600 hover:bg-red-600 transition-all duration-300 group">
              <font-awesome-icon :icon="['fab', 'youtube']" class="text-sm group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.tiktok.com/@theahmadfabrices_aroma" target="_blank" rel="noopener" aria-label="TikTok" class="w-9 h-9 rounded-full border border-stone-200 dark:border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:border-black hover:bg-black transition-all duration-300 group">
              <font-awesome-icon :icon="['fab', 'tiktok']" class="text-sm group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <!-- Column 2: SHOP Links -->
        <div class="space-y-5">
          <h3 class="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-900 dark:text-white">SHOP</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.SHOP" :key="link.name">
              <router-link :to="link.path" class="text-stone-500 dark:text-stone-400 text-xs hover:text-[#c9973a] transition-colors">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Column 3: INFORMATION Links -->
        <div class="space-y-5">
          <h3 class="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-900 dark:text-white">INFORMATION</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.INFORMATION" :key="link.name">
              <router-link :to="link.path" class="text-stone-500 dark:text-stone-400 text-xs hover:text-[#c9973a] transition-colors">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Column 4: Newsletter Subscription -->
        <div class="space-y-5 lg:col-span-1">
          <h3 class="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c9973a]">COUTURE CIRCLE</h3>
          <p class="text-stone-500 dark:text-stone-400 text-xs leading-relaxed">
            Subscribe for seasonal updates and design launches.
          </p>
          <div class="space-y-2">
            <input 
              v-model="email"
              type="email" 
              placeholder="Your email address" 
              class="w-full bg-stone-50 dark:bg-white/5 border border-stone-200 dark:border-white/10 px-4 py-3 text-xs outline-none focus:border-[#c9973a] transition-colors rounded-sm"
            />
            <button 
              @click="handleJoin"
              :disabled="status.loading"
              class="w-full bg-[#1a1a1a] dark:bg-white text-white dark:text-black py-3 text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-[#c9973a] dark:hover:bg-[#c9973a] dark:hover:text-white transition-colors duration-300"
            >
              <span v-if="!status.loading">SUBSCRIBE</span>
              <span v-else class="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full"></span>
            </button>
          </div>
          <p v-if="status.message" :class="status.success ? 'text-green-600' : 'text-rose-600'" class="text-[9px] mt-2 font-semibold tracking-wider uppercase">
            {{ status.message }}
          </p>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex flex-col items-center md:items-start gap-2">
          <p class="text-[9px] text-stone-400 tracking-widest uppercase">
            © 2026 AHMADCLOTHESHOUSE. ALL RIGHTS RESERVED.
          </p>
          <p class="text-[8px] text-[#c9973a] tracking-[0.4em] uppercase font-bold flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-green-600"></span> 
            Crafted in Lahore, Pakistan
          </p>
        </div>
        <div class="flex gap-6">
          <font-awesome-icon :icon="['fab', 'cc-visa']" class="text-stone-300 dark:text-stone-700 text-xl" />
          <font-awesome-icon :icon="['fab', 'cc-mastercard']" class="text-stone-300 dark:text-stone-700 text-xl" />
          <font-awesome-icon :icon="['fab', 'cc-apple-pay']" class="text-stone-300 dark:text-stone-700 text-xl" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import ahmadlogo from '../assets/fugibles.png'

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
