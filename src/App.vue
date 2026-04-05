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
              AHMADCLOTHSHOUSE</h1>
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

    <Header v-if="showHeaderFooter" />

    <!-- Global Ahmadcloths Panel & Overlay -->
    <div v-if="route.name === 'home'">
      <!-- Dim Overlay -->
      <div class="lux-overlay" :class="{ active: isPanelOpen }" @click.stop="closeAhmadMenu"></div>

      <!-- Ahmadcloths Panel -->
      <div class="fudge-panel" :class="{ open: isPanelOpen }" @click.stop>
        <div class="panel-content">
        </div>

        <!-- Branding Bottom Bar -->
        <div class="panel-bottom-bar cursor-pointer" @click="closeAhmadMenu">
          <h1
            class="text-3xl font-playfair tracking-[0.3em] font-light text-yellow-500 animate-float uppercase">
            AHMADCLOTHSHOUSE</h1>
        </div>
      </div>
    </div>

    <router-view />
    <Footer v-if="showHeaderFooter" />

    <!-- Back to Top -->
    <transition name="fade-scale">
      <button v-if="scrollY > 500" class="back-to-top" @click="scrollToTop" aria-label="Back to Top">
        <font-awesome-icon icon="fa-solid fa-arrow-up" />
      </button>
    </transition>

    <!-- Floating Contact Buttons -->
    <transition name="fade-scale">
      <div v-if="scrollY > 500" class="fixed bottom-5 right-5 sm:right-10 flex flex-col gap-4 z-[9999]">
        <button @click="toggleChatbot" class="contact-btn chatbot-btn" aria-label="Chat with AI">
          <font-awesome-icon :icon="isChatbotOpen ? 'fa-solid fa-times' : 'fa-solid fa-robot'" />
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
    <div class="fixed bottom-5 left-5 sm:left-10 z-[9999] flex flex-col-reverse items-start gap-4">
      <button @click="toggleWhatsapp" class="whatsapp-main-btn shadow-2xl" aria-label="WhatsApp Contact">
        <font-awesome-icon :icon="isWhatsappOpen ? 'fa-solid fa-times' : 'fa-brands fa-whatsapp'" />
      </button>

      <transition-group name="whatsapp-pop">
        <div v-if="isWhatsappOpen" key="menu" class="flex flex-col gap-3 mb-2">
          <a href="https://wa.me/923416887454" target="_blank" class="whatsapp-sub-btn">
            <font-awesome-icon icon="fa-brands fa-whatsapp" class="mr-3" />
            <span class="text-[10px] font-bold tracking-widest uppercase">Contact Line 1</span>
          </a>
          <a href="https://wa.me/923244902607" target="_blank" class="whatsapp-sub-btn">
            <font-awesome-icon icon="fa-brands fa-whatsapp" class="mr-3" />
            <span class="text-[10px] font-bold tracking-widest uppercase">Contact Line 2</span>
          </a>
        </div>
      </transition-group>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from './components/Home/Header.vue'
import Footer from './components/Footer.vue'
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
const isWhatsappOpen = ref(false)
const toggleWhatsapp = () => isWhatsappOpen.value = !isWhatsappOpen.value

// Fudgeable Panel State
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
  { role: 'bot', text: 'Hello! How can I assist you today?' }
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

  try {
    // n8n Webhook Integration
    const response = await fetch('https://your-n8n-webhook-url.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMsg })
    })

    const data = await response.json()
    const botReply = data.output || "I'm sorry, I couldn't process that request."

    chatMessages.value.push({ role: 'bot', text: botReply })
    speakText(botReply) // Automatically speak the response
  } catch (error) {
    console.error('Chat error:', error)
    chatMessages.value.push({ role: 'bot', text: "Service is temporarily unavailable. Please try again later." })
  } finally {
    isTyping.value = false
    scrollToBottom()
  }
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
  const hideOn = ['login', 'signup', 'forgot-password', 'reset-password', 'admin-dashboard', 'user-dashboard', 'checkout']
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
/* === DIM OVERLAY === */


/* === BOTTOM PANEL === */
.fudge-panel {
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
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.menu-item-link:hover {
  color: #d4af37;
  transform: translateY(-2px);
}

.fudge-desc {
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
  bottom: 80px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: #d4af37;
  color: black;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}

@media (min-width: 640px) {
  .back-to-top {
    right: 40px;
  }
}

.back-to-top:hover {
  transform: translateY(-8px) scale(1.1);
  background: white;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
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
  background: #d4af37;
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
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  z-index: 10005;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

@media (min-width: 640px) {
  .chatbot-window {
    right: 40px;
    width: 350px;
    height: 500px;
  }
}

.chatbot-header {
  padding: 15px 20px;
  background: rgba(212, 175, 55, 0.05);
  border-bottom: 1px solid rgba(212, 175, 55, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chatbot-messages {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Custom Scrollbar */
.chatbot-messages::-webkit-scrollbar {
  width: 4px;
}

.chatbot-messages::-webkit-scrollbar-thumb {
  background: rgba(212, 175, 55, 0.2);
  border-radius: 2px;
}

.message {
  max-width: 80%;
  padding: 10px 15px;
  border-radius: 15px;
  font-size: 0.9rem;
  line-height: 1.4;
  position: relative;
}

.user-message {
  align-self: flex-end;
  background: #d4af37;
  color: black;
  border-bottom-right-radius: 2px;
}

.bot-message {
  align-self: flex-start;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom-left-radius: 2px;
}

.tts-btn {
  position: absolute;
  right: -25px;
  bottom: 5px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.8rem;
  transition: color 0.3s;
}

.tts-btn:hover {
  color: #d4af37;
}

.chatbot-input {
  padding: 15px;
  background: rgba(255, 255, 255, 0.02);
  display: flex;
  gap: 10px;
  align-items: center;
}

.input-wrapper {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 25px;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.chat-input {
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  padding: 8px 0;
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
  background: rgba(37, 211, 102, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(37, 211, 102, 0.2);
  color: #25D366;
  padding: 12px 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  white-space: nowrap;
}

.whatsapp-sub-btn:hover {
  background: #25D366;
  color: white;
  transform: translateX(10px);
  box-shadow: 0 10px 20px rgba(37, 211, 102, 0.2);
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
