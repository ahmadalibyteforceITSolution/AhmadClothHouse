<template>
  <div class="about-page min-h-screen bg-[#FCFCFA] dark:bg-[#080808] transition-colors duration-300 font-sans text-stone-800 dark:text-stone-200 pb-28">

    <!-- SEO Content (Visually Hidden) -->
    <section class="sr-only">
      <h1>About Ahmad Clothes House | Premium Pakistani Unstitched Fabrics & Bridal Couture</h1>
      <p>Established in Lahore, Pakistan, Ahmad Clothes House is a premier boutique specializing in unstitched lawn, designer ready-to-wear pret, and handcrafted bridal couture. Worldwide shipping to USA, UK, UAE and beyond.</p>
    </section>

    <!-- ══════════ MASTHEAD ══════════ -->
    <header class="pt-10 sm:pt-14 pb-12 px-6 sm:px-10 lg:px-14 border-b border-stone-200/70 dark:border-white/10 text-center max-w-4xl mx-auto">
      <!-- Breadcrumb -->
      <nav class="flex items-center justify-center gap-2 text-[11px] text-stone-400 uppercase tracking-widest mb-6">
        <router-link to="/" class="hover:text-black dark:hover:text-white transition-colors">Home</router-link>
        <span>&rsaquo;</span>
        <span class="text-[#D4AF37] font-semibold tracking-wider">The House Heritage</span>
      </nav>

      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 dark:bg-white/5 border border-[#D4AF37]/30 mb-4">
        <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
        <span class="text-[9px] uppercase font-bold tracking-[0.35em] text-[#8B6508] dark:text-[#D4AF37]">Lahore Atelier Heritage</span>
      </div>

      <!-- Main Headline -->
      <h1 class="text-3xl sm:text-5xl lg:text-6xl font-editorial font-normal tracking-tight text-stone-900 dark:text-white mb-4">
        The Art of Pakistani Couture
      </h1>

      <p class="text-xs sm:text-sm md:text-base text-stone-500 dark:text-stone-400 font-light max-w-2xl mx-auto leading-relaxed">
        Reviving ancestral Mughal weaving, delicate resham embroideries, and master tailoring to craft enduring wardrobe treasures for modern royalty across the globe.
      </p>
    </header>

    <!-- ══════════ HERO SPLIT STORY ══════════ -->
    <section class="max-w-7xl mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <!-- Left Text Narrative -->
        <div class="lg:col-span-6 space-y-6">
          <span class="text-[9.5px] font-bold uppercase tracking-[0.35em] text-[#C9973A] block">Our Genesis</span>
          
          <h2 class="text-2xl sm:text-4xl font-editorial font-normal text-stone-900 dark:text-white leading-tight">
            Rooted in Lahore, Cherished Across Continents
          </h2>
          
          <p class="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-light leading-relaxed">
            Headquartered at the historic fashion crossroads of Bagrian Chowk, Lahore, <strong>Ahmad Clothes House</strong> was founded with an unyielding devotion to artisanal textile excellence. We curate the highest thread-count Swiss lawns, luminous pure silk chiffons, and intricate hand-embellished velvets.
          </p>
          
          <p class="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-light leading-relaxed">
            Every motif in our unstitched and pret collections represents hundreds of hours of delicate handwork by master needleworkers, celebrating Pakistan's rich textile legacy with a modern editorial sensibility.
          </p>

          <!-- Metrics / Numbers -->
          <div class="grid grid-cols-3 gap-6 pt-8 border-t border-stone-200 dark:border-white/10">
            <div>
              <h4 class="text-2xl sm:text-3xl font-editorial font-bold text-stone-900 dark:text-white text-[#B8860B] dark:text-[#D4AF37]">5,000+</h4>
              <p class="text-[9.5px] text-stone-500 dark:text-stone-400 font-semibold uppercase tracking-wider mt-1">Curated Silhouettes</p>
            </div>
            <div>
              <h4 class="text-2xl sm:text-3xl font-editorial font-bold text-stone-900 dark:text-white text-[#B8860B] dark:text-[#D4AF37]">30+</h4>
              <p class="text-[9.5px] text-stone-500 dark:text-stone-400 font-semibold uppercase tracking-wider mt-1">Countries Served</p>
            </div>
            <div>
              <h4 class="text-2xl sm:text-3xl font-editorial font-bold text-stone-900 dark:text-white text-[#B8860B] dark:text-[#D4AF37]">100%</h4>
              <p class="text-[9.5px] text-stone-500 dark:text-stone-400 font-semibold uppercase tracking-wider mt-1">Authentic Craft</p>
            </div>
          </div>
        </div>

        <!-- Right Photo Showcase -->
        <div class="lg:col-span-6 relative">
          <div class="aspect-[4/5] rounded-2xl overflow-hidden border border-stone-200/80 dark:border-white/10 shadow-2xl bg-stone-100 dark:bg-stone-900">
            <img 
              :src="Hero2 || DEFAULT_IMAGE" 
              alt="Artisanal Handcrafting at Ahmad Clothes House Atelier"
              class="w-full h-full object-cover"
              @error="(e) => e.target.src = DEFAULT_IMAGE"
            />
          </div>
          <div class="absolute -bottom-6 -left-4 sm:left-6 bg-stone-950/90 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-[#D4AF37]/30 text-white shadow-xl max-w-xs">
            <div class="flex items-center gap-2 text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest mb-1">
              <span>◆</span>
              <span>Master Atelier</span>
            </div>
            <p class="text-xs text-stone-300 font-light">
              Crafted in limited seasonal editions using heirloom hand-loom techniques.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- ══════════ THREE PILLARS OF EXCELLENCE ══════════ -->
    <section class="bg-stone-50 dark:bg-[#0D0C0A] py-20 px-4 sm:px-6 lg:px-8 border-y border-stone-200/80 dark:border-white/10">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span class="text-[9.5px] uppercase font-bold tracking-[0.35em] text-[#C9973A]">Our Guiding Values</span>
          <h2 class="text-2xl sm:text-4xl font-editorial font-normal text-stone-900 dark:text-white">
            The Pillars of Ahmad Clothes House
          </h2>
          <p class="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
            Every garment that leaves our atelier carries an unyielding commitment to heritage, authenticity, and precision.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Pillar 1 -->
          <div class="p-8 bg-white dark:bg-[#12110E] rounded-2xl border border-stone-200/70 dark:border-white/10 shadow-sm space-y-4 hover:border-[#D4AF37]/50 transition-all duration-300 group">
            <div class="w-12 h-12 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
              <font-awesome-icon :icon="['fas', 'gem']" />
            </div>
            <h3 class="text-lg font-editorial font-semibold text-stone-900 dark:text-white">
              Heirloom Quality Weaves
            </h3>
            <p class="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-light">
              We reject fleeting synthetics in favor of long-staple Egyptian and Swiss cotton lawn, pure silk organza, and natural chiffon that breathe and drape effortlessly.
            </p>
          </div>

          <!-- Pillar 2 -->
          <div class="p-8 bg-white dark:bg-[#12110E] rounded-2xl border border-stone-200/70 dark:border-white/10 shadow-sm space-y-4 hover:border-[#D4AF37]/50 transition-all duration-300 group">
            <div class="w-12 h-12 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
              <font-awesome-icon :icon="['fas', 'hand-holding-heart']" />
            </div>
            <h3 class="text-lg font-editorial font-semibold text-stone-900 dark:text-white">
              Ethical Artisan Guilds
            </h3>
            <p class="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-light">
              We empower generational needlecrafters across Punjab, ensuring fair living wages, dignified studios, and preserving ancient zardozi and dabka traditions.
            </p>
          </div>

          <!-- Pillar 3 -->
          <div class="p-8 bg-white dark:bg-[#12110E] rounded-2xl border border-stone-200/70 dark:border-white/10 shadow-sm space-y-4 hover:border-[#D4AF37]/50 transition-all duration-300 group">
            <div class="w-12 h-12 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
              <font-awesome-icon :icon="['fas', 'globe']" />
            </div>
            <h3 class="text-lg font-editorial font-semibold text-stone-900 dark:text-white">
              Global Concierge & Express Delivery
            </h3>
            <p class="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-light">
              Delivering bespoke packages to USA, UK, Canada, UAE, and Europe with insured global express couriers and dedicated customer concierge support.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════ CTA EDITORIAL BANNER ══════════ -->
    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24 text-center">
      <div class="p-10 sm:p-14 rounded-3xl bg-[#141414] text-white border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
        <div class="relative z-10 max-w-2xl mx-auto space-y-6">
          <span class="text-[9.5px] uppercase font-bold tracking-[0.35em] text-[#D4AF37] block">Discover The Collection</span>
          
          <h2 class="text-2xl sm:text-4xl font-editorial font-light text-white leading-tight">
            Embrace the Radiance of Haute Couture
          </h2>
          
          <p class="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
            Experience our latest seasonal unstitched lawn, festive velvet edits, and bespoke bridal ensembles.
          </p>
          
          <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <router-link 
              to="/shop" 
              class="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black text-xs font-bold uppercase tracking-[0.25em] rounded-full hover:brightness-110 transition-all shadow-md hover:scale-105 cursor-pointer"
            >
              Explore Boutique Shop
            </router-link>
            
            <router-link 
              to="/contact" 
              class="w-full sm:w-auto px-8 py-3.5 border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] text-xs font-bold uppercase tracking-[0.25em] rounded-full transition-all cursor-pointer"
            >
              Consult With Our Atelier
            </router-link>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import Hero1 from "../assets/ai_new/hero_collage_1.jpg"
import Hero2 from "../assets/ai_new/hero_collage_2.jpg"

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1200'
</script>
