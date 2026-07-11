<template>
  <div class="min-h-screen flex bg-white dark:bg-[#0a0a0a] font-sans overflow-hidden text-[#1a1a1a] dark:text-[#eee]">

    <!-- ═══════════════════ LEFT PANEL — Signup Form ═══════════════════ -->
    <div class="flex-1 flex flex-col h-screen overflow-y-auto luxury-scroll relative bg-white dark:bg-[#0a0a0a]">

      <!-- Top nav -->
      <div class="flex justify-start px-10 pt-8 pb-4 flex-shrink-0">
        <router-link to="/"
          class="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400 hover:text-[#d4af37] transition-colors group">
          <span class="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Return to Boutique</span>
        </router-link>
      </div>

      <!-- Main content -->
      <div class="flex-1 flex items-start justify-center px-8 sm:px-16 pt-4 pb-10">
        <div class="w-full max-w-[440px] animate-fade-in-up">

          <!-- Header -->
          <div class="mb-7">
            <p class="text-[10px] font-bold uppercase tracking-[0.35em] text-[#c9973a] mb-3">New Registration</p>
            <h1 class="text-4xl sm:text-[42px] font-playfair font-normal leading-tight text-[#1a1a1a] dark:text-white mb-4">
              Create Account
            </h1>

            <!-- Gold ornamental divider -->
            <div class="flex items-center gap-2 mb-4">
              <div class="h-px w-10 bg-[#d4af37]/70"></div>
              <svg width="20" height="10" viewBox="0 0 60 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 12C30 12 20 2 10 12C20 22 30 12 30 12Z" fill="#d4af37" opacity="0.7"/>
                <path d="M30 12C30 12 40 2 50 12C40 22 30 12 30 12Z" fill="#d4af37" opacity="0.7"/>
                <circle cx="30" cy="12" r="3" fill="#d4af37"/>
              </svg>
              <div class="h-px w-10 bg-[#d4af37]/70"></div>
            </div>

            <p class="text-[13px] text-stone-500 dark:text-stone-400 leading-relaxed max-w-sm">
              Join Ahmad Cloth House and unlock exclusive collections, early access to new arrivals, personalized recommendations, and member-only promotions.
            </p>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleSignup" class="space-y-4">

            <!-- Full Name -->
            <div>
              <label for="signup-name" class="block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 mb-2">
                Full Name
              </label>
              <div class="relative">
                <div class="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                  </svg>
                </div>
                <input
                  v-model="form.name"
                  type="text"
                  id="signup-name"
                  placeholder="Your full name"
                  class="luxury-input w-full pl-10"
                  :class="{ 'border-red-400': errors.name }"
                >
              </div>
              <p v-if="errors.name" class="text-[10px] text-red-500 font-semibold mt-1.5">{{ errors.name }}</p>
            </div>

            <!-- Email -->
            <div>
              <label for="signup-email" class="block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 mb-2">
                Email Address
              </label>
              <div class="relative">
                <div class="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                  </svg>
                </div>
                <input
                  v-model="form.email"
                  type="email"
                  id="signup-email"
                  placeholder="your@email.com"
                  class="luxury-input w-full pl-10 lowercase"
                  :class="{ 'border-red-400': errors.email }"
                >
              </div>
              <p v-if="errors.email" class="text-[10px] text-red-500 font-semibold mt-1.5">{{ errors.email }}</p>
            </div>

            <!-- Password -->
            <div>
              <label for="signup-password" class="block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 mb-2">
                Password
              </label>
              <div class="relative">
                <div class="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                  </svg>
                </div>
                <input
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  id="signup-password"
                  placeholder="Min. 8 characters"
                  class="luxury-input w-full pl-10 pr-12"
                  :class="{ 'border-red-400': errors.password }"
                >
                <button type="button" @click="showPassword = !showPassword"
                  class="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-[#c9973a] transition-colors">
                  <svg v-if="!showPassword" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/>
                  </svg>
                </button>
              </div>
              <p v-if="errors.password" class="text-[10px] text-red-500 font-semibold mt-1.5">{{ errors.password }}</p>
            </div>

            <!-- Account Type -->
            <div>
              <label for="signup-role" class="block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 mb-2">
                Account Type
              </label>
              <div class="relative">
                <div class="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <select
                  v-model="form.role"
                  id="signup-role"
                  class="luxury-input w-full pl-10 pr-8 appearance-none cursor-pointer"
                >
                  <option value="user">Guest Access</option>
                  <option v-if="isDev" value="admin">Boutique Admin</option>
                </select>
                <div class="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- reCAPTCHA -->
            <div class="flex justify-center pt-1">
              <div class="g-recaptcha scale-90 sm:scale-100 origin-center" data-sitekey="6LfBYqUsAAAAAGrCYHXGLDyfXBRj01HNOdgtePUv"></div>
            </div>

            <!-- Server Error -->
            <transition name="fade">
              <p v-if="auth.error" class="text-[11px] text-red-500 font-semibold text-center bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded px-4 py-2.5">
                {{ auth.error }}
              </p>
            </transition>

            <!-- Submit Button -->
            <button
              :disabled="auth.loading"
              class="w-full bg-[#1a1a1a] dark:bg-white text-white dark:text-[#1a1a1a] py-4 text-[11px] font-bold uppercase tracking-[0.35em] flex items-center justify-center gap-3 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20 active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group">
              <span>{{ auth.loading ? 'Creating Account...' : 'Become a Member' }}</span>
              <span class="group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <!-- OR Divider -->
            <div class="flex items-center gap-4 py-1">
              <div class="flex-1 h-px bg-stone-200 dark:bg-stone-700"></div>
              <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">or</span>
              <div class="flex-1 h-px bg-stone-200 dark:bg-stone-700"></div>
            </div>

            <!-- Google Button -->
            <button
              @click="triggerGoogleLogin"
              type="button"
              class="w-full flex items-center justify-center gap-3 py-3.5 border border-stone-300 dark:border-stone-600 hover:border-stone-400 dark:hover:border-stone-400 bg-white dark:bg-transparent text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-600 dark:text-stone-300 transition-all duration-300 hover:shadow-md">
              <svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
          </form>

          <!-- Member Benefits Icons -->
          <div class="grid grid-cols-4 gap-3 mt-7 pt-6 border-t border-stone-100 dark:border-stone-800">
            <div v-for="benefit in benefits" :key="benefit.label" class="flex flex-col items-center gap-2 text-center group">
              <div class="w-10 h-10 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 flex items-center justify-center text-[#c9973a] group-hover:bg-[#d4af37]/15 group-hover:border-[#d4af37]/60 transition-all duration-300"
                v-html="benefit.icon">
              </div>
              <p class="text-[9px] font-bold uppercase tracking-[0.1em] text-stone-500 dark:text-stone-400 leading-tight">{{ benefit.label }}</p>
            </div>
          </div>

          <!-- Already have account -->
          <div class="mt-7 pt-6 border-t border-stone-100 dark:border-stone-800">
            <h3 class="text-[16px] font-playfair font-normal text-[#1a1a1a] dark:text-white mb-2">Already a Member?</h3>
            <p class="text-[12px] text-stone-500 dark:text-stone-400 leading-relaxed mb-5">
              Sign in to access your exclusive account, manage your orders, save your favourite collections, and enjoy your personalized luxury experience.
            </p>
            <router-link
              :to="{ name: 'login', query: { redirect: route.query.redirect } }"
              class="inline-flex items-center gap-2 border border-[#1a1a1a] dark:border-white text-[#1a1a1a] dark:text-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#1a1a1a] hover:text-white dark:hover:bg-white dark:hover:text-[#1a1a1a] transition-all duration-300 group">
              Sign In
              <span class="group-hover:translate-x-1 transition-transform">→</span>
            </router-link>
          </div>

        </div>
      </div>
    </div>

    <!-- ═══════════════════ RIGHT PANEL — Bridal Image ═══════════════════ -->
    <div class="hidden lg:flex w-[45%] relative overflow-hidden flex-shrink-0">

      <!-- Full-color image, no overlay -->
      <img
        :src="BridalShowcase"
        class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[25s] ease-out hover:scale-105"
        alt="Ahmad Cloth House Bridal Couture"
      >

      <!-- Subtle gradient at bottom for text legibility -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      <!-- Brand Text Block -->
      <div class="absolute bottom-0 left-0 right-0 px-10 pb-10 z-10 text-right">
        <p class="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4af37] mb-3">Established in 2026</p>
        <h2 class="text-5xl font-playfair font-bold text-white leading-[1.1] mb-1">
          JOIN THE<br>HOUSE
        </h2>
        <p class="text-[#d4af37] italic text-sm font-light mt-2 mb-4 font-playfair">Begin Your Luxury Journey</p>

        <!-- Gold Ornament -->
        <div class="flex items-center justify-end gap-2 mb-5">
          <div class="h-px w-8 bg-[#d4af37]/60"></div>
          <svg width="18" height="10" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 12C30 12 20 2 10 12C20 22 30 12 30 12Z" fill="#d4af37" opacity="0.8"/>
            <path d="M30 12C30 12 40 2 50 12C40 22 30 12 30 12Z" fill="#d4af37" opacity="0.8"/>
            <circle cx="30" cy="12" r="3" fill="#d4af37"/>
          </svg>
          <div class="h-px w-8 bg-[#d4af37]/60"></div>
        </div>

        <p class="text-white/70 text-[12px] leading-relaxed max-w-[300px] ml-auto">
          Begin your journey within the luxury realms of Ahmad Cloth House. Exclusive collections crafted for the discerning woman.
        </p>
      </div>
    </div>

  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { googleTokenLogin } from 'vue3-google-login'
