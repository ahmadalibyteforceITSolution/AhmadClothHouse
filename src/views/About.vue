<template>
  <div class="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-300 font-sans text-[#111111] dark:text-white">

    <!-- SEO Content (Visually Hidden) -->
    <section class="sr-only">
      <h1>About Ahmad Cloth House | Premium Pakistani Unstitched Fabrics & Bridal Couture</h1>
      <p>Established in Lahore, Pakistan, Ahmad Cloth House is a premier boutique specializing in unstitched lawn, designer ready-to-wear pret, and handcrafted bridal couture. Worldwide shipping to USA, UK, UAE and beyond.</p>
    </section>

    <!-- Header / Banner -->
    <section class="bg-white dark:bg-[#111111] border-b border-[#E5E7EB] dark:border-white/10 py-16 px-6 text-center">
      <div class="max-w-3xl mx-auto space-y-4">
        <span class="text-xs font-bold uppercase tracking-widest text-stone-400">Established 2026</span>
        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111111] dark:text-white">Our Story & Heritage</h1>
        <p class="text-xs md:text-sm text-stone-500 leading-relaxed max-w-xl mx-auto">
          Reviving ancestral Pakistani weaving, hand-embroidery, and textile artistry to orchestrate the luxury wear of tomorrow.
        </p>
      </div>
    </section>

    <!-- Main Story Grid -->
    <section class="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="space-y-6">
        <span class="text-xs font-bold text-amber-600 uppercase tracking-widest block">Born from Textile Passion</span>
        <h2 class="text-2xl md:text-4xl font-extrabold text-[#111111] dark:text-white leading-tight">
          Pakistani Textiles, Delivered Worldwide
        </h2>
        <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
          Headquartered at Bagrian Chowk, Lahore, <strong>Ahmad Cloth House</strong> was founded with a singular mission: to bring premium unstitched Pakistani fabrics and luxury bridal attire to discerning buyers worldwide. We curate the highest thread-count Swiss lawns, luxurious pure silk chiffons, and heavy organzas, hand-finished by master artisans.
        </p>
        <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
          Whether you are seeking timeless daily unstitched linen, festive luxury lawn with intricate tilla work, or bespoke bridal couture fit for royalty, our boutique represents the apex of South Asian fashion craftsmanship.
        </p>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-6 pt-6 border-t border-stone-200 dark:border-white/10">
          <div>
            <h4 class="text-2xl font-black text-[#111111] dark:text-white">5,000+</h4>
            <p class="text-[10px] text-stone-500 font-semibold uppercase tracking-wider">Unique Designs</p>
          </div>
          <div>
            <h4 class="text-2xl font-black text-[#111111] dark:text-white">100k+</h4>
            <p class="text-[10px] text-stone-500 font-semibold uppercase tracking-wider">Happy Customers</p>
          </div>
          <div>
            <h4 class="text-2xl font-black text-[#111111] dark:text-white">25+</h4>
            <p class="text-[10px] text-stone-500 font-semibold uppercase tracking-wider">Countries Served</p>
          </div>
        </div>
      </div>

      <!-- Image -->
      <div class="aspect-[4/5] rounded-lg overflow-hidden border border-[#E5E7EB] dark:border-white/10 shadow-sm">
        <img :src="Hero2" class="w-full h-full object-cover" alt="Artisanal Handcrafting at Ahmad Cloth House Studio">
      </div>
    </section>

    <!-- Mission & Values Grid -->
    <section class="bg-white dark:bg-[#111111] py-16 px-6 border-y border-[#E5E7EB] dark:border-white/10">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="p-6 bg-stone-50 dark:bg-white/5 rounded-md space-y-3">
          <font-awesome-icon icon="fa-solid fa-gem" class="text-amber-600 text-xl" />
          <h3 class="text-base font-bold text-[#111111] dark:text-white">Our Mission</h3>
          <p class="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
            To present Pakistan's rich textile legacy through premium quality fabrics, combining traditional artisanal values with modern silhouettes for our global clientele.
          </p>
        </div>

        <div class="p-6 bg-stone-50 dark:bg-white/5 rounded-md space-y-3">
          <font-awesome-icon icon="fa-solid fa-earth-americas" class="text-amber-600 text-xl" />
          <h3 class="text-base font-bold text-[#111111] dark:text-white">Our Vision</h3>
          <p class="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
            To establish Ahmad Cloth House as a household name for unstitched couture internationally, promoting ethical artisan wages and sustainable design.
          </p>
        </div>

        <div class="p-6 bg-stone-50 dark:bg-white/5 rounded-md space-y-3">
          <font-awesome-icon icon="fa-solid fa-hand-holding-heart" class="text-amber-600 text-xl" />
          <h3 class="text-base font-bold text-[#111111] dark:text-white">Ethical Artistry</h3>
          <p class="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
            We guarantee fair trade principles for our local Lahori artisans, ensuring ancient techniques like zardozi tilla and handblock printing survive for generations.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="py-16 px-6 text-center">
      <div class="max-w-2xl mx-auto space-y-6">
        <h2 class="text-2xl font-bold text-[#111111] dark:text-white">Ready to Explore Our Catalog?</h2>
        <p class="text-xs text-stone-500">Discover our latest unstitched luxury lawn, pret collections, and bridal wear.</p>
        <router-link to="/shop" class="btn-shopify inline-flex">
          Explore Shop
        </router-link>
      </div>
    </section>

  </div>
</template>

<script setup>
import Hero1 from "../assets/ai_new/hero_collage_1.jpg"
import Hero2 from "../assets/ai_new/hero_collage_2.jpg"
</script>
