<template>
  <div
    class="h-screen flex bg-[#fafaf8] dark:bg-[#050505] transition-colors duration-700 font-sans selection:bg-amber-500/30 overflow-hidden scrollbar-none">

    <!-- Cinematic Left Panel -->
    <div class="hidden lg:flex w-1/2 relative overflow-hidden group">
      <div class="absolute inset-0 bg-black/40 z-10 transition-opacity duration-1000 group-hover:opacity-20"></div>
      <img :src="Fugible1"
        class="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[4s] ease-out"
        alt="Couture Experience">
      <div class="absolute inset-x-12 bottom-20 z-20 space-y-6">
        <div class="w-12 h-1 bg-[var(--primary-gold)]"></div>
        <h2 class="text-6xl font-black text-white uppercase tracking-tighter font-playfair italic leading-[0.9]">
          Ahmadcloths<br>House</h2>
        <p class="text-white/50 text-[10px] font-black uppercase tracking-[0.5em] max-w-xs">ESTABLISHED IN 2026.
          CRAFTING THE FINEST LUXURY FASHION AND COUTURE.</p>
      </div>
      <!-- Signature Floating Text -->
      <div class="absolute top-12 left-12 z-20 flex flex-col">
        <span
          class="text-white/20 text-[60px] font-black italic select-none pointer-events-none tracking-tighter">01</span>
        <span
          class="text-[var(--primary-gold)]/40 text-[9px] font-black uppercase tracking-[1em] mt-[-20px] ml-4">AUTHENTIC</span>
      </div>
    </div>

    <!-- Entrance Right Panel -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-24 relative overflow-y-auto scrollbar-none">
      <!-- Subtle Background Decoration -->
      <div class="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_#B8860B22_0%,_transparent_70%)]">
        </div>
      </div>

      <div class="max-w-md w-full relative z-10 animate-reveal">
        <div class="text-center lg:text-left mb-16 px-4">
          <h1
            class="text-2xl font-playfair tracking-[0.3em] font-light text-[var(--luxury-black)] dark:text-white uppercase mb-2">
            AHMADCLOTHS HOUSE</h1>
          <p class="text-[8px] tracking-[0.4em] font-bold text-[var(--primary-gold)] uppercase mb-12">The House of
            Couture</p>
          <h1
            class="text-4xl sm:text-5xl font-black uppercase tracking-tighter dark:text-white mb-6 font-playfair italic underline decoration-[var(--primary-gold)]/10 underline-offset-[16px]">
            Boutique Login</h1>
          <p class="text-[9px] font-black uppercase text-[var(--primary-gold)] tracking-[0.6em] opacity-40">ACCESS YOUR
            COUTURE ACCOUNT</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-10">
          <div class="space-y-4 px-4">
            <label class="text-[8px] font-black uppercase text-stone-400 tracking-[0.4em] block pl-1">EMAIL
              ADDRESS</label>
            <input v-model="form.email" type="email" placeholder="HELLO@AHMADCLOTHS.COM" class="luxury-input lowercase"
              required>
          </div>

          <div class="space-y-4 px-4">
            <div class="flex justify-between items-center mb-2">
              <label class="text-[8px] font-black uppercase text-stone-400 tracking-[0.4em] block">PASSWORD</label>
              <router-link to="/forgot-password"
                class="text-[8px] text-amber-600 font-black uppercase tracking-[0.3em] hover:text-amber-500 transition-colors">FORGOT?</router-link>
            </div>
            <input v-model="form.password" type="password" placeholder="••••••••" class="luxury-input" required>
          </div>

          <transition name="fade">
            <p v-if="auth.error"
              class="mx-4 text-[9px] text-red-600 font-black uppercase tracking-[0.3em] text-center bg-red-500/5 py-3 border border-red-500/20">
              {{ auth.error.toUpperCase() }}</p>
          </transition>

          <div class="pt-6 px-4">
            <button :disabled="auth.loading"
              class="w-full bg-black dark:bg-amber-600 text-white py-6 rounded-none font-black uppercase tracking-[0.4em] text-[10px] hover:bg-amber-500 transition-all shadow-3xl active:scale-95 disabled:opacity-20 flex items-center justify-center gap-6 group">
              <span>{{ auth.loading ? 'VERIFYING...' : 'LOGIN' }}</span>
              <font-awesome-icon icon="fa-solid fa-arrow-right-long"
                class="text-[8px] group-hover:translate-x-3 transition-transform" />
            </button>
          </div>

          <!-- Social Sync -->
          <div class="pt-8 border-t border-stone-100 dark:border-white/5 flex flex-col items-center">
            <p class="text-[8px] font-black uppercase text-stone-400 tracking-[0.5em] mb-8 italic opacity-40">Or
              continue with</p>
            <div class="w-full flex justify-center">
              <button @click="triggerGoogleLogin" type="button"
                class="w-full flex items-center justify-center gap-4 py-5 px-8 border border-stone-200 dark:border-white/10 hover:border-amber-500/50 dark:hover:border-amber-500/50 bg-white/50 dark:bg-white/5 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden active:scale-95 shadow-lg hover:shadow-amber-500/10">
                <!-- Shimmer Effect -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]">
                </div>

                <!-- Proper Google Icon (SVG) -->
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform duration-500 flex-shrink-0"
                  viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4" />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853" />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05" />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                    fill="#EA4335" />
                </svg>

                <span
                  class="text-[9px] font-black uppercase tracking-[0.5em] text-stone-600 dark:text-stone-300 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors whitespace-nowrap">
                  SYNC WITH GOOGLE IDENTITY
                </span>
              </button>
            </div>
          </div>
        </form>

        <div class="mt-12 text-center pt-10 border-t border-stone-100 dark:border-white/5">
          <p class="text-[9px] text-stone-400 font-black uppercase tracking-[0.4em]">
            New to Ahmadcloths?
            <router-link :to="{ name: 'signup', query: { redirect: route.query.redirect } }"
              class="text-amber-600 font-black ml-4 border-b border-amber-500/20 hover:border-amber-500 transition-all">JOIN
              THE HOUSE</router-link>
          </p>
        </div>
      </div>

      <!-- Corner Footer Artifact -->
      <div class="absolute bottom-12 right-12 hidden md:flex items-center gap-4 opacity-20">
        <span class="text-[7px] font-black uppercase tracking-[0.8em] dark:text-white">AHMADCLOTHS_HOUSE_2026</span>
        <div class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { googleTokenLogin, decodeCredential } from 'vue3-google-login'
