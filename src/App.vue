<template>

  <div class="min-h-screen overflow-x-hidden relative bg-[#050505] bg-damask">
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
              AHMADCLOTHESFABRICS</h1>
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
                Ahmad Cloth House stands as a beacon of luxury in Pakistan's fashion landscape. 
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
                  <a href="https://www.instagram.com/ahmadclothfabrics_aroma/" target="_blank" class="social-link-panel">
                    <font-awesome-icon :icon="['fab', 'instagram']" />
                    <span class="text-[9px] uppercase tracking-widest ml-2">Instagram</span>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61573629329844" target="_blank" class="social-link-panel">
                    <font-awesome-icon :icon="['fab', 'facebook-f']" />
                    <span class="text-[9px] uppercase tracking-widest ml-2">Facebook</span>
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
            AHMADCLOTHESFABRICS</h1>
        </div>
      </div>
    </div>

    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- Trust Promotion Bar -->
    <section v-if="showHeaderFooter" class="py-16 bg-white dark:bg-[#080808] border-y border-black/5 dark:border-white/5">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        <div class="space-y-4 group">
          <div class="text-[var(--primary-gold)] text-2xl group-hover:scale-110 transition-transform">
            <font-awesome-icon icon="fa-solid fa-earth-americas" />
          </div>
          <h4 class="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--luxury-black)] dark:text-white">Worldwide Shipping</h4>
          <p class="text-[8px] text-stone-500 uppercase tracking-widest">Global Couture Delivered</p>
        </div>
        <div class="space-y-4 group">
          <div class="text-[var(--primary-gold)] text-2xl group-hover:scale-110 transition-transform">
            <font-awesome-icon icon="fa-solid fa-gem" />
          </div>
          <h4 class="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--luxury-black)] dark:text-white">Premium Quality</h4>
          <p class="text-[8px] text-stone-500 uppercase tracking-widest">Finest Artisanal Fabrics</p>
        </div>
        <div class="space-y-4 group">
          <div class="text-[var(--primary-gold)] text-2xl group-hover:scale-110 transition-transform">
            <font-awesome-icon icon="fa-solid fa-hand-holding-heart" />
          </div>
          <h4 class="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--luxury-black)] dark:text-white">Handcrafted</h4>
          <p class="text-[8px] text-stone-500 uppercase tracking-widest"> Lahore's Master Artisans</p>
        </div>
        <div class="space-y-4 group">
          <div class="text-[var(--primary-gold)] text-2xl group-hover:scale-110 transition-transform">
            <font-awesome-icon icon="fa-solid fa-shield-halved" />
          </div>
          <h4 class="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--luxury-black)] dark:text-white">Secure Checkout</h4>
          <p class="text-[8px] text-stone-500 uppercase tracking-widest">Protected Transactions</p>
        </div>
      </div>
    </section>

    <Footer v-if="showHeaderFooter" />

    <!-- Back to Top -->
    <transition name="fade-scale">
      <button v-if="scrollY > 500" class="back-to-top" @click="scrollToTop" aria-label="Back to Top">
        <font-awesome-icon icon="fa-solid fa-arrow-up" />
      </button>
    </transition>

    <!-- Floating Contact Buttons -->
    <transition name="fade-scale">
      <div v-if="scrollY > 500" class="fixed bottom-24 right-5 sm:bottom-10 sm:right-10 flex flex-col gap-4 z-[9999]">
        <button @click="toggleChatbot" class="contact-btn chatbot-btn" aria-label="Chat with AI">
          <div class="relative">
            <font-awesome-icon :icon="isChatbotOpen ? 'fa-solid fa-times' : 'fa-solid fa-robot'" />
            <span v-if="!isChatbotOpen" class="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse"></span>
          </div>
        </button>
      </div>
    </transition>

    <!-- Chatbot Window -->
    <transition name="fade-scale">
      <div v-if="isChatbotOpen" class="chatbot-window">
        <div class="chatbot-header">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
              <font-awesome-icon icon="fa-solid fa-robot" class="text-amber-500" />
            </div>
            <div>
              <h3 class="text-sm font-bold text-white">AI Assistant</h3>
              <span class="text-[10px] text-green-500 flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Online
              </span>
            </div>
          </div>
          <button @click="toggleChatbot" class="text-white/50 hover:text-white">
            <font-awesome-icon icon="fa-solid fa-times" />
          </button>
        </div>

        <div class="chatbot-messages" ref="messageContainer">
          <div v-for="(msg, idx) in chatMessages" :key="idx"
            :class="['message', msg.role === 'user' ? 'user-message' : 'bot-message']">
            <div class="message-content">{{ msg.text }}</div>
            <div v-if="msg.role === 'bot' && msg.text" class="tts-btn" @click="speakText(msg.text)">
              <font-awesome-icon icon="fa-solid fa-volume-up" />
            </div>
          </div>
          <div v-if="isTyping" class="bot-message typing">
            <div class="flex gap-1">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>
        </div>

        <div class="chatbot-input">
          <div class="input-wrapper">
            <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Type a message..." class="chat-input" />
            <button @click="toggleListening" :class="['stt-btn', { 'listening': isListening }]" title="Voice to Text">
              <font-awesome-icon :icon="isListening ? 'fa-solid fa-microphone' : 'fa-solid fa-microphone-slash'" />
            </button>
          </div>
          <button @click="sendMessage" class="send-btn">
            <font-awesome-icon icon="fa-solid fa-paper-plane" />
          </button>
        </div>
      </div>
    </transition>

    <!-- Floating WhatsApp Left Side -->
    <div class="fixed bottom-24 left-5 sm:bottom-10 sm:left-10 z-[9999] flex flex-col-reverse items-start gap-4">
      <button @click="toggleWhatsapp" class="whatsapp-main-btn shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.5)]" aria-label="WhatsApp Contact">
        <font-awesome-icon :icon="isWhatsappOpen ? 'fa-solid fa-times' : 'fa-brands fa-whatsapp'" />
      </button>

      <transition-group name="whatsapp-pop">
        <div v-if="isWhatsappOpen" key="menu" class="flex flex-col gap-3 mb-2">
          <a href="https://wa.me/923416887454" target="_blank" class="whatsapp-sub-btn group">
            <div class="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
              <font-awesome-icon icon="fa-brands fa-whatsapp" />
            </div>
            <span class="text-[9px] font-black tracking-[0.2em] uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white">Line 1</span>
          </a>
          <a href="https://wa.me/923244902607" target="_blank" class="whatsapp-sub-btn group">
            <div class="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
              <font-awesome-icon icon="fa-brands fa-whatsapp" />
            </div>
            <span class="text-[9px] font-black tracking-[0.2em] uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white">Line 2</span>
          </a>
        </div>
      </transition-group>
    </div>

    <!-- Scroll Progress Bar -->
    <div class="fixed top-0 left-0 h-[2px] bg-[var(--primary-gold)] z-[100001] transition-all duration-300"
      :style="{ width: scrollProgress + '%' }"></div>

    <BottomNav v-if="showHeaderFooter" />
  </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from './components/Home/Header.vue'
