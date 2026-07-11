<template>
   <div class="min-h-screen bg-[#fafaf8] dark:bg-[#050505] transition-colors duration-700 font-sans selection:bg-amber-500/30">

      <!-- ══════════ SEO HEADING BLOCK (VISUALLY HIDDEN) ══════════ -->
      <section class="sr-only">
         <h1>About Ahmad Cloth House | Premium Pakistani Unstitched Fabrics & Bridal Couture</h1>
         <h2>Lahore's Flagship Fashion Sanctuary for Swiss Lawn, Chiffon, and Silk Collections</h2>
         <p>
            Established in Lahore, Pakistan, Ahmad Cloth House is a premier boutique specializing in premium unstitched lawn, designer ready-to-wear pret, and bespoke handcrafted bridal couture. Our collections feature raw silk, pure chiffon, Swiss cotton, and traditional hand-embroidery including zardozi, tilla, and gotta work. We ship worldwide to fashion patrons in the USA, UK, UAE, and beyond.
         </p>
         <meta name="keywords" content="Ahmad Cloth House, unstitched lawn Pakistan, bridal couture Lahore, Pakistani designer replica, Maria B lawn, Gul Ahmed unstitched, Wapda Town clothing boutique, designer pret Lahore, pure chiffon dupatta, luxury unstitched fabrics" />
      </section>

      <!-- ══════════ CINEMATIC HERO BANNER ══════════ -->
      <section class="relative h-[70vh] min-h-[550px] flex items-center justify-center overflow-hidden bg-[#fafaf8] dark:bg-[#050505]">
         <div class="absolute inset-0 z-0">
            <img :src="Hero1" class="w-full h-full object-cover opacity-100 animate-slow-zoom" 
                 alt="Ahmad Cloth House - Luxury Pakistani Unstitched Fabrics & Couture Heritage" />
            <!-- Soft bottom gradient transition -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#fafaf8] via-transparent to-transparent dark:from-[#050505]"></div>
         </div>

         <div class="max-w-4xl mx-auto px-6 w-full relative z-10 flex flex-col items-center">
            <!-- Luxury Glass Title Card -->
            <div class="w-full bg-black/40 backdrop-blur-md border border-white/10 p-10 md:p-14 text-center rounded-sm shadow-2xl animate-reveal">
               <div class="flex items-center justify-center gap-4 mb-6">
                  <div class="h-px w-8 bg-[var(--primary-gold)]"></div>
                  <span class="text-[var(--primary-gold)] font-bold text-[10px] uppercase tracking-[0.6em]">ESTABLISHED MMXXVI</span>
                  <div class="h-px w-8 bg-[var(--primary-gold)]"></div>
               </div>

               <h1 class="text-4xl md:text-7xl font-playfair italic text-white leading-none tracking-tight mb-8">
                  Artisanal <br>
                  <span class="text-[var(--primary-gold)] not-italic font-sans tracking-[0.2em] font-light text-2xl md:text-4xl block mt-2">HERITAGE</span>
               </h1>

               <p class="text-xs md:text-sm text-white/95 font-light tracking-[0.15em] max-w-xl mx-auto leading-relaxed">
                  Reviving ancestral Pakistani weaving, hand-embroidery, and textile artistry to orchestrate the luxury wear of tomorrow.
               </p>
            </div>
         </div>
      </section>

      <!-- ══════════ BRAND NARRATIVE SECTION ══════════ -->
      <section class="max-w-7xl mx-auto py-24 px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
         <div class="space-y-10 animate-reveal-left">
            <div class="relative">
               <span class="text-[10px] font-bold text-[var(--primary-gold)] tracking-[0.3em] uppercase block mb-3">OUR ORIGIN STORY</span>
               <h2 class="text-3xl md:text-5xl font-playfair italic text-stone-900 dark:text-white leading-tight">
                  Born from Textile Passion
               </h2>
               <p class="text-stone-600 dark:text-stone-400 leading-relaxed text-sm font-light mt-6">
                  Headquartered in Wapda Town, Lahore, <strong>Ahmad Cloth House</strong> was founded with a singular mission: to bring premium unstitched Pakistani fabrics and luxury bridal attire to discerning buyers worldwide. We curate the highest thread-count Swiss lawns, luxurious pure silk chiffons, and heavy organzas, hand-finished by master artisans representing centuries of embroidery techniques.
               </p>
               <p class="text-stone-600 dark:text-stone-400 leading-relaxed text-sm font-light mt-4">
                  Whether you are seeking timeless daily unstitched linen, festive luxury lawn with intricate tilla work, or bespoke bridal couture fit for royalty, our boutique represents the apex of South Asian fashion craftsmanship.
               </p>
            </div>

            <!-- Stats Bar -->
            <div class="grid grid-cols-3 gap-8 pt-8 border-t border-stone-200 dark:border-white/5">
               <div class="group">
                  <h4 class="text-3xl font-playfair italic text-[#c9973a] mb-1">5,000+</h4>
                  <p class="text-[8px] font-bold text-stone-400 dark:text-stone-500 tracking-[0.2em] uppercase">Unique Designs</p>
               </div>
               <div class="group">
                  <h4 class="text-3xl font-playfair italic text-[#c9973a] mb-1">100k+</h4>
                  <p class="text-[8px] font-bold text-stone-400 dark:text-stone-500 tracking-[0.2em] uppercase">Loyal Patrons</p>
               </div>
               <div class="group">
                  <h4 class="text-3xl font-playfair italic text-[#c9973a] mb-1">25+</h4>
                  <p class="text-[8px] font-bold text-stone-400 dark:text-stone-500 tracking-[0.2em] uppercase">Countries Served</p>
               </div>
            </div>
         </div>

         <!-- Narrative Image -->
         <div class="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl group border border-stone-200 dark:border-white/5 animate-reveal-right">
            <div class="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img :src="Hero2"
               class="w-full h-full object-cover transition-transform duration-[4s] ease-out group-hover:scale-105"
               alt="Ahmad Cloth House - Master Weaving and Handcrafted Embroidery in Lahore Studio"
               loading="lazy">
         </div>
      </section>

      <!-- ══════════ CORE MISSION & VISION ══════════ -->
      <section class="bg-white dark:bg-[#0a0a0a] py-24 px-8 border-y border-stone-100 dark:border-white/5 transition-colors duration-500">
         <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
               <div class="space-y-4">
                  <span class="text-[9px] font-bold text-[#c9973a] tracking-[0.3em] uppercase">OUR MISSION</span>
                  <h4 class="text-2xl font-playfair italic text-stone-900 dark:text-white">Empowering Elegance</h4>
                  <p class="text-stone-500 dark:text-stone-400 text-xs leading-relaxed font-light">
                     To present Pakistan's rich textile legacy through premium quality fabrics, combining traditional artisanal values with modern silhouettes for our global clientele.
                  </p>
               </div>
               <div class="space-y-4">
                  <span class="text-[9px] font-bold text-[#c9973a] tracking-[0.3em] uppercase">OUR VISION</span>
                  <h4 class="text-2xl font-playfair italic text-stone-900 dark:text-white">Global Ambassador</h4>
                  <p class="text-stone-500 dark:text-stone-400 text-xs leading-relaxed font-light">
                     To establish Ahmad Cloth House as a premium household name for unstitched couture internationally, promoting ethical artisan wages and sustainable design.
                  </p>
               </div>
               <div class="space-y-4">
                  <span class="text-[9px] font-bold text-[#c9973a] tracking-[0.3em] uppercase">OUR VALUES</span>
                  <h4 class="text-2xl font-playfair italic text-stone-900 dark:text-white">Ethical Artistry</h4>
                  <p class="text-stone-500 dark:text-stone-400 text-xs leading-relaxed font-light">
                     We guarantee fair trade principles for our local Lahori artisans, ensuring ancient techniques like zardozi tilla and handblock printing survive for generations.
                  </p>
               </div>
            </div>
         </div>
      </section>

      <!-- ══════════ ARTISAN SPOTLIGHT ══════════ -->
      <section class="py-24 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
         <div class="order-2 lg:order-1 relative aspect-square overflow-hidden rounded-sm shadow-xl group border border-stone-200 dark:border-white/5 animate-reveal-left">
            <img :src="Hero3"
               class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
               alt="Traditional Embroidery Artistry at Ahmad Cloth House Studio"
               loading="lazy">
         </div>
         <div class="order-1 lg:order-2 space-y-8 animate-reveal-right">
            <span class="text-[9px] font-bold text-[#c9973a] tracking-[0.3em] uppercase">THE CRAFT</span>
            <h2 class="text-4xl font-playfair italic text-stone-900 dark:text-white leading-tight">Mastery in Every Single Thread</h2>
            <p class="text-stone-600 dark:text-stone-400 text-sm leading-relaxed font-light">
               Each embroidered motif in our unstitched chiffon and lawn suits is handcrafted by local artisans. Our designs utilize traditional Pakistani craft styles, including intricate hand-cut work, shadow work, sequins applique, and heavy gold tilla. 
            </p>
            <div class="pt-4">
               <router-link to="/shop" class="inline-flex items-center gap-3 border border-stone-900 dark:border-white text-stone-900 dark:text-white hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-black px-6 py-3 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 group">
                  Explore Catalog
                  <span class="group-hover:translate-x-1 transition-transform">→</span>
               </router-link>
            </div>
         </div>
      </section>

      <!-- ══════════ SUSTAINABILITY & ETHOS BANNER ══════════ -->
      <section class="bg-black py-32 px-8 relative overflow-hidden border-t border-white/5">
         <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#d4af3711_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
         </div>
         <div class="max-w-4xl mx-auto text-center relative z-10">
            <div class="flex items-center justify-center gap-4 mb-10">
               <div class="h-px w-10 bg-[var(--primary-gold)]/30"></div>
               <h2 class="text-[9px] font-bold text-[var(--primary-gold)] uppercase tracking-[0.5em]">Heritage & Value</h2>
               <div class="h-px w-10 bg-[var(--primary-gold)]/30"></div>
            </div>
            <p class="text-xl md:text-4xl font-light text-white leading-relaxed italic font-playfair px-6">
               "A couture experience should not sacrifice quality. We prioritize organic Swiss lawn cotton, luxury raw silk, and hand-embroidered details to ensure your attire is fit for your most precious moments."
            </p>
            <div class="mt-12">
               <span class="text-[var(--primary-gold)] font-serif italic text-lg">— Creative Team, Ahmad Cloth House</span>
            </div>
         </div>
      </section>

      <!-- ══════════ ARTISAN CREATION PROCESS ══════════ -->
      <section class="bg-white dark:bg-[#080808] py-24 px-8 border-b border-stone-100 dark:border-white/5">
         <div class="max-w-7xl mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
               <div class="space-y-4">
                  <div class="flex items-center gap-3">
                     <div class="h-[1px] w-6 bg-amber-400"></div>
                     <span class="text-amber-500 font-bold text-[9px] uppercase tracking-[0.4em]">THE PROCESS</span>
                  </div>
                  <h2 class="text-3xl md:text-5xl font-playfair uppercase text-stone-900 dark:text-white italic">
                     Creation Method
                  </h2>
               </div>
               <p class="text-stone-500 dark:text-stone-400 max-w-sm text-xs leading-relaxed font-light">
                  From fabric thread sourcing to design plotting and hand-finishing, explore our traditional production methods.
               </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
               <div v-for="(step, i) in artisanProcess" :key="i" class="group relative pt-10 border-t border-stone-100 dark:border-white/5">
                  <span class="absolute top-0 left-0 text-3xl font-black text-amber-500/10 group-hover:text-amber-500/20 transition-colors">0{{ i + 1 }}</span>
                  <h3 class="text-base font-bold uppercase tracking-wide text-stone-800 dark:text-white mb-3 font-playfair italic">{{ step.title }}</h3>
                  <p class="text-stone-500 dark:text-stone-400 text-xs leading-relaxed font-light">{{ step.desc }}</p>
               </div>
            </div>
         </div>
      </section>

      <!-- ══════════ GLOBAL SOURCE MAPPING ══════════ -->
      <section class="relative py-32 bg-black overflow-hidden">
         <div class="absolute inset-0 opacity-20 bg-cover bg-center" :style="{ backgroundImage: `url(${Hero4})` }"></div>
         <div class="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black"></div>
         
         <div class="max-w-7xl mx-auto px-8 relative z-10 text-center">
            <div class="inline-block px-6 py-2.5 border border-amber-500/20 backdrop-blur-md mb-8">
               <span class="text-amber-500 font-bold text-[9px] uppercase tracking-[0.5em]">FABRICS SOURCING</span>
            </div>
            <h2 class="text-3xl md:text-6xl font-playfair italic text-white mb-16">Global Sourcing, <span class="text-amber-500">Local Artistry</span></h2>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
               <div v-for="source in globalSources" :key="source.ingredient" class="space-y-3">
                  <div class="text-amber-500 font-playfair italic text-2xl">{{ source.origin }}</div>
                  <div class="text-white font-bold text-[9px] uppercase tracking-[0.3em]">{{ source.ingredient }}</div>
                  <div class="h-[1px] w-6 bg-amber-500/20 mx-auto mt-3"></div>
               </div>
            </div>
         </div>
      </section>

      <!-- ══════════ SOCIAL & COMMUNITY CONNECT ══════════ -->
      <div class="max-w-7xl mx-auto px-8 py-20 flex flex-col items-center">
         <span class="text-[9px] font-bold text-[#c9973a] tracking-[0.3em] uppercase block mb-3">STAY CONNECTED</span>
         <h3 class="text-2xl font-playfair italic mb-8 text-stone-900 dark:text-white">Follow the House</h3>
         <div class="flex items-center gap-5 text-2xl">
            <a href="https://facebook.com/profile.php?id=61573629329844" target="_blank" rel="noopener" class="text-stone-400 hover:text-[#1877F2] hover:scale-110 transition-all duration-300" aria-label="Facebook"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
            <a href="https://instagram.com/ahmadclothfabrics_aroma/" target="_blank" rel="noopener" class="text-stone-400 hover:text-[#E1306C] hover:scale-110 transition-all duration-300" aria-label="Instagram"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
            <a href="https://www.tiktok.com/@theahmadfabrices_aroma" target="_blank" rel="noopener" class="text-stone-400 hover:text-[#000000] dark:hover:text-[#ffffff] hover:scale-110 transition-all duration-300" aria-label="TikTok"><font-awesome-icon :icon="['fab', 'tiktok']" /></a>
            <a href="https://www.youtube.com/@ahmadfabrics_aroma" target="_blank" rel="noopener" class="text-stone-400 hover:text-[#FF0000] hover:scale-110 transition-all duration-300" aria-label="YouTube"><font-awesome-icon :icon="['fab', 'youtube']" /></a>
            <a href="https://wa.me/923416887454" target="_blank" rel="noopener" class="text-stone-400 hover:text-[#25D366] hover:scale-110 transition-all duration-300" aria-label="WhatsApp"><font-awesome-icon :icon="['fab', 'whatsapp']" /></a>
         </div>
      </div>

   </div>
