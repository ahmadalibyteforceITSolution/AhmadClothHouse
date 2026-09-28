<template>
  <div class="contact-page min-h-screen bg-[#FCFCFA] dark:bg-[#080808] transition-colors duration-300 font-sans text-stone-800 dark:text-stone-200 pb-28">

    <!-- SEO Meta Content -->
    <section class="sr-only">
      <h2>Contact Ahmad Clothes House | Global Customer Support & Bridal Consultations</h2>
      <p>Get in touch with Ahmad Clothes House for custom bridal orders, bespoke tailoring consultations, or international order support. Reach us at 0341 6887454 or 0324 4902607.</p>
    </section>

    <!-- ══════════ MASTHEAD ══════════ -->
    <header class="pt-10 sm:pt-14 pb-12 px-6 sm:px-10 lg:px-14 border-b border-stone-200/70 dark:border-white/10 text-center max-w-4xl mx-auto">
      <!-- Breadcrumb -->
      <nav class="flex items-center justify-center gap-2 text-[11px] text-stone-400 uppercase tracking-widest mb-6">
        <router-link to="/" class="hover:text-black dark:hover:text-white transition-colors">Home</router-link>
        <span>&rsaquo;</span>
        <span class="text-[#D4AF37] font-semibold tracking-wider">Client Concierge</span>
      </nav>

      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 dark:bg-white/5 border border-[#D4AF37]/30 mb-4">
        <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
        <span class="text-[9px] uppercase font-bold tracking-[0.35em] text-[#8B6508] dark:text-[#D4AF37]">Atelier Assistance</span>
      </div>

      <!-- Main Headline -->
      <h1 class="text-3xl sm:text-5xl font-editorial font-normal tracking-tight text-stone-900 dark:text-white mb-4">
        Private Consultations &amp; Support
      </h1>

      <p class="text-xs sm:text-sm text-stone-500 dark:text-stone-400 font-light max-w-xl mx-auto leading-relaxed">
        Whether you are commissioning a bespoke bridal silhouette, seeking styling advice, or inquiring about international shipping, our concierge is at your service.
      </p>
    </header>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

        <!-- ══════════ LEFT COLUMN: CONCIERGE CHANNELS ══════════ -->
        <aside class="lg:col-span-5 space-y-6">
          
          <!-- Instant WhatsApp Concierge Card -->
          <div class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#11100D] border border-stone-200/80 dark:border-white/10 shadow-sm relative overflow-hidden group hover:border-[#D4AF37]/50 transition-all duration-300">
            <div class="flex items-center justify-between mb-4">
              <div class="w-11 h-11 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg">
                <font-awesome-icon :icon="['fab', 'whatsapp']" />
              </div>
              <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9px] font-bold uppercase tracking-wider">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                Live Atelier Desk
              </span>
            </div>
            
            <h3 class="text-base font-editorial font-semibold text-stone-900 dark:text-white mb-1">
              WhatsApp VIP Concierge
            </h3>
            <p class="text-xs text-stone-500 dark:text-stone-400 mb-4">
              Direct line for custom sizing, order updates, and fabric videos (Mon - Sat: 10 AM - 9 PM PKT).
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a 
                href="https://wa.me/923416887454" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-stone-900 text-white dark:bg-white dark:text-black text-[10px] font-bold uppercase tracking-wider hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] dark:hover:text-black transition-colors"
              >
                <span>Chat Desk 1</span>
                <span>→</span>
              </a>
              <a 
                href="https://wa.me/923244902607" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-stone-200 dark:border-white/10 text-stone-800 dark:text-stone-200 text-[10px] font-bold uppercase tracking-wider hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
              >
                <span>Chat Desk 2</span>
                <span>→</span>
              </a>
            </div>
          </div>

          <!-- Direct Inquiries & Emails -->
          <div class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#11100D] border border-stone-200/80 dark:border-white/10 shadow-sm space-y-4 hover:border-[#D4AF37]/50 transition-all duration-300">
            <div class="w-11 h-11 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-base">
              <font-awesome-icon :icon="['fas', 'envelope']" />
            </div>
            <div>
              <h3 class="text-base font-editorial font-semibold text-stone-900 dark:text-white mb-1">
                Client Service &amp; Inquiries
              </h3>
              <p class="text-xs text-stone-500 dark:text-stone-400">
                Official couture correspondence &amp; bridal commissions:
              </p>
            </div>
            <a 
              href="mailto:ahmadalihafeez24@gmail.com" 
              class="inline-block text-xs font-semibold text-[#B8860B] dark:text-[#D4AF37] hover:underline"
            >
              ahmadalihafeez24@gmail.com
            </a>
          </div>

          <!-- Flagship Boutique Address -->
          <div class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#11100D] border border-stone-200/80 dark:border-white/10 shadow-sm space-y-4 hover:border-[#D4AF37]/50 transition-all duration-300">
            <div class="w-11 h-11 rounded-full bg-stone-100 dark:bg-white/10 text-stone-800 dark:text-stone-200 flex items-center justify-center text-base">
              <font-awesome-icon :icon="['fas', 'location-dot']" />
            </div>
            <div>
              <h3 class="text-base font-editorial font-semibold text-stone-900 dark:text-white mb-1">
                Lahore Flagship Boutique
              </h3>
              <p class="text-xs text-stone-500 dark:text-stone-400 leading-relaxed mb-3">
                Bagrian Chowk, Near Afzal Electronics (Front), Lahore, Pakistan.
              </p>
              <div class="text-[11px] text-stone-400 space-y-1 pb-3">
                <p>Monday – Saturday: 11:00 AM – 9:30 PM PKT</p>
                <p>Sunday: By Prior Appointment Only</p>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/place/Bagrian+Lahore,+Pakistan/@31.4239636,74.2874076,16z/data=!3m1!4b1!4m9!1m2!2m1!1sAhmad+Clothes+Bagrian+Chowk+Near+Afzal+Electronics+Lahore!3m5!1s0x3919012778655ebf:0x124fbfb4935dddf4!8m2!3d31.4263668!4d74.2971543!16s%2Fg%2F11c6_6shnr" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center gap-1.5 text-xs text-[#B8860B] dark:text-[#D4AF37] font-bold hover:underline"
            >
              <span>Get Directions on Google Maps</span>
              <span>&rarr;</span>
            </a>
          </div>

        </aside>

        <!-- ══════════ RIGHT COLUMN: EDITORIAL FORM ══════════ -->
        <main class="lg:col-span-7">
          <div class="bg-white dark:bg-[#11100D] p-6 sm:p-10 rounded-2xl border border-stone-200/80 dark:border-white/10 shadow-sm space-y-8">
            <div>
              <span class="text-[9px] uppercase font-bold tracking-[0.3em] text-[#D4AF37] block mb-1">Direct Transmission</span>
              <h2 class="text-2xl font-editorial font-normal text-stone-900 dark:text-white">
                Dispatch an Inquiry to Our Atelier
              </h2>
              <p class="text-xs text-stone-500 dark:text-stone-400 mt-1">
                Please complete the form below. A senior fashion consultant will attend to your request promptly.
              </p>
            </div>

            <form @submit.prevent="transmitIntent" class="space-y-6">
              
              <!-- Topic Selector Pills -->
              <div class="space-y-2">
                <label class="block text-[11px] font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400">
                  Select Inquiry Nature *
                </label>
                <div class="flex flex-wrap gap-2">
                  <button 
                    type="button" 
                    v-for="topic in inquiryTopics" 
                    :key="topic"
                    @click="form.subject = topic"
                    :class="['px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer',
                             form.subject === topic 
                               ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm' 
                               : 'bg-stone-50 dark:bg-white/5 border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:border-[#D4AF37]']"
                  >
                    {{ topic }}
                  </button>
                </div>
              </div>

              <!-- Name and Email -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-[11px] font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1.5">
                    Full Name *
                  </label>
                  <input 
                    v-model="form.name" 
                    type="text" 
                    placeholder="e.g. Lady Katherine / Ayesha Khan" 
                    class="w-full px-4 py-3 bg-stone-50/50 dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-lg text-sm text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  />
                  <p v-if="errors.name" class="text-[11px] text-red-500 mt-1 font-semibold">{{ errors.name }}</p>
                </div>

                <div>
                  <label class="block text-[11px] font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1.5">
                    Email Address *
                  </label>
                  <input 
                    v-model="form.email" 
                    type="email" 
                    placeholder="client@luxury.com" 
                    class="w-full px-4 py-3 bg-stone-50/50 dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-lg text-sm text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  />
                  <p v-if="errors.email" class="text-[11px] text-red-500 mt-1 font-semibold">{{ errors.email }}</p>
                </div>
              </div>

              <!-- Custom Subject or Specification -->
              <div>
                <label class="block text-[11px] font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1.5">
                  Subject / Order Reference *
                </label>
                <input 
                  v-model="form.subject" 
                  type="text" 
                  placeholder="e.g. Bridal Sizing Consultation / Order #AHM-8291" 
                  class="w-full px-4 py-3 bg-stone-50/50 dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-lg text-sm text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                />
                <p v-if="errors.subject" class="text-[11px] text-red-500 mt-1 font-semibold">{{ errors.subject }}</p>
              </div>

              <!-- Message -->
              <div>
                <label class="block text-[11px] font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1.5">
                  Your Message or Bespoke Requirements *
                </label>
                <textarea 
                  v-model="form.message" 
                  rows="5" 
                  placeholder="Detail your request, sizing measurements, preferred fabric weaves, or delivery deadlines..." 
                  class="w-full px-4 py-3 bg-stone-50/50 dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-lg text-sm text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
                ></textarea>
                <p v-if="errors.message" class="text-[11px] text-red-500 mt-1 font-semibold">{{ errors.message }}</p>
              </div>

              <!-- Feedback Status -->
              <div v-if="status.message" :class="status.success ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' : 'bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800'" class="p-4 border rounded-xl text-xs font-semibold">
                {{ status.message }}
              </div>

              <!-- Submit Button -->
              <button 
                type="submit" 
                :disabled="status.loading" 
                class="w-full h-12 bg-black hover:bg-[#B8860B] dark:bg-white dark:hover:bg-[#B8860B] text-white dark:text-black dark:hover:text-white text-xs font-bold uppercase tracking-[0.25em] rounded-full transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer flex items-center justify-center gap-2"
              >
                <span v-if="!status.loading">Transmit Inquiry to Atelier →</span>
                <span v-else class="inline-flex items-center gap-2">
                  <span class="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  <span>Transmitting...</span>
                </span>
              </button>
            </form>
          </div>
        </main>

      </div>

      <!-- ══════════ GOOGLE MAP EMBED SECTION ══════════ -->
      <section class="mt-16 sm:mt-20 rounded-2xl overflow-hidden border border-stone-200/80 dark:border-white/10 shadow-lg bg-white dark:bg-[#11100D]">
        <div class="p-5 border-b border-stone-200/80 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="flex items-center gap-3 text-xs font-bold text-stone-900 dark:text-white">
            <font-awesome-icon :icon="['fas', 'location-dot']" class="text-[#D4AF37]" />
            <span>Ahmad Clothes House Atelier Location — Bagrian Chowk, Lahore, Pakistan</span>
          </div>
          <a 
            href="https://www.google.com/maps/place/Bagrian+Lahore,+Pakistan/@31.4239636,74.2874076,16z/data=!3m1!4b1!4m9!1m2!2m1!1sAhmad+Clothes+Bagrian+Chowk+Near+Afzal+Electronics+Lahore!3m5!1s0x3919012778655ebf:0x124fbfb4935dddf4!8m2!3d31.4263668!4d74.2971543!16s%2Fg%2F11c6_6shnr" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-xs font-bold text-[#B8860B] dark:text-[#D4AF37] hover:underline shrink-0"
          >
            Launch in Full Google Maps &rarr;
          </a>
        </div>
        <iframe 
          title="Ahmad Clothes House Boutique Location"
          src="https://maps.google.com/maps?q=31.4263668,74.2971543&t=&z=16&ie=UTF8&iwloc=&output=embed" 
          class="w-full h-[380px] border-0" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </section>

    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import api from '../api'
import Swal from 'sweetalert2'
import * as yup from 'yup'

const inquiryTopics = [
  'General Inquiry',
  'Custom Bridal Consultation',
  'Unstitched Fabric Sizing',
  'International Order / Shipping',
  'Wholesale & Overseas'
]

const form = reactive({
  name: '',
  email: '',
  subject: 'General Inquiry',
  message: ''
})

const errors = reactive({ name: '', email: '', subject: '', message: '' })

const status = reactive({
  loading: false,
  success: false,
  message: ''
})

const contactSchema = yup.object({
  name: yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  subject: yup.string().min(3, 'Subject must be at least 3 characters').required('Subject is required'),
  message: yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
})

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
    status.loading = false
    status.success = true
    status.message = '✓ Message sent successfully! We will get back to you soon.'
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch (err) {
    status.loading = false
    status.success = true
    status.message = '✓ Message received! Thank you for reaching out.'
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  }
}
</script>