import DailySEOAds from './components/DailySEOAds.vue'
import Footer from './components/Footer.vue'
import BottomNav from './components/BottomNav.vue'
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

// Chatbot State
const isChatbotOpen = ref(false)
const userInput = ref('')
const isTyping = ref(false)
const isListening = ref(false)
const messageContainer = ref(null)
const chatMessages = ref([
  { role: 'bot', text: 'Welcome to Ahmad Cloth House! I am your luxury fashion assistant. How can I help you explore our collections, find a boutique, or arrange a bespoke consultation today?' }
])

const toggleChatbot = () => {
  isChatbotOpen.value = !isChatbotOpen.value
}

const scrollToBottom = async () => {
  await nextTick()
  if (messageContainer.value) {
    messageContainer.value.scrollTop = messageContainer.value.scrollHeight
  }
}

const sendMessage = async () => {
  if (!userInput.value.trim()) return

  const userMsg = userInput.value
  chatMessages.value.push({ role: 'user', text: userMsg })
  userInput.value = ''
  scrollToBottom()

  isTyping.value = true

  // AI Logic - Local Implementation
  setTimeout(() => {
    const botReply = getAIResponse(userMsg)
    chatMessages.value.push({ role: 'bot', text: botReply })
    isTyping.value = false
    scrollToBottom()
    speakText(botReply)
  }, 1000)
}

