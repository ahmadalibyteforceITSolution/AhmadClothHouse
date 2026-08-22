<template>
  <div class="luxury-home overflow-x-hidden bg-[#F7F6F0] dark:bg-[#090909] text-[#1E2D1E] dark:text-stone-100 font-sans transition-colors duration-300">

    <!-- Custom Cursor -->
    <div ref="cursorOuter" class="gsap-cursor-outer" aria-hidden="true"></div>
    <div ref="cursorInner" class="gsap-cursor-inner" aria-hidden="true"></div>

    <!-- ═══════════════════════════════════════════
         LEFT CORNER HERO SOCIAL FLOATING DOCK (Matching Reference Screenshot)
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
          <a href="https://wa.me/923416887454" target="_blank" class="flex items-center gap-2 text-xs font-semibold p-2 rounded bg-neutral-100 dark:bg-neutral-800 hover:bg-[#25D366] hover:text-white transition-colors">
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
          href="https://maps.google.com/?q=Ameer+Chowk,+Wapda+Town,+Lahore" 
          target="_blank" 
          rel="noopener"
          class="w-11 h-11 bg-[#EA4335] hover:bg-[#d93025] text-white flex items-center justify-center transition-all duration-300 rounded-br-lg shadow-md"
          title="Store Location on Google Maps"
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

    <!-- ═══════════════════════════════════════════
         1. AHMAD CLOTH HOUSE — LUXURY EDITORIAL HERO
    ═══════════════════════════════════════════ -->
    <section
      ref="heroSection"
      class="relative w-full min-h-screen flex flex-col justify-center px-5 sm:px-12 lg:px-24 bg-[#F6F5EE] dark:bg-[#0A0A0A] overflow-hidden"
      aria-label="Luxury Hero"
    >
      <!-- Background subtle pattern overlay -->
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
           style="background-image: repeating-linear-gradient(45deg, #1f2e1f 0, #1f2e1f 1px, transparent 0, transparent 50%); background-size: 20px 20px;"></div>

      <div class="relative w-full max-w-[1400px] mx-auto py-20 sm:py-16 z-10">

        <!-- Eyebrow Label -->
        <div class="flex items-center gap-4 mb-8 sm:mb-10">
          <div class="w-8 sm:w-12 h-px bg-[#C9973A]"></div>
          <p class="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.6em] text-[#C9973A]">
            Ahmad Cloth House · Est. 2020
          </p>
        </div>

        <!-- Main Editorial Headline -->
        <h1 class="font-extralight text-[#1f2e1f] dark:text-stone-100 uppercase leading-none mb-6 sm:mb-8"
            style="font-size: clamp(44px, 9.5vw, 155px); letter-spacing: 0.04em; line-height: 0.88;">
          THE ART<br/><span style="padding-left: clamp(20px, 4vw, 70px);">OF COUTURE</span>
        </h1>

        <!-- Thin Gold Divider -->
        <div class="flex items-center gap-4 mb-8 sm:mb-10">
          <div class="w-20 sm:w-32 h-px bg-[#C9973A]"></div>
          <span class="text-[#C9973A] text-xs">✦</span>
        </div>

        <!-- Subtitle -->
        <p class="text-[10px] sm:text-xs text-[#1f2e1f]/50 dark:text-stone-500 font-light uppercase tracking-[0.4em] mb-10 sm:mb-14 max-w-[280px] sm:max-w-sm leading-loose">
          Artisanal Unstitched &nbsp;·&nbsp; Luxury Pret &nbsp;·&nbsp; Bridal Couture
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-5">
          <button
            @click="router.push('/shop')"
            class="group px-8 sm:px-10 py-4 bg-[#1f2e1f] hover:bg-[#C9973A] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.4em] cursor-pointer transition-all duration-500 w-full sm:w-auto flex items-center justify-center gap-3"
          >
            <span>EXPLORE COLLECTIONS</span>
            <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
          <button
            @click="router.push('/shop/Bridal')"
            class="group px-8 sm:px-10 py-4 border border-[#1f2e1f]/40 dark:border-stone-600 text-[#1f2e1f] dark:text-stone-300 hover:border-[#C9973A] hover:text-[#C9973A] text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.4em] cursor-pointer transition-all duration-300 w-full sm:w-auto"
          >
            BRIDAL COUTURE
          </button>
        </div>

        <!-- Stats Row -->
        <div class="flex items-center gap-8 sm:gap-12 mt-14 sm:mt-16 pt-10 sm:pt-12 border-t border-[#1f2e1f]/10 dark:border-white/10">
          <div>
            <p class="text-xl sm:text-2xl font-extralight text-[#1f2e1f] dark:text-white">5K+</p>
            <p class="text-[8px] sm:text-[9px] uppercase tracking-[0.35em] text-[#1f2e1f]/40 dark:text-stone-600 mt-1">Designs</p>
          </div>
          <div class="w-px h-8 bg-[#1f2e1f]/10 dark:bg-white/10"></div>
          <div>
            <p class="text-xl sm:text-2xl font-extralight text-[#1f2e1f] dark:text-white">100K+</p>
            <p class="text-[8px] sm:text-[9px] uppercase tracking-[0.35em] text-[#1f2e1f]/40 dark:text-stone-600 mt-1">Patrons</p>
          </div>
          <div class="w-px h-8 bg-[#1f2e1f]/10 dark:bg-white/10"></div>
          <div>
            <p class="text-xl sm:text-2xl font-extralight text-[#1f2e1f] dark:text-white">Global</p>
            <p class="text-[8px] sm:text-[9px] uppercase tracking-[0.35em] text-[#1f2e1f]/40 dark:text-stone-600 mt-1">Shipping</p>
          </div>
        </div>

      </div>

      <!-- Decorative vertical text (desktop) -->
      <div class="hidden lg:flex absolute right-10 xl:right-16 top-1/2 -translate-y-1/2 items-center gap-3 z-10">
        <span class="text-[8px] font-light tracking-[0.6em] text-[#1f2e1f]/20 dark:text-white/20 uppercase"
              style="writing-mode: vertical-rl; transform: rotate(180deg);">Luxury · Heritage · Craftsmanship</span>
        <div class="w-px h-28 bg-gradient-to-b from-transparent via-[#C9973A]/50 to-transparent"></div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         2. FEATURED COLLECTIONS — LUXURY CAROUSEL
    ═══════════════════════════════════════════ -->
    <section class="py-14 sm:py-20 w-full bg-white dark:bg-[#080808] border-b border-stone-100 dark:border-white/5 overflow-hidden">
      <div class="w-full space-y-10">

        <!-- Section Header -->
        <div class="px-5 sm:px-10 lg:px-14 flex items-end justify-between">
          <div class="space-y-2">
            <p class="text-[9px] font-bold uppercase tracking-[0.6em] text-[#C9973A]">Curated for You</p>
            <h2 class="text-xl sm:text-2xl font-light tracking-[0.25em] text-stone-900 dark:text-white uppercase">
              Featured Collections
            </h2>
          </div>
          <router-link to="/shop" class="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 hover:text-[#C9973A] transition-colors pb-0.5 border-b border-stone-200 hover:border-[#C9973A]">
            View All →
          </router-link>
        </div>

        <!-- Horizontal Track -->
        <div
          ref="azadiSlider"
          class="w-full flex gap-3 sm:gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory px-5 sm:px-10 lg:px-14 py-2 scroll-smooth"
        >
          <div @click="router.push('/shop/Unstitched')"
            class="flex-none w-[240px] sm:w-[300px] md:w-[340px] aspect-[3/4] snap-start group relative overflow-hidden cursor-pointer border border-stone-100 dark:border-white/10">
            <img :src="MB2026_1" alt="Unstitched Lawn" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white">
              <p class="text-[8px] uppercase font-bold tracking-[0.5em] text-[#C9973A] mb-2">New Arrival</p>
              <h3 class="text-base sm:text-lg font-light tracking-[0.2em] text-white uppercase">Unstitched Lawn</h3>
              <p class="text-[9px] text-white/50 mt-1 tracking-wider">Collection 2026</p>
            </div>
          </div>

          <div @click="router.push('/shop/Unstitched')"
            class="flex-none w-[240px] sm:w-[300px] md:w-[340px] aspect-[3/4] snap-start group relative overflow-hidden cursor-pointer border border-stone-100 dark:border-white/10">
            <img :src="MB2026_2" alt="Luxury Fabrics" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white">
              <p class="text-[8px] uppercase font-bold tracking-[0.5em] text-[#C9973A] mb-2">Signature</p>
              <h3 class="text-base sm:text-lg font-light tracking-[0.2em] text-white uppercase">Luxury Fabrics</h3>
              <p class="text-[9px] text-white/50 mt-1 tracking-wider">Premium Artisan</p>
            </div>
          </div>

          <div @click="router.push('/shop/Bridal')"
            class="flex-none w-[240px] sm:w-[300px] md:w-[340px] aspect-[3/4] snap-start group relative overflow-hidden cursor-pointer border border-stone-100 dark:border-white/10">
            <img :src="MB2026_3" alt="Formal Couture" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white">
              <p class="text-[8px] uppercase font-bold tracking-[0.5em] text-[#C9973A] mb-2">Exclusive</p>
              <h3 class="text-base sm:text-lg font-light tracking-[0.2em] text-white uppercase">Formal Couture</h3>
              <p class="text-[9px] text-white/50 mt-1 tracking-wider">Heritage Craft</p>
            </div>
          </div>

          <div @click="router.push('/shop/Pret')"
            class="flex-none w-[240px] sm:w-[300px] md:w-[340px] aspect-[3/4] snap-start group relative overflow-hidden cursor-pointer border border-stone-100 dark:border-white/10">
            <img :src="MB2026_4" alt="Luxury Pret" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white">
              <p class="text-[8px] uppercase font-bold tracking-[0.5em] text-[#C9973A] mb-2">Ready to Wear</p>
              <h3 class="text-base sm:text-lg font-light tracking-[0.2em] text-white uppercase">Luxury Pret</h3>
              <p class="text-[9px] text-white/50 mt-1 tracking-wider">Modern Elegance</p>
            </div>
          </div>

          <div @click="router.push('/shop/Pret')"
            class="flex-none w-[240px] sm:w-[300px] md:w-[340px] aspect-[3/4] snap-start group relative overflow-hidden cursor-pointer border border-stone-100 dark:border-white/10">
            <img :src="MB2026_5" alt="Stitched Couture" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white">
              <p class="text-[8px] uppercase font-bold tracking-[0.5em] text-[#C9973A] mb-2">Bespoke</p>
              <h3 class="text-base sm:text-lg font-light tracking-[0.2em] text-white uppercase">Stitched Couture</h3>
              <p class="text-[9px] text-white/50 mt-1 tracking-wider">Master Crafted</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════
         3. EDITORIAL 2-COLUMN PHOTO GRID (MARIA B)
    ═══════════════════════════════════════════ -->
    <section class="py-6 px-6 sm:px-10 lg:px-14">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Col 1 -->
        <div 
          @click="router.push('/shop/Unstitched')" 
          class="relative aspect-[4/5] sm:aspect-[3/4] group overflow-hidden rounded-xl cursor-pointer shadow-sm border border-stone-200/60 dark:border-white/10"
        >
          <img :src="NewSuitOffWhite" alt="Unstitched Lawn" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
            <span class="text-white font-extrabold text-sm sm:text-base tracking-widest uppercase drop-shadow-md">
              UNSTITCHED LAWN '26
            </span>
          </div>
        </div>

        <!-- Col 2 -->
        <div 
          @click="router.push('/shop/Pret')" 
          class="relative aspect-[4/5] sm:aspect-[3/4] group overflow-hidden rounded-xl cursor-pointer shadow-sm border border-stone-200/60 dark:border-white/10"
        >
          <img :src="NewSuitGreen" alt="Ready to Wear" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
            <span class="text-white font-extrabold text-sm sm:text-base tracking-widest uppercase drop-shadow-md">
              READY TO WEAR
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         4. MARIA.B STYLE SHOP BY COLLECTION SECTION
    ═══════════════════════════════════════════ -->
    <section class="py-12 px-6 sm:px-10 lg:px-14 bg-white dark:bg-[#080808] border-b border-stone-100 dark:border-white/5">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <!-- Left Side: Text Description & CTA -->
        <div class="lg:col-span-4 space-y-6">
          <p class="text-[10px] font-extrabold uppercase tracking-[0.3em] text-stone-400">New Arrivals '26</p>
          <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-white leading-tight">
            Shop By Collection
          </h2>
          <p class="text-xs text-stone-500 dark:text-stone-400 leading-relaxed max-w-sm">
            Explore the newest summer arrivals — fresh prints, breezy fabrics, and styles made for the season.
          </p>
          <button 
            @click="router.push('/shop')"
            class="px-6 py-3 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-900 dark:text-white font-extrabold text-xs uppercase tracking-wider rounded-md transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Shop The Look</span>
            <span>→</span>
          </button>
          
          <!-- Slider Indicator Lines -->
          <div class="flex items-center gap-2 pt-4">
            <span class="w-8 h-0.5 bg-stone-900 dark:bg-white rounded-full"></span>
            <span class="w-4 h-0.5 bg-stone-300 dark:bg-stone-700 rounded-full"></span>
            <span class="w-4 h-0.5 bg-stone-300 dark:bg-stone-700 rounded-full"></span>
            <span class="w-4 h-0.5 bg-stone-300 dark:bg-stone-700 rounded-full"></span>
          </div>
        </div>

        <!-- Right Side: Horizontal Campaign Collection Cards -->
        <div class="lg:col-span-8 flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2">
          
          <!-- Card 1: Monochrome -->
          <div 
            @click="router.push('/shop/Pret')"
            class="flex-none w-[280px] sm:w-[360px] aspect-[4/5] relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm flex-shrink-0"
          >
            <img :src="BS2026_1" alt="Monochrome Collection" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors flex items-center justify-center p-6 text-center">
              <h3 class="text-2xl sm:text-4xl font-extrabold tracking-[0.25em] text-white uppercase drop-shadow-lg">
                MONOCHROME
              </h3>
            </div>
          </div>

          <!-- Card 2: Royal Red -->
          <div 
            @click="router.push('/shop/Bridal')"
            class="flex-none w-[280px] sm:w-[360px] aspect-[4/5] relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm flex-shrink-0"
          >
            <img :src="MB2026_3" alt="Royal Red Collection" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors flex items-center justify-center p-6 text-center">
              <h3 class="text-2xl sm:text-4xl font-extrabold tracking-[0.25em] text-white uppercase drop-shadow-lg">
                ROYAL RED
              </h3>
            </div>
          </div>

          <!-- Card 3: Summer Lawn -->
          <div 
            @click="router.push('/shop/Unstitched')"
            class="flex-none w-[280px] sm:w-[360px] aspect-[4/5] relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm flex-shrink-0"
          >
            <img :src="MB2026_2" alt="Summer Lawn" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors flex items-center justify-center p-6 text-center">
              <h3 class="text-2xl sm:text-4xl font-extrabold tracking-[0.25em] text-white uppercase drop-shadow-lg">
                SUMMER LAWN
              </h3>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         5. EDITORIAL 3-COLUMN LIFESTYLE GRID (MARIA B)
    ═══════════════════════════════════════════ -->
    <section class="py-6 px-6 sm:px-10 lg:px-14">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div 
          @click="router.push('/shop/Bridal')" 
          class="relative aspect-[3/4] group overflow-hidden rounded-xl cursor-pointer shadow-sm border border-stone-200/60 dark:border-white/10"
        >
          <img :src="BridalHeritage" alt="Bridal Couture" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
            <span class="text-white font-bold text-xs uppercase tracking-widest drop-shadow-md">BRIDAL COUTURE</span>
          </div>
        </div>

        <!-- Card 2 -->
        <div 
          @click="router.push('/shop')" 
          class="relative aspect-[3/4] group overflow-hidden rounded-xl cursor-pointer shadow-sm border border-stone-200/60 dark:border-white/10"
        >
          <img :src="ShopInterior" alt="Jewelry &amp; Accessories" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
            <span class="text-white font-bold text-xs uppercase tracking-widest drop-shadow-md">JEWELRY &amp; ACCESSORIES</span>
          </div>
        </div>

        <!-- Card 3 -->
        <div 
          @click="router.push('/shop/Pret')" 
          class="relative aspect-[3/4] group overflow-hidden rounded-xl cursor-pointer shadow-sm border border-stone-200/60 dark:border-white/10"
        >
          <img :src="HeroCollage3" alt="Luxury Accessories" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
            <span class="text-white font-bold text-xs uppercase tracking-widest drop-shadow-md">LUXURY PRET</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         6. NEW ARRIVALS HORIZONTAL PRODUCT CAROUSEL
    ═══════════════════════════════════════════ -->
    <section class="py-12 bg-white dark:bg-[#080808] border-y border-stone-100 dark:border-white/5">
      <div class="w-full space-y-6">
        
        <!-- Header & Nav Tabs -->
        <div class="px-6 sm:px-10 lg:px-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div class="space-y-2">
            <h2 class="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-white uppercase">
              NEW IN
            </h2>
            <div class="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-stone-500">
              <span class="text-black dark:text-white font-bold border-b border-black dark:border-white pb-0.5 cursor-pointer">Unstitched</span>
              <span class="hover:text-black dark:hover:text-white cursor-pointer" @click="router.push('/shop/Pret')">Ready to Wear</span>
              <span class="hover:text-black dark:hover:text-white cursor-pointer" @click="router.push('/shop/Bridal')">Couture</span>
            </div>
          </div>

          <!-- Carousel Controls -->
          <div class="flex items-center gap-2">
            <button 
              @click="scrollNewArrivals('left')" 
              class="w-9 h-9 rounded-full border border-stone-300 dark:border-white/20 flex items-center justify-center text-stone-700 dark:text-white hover:bg-stone-900 hover:text-white transition-all cursor-pointer"
            >
              <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-xs" />
            </button>
            <button 
              @click="scrollNewArrivals('right')" 
              class="w-9 h-9 rounded-full border border-stone-300 dark:border-white/20 flex items-center justify-center text-stone-700 dark:text-white hover:bg-stone-900 hover:text-white transition-all cursor-pointer"
            >
              <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-xs" />
            </button>
          </div>
        </div>

        <!-- Products Track -->
        <div 
          ref="newArrivalsSlider" 
          class="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory px-6 sm:px-10 lg:px-14 py-2 scroll-smooth"
        >
          <div 
            v-for="product in productStore.products.slice(0, 8)" 
            :key="product.id"
            class="flex-none w-[240px] sm:w-[280px] snap-start"
          >
            <ProductCard :product="product" @click-product="goToDetail" />
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         7. FULL-WIDTH EDITORIAL BANNER (SAREE EDIT)
    ═══════════════════════════════════════════ -->
    <section 
      @click="router.push('/shop/Bridal')"
      class="relative my-8 min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden cursor-pointer group"
    >
      <img :src="PakistaniCouture2" alt="Saree Edit" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
      <div class="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors"></div>
      
      <div class="relative z-10 text-center text-white space-y-4 px-6">
        <p class="text-xs uppercase tracking-[0.4em] font-semibold text-amber-300">EXCLUSIVE COUTURE</p>
        <h2 class="text-4xl sm:text-6xl font-serif tracking-wide drop-shadow-lg uppercase">
          SAREE &amp; BRIDAL EDIT
        </h2>
        <button class="px-8 py-3 bg-white text-black font-extrabold text-xs uppercase tracking-widest rounded-full hover:bg-amber-400 transition-all shadow-xl">
          EXPLORE COLLECTION
        </button>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         8. MARIA.B STYLE COUTURE SHOWCASE
    ═══════════════════════════════════════════ -->
    <section class="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 bg-white dark:bg-[#080808] border-b border-stone-100 dark:border-white/5">
      <div class="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        <!-- Left Side: Tall Full-Height Model Image -->
        <div 
          @click="router.push('/shop/Bridal')"
          class="lg:col-span-4 relative min-h-[500px] rounded-2xl overflow-hidden cursor-pointer group shadow-sm"
        >
          <img :src="MB2026_5" alt="Couture Masterpieces" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>

        <!-- Right Side: Couture Header + Product Track -->
        <div class="lg:col-span-8 flex flex-col justify-between space-y-6">
          
          <!-- Header Bar -->
          <div class="flex items-center justify-between pb-2 border-b border-stone-100 dark:border-white/10">
            <h2 class="text-2xl sm:text-3xl font-extrabold tracking-wide text-stone-900 dark:text-white uppercase">
              COUTURE
            </h2>
            <div class="flex items-center gap-4">
              <router-link to="/shop/Bridal" class="text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200 underline hover:text-stone-600">
                View all
              </router-link>
              <div class="flex items-center gap-2">
                <button 
                  @click="scrollCouture('left')"
                  class="w-8 h-8 rounded-full border border-stone-300 dark:border-white/20 flex items-center justify-center text-stone-700 dark:text-white hover:bg-stone-900 hover:text-white transition-all cursor-pointer"
                >
                  <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-[10px]" />
                </button>
                <button 
                  @click="scrollCouture('right')"
                  class="w-8 h-8 rounded-full border border-stone-300 dark:border-white/20 flex items-center justify-center text-stone-700 dark:text-white hover:bg-stone-900 hover:text-white transition-all cursor-pointer"
                >
                  <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-[10px]" />
                </button>
              </div>
            </div>
          </div>

          <!-- Product Track -->
          <div 
            ref="coutureSlider"
            class="flex gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 scroll-smooth"
          >
            <!-- Card 1 -->
            <div @click="router.push('/shop/Bridal')" class="flex-none w-[230px] sm:w-[260px] snap-start space-y-3 cursor-pointer group">
              <div class="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#F2F1EC] dark:bg-stone-900">
                <span class="absolute top-3 left-3 bg-white/90 dark:bg-black/90 text-stone-800 dark:text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm z-10">PRE ORDER</span>
                <img :src="MB2026_1" alt="Bazif Couture" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute bottom-3 left-3 right-3 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-3 py-2 rounded-md flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-stone-800 dark:text-white">View Details →</span>
                  <font-awesome-icon icon="fa-regular fa-heart" class="text-xs text-stone-600 dark:text-stone-300" />
                </div>
              </div>
              <div>
                <p class="text-xs font-bold text-stone-900 dark:text-white uppercase">Bazif</p>
                <p class="text-xs font-extrabold text-stone-900 dark:text-amber-400">Rs.250,000</p>
              </div>
            </div>

            <!-- Card 2 -->
            <div @click="router.push('/shop/Bridal')" class="flex-none w-[230px] sm:w-[260px] snap-start space-y-3 cursor-pointer group">
              <div class="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#F2F1EC] dark:bg-stone-900">
                <span class="absolute top-3 left-3 bg-white/90 dark:bg-black/90 text-stone-800 dark:text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm z-10">PRE ORDER</span>
                <img :src="MB2026_3" alt="Marjan Couture" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute bottom-3 left-3 right-3 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-3 py-2 rounded-md flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-stone-800 dark:text-white">View Details →</span>
                  <font-awesome-icon icon="fa-regular fa-heart" class="text-xs text-stone-600 dark:text-stone-300" />
                </div>
              </div>
              <div>
                <p class="text-xs font-bold text-stone-900 dark:text-white uppercase">Marjan</p>
                <p class="text-xs font-extrabold text-stone-900 dark:text-amber-400">Rs.195,000</p>
              </div>
            </div>

            <!-- Card 3 -->
            <div @click="router.push('/shop/Bridal')" class="flex-none w-[230px] sm:w-[260px] snap-start space-y-3 cursor-pointer group">
              <div class="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#F2F1EC] dark:bg-stone-900">
                <span class="absolute top-3 left-3 bg-white/90 dark:bg-black/90 text-stone-800 dark:text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm z-10">PRE ORDER</span>
                <img :src="BS2026_1" alt="Velmira Couture" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute bottom-3 left-3 right-3 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-3 py-2 rounded-md flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span class="text-[10px] uppercase font-bold tracking-wider text-stone-800 dark:text-white">View Details →</span>
                  <font-awesome-icon icon="fa-regular fa-heart" class="text-xs text-stone-600 dark:text-stone-300" />
                </div>
              </div>
              <div>
                <p class="text-xs font-bold text-stone-900 dark:text-white uppercase">Velmira</p>
                <p class="text-xs font-extrabold text-stone-900 dark:text-amber-400">Rs.250,000</p>
              </div>
            </div>

            <!-- Card 4 -->
            <div @click="router.push('/shop/Bridal')" class="flex-none w-[230px] sm:w-[260px] snap-start space-y-3 cursor-pointer group">
              <div class="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#F2F1EC] dark:bg-stone-900">
                <span class="absolute top-3 left-3 bg-white/90 dark:bg-black/90 text-stone-800 dark:text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm z-10">PRE ORDER</span>
                <img :src="MB2026_4" alt="Yarizeh Couture" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute bottom-3 left-3 right-3 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-3 py-2 rounded-md flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-stone-800 dark:text-white">View Details →</span>
                  <font-awesome-icon icon="fa-regular fa-heart" class="text-xs text-stone-600 dark:text-stone-300" />
                </div>
              </div>
              <div>
                <p class="text-xs font-bold text-stone-900 dark:text-white uppercase">Yarizeh</p>
                <p class="text-xs font-extrabold text-stone-900 dark:text-amber-400">Rs.150,000</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         8. MARIA IS LOVED ❤️ — SOCIAL / INSTAGRAM FEED
    ═══════════════════════════════════════════ -->
    <section class="py-16 bg-[#F8F7F3] dark:bg-[#0A0A0A] border-t border-stone-200/60 dark:border-white/10">
      <div class="max-w-[1600px] mx-auto px-6 space-y-8 text-center">
        
        <div class="space-y-2">
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-white flex items-center justify-center gap-2">
            Maria is Loved <span class="text-red-500">❤️</span>
          </h2>
          <p class="text-xs text-stone-500 dark:text-stone-400">
            Tag us on Instagram <a href="https://instagram.com/ahmadclothfabrics_aroma/" target="_blank" class="font-bold underline text-stone-800 dark:text-stone-200">@ahmadclothfabrics_aroma</a> to be featured
          </p>
        </div>

        <!-- 5 Portrait Social Feed Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div 
            v-for="(img, idx) in [HeroCollage1, HeroCollage2, HeroCollage3, HeroCollage4, PakistaniCouture3]" 
            :key="idx" 
            @click="openZoom(img)"
            class="aspect-[3/4] relative rounded-xl overflow-hidden cursor-pointer group shadow-sm border border-stone-200/60 dark:border-white/10"
          >
            <img :src="img" :alt="'Patron Look ' + (idx + 1)" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
              <font-awesome-icon :icon="['fab', 'instagram']" class="text-2xl" />
            </div>
          </div>
        </div>

      </div>
    </section>



    <!-- ═══════════════════════════════════════════
         HERITAGE & CRAFTSMANSHIP (AdSense Content Boost)
    ═══════════════════════════════════════════ -->
    <!-- <section class="heritage-narrative py-32 bg-[#fafaf8] dark:bg-[#050505] transition-colors duration-700 overflow-hidden">
      <div class="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div class="space-y-12 animate-reveal-left">
          <div class="relative">
            <div class="absolute -left-12 -top-12 text-[var(--primary-gold)]/5 text-9xl font-playfair italic -z-10 select-none">H</div>
            <h3 class="text-[10px] font-bold text-[var(--primary-gold)] tracking-[0.5em] uppercase mb-6">OUR HERITAGE</h3>
            <h2 class="text-4xl md:text-6xl font-playfair italic text-gray-900 dark:text-white leading-tight">Reviving the Soul of <br>Traditional Textiles at AhmadClothesHouse</h2>
          </div>
          <div class="space-y-6 text-stone-500 dark:text-stone-400 leading-loose text-lg font-light">
            <p>
              At AhmadClothesHouse (formerly AHMADCLOTHESFABRICS), we believe that fashion is a bridge between the past and the future. Our boutique is dedicated to the preservation and innovation of traditional Pakistani craftsmanship, offering a curated selection of unstitched ladies' suits, luxury pret, and bespoke bridal wear.
            </p>
            <p>
              Since our establishment in 2026, we have focused on sourcing the highest quality fabrics—from the finest Egyptian cotton to hand-loomed silks and intricate chiffons. Each collection is a masterpiece of design, blending contemporary silhouettes with age-old embroidery techniques like Zardozi, Resham, and Tilla work.
            </p>
            <p>
              Our commitment to excellence extends beyond the garment. We support a network of master artisans in Lahore, ensuring that the legacy of handcrafted couture continues to thrive in a world of fast fashion. When you choose Ahmadcloths, you are choosing more than just an outfit; you are choosing a piece of heritage.
            </p>
            <p>
              Whether you are looking for an elegant unstitched lawn suit for the summer heat or a signature bridal ensemble that captures the essence of tradition, AHMADCLOTHESFABRICS provides an experience that is as unique as the women who wear our designs. Explore our collections and discover the artistry that defines us.
            </p>
          </div>
          <div class="flex items-center gap-12 pt-8 border-t border-[#d4af3711]">
            <div class="text-center">
              <span class="block text-3xl font-playfair italic text-[var(--primary-gold)]">100%</span>
              <span class="text-[8px] font-bold uppercase tracking-widest text-stone-400">Authentic Fabrics</span>
            </div>
            <div class="text-center">
              <span class="block text-3xl font-playfair italic text-[var(--primary-gold)]">Hand</span>
              <span class="text-[8px] font-bold uppercase tracking-widest text-stone-400">Embroidered</span>
            </div>
            <div class="text-center">
              <span class="block text-3xl font-playfair italic text-[var(--primary-gold)]">Ethical</span>
              <span class="text-[8px] font-bold uppercase tracking-widest text-stone-400">Sourcing</span>
            </div>
          </div>
        </div>

        <div class="relative animate-reveal-right">
          <div class="absolute -right-16 -bottom-16 w-64 h-64 bg-[var(--primary-gold)]/5 blur-[100px] rounded-full pointer-events-none"></div>
          <div class="grid grid-cols-2 gap-6 relative z-10">
            <div class="space-y-6 pt-12">
              <img :src="Highlight1" class="w-full h-[350px] object-cover transition-all duration-1000 shadow-2xl hover:scale-105" alt="Premium Pakistani Suit">
              <img :src="Highlight2" class="w-full h-[250px] object-cover transition-all duration-1000 shadow-2xl hover:scale-105" alt="Intricate Embroidery Detail">
            </div>
            <div class="space-y-6">
              <img :src="Highlight3" class="w-full h-[250px] object-cover transition-all duration-1000 shadow-2xl hover:scale-105" alt="Boutique Luxury Pret">
              <img :src="Highlight4" class="w-full h-[350px] object-cover transition-all duration-1000 shadow-2xl hover:scale-105" alt="Luxury Fabric Selection">
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Video Modal -->
    <Transition name="zoom">
      <div v-if="activeVideoId" class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
        <div @click="activeVideoId = null" class="absolute inset-0 bg-black/95 backdrop-blur-xl"></div>
        <div class="relative w-full max-w-lg aspect-[9/16] bg-black shadow-2xl rounded-lg overflow-hidden animate-zoom-in border border-white/10">
          <button @click="activeVideoId = null" class="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all" aria-label="Close Video">
            <font-awesome-icon icon="fa-solid fa-xmark" class="text-xl" />
          </button>
          <iframe 
            class="w-full h-full"
            :src="`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&controls=1&rel=0`"
            frameborder="0"
            allow="autoplay; encrypted-media; compute-pressure"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Transition>

    <!-- (Curated catalog filter section removed per user request) -->

    <!-- ═══════════════════════════════════════════
         IMAGE ZOOM MODAL (Lightbox)
    ═══════════════════════════════════════════ -->
    <transition name="zoom">
      <div v-if="isZoomOpen" class="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-12 cursor-zoom-out" @click="closeZoom">
        <div class="absolute inset-0 bg-black/95 backdrop-blur-3xl"></div>
        
        <!-- Luxury Close Button -->
        <button class="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[111]" aria-label="Close Zoom">
          <font-awesome-icon icon="fa-solid fa-times" class="text-3xl" />
        </button>

        <img :src="zoomImg" class="max-w-full max-h-full object-contain relative z-10 shadow-3xl animate-zoom-in" alt="Zoomed View" width="1200" height="1600">
        
        <div class="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[0.6em] text-[var(--primary-gold)] uppercase animate-fade-in">
          AhmadCloth Luxe Gallery
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'


