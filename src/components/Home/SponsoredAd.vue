<template>
  <div v-if="visible" class="sponsored-container py-24 px-6 md:px-20 bg-stone-50 dark:bg-[#050505] border-y border-[#d4af3711] overflow-hidden relative group">
    <div class="absolute inset-0 opacity-5 bg-[radial-gradient(#d4af3711_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
    
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-16">
        <div class="flex-1 text-center lg:text-left space-y-8">
          <div class="flex items-center justify-center lg:justify-start gap-4">
            <span class="h-[1px] w-8 bg-[var(--primary-gold)]"></span>
            <span class="text-[10px] font-black tracking-[0.5em] text-[var(--primary-gold)] uppercase">Partnership</span>
          </div>
          <h2 class="text-4xl md:text-7xl font-light italic font-playfair dark:text-white leading-tight uppercase tracking-tighter">
            {{ title || 'Elite Designer Collaborations' }}
          </h2>
          <p class="text-stone-500 dark:text-stone-400 max-w-xl text-lg font-light leading-relaxed italic">
            {{ description || 'Exclusive partnership with Sana Safinaz, Aneelas Collection, Maria B, and Nishat Brand.' }}
          </p>
          
          <!-- Discount Badge -->
          <div class="inline-flex items-center gap-6 p-4 border border-[var(--primary-gold)]/20 bg-white dark:bg-white/5 backdrop-blur-md">
            <div class="text-3xl font-playfair italic text-[var(--primary-gold)]">30% OFF</div>
            <div class="h-8 w-[1px] bg-[var(--primary-gold)]/20"></div>
            <div class="text-[9px] font-bold tracking-[0.3em] text-stone-500 dark:text-stone-400 uppercase">EXCLUSIVE<br>COLLABORATION</div>
          </div>

          <div class="pt-6">
            <a :href="link" class="group relative inline-flex items-center gap-6 px-12 py-5 bg-[var(--luxury-black)] dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-[0.5em] overflow-hidden transition-all shadow-2xl">
              <span class="relative z-10">{{ buttonText || 'EXPLORE COLLECTION' }}</span>
              <div class="absolute inset-0 bg-[var(--primary-gold)] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
          </div>
        </div>
        
        <div class="flex-1 w-full relative">
          <div class="relative aspect-[4/5] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10">
            <img :src="image || 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1974&auto=format&fit=crop'" 
                 alt="Collaboration Showcase" 
                 class="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            
            <!-- Floating Brand Names Overlay -->
            <div class="absolute bottom-8 left-8 right-8 flex flex-wrap gap-4 justify-center">
              <a v-for="brand in (brands || defaultBrands)" :key="brand.name" :href="brand.link" target="_blank"
                    class="text-[9px] font-bold tracking-[0.3em] text-white/80 uppercase border border-white/20 px-3 py-1 backdrop-blur-md hover:bg-[var(--primary-gold)] hover:text-white hover:border-[var(--primary-gold)] transition-all">
                {{ brand.name }}
              </a>
            </div>
          </div>
          
          <!-- Decorative Elements -->
          <div class="absolute -top-12 -right-12 w-48 h-48 border border-[var(--primary-gold)]/10 pointer-events-none -z-10 animate-spin-slow"></div>
          <div class="absolute -bottom-12 -left-12 w-32 h-32 border border-[var(--primary-gold)]/10 pointer-events-none -z-10 animate-spin-slow-reverse"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  visible: { type: Boolean, default: true },
  title: String,
  description: String,
  image: String,
  link: { type: String, default: '#' },
  buttonText: String,
  brands: { type: Array, default: () => [] }
})

const defaultBrands = [
  { name: 'Sana Safinaz', link: 'https://www.sanasafinaz.com/' },
  { name: 'Aneelas Collection', link: 'https://www.facebook.com/aneelascollection/' },
  { name: 'Maria B', link: 'https://www.mariab.pk/' },
  { name: 'Nishat Brand', link: 'https://nishatlinen.com/' }
]
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
