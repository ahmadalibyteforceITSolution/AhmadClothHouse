<template>
   <div
      class="min-h-screen bg-[#fafaf8] dark:bg-[#050505] transition-colors duration-700 font-sans selection:bg-amber-500/30">

      <!-- SEO CONTENT (VISUALLY HIDDEN) -->
      <section class="sr-only">
         <h2>About Ahmadcloths house | Our Fashion Heritage</h2>
         <p>Learn about our commitment to artisanal mastery, ethical fashion, and design innovation. Since 2026, Ahmadcloths house has been dedicated to using premium fabrics for our handcrafted luxury apparel and bridal couture.</p>
         <ul>
            <li>Artisan Fashion Heritage</li>
            <li>Master Designers</li>
            <li>Premium Luxury Fabrics</li>
            <li>Sustainable Fashion Practices</li>
            <li>Handcrafted Couture Excellence</li>
         </ul>
      </section>

      <!-- Hero Archive Section -->
      <section class="relative h-[80vh] min-h-[650px] overflow-hidden bg-black flex items-center px-6">
         <!-- Dynamic Background Artifact -->
         <div class="absolute inset-0 opacity-40 scale-105 animate-slow-zoom">
            <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1800&auto=format&fit=crop"
               class="w-full h-full object-cover grayscale brightness-50" alt="Ahmadcloths house Fashion Heritage - Artisan Weaving Tradition" />
         </div>
         <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/60 pointer-events-none">
         </div>

         <div class="max-w-7xl mx-auto w-full relative z-10 text-center">
            <div class="flex flex-col items-center gap-6 mb-8 animate-reveal">
               <h1 class="text-3xl sm:text-4xl font-playfair tracking-[0.3em] font-light text-white uppercase">AHMADCLOTHS HOUSE</h1>
               <div class="h-[1px] w-16 bg-[var(--primary-gold)]"></div>
               <span class="text-[var(--primary-gold)] font-bold text-[10px] uppercase tracking-[0.6em] block">ESTABLISHED
                  MMXXVI</span>
            </div>

            <h1
               class="text-6xl md:text-9xl font-light uppercase tracking-tighter leading-[0.9] text-white transition-all font-playfair italic underline decoration-[var(--primary-gold)]/10 underline-offset-[20px] mb-12">
               The Heritage <br>
               <span class="text-[var(--primary-gold)] font-sans tracking-[0.2em] font-light ml-4 uppercase not-italic">of
                  Ahmadcloths</span>
            </h1>

            <p
               class="text-[11px] md:text-base font-bold tracking-[0.5em] text-white/40 uppercase max-w-3xl mx-auto leading-relaxed animate-reveal-delay">
               "A journey from artisanal passion to couture excellence. We craft the elegant moments of tomorrow."
            </p>
         </div>

         <!-- Downward Perspective Scroll -->
         <div class="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-40">
            <div class="w-[1px] h-20 bg-gradient-to-b from-[var(--primary-gold)] to-transparent"></div>
            <span class="text-[8px] font-bold uppercase tracking-[0.6em] text-white">THE PERSPECTIVE</span>
         </div>
      </section>

      <!-- Narrative Section -->
      <section class="max-w-7xl mx-auto py-40 px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
         <div class="space-y-16 animate-reveal-left">
            <div class="relative">
               <div class="absolute -left-12 top-0 text-[var(--primary-gold)]/10 text-9xl font-playfair italic -z-10 select-none">F
               </div>
               <h2
                  class="text-4xl md:text-5xl font-light uppercase tracking-tighter text-gray-900 dark:text-white mb-8 font-playfair italic">
                  Born from Passion</h2>
               <p
                  class="text-stone-500 dark:text-stone-400 leading-loose text-lg font-light transition-all first-letter:text-5xl first-letter:font-playfair first-letter:text-[var(--primary-gold)] first-letter:mr-3 first-letter:float-left">
                  Founded in 2026, Ahmadcloths house was materialized to bridge the void between mass-produced apparel and the
                  artisanal soul of traditional craftsmanship. We believe every moment deserves an ensemble that
                  mirrors your unique style and elegance.
               </p>
            </div>

            <div class="grid grid-cols-2 gap-12 pt-10 border-t border-[#d4af3711]">
               <div class="group">
                  <h4
                     class="text-5xl font-light text-[var(--primary-gold)] font-playfair italic mb-3 group-hover:scale-105 transition-transform duration-700 inline-block pointer-events-none">
                     5k+</h4>
                  <p
                     class="text-[9px] uppercase font-bold text-stone-400 dark:text-stone-500 tracking-[0.4em] leading-tight">
                     EXCLUSIVE DESIGNS</p>
               </div>
               <div class="group">
                  <h4
                     class="text-5xl font-light text-[var(--primary-gold)] font-playfair italic mb-3 group-hover:scale-105 transition-transform duration-700 inline-block pointer-events-none">
                     100k</h4>
                  <p
                     class="text-[9px] uppercase font-bold text-stone-400 dark:text-stone-500 tracking-[0.4em] leading-tight">
                     LOYAL PATRONS</p>
               </div>
            </div>
         </div>

         <div class="relative aspect-[4/5] shadow-3xl group overflow-hidden animate-reveal-right">
            <div class="absolute inset-0 bg-[var(--primary-gold)]/10 mix-blend-overlay z-10 pointer-events-none"></div>
            <div
               class="absolute inset-0 border border-white/10 group-hover:border-[var(--primary-gold)]/20 transition-colors duration-700 z-20 pointer-events-none m-8">
            </div>
            <img src="https://images.unsplash.com/photo-1544441893-675973e31985?w=1200&auto=format&fit=crop"
               class="w-full h-full object-cover grayscale transition-transform duration-[3s] group-hover:scale-110"
               alt="Artisan Tailoring at Ahmadcloths house Studio">
            <div class="absolute bottom-12 left-12 z-20">
               <span
                  class="text-[9px] font-bold text-white px-6 py-3 border border-white/20 backdrop-blur-3xl uppercase tracking-[0.5em] block transition-all hover:bg-[var(--primary-gold)] hover:border-[var(--primary-gold)] pointer-events-auto cursor-default">VIEW
                  EDITORIAL</span>
            </div>
         </div>
      </section>

      <!-- Ethos Divider -->
      <section class="bg-black py-48 px-8 relative overflow-hidden border-t border-white/5">
         <div class="absolute inset-0 opacity-10">
            <div
               class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#d4af3711_1px,_transparent_1px)] bg-[size:40px_40px]">
            </div>
         </div>
         <div class="max-w-5xl mx-auto text-center relative z-10">
            <div class="flex items-center justify-center gap-6 mb-16">
               <div class="h-[1px] w-12 bg-[var(--primary-gold)]/30"></div>
               <h2 class="text-[10px] font-bold text-[var(--primary-gold)] uppercase tracking-[0.6em]">Sustainability & Ethos</h2>
               <div class="h-[1px] w-12 bg-[var(--primary-gold)]/30"></div>
            </div>
            <p
               class="text-2xl md:text-5xl font-light text-white leading-snug italic font-playfair transition-all transform hover:scale-[1.02] duration-700 px-6">
               "Our vision is a world where fashion does not sacrifice quality. We utilize premium fabrics
               ensuring your look is as elegant as your occasion."
            </p>
            <div class="mt-20">
               <span class="text-[var(--primary-gold)] font-serif italic text-2xl">— Lead Designer of Ahmadcloths house</span>
            </div>
         </div>
      </section>

      <!-- Philosophy Grid -->
      <section class="max-w-7xl mx-auto py-40 px-8">
         <div class="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div v-for="(p, i) in philosophy" :key="i" class="space-y-8 animate-reveal"
               :style="{ animationDelay: `${i * 0.2}s` }">
               <div
                  class="w-16 h-16 rounded-full border border-[var(--primary-gold)]/20 bg-[var(--primary-gold)]/5 flex items-center justify-center text-[var(--primary-gold)] text-2xl group transition-all duration-700 hover:bg-[var(--primary-gold)] hover:text-white">
                  <font-awesome-icon :icon="p.icon" class="transition-transform group-hover:rotate-[15deg]" />
               </div>
               <h3
                  class="text-xl font-light uppercase tracking-tight dark:text-white font-playfair italic underline decoration-[var(--primary-gold)]/10 underline-offset-8">
                  {{ p.title }}</h3>
               <p class="text-stone-500 dark:text-stone-400 text-sm font-light leading-relaxed tracking-wide">{{ p.desc
                  }}</p>
            </div>
         </div>
      </section>

      <!-- ═══════════════════════════════════════════
           THE ARTISAN PROCESS (NEW)
      ═══════════════════════════════════════════ -->
      <section class="bg-white dark:bg-[#080808] py-40 px-8">
         <div class="max-w-7xl mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
               <div class="space-y-6">
                  <div class="flex items-center gap-3">
                     <div class="h-[1px] w-8 bg-amber-400"></div>
                     <span class="text-amber-500 font-black text-[9px] uppercase tracking-[0.5em]">THE METHOD</span>
                  </div>
                  <h2 class="text-4xl md:text-6xl font-black font-playfair uppercase text-gray-900 dark:text-white italic">
                     Choreography of <br> <span class="text-amber-500 not-italic font-sans tracking-widest">CREATION</span>
                  </h2>
               </div>
               <p class="text-stone-500 dark:text-stone-400 max-w-sm text-sm leading-loose font-light">
                  From the first sketch to the final stitch, our process is a symphony of design, fabric selection, and craftsmanship.
               </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
               <div v-for="(step, i) in artisanProcess" :key="i" class="group relative pt-12 border-t border-gray-100 dark:border-white/5">
                  <span class="absolute top-0 left-0 text-5xl font-black text-amber-500/10 group-hover:text-amber-500/20 transition-colors">0{{ i + 1 }}</span>
                  <h3 class="text-lg font-black uppercase tracking-tighter text-gray-900 dark:text-white mb-4 font-playfair italic underline decoration-amber-500/10 underline-offset-8">{{ step.title }}</h3>
                  <p class="text-stone-500 dark:text-stone-400 text-xs leading-relaxed font-light">{{ step.desc }}</p>
               </div>
            </div>
         </div>
      </section>

      <!-- ═══════════════════════════════════════════
           GLOBAL SOURCING (NEW)
      ═══════════════════════════════════════════ -->
      <section class="relative py-40 bg-black overflow-hidden">
         <div class="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1800&auto=format&fit=crop')] bg-cover bg-center grayscale"></div>
         <div class="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
         
         <div class="max-w-7xl mx-auto px-8 relative z-10 text-center">
            <div class="inline-block px-8 py-3 border border-amber-500/20 backdrop-blur-3xl mb-12">
               <span class="text-amber-500 font-black text-[9px] uppercase tracking-[0.6em]">PREMIUM FABRICS</span>
            </div>
            <h2 class="text-5xl md:text-8xl font-black font-playfair italic text-white mb-20">Sourced from the <span class="text-amber-500">Source</span></h2>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
               <div v-for="source in globalSources" :key="source.ingredient" class="space-y-4">
                  <div class="text-amber-500 font-playfair italic text-3xl">{{ source.origin }}</div>
                  <div class="text-white font-black text-[10px] uppercase tracking-[0.4em]">{{ source.ingredient }}</div>
                  <div class="h-[1px] w-8 bg-amber-500/30 mx-auto mt-4"></div>
               </div>
            </div>
         </div>
      </section>

   </div>
