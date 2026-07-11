<template>
   <div class="min-h-screen bg-[#fafaf8] dark:bg-[#050505] transition-colors duration-700 font-sans selection:bg-[var(--primary-gold)]/30">

      <!-- SEO CONTENT (VISUALLY HIDDEN) -->
      <section class="sr-only">
         <h2>Contact Ahmad Cloth House | Global Customer Support & Consultations</h2>
         <p>Get in touch with Ahmad Cloth House for custom bridal orders, fashion consultations, or international order support. Our team is available for global consultations and design support from our flagship studio in Lahore. Reach us at 0341 6887454 or 0324 4902607.</p>
      </section>

      <!-- Premium Cinematic Contact Hero -->
      <section class="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#fafaf8] dark:bg-[#050505]">
        <!-- Background with slow pan animation -->
        <div class="absolute inset-0 z-0">
          <img :src="BridalHighlight" alt="Contact AhmadClothesHouse - Luxury Fashion Consulting" 
               class="w-full h-full object-cover opacity-100 animate-slow-zoom" />
          <!-- Very subtle fade to match page background at the bottom -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#fafaf8] via-transparent to-transparent dark:from-[#050505]"></div>
        </div>

        <div class="max-w-4xl mx-auto px-6 w-full relative z-10 flex flex-col items-center">
          <!-- Glass Card for Text -->
          <div class="w-full bg-black/40 backdrop-blur-md border border-white/10 p-10 md:p-14 text-center rounded-sm shadow-2xl animate-reveal">
            <div class="flex items-center justify-center gap-4 mb-6">
              <div class="h-px w-8 bg-[var(--primary-gold)]"></div>
              <span class="text-[var(--primary-gold)] font-bold text-[10px] uppercase tracking-[0.6em]">GET IN TOUCH</span>
              <div class="h-px w-8 bg-[var(--primary-gold)]"></div>
            </div>

            <h1 class="text-4xl md:text-7xl font-playfair italic text-white leading-none tracking-tight mb-8">
              Couture <br>
              <span class="text-[var(--primary-gold)] not-italic font-sans tracking-[0.2em] font-light text-2xl md:text-4xl block mt-2">CONSULTATION</span>
            </h1>

            <p class="text-xs md:text-sm text-white/90 font-light tracking-[0.15em] max-w-xl mx-auto leading-relaxed">
              Reach our exclusive design hub for custom bridal orders, bespoke couture consultations, or collection inquiries.
            </p>
          </div>
        </div>
      </section>

      <div class="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-20 py-24 relative">

         <!-- Details & Identity -->
         <div class="space-y-16 animate-reveal-left">

            <div class="group">
               <h3 class="text-[9px] font-bold uppercase tracking-[0.5em] text-[var(--primary-gold)] mb-6 flex items-center gap-3">
                  <font-awesome-icon icon="fa-solid fa-paper-plane" class="text-[7px]" />
                  FASHION SUPPORT
               </h3>
               <p
                  class="text-xl font-light uppercase tracking-wide text-gray-900 dark:text-white leading-relaxed font-sans group-hover:pl-4 transition-all duration-700 border-l-0 group-hover:border-l border-[var(--primary-gold)]/40">
                  +92 341 6887454<br>+92 324 4902607<br><span class="lowercase">ahmadalihafeez24@gmail.com</span>
               </p>
            </div>

            <div class="group">
               <h3 class="text-[9px] font-bold uppercase tracking-[0.5em] text-[var(--primary-gold)] mb-6 flex items-center gap-3">
                  <font-awesome-icon icon="fa-solid fa-location-dot" class="text-[7px]" />
                  FLAGSHIP STUDIO
               </h3>
               <p
                  class="text-xl font-light uppercase tracking-wide text-gray-900 dark:text-white leading-relaxed font-sans group-hover:pl-4 transition-all duration-700 border-l-0 group-hover:border-l border-[var(--primary-gold)]/40">
                  Wapda Town, Ameer Chowk<br>Lahore, Pakistan
               </p>
            </div>

            <div class="flex items-center gap-4 pt-6 border-t border-stone-200 dark:border-white/5">
               <a href="https://www.instagram.com/ahmadclothfabrics_aroma/" target="_blank" rel="noopener"
                  class="w-12 h-12 rounded-full border border-stone-200 dark:border-white/10 flex items-center justify-center text-[var(--primary-gold)] hover:bg-[var(--primary-gold)] hover:text-white transition-all duration-500 cursor-pointer hover:border-[var(--primary-gold)] transform hover:-translate-y-1 group">
                  <font-awesome-icon icon="fa-brands fa-instagram" class="text-base group-hover:scale-115 transition-transform" />
               </a>
               <a href="https://www.facebook.com/profile.php?id=61573629329844" target="_blank" rel="noopener"
                  class="w-12 h-12 rounded-full border border-stone-200 dark:border-white/10 flex items-center justify-center text-[var(--primary-gold)] hover:bg-[var(--primary-gold)] hover:text-white transition-all duration-500 cursor-pointer hover:border-[var(--primary-gold)] transform hover:-translate-y-1 group">
                  <font-awesome-icon icon="fa-brands fa-facebook-f" class="text-base group-hover:scale-115 transition-transform" />
               </a>
               <a href="https://www.youtube.com/@ahmadfabrics_aroma" target="_blank" rel="noopener"
                  class="w-12 h-12 rounded-full border border-stone-200 dark:border-white/10 flex items-center justify-center text-[var(--primary-gold)] hover:bg-red-600 hover:text-white transition-all duration-500 cursor-pointer hover:border-red-600 transform hover:-translate-y-1 group">
                  <font-awesome-icon icon="fa-brands fa-youtube" class="text-base group-hover:scale-115 transition-transform" />
               </a>
               <a href="https://www.tiktok.com/@theahmadfabrices_aroma" target="_blank" rel="noopener"
                  class="w-12 h-12 rounded-full border border-stone-200 dark:border-white/10 flex items-center justify-center text-[var(--primary-gold)] hover:bg-black hover:text-white transition-all duration-500 cursor-pointer hover:border-black transform hover:-translate-y-1 group">
                  <font-awesome-icon icon="fa-brands fa-tiktok" class="text-base group-hover:scale-115 transition-transform" />
               </a>
            </div>
         </div>

         <!-- Submission Terminal -->
         <div class="lg:col-span-2 relative animate-reveal-right">
            <div
               class="absolute -right-20 -top-20 w-96 h-96 bg-[var(--primary-gold)]/5 blur-[120px] rounded-full pointer-events-none">
            </div>

            <form @submit.prevent="transmitIntent"
               class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 relative z-10">
               <div class="space-y-2">
                  <label class="text-[9px] font-bold text-stone-400 uppercase tracking-[0.4em]">YOUR NAME</label>
                  <input v-model="form.name" type="text" placeholder="e.g. Julian Vance" class="luxury-input"
                    :class="{ 'border-red-500/60': errors.name }">
                  <p v-if="errors.name" class="text-[8px] text-red-500 font-semibold uppercase tracking-[0.1em] pt-1">{{ errors.name }}</p>
               </div>
               <div class="space-y-2">
                  <label class="text-[9px] font-bold text-stone-400 uppercase tracking-[0.4em]">EMAIL ADDRESS</label>
                  <input v-model="form.email" type="email" placeholder="hello@ahmadcloths.com"
                     class="luxury-input" :class="{ 'border-red-500/60': errors.email }">
                  <p v-if="errors.email" class="text-[8px] text-red-500 font-semibold uppercase tracking-[0.1em] pt-1">{{ errors.email }}</p>
               </div>
               <div class="col-span-1 md:col-span-2 space-y-2">
                  <label class="text-[9px] font-bold text-stone-400 uppercase tracking-[0.4em]">SUBJECT</label>
                  <input v-model="form.subject" type="text" placeholder="Bridal / Couture / Collection Inquiry"
                     class="luxury-input" :class="{ 'border-red-500/60': errors.subject }">
                  <p v-if="errors.subject" class="text-[8px] text-red-500 font-semibold uppercase tracking-[0.1em] pt-1">{{ errors.subject }}</p>
               </div>
               <div class="col-span-1 md:col-span-2 space-y-2">
                  <label class="text-[9px] font-bold text-stone-400 uppercase tracking-[0.4em]">YOUR STORY (MESSAGE)</label>
                  <textarea v-model="form.message" rows="5" placeholder="Tell us about your style requirements..."
                     class="luxury-input min-h-[120px] resize-none" :class="{ 'border-red-500/60': errors.message }"></textarea>
                  <p v-if="errors.message" class="text-[8px] text-red-500 font-semibold uppercase tracking-[0.1em] pt-1">{{ errors.message }}</p>
               </div>

               <div class="col-span-1 md:col-span-2 flex flex-col items-center md:items-start pt-6">
                  <transition name="fade">
                     <p v-if="status.message" :class="status.success ? 'text-emerald-500 border-emerald-500/30 bg-emerald-500/5' : 'text-red-500 border-red-500/30 bg-red-500/5'"
                        class="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 px-4 py-2 border rounded">
                        {{ status.message }}
                      </p>
                  </transition>

                  <button type="submit" :disabled="status.loading"
                     class="bg-black dark:bg-white text-white dark:text-black px-12 py-4 font-bold text-[10px] uppercase tracking-[0.4em] hover:bg-[var(--deep-burgundy)] dark:hover:bg-[var(--primary-gold)] transition-all duration-300 disabled:opacity-20 flex items-center gap-4 group">
                     <span>{{ status.loading ? 'SENDING...' : 'SEND INQUIRY' }}</span>
                     <font-awesome-icon icon="fa-solid fa-arrow-right"
                        class="text-[8px] group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>
            </form>
         </div>
      </div>

      <!-- ═══════════════════════════════════════════
           BOUTIQUE LOCATIONS (NEW)
      ═══════════════════════════════════════════ -->
      <section class="bg-white dark:bg-[#080808] py-40 px-8 border-t border-gray-100 dark:border-white/5">
         <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
               <div class="space-y-10">
                  <div class="atelier-tag">THE BOUTIQUES</div>
                  <h2 class="text-4xl md:text-5xl font-light font-playfair uppercase text-gray-900 dark:text-white italic leading-tight">
                     Visit our <br> <span class="text-[var(--primary-gold)] not-italic font-sans">SANCTUARIES</span>
                  </h2>
                  <p class="text-stone-500 dark:text-stone-400 text-sm leading-relaxed font-light max-w-xs">
                     Step into our world of artisanal delights. Each boutique is designed to be a sanctuary of style and elegance.
                  </p>
               </div>

               <div v-for="loc in boutiques" :key="loc.city" class="space-y-8 group">
                  <div class="relative overflow-hidden aspect-video mb-8">
                     <img :src="loc.image" :alt="loc.city" class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" />
                     <div class="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors"></div>
                     <div class="absolute bottom-6 left-6 text-white font-black text-xs tracking-[0.4em] uppercase">{{ loc.city }}</div>
                  </div>
                  <div class="space-y-4">
                     <p class="text-gray-900 dark:text-white font-playfair italic text-xl uppercase tracking-wider">{{ loc.address }}</p>
                     <p class="text-stone-500 dark:text-stone-400 text-[10px] uppercase tracking-[0.3em]">{{ loc.hours }}</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <!-- ═══════════════════════════════════════════
           CONCIERGE SERVICES (NEW)
      ═══════════════════════════════════════════ -->
      <section class="py-40 bg-[#fafaf8] dark:bg-[#050505]">
         <div class="max-w-7xl mx-auto px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
               <div class="space-y-12">
                  <div class="atelier-tag">EXCLUSIVE SERVICES</div>
                  <h2 class="text-5xl md:text-7xl font-black font-playfair uppercase text-gray-900 dark:text-white leading-[0.9]">
                     Beyond the <br> <span class="text-amber-500 italic">Ordinary</span>
                  </h2>
                  <div class="grid grid-cols-1 gap-12">
                     <div v-for="service in services" :key="service.title" class="flex gap-8 group">
                        <div class="w-12 h-12 rounded-full border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-700 shrink-0">
                           <font-awesome-icon :icon="service.icon" />
                        </div>
                        <div class="space-y-2">
                           <h3 class="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white">{{ service.title }}</h3>
                           <p class="text-stone-500 dark:text-stone-400 text-xs font-light leading-relaxed">{{ service.desc }}</p>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div class="relative aspect-square">
                  <div class="absolute inset-0 border border-amber-500/10 m-12 z-10 pointer-events-none"></div>
                  <img :src="BridalHighlight" class="w-full h-full object-cover" alt="Luxury Fashion Design" />
                  <div class="absolute -bottom-10 -right-10 bg-black p-12 hidden lg:block">
                     <p class="text-amber-500 font-playfair italic text-4xl mb-4">"Pure Art"</p>
                     <p class="text-white font-black text-[9px] uppercase tracking-[0.4em]">The Ahmadcloths Ethos</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

   </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import api from '../api'
