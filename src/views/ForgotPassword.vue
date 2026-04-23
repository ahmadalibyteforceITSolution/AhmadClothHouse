<template>
  <div class="h-screen flex items-center justify-center p-8 relative overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-1000 selection:bg-black/10 dark:selection:bg-white/10 font-sans text-[#111] dark:text-[#eee]">
    
    <!-- Ultra Cinematic Background -->
    <div class="absolute inset-0 group">
       <div class="absolute inset-0 bg-white/90 dark:bg-black/90 z-10 backdrop-blur-[2px]"></div>
       <img 
          :src="CoutureDisplay" 
          class="w-full h-full object-cover scale-110 animate-slow-zoom grayscale opacity-20 dark:opacity-40"
          alt="Luxury Abstract"
       >
    </div>  

    <!-- Centered Recover Card (Minimalist) -->
    <div class="max-w-md w-full bg-white dark:bg-[#050505] p-12 sm:p-16 border border-black/10 dark:border-white/10 shadow-2xl relative z-20 animate-fade-in-up">
      
      <div class="text-center mb-12">
        <p class="text-[8px] font-bold uppercase tracking-[0.4em] text-stone-500 mb-4">ACCOUNT RECOVERY</p>
        <h1 class="text-3xl font-playfair font-normal leading-tight tracking-tight mb-4">Reset Password</h1>
        <div class="h-[1px] w-12 bg-black dark:bg-white mx-auto opacity-20"></div>
      </div>

      <transition name="fade" mode="out-in">
        <div v-if="successMsg" class="text-center space-y-8 animate-fade-in-up">
            <div class="w-16 h-16 border border-green-500/30 bg-green-500/5 text-green-500 rounded-full flex items-center justify-center mx-auto text-xl animate-pulse">
               <font-awesome-icon icon="fa-solid fa-paper-plane" />
            </div>
            <p class="text-[10px] font-bold uppercase tracking-widest leading-loose px-4">
              {{ successMsg }}
            </p>
            <div class="pt-8">
               <router-link to="/login" class="block w-full border border-black dark:border-white text-black dark:text-white px-8 py-4 text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                 RETURN TO LOGIN
               </router-link>
            </div>
        </div>

        <form v-else @submit.prevent="handleSubmit" class="space-y-10">
          <div class="relative group">
            <input 
              v-model="email"
              type="email" 
              id="email"
              placeholder=" " 
              class="mariab-input w-full lowercase peer"
              :class="{ 'border-red-500': emailError }"
            >
            <label for="email" class="mariab-label bg-white dark:bg-[#050505]">Email Address</label>
            <p v-if="emailError" class="text-[9px] text-red-500 font-bold uppercase tracking-widest mt-2">{{ emailError }}</p>
          </div>

          <transition name="fade">
             <p v-if="error" class="text-[10px] text-red-500 font-bold uppercase tracking-widest text-center py-2">{{ error }}</p>
          </transition>

          <button 
            :disabled="loading"
            class="w-full bg-black dark:bg-white text-white dark:text-black py-5 text-[10px] font-bold uppercase tracking-[0.4em] transition-transform hover:-translate-y-1 hover:shadow-2xl active:scale-95 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-4 group"
          >
            <span>{{ loading ? 'SENDING IDENTIFICATION...' : 'SEND RESET LINK' }}</span>
            <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-[9px] opacity-70 group-hover:translate-x-1" />
          </button>

          <div class="text-center pt-8 border-t border-black/5 dark:border-white/5">
            <router-link to="/login" class="text-[9px] text-stone-500 font-bold uppercase tracking-widest hover:text-black dark:hover:text-white transition-colors border-b border-transparent hover:border-black dark:hover:border-white pb-0.5">
              BACK TO LOGIN
            </router-link>
          </div>
        </form>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../api'
import Swal from 'sweetalert2'
import { useAuthStore } from '../stores/auth'
import * as yup from 'yup'
import BrandShowcase from '../assets/ai_new/shop_header.png'
import CoutureDisplay from '../assets/ai_new/hero_collage_4.png'

const auth = useAuthStore()
const email = ref('')
const emailError = ref('')
const loading = ref(false)
const error = ref(null)
const successMsg = ref(null)

const forgotSchema = yup.object({
  email: yup.string().email('INVALID EMAIL ADDRESS').required('EMAIL IS REQUIRED'),
})

const handleSubmit = async () => {
  emailError.value = ''
  try {
    await forgotSchema.validate({ email: email.value })
  } catch (validationError) {
    emailError.value = validationError.message
    return
  }
  loading.value = true
  error.value = null
  try {
    const res = await api.post('/auth/forgot-password', { email: email.value })
    successMsg.value = res.data.data 
    
    Swal.fire({
      icon: 'success',
      title: 'RESET LINK SENT',
      text: 'A password reset link has been sent to your email address.',
      background: '#080808',
      color: '#d4af37',
      confirmButtonColor: '#d4af37',
      customClass: {
         title: 'font-playfair italic uppercase tracking-tighter',
         popup: 'border border-[#d4af3722] rounded-none'
      }
    })
  } catch (err) {
    error.value = err.response?.data?.error || 'SEND FAILED'
    
    Swal.fire({
      icon: 'error',
      title: 'ERROR',
      text: error.value,
      background: '#080808',
      color: '#d4af37',
      confirmButtonColor: '#d4af37',
      customClass: {
         title: 'font-playfair italic uppercase tracking-tighter',
         popup: 'border border-[#d4af3722] rounded-none'
      }
    })
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  window.scrollTo(0, 0)
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

.animate-fade-in-up {
  animation: fadeInUp 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slow-zoom {
  from { transform: scale(1.1); }
  to { transform: scale(1); }
}
.animate-slow-zoom { animation: slow-zoom 20s linear infinite alternate; }

.font-playfair { font-family: 'Playfair Display', serif; }
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