import Fugible1 from '../assets/ladies3.jpg'

const auth = useAuthStore()
const router = useRouter()
const route = useRoute()
const form = reactive({ email: '', password: '' })

const handleLogin = async () => {
  const success = await auth.login(form)
  if (success) {
    const redirectPath = route.query.redirect || '/'
    router.push(redirectPath)
  }
}

const handleGoogleLogin = async (response) => {
  const success = await auth.googleLogin(response.credential)
  if (success) {
    const redirectPath = route.query.redirect || '/'
    router.push(redirectPath)
  }
}

const triggerGoogleLogin = () => {
  googleTokenLogin().then(async (response) => {
    // If you need the credential (ID Token), you might need googlePopupLogin or 
    // the backend might need to be adjusted.
    // However, for most vue3-google-login setups, the standard button provides response.credential.
    // Using googleTokenLogin provides access_token.
    // If backend expects ID Token, we can use the credential from the response if available.
    if (response.credential) {
      handleGoogleLogin(response)
    } else {
      // Logic for access token if backend supports it
      const success = await auth.googleLogin(response.access_token)
      if (success) router.push(route.query.redirect || '/')
    }
  })
}

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.luxury-input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #d4af3722;
  padding: 16px 0;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  outline: none;
  transition: all 0.5s ease;
  color: #1a1a1a;
}

.dark .luxury-input {
  color: white;
}

.luxury-input:focus {
  border-color: #d4af37;
  padding-left: 12px;
}

.luxury-input::placeholder {
  color: #ccc;
  font-weight: 400;
  font-size: 10px;
}

.dark .luxury-input::placeholder {
  color: #222;
}

.shadow-3xl {
  box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.15);
}

.dark .shadow-3xl {
  box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.8);
}

.animate-reveal {
  animation: reveal-bottom 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

@keyframes reveal-bottom {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

.font-playfair {
  font-family: 'Playfair Display', serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