import Swal from 'sweetalert2'
import { useAuthStore } from '../stores/auth'
import * as yup from 'yup'
import BridalHighlight from "../assets/ai/bridal_highlight.png"


const auth = useAuthStore()
const form = reactive({
   name: '',
   email: '',
   subject: '',
   message: ''
})

const errors = reactive({ name: '', email: '', subject: '', message: '' })

const status = reactive({
   loading: false,
   success: false,
   message: ''
})

const contactSchema = yup.object({
  name: yup.string().min(2, 'NAME MUST BE AT LEAST 2 CHARACTERS').required('NAME IS REQUIRED'),
  email: yup.string().email('INVALID EMAIL ADDRESS').required('EMAIL IS REQUIRED'),
  subject: yup.string().min(3, 'SUBJECT MUST BE AT LEAST 3 CHARACTERS').required('SUBJECT IS REQUIRED'),
  message: yup.string().min(10, 'MESSAGE MUST BE AT LEAST 10 CHARACTERS').required('MESSAGE IS REQUIRED'),
})

const boutiques = [
   {
      city: 'Lahore',
      address: 'Wapda Town, Ameer Chowk',
      hours: 'Mon-Sun: 10:00 - 22:00',
      image: BridalHighlight
   }
]

const services = [
   {
      title: 'Bespoke Bridal',
      icon: 'fa-solid fa-gem',
      desc: 'Tailored couture experiences for high-end weddings, ensuring every detail reflects your unique elegance.'
   },
   {
      title: 'Private Consultations',
      icon: 'fa-solid fa-user-tie',
      desc: 'Exclusive, personalized design sessions for our most valued clients and fashion enthusiasts.'
   },
   {
      title: 'Global Delivery',
      icon: 'fa-solid fa-earth-americas',
      desc: 'Our luxury collections delivered to your doorstep, anywhere in the world, with premium care.'
   }
]

