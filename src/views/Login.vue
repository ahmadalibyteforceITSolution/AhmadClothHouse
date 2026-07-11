<template>
  <div class="min-h-screen flex bg-white dark:bg-[#0a0a0a] font-sans overflow-hidden text-[#1a1a1a] dark:text-[#eee]">

    <!-- ═══════════════════ LEFT PANEL — Bridal Image ═══════════════════ -->
    <div class="hidden lg:flex w-[45%] relative overflow-hidden flex-shrink-0">

      <!-- Full-color image, no grayscale, no overlay -->
      <img
        :src="BridalShowcase"
        class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[25s] ease-out hover:scale-105"
        alt="Ahmad Cloth House Bridal Couture"
      >

      <!-- Subtle gradient at bottom for text legibility only -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      <!-- Brand Text Block -->
      <div class="absolute bottom-0 left-0 right-0 px-10 pb-10 z-10">
        <p class="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4af37] mb-3">Established in 2026</p>
        <h2 class="text-5xl font-playfair font-bold text-white leading-[1.1] mb-1">
          AHMAD<br>CLOTH HOUSE
        </h2>
        <p class="text-[#d4af37] italic text-sm font-light mt-2 mb-4 font-playfair">Where Heritage Meets Modern Elegance</p>

        <!-- Gold Ornament -->
        <div class="flex items-center gap-2 mb-5">
          <div class="h-px w-8 bg-[#d4af37]/60"></div>
          <svg width="18" height="10" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 12C30 12 20 2 10 12C20 22 30 12 30 12Z" fill="#d4af37" opacity="0.8"/>
            <path d="M30 12C30 12 40 2 50 12C40 22 30 12 30 12Z" fill="#d4af37" opacity="0.8"/>
            <circle cx="30" cy="12" r="3" fill="#d4af37"/>
          </svg>
          <div class="h-px w-8 bg-[#d4af37]/60"></div>
        </div>

        <p class="text-white/70 text-[12px] leading-relaxed max-w-[320px]">
          Discover timeless Pakistani couture crafted for every celebration. From luxurious bridal masterpieces to premium unstitched collections, every design reflects exceptional craftsmanship, refined style, and unmatched quality.
        </p>

        <!-- WhatsApp Button -->
        <a href="https://wa.me/923416887454" target="_blank"
          class="mt-6 inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white rounded-full px-5 py-2.5 transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-0.5 group">
          <svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <div>
            <p class="text-[11px] font-bold leading-none">WhatsApp</p>
            <p class="text-[9px] opacity-80 leading-none mt-0.5">Online</p>
          </div>
        </a>
      </div>
    </div>

    <!-- ═══════════════════ RIGHT PANEL — Login Form ═══════════════════ -->
    <div class="flex-1 flex flex-col h-screen overflow-y-auto luxury-scroll relative bg-white dark:bg-[#0a0a0a]">

      <!-- Top nav -->
      <div class="flex justify-end px-10 pt-8 pb-4 flex-shrink-0">
        <router-link to="/"
          class="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400 hover:text-[#d4af37] transition-colors group">
          <span class="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Return to Boutique</span>
        </router-link>
      </div>

      <!-- Main content -->
      <div class="flex-1 flex items-start justify-center px-8 sm:px-16 pt-6 pb-10">
        <div class="w-full max-w-[440px] animate-fade-in-up">

          <!-- Header -->
          <div class="mb-8">
            <p class="text-[10px] font-bold uppercase tracking-[0.35em] text-[#c9973a] mb-3">Member Access</p>
            <h1 class="text-4xl sm:text-[42px] font-playfair font-normal leading-tight text-[#1a1a1a] dark:text-white mb-4">
              Welcome Back
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
              Sign in to access your exclusive account, manage your orders, save your favorite collections, and enjoy a personalized luxury shopping experience.
            </p>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleLogin" class="space-y-5">

            <!-- Email Field -->
            <div>
              <label for="login-email" class="block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 mb-2">
                Email Address
              </label>
              <div class="relative">
                <div class="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <input
                  v-model="form.email"
                  type="email"
                  id="login-email"
                  placeholder="your@email.com"
                  class="luxury-input w-full pl-10"
                  :class="{ 'border-red-400': errors.email }"
                >
              </div>
              <p v-if="errors.email" class="text-[10px] text-red-500 font-semibold mt-1.5">{{ errors.email }}</p>
            </div>

            <!-- Password Field -->
            <div>
              <label for="login-password" class="block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 mb-2">
                Password
              </label>
              <div class="relative">
                <div class="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <input
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  id="login-password"
                  placeholder="••••••••••••"
                  class="luxury-input w-full pl-10 pr-24"
                  :class="{ 'border-red-400': errors.password }"
                >
                <router-link
                  to="/forgot-password"
                  class="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] font-semibold text-[#c9973a] hover:text-[#d4af37] transition-colors">
                  Forgot?
                </router-link>
              </div>
              <p v-if="errors.password" class="text-[10px] text-red-500 font-semibold mt-1.5">{{ errors.password }}</p>
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
              class="w-full bg-[#1a1a1a] dark:bg-white text-white dark:text-[#1a1a1a] py-4 text-[11px] font-bold uppercase tracking-[0.35em] flex items-center justify-center gap-3 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20 active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group mt-2">
              <span>{{ auth.loading ? 'Authenticating...' : 'Access Account' }}</span>
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
              class="w-full flex items-center justify-center gap-3 py-3.5 border border-stone-300 dark:border-stone-600 hover:border-stone-400 dark:hover:border-stone-400 bg-white dark:bg-transparent text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-600 dark:text-stone-300 transition-all duration-300 hover:shadow-md group">
              <svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
          </form>

          <!-- Feature Icons -->
          <div class="grid grid-cols-4 gap-3 mt-8 pt-6 border-t border-stone-100 dark:border-stone-800">
            <div v-for="feature in features" :key="feature.label" class="flex flex-col items-center gap-2 text-center group">
              <div class="w-10 h-10 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 flex items-center justify-center text-[#c9973a] group-hover:bg-[#d4af37]/15 group-hover:border-[#d4af37]/60 transition-all duration-300">
                <component :is="'span'" v-html="feature.icon" class="w-4 h-4"></component>
              </div>
              <p class="text-[9px] font-bold uppercase tracking-[0.1em] text-stone-500 dark:text-stone-400 leading-tight">{{ feature.label }}</p>
            </div>
          </div>

          <!-- New Account Section -->
          <div class="mt-8 pt-6 border-t border-stone-100 dark:border-stone-800">
            <h3 class="text-[16px] font-playfair font-normal text-[#1a1a1a] dark:text-white mb-2">New to Ahmad Cloth House?</h3>
            <p class="text-[12px] text-stone-500 dark:text-stone-400 leading-relaxed mb-5">
              Create your account today and unlock exclusive collections, early access to new arrivals, personalized recommendations, and special member-only promotions.
            </p>
            <router-link
              :to="{ name: 'signup', query: { redirect: route.query.redirect } }"
              class="inline-flex items-center gap-2 border border-[#1a1a1a] dark:border-white text-[#1a1a1a] dark:text-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#1a1a1a] hover:text-white dark:hover:bg-white dark:hover:text-[#1a1a1a] transition-all duration-300 group">
              Create Account
              <span class="group-hover:translate-x-1 transition-transform">→</span>
            </router-link>
          </div>

        </div>
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

const auth = useAuthStore()
const router = useRouter()
const route = useRoute()
const form = reactive({ email: '', password: '' })
const errors = reactive({ email: '', password: '' })
const showPassword = ref(false)

const features = [
  {
    label: 'Track Your Orders',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>`
  },
  {
    label: 'Save Your Wishlist',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>`
  },
  {
    label: 'Faster Checkout',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" /></svg>`
  },
  {
    label: 'Exclusive Offers',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" /></svg>`
  }
]

const loginSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
})

const handleLogin = async () => {
  errors.email = ''
  errors.password = ''
  try {
    await loginSchema.validate(form, { abortEarly: false })
  } catch (validationError) {
    validationError.inner.forEach(err => {
      errors[err.path] = err.message
    })
    return
  }
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