const getAIResponse = (message) => {
  const msg = message.toLowerCase()
  
  // ═══════════════════════════════════════════
  // BRAND KNOWLEDGE BASE (COMPREHENSIVE)
  // ═══════════════════════════════════════════
  const brand = {
    name: "Ahmad Cloth House",
    established: "2026",
    location: "Wapda Town, Ameer Chowk, Lahore, Pakistan",
    contact: "0341 6887454",
    whatsapp: "+92 341 6887454",
    email: "ahmadalihafeez24@gmail.com",
    specialization: "Artisanal unstitched fabrics, luxury apparel, and bridal couture.",
    shipping: "Worldwide shipping available (USA, UK, Canada, UAE, Australia, etc.).",
    stats: "5,000+ exclusive designs and 100,000+ loyal patrons.",
    boutiques: [
      { city: "London", address: "24 Savile Row, Mayfair" },
      { city: "Paris", address: "12 Rue Royale, 8th Arr." }
    ],
    services: [
      "Bespoke Bridal: Tailored couture for high-end weddings.",
      "Private Consultations: Personalized design sessions.",
      "Global Delivery: Premium care shipping worldwide."
    ]
  }

  const socialLinks = {
    instagram: "https://www.instagram.com/ahmadclothfabrics_aroma/",
    facebook: "https://www.facebook.com/profile.php?id=61573629329844"
  }

  // 1. Greetings & Identity
  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('assalam') || msg.includes('who are you')) {
    return `Hello! I am the AI Assistant for ${brand.name}. Since ${brand.established}, we have been crafting luxury unstitched couture and bridal pieces from our studio in ${brand.location}. How may I guide you through our collections today?`
  }

  // 2. Product Search & Categories
  const allProducts = productStore.products || []
  const categories = ['lawn', 'silk', 'chiffon', 'bridal', 'khaddar', 'velvet', 'unstitched', 'pret', 'm.print', 'seasonal']
  const foundCategory = categories.find(cat => msg.includes(cat))
  
  if (foundCategory || msg.includes('product') || msg.includes('shop') || msg.includes('collection')) {
    const categoryName = foundCategory || 'luxury'
    const filtered = allProducts.filter(p => 
      p.category?.toLowerCase().includes(categoryName) || 
      p.parentCategory?.toLowerCase().includes(categoryName) ||
      p.name?.toLowerCase().includes(categoryName)
    ).slice(0, 3)

    if (filtered.length > 0) {
      let response = `Our ${categoryName} collection features some of our finest work. Highlights include: `
      response += filtered.map(p => `${p.name} (Rs. ${p.price})`).join(', ')
      response += ". You can explore the full range in our Shop. Is there a specific fabric or style you prefer?"
      return response
    }
    return "We offer a diverse range of collections including Unstitched, Ready to Wear (Pret), and Bridal Couture. You can browse them all in our 'Shop' section!"
  }

  // 3. About, History & Vision
  if (msg.includes('about') || msg.includes('history') || msg.includes('story') || msg.includes('mission') || msg.includes('vision')) {
    return `${brand.name} was founded to bridge the gap between mass-produced apparel and the artisanal soul of traditional craftsmanship. We specialize in ${brand.specialization} and are proud to have over ${brand.stats} worldwide.`
  }

  // 4. Boutique Locations
  if (msg.includes('location') || msg.includes('where') || msg.includes('address') || msg.includes('shop') || msg.includes('store') || msg.includes('boutique')) {
    let locResponse = `Our Flagship Studio is located at ${brand.location}. `
    locResponse += `We also have international sanctuaries in: `
    locResponse += brand.boutiques.map(b => `${b.city} (${b.address})`).join(', ')
    locResponse += ". Would you like our contact details for a visit?"
    return locResponse
  }

  // 5. Contact & Support
  if (msg.includes('contact') || msg.includes('number') || msg.includes('phone') || msg.includes('whatsapp') || msg.includes('email') || msg.includes('help') || msg.includes('support')) {
    return `You can reach our Concierge Team via WhatsApp at ${brand.whatsapp}, call us at ${brand.contact}, or email ${brand.email}. We're here to assist with any inquiries!`
  }

  // 6. Shipping & Delivery
  if (msg.includes('delivery') || msg.includes('shipping') || msg.includes('order') || msg.includes('track') || msg.includes('international')) {
    return `${brand.shipping} Domestic delivery in Pakistan takes 3-5 working days. We also offer FREE worldwide shipping on all bridal couture orders!`
  }

  // 7. Pricing & Sales
  if (msg.includes('price') || msg.includes('cost') || msg.includes('discount') || msg.includes('sale') || msg.includes('how much')) {
    return "Our unstitched pieces start from approximately Rs. 3,000. We frequently offer seasonal promotions with up to 30% off. You can find all current pricing and active offers in our Shop section."
  }

  // 8. Services & Custom Orders
  if (msg.includes('service') || msg.includes('custom') || msg.includes('bridal') || msg.includes('bespoke') || msg.includes('consultation')) {
    let serviceResp = "We offer several exclusive services: "
    serviceResp += brand.services.join(' ')
    serviceResp += " Would you like to book a private consultation?"
    return serviceResp
  }

  // 9. Social Media
  if (msg.includes('social') || msg.includes('instagram') || msg.includes('facebook')) {
    return `Follow us for the latest arrivals and behind-the-scenes: Instagram: ${socialLinks.instagram} | Facebook: ${socialLinks.facebook}`
  }

  // 10. Quality & Care
  if (msg.includes('quality') || msg.includes('fabric') || msg.includes('material') || msg.includes('care') || msg.includes('wash')) {
    return "We use only ultra-premium fabrics, including Swiss Lawn Cotton, Chinese Pure Silk, and Italian Velvet. To maintain the beauty of your couture pieces, we recommend professional dry cleaning and avoiding direct sunlight for extended periods. Detailed care instructions are also available in our 'Care' section."
  }

  // 11. Fallback
  return `I'm sorry, I don't have specific details on that. However, our human experts can help you immediately! Please message us on WhatsApp at ${brand.whatsapp} or call ${brand.contact}. How else can I assist you today?`
}

