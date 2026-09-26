<template>

  <div class="min-h-screen relative bg-[#050505] bg-damask">
    <!-- Global Premium Loader -->
    <transition name="fade">
      <div v-if="loading.isLoading"
        class="fixed inset-0 z-[100000] flex items-center justify-center bg-[var(--luxury-cream)] selection:bg-none pointer-events-none">
        <div class="flex flex-col items-center gap-10">

          <!-- Logo Animation -->
          <div class="relative w-40 h-40 flex items-center justify-center group">
            <div class="absolute inset-0 rounded-full border border-[var(--primary-gold)]/10 animate-ping"></div>
            <div class="absolute -inset-10 rounded-full border border-[var(--primary-gold)]/5 animate-pulse-slow"></div>

            <h1
              class="text-3xl font-playfair tracking-[0.3em] font-light text-[var(--luxury-black)] animate-float uppercase">
              AHMAD CLOTHES HOUSE</h1>
          </div>

          <!-- Text -->
          <div class="flex flex-col items-center gap-2">
            <p class="text-[10px] uppercase font-bold tracking-[0.6em] text-[var(--luxury-black)] italic">
              Luxury Unstitched Couture
            </p>
            <div class="w-32 h-[1px] bg-gradient-to-r from-transparent via-[var(--primary-gold)]/30 to-transparent">
            </div>
          </div>

        </div>
      </div>
    </transition>

    <DailySEOAds v-if="showHeaderFooter" />
    <Header v-if="showHeaderFooter" />

    <!-- Global Ahmadcloths Panel & Overlay -->
    <div v-if="route.name === 'home'">
      <!-- Dim Overlay -->
      <div class="lux-overlay" :class="{ active: isPanelOpen }" @click.stop="closeAhmadMenu"></div>

      <!-- Boutique Splash Panel -->
      <div class="boutique-panel" :class="{ open: isPanelOpen }" @click.stop>
        <div class="panel-content w-full max-w-6xl px-6 sm:px-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <!-- Left: Brand Story -->
            <div class="space-y-8 animate-reveal">
              <div class="space-y-4">
                <span class="text-[10px] font-black text-[var(--primary-gold)] uppercase tracking-[0.5em]">The Legacy</span>
                <h2 class="text-4xl sm:text-6xl font-playfair text-white leading-tight">Couture for the Modern Era</h2>
                <div class="w-20 h-[1px] bg-[var(--primary-gold)]"></div>
              </div>
              <p class="text-sm text-stone-400 font-light leading-relaxed max-w-md">
                Ahmad Clothes House stands as a beacon of luxury in Pakistan's fashion landscape. 
                Our artisanal unstitched fabrics and bridal couture celebrate centuries of heritage 
                reimagined for the contemporary woman.
              </p>
              <div class="flex items-center gap-8 pt-4">
                <div class="text-center">
                  <p class="text-2xl font-playfair text-white">20+</p>
                  <p class="text-[8px] text-stone-500 uppercase tracking-widest mt-1">Years Heritage</p>
                </div>
                <div class="text-center">
                  <p class="text-2xl font-playfair text-white">100%</p>
                  <p class="text-[8px] text-stone-500 uppercase tracking-widest mt-1">Handcrafted</p>
                </div>
                <div class="text-center">
                  <p class="text-2xl font-playfair text-white">Global</p>
                  <p class="text-[8px] text-stone-500 uppercase tracking-widest mt-1">Shipping</p>
                </div>
              </div>
            </div>

            <!-- Right: Navigation Grid -->
            <div class="grid grid-cols-2 gap-x-12 gap-y-10 animate-reveal" style="animation-delay: 0.2s;">
              <div class="space-y-6">
                <h4 class="text-[11px] font-black text-white uppercase tracking-[0.3em] border-b border-white/10 pb-4">Collections</h4>
                <ul class="space-y-4">
                  <li><router-link to="/shop/Unstitched" @click="closeAhmadMenu" class="menu-item-link block">Unstitched</router-link></li>
                  <li><router-link to="/shop/Pret" @click="closeAhmadMenu" class="menu-item-link block">Ready to Wear</router-link></li>
                  <li><router-link to="/shop/Bridal" @click="closeAhmadMenu" class="menu-item-link block">Bridal Couture</router-link></li>
                  <li><router-link to="/shop/M.Print" @click="closeAhmadMenu" class="menu-item-link block">Seasonal Prints</router-link></li>
                </ul>
              </div>
              <div class="space-y-6">
                <h4 class="text-[11px] font-black text-white uppercase tracking-[0.3em] border-b border-white/10 pb-4">The House</h4>
                <ul class="space-y-4">
                  <li><router-link to="/about" @click="closeAhmadMenu" class="menu-item-link block">Our Story</router-link></li>
                  <li><router-link to="/contact" @click="closeAhmadMenu" class="menu-item-link block">Contact Concierge</router-link></li>
                  <li><router-link to="/terms" @click="closeAhmadMenu" class="menu-item-link block">Care Instructions</router-link></li>
                  <li><router-link to="/privacy" @click="closeAhmadMenu" class="menu-item-link block">Privacy Policy</router-link></li>
                </ul>
              </div>
              <div class="col-span-2 space-y-6">
                <h4 class="text-[11px] font-black text-white uppercase tracking-[0.3em] border-b border-white/10 pb-4">Connect With Us</h4>
                <div class="flex gap-6">
                  <a href="https://www.instagram.com/ahmadclothfabrics_aroma/" target="_blank" rel="noopener" class="social-link-panel">
                    <font-awesome-icon :icon="['fab', 'instagram']" />
                    <span class="text-[9px] uppercase tracking-widest ml-2">Instagram</span>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61573629329844" target="_blank" rel="noopener" class="social-link-panel">
                    <font-awesome-icon :icon="['fab', 'facebook-f']" />
                    <span class="text-[9px] uppercase tracking-widest ml-2">Facebook</span>
                  </a>
                  <a href="https://www.youtube.com/@ahmadClothesfabrics_aroma" target="_blank" rel="noopener" class="social-link-panel">
                    <font-awesome-icon :icon="['fab', 'youtube']" />
                    <span class="text-[9px] uppercase tracking-widest ml-2">YouTube</span>
                  </a>
                  <a href="https://www.tiktok.com/@theahmadfabrices_aroma" target="_blank" rel="noopener" class="social-link-panel">
                    <font-awesome-icon :icon="['fab', 'tiktok']" />
                    <span class="text-[9px] uppercase tracking-widest ml-2">TikTok</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Branding Bottom Bar -->
        <div class="panel-bottom-bar cursor-pointer" @click="closeAhmadMenu">
          <h1
            class="text-3xl font-playfair tracking-[0.3em] font-light text-yellow-500 animate-float uppercase">
            AHMAD CLOTHES HOUSE</h1>
        </div>
      </div>
    </div>

    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- Trust Promotion Bar — Shopify Minimal Style -->
    <section v-if="showHeaderFooter" class="py-10 bg-[#FAFAFA] dark:bg-[#0A0A0A] border-y border-[#E5E7EB] dark:border-white/10">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div class="flex flex-col items-center gap-2 group">
          <div class="text-[#111] dark:text-white text-xl group-hover:scale-110 transition-transform">
            <font-awesome-icon icon="fa-solid fa-earth-americas" />
          </div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-[#111] dark:text-white">Worldwide Shipping</h4>
          <p class="text-[11px] text-stone-500 font-normal">Global couture delivered</p>
        </div>
        <div class="flex flex-col items-center gap-2 group">
          <div class="text-[#111] dark:text-white text-xl group-hover:scale-110 transition-transform">
            <font-awesome-icon icon="fa-solid fa-gem" />
          </div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-[#111] dark:text-white">Premium Quality</h4>
          <p class="text-[11px] text-stone-500 font-normal">Finest artisanal fabrics</p>
        </div>
        <div class="flex flex-col items-center gap-2 group">
          <div class="text-[#111] dark:text-white text-xl group-hover:scale-110 transition-transform">
            <font-awesome-icon icon="fa-solid fa-hand-holding-heart" />
          </div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-[#111] dark:text-white">Handcrafted</h4>
          <p class="text-[11px] text-stone-500 font-normal">Lahore's master artisans</p>
        </div>
        <div class="flex flex-col items-center gap-2 group">
          <div class="text-[#111] dark:text-white text-xl group-hover:scale-110 transition-transform">
            <font-awesome-icon icon="fa-solid fa-shield-halved" />
          </div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-[#111] dark:text-white">Secure Checkout</h4>
          <p class="text-[11px] text-stone-500 font-normal">Protected transactions</p>
        </div>
      </div>
    </section>

    <Footer v-if="showHeaderFooter" />

    <!-- Floating Phone Dialer (Right Side) - Direct Call to 03244902607 -->
    <div class="fixed bottom-24 right-5 sm:bottom-10 sm:right-10 z-[9999] flex flex-col items-center">
      <a href="tel:03244902607" 
         class="phone-dial-main-btn shadow-[0_10px_30px_rgba(212,175,55,0.45)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.7)]" 
         aria-label="Call 03244902607"
         title="Call 03244902607">
        <font-awesome-icon icon="fa-solid fa-phone" class="phone-dial-icon" />
      </a>
    </div>

    <!-- Floating WhatsApp Left Side -->
    <div class="fixed bottom-24 left-5 sm:bottom-10 sm:left-10 z-[9999] flex flex-col-reverse items-start gap-4">
      <button @click="toggleWhatsapp" class="whatsapp-main-btn shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.5)]" aria-label="WhatsApp Contact">
        <font-awesome-icon :icon="isWhatsappOpen ? 'fa-solid fa-times' : 'fa-brands fa-whatsapp'" />
      </button>

      <transition-group name="whatsapp-pop">
        <div v-if="isWhatsappOpen" key="menu" class="flex flex-col gap-3 mb-2">
          <a href="https://wa.me/923416887454" target="_blank" rel="noopener" class="whatsapp-sub-btn group" aria-label="WhatsApp Line 1">
            <div class="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
              <font-awesome-icon icon="fa-brands fa-whatsapp" />
            </div>
            <span class="text-[9px] font-black tracking-[0.2em] uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white">Line 1</span>
          </a>
          <a href="https://wa.me/923244902607" target="_blank" rel="noopener" class="whatsapp-sub-btn group" aria-label="WhatsApp Line 2">
            <div class="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
              <font-awesome-icon icon="fa-brands fa-whatsapp" />
            </div>
            <span class="text-[9px] font-black tracking-[0.2em] uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white">Line 2</span>
          </a>
        </div>
      </transition-group>
    </div>

    <!-- Global Social Floating Sidebar Dock (Shown across the website) -->
    <SocialSidebar v-if="!isAdminRoute" />

    <!-- Scroll Progress Bar -->
    <div class="fixed top-0 left-0 h-[2px] bg-[var(--primary-gold)] z-[100001] transition-all duration-300"
      :style="{ width: scrollProgress + '%' }"></div>

    <BottomNav v-if="showHeaderFooter" />

    <!-- ═══════════ Login Prompt Modal ═══════════ -->
    <transition name="modal-fade">
      <div v-if="showLoginPrompt"
        class="fixed inset-0 z-[999999] flex items-center justify-center p-4"
        @click.self="closeLoginPrompt">

        <!-- Blurred backdrop -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <!-- Modal Card -->
        <div class="relative z-10 w-full max-w-md bg-white dark:bg-[#0d0d0d] shadow-2xl animate-modal-pop overflow-hidden">

          <!-- Gold top accent bar -->
          <div class="h-1 w-full bg-gradient-to-r from-[#c9973a] via-[#f0d080] to-[#c9973a]"></div>

          <!-- Close button -->
          <button @click="closeLoginPrompt"
            class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-stone-400 hover:text-stone-700 dark:hover:text-white transition-colors z-10"
            aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <div class="px-8 pt-8 pb-8">

            <!-- Icon & Header -->
            <div class="flex flex-col items-center text-center mb-6">
              <!-- Ornate lock icon -->
              <div class="w-16 h-16 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-[#c9973a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25-2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                </svg>
              </div>

              <p class="text-[10px] font-bold uppercase tracking-[0.35em] text-[#c9973a] mb-2">Member Access Required</p>
              <h2 class="text-2xl font-playfair font-normal text-[#1a1a1a] dark:text-white mb-3 leading-snug">
                Please Login to Add<br>Items to Your Cart
              </h2>

              <!-- Gold divider -->
              <div class="flex items-center gap-2 mb-4">
                <div class="h-px w-8 bg-[#d4af37]/60"></div>
                <svg width="16" height="8" viewBox="0 0 60 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 12C30 12 20 2 10 12C20 22 30 12 30 12Z" fill="#d4af37" opacity="0.7"/>
                  <path d="M30 12C30 12 40 2 50 12C40 22 30 12 30 12Z" fill="#d4af37" opacity="0.7"/>
                  <circle cx="30" cy="12" r="3" fill="#d4af37"/>
                </svg>
                <div class="h-px w-8 bg-[#d4af37]/60"></div>
              </div>

              <p class="text-[13px] text-stone-500 dark:text-stone-400 leading-relaxed max-w-xs">
                Create a free account or sign in to enjoy exclusive collections, save your wishlist, and complete your purchase seamlessly.
              </p>
            </div>

            <!-- Benefits row -->
            <div class="grid grid-cols-3 gap-3 mb-7">
              <div v-for="b in loginModalBenefits" :key="b.label"
                class="flex flex-col items-center gap-1.5 text-center p-3 bg-stone-50 dark:bg-white/5 rounded">
                <div class="text-[#c9973a]" v-html="b.icon"></div>
                <p class="text-[9px] font-bold uppercase tracking-[0.1em] text-stone-500 dark:text-stone-400 leading-tight">{{ b.label }}</p>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="space-y-3">
              <router-link
                to="/login"
                @click="closeLoginPrompt"
                class="flex items-center justify-center gap-2 w-full bg-[#1a1a1a] dark:bg-white text-white dark:text-[#1a1a1a] py-3.5 text-[11px] font-bold uppercase tracking-[0.35em] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 group">
                <span>Sign In to Your Account</span>
                <span class="group-hover:translate-x-1 transition-transform">→</span>
              </router-link>

              <router-link
                to="/signup"
                @click="closeLoginPrompt"
                class="flex items-center justify-center gap-2 w-full border border-[#1a1a1a] dark:border-white text-[#1a1a1a] dark:text-white py-3.5 text-[11px] font-bold uppercase tracking-[0.35em] hover:bg-[#1a1a1a] hover:text-white dark:hover:bg-white dark:hover:text-[#1a1a1a] transition-all duration-300 group">
                <span>Create Free Account</span>
                <span class="group-hover:translate-x-1 transition-transform">→</span>
              </router-link>
            </div>

            <!-- Skip -->  
            <p class="text-center mt-5">
              <button @click="closeLoginPrompt"
                class="text-[10px] text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 uppercase tracking-widest transition-colors underline underline-offset-2">
                Continue browsing without login
              </button>
            </p>

          </div>
        </div>
      </div>
    </transition>

    <!-- PWA Installation Banner -->
    <transition name="fade-scale">
      <div v-if="installPrompt" class="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 bg-white dark:bg-[#0d0d0d] border border-[#c9973a]/30 p-5 rounded shadow-2xl z-[999999] flex flex-col gap-4">
        <div class="flex items-start justify-between">
          <div class="space-y-1">
            <h4 class="text-xs font-bold text-stone-900 dark:text-white uppercase tracking-wider">Ahmad Clothes House App</h4>
            <p class="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed font-light">Install our app on your mobile screen for instant access to our catalog and faster checkout.</p>
          </div>
          <button @click="dismissInstall" class="text-stone-400 hover:text-stone-600 dark:hover:text-white text-xs p-1" aria-label="Close Banner">
            <font-awesome-icon icon="fa-solid fa-times" />
          </button>
        </div>
        <div class="flex gap-3">
          <button @click="triggerInstall" class="flex-1 bg-[#1a1a1a] dark:bg-white text-white dark:text-black py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-[#c9973a] dark:hover:bg-[#c9973a] dark:hover:text-white transition-all duration-300 rounded-sm">
            Install App
          </button>
          <button @click="dismissInstall" class="px-4 border border-stone-200 dark:border-stone-800 text-stone-500 dark:text-stone-400 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-stone-50 dark:hover:bg-white/5 transition-all duration-300 rounded-sm">
            Not Now
          </button>
        </div>
      </div>
    </transition>

  </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from './components/Home/Header.vue'
import DailySEOAds from './components/DailySEOAds.vue'
import Footer from './components/Footer.vue'
import BottomNav from './components/BottomNav.vue'
import SocialSidebar from './components/SocialSidebar.vue'
import { useAuthStore } from './stores/auth'
import { useProductsStore } from './stores/products'
import { useLoadingStore } from './stores/loading'
import api from './api'


const auth = useAuthStore()
const productStore = useProductsStore()
const loading = useLoadingStore()
const route = useRoute()
const router = useRouter()
const scrollY = ref(0)
const scrollProgress = ref(0)
const isWhatsappOpen = ref(false)
const toggleWhatsapp = () => isWhatsappOpen.value = !isWhatsappOpen.value

// Boutique Panel State
const isPanelOpen = ref(false)
const closeAhmadMenu = () => isPanelOpen.value = false
const openAhmadMenu = () => isPanelOpen.value = true

// Reset panel state when navigating to home
watch(() => route.name, (newName) => {
  if (newName === 'home') {
    isPanelOpen.value = true
  }
})

// ─── PWA Mobile App Download Prompt ────────────────────────────────────
const installPrompt = ref(null)

const triggerInstall = async () => {
  if (!installPrompt.value) return
  installPrompt.value.prompt()
  await installPrompt.value.userChoice
  installPrompt.value = null
}

const dismissInstall = () => {
  installPrompt.value = null
}

// ─── Login Prompt Modal ───────────────────────────────────────────────
const showLoginPrompt = ref(false)

const closeLoginPrompt = () => {
  showLoginPrompt.value = false
}

// Listen for cart-click trigger from ProductCard (unauthenticated)
const onCartLoginRequired = () => { showLoginPrompt.value = true }

const loginModalBenefits = [
  {
    label: 'Add to Cart',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/></svg>`
  },
  {
    label: 'Save Wishlist',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg>`
  },
  {
    label: 'Track Orders',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/></svg>`
  }
]

// Show modal after 1.2s every time an unauthenticated user is on home
watch(
  () => route.name,
  (newName) => {
    if (newName === 'home' && !auth.isAuthenticated) {
      setTimeout(() => {
        if (!auth.isAuthenticated) {
          showLoginPrompt.value = true
        }
      }, 1200)
    }
  },
  { immediate: true }
)

const handleScroll = () => {
  scrollY.value = window.scrollY
  
  // Calculate scroll progress
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = (winScroll / height) * 100

  // Only handle panel on home route
  if (route.name === 'home') {
    if (isPanelOpen.value && scrollY.value > 20) {
      closeAhmadMenu()
    }
  }
}

const showHeaderFooter = computed(() => {
  const hideOn = ['login', 'signup', 'forgot-password', 'reset-password', 'admin-dashboard', 'dashboard', 'user-dashboard', 'checkout']
  return !hideOn.includes(route.name)
})

const isAdminRoute = computed(() => {
  return route.name === 'admin-dashboard' || (route.path && route.path.startsWith('/admin'))
})

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Traffic Heartbeat
const trackTraffic = async () => {
  // Skip pinging backend on localhost when offline to prevent console noise
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') return

  try {
    let sessionId = localStorage.getItem('traffic_session_id')
    if (!sessionId) {
      sessionId = 'sess_' + Math.random().toString(36).substring(2, 15)
      localStorage.setItem('traffic_session_id', sessionId)
    }

    await api.post('/traffic/ping', { sessionId }, { timeout: 3000 })
  } catch (err) {
    // Silently fail traffic tracking
  }
}


let trafficInterval = null

const onBeforeInstallPrompt = (e) => {
  e.preventDefault()
  if (!window.matchMedia('(display-mode: standalone)').matches) {
    installPrompt.value = e
  }
}

onMounted(() => {
  auth.initializeTheme()
  productStore.fetchProducts()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('acl:show-login-modal', onCartLoginRequired)
  window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
  
  // Start traffic tracking
  trackTraffic()
  trafficInterval = setInterval(trackTraffic, 30000) // Ping every 30s
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('acl:show-login-modal', onCartLoginRequired)
  window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt)
  if (trafficInterval) clearInterval(trafficInterval)
})
</script>

<style>
@reference "./style.css";

/* === GLOBAL APP-LIKE STYLES === */
:root {
  --app-bottom-height: 70px;
}

html,
body {
  overflow-x: clip;
  -webkit-tap-highlight-color: transparent;
  overscroll-behavior-y: none;
}

@media (max-width: 768px) {
  .min-h-screen {
    padding-bottom: var(--app-bottom-height);
  }
  
  /* Hide scrollbars but allow scrolling */
  ::-webkit-scrollbar {
    display: none;
  }
  
  * {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}

/* === PAGE TRANSITIONS === */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* === DIM OVERLAY === */


/* === BOTTOM PANEL === */
.boutique-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
  opacity: 0;
  transform: translateY(-100%);
  pointer-events: none;
  z-index: 20002;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 15vh;
  background: #000000e7;
  border-bottom: 1px solid rgba(65, 45, 45, 0.05);
}

.fudge-panel.open {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;


}

.panel-bottom-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 17vh;
  background: black;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  color: #d4af37;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 900;
  z-index: 121;
}

.panel-header-mini {
  font-size: 10px;
  letter-spacing: 0.5em;
  color: #d4af37;
  font-weight: 700;
  margin-bottom: 12px;
}

.splash-menu {
  animation: fade-up 0.5s ease forwards 0.1s;
  opacity: 0;
}

.menu-item-link {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  text-decoration: none;
}

.menu-item-link:hover {
  color: #d4af37;
  transform: translateX(10px);
}

.social-link-panel {
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link-panel:hover {
  color: #d4af37;
}

.animate-reveal {
  animation: reveal 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes reveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.boutique-desc {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  /* Much whiter text */
  margin-top: 12px;
  line-height: 1.6;
  text-align: center;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  /* Add shadow for readability on light bg */
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Back to Top */
/* Back to Top Circle */
.back-to-top-circle {
  width: 42px;
  height: 42px;
  background: rgba(212, 175, 55, 0.9);
  backdrop-filter: blur(10px);
  color: black;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}

.back-to-top-circle:hover {
  transform: translateY(-3px) scale(1.08);
  background: white;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.35);
}

/* Contact Buttons */
.contact-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  text-decoration: none;
  border: none;
  cursor: pointer;
}

/* Stagger animation feel */
.contact-btn:nth-child(1) {
  transition-delay: 0.1s;
}

.contact-btn:nth-child(2) {
  transition-delay: 0.2s;
}

.whatsapp-btn {
  background: #25D366;
}

.phone-btn {
  background: #d4af37;
}

/* Phone Dialer FAB (Right Side) */
.phone-dial-main-btn {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #d4af37, #b8860b);
  color: #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-decoration: none;
  position: relative;
}

.phone-dial-main-btn:hover {
  transform: scale(1.12) rotate(12deg);
  background: #ffffff;
  color: #b8860b;
  border-color: #d4af37;
}

.phone-dial-main-btn::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: #d4af37;
  opacity: 0.35;
  z-index: -1;
  animation: pulse-gold 2s infinite;
}

@keyframes pulse-gold {
  0% { transform: scale(1); opacity: 0.35; }
  100% { transform: scale(1.4); opacity: 0; }
}

.phone-dial-icon {
  font-size: 1.4rem;
}

/* Smooth Luxury Animation */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: translateY(40px) scale(0.7);
}

/* Login Prompt Modal Transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.35s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Modal card pop-in animation */
@keyframes modalPop {
  0%   { opacity: 0; transform: scale(0.88) translateY(24px); }
  70%  { transform: scale(1.02) translateY(-4px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}
.animate-modal-pop {
  animation: modalPop 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

/* WhatsApp Left FAB Styling */
.whatsapp-main-btn {
  width: 56px;
  height: 56px;
  background: #25D366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  border: none;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.whatsapp-main-btn:hover {
  transform: scale(1.1) rotate(15deg);
  background: #20BA5A;
}

.whatsapp-sub-btn {
  @apply flex items-center gap-3 no-underline transition-all duration-500;
}

.whatsapp-sub-btn:hover {
  transform: translateX(10px);
}

.whatsapp-pop-enter-active,
.whatsapp-pop-leave-active {
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.whatsapp-pop-enter-from,
.whatsapp-pop-leave-to {
  opacity: 0;
  transform: scale(0.5) translateY(20px);
}
</style>
