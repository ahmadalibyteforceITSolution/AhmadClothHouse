<template>
  <!-- ═══════════════════════════════════════════
       GLOBAL LUXURY SOCIAL & CONCIERGE DOCK
  ═══════════════════════════════════════════ -->
  <aside 
    class="fixed left-0 top-1/2 -translate-y-1/2 z-[999] flex flex-col items-start transition-transform duration-300 select-none drop-shadow-xl"
    :class="isSocialDockOpen ? 'translate-x-0' : '-translate-x-[calc(100%-12px)]'"
    aria-label="Luxury Concierge &amp; Social Dock"
  >
    <!-- Toggle tab -->
    <button 
      @click="isSocialDockOpen = !isSocialDockOpen"
      class="w-10 h-7 bg-[#141414] hover:bg-[#B8860B] text-stone-300 hover:text-white rounded-tr-md flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md border-t border-r border-white/10"
      :title="isSocialDockOpen ? 'Collapse Dock' : 'Expand Dock'"
      aria-label="Toggle Social Sidebar"
    >
      <span class="text-[10px] font-bold transition-transform duration-300" :class="{ 'rotate-180': !isSocialDockOpen }">
        &larr;
      </span>
    </button>

    <!-- Main Container -->
    <div class="flex flex-col bg-[#141414]/95 backdrop-blur-md border-y border-r border-white/15 rounded-r-xl overflow-hidden shadow-2xl">
      
      <!-- Concierge & Inquiry Tab -->
      <div class="relative group/contact w-10">
        <router-link 
          to="/contact"
          class="w-10 py-4 bg-gradient-to-b from-[#B8860B] to-[#8B6508] text-white flex flex-col items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer no-underline"
          title="Concierge Inquiry"
        >
          <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="text-[9px] font-bold tracking-wider uppercase whitespace-nowrap" style="writing-mode: vertical-rl; transform: rotate(180deg);">
            Concierge
          </span>
        </router-link>

        <!-- Slideout Detail Card -->
        <div class="absolute left-full top-0 ml-2 hidden group-hover/contact:flex flex-col bg-[#161616] text-white p-4 rounded-xl shadow-2xl border border-[#B8860B]/30 min-w-[230px] z-50">
          <p class="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#D4AF37] mb-1">Haute Concierge</p>
          <p class="text-xs text-stone-300 mb-3">Custom Sizing &amp; Bridal Orders</p>
          <a href="https://wa.me/923416887454" target="_blank" rel="noopener" class="flex items-center justify-center gap-2 text-xs font-bold py-2 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white transition-colors">
            <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-sm" />
            <span>WhatsApp: 0341 6887454</span>
          </a>
        </div>
      </div>

      <!-- Instagram Tab -->
      <div class="relative group/insta w-10">
        <a 
          href="https://www.instagram.com/ahmadclothfabrics_aroma/" 
          target="_blank" 
          rel="noopener"
          class="w-10 h-10 hover:bg-[#B8860B]/20 text-stone-300 hover:text-[#D4AF37] flex items-center justify-center transition-all duration-300 border-t border-white/5"
          title="Instagram"
          aria-label="Instagram Profile"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" class="text-sm" />
        </a>
        <div class="absolute left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover/insta:flex items-center gap-2 bg-[#1A1A1A] text-stone-200 border border-white/10 px-3 py-1.5 rounded-md shadow-xl text-xs font-semibold whitespace-nowrap z-50">
          <span>Instagram @ahmadclothfabrics</span>
        </div>
      </div>

      <!-- WhatsApp Tab -->
      <div class="relative group/wa w-10">
        <a 
          href="https://wa.me/923244902607" 
          target="_blank" 
          rel="noopener"
          class="w-10 h-10 hover:bg-[#25D366]/20 text-stone-300 hover:text-[#25D366] flex items-center justify-center transition-all duration-300 border-t border-white/5"
          title="WhatsApp Official"
          aria-label="WhatsApp Contact"
        >
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-sm" />
        </a>
        <div class="absolute left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover/wa:flex items-center gap-2 bg-[#1A1A1A] text-stone-200 border border-white/10 px-3 py-1.5 rounded-md shadow-xl text-xs font-semibold whitespace-nowrap z-50">
          <span>WhatsApp Concierge</span>
        </div>
      </div>

      <!-- Facebook Tab -->
      <div class="relative group/fb w-10">
        <a 
          href="https://www.facebook.com/profile.php?id=61573629329844" 
          target="_blank" 
          rel="noopener"
          class="w-10 h-10 hover:bg-[#1877F2]/20 text-stone-300 hover:text-[#1877F2] flex items-center justify-center transition-all duration-300 border-t border-white/5"
          title="Facebook"
          aria-label="Facebook Page"
        >
          <font-awesome-icon :icon="['fab', 'facebook-f']" class="text-xs" />
        </a>
        <div class="absolute left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover/fb:flex items-center gap-2 bg-[#1A1A1A] text-stone-200 border border-white/10 px-3 py-1.5 rounded-md shadow-xl text-xs font-semibold whitespace-nowrap z-50">
          <span>Facebook Page</span>
        </div>
      </div>

      <!-- YouTube Tab -->
      <div class="relative group/yt w-10">
        <a 
          href="https://www.youtube.com/@ahmadClothesfabrics_aroma" 
          target="_blank" 
          rel="noopener"
          class="w-10 h-10 hover:bg-[#FF0000]/20 text-stone-300 hover:text-[#FF0000] flex items-center justify-center transition-all duration-300 border-t border-white/5"
          title="YouTube Channel"
          aria-label="YouTube Channel"
        >
          <font-awesome-icon :icon="['fab', 'youtube']" class="text-xs" />
        </a>
        <div class="absolute left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover/yt:flex items-center gap-2 bg-[#1A1A1A] text-stone-200 border border-white/10 px-3 py-1.5 rounded-md shadow-xl text-xs font-semibold whitespace-nowrap z-50">
          <span>YouTube Lookbook</span>
        </div>
      </div>

      <!-- TikTok Tab -->
      <div class="relative group/tiktok w-10">
        <a 
          href="https://www.tiktok.com/@theahmadfabrices_aroma" 
          target="_blank" 
          rel="noopener"
          class="w-10 h-10 hover:bg-white/10 text-stone-300 hover:text-white flex items-center justify-center transition-all duration-300 border-t border-white/5"
          title="TikTok"
          aria-label="TikTok Profile"
        >
          <font-awesome-icon :icon="['fab', 'tiktok']" class="text-xs" />
        </a>
        <div class="absolute left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover/tiktok:flex items-center gap-2 bg-[#1A1A1A] text-stone-200 border border-white/10 px-3 py-1.5 rounded-md shadow-xl text-xs font-semibold whitespace-nowrap z-50">
          <span>TikTok Reels</span>
        </div>
      </div>

      <!-- Map / Store Location -->
      <div class="relative group/map w-10">
        <a 
          href="https://www.google.com/maps/place/Bagrian+Lahore,+Pakistan/@31.4239636,74.2874076,16z/data=!3m1!4b1!4m9!1m2!2m1!1sAhmad+Clothes+Bagrian+Chowk+Near+Afzal+Electronics+Lahore!3m5!1s0x3919012778655ebf:0x124fbfb4935dddf4!8m2!3d31.4263668!4d74.2971543!16s%2Fg%2F11c6_6shnr" 
          target="_blank" 
          rel="noopener"
          class="w-10 h-10 hover:bg-[#EA4335]/20 text-stone-300 hover:text-[#EA4335] flex items-center justify-center transition-all duration-300 border-t border-white/5"
          title="Boutique Location"
          aria-label="Boutique Location on Google Maps"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </a>
        <div class="absolute left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover/map:flex items-center gap-2 bg-[#1A1A1A] text-stone-200 border border-white/10 px-3 py-1.5 rounded-md shadow-xl text-xs font-semibold whitespace-nowrap z-50">
          <span>Bagrian Chowk, Lahore</span>
        </div>
      </div>

    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

const isSocialDockOpen = ref(true)
</script>
