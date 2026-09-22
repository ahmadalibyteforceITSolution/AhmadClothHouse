<template>
  <!-- ═══════════════════════════════════════════
       GLOBAL SOCIAL & CONTACT FLOATING SIDEBAR DOCK
       Visible across all website pages
  ═══════════════════════════════════════════ -->
  <aside 
    class="fixed left-0 top-1/2 -translate-y-1/2 z-[999] flex flex-col items-start transition-transform duration-300 select-none drop-shadow-2xl"
    :class="isSocialDockOpen ? 'translate-x-0' : '-translate-x-[calc(100%-12px)]'"
    aria-label="Quick Social & Contact Dock"
  >
    <!-- Top Toggle Button -->
    <button 
      @click="isSocialDockOpen = !isSocialDockOpen"
      class="w-11 h-8 bg-black text-white rounded-tr-md flex items-center justify-center cursor-pointer transition-all hover:bg-neutral-800 focus:outline-none shadow-md"
      :title="isSocialDockOpen ? 'Collapse' : 'Expand'"
      aria-label="Toggle Social Sidebar"
    >
      <span class="text-xs font-bold transition-transform duration-300" :class="{ 'rotate-180': !isSocialDockOpen }">
        &larr;
      </span>
    </button>

    <!-- Vertical Contact Us Tab -->
    <div class="relative group/contact w-11">
      <router-link 
        to="/contact"
        class="w-11 py-5 bg-[#6C5CE7] hover:bg-[#5b4bc4] text-white flex flex-col items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-md no-underline"
      >
        <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span class="text-[10px] font-bold tracking-wider uppercase whitespace-nowrap" style="writing-mode: vertical-rl; transform: rotate(180deg);">
          Contact Us
        </span>
      </router-link>

      <!-- Slideout Badge / Content on Hover -->
      <div class="absolute left-full top-0 ml-1.5 hidden group-hover/contact:flex flex-col bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white p-3.5 rounded-r-xl shadow-2xl border border-neutral-200 dark:border-neutral-800 min-w-[220px] z-50">
        <p class="text-xs font-bold uppercase tracking-wider text-[#6C5CE7] mb-1">Direct Assistance</p>
        <p class="text-[11px] text-neutral-500 dark:text-neutral-400 mb-2.5">Concierge &amp; Order Support</p>
        <a href="https://wa.me/923416887454" target="_blank" rel="noopener" class="flex items-center gap-2 text-xs font-semibold p-2 rounded bg-neutral-100 dark:bg-neutral-800 hover:bg-[#25D366] hover:text-white transition-colors">
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-sm" />
          <span>0341 6887454</span>
        </a>
      </div>
    </div>

    <!-- Facebook Tab -->
    <div class="relative group/fb w-11">
      <a 
        href="https://www.facebook.com/profile.php?id=61573629329844" 
        target="_blank" 
        rel="noopener"
        class="w-11 h-11 bg-[#1877F2] hover:bg-[#1464cc] text-white flex items-center justify-center transition-all duration-300 shadow-md"
        title="Facebook"
        aria-label="Facebook Page"
      >
        <font-awesome-icon :icon="['fab', 'facebook-f']" class="text-base" />
      </a>
      <!-- Slideout Badge -->
      <div class="absolute left-full top-1/2 -translate-y-1/2 ml-1.5 hidden group-hover/fb:flex items-center gap-2 bg-[#1877F2] text-white px-3 py-1.5 rounded-r-md shadow-xl text-xs font-bold tracking-wide whitespace-nowrap z-50">
        <span>Facebook</span>
        <span class="text-[10px] opacity-80">&rarr;</span>
      </div>
    </div>

    <!-- YouTube Tab -->
    <div class="relative group/yt w-11">
      <a 
        href="https://www.youtube.com/@ahmadClothesfabrics_aroma" 
        target="_blank" 
        rel="noopener"
        class="w-11 h-11 bg-[#FF0000] hover:bg-[#cc0000] text-white flex items-center justify-center transition-all duration-300 shadow-md"
        title="YouTube"
        aria-label="YouTube Channel"
      >
        <font-awesome-icon :icon="['fab', 'youtube']" class="text-base" />
      </a>
      <!-- Slideout Badge -->
      <div class="absolute left-full top-1/2 -translate-y-1/2 ml-1.5 hidden group-hover/yt:flex items-center gap-2 bg-[#FF0000] text-white px-3 py-1.5 rounded-r-md shadow-xl text-xs font-bold tracking-wide whitespace-nowrap z-50">
        <span>YouTube</span>
        <span class="text-[10px] opacity-80">&rarr;</span>
      </div>
    </div>

    <!-- Instagram Tab -->
    <div class="relative group/insta w-11">
      <a 
        href="https://www.instagram.com/ahmadclothfabrics_aroma/" 
        target="_blank" 
        rel="noopener"
        class="w-11 h-11 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white flex items-center justify-center transition-all duration-300 shadow-md"
        title="Instagram"
        aria-label="Instagram Profile"
      >
        <font-awesome-icon :icon="['fab', 'instagram']" class="text-base" />
      </a>
      <!-- Slideout Badge -->
      <div class="absolute left-full top-1/2 -translate-y-1/2 ml-1.5 hidden group-hover/insta:flex items-center gap-2 bg-gradient-to-r from-[#dc2743] to-[#bc1888] text-white px-3 py-1.5 rounded-r-md shadow-xl text-xs font-bold tracking-wide whitespace-nowrap z-50">
        <span>Instagram</span>
        <span class="text-[10px] opacity-80">&rarr;</span>
      </div>
    </div>

    <!-- WhatsApp Tab -->
    <div class="relative group/wa w-11">
      <a 
        href="https://wa.me/923416887454" 
        target="_blank" 
        rel="noopener"
        class="w-11 h-11 bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center transition-all duration-300 shadow-md"
        title="WhatsApp"
        aria-label="WhatsApp Contact"
      >
        <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-base" />
      </a>
      <!-- Slideout Badge -->
      <div class="absolute left-full top-1/2 -translate-y-1/2 ml-1.5 hidden group-hover/wa:flex items-center gap-2 bg-[#25D366] text-white px-3 py-1.5 rounded-r-md shadow-xl text-xs font-bold tracking-wide whitespace-nowrap z-50">
        <span>WhatsApp Chat</span>
        <span class="text-[10px] opacity-80">&rarr;</span>
      </div>
    </div>

    <!-- TikTok Tab -->
    <div class="relative group/tiktok w-11">
      <a 
        href="https://www.tiktok.com/@theahmadfabrices_aroma" 
        target="_blank" 
        rel="noopener"
        class="w-11 h-11 bg-[#010101] hover:bg-[#1f1f1f] text-white flex items-center justify-center transition-all duration-300 shadow-md"
        title="TikTok"
        aria-label="TikTok Profile"
      >
        <font-awesome-icon :icon="['fab', 'tiktok']" class="text-base" />
      </a>
      <!-- Slideout Badge -->
      <div class="absolute left-full top-1/2 -translate-y-1/2 ml-1.5 hidden group-hover/tiktok:flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-r-md shadow-xl text-xs font-bold tracking-wide whitespace-nowrap z-50 border border-white/10">
        <span>TikTok</span>
        <span class="text-[10px] opacity-80">&rarr;</span>
      </div>
    </div>

    <!-- Map / Store Location Tab (Rounded Bottom Corner) -->
    <div class="relative group/map w-11">
      <a 
        href="https://www.google.com/maps/place/Bagrian+Lahore,+Pakistan/@31.4239636,74.2874076,16z/data=!3m1!4b1!4m9!1m2!2m1!1sAhmad+Clothes+Bagrian+Chowk+Near+Afzal+Electronics+Lahore!3m5!1s0x3919012778655ebf:0x124fbfb4935dddf4!8m2!3d31.4263668!4d74.2971543!16s%2Fg%2F11c6_6shnr" 
        target="_blank" 
        rel="noopener"
        class="w-11 h-11 bg-[#EA4335] hover:bg-[#d93025] text-white flex items-center justify-center transition-all duration-300 rounded-br-lg shadow-md"
        title="Store Location on Google Maps"
        aria-label="Store Location on Google Maps"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </a>
      <!-- Slideout Badge -->
      <div class="absolute left-full top-1/2 -translate-y-1/2 ml-1.5 hidden group-hover/map:flex items-center gap-2 bg-[#EA4335] text-white px-3 py-1.5 rounded-r-md shadow-xl text-xs font-bold tracking-wide whitespace-nowrap z-50">
        <span>Store Map (Lahore)</span>
        <span class="text-[10px] opacity-80">&rarr;</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

const isSocialDockOpen = ref(true)
</script>
