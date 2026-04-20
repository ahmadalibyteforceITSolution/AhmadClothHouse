<template>
  <div class="min-h-screen flex flex-row-reverse bg-white dark:bg-[#050505] transition-colors duration-1000 font-sans selection:bg-black/10 dark:selection:bg-white/10 overflow-hidden text-[#111] dark:text-[#eee]">

    <!-- Cinematic Right Panel -->
    <div class="hidden lg:flex w-1/2 relative overflow-hidden group border-l border-black/5 dark:border-white/5">
      <img :src="Fugible1"
        class="absolute inset-0 w-full h-full object-cover grayscale opacity-90 transition-all duration-[20s] ease-out group-hover:scale-105 group-hover:grayscale-0"
        alt="Couture Creation">
      
      <!-- Minimalist Overlay Elements -->
      <div class="absolute inset-0 bg-black/10 dark:bg-black/40 mix-blend-multiply"></div>
      
      <div class="absolute inset-x-12 bottom-20 z-20 space-y-4 text-right">
        <h2 class="text-4xl lg:text-5xl font-light text-white uppercase tracking-widest font-playfair leading-tight drop-shadow-lg">
          Join the<br>House
        </h2>
        <p class="text-white/80 text-[10px] font-bold uppercase tracking-[0.4em] max-w-sm ml-auto leading-loose">
          BEGIN YOUR JOURNEY WITHIN THE LUXURY REALMS OF AHMADCLOTHES.
        </p>
      </div>
    </div>

    <!-- Entrance Left Panel -->
    <div class="w-full lg:w-1/2 flex flex-col pt-12 px-8 sm:px-24 h-screen overflow-y-auto luxury-scroll relative bg-white dark:bg-[#050505]">
      
      <!-- Back Navigation -->
      <div class="w-full flex justify-start mb-12">
         <router-link to="/" class="text-[9px] font-bold uppercase tracking-[0.3em] hover:text-[#d4af37] transition-colors cursor-pointer border-b border-transparent hover:border-[#d4af37] pb-1">
            RETURN TO BOUTIQUE
         </router-link>
      </div>

      <div class="max-w-md w-full mx-auto relative z-10 animate-fade-in-up mt-8">
        <div class="text-center lg:text-left mb-16">
          <p class="text-[8px] tracking-[0.4em] font-bold text-stone-500 uppercase mb-4">NEW REGISTRATION</p>
          <h1 class="text-4xl sm:text-5xl font-playfair font-normal leading-tight tracking-tight mb-2">
            Create Account
          </h1>
          <div class="h-[1px] w-12 bg-black dark:bg-white lg:mx-0 mx-auto mt-6 opacity-20"></div>
        </div>

        <form @submit.prevent="handleSignup" class="space-y-8">
          <div class="relative group">
            <input v-model="form.name" type="text" id="name" placeholder=" " class="mariab-input w-full peer" :class="{ 'border-red-500': errors.name }">
            <label for="name" class="mariab-label bg-white dark:bg-[#050505]">Full Name</label>
            <p v-if="errors.name" class="text-[9px] text-red-500 font-bold uppercase tracking-widest mt-2">{{ errors.name }}</p>
          </div>

          <div class="relative group">
            <input v-model="form.email" type="email" id="email" placeholder=" " class="mariab-input w-full lowercase peer" :class="{ 'border-red-500': errors.email }">
            <label for="email" class="mariab-label bg-white dark:bg-[#050505]">Email Address</label>
            <p v-if="errors.email" class="text-[9px] text-red-500 font-bold uppercase tracking-widest mt-2">{{ errors.email }}</p>
          </div>

          <div class="relative group">
            <input v-model="form.password" type="password" id="password" placeholder=" " class="mariab-input w-full peer" :class="{ 'border-red-500': errors.password }">
            <label for="password" class="mariab-label bg-white dark:bg-[#050505]">Password</label>
            <p v-if="errors.password" class="text-[9px] text-red-500 font-bold uppercase tracking-widest mt-2">{{ errors.password }}</p>
          </div>

          <div class="relative group">
            <select v-model="form.role" id="role" class="mariab-input mariab-select w-full peer cursor-pointer appearance-none bg-transparent">
              <option class="bg-white dark:bg-[#050505] text-[#111] dark:text-[#eee]" value="user">GUEST ACCESS</option>
              <option class="bg-white dark:bg-[#050505] text-[#111] dark:text-[#eee]" v-if="isDev" value="admin">BOUTIQUE ADMIN</option>
            </select>
            <label for="role" class="mariab-label absolute bg-white dark:bg-[#050505]">Account Type</label>
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-stone-400 pointer-events-none" />
          </div>

          <!-- Recaptcha Verification -->
          <div class="flex justify-center mt-4">
            <div class="g-recaptcha scale-90 sm:scale-100 origin-center" data-sitekey="6LfBYqUsAAAAAGrCYHXGLDyfXBRj01HNOdgtePUv"></div>
          </div>

          <transition name="fade">
            <p v-if="auth.error" class="text-[10px] text-red-500 font-bold uppercase tracking-widest text-center py-2">
              {{ auth.error }}
            </p>
          </transition>

          <div class="pt-4">
            <button :disabled="auth.loading" class="w-full bg-black dark:bg-white text-white dark:text-black py-5 text-[10px] font-bold uppercase tracking-[0.4em] transition-transform hover:-translate-y-1 hover:shadow-2xl active:scale-95 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-4 group">
              <span>{{ auth.loading ? 'INITIALIZING...' : 'BECOME A MEMBER' }}</span>
              <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-[9px] opacity-70 group-hover:translate-x-1" />
            </button>
          </div>

          <!-- Social Sync -->
          <div class="pt-8 mt-2 border-t border-black/5 dark:border-white/5 flex flex-col items-center">
            <div class="w-full flex justify-center mt-4">
              <button @click="triggerGoogleLogin" type="button" class="w-full flex items-center justify-center gap-4 py-4 border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-all group bg-stone-50 dark:bg-transparent">
                <svg class="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/>
                </svg>
                <span class="text-[9px] font-bold uppercase tracking-[0.3em] text-stone-600 dark:text-stone-300">
                  Continue with Google
                </span>
              </button>
            </div>
          </div>
        </form>

        <div class="mt-16 text-center">
          <p class="text-[10px] text-stone-500 uppercase tracking-widest font-medium">
            Already Have an Account?
            <router-link :to="{ name: 'login', query: { redirect: route.query.redirect } }" class="text-black dark:text-white font-bold ml-2 border-b border-black dark:border-white hover:text-[#d4af37] hover:border-[#d4af37] transition-all pb-0.5">
              SIGN IN
            </router-link>
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
import Fugible1 from '../assets/ai_new/bridal_highlight.png'
import * as yup from 'yup'

