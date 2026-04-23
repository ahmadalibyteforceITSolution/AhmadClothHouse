<template>
   <div
      class="min-h-screen bg-[#fafaf8] dark:bg-[#050505] transition-colors duration-700 font-sans selection:bg-amber-500/30">

      <!-- SEO CONTENT (VISUALLY HIDDEN) -->
      <section class="sr-only">
         <h2>About Ahmad Cloth House | Artisanal Mastery & Fashion Heritage</h2>
         <p>Learn about Ahmad Cloth House and our commitment to artisanal excellence, ethical fashion, and design innovation. Since our inception, we have been dedicated to reviving traditional embroidery techniques and using premium fabrics for our luxury collections.</p>
      </section>

      <!-- Premium Cinematic About Hero -->
      <section class="relative h-[80vh] min-h-[650px] flex items-center justify-center overflow-hidden bg-black">
         <!-- Dynamic Background -->
         <div class="absolute inset-0 z-0">
            <img :src="Hero1" class="w-full h-full object-cover opacity-60 animate-slow-zoom" 
                 alt="AHMADCLOTHESFABRICS Fashion Heritage" />
            <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-[#fafaf8] dark:to-[#050505]"></div>
         </div>

         <div class="max-w-7xl mx-auto px-8 w-full relative z-10 flex flex-col items-center text-center">
            <div class="flex items-center gap-4 mb-10 animate-reveal">
               <div class="h-[1px] w-12 bg-[var(--primary-gold)]"></div>
               <span class="text-[var(--primary-gold)] font-bold text-[10px] uppercase tracking-[0.6em]">SINCE MMXXVI</span>
               <div class="h-[1px] w-12 bg-[var(--primary-gold)]"></div>
            </div>

            <h1 class="text-6xl md:text-9xl font-playfair italic text-white leading-none tracking-tighter mb-14 drop-shadow-2xl animate-reveal">
               Artisanal <br>
               <span class="text-[var(--primary-gold)] not-italic font-sans tracking-[0.2em] font-light">EXCELLENCE</span>
            </h1>

            <div class="max-w-2xl bg-white/5 backdrop-blur-3xl border border-white/10 p-8 md:p-12 animate-reveal-delay">
               <p class="text-[11px] md:text-sm text-white/70 font-medium uppercase tracking-[0.4em] leading-loose italic">
                  "A journey from artisanal passion to global couture excellence. We craft the elegant moments of tomorrow with every thread."
               </p>
            </div>
         </div>

         <!-- Scroll Indicator -->
         <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-30">
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
                  Founded in 2026, AhmadClothesFabrics was materialized to bridge the void between mass-produced apparel and the
                  artisanal soul of traditional craftsmanship. We believe every moment deserves an ensemble that
                  mirrors your unique style and elegance. Our journey began with a single vision: to revive the intricate weaving and embroidery techniques that have defined our cultural heritage for generations.
               </p>
               <p class="text-stone-500 dark:text-stone-400 leading-loose text-lg font-light mt-8">
                  At AhmadClothesFabrics, we don't just create clothes; we weave stories. Each piece in our collection is a testament to the dedication of our master artisans who spend hundreds of hours perfecting every stitch. From the selection of the finest silks and cottons to the final hand-finished detail, our commitment to quality is unwavering.
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
            <img :src="Hero2"
               class="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
               alt="Artisan Tailoring at AHMADCLOTHESFABRICS Studio">
         </div>
      </section>

      <!-- Mission & Values Section -->
      <section class="bg-white dark:bg-[#0a0a0a] py-40 px-8 transition-colors duration-700">
         <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-24">
               <div class="space-y-8 animate-reveal">
                  <h3 class="text-[10px] font-bold text-[var(--primary-gold)] tracking-[0.5em] uppercase">OUR MISSION</h3>
                  <h4 class="text-3xl font-playfair italic text-gray-900 dark:text-white">Empowering Elegance</h4>
                  <p class="text-stone-500 dark:text-stone-400 leading-relaxed font-light">
                     Our mission is to empower individuals through fashion that speaks of heritage and modern elegance. We strive to provide accessible luxury without compromising on the artisanal quality that makes each garment unique.
                  </p>
               </div>
               <div class="space-y-8 animate-reveal" style="animation-delay: 0.2s">
                  <h3 class="text-[10px] font-bold text-[var(--primary-gold)] tracking-[0.5em] uppercase">OUR VISION</h3>
                  <h4 class="text-3xl font-playfair italic text-gray-900 dark:text-white">Global Heritage</h4>
                  <p class="text-stone-500 dark:text-stone-400 leading-relaxed font-light">
                     We envision AHMADCLOTHESFABRICS as a global symbol of Pakistani craftsmanship, bringing the beauty of our traditional textiles to the international stage while fostering a sustainable and ethical fashion ecosystem.
                  </p>
               </div>
               <div class="space-y-8 animate-reveal" style="animation-delay: 0.4s">
                  <h3 class="text-[10px] font-bold text-[var(--primary-gold)] tracking-[0.5em] uppercase">OUR VALUES</h3>
                  <h4 class="text-3xl font-playfair italic text-gray-900 dark:text-white">Ethical Mastery</h4>
                  <p class="text-stone-500 dark:text-stone-400 leading-relaxed font-light">
                     Integrity, craftsmanship, and sustainability are at the core of everything we do. We ensure fair wages for our artisans and prioritize eco-friendly practices in our production line to protect the heritage we cherish.
                  </p>
               </div>
            </div>
         </div>
      </section>

      <!-- Artisan Spotlight -->
      <section class="py-40 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
         <div class="order-2 lg:order-1 relative aspect-square group overflow-hidden animate-reveal-left">
            <img :src="Hero3"
               class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
               alt="Artisan Craftsmanship">
         </div>
         <div class="order-1 lg:order-2 space-y-12 animate-reveal-right">
            <h3 class="text-[10px] font-bold text-[var(--primary-gold)] tracking-[0.5em] uppercase">THE CRAFT</h3>
            <h2 class="text-5xl font-playfair italic text-gray-900 dark:text-white leading-tight">Mastery in Every Thread</h2>
            <p class="text-stone-500 dark:text-stone-400 leading-loose text-lg font-light">
               Our artisans are the heart of AHMADCLOTHESFABRICS. With decades of experience passed down through generations, they possess an intuitive understanding of fabric and form. Every embroidery pattern is meticulously planned and executed, ensuring that the final garment is not just a piece of clothing, but a work of art.
            </p>
            <router-link to="/shop" class="inline-block border-b border-[var(--primary-gold)] pb-2 text-[10px] font-bold tracking-[0.5em] text-gray-900 dark:text-white hover:text-[var(--primary-gold)] transition-colors">
               EXPLORE THE COLLECTIONS
            </router-link>
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
               <span class="text-[var(--primary-gold)] font-serif italic text-2xl">— Lead Designer of AHMADCLOTHESFABRICS</span>
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
         <div class="absolute inset-0 opacity-20 bg-cover bg-center" :style="{ backgroundImage: `url(${Hero4})` }"></div>
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

      <!-- Google AdSense: About Page — Slot C (unique to this page) -->
      <div class="max-w-7xl mx-auto px-8 py-20">
         <AdSenseUnit slot="7312321912" format="auto" :full-width-responsive="true" />
      </div>

   </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AdSenseUnit from '../components/AdSenseUnit.vue'

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

   // === Inject About Page SEO ===
   const BASE = 'https://ahmad-cloths.vercel.app'
   const pageTitle = 'Our Heritage & Design Philosophy | AhmadClothesHouse | Global Pakistani Fashion'
   const pageDesc = 'Discover the story of AhmadClothesHouse. Traditional Lahore craftsmanship meets modern luxury. Delivering authentic Pakistani fashion to women worldwide since 2026.'
   
   document.title = pageTitle

   const setMeta = (name, isProperty, value) => {
     const attr = isProperty ? `[property="${name}"]` : `[name="${name}"]`
     let el = document.querySelector(`meta${attr}`)
     if (!el) {
       el = document.createElement('meta')
       el.setAttribute(isProperty ? 'property' : 'name', name)
       document.head.appendChild(el)
     }
     el.setAttribute('content', value)
   }

   setMeta('description', false, pageDesc)
   setMeta('robots', false, 'index, follow')
   setMeta('keywords', false, 'About AhmadClothesHouse, Pakistani fashion heritage, luxury couture Lahore, artisanal embroidery, ethical fashion Pakistan')
   
   setMeta('og:title', true, pageTitle)
   setMeta('og:description', true, pageDesc)
   setMeta('og:url', true, `${BASE}/about`)
   setMeta('og:type', true, 'website')
   
   let canonical = document.querySelector('link[rel="canonical"]')
   if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
   canonical.href = `${BASE}/about`

   // AboutPage Schema
   let schema = document.querySelector('script[id="about-schema"]')
   if (schema) schema.remove()
   schema = document.createElement('script')
   schema.id = 'about-schema'
   schema.type = 'application/ld+json'
   schema.text = JSON.stringify({
     "@context": "https://schema.org",
     "@type": "AboutPage",
     "name": "Our Story - AhmadClothesHouse",
     "description": pageDesc,
     "url": `${BASE}/about`,
     "mainEntity": {
       "@type": "Organization",
       "name": "AhmadClothesHouse",
       "foundingDate": "2026",
       "location": {
         "@type": "Place",
         "address": "Lahore, Pakistan"
       }
     }
   })
   document.head.appendChild(schema)
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