import NewSuitOffWhite from "../assets/dw_ef26_201_offwhite.jpg"
import NewSuitGreen from "../assets/dw_ef22_09r1_green.jpg"
import NewSuitBlack from "../assets/dw_ef26_14_black.webp"

import PakistaniCouture3 from "../assets/ai_new/hero_collage_3.jpg"
import PakistaniCouture2 from "../assets/ai_new/hero_collage_2.jpg"
import BridalHeritage from "../assets/ai_new/bridal_highlight.jpg"
import PakistaniCouture1 from "../assets/ai_new/hero_collage_1.jpg"
import PakistaniCouture4 from "../assets/ai_new/hero_collage_4.jpg"

import MB2026_1 from "../assets/ai_new/mb_2026_1.jpg"
import MB2026_2 from "../assets/ai_new/mb_2026_2.jpg"
import MB2026_3 from "../assets/ai_new/mb_2026_3.jpg"
import MB2026_4 from "../assets/ai_new/mb_2026_4.jpg"
import MB2026_5 from "../assets/ai_new/mb_2026_5.jpg"
import BS2026_1 from "../assets/ai_new/bs_2026_1.jpg"
import BS2026_3 from "../assets/ai_new/bs_2026_3.jpg"

import HeroCollage1 from "../assets/ai_new/hero_collage_1.jpg"
import HeroCollage2 from "../assets/ai_new/hero_collage_2.jpg"
import HeroCollage3 from "../assets/ai_new/hero_collage_3.jpg"
import HeroCollage4 from "../assets/ai_new/hero_collage_4.jpg"

