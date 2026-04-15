<template>
  <div
    class="h-screen flex flex-row-reverse bg-[#fafaf8] dark:bg-[#050505] transition-colors duration-700 font-sans selection:bg-amber-500/30 overflow-hidden scrollbar-none">

    <!-- Cinematic Right Panel -->
    <div class="hidden lg:flex w-1/2 relative overflow-hidden group">
      <div class="absolute inset-0 bg-black/40 z-10 transition-opacity duration-1000 group-hover:opacity-20"></div>
      <img :src="Fugible1"
        class="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[4s] ease-out"
        alt="Couture Creation">
      <div class="absolute inset-x-12 bottom-20 z-20 space-y-6 text-right">
        <div class="w-12 h-1 bg-[var(--primary-gold)] ml-auto"></div>
        <h2 class="text-6xl font-black text-white uppercase tracking-tighter font-playfair italic leading-[0.9]">Join
          the<br>House</h2>
        <p class="text-white/50 text-[10px] font-black uppercase tracking-[0.5em] max-w-xs ml-auto">BEGIN YOUR JOURNEY
          WITHIN THE LUXURY REALMS OF AHMADCLOTHS HOUSE.</p>
      </div>
      <!-- Signature Floating Text -->
      <div class="absolute top-12 right-12 z-20 flex flex-col items-end">
        <span
          class="text-white/20 text-[60px] font-black italic select-none pointer-events-none tracking-tighter">02</span>
        <span
          class="text-[var(--primary-gold)]/40 text-[9px] font-black uppercase tracking-[1em] mt-[-20px] mr-4">COLLECTION</span>
      </div>
    </div>

    <!-- Entrance Left Panel -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-20 relative overflow-y-auto scrollbar-none">
      <!-- Subtle Background Decoration -->
      <div class="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_#B8860B22_0%,_transparent_70%)]">
        </div>
      </div>

      <div class="max-w-md w-full relative z-10 animate-reveal">
        <div class="text-center lg:text-left mb-16 px-4">
          <div
            class="text-2xl font-playfair tracking-[0.3em] font-light text-[var(--luxury-black)] dark:text-white uppercase mb-2">
            AHMADCLOTHS HOUSE</div>
          <p class="text-[8px] tracking-[0.4em] font-bold text-[var(--primary-gold)] uppercase mb-12">The House of
            Couture</p>
          <h1
            class="text-4xl sm:text-5xl font-black uppercase tracking-tighter dark:text-white mb-6 font-playfair italic underline decoration-[var(--primary-gold)]/10 underline-offset-[16px]">
            Create Account</h1>
          <p class="text-[9px] font-black uppercase text-[var(--primary-gold)] tracking-[0.6em] opacity-40">JOIN THE
            COUTURE HOUSE</p>
        </div>

        <form @submit.prevent="handleSignup" class="space-y-8">
          <div class="space-y-4 px-4">
            <label class="text-[8px] font-black uppercase text-stone-400 tracking-[0.4em] block pl-1">FULL NAME</label>
            <input v-model="form.name" type="text" placeholder="YOUR NAME" class="luxury-input" required>
          </div>

          <div class="space-y-4 px-4">
            <label class="text-[8px] font-black uppercase text-stone-400 tracking-[0.4em] block pl-1">EMAIL
              ADDRESS</label>
            <input v-model="form.email" type="email" placeholder="HELLO@AHMADCLOTHS.COM" class="luxury-input lowercase"
              required>
          </div>

          <div class="space-y-4 px-4">
            <label class="text-[8px] font-black uppercase text-stone-400 tracking-[0.4em] block pl-1">PASSWORD</label>
            <input v-model="form.password" type="password" placeholder="••••••••" class="luxury-input" required>
          </div>

          <div class="space-y-4 px-4">
            <label class="text-[8px] font-black uppercase text-stone-400 tracking-[0.4em] block pl-1">ACCOUNT
              TYPE</label>
            <select v-model="form.role" class="luxury-select">
              <option value="user">GUEST_ACCESS</option>
              <option v-if="isDev" value="admin">BOUTIQUE_ADMIN</option>
            </select>
          </div>

          <!-- Recaptcha Verification -->
          <div class="px-4 flex justify-center mt-4 mb-2">
            <div class="g-recaptcha" data-sitekey="6LfBYqUsAAAAAGrCYHXGLDyfXBRj01HNOdgtePUv"></div>
          </div>

          <transition name="fade">
            <p v-if="auth.error"
              class="mx-4 text-[9px] text-red-600 font-black uppercase tracking-[0.3em] text-center bg-red-500/5 py-3 border border-red-500/20">
              {{ auth.error.toUpperCase() }}</p>
          </transition>

          <div class="pt-6 px-4">
            <button :disabled="auth.loading"
              class="w-full bg-black dark:bg-amber-600 text-white py-6 rounded-none font-black uppercase tracking-[0.4em] text-[10px] hover:bg-amber-500 transition-all shadow-3xl active:scale-95 disabled:opacity-20 flex items-center justify-center gap-6 group">
              <span>{{ auth.loading ? 'INITIALIZING...' : 'SIGN UP' }}</span>
              <font-awesome-icon icon="fa-solid fa-plus"
                class="text-[8px] group-hover:rotate-90 transition-transform" />
            </button>
          </div>

          <!-- Social Sync -->
          <div class="pt-8 border-t border-stone-100 dark:border-white/5 flex flex-col items-center">
            <p class="text-[8px] font-black uppercase text-stone-400 tracking-[0.5em] mb-8 italic opacity-40">Or
              continue with</p>
            <div class="w-full flex justify-center">
              <button 
                @click="triggerGoogleLogin"
                type="button"
                class="w-full flex items-center justify-center gap-4 py-5 px-8 border border-stone-200 dark:border-white/10 hover:border-amber-500/50 dark:hover:border-amber-500/50 bg-white/50 dark:bg-white/5 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden active:scale-95 shadow-lg hover:shadow-amber-500/10"
              >
                <!-- Shimmer Effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                
                <!-- Proper Google Icon (SVG) -->
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform duration-500 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/>
                </svg>
                
                <span class="text-[9px] font-black uppercase tracking-[0.5em] text-stone-600 dark:text-stone-300 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors whitespace-nowrap">
                  SYNC WITH GOOGLE IDENTITY
                </span>
              </button>
            </div>
          </div>
        </form>

        <div class="mt-12 text-center pt-10 border-t border-stone-100 dark:border-white/5">
          <p class="text-[9px] text-stone-400 font-black uppercase tracking-[0.4em]">
            Already Have an Account?
            <router-link :to="{ name: 'login', query: { redirect: route.query.redirect } }"
              class="text-amber-600 font-black ml-4 border-b border-amber-500/20 hover:border-amber-500 transition-all">SIGN
              IN</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { googleTokenLogin, decodeCredential } from 'vue3-google-login'