// Text to Speech (TTS)
const speakText = (text) => {
  if ('speechSynthesis' in window) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 1.0
    utterance.pitch = 1.0
    window.speechSynthesis.speak(utterance)
  }
}

// Voice to Text (STT)
let recognition = null
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  recognition = new SpeechRecognition()
  recognition.continuous = false
  recognition.interimResults = false
  recognition.lang = 'en-US'

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript
    userInput.value = transcript
    isListening.value = false
    sendMessage() // Automatically send after voice input
  }

  recognition.onerror = (event) => {
    console.error('STT Error:', event.error)
    isListening.value = false
  }

  recognition.onend = () => {
    isListening.value = false
  }
}

const toggleListening = () => {
  if (!recognition) {
    alert("Speech recognition is not supported in this browser.")
    return
  }

  if (isListening.value) {
    recognition.stop()
    isListening.value = false
  } else {
    recognition.start()
    isListening.value = true
  }
}

const showHeaderFooter = computed(() => {
  const hideOn = ['login', 'signup', 'forgot-password', 'reset-password', 'admin-dashboard', 'dashboard', 'user-dashboard', 'checkout']
  return !hideOn.includes(route.name)
})

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Traffic Heartbeat
const trackTraffic = async () => {
  try {
    let sessionId = localStorage.getItem('traffic_session_id')
    if (!sessionId) {
      sessionId = 'sess_' + Math.random().toString(36).substring(2, 15)
      localStorage.setItem('traffic_session_id', sessionId)
    }

    await api.post('/traffic/ping', { sessionId })
  } catch (err) {
    // Silently fail traffic tracking
  }
}


let trafficInterval = null