import Highlight1 from "../assets/ai_new/bridal_highlight.jpg"
import Highlight2 from "../assets/ai_new/hero_collage_2.jpg"
import Highlight3 from "../assets/ai_new/hero_collage_3.jpg"
import Highlight4 from "../assets/ai_new/hero_collage_4.jpg"
import ShopInterior from "../assets/ai_new/shop_interior.jpg"
import shopHeader from "../assets/ai_new/shop_header.jpg"

import { useProductsStore } from '../stores/products'
import ProductCard from '../components/ProductCard.vue'
import JewelrySponsored from "../assets/ai_new/bridal_highlight.jpg"
import { blogs as allBlogs } from '../data/blogs'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ── Title character arrays for split-text ───────────────────
const titleLine1 = 'TIMELESS'.split('')
const titleLine2 = 'COUTURE'.split('')

// ── GSAP Refs ──────────────────────────────────────────
const heroSection     = ref(null)
const cursorOuter    = ref(null)
const cursorInner    = ref(null)
const spotlight      = ref(null)
const particleCanvas = ref(null)
const collageCol     = ref(null)
const colImg0        = ref(null)
const colImg1        = ref(null)
const colImg2        = ref(null)
const colImg3        = ref(null)
const textCol        = ref(null)
const heroLabel      = ref(null)
const heroTitle      = ref(null)
const heroOrnament   = ref(null)
const heroDesc       = ref(null)
const heroCta        = ref(null)
const heroSocial     = ref(null)
const ctaPrimary     = ref(null)
const ctaSecondary   = ref(null)
const floatingBadge  = ref(null)
const discountBubble = ref(null)
const scrollIndicator = ref(null)
const isZoomOpen = ref(false)
const zoomImg = ref('')