import BridalShowcase from '../assets/ai_new/bridal_highlight.jpg'
import * as yup from 'yup'

const isDev = import.meta.env.DEV
const auth = useAuthStore()
const router = useRouter()
const route = useRoute()
const form = reactive({ name: '', email: '', password: '', role: 'user' })
const errors = reactive({ name: '', email: '', password: '' })
const showPassword = ref(false)

const benefits = [
  {
    label: 'Early Access',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>`
  },
  {
    label: 'Save Wishlist',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg>`
  },
  {
    label: 'Member Deals',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"/><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"/></svg>`
  },
  {
    label: 'Fast Checkout',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"/></svg>`
  }
]

const signupSchema = yup.object({
  name: yup.string().min(2, 'Name must be at least 2 characters').required('Full name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
})

const handleSignup = async () => {
  errors.name = ''
  errors.email = ''
  errors.password = ''
  try {
    await signupSchema.validate(form, { abortEarly: false })
  } catch (validationError) {
    validationError.inner.forEach(err => {
      errors[err.path] = err.message
    })
    return
  }
  const recaptchaResponse = window.grecaptcha ? window.grecaptcha.getResponse() : ''
  if (!recaptchaResponse) {
    auth.error = 'Please complete the reCAPTCHA verification to proceed.'
    return
  }
  const payload = { ...form, recaptchaToken: recaptchaResponse }
  const success = await auth.signup(payload)
  if (success) {
    const redirectPath = route.query.redirect || '/'
    router.push(redirectPath)
  } else {
    if (window.grecaptcha) window.grecaptcha.reset()
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
    const script = document.createElement('script')
    script.id = 'recaptcha-script'
    script.src = 'https://www.google.com/recaptcha/api.js'
    script.async = true
    script.defer = true
    document.head.appendChild(script)
  } else if (window.grecaptcha && window.grecaptcha.render) {
    const els = document.querySelectorAll('.g-recaptcha')
    els.forEach(el => {
      if (el.innerHTML !== '') {
        el.innerHTML = ''
        window.grecaptcha.render(el)
      }
    })
  }
})
</script>

<style scoped>
.font-playfair { font-family: 'Playfair Display', serif; }

/* Luxury input style */
.luxury-input {
  width: 100%;
  border: 1px solid #e2e0dc;
  border-radius: 3px;
  padding: 13px 16px;
  font-size: 13px;
  font-weight: 400;
  color: #1a1a1a;
  background: #fff;
  outline: none;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}
.luxury-input::placeholder { color: #aaa; }
.luxury-input:focus {
  border-color: #c9973a;
  box-shadow: 0 0 0 3px rgba(201, 151, 58, 0.08);
}

.dark .luxury-input {
  background: #111;
  border-color: #333;
  color: #eee;
}
.dark .luxury-input::placeholder { color: #555; }
.dark .luxury-input:focus {
  border-color: #c9973a;
  box-shadow: 0 0 0 3px rgba(201, 151, 58, 0.12);
}

/* Scroll */
.luxury-scroll::-webkit-scrollbar { width: 3px; }
.luxury-scroll::-webkit-scrollbar-thumb { background: #d4af37; border-radius: 99px; }
.luxury-scroll::-webkit-scrollbar-track { background: transparent; }

/* Animations */
.animate-fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