</template>

<script setup>
import { onMounted } from 'vue'

import Hero1 from "../assets/ai/hero_1.png"
import Hero2 from "../assets/ai/hero_2.png"
import Hero3 from "../assets/ai/hero_3.png"
import Hero4 from "../assets/ai/hero_4.png"

const philosophy = [
   { title: 'Artisanal Mastery', icon: 'fa-solid fa-gem', desc: 'Every creation is handcrafted with precision, ensuring a perfect balance of design and quality in every stitch.' },
   { title: 'Fashion Innovation', icon: 'fa-solid fa-vest', desc: 'Bridging traditional craftsmanship with modern silhouettes. Our designs are created to evoke elegance while surprising your style.' },
   { title: 'Ethical Fashion', icon: 'fa-solid fa-leaf', desc: 'Fashion is not wasteful. Our supply chain focuses on local artisans and sustainable practices, minimizing footprint while maximizing beauty.' }
]

const artisanProcess = [
   { title: 'Curation', desc: 'Selection of ultra-premium lawn cotton and raw silk from certified premium sources.' },
   { title: 'Designing', desc: 'Meticulous sketching, cataloging, and pattern mapping to achieve unique silhouettes.' },
   { title: 'Embroidery', desc: 'Hand-crafting zardozi, gold tilla, and shadow work threads via master artisans.' },
   { title: 'Finishing', desc: 'Precision double-stitching and final boutique quality audit before delivery.' }
]