const currentBgSlide = ref(0)
const bgSlides = [
  { image: HeroCollage1, title: 'Unstitched Lawn 2026' },
  { image: HeroCollage2, title: 'Luxury Pret Collection' },
  { image: HeroCollage3, title: 'Hand-Embroidered Fabrics' },
  { image: HeroCollage4, title: 'Bespoke Bridal Wear' }
]

let bgSliderInterval = null

onMounted(() => {
  bgSliderInterval = setInterval(() => {
    currentBgSlide.value = (currentBgSlide.value + 1) % bgSlides.length
  }, 4500)
})

onUnmounted(() => {
  if (bgSliderInterval) clearInterval(bgSliderInterval)
})

const isSocialDockOpen = ref(true)
const isExpanded = ref(false)
const isExiting = ref(false)
const currentHeroIndex = ref(0)
const scrollY = ref(0)
const heroTimer = ref(null)

const azadiSlider = ref(null)
const newArrivalsSlider = ref(null)
const coutureSlider = ref(null)

const scrollAzadi = (direction) => {
  if (azadiSlider.value) {
    const dist = direction === 'left' ? -340 : 340
    azadiSlider.value.scrollBy({ left: dist, behavior: 'smooth' })
  }
}

const scrollNewArrivals = (direction) => {
  if (newArrivalsSlider.value) {
    const dist = direction === 'left' ? -340 : 340
    newArrivalsSlider.value.scrollBy({ left: dist, behavior: 'smooth' })
  }
}

