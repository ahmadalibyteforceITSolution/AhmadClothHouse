<template>
   <div class="min-h-screen bg-[#fafaf8] dark:bg-[#050505] transition-colors duration-700 font-sans selection:bg-[var(--primary-gold)]/30">

      <!-- SEO CONTENT (VISUALLY HIDDEN) -->
      <section class="sr-only">
         <h2>Contact Ahmadcloths house | Luxury Fashion Inquiries</h2>
         <p>Get in touch with Ahmadcloths house for custom bridal orders, fashion consultations, or any questions about our luxury apparel. We are here to help make your style moments extraordinary.</p>
         <ul>
            <li>Custom Bridal Inquiries</li>
            <li>Fashion Consultations</li>
            <li>Luxury Gift Orders</li>
            <li>Boutique Support & Services</li>
         </ul>
      </section>

      <!-- Contact Header - Minimal & Warm -->
      <header class="pt-40 pb-24 px-8 max-w-7xl mx-auto border-b border-[#d4af3711] mb-20 relative">
         <div class="absolute -top-10 -left-10 w-64 h-64 bg-[var(--primary-gold)]/5 blur-[100px] rounded-full pointer-events-none">
         </div>

         <div class="flex flex-col md:flex-row justify-between items-end gap-16 relative z-10">
            <div class="max-w-2xl animate-reveal-left">
               <h1 class="text-2xl sm:text-3xl font-playfair tracking-[0.3em] font-light text-[var(--luxury-black)] dark:text-white uppercase mb-10">AHMADCLOTHS HOUSE</h1>
               <div class="flex items-center gap-3 mb-6">
                  <div class="h-[1px] w-12 bg-[var(--primary-gold)]"></div>
                  <span
                     class="text-[var(--primary-gold)] font-bold text-[9px] uppercase tracking-[0.5em]">DESIGN
                     CONSULTATION</span>
               </div>
               <h1
                  class="text-6xl md:text-9xl font-light uppercase tracking-tighter leading-[0.85] text-gray-900 dark:text-white font-playfair italic underline decoration-[var(--primary-gold)]/10 underline-offset-[20px]">
                  Collaborate <br>
                  <span class="text-[var(--primary-gold)] font-sans tracking-[0.2em] font-light ml-4 uppercase not-italic">with
                     Ahmadcloths</span>
               </h1>
            </div>
            <div class="max-w-xs text-right animate-reveal-right">
               <p
                  class="text-[10px] text-stone-400 font-bold uppercase tracking-[0.4em] leading-loose italic opacity-60">
                  Reach our design hub for custom bridal orders, couture consultations, or exclusive collection inquiries.
               </p>
            </div>
         </div>
      </header>

      <div class="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-32 pb-48 relative">

         <!-- Details & Identity -->
         <div class="space-y-24 animate-reveal-left">

            <div class="group">
               <h3 class="text-[9px] font-bold uppercase tracking-[0.5em] text-[var(--primary-gold)] mb-8 flex items-center gap-3">
                  <font-awesome-icon icon="fa-solid fa-paper-plane" class="text-[7px]" />
                  FASHION SUPPORT
               </h3>
               <p
                  class="text-2xl font-light uppercase tracking-tighter text-gray-900 dark:text-white leading-tight font-playfair italic group-hover:pl-4 transition-all duration-700 border-l-0 group-hover:border-l border-[var(--primary-gold)]/40">
                  +92 341 6887454<br>ahmadalihafeez24@gmail.com
               </p>
            </div>

            <div class="group">
               <h3 class="text-[9px] font-bold uppercase tracking-[0.5em] text-[var(--primary-gold)] mb-8 flex items-center gap-3">
                  <font-awesome-icon icon="fa-solid fa-location-dot" class="text-[7px]" />
                  FLAGSHIP STUDIO
               </h3>
               <p
                  class="text-2xl font-light uppercase tracking-tighter text-gray-900 dark:text-white leading-tight font-playfair italic group-hover:pl-4 transition-all duration-700 border-l-0 group-hover:border-l border-[var(--primary-gold)]/40">
                  Wapda Town, Ameer Chowk<br>Lahore, Pakistan
               </p>
            </div>

            <div class="flex items-center gap-6 pt-10 border-t border-[#d4af3711]">
               <div v-for="s in [
                  { n: 'IG', i: 'fa-brands fa-instagram' },
                  { n: 'TW', i: 'fa-brands fa-x-twitter' },
                  { n: 'IN', i: 'fa-brands fa-linkedin-in' }
               ]" :key="s.n"
                  class="w-14 h-14 rounded-full border border-[#d4af3711] flex items-center justify-center text-[var(--primary-gold)] hover:bg-[var(--primary-gold)] hover:text-white transition-all duration-700 cursor-pointer shadow-none hover:shadow-2xl hover:border-[var(--primary-gold)] transform hover:-translate-y-2">
                  <font-awesome-icon :icon="s.i" class="text-lg" />
               </div>
            </div>
         </div>

         <!-- Submission Terminal -->
         <div class="lg:col-span-2 relative animate-reveal-right">
            <div
               class="absolute -right-20 -top-20 w-96 h-96 bg-[var(--primary-gold)]/5 blur-[120px] rounded-full pointer-events-none">
            </div>

            <form @submit.prevent="transmitIntent"
               class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 relative z-10">
               <div class="space-y-4">
                  <label class="text-[9px] font-bold text-stone-400 uppercase tracking-[0.4em]">YOUR NAME</label>
                  <input v-model="form.name" type="text" placeholder="E.G. JULIAN VANCE" class="luxury-input" required>
               </div>
               <div class="space-y-4">
                  <label class="text-[9px] font-bold text-stone-400 uppercase tracking-[0.4em]">EMAIL ADDRESS</label>
                  <input v-model="form.email" type="email" placeholder="HELLO@AHMADCLOTHS.COM"
                     class="luxury-input lowercase" required>
               </div>
               <div class="col-span-1 md:col-span-2 space-y-4">
                  <label class="text-[9px] font-bold text-stone-400 uppercase tracking-[0.4em]">SUBJECT</label>
                  <input v-model="form.subject" type="text" placeholder="BRIDAL / COUTURE / COLLECTION INQUIRY"
                     class="luxury-input" required>
               </div>
               <div class="col-span-1 md:col-span-2 space-y-4">
                  <label class="text-[9px] font-bold text-stone-400 uppercase tracking-[0.4em]">YOUR STORY (MESSAGE)</label>
                  <textarea v-model="form.message" rows="6" placeholder="TELL US ABOUT YOUR STYLE REQUIREMENTS..."
                     class="luxury-input min-h-[150px] resize-none" required></textarea>
               </div>

               <div class="col-span-1 md:col-span-2 flex flex-col items-center md:items-start pt-10">
                  <transition name="fade">
                     <p v-if="status.message" :class="status.success ? 'text-emerald-500' : 'text-red-500'"
                        class="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 px-6 py-3 border border-current bg-current/5 animate-reveal">
                        {{ status.message }}
                     </p>
                  </transition>

                  <button type="submit" :disabled="status.loading"
                     class="bg-black dark:bg-[var(--primary-gold)] text-white px-20 py-6 rounded-none font-bold text-[10px] uppercase tracking-[0.5em] shadow-3xl hover:bg-[var(--deep-burgundy)] active:scale-95 transition-all duration-700 disabled:opacity-20 flex items-center gap-6 group">
                     <span>{{ status.loading ? 'SENDING...' : 'SEND INQUIRY' }}</span>
                     <font-awesome-icon icon="fa-solid fa-arrow-right"
                        class="text-[8px] group-hover:translate-x-2 transition-transform" />
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
                     <img :src="loc.image" :alt="loc.city" class="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" />
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
                  <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1000&auto=format&fit=crop" class="w-full h-full object-cover grayscale" alt="Luxury Fashion Design" />
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
const Fugible = "https://loremflickr.com/200/80/fashion,logo?lock=1"

const auth = useAuthStore()
const form = reactive({
   name: '',
   email: '',
   subject: '',
   message: ''
})

const status = reactive({
   loading: false,
   success: false,
   message: ''
})

const boutiques = [
   {
      city: 'London',
      address: '24 Savile Row, Mayfair',
      hours: 'Mon-Sat: 09:00 - 20:00',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&auto=format&fit=crop'
   },
   {
      city: 'Paris',
      address: '12 Rue Royale, 8th Arr.',
      hours: 'Mon-Sun: 10:00 - 19:00',
      image: 'https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?w=800&auto=format&fit=crop'
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
   background: transparent;
   border: none;
   border-bottom: 1px solid #d4af3722;
   padding: 20px 0;
   font-size: 14px;
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
   letter-spacing: 0.3em;
}

.dark .luxury-input::placeholder {
   color: #222;
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

.fade-enter-active,
.fade-leave-active {
   transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
   opacity: 0;
}
</style>