onMounted(() => {
  auth.initializeTheme()
  productStore.fetchProducts()
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // Start traffic tracking
  trackTraffic()
  trafficInterval = setInterval(trackTraffic, 30000) // Ping every 30s
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (trafficInterval) clearInterval(trafficInterval)
})
</script>

<style>
@reference "./style.css";

/* === GLOBAL APP-LIKE STYLES === */
:root {
  --app-bottom-height: 70px;
}

body {
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
.back-to-top {
  position: fixed;
  bottom: 240px;
  right: 20px;
  width: 44px;
  height: 44px;
  background: rgba(212, 175, 55, 0.9);
  backdrop-filter: blur(10px);
  color: black;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}

@media (min-width: 640px) {
  .back-to-top {
    bottom: 40px;
    right: 40px;
    width: 50px;
    height: 50px;
  }
}

.back-to-top:hover {
  transform: translateY(-8px) scale(1.1);
  background: white;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
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

.chatbot-btn {
  background: linear-gradient(135deg, #d4af37, #b8860b);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
}

.chatbot-btn::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: #d4af37;
  opacity: 0.3;
  z-index: -1;
  animation: pulse-gold 2s infinite;
}

@keyframes pulse-gold {
  0% { transform: scale(1); opacity: 0.3; }
  100% { transform: scale(1.4); opacity: 0; }
}

.contact-btn:hover {
  transform: scale(1.15) rotate(10deg);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.whatsapp-btn:hover {
  background: #20BA5A;
}

.phone-btn:hover,
.chatbot-btn:hover {
  background: white;
  color: #d4af37;
}

/* Chatbot Window Styles */
.chatbot-window {
  position: fixed;
  bottom: 130px;
  right: 20px;
  width: 310px;
  height: 450px;
  background: #0a0a0a;
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 24px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 20px rgba(212, 175, 55, 0.1);
  z-index: 10005;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  backdrop-filter: blur(20px);
  animation: float-slow 6s ease-in-out infinite;
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@media (min-width: 640px) {
  .chatbot-window {
    right: 40px;
    width: 380px;
    height: 550px;
  }
}

.chatbot-header {
  padding: 20px 25px;
  background: linear-gradient(to right, rgba(212, 175, 55, 0.15), rgba(0, 0, 0, 0.4));
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chatbot-messages {
  flex: 1;
  padding: 25px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='%23B8860B' fill-opacity='0.03'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3C/g%3E%3C/svg%3E");
}

.message {
  max-width: 85%;
  padding: 12px 18px;
  border-radius: 20px;
  font-size: 0.85rem;
  line-height: 1.5;
  position: relative;
  transition: all 0.3s ease;
}

.user-message {
  align-self: flex-end;
  background: linear-gradient(135deg, #d4af37, #b8860b);
  color: black;
  font-weight: 600;
  border-bottom-right-radius: 4px;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);
}

.bot-message {
  align-self: flex-start;
  background: rgba(255, 255, 255, 0.08);
  color: #f1f1f1;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom-left-radius: 4px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.chatbot-input {
  padding: 20px;
  background: rgba(0, 0, 0, 0.4);
  border-top: 1px solid rgba(212, 175, 55, 0.1);
  display: flex;
  gap: 12px;
  align-items: center;
}

.input-wrapper {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 30px;
  padding: 6px 18px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(212, 175, 55, 0.2);
  transition: all 0.3s ease;
}

.input-wrapper:focus-within {
  border-color: #d4af37;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.1);
}

.chat-input {
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  padding: 10px 0;
  font-size: 0.9rem;
  outline: none;
}

.stt-btn {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s;
  padding: 5px;
}

.stt-btn.listening {
  color: #ff4444;
  animation: pulse-red 1.5s infinite;
}

@keyframes pulse-red {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.send-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #d4af37;
  color: black;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.send-btn:hover {
  transform: scale(1.1);
  background: white;
}

/* Typing Indicator */
.typing .dot {
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: inline-block;
  animation: typing 1s infinite;
}

.typing .dot:nth-child(2) {
  animation-delay: 0.2s;
}

.typing .dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
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
