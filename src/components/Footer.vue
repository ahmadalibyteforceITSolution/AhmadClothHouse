<template>
  <footer class="bg-[#0D0C0A] text-stone-300 pt-16 pb-10 border-t border-[#D4AF37]/20 font-sans transition-colors duration-500 overflow-hidden">
    <div class="max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-14">

      <!-- ══════════ TOP: NEWSLETTER PRIVÉ ROW ══════════ -->
      <div class="pb-14 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-6 space-y-2">
          <span class="text-[9px] font-black uppercase tracking-[0.4em] text-[#D4AF37]">The Couture Society</span>
          <h3 class="text-2xl sm:text-3xl font-editorial tracking-wide text-white font-normal">
            Join The Ahmad Privé Club
          </h3>
          <p class="text-xs text-stone-400 max-w-md font-light leading-relaxed">
            Receive exclusive invitations to collection previews, bridal couture lookbooks, and private seasonal sales.
          </p>
        </div>

        <div class="lg:col-span-6 flex flex-col sm:flex-row items-center gap-3">
          <div class="relative flex-1 w-full">
            <input 
              v-model="newsletterEmail"
              type="email" 
              placeholder="Enter your email address..."
              class="w-full bg-white/[0.05] border border-white/15 focus:border-[#D4AF37] text-white placeholder-stone-500 text-xs px-5 py-3.5 rounded-full outline-none transition-colors"
            />
          </div>
          <button 
            @click="handleSubscribe"
            class="w-full sm:w-auto px-8 py-3.5 bg-[#D4AF37] hover:bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 shrink-0 cursor-pointer shadow-md hover:scale-105"
          >
            <span>Subscribe</span>
          </button>
        </div>
      </div>

      <!-- ══════════ MAIN 4-COLUMN FOOTER ══════════ -->
      <div class="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 border-b border-white/10">
        
        <!-- Col 1: Brand & Heritage (5 cols) -->
        <div class="lg:col-span-4 space-y-5">
          <div @click="$router.push('/')" class="cursor-pointer group">
            <h2 class="text-xl sm:text-2xl font-editorial tracking-[0.24em] text-white uppercase group-hover:text-[#D4AF37] transition-colors">
              AHMAD CLOTHES HOUSE
            </h2>
            <p class="text-[8px] font-semibold tracking-[0.4em] uppercase text-[#D4AF37] mt-1">HAUTE COUTURE &middot; LAHORE</p>
          </div>
          
          <p class="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
            Preserving Pakistan's rich textile heritage through artisanal unstitched fabrics, master embroideries, and bespoke bridal couture since 2004.
          </p>

          <div class="flex items-center gap-4 text-sm text-stone-400 pt-2">
            <a href="https://www.instagram.com/ahmadclothfabrics_aroma/" target="_blank" aria-label="Instagram" class="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D4AF37] text-stone-300 hover:text-black flex items-center justify-center transition-all duration-300 border border-white/10">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573629329844" target="_blank" aria-label="Facebook" class="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D4AF37] text-stone-300 hover:text-black flex items-center justify-center transition-all duration-300 border border-white/10">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </a>
            <a href="https://www.youtube.com/@ahmadClothesfabrics_aroma" target="_blank" aria-label="YouTube" class="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D4AF37] text-stone-300 hover:text-black flex items-center justify-center transition-all duration-300 border border-white/10">
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </a>
            <a href="https://www.tiktok.com/@theahmadfabrices_aroma" target="_blank" aria-label="TikTok" class="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D4AF37] text-stone-300 hover:text-black flex items-center justify-center transition-all duration-300 border border-white/10">
              <font-awesome-icon :icon="['fab', 'tiktok']" />
            </a>
          </div>
        </div>

        <!-- Col 2: Collections (3 cols) -->
        <div class="lg:col-span-3 space-y-4">
          <h3 class="text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37]">
            Collections
          </h3>
          <ul class="space-y-2.5 text-xs text-stone-400 font-normal">
            <li>
              <router-link to="/shop/Unstitched" class="hover:text-white transition-colors hover:translate-x-1 inline-block">Unstitched Luxury Fabrics</router-link>
            </li>
            <li>
              <router-link to="/shop/Pret" class="hover:text-white transition-colors hover:translate-x-1 inline-block">Ready to Wear (Pret)</router-link>
            </li>
            <li>
              <router-link to="/shop/Bridal" class="hover:text-white transition-colors hover:translate-x-1 inline-block">Royal Bridal Couture</router-link>
            </li>
            <li>
              <router-link to="/shop/Luxury Formals" class="hover:text-white transition-colors hover:translate-x-1 inline-block">Luxury Formals &amp; Chiffon</router-link>
            </li>
            <li>
              <router-link to="/shop/Men's Wear" class="hover:text-white transition-colors hover:translate-x-1 inline-block">Men's Wash &amp; Wear Edit</router-link>
            </li>
            <li>
              <router-link to="/shop/Sale Offer" class="hover:text-[#D4AF37] transition-colors hover:translate-x-1 inline-block font-semibold">Seasonal Sale Offers</router-link>
            </li>
          </ul>
        </div>

        <!-- Col 3: Client Concierge (2 cols) -->
        <div class="lg:col-span-2 space-y-4">
          <h3 class="text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37]">
            Client Care
          </h3>
          <ul class="space-y-2.5 text-xs text-stone-400 font-normal">
            <li>
              <router-link to="/about" class="hover:text-white transition-colors hover:translate-x-1 inline-block">Our Story</router-link>
            </li>
            <li>
              <router-link to="/contact" class="hover:text-white transition-colors hover:translate-x-1 inline-block">Store Locator (Lahore)</router-link>
            </li>
            <li>
              <router-link to="/dashboard" class="hover:text-white transition-colors hover:translate-x-1 inline-block">Track Your Order</router-link>
            </li>
            <li>
              <router-link to="/terms" class="hover:text-white transition-colors hover:translate-x-1 inline-block">Exchange &amp; Returns</router-link>
            </li>
            <li>
              <router-link to="/privacy" class="hover:text-white transition-colors hover:translate-x-1 inline-block">Privacy &amp; Security</router-link>
            </li>
            <li>
              <router-link to="/blog" class="hover:text-white transition-colors hover:translate-x-1 inline-block">Fashion Journals</router-link>
            </li>
          </ul>
        </div>

        <!-- Col 4: Boutique Contact & Inquiries (3 cols) -->
        <div class="lg:col-span-3 space-y-4">
          <h3 class="text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37]">
            Concierge &amp; Boutique
          </h3>
          <div class="space-y-2 text-xs text-stone-400 leading-relaxed">
            <p class="text-white font-medium">Bagrian Chowk, Near Afzal Electronics, Lahore, Pakistan</p>
            <p class="pt-1">
              <span class="text-stone-500">Helpline:</span> 
              <a href="tel:03244902607" class="text-white hover:text-[#D4AF37] font-semibold ml-1.5">0324 4902607</a>
            </p>
            <p>
              <span class="text-stone-500">WhatsApp:</span> 
              <a href="https://wa.me/923416887454" target="_blank" class="text-[#25D366] hover:underline font-semibold ml-1.5">0341 6887454</a>
            </p>
            <p>
              <span class="text-stone-500">Email:</span> 
              <a href="mailto:ahmadalihafeez24@gmail.com" class="text-stone-300 hover:text-white ml-1.5">ahmadalihafeez24@gmail.com</a>
            </p>
          </div>
        </div>

      </div>

      <!-- ══════════ BOTTOM BAR ══════════ -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-light">
        <p>&copy; 2026 Ahmad Clothes House. All Rights Reserved. Master Crafted in Lahore.</p>
        <div class="flex items-center gap-6 text-[11px] text-stone-400">
          <span>Worldwide Express Shipping</span>
          <span class="text-stone-700">&bull;</span>
          <span>100% Authentic Designer Fabrics</span>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'

const newsletterEmail = ref('')

const handleSubscribe = () => {
  if (!newsletterEmail.value || !newsletterEmail.value.includes('@')) {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Email',
      text: 'Please enter a valid email address.',
      confirmButtonColor: '#D4AF37'
    })
    return
  }

  Swal.fire({
    icon: 'success',
    title: 'Welcome to Privé Club',
    text: 'You have been subscribed to exclusive couture lookbooks and previews.',
    confirmButtonColor: '#D4AF37'
  })
  newsletterEmail.value = ''
}
</script>
