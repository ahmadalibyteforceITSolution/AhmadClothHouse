<template>
  <div class="h-screen flex items-center justify-center p-8 relative overflow-hidden bg-[#050505] selection:bg-amber-500/30 scrollbar-none">
    
    <!-- Ultra Cinematic Background -->
    <div class="absolute inset-0">
       <div class="absolute inset-0 bg-black/60 z-10"></div>
       <img 
          :src="Fugible3" 
          class="w-full h-full object-cover scale-110 animate-slow-zoom"
          alt="AHMADCLOTHESFABRICS"
       >
    </div>

    <!-- Centered Recover Card (Glass) -->
    <div class="max-w-md w-full bg-black/40 backdrop-blur-3xl border border-white/10 p-16 shadow-[0_50px_100px_rgba(0,0,0,1)] relative z-20 animate-reveal group">
      
      <!-- Aesthetic Stamp -->
      <div class="absolute -top-12 -left-12 w-24 h-24 border border-amber-500/20 bg-[#080808] flex items-center justify-center p-4 shadow-2xl group-hover:rotate-[360deg] transition-transform duration-[3s]">
         <img :src="Fugible" alt="Logo" class="w-full h-auto" />
      </div>

      <div class="text-center mb-16">
        <h1 class="text-3xl font-black uppercase tracking-tighter text-white mb-4 font-playfair italic underline decoration-amber-500/10 underline-offset-8">Reset Password</h1>
        <p class="text-[9px] font-black uppercase text-amber-500 tracking-[0.6em] opacity-40">PASSWORD_RECOVERY</p>
      </div>

      <div v-if="successMsg" class="text-center space-y-10 animate-reveal">
          <div class="w-20 h-20 border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 rounded-full flex items-center justify-center mx-auto text-3xl shadow-3xl animate-pulse">
             <font-awesome-icon icon="fa-solid fa-paper-plane" />
          </div>
          <p class="text-[10px] font-black uppercase tracking-[0.4em] leading-loose text-white px-6">
            {{ successMsg.toUpperCase() }}
          </p>
          <div class="pt-10 border-t border-white/5">
             <router-link to="/login" class="bg-amber-600 text-white px-12 py-5 text-[9px] font-black uppercase tracking-[0.4em] shadow-3xl hover:bg-amber-500 transition-all active:scale-95">RETURN TO LOGIN</router-link>
          </div>
      </div>

      <form v-else @submit.prevent="handleSubmit" class="space-y-12">
        <div class="space-y-4">
          <label class="text-[8px] font-black uppercase text-stone-500 tracking-[0.4em] block pl-1">EMAIL ADDRESS</label>
          <input 
            v-model="email"
            type="email" 
            placeholder="HELLO@AHMADCLOTHS.COM" 
            class="luxury-input-glass lowercase"
            :class="{ 'border-red-500/60': emailError }"
          >
          <p v-if="emailError" class="text-[8px] text-red-500 font-black uppercase tracking-[0.3em] pt-1">{{ emailError }}</p>
        </div>

        <transition name="fade">
           <p v-if="error" class="text-[9px] text-red-600 font-black uppercase tracking-[0.3em] text-center bg-red-500/5 py-4 border border-red-500/20">{{ error.toUpperCase() }}</p>
        </transition>

        <button 
          :disabled="loading"
          class="w-full bg-amber-600 text-white py-6 rounded-none font-black uppercase tracking-[0.4em] text-[10px] hover:bg-amber-500 transition-all shadow-3xl active:scale-95 disabled:opacity-20 flex items-center justify-center gap-6 group"
        >
          <span>{{ loading ? 'SENDING...' : 'SEND RESET LINK' }}</span>
          <font-awesome-icon icon="fa-solid fa-bolt" class="text-[8px] group-hover:scale-125 transition-transform" />
        </button>
      </form>

      <div class="mt-12 text-center pt-10 border-t border-white/5">
        <router-link to="/login" class="text-[10px] text-amber-500 font-black uppercase tracking-[0.4em] border-b border-amber-500/10 hover:border-amber-500 transition-all">BACK TO LOGIN</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../api'
import Swal from 'sweetalert2'
import { useAuthStore } from '../stores/auth'
import * as yup from 'yup'
const Fugible = "https://loremflickr.com/200/80/fashion,logo?lock=1"
const Fugible3 = "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1600&auto=format&fit=crop"

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
.luxury-input-glass {
  width: 100%;
  background: rgba(255,255,255,0.03);
  border: none;
  border-bottom: 1px solid rgba(212, 175, 55, 0.15);
  padding: 16px 12px;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  outline: none;
  transition: all 0.5s ease;
  color: white;
}
.luxury-input-glass:focus { border-color: #d4af37; background: rgba(255,255,255,0.08); }
.luxury-input-glass::placeholder { color: rgba(255,255,255,0.1); font-weight: 400; font-size: 10px; }

.shadow-3xl {
  box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.8);
}

.animate-reveal { animation: reveal-bottom 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
@keyframes reveal-bottom {
  from { opacity: 0; transform: translateY(40px); }
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