const transmitIntent = async () => {
   errors.name = ''
   errors.email = ''
   errors.subject = ''
   errors.message = ''
   try {
     await contactSchema.validate(form, { abortEarly: false })
   } catch (validationError) {
     validationError.inner.forEach(err => {
       errors[err.path] = err.message
     })
     return
   }
   status.loading = true
   status.message = ''

   try {
      const res = await api.post('/contact', form)
      if (res.data.success) {
         status.success = true
         status.message = 'MESSAGE RECEIVED: THANK YOU'

         Swal.fire({
            icon: 'success',
            title: 'SWEET SUCCESS',
            text: 'Our team will review your inquiry and get back to you shortly.',
            background: auth.isDark ? '#080808' : '#fafaf8',
            color: auth.isDark ? '#d4af37' : '#000',
            confirmButtonColor: '#d4af37',
            customClass: {
               title: 'font-playfair italic uppercase tracking-tighter',
               popup: 'border border-[#d4af3722] rounded-none'
            }
         })

         form.name = ''
         form.email = ''
         form.subject = ''
         form.message = ''
      }
   } catch (err) {
      status.success = false
      status.message = err.response?.data?.error || 'ERROR: MESSAGE NOT SENT'

      Swal.fire({
         icon: 'error',
         title: 'SEND FAILURE',
         text: status.message,
         background: auth.isDark ? '#080808' : '#fafaf8',
         color: auth.isDark ? '#d4af37' : '#000',
         confirmButtonColor: '#d4af37',
         customClass: {
            title: 'font-playfair italic uppercase tracking-tighter',
            popup: 'border border-[#d4af3722] rounded-none'
         }
      })
   } finally {
      status.loading = false
   }
}