const scrollCouture = (direction) => {
  if (coutureSlider.value) {
    const dist = direction === 'left' ? -300 : 300
    coutureSlider.value.scrollBy({ left: dist, behavior: 'smooth' })
  }
}

const homeBlogs = computed(() => {
  return (allBlogs || []).slice(0, 3)
})

const scrollToDiscovery = () => {
  document.getElementById('discovery')?.scrollIntoView({ behavior: 'smooth' })
}

const openZoom = (img) => {
  zoomImg.value = img
  isZoomOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeZoom = () => {
  isZoomOpen.value = false
  document.body.style.overflow = ''
}

// ── Particle System ────────────────────────
function initParticles() {
  const canvas = particleCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  let particles = []
  let animId

  function resize() {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }
  resize()
  window.addEventListener('resize', resize)

  const GOLD = ['rgba(212,175,55,', 'rgba(255,215,100,', 'rgba(184,148,34,']
  for (let i = 0; i < 55; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.4,
      alpha: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.35 + 0.08,
      drift: (Math.random() - 0.5) * 0.3,
      color: GOLD[Math.floor(Math.random() * GOLD.length)]
    })
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particles.forEach(p => {
      p.y -= p.speed
      p.x += p.drift
      p.alpha += (Math.random() - 0.5) * 0.01
      p.alpha = Math.max(0.05, Math.min(0.7, p.alpha))
      if (p.y < -10) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width }
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = p.color + p.alpha + ')'
      ctx.fill()
    })
    animId = requestAnimationFrame(animate)
  }
  animate()
  return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
}

