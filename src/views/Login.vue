<template>
  <div class="min-h-screen flex flex-col justify-between bg-[#FCFCFA] dark:bg-[#080808] text-stone-900 dark:text-stone-100 font-sans transition-colors duration-300">
    
    <!-- ══════════ TOP BAR ══════════ -->
    <header class="w-full px-6 sm:px-12 py-6 flex items-center justify-between">
      <router-link to="/" class="flex items-center gap-2.5">
        <span class="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
        <span class="text-xs sm:text-sm font-editorial font-bold uppercase tracking-[0.25em] text-stone-900 dark:text-white">
          AHMAD CLOTHES HOUSE
        </span>
      </router-link>

      <router-link 
        to="/" 
        class="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400 hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 group"
      >
        <span class="group-hover:-translate-x-1 transition-transform">←</span>
        <span>Return to Boutique</span>
      </router-link>
    </header>

    <!-- ══════════ CENTER AUTHENTICATION CARD ══════════ -->
    <main class="flex-1 flex items-center justify-center px-4 sm:px-6 py-8">
      <div class="w-full max-w-[420px] bg-white dark:bg-[#11100D] p-8 sm:p-10 rounded-2xl border border-stone-200/80 dark:border-white/10 shadow-xl space-y-6">
        
        <!-- Header -->
        <div class="text-center space-y-2">
          <span class="text-[9.5px] font-bold uppercase tracking-[0.35em] text-[#C9973A] block">Member Access</span>
          <h1 class="text-2xl sm:text-3xl font-editorial font-normal text-stone-900 dark:text-white">
            Sign In to Your Account
          </h1>
          <p class="text-xs text-stone-500 dark:text-stone-400">
            Access your orders, saved couture, and member privileges.
          </p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleLogin" class="space-y-4">
          
          <!-- Email Field -->
          <div>
            <label for="login-email" class="block text-[11px] font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1.5">
              Email Address *
            </label>
            <input
              v-model="form.email"
              type="email"
              id="login-email"
              placeholder="client@example.com"
              class="w-full px-4 py-3 bg-stone-50/50 dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-lg text-sm text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
              :class="{ 'border-red-400': errors.email }"
            />
            <p v-if="errors.email" class="text-[11px] text-red-500 font-semibold mt-1">{{ errors.email }}</p>
          </div>

          <!-- Password Field -->
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label for="login-password" class="block text-[11px] font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400">
                Password *
              </label>
              <router-link
                to="/forgot-password"
                class="text-[11px] text-[#B8860B] dark:text-[#D4AF37] hover:underline"
              >
                Forgot Password?
              </router-link>
            </div>

            <div class="relative">
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                id="login-password"
                placeholder="••••••••••••"
                class="w-full px-4 py-3 bg-stone-50/50 dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-lg text-sm text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all pr-10"
                :class="{ 'border-red-400': errors.password }"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 text-xs p-1"
                aria-label="Toggle password visibility"
              >
                <font-awesome-icon :icon="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'" />
              </button>
            </div>
            <p v-if="errors.password" class="text-[11px] text-red-500 font-semibold mt-1">{{ errors.password }}</p>
          </div>

          <!-- Server Error -->
          <div v-if="auth.error" class="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg text-xs text-red-600 dark:text-red-400 text-center font-medium">
            {{ auth.error }}
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="auth.loading"
            class="w-full h-12 rounded-full bg-black hover:bg-[#B8860B] dark:bg-white dark:hover:bg-[#B8860B] text-white dark:text-black dark:hover:text-white text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
          >
            <span v-if="!auth.loading">Sign In to Account →</span>
            <span v-else class="inline-flex items-center gap-2">
              <span class="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              <span>Authenticating...</span>
            </span>
          </button>

          <!-- Divider -->
          <div class="flex items-center gap-3 py-1">
            <div class="flex-1 h-px bg-stone-200 dark:border-white/10"></div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-stone-400">or</span>
            <div class="flex-1 h-px bg-stone-200 dark:border-white/10"></div>
          </div>

          <!-- Google Login Button -->
          <button
            @click="triggerGoogleLogin"
            type="button"
            class="w-full h-11 rounded-full border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 bg-white dark:bg-white/5 text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span>Continue with Google</span>
          </button>
        </form>

        <!-- Toggle to Signup -->
        <div class="pt-4 border-t border-stone-100 dark:border-white/5 text-center text-xs text-stone-500 dark:text-stone-400">
          <span>New to Ahmad Clothes House? </span>
          <router-link
            :to="{ name: 'signup', query: { redirect: route.query.redirect } }"
            class="font-bold text-stone-900 dark:text-white hover:text-[#D4AF37] dark:hover:text-[#D4AF37] transition-colors"
          >
            Create an Account →
          </router-link>
        </div>

      </div>
    </main>

    <!-- ══════════ FOOTER BAR ══════════ -->
    <footer class="w-full px-6 py-4 text-center text-[10px] uppercase tracking-widest text-stone-400">
      &copy; 2026 Ahmad Clothes House &bull; Haute Couture Lahore
    </footer>

  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { googleTokenLogin } from 'vue3-google-login'
import * as yup from 'yup'

const auth = useAuthStore()
const router = useRouter()
const route = useRoute()
const form = reactive({ email: '', password: '' })
const errors = reactive({ email: '', password: '' })
const showPassword = ref(false)

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