const isDev = import.meta.env.DEV
const auth = useAuthStore()
const router = useRouter()
const route = useRoute()
const form = reactive({ name: '', email: '', password: '', role: 'user' })
const errors = reactive({ name: '', email: '', password: '' })

const signupSchema = yup.object({
  name: yup.string().min(2, 'NAME MUST BE AT LEAST 2 CHARACTERS').required('FULL NAME IS REQUIRED'),
  email: yup.string().email('INVALID EMAIL ADDRESS').required('EMAIL IS REQUIRED'),
  password: yup.string().min(8, 'PASSWORD MUST BE AT LEAST 8 CHARACTERS').required('PASSWORD IS REQUIRED'),
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
/* Ultra Luxury Maria B Style Inputs */
.mariab-input {
   background: transparent;
   border: 1px solid rgba(0, 0, 0, 0.15);
   padding: 24px 16px 8px;
   font-size: 13px;
   font-weight: 500;
   border-radius: 2px;
   outline: none;
   transition: border-color 0.3s ease;
   color: #111;
}

.dark .mariab-input {
   border-color: rgba(255, 255, 255, 0.15);
   color: #eee;
}

.mariab-input:focus {
   border-color: #111;
}

.dark .mariab-input:focus {
   border-color: #eee;
}

.mariab-label {
   position: absolute;
   left: 16px;
   top: 17px;
   font-size: 10px;
   font-weight: 600;
   text-transform: uppercase;
   letter-spacing: 0.1em;
   color: #888;
   transition: all 0.2s ease;
   pointer-events: none;
   padding: 0 4px; 
}

.mariab-input:focus ~ .mariab-label,
.mariab-input:not(:placeholder-shown) ~ .mariab-label {
   top: -9px;
   font-size: 8px;
   color: #111;
}

.dark .mariab-input:focus ~ .mariab-label,
.dark .mariab-input:not(:placeholder-shown) ~ .mariab-label {
   color: #eee;
}

.mariab-select {
  padding-right: 32px;
}

.animate-fade-in-up {
  animation: fadeInUp 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.font-playfair {
  font-family: 'Playfair Display', serif;
}

.luxury-scroll::-webkit-scrollbar {
  width: 2px;
}
.luxury-scroll::-webkit-scrollbar-thumb {
  background: #111;
}
.dark .luxury-scroll::-webkit-scrollbar-thumb {
  background: #eee;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