// ── Mouse Cursor Effect ────────────────────────
let cursorRaf = null
let mouseX = 0, mouseY = 0
let outerX = 0, outerY = 0

function initCursor() {
  const outer = cursorOuter.value
  const inner = cursorInner.value
  if (!outer || !inner) return

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    gsap.to(inner, { x: mouseX, y: mouseY, duration: 0.12, ease: 'power2.out' })
  })

  function lerp(a, b, t) { return a + (b - a) * t }
  function loop() {
    outerX = lerp(outerX, mouseX, 0.09)
    outerY = lerp(outerY, mouseY, 0.09)
    gsap.set(outer, { x: outerX, y: outerY })
    cursorRaf = requestAnimationFrame(loop)
  }
  loop()

  setTimeout(() => {
    const magnetEls = document.querySelectorAll('.gsap-btn-primary, .gsap-btn-secondary')
    magnetEls.forEach(el => {
      el.addEventListener('mouseenter', () => gsap.to(outer, { scale: 2.5, duration: 0.3, ease: 'back.out(2)' }))
      el.addEventListener('mouseleave', () => gsap.to(outer, { scale: 1, duration: 0.3, ease: 'back.out(2)' }))
    })

    const imgEls = document.querySelectorAll('.gsap-collage-item')
    imgEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        gsap.to(outer, { scale: 1.8, borderColor: 'rgba(212,175,55,1)', duration: 0.3 })
        gsap.to(inner, { scale: 0.3, backgroundColor: 'rgba(212,175,55,1)', duration: 0.3 })
      })
      el.addEventListener('mouseleave', () => {
        gsap.to(outer, { scale: 1, borderColor: 'rgba(212,175,55,0.6)', duration: 0.3 })
        gsap.to(inner, { scale: 1, backgroundColor: 'rgba(212,175,55,1)', duration: 0.3 })
      })
    })
  }, 1000)
}

function onHeroMouseMove(e) {
  if (!spotlight.value || !heroSection.value) return
  const rect = heroSection.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  gsap.to(spotlight.value, {
    left: x + 'px', top: y + 'px',
    duration: 0.6, ease: 'power2.out'
  })
}