import Fugible1 from '../assets/ladies3.jpg'

const isDev = import.meta.env.DEV
const auth = useAuthStore()
const router = useRouter()
const route = useRoute()
const form = reactive({ name: '', email: '', password: '', role: 'user' })

const handleSignup = async () => {
  const recaptchaResponse = window.grecaptcha ? window.grecaptcha.getResponse() : '';
  if (!recaptchaResponse) {
    auth.error = 'Please complete the reCAPTCHA verification to proceed.';
    return;
  }
  
  const payload = { ...form, recaptchaToken: recaptchaResponse };
  const success = await auth.signup(payload)
  
  if (success) {
    const redirectPath = route.query.redirect || '/'
    router.push(redirectPath)
  } else {
    if (window.grecaptcha) window.grecaptcha.reset();
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
    if (response.credential) {
      handleGoogleLogin(response)
    } else {
      const success = await auth.googleLogin(response.access_token)
      if (success) router.push(route.query.redirect || '/')
    }
  })
}

onMounted(() => {
  window.scrollTo(0, 0)
  
  if (!document.getElementById('recaptcha-script')) {
    const script = document.createElement('script');
    script.id = 'recaptcha-script';
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  } else if (window.grecaptcha && window.grecaptcha.render) {
    // If returning to the page, reset recaptcha if it's already rendered
    const els = document.querySelectorAll('.g-recaptcha');
    els.forEach(el => {
      if (el.innerHTML !== '') {
        el.innerHTML = '';
        window.grecaptcha.render(el);
      }
    });
  }
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

.luxury-select {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #d4af3722;
  padding: 16px 0;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  appearance: none;
  outline: none;
  transition: all 0.5s ease;
  cursor: pointer;
  color: #1a1a1a;
}

.dark .luxury-select {
  color: white;
}

.luxury-select:hover {
  border-color: #d4af3788;
}

.luxury-select:focus {
  border-color: #d4af37;
  padding-left: 8px;
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
  100% { transform: translateX(100%); }
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
