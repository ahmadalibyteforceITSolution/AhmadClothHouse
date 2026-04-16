<template>
  <div class="h-screen flex flex-col items-center justify-center text-center px-8 bg-[#fafaf8] dark:bg-[#050505] transition-colors duration-700 font-sans selection:bg-[var(--primary-gold)]/30 overflow-hidden relative">
     <!-- Dynamic Shadow Artifact -->
     <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_#B8860B22_0%,_transparent_70%)]"></div>
     </div>

     <div class="relative z-10 animate-reveal">
        <div class="w-24 h-24 border border-[var(--primary-gold)]/20 bg-[var(--primary-gold)]/5 rounded-full flex items-center justify-center mb-16 mx-auto text-3xl text-[var(--primary-gold)]/40 shadow-3xl">
           <font-awesome-icon icon="fa-solid fa-shirt" />
        </div>
        
        <h2 class="text-6xl md:text-8xl font-light uppercase tracking-tighter mb-8 font-playfair italic underline decoration-[var(--primary-gold)]/10 underline-offset-[20px] dark:text-white">Design Not Found</h2>
        <p class="text-stone-400 mb-20 max-w-sm mx-auto uppercase text-[10px] font-bold leading-loose tracking-[0.5em] opacity-60">The page you are looking for has been moved or doesn't exist in our fashion catalog.</p>
        
        <router-link to="/" class="bg-black dark:bg-[var(--primary-gold)] text-white px-16 py-6 text-[11px] font-bold uppercase tracking-[0.4em] shadow-3xl hover:bg-[var(--deep-burgundy)] transition-all active:scale-95 flex items-center gap-6 group mx-auto w-fit">
           <span>RETURN TO HOME</span>
           <font-awesome-icon icon="fa-solid fa-arrow-right" class="group-hover:translate-x-3 transition-transform text-[8px]" />
        </router-link>
     </div>

     <!-- Footer Signature -->
     <div class="absolute bottom-16 left-0 right-0 text-center opacity-20">
        <span class="text-[7px] font-bold uppercase tracking-[1em] dark:text-white">AHMADCLOTHESFABRICS LUXURY FASHION</span>
     </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.animate-reveal { animation: reveal-bottom 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
@keyframes reveal-bottom {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.shadow-3xl {
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.15);
}
.dark .shadow-3xl {
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.5);
}

.font-playfair { font-family: 'Playfair Display', serif; }
</style>