// ── Hero Animation Timeline ────────────────────
function initHeroGSAP() {
  const chars = heroTitle.value?.querySelectorAll('.hero-char')
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

  gsap.set([collageCol.value, colImg0.value, colImg1.value, colImg2.value, colImg3.value], { opacity: 0, y: 60 })
  gsap.set(heroLabel.value, { opacity: 0, y: 20 })
  gsap.set(chars, { y: 120, opacity: 0 })
  gsap.set(heroOrnament.value, { opacity: 0, scaleX: 0 })
  gsap.set(heroDesc.value, { opacity: 0, y: 30 })
  gsap.set(heroCta.value, { opacity: 0, y: 30 })
  gsap.set(heroSocial.value, { opacity: 0, y: 20 })
  gsap.set(scrollIndicator.value, { opacity: 0, y: 10 })
  if (floatingBadge.value) gsap.set(floatingBadge.value, { opacity: 0, scale: 0.7, rotation: -15 })
  if (discountBubble.value) gsap.set(discountBubble.value, { opacity: 0, scale: 0.7 })

  tl.to(heroLabel.value, { opacity: 1, y: 0, duration: 0.8 })
    .to(chars, { y: 0, opacity: 1, duration: 0.9, stagger: 0.045, ease: 'power4.out' }, '-=0.4')
    .to(heroOrnament.value, { opacity: 1, scaleX: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
    .to(heroDesc.value, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
    .to(heroCta.value, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
    .to(heroSocial.value, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
    .to(colImg0.value, { opacity: 1, y: 0, duration: 1.1 }, 0.2)
    .to(colImg1.value, { opacity: 1, y: 0, duration: 1.1 }, 0.35)
    .to(colImg2.value, { opacity: 1, y: 0, duration: 1.1 }, 0.5)
    .to(colImg3.value, { opacity: 1, y: 0, duration: 1.1 }, 0.65)
    .to(scrollIndicator.value, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')

  if (floatingBadge.value) {
    tl.to(floatingBadge.value, { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: 'elastic.out(1, 0.7)' }, '-=0.5')
    gsap.to(floatingBadge.value, { y: -10, duration: 2.5, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2 })
  }

  if (discountBubble.value) {
    tl.to(discountBubble.value, { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)' }, '-=0.3')
  }

  window.addEventListener('scroll', () => {
    const sy = window.scrollY
    if (collageCol.value) {
      gsap.to(collageCol.value, { y: sy * 0.12, duration: 0.5, ease: 'none' })
    }
  }, { passive: true })
}

// ── Global Scroll Animations ───────────────────
function initScrollAnimations() {
  // Grab all sections except the hero
  const sections = document.querySelectorAll('section:not(.gsap-hero)')
  
  sections.forEach((sec) => {
    gsap.fromTo(sec, 
      { opacity: 0, y: 80 }, 
      {
        opacity: 1, 
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sec,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )

    // Also float up individual child elements to create a staggered beautiful effect
    const childrenToAnimate = sec.querySelectorAll('h2, h3, p, img, .filter-group, .product-card, .patron-card, .atelier-img-card')
    if (childrenToAnimate.length > 0) {
      gsap.fromTo(childrenToAnimate,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      )
    }
  })
}

const heroSlides = [
  { image: PakistaniCouture2, subtitle: 'LUXURY BRIDAL', title1: 'PAKISTANI', titleHighlight: 'BRIDAL', title2: 'COUTURE', description: 'Masterpieces of hand-embroidered Pakistani bridal couture. Intricate zardozi and gold tilla work handcrafted by Lahores finest master artisans.' },
  { image: PakistaniCouture3, subtitle: 'PREMIUM LAWN', title1: 'LAHORE', titleHighlight: 'UNSTITCHED', title2: 'HERITAGE', description: 'Authentic Pakistani summer lawn collection. Experience the finest high-thread count combed cotton, digital prints, and ethnic embroidery.' },
  { image: PakistaniCouture1, subtitle: 'DESIGNER PRET', title1: 'ROYAL', titleHighlight: 'PREMIUM', title2: 'LUXURY', description: 'Exquisite ready-to-wear kurtas celebrating the spirit of South Asian fashion, styled for modern elegance worldwide.' },
  { image: PakistaniCouture4, subtitle: 'M.PRINT', title1: 'CHIC', titleHighlight: 'ETHNIC', title2: 'ARTISTRY', description: 'Signature Pakistani digital prints and block-printed lawn, showcasing centuries of textile artistry and color heritage.' }
]

// Hero slideshow active index
const heroFocus = ref(0)

// Animated stat counters
const heroLiveStats = [
  { label: 'Products', display: '300+' },
  { label: 'Patrons', display: '10K+' },
  { label: 'Countries', display: '25+' }
]

const router = useRouter()
const productStore = useProductsStore()
const limit = ref(12)
const selectedCategory = ref('all')
const selectedNature = ref('all')
const maxPrice = ref(500000)
const searchQuery = ref('')
const isCatOpen = ref(false)
const isNatureOpen = ref(false)

const resetFilters = () => {
  selectedCategory.value = 'all'
  selectedNature.value = 'all'
  maxPrice.value = 500000
  searchQuery.value = ''
}

const brandStats = [
  { label: 'Master Artisans', value: '50+' },
  { label: 'Handcrafted', value: '100%' },
  { label: 'Exclusive Designs', value: '1000+' }
]

const craftItems = [
  {
    title: 'Heritage Weaving',
    desc: 'Our fabrics are woven using traditional techniques passed down through generations of master artisans.',
    image: PakistaniCouture3
  },
  {
    title: 'Intricate Embroidery',
    desc: 'Each piece features hand-crafted embroidery, using the finest silk threads and traditional tilla work.',
    image: PakistaniCouture1
  },
  {
    title: 'Bespoke Tailoring',
    desc: 'Precision is our hallmark. Each garment is tailored to perfection, ensuring a flawless silhouette.',
    image: PakistaniCouture4
  }
]

const patronStories = [
  {
    quote: "The attention to detail at AHMADCLOTHESFABRICS is simply unparalleled. Their bridal couture is a masterclass in Lahore's artisanal elegance.",
    name: "Mahnoor Khan",
    role: "Lead Bridal Stylist",
    avatar: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=200&h=200&fit=crop"
  },
  {
    quote: "Every piece feels like a journey through a traditional workshop. The unstitched fabric quality is the finest heritage silk I've ever seen.",
    name: "Zeeshan Ali",
    role: "Couture Photographer",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&fit=crop"
  },
  {
    quote: "AHMADCLOTHESFABRICS has become our go-to for all family festivities. Their festive collections are as much a work of art as they are beautiful.",
    name: "Sarah Ahmed",
    role: "Textile Consultant",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop"
  }
]

const faqs = [
  {
    q: 'What types of fabrics do you use?',
    a: 'We use the highest quality fabrics including premium Egyptian cotton, hand-loomed silk, luxury lawn, and delicate chiffons. Each piece is selected for its durability and luxurious feel.'
  },
  {
    q: 'Do you offer international shipping?',
    a: 'Yes, AHMADCLOTHESFABRICS provides secure worldwide shipping. Delivery times and costs vary depending on the destination. You can track your order in real-time through our order tracking portal.'
  },
  {
    q: 'How can I care for my luxury garments?',
    a: 'We recommend professional dry cleaning for all our embroidered and luxury pret pieces. For unstitched lawn, gentle hand washing with mild detergent is recommended to maintain the fabric\'s integrity and color.'
  },
  {
    q: 'Can I customize a bridal outfit?',
    a: 'Yes, we offer custom bridal consultations in Lahore. Our team of master artisans and designers will work with you to create a signature bridal ensemble that reflects your personal style.'
  }
]

const activeVideoId = ref(null)
const openVideoModal = (id) => {
  activeVideoId.value = id
}

const heroWrapStyle = computed(() => ({
  transform: `translateY(${scrollY.value * 0.35}px) scale(${isExpanded.value ? 1.05 : 1})`,
  filter: isExpanded.value ? 'brightness(0.6) blur(2px)' : 'none'
}))

const handleScroll = () => {
  scrollY.value = window.scrollY
}

const resetHeroTimer = () => {
  if (heroTimer.value) clearInterval(heroTimer.value)
  heroTimer.value = setInterval(() => {
    if (isExpanded.value && !isExiting.value) {
      nextHero()
    }
  }, 10000)
}

const handleHeroClick = () => {
  if (isExiting.value) return
  if (!isExpanded.value) isExpanded.value = true
  else {
    isExiting.value = true
    setTimeout(() => {
      currentHeroIndex.value = (currentHeroIndex.value + 1) % heroSlides.length
      isExiting.value = false
      isExpanded.value = false
      resetHeroTimer()
    }, 1200)
  }
}

const onImageClick = i => i === currentHeroIndex.value ? handleHeroClick() : goToSlide(i)
const nextHero = () => { isExiting.value = true; setTimeout(() => { currentHeroIndex.value = (currentHeroIndex.value + 1) % heroSlides.length; isExiting.value = false; resetHeroTimer() }, 1000) }
const prevHero = () => { isExiting.value = true; setTimeout(() => { currentHeroIndex.value = (currentHeroIndex.value - 1 + heroSlides.length) % heroSlides.length; isExiting.value = false; resetHeroTimer() }, 1000) }
const goToSlide = i => { isExiting.value = true; setTimeout(() => { currentHeroIndex.value = i; isExiting.value = false; resetHeroTimer() }, 1000) }

const getHeroImageState = index => {
  const len = heroSlides.length
  const focus = currentHeroIndex.value
  const b1 = (focus + 1) % len
  const b2 = (focus + 2) % len
  if (isExiting.value && index === focus) return 'exiting'
  if (index === focus) return isExpanded.value ? 'expanded' : 'focus'
  if (isExpanded.value) return 'idle'
  if (index === b1) return 'behind-1'
  if (index === b2) return 'behind-2'
  return 'idle'
}

onMounted(() => {
  productStore.fetchProducts()
  resetHeroTimer()
  window.addEventListener('scroll', handleScroll, { passive: true })

  // Hero slideshow auto-rotation — switch every 5 seconds
  const heroSlideTimer = setInterval(() => {
    heroFocus.value = (heroFocus.value + 1) % heroSlides.length
  }, 5000)
  window.__heroSlideTimer = heroSlideTimer

  // Close dropdowns when clicking outside them
  const closeDropdowns = (e) => {
    const catWrap = document.getElementById('cat-dropdown-wrap')
    const natWrap = document.getElementById('nature-dropdown-wrap')
    if (catWrap && !catWrap.contains(e.target)) isCatOpen.value = false
    if (natWrap && !natWrap.contains(e.target)) isNatureOpen.value = false
  }
  document.addEventListener('mousedown', closeDropdowns)
  window.__closeDropdowns = closeDropdowns

  // FAQ Schema
  if (faqs && faqs.length > 0) {
    let faqSchema = document.getElementById('faq-schema-json-ld')
    if (!faqSchema) {
      faqSchema = document.createElement('script')
      faqSchema.id = 'faq-schema-json-ld'
      faqSchema.type = 'application/ld+json'
      document.head.appendChild(faqSchema)
    }
    faqSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    })
  }

  // LocalBusiness & Breadcrumb Schema for Home
  let homeSchema = document.getElementById('home-schema-json-ld')
  if (!homeSchema) {
    homeSchema = document.createElement('script')
    homeSchema.id = 'home-schema-json-ld'
    homeSchema.type = 'application/ld+json'
    document.head.appendChild(homeSchema)
  }
  homeSchema.text = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "ClothingStore",
      "name": "Ahmad Cloth House",
      "alternateName": "AhmadClothesHouse",
      "url": "https://ahmad-cloths.vercel.app/",
      "logo": "https://ahmad-cloths.vercel.app/favicon.svg",
      "image": "https://ahmad-cloths.vercel.app/og-image.png",
      "description": "Premium Pakistani fashion boutique specializing in luxury unstitched lawn, bridal couture, and designer pret wear.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Wapda Town, Ameer Chowk",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "postalCode": "54000",
        "addressCountry": "PK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 31.4251,
        "longitude": 74.2705
      },
      "telephone": "+923416887454",
      "priceRange": "$$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "11:00",
          "closes": "21:00"
        }
      ],
      "sameAs": [
        "https://facebook.com/profile.php?id=61573629329844",
        "https://instagram.com/ahmadclothfabrics_aroma/"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ahmad-cloths.vercel.app/"
        }
      ]
    }
  ])
})
onUnmounted(() => {
  if (heroTimer.value) clearInterval(heroTimer.value)
  if (window.__heroSlideTimer) clearInterval(window.__heroSlideTimer)
  if (window.__closeDropdowns) document.removeEventListener('mousedown', window.__closeDropdowns)
  window.removeEventListener('scroll', handleScroll)
})