onMounted(() => {
   window.scrollTo(0, 0)
})
</script>

<style scoped>
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

.luxury-input::placeholder {
  color: #aaa;
}

.luxury-input:focus {
  border-color: #c9973a;
  box-shadow: 0 0 0 3px rgba(201, 151, 58, 0.08);
}

.dark .luxury-input {
  background: #111;
  border-color: #333;
  color: #eee;
}

.dark .luxury-input::placeholder {
  color: #555;
}

.dark .luxury-input:focus {
  border-color: #c9973a;
  box-shadow: 0 0 0 3px rgba(201, 151, 58, 0.12);
}

.shadow-3xl {
   box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.2);
}

.dark .shadow-3xl {
   box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.6);
}

.animate-reveal-left {
   animation: reveal-left 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

.animate-reveal-right {
   animation: reveal-right 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

@keyframes reveal-left {
   from {
      opacity: 0;
      transform: translateX(-40px);
   }

   to {
      opacity: 1;
      transform: translateX(0);
   }
}

@keyframes reveal-right {
   from {
      opacity: 0;
      transform: translateX(40px);
   }

   to {
      opacity: 1;
      transform: translateX(0);
   }
}

.font-playfair {
   font-family: 'Playfair Display', serif;
}

.animate-slow-zoom {
   animation: slow-zoom 30s infinite linear alternate;
}

@keyframes slow-zoom {
   from { transform: scale(1); }
   to { transform: scale(1.1); }
}

.animate-reveal {
   animation: reveal-bottom 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

.animate-reveal-delay {
   animation: reveal-bottom 1.5s cubic-bezier(0.19, 1, 0.22, 1) 0.3s forwards;
   opacity: 0;
}

@keyframes reveal-bottom {
   from {
      opacity: 0;
      transform: translateY(30px);
   }
   to {
      opacity: 1;
      transform: translateY(0);
   }
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