const globalSources = [
   { origin: 'Switzerland', ingredient: 'Lawn Cotton' },
   { origin: 'China', ingredient: 'Pure Silk' },
   { origin: 'Italy', ingredient: 'Premium Velvet' },
   { origin: 'Pakistan', ingredient: 'Handcrafted Tilla work' }
]

onMounted(() => {
   window.scrollTo(0, 0)
})
</script>

<style scoped>
.animate-slow-zoom {
   animation: slow-zoom 40s infinite linear alternate;
}

@keyframes slow-zoom {
   from {
      transform: scale(1);
   }
   to {
      transform: scale(1.1);
   }
}

.animate-reveal {
   animation: reveal-bottom 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

.animate-reveal-delay {
   animation: reveal-bottom 1.4s cubic-bezier(0.19, 1, 0.22, 1) 0.3s forwards;
   opacity: 0;
}

.animate-reveal-left {
   animation: reveal-left 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

.animate-reveal-right {
   animation: reveal-right 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

@keyframes reveal-bottom {
   from {
      opacity: 0;
      transform: translateY(40px);
   }
   to {
      opacity: 1;
      transform: translateY(0);
   }
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

.shadow-xl {
   box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.1);
}

.font-playfair {
   font-family: 'Playfair Display', serif;
}
</style>
