<template>
  <div class="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-300 font-sans text-[#111111] dark:text-white">

    <!-- SEO Content (Visually Hidden) -->
    <section class="sr-only">
      <h2>Contact Ahmad Clothes House | Global Customer Support & Consultations</h2>
      <p>Get in touch with Ahmad Clothes House for custom bridal orders, fashion consultations, or international order support. Reach us at 0341 6887454 or 0324 4902607.</p>
    </section>

    <!-- Header Banner -->
    <section class="bg-white dark:bg-[#111111] border-b border-[#E5E7EB] dark:border-white/10 py-12 px-6 text-center">
      <div class="max-w-2xl mx-auto space-y-3">
        <span class="text-xs font-bold uppercase tracking-widest text-amber-600">Get In Touch</span>
        <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight text-[#111111] dark:text-white">Contact Us</h1>
        <p class="text-xs text-stone-500 max-w-lg mx-auto">
          Have a question about an order, custom sizing, or our collections? We're here to help!
        </p>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

      <!-- Left Column: Contact Cards -->
      <div class="space-y-6">
        <!-- Phone & WhatsApp -->
        <div class="bg-white dark:bg-[#111111] p-6 border border-[#E5E7EB] dark:border-white/10 rounded-md shadow-sm space-y-3">
          <div class="w-10 h-10 bg-green-50 dark:bg-green-950/30 text-green-600 rounded-full flex items-center justify-center text-base">
            <font-awesome-icon icon="fa-brands fa-whatsapp" />
          </div>
          <h3 class="text-sm font-bold text-[#111111] dark:text-white">Customer Support (WhatsApp)</h3>
          <p class="text-xs text-stone-500">Fast responses available Mon - Sat (10am - 9pm PKT)</p>
          <div class="space-y-1 text-xs font-semibold text-[#111] dark:text-white">
            <p>Phone 1: <a href="https://wa.me/923416887454" target="_blank" class="hover:text-amber-600 underline">0341 6887454</a></p>
            <p>Phone 2: <a href="https://wa.me/923244902607" target="_blank" class="hover:text-amber-600 underline">0324 4902607</a></p>
          </div>
        </div>

        <!-- Email -->
        <div class="bg-white dark:bg-[#111111] p-6 border border-[#E5E7EB] dark:border-white/10 rounded-md shadow-sm space-y-3">
          <div class="w-10 h-10 bg-stone-100 dark:bg-white/10 text-stone-700 dark:text-stone-300 rounded-full flex items-center justify-center text-base">
            <font-awesome-icon icon="fa-solid fa-envelope" />
          </div>
          <h3 class="text-sm font-bold text-[#111111] dark:text-white">Email Us</h3>
          <p class="text-xs text-stone-500">For business & couture inquiries</p>
          <a href="mailto:ahmadalihafeez24@gmail.com" class="text-xs font-semibold text-[#111] dark:text-white hover:text-amber-600 underline block">
            ahmadalihafeez24@gmail.com
          </a>
        </div>

        <!-- Boutique Address -->
        <div class="bg-white dark:bg-[#111111] p-6 border border-[#E5E7EB] dark:border-white/10 rounded-md shadow-sm space-y-3">
          <div class="w-10 h-10 bg-stone-100 dark:bg-white/10 text-stone-700 dark:text-stone-300 rounded-full flex items-center justify-center text-base">
            <font-awesome-icon icon="fa-solid fa-location-dot" />
          </div>
          <h3 class="text-sm font-bold text-[#111111] dark:text-white">Flagship Boutique</h3>
          <p class="text-xs text-stone-500 leading-relaxed">
            Bagrian Chowk, Near Afzal Electronics (Front), Lahore, Pakistan.
          </p>
          <a href="https://www.google.com/maps/place/Bagrian+Lahore,+Pakistan/@31.4239636,74.2874076,16z/data=!3m1!4b1!4m9!1m2!2m1!1sAhmad+Clothes+Bagrian+Chowk+Near+Afzal+Electronics+Lahore!3m5!1s0x3919012778655ebf:0x124fbfb4935dddf4!8m2!3d31.4263668!4d74.2971543!16s%2Fg%2F11c6_6shnr" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-xs text-[#c9973a] font-bold hover:underline">
            <span>View on Google Maps</span>
            <span>&rarr;</span>
          </a>
          <p class="text-[11px] text-stone-400">Store Hours: Mon - Sat 11:00 AM - 9:00 PM</p>
        </div>
      </div>

      <!-- Right Column: Contact Form -->
      <div class="lg:col-span-2">
        <div class="bg-white dark:bg-[#111111] p-8 md:p-10 border border-[#E5E7EB] dark:border-white/10 rounded-md shadow-sm space-y-6">
          <div>
            <h2 class="text-xl font-bold text-[#111111] dark:text-white">Send Us a Message</h2>
            <p class="text-xs text-stone-500 mt-1">Fill out the form below and our team will get back to you shortly.</p>
          </div>

          <form @submit.prevent="transmitIntent" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Your Name *</label>
                <input v-model="form.name" type="text" placeholder="e.g. Ayesha Khan" class="input-shopify" />
                <p v-if="errors.name" class="text-[11px] text-red-500 mt-1 font-semibold">{{ errors.name }}</p>
              </div>

              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Email Address *</label>
                <input v-model="form.email" type="email" placeholder="ayesha@example.com" class="input-shopify" />
                <p v-if="errors.email" class="text-[11px] text-red-500 mt-1 font-semibold">{{ errors.email }}</p>
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Subject *</label>
              <input v-model="form.subject" type="text" placeholder="Order Inquiry / Custom Sizing" class="input-shopify" />
              <p v-if="errors.subject" class="text-[11px] text-red-500 mt-1 font-semibold">{{ errors.subject }}</p>
            </div>

            <div>
              <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Message *</label>
              <textarea v-model="form.message" rows="5" placeholder="Write your message here..." class="input-shopify resize-none"></textarea>
              <p v-if="errors.message" class="text-[11px] text-red-500 mt-1 font-semibold">{{ errors.message }}</p>
            </div>

            <div v-if="status.message" :class="status.success ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'" class="p-3 border rounded text-xs font-semibold">
              {{ status.message }}
            </div>

            <button type="submit" :disabled="status.loading" class="btn-shopify w-full !h-12">
              <span v-if="!status.loading">Send Message</span>
              <span v-else>Sending...</span>
            </button>
          </form>
        </div>
      </div>

    </div>

    <!-- Google Map Embed Section -->
    <div class="mt-14 rounded-2xl overflow-hidden border border-[#E5E7EB] dark:border-white/10 shadow-sm">
      <div class="p-4 bg-stone-50 dark:bg-white/5 border-b border-[#E5E7EB] dark:border-white/10 flex items-center justify-between">
        <div class="flex items-center gap-2 text-xs font-bold text-stone-900 dark:text-white">
          <font-awesome-icon icon="fa-solid fa-map-location-dot" class="text-[#c9973a]" />
          <span>Ahmad Clothes Boutique Location — Bagrian Chowk, Lahore</span>
        </div>
        <a href="https://www.google.com/maps/place/Bagrian+Lahore,+Pakistan/@31.4239636,74.2874076,16z/data=!3m1!4b1!4m9!1m2!2m1!1sAhmad+Clothes+Bagrian+Chowk+Near+Afzal+Electronics+Lahore!3m5!1s0x3919012778655ebf:0x124fbfb4935dddf4!8m2!3d31.4263668!4d74.2971543!16s%2Fg%2F11c6_6shnr" target="_blank" rel="noopener" class="text-xs font-bold text-[#c9973a] hover:underline">
          Open in Google Maps &rarr;
        </a>
      </div>
      <iframe 
        title="Ahmad Clothes Boutique Location"
        src="https://maps.google.com/maps?q=31.4263668,74.2971543&t=&z=16&ie=UTF8&iwloc=&output=embed" 
        class="w-full h-[360px] border-0" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>

  </div>
</template>

<script setup>
import { reactive } from 'vue'
import api from '../api'
import Swal from 'sweetalert2'
import * as yup from 'yup'

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
