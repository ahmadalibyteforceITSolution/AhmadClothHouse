<template>
   <div
      class="min-h-screen bg-[#fafaf8] dark:bg-[#050505] transition-colors duration-700 pb-48 font-sans selection:bg-amber-500/30">
      <!-- Cinematic Header -->
      <header class="bg-black py-40 px-8 relative overflow-hidden border-b border-white/5">
         <div class="absolute inset-0 opacity-10">
            <div
               class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#B8860B11_1px,_transparent_1px)] bg-[size:60px_60px]">
            </div>
         </div>
         <div class="flex flex-col md:flex-row justify-between items-end gap-16 relative z-10">
            <div class="max-w-2xl animate-reveal-left">
               <h1 class="text-xl font-playfair tracking-[0.2em] font-light text-white uppercase mb-10">AHMADCLOTHS HOUSE</h1>
               <div class="flex items-center gap-3 mb-6">
                  <div class="h-[1px] w-12 bg-[var(--primary-gold)]"></div>
                  <span
                     class="text-[var(--primary-gold)] font-bold text-[9px] uppercase tracking-[0.5em]">DATA
                     GOVERNANCE</span>
               </div>
               <h1
                  class="text-6xl md:text-9xl font-light uppercase tracking-tighter leading-[0.85] text-gray-900 dark:text-white font-playfair italic underline decoration-[var(--primary-gold)]/10 underline-offset-[20px]">
                  Privacy <br>
                  <span class="text-[var(--primary-gold)] font-sans tracking-[0.2em] font-light ml-4 uppercase not-italic">at
                     Ahmadcloths</span>
               </h1>
            </div>
            <div class="max-w-xs text-right animate-reveal-right">
               <p
                  class="text-[10px] text-stone-400 font-bold uppercase tracking-[0.4em] leading-loose italic opacity-60">
                  Our commitment to protecting your information and privacy within the Ahmadcloths community.
               </p>
            </div>
         </div>
      </header>

      <!-- Narrative Content -->
      <main class="max-w-4xl mx-auto px-8 py-32 space-y-32">
         <section v-for="(section, k) in privacySections" :key="k" class="space-y-10 group animate-reveal"
            :style="{ animationDelay: `${k * 0.2}s` }">
            <div class="flex items-center gap-6">
               <div
                  class="w-12 h-12 rounded-full border border-[var(--primary-gold)]/10 bg-[var(--primary-gold)]/5 flex items-center justify-center text-[var(--primary-gold)] text-xs transition-all duration-700 group-hover:bg-[var(--primary-gold)] group-hover:text-white">
                  0{{ k + 1 }}
               </div>
               <h2
                  class="text-2xl font-light uppercase tracking-tight text-gray-900 dark:text-white font-playfair italic underline decoration-[var(--primary-gold)]/10 underline-offset-8 transition-all group-hover:pl-4 group-hover:border-l group-hover:border-[var(--primary-gold)]/40">
                  {{ section.title }}
               </h2>
            </div>
            <p
               class="text-stone-500 dark:text-stone-400 leading-[2] font-light text-lg italic transition-all border-l-0 group-hover:border-l border-[var(--primary-gold)]/10 pl-0 group-hover:pl-8">
               {{ section.content }}
            </p>
         </section>

         <!-- Security Seal -->
         <div class="pt-24 border-t border-[#d4af3711] text-center">
            <div class="flex flex-col items-center gap-12 group">
               <div
                  class="w-20 h-20 rounded-full border border-[var(--primary-gold)]/20 bg-[var(--primary-gold)]/5 flex items-center justify-center text-[var(--primary-gold)] text-3xl group-hover:scale-110 transition-all duration-700">
                  <font-awesome-icon icon="fa-solid fa-shield-halved" />
               </div>
               <p
                  class="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-400 max-w-sm leading-loose opacity-60">
                  Ahmadcloths house is the sole controller of your data. We are committed to protecting your personal
                  information through industry-standard security measures.
               </p>
            </div>
         </div>
      </main>
   </div>
</template>

<script setup>
import { onMounted } from 'vue'
const Fugible = "https://loremflickr.com/200/80/fashion,logo?lock=1"

const privacySections = [
   {
      title: "Information We Collect",
      content: "Ahmadcloths house (collectively referred to as 'we', 'us', or 'our') acts as the controller of your personal data. We collect your name, email address, and order history to provide you with the best boutique experience possible."
   },
   {
      title: "How We Use Your Data",
      content: "We use your identifiers to process orders, manage your account, and with your consent, send you updates about our latest fashion collections and seasonal specials. Your data is never sold to third parties."
   },
   {
      title: "Data Retention & Rights",
      content: "Your data is kept only as long as necessary for order fulfillment and legal requirements. You have the right to request access, correction, or deletion of your personal data at any time."
   }
]

onMounted(() => {
   window.scrollTo(0, 0)
})
</script>

<style scoped>
.animate-reveal {
   animation: reveal-bottom 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

@keyframes reveal-bottom {
   from {
      opacity: 0;
      transform: translateY(30px);
   }

   to {
      opacity: 1;
      transform: translateY(0);
   }
}

.font-playfair {
   font-family: 'Playfair Display', serif;
}
</style>
