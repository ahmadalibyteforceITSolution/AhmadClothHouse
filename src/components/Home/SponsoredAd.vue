<template>
  <div v-if="visible" class="sponsored-container py-16 px-6 md:px-20 bg-stone-50 dark:bg-black/20 border-y border-[#d4af3711] overflow-hidden relative group">
    <div class="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
    
    <div class="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
      <div class="flex-1 text-center md:text-left">
        <span class="text-[10px] font-bold uppercase tracking-[0.5em] text-[var(--primary-gold)] mb-4 block">SPONSORED CATEGORY</span>
        <h2 class="text-3xl md:text-5xl font-light italic font-playfair dark:text-white mb-6 uppercase tracking-tight">
          {{ title || 'Elite Bridal Collection' }}
        </h2>
        <p class="text-sm text-stone-500 max-w-lg mb-10 leading-relaxed uppercase tracking-widest font-bold text-[10px]">
          {{ description || 'Discover the most exquisite hand-crafted jewelry sets from our premium partners, curated specifically for Ahmad Cloth House clients.' }}
        </p>
        <a :href="link" target="_blank" class="inline-block px-12 py-5 bg-black dark:bg-[var(--primary-gold)] text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-2xl">
          {{ buttonText || 'EXPLORE COLLECTION' }}
        </a>
      </div>
      
      <div class="flex-1 w-full relative">
        <div class="aspect-[16/9] bg-stone-200 dark:bg-stone-900 border border-[#d4af3711] overflow-hidden shadow-3xl group-hover:border-[#d4af3733] transition-all">
          <img :src="image || 'https://images.unsplash.com/photo-1515562141207-7a88bb7ce338?q=80&w=2070&auto=format&fit=crop'" 
               alt="Sponsored Content" 
               class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
        </div>
        <div class="absolute -bottom-6 -right-6 w-32 h-32 border border-[var(--primary-gold)]/20 pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  visible: { type: Boolean, default: true },
  title: String,
  description: String,
  image: String,
  link: { type: String, default: '#' },
  buttonText: String
})
</script>

<style scoped>
.sponsored-container {
  animation: fade-in 1.5s ease;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.shadow-3xl {
  box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.4);
}
</style>