// Filtering logic
const filteredProducts = computed(() =>
  productStore.products.filter(p => {
    const matchCat = selectedCategory.value === 'all' || p.category?.toLowerCase() === selectedCategory.value.toLowerCase() || p.parentCategory?.toLowerCase() === selectedCategory.value.toLowerCase()
    const matchNature = selectedNature.value === 'all' || p.nature?.toLowerCase() === selectedNature.value.toLowerCase()
    const matchPrice = p.price <= maxPrice.value
    const q = searchQuery.value.trim().toLowerCase()
    const matchSearch = !q || p.name?.toLowerCase().includes(q) || p.category?.toLowerCase().includes(q) || p.parentCategory?.toLowerCase().includes(q)
    return matchCat && matchNature && matchPrice && matchSearch
  })
)

const displayedProducts = computed(() => filteredProducts.value.slice(0, limit.value))
const hasMore = computed(() => limit.value < filteredProducts.value.length)
const loadMore = () => limit.value += 12
watch([selectedCategory, selectedNature, maxPrice, searchQuery], () => limit.value = 12)
const goToDetail = product => router.push(`/product/${product.id}`)

const featuredDiscountProduct = computed(() => {
  if (!productStore.products || productStore.products.length === 0) return null;
  // Try to find a real discounted product
  const discounted = productStore.products.filter(p => p.discount > 0);
  if (discounted.length > 0) {
    return discounted.sort((a, b) => b.discount - a.discount)[0];
  }
  // If no products have a discount in the database, grab the very first product 
  // and artificially apply a 30% discount merely for presentation in the Hero Section.
  const sample = { ...productStore.products[0] };
  sample.discount = 30; // Fake it for the Hero display
  return sample;
})

const categoryTiles = [
  { name: 'Unstitched Lawn', sub: 'Summer Collections', image: PakistaniCouture2 },
  { name: 'Bridal Couture', sub: 'Wedding Essentials', image: BridalHeritage },
  { name: 'Luxury Chiffon', sub: 'Evening Wear', image: PakistaniCouture1 },
  { name: 'Pret-Wear', sub: 'Ready-to-Wear', image: PakistaniCouture4 }
]
</script>


<style scoped>
@reference "../style.css";

.hero-luxury-collage {
  background: #fafaf8;
}

.dark .hero-luxury-collage {
  background: #050505;
}

.collage-item {
  position: relative;
  border: 1px solid rgba(0,0,0,0.03);
}

.dark .collage-item {
  border-color: rgba(255,255,255,0.03);
}

.collage-item img {
  transform-origin: center;
}

.animate-ken-burns {
  animation: ken-burns 20s ease infinite alternate;
}

@keyframes ken-burns {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.1);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease forwards;
}

.animate-fade-in-delayed {
  animation: fade-in 1s ease forwards 0.5s;
  opacity: 0;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-scroll-line {
  animation: scroll-line 2s infinite;
}

@keyframes scroll-line {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(100%);
  }
}

.zoom-enter-active, .zoom-leave-active {
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.zoom-enter-from, .zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in-ani {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.animate-zoom-in {
  animation: zoom-in-ani 0.7s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-scale-enter-from {
  opacity: 0;
  transform: scale(1.1);
}

.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.slide-up-enter-active {
  transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.vertical-text {
  writing-mode: vertical-rl;
}

.hero-main-title {
  letter-spacing: -0.02em;
}

.atelier-img-card {
  position: relative;
  overflow: hidden;
}

.btn-outline-gold {
  @apply px-10 py-4 border border-[var(--primary-gold)] text-[var(--primary-gold)] text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:bg-[var(--primary-gold)] hover:text-white;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-slow-reverse {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
}

/* Premium Button Redesign */
.premium-btn {
  @apply relative px-8 py-4 text-[11px] font-bold tracking-[0.4em] uppercase transition-all duration-700 ease-in-out flex items-center gap-4 overflow-hidden;
  border-radius: 2px;
}

.premium-btn.primary {
  @apply bg-[var(--primary-gold)] text-black border border-[var(--primary-gold)];
  box-shadow: 0 10px 40px -10px rgba(184, 134, 11, 0.4);
}

.premium-btn.primary .btn-glow {
  @apply absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] transition-all duration-1000;
}

.premium-btn.primary:hover .btn-glow {
  @apply translate-x-full;
}

.premium-btn.primary:hover {
  @apply bg-black text-white border-black scale-[1.03];
  box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.5);
}

.premium-btn.secondary {
  @apply bg-transparent text-white border border-white/20 backdrop-blur-md;
}

.premium-btn.secondary .btn-border-draw {
  @apply absolute inset-0 border-2 border-transparent transition-all duration-700;
}

.premium-btn.secondary:hover {
  @apply border-white bg-white text-black scale-[1.03];
  box-shadow: 0 20px 50px -10px rgba(255, 255, 255, 0.15);
}

.btn-text {
  @apply relative z-10;
}

.btn-icon {
  @apply w-4 h-4 transition-transform duration-500 group-hover:translate-x-2 relative z-10;
}

/* Old styles to be replaced/removed if they conflict, but keeping them for consistency with other parts if they don't */
.gsap-btn-primary {
  display: none; /* Hide old if accidentally used */
}

.luxury-home-range {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 2px;
  background: #d4af3722;
  outline: none;
  accent-color: #d4af37;
}

.dark .luxury-home-range {
  background: rgba(255, 255, 255, 0.1);
}

.luxury-home-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: #111;
  border: 2px solid #d4af37;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1), background 0.3s ease;
}

.dark .luxury-home-range::-webkit-slider-thumb {
  background: white;
}

.luxury-home-range::-webkit-slider-thumb:hover { 
  transform: scale(1.4); 
  background: #d4af37;
}

.gsap-btn-secondary {
  display: none; /* Hide old if accidentally used */
}

.animate-spin-slow {
  animation: spin-slow 15s linear infinite;
}

.animate-spin-slow-reverse {
  animation: spin-slow-reverse 10s linear infinite;
}

@keyframes reveal-left {
  from {
    opacity: 0;
    transform: translateX(20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-reveal-left {
  animation: reveal-left 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

/* ══ LUXURY HERO V2 STYLES ══ */

/* Ken Burns zoom-pan on slideshow background images */
.hero-ken-burns {
  animation: heroKenBurns 12s ease-in-out infinite alternate;
  transform-origin: center;
}

@keyframes heroKenBurns {
  0%   { transform: scale(1.08) translate(0, 0); }
  33%  { transform: scale(1.12) translate(-1%, -0.5%); }
  66%  { transform: scale(1.06) translate(0.5%, 1%); }
  100% { transform: scale(1.1)  translate(-0.5%, -1%); }
}

/* Slide crossfade transition */
.hero-slide-fade-enter-active,
.hero-slide-fade-leave-active {
  transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  inset: 0;
}

.hero-slide-fade-enter-from,
.hero-slide-fade-leave-to {
  opacity: 0;
}

.hero-slide-fade-enter-to,
.hero-slide-fade-leave-from {
  opacity: 1;
}

/* Marquee continuous scroll */
@keyframes heroMarquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.hero-marquee-track {
  animation: heroMarquee 35s linear infinite;
  will-change: transform;
}

.hero-marquee-track:hover {
  animation-play-state: paused;
}

/* luxury-hero-v2 section base */
.luxury-hero-v2 {
  background: #000;
}

/* Stat value hover glow */
.hero-stat-val {
  display: inline-block;
  transition: text-shadow 0.4s ease;
}

.hero-stat-val:hover {
  text-shadow: 0 0 20px rgba(212,175,55,0.6);
}

/* ══ CUSTOM DROPDOWN SLIDE ANIMATION ══ */
.dropdown-slide-enter-active {
  transition: opacity 0.18s ease, transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
}
.dropdown-slide-leave-active {
  transition: opacity 0.12s ease, transform 0.12s cubic-bezier(0.4, 0, 0.2, 1);
}
.dropdown-slide-enter-from,
.dropdown-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
.dropdown-slide-enter-to,
.dropdown-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