</template>

<script setup>
import { onMounted } from 'vue'
const Fugible = "https://loremflickr.com/200/80/fashion,logo?lock=1"

const philosophy = [
   { title: 'Artisanal Mastery', icon: 'fa-solid fa-gem', desc: 'Every creation is handcrafted with precision, ensuring a perfect balance of design and quality in every stitch.' },
   { title: 'Fashion Innovation', icon: 'fa-solid fa-vest', desc: 'Bridging traditional craftsmanship with modern silhouettes. Our designs are created to evoke elegance while surprising your style.' },
   { title: 'Ethical Fashion', icon: 'fa-solid fa-leaf', desc: 'Fashion is not wasteful. Our supply chain focuses on local artisans and sustainable practices, minimizing footprint while maximizing beauty.' }
]

const artisanProcess = [
   { title: 'Curation', desc: 'Selection of ultra-premium fabrics from certified sustainable sources.' },
   { title: 'Designing', desc: 'Meticulous sketching and pattern making to achieve the perfect structural silhouette.' },
   { title: 'Embroidery', desc: 'Hand-crafted intricate details using traditional techniques passed down through generations.' },
   { title: 'Tailoring', desc: 'Precision stitching and final quality inspection by our master designers.' }
]

const globalSources = [
   { origin: 'Switzerland', ingredient: 'Lawn Cotton' },
   { origin: 'China', ingredient: 'Pure Silk' },
   { origin: 'Italy', ingredient: 'Premium Velvet' },
   { origin: 'Pakistan', ingredient: 'Traditional Hand-embroidery' }
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
      transform: scale(1.15);
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

.shadow-3xl {
   box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.2);
}

.dark .shadow-3xl {
   box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.6);
}

.font-playfair {
   font-family: 'Playfair Display', serif;
}
</style>
