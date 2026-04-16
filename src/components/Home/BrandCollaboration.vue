<template>
  <section class="brand-collaboration py-24 bg-white dark:bg-[#080808] overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16 space-y-4">
        <div class="flex items-center justify-center gap-4">
          <span class="h-[1px] w-8 bg-[var(--primary-gold)]"></span>
          <span class="text-[10px] font-black tracking-[0.5em] text-[var(--primary-gold)] uppercase">Limited Edition</span>
          <span class="h-[1px] w-8 bg-[var(--primary-gold)]"></span>
        </div>
        <h2 class="text-4xl md:text-6xl font-playfair italic text-gray-900 dark:text-white">Our Signature Collaborations</h2>
        <p class="text-stone-500 dark:text-stone-400 text-sm font-light tracking-widest uppercase">Premium Brands ✦ Exclusive Discounts</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="brand in brands" :key="brand.name" class="brand-card group relative cursor-pointer overflow-hidden">
          <div class="aspect-[3/4] overflow-hidden bg-stone-100 dark:bg-stone-900 border border-black/5 dark:border-white/5 relative">
            <img :src="brand.image" :alt="brand.name" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
            
            <!-- Brand Badge -->
            <div class="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur-md px-3 py-1 border border-[var(--primary-gold)]/30">
              <span class="text-[8px] font-bold tracking-[0.2em] text-[var(--primary-gold)] uppercase">Featured Brand</span>
            </div>

            <!-- Discount Overlay -->
            <div class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div class="bg-[var(--deep-burgundy)] text-white px-6 py-2 text-[10px] font-bold tracking-[0.3em] shadow-2xl mb-4">
                {{ brand.discount }}
              </div>
              <button class="text-white text-[9px] font-bold tracking-[0.5em] border-b border-white/50 pb-1 hover:border-white transition-all">VIEW COLLECTION</button>
            </div>
          </div>
          
          <div class="mt-6 text-center">
            <h3 class="text-lg font-playfair italic text-gray-900 dark:text-white tracking-wide group-hover:text-[var(--primary-gold)] transition-colors">{{ brand.name }}</h3>
            <p class="text-[9px] font-bold text-stone-400 tracking-[0.3em] uppercase mt-1">Luxe Collaboration</p>
          </div>
        </div>
      </div>

      <!-- Main Discount Banner -->
      <div class="mt-20 relative bg-[var(--luxury-black)] dark:bg-stone-950 p-12 overflow-hidden border border-[var(--primary-gold)]/20">
        <div class="absolute top-0 right-0 w-64 h-64 bg-[var(--primary-gold)]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div class="space-y-4">
            <span class="text-[var(--primary-gold)] text-[10px] font-black tracking-[0.6em] uppercase">Season Finale</span>
            <h3 class="text-3xl md:text-5xl font-playfair italic text-white leading-tight">Exclusive <span class="text-[var(--primary-gold)]">30% OFF</span> on All<br>Collaboration Masterpieces</h3>
          </div>
          <button @click="$router.push('/shop')" class="px-12 py-5 bg-[var(--primary-gold)] text-white text-[10px] font-black tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all duration-500 shadow-xl">
            REDEEM DISCOUNT
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const brands = [
  {
    name: "Sana Safinaz",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1974&auto=format&fit=crop",
    discount: "UP TO 30% OFF"
  },
  {
    name: "Aneelas Collection",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop",
    discount: "FLAT 25% OFF"
  },
  {
    name: "Maria B",
    image: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=1974&auto=format&fit=crop",
    discount: "EXCLUSIVE 20% OFF"
  },
  {
    name: "Nishat Brand",
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=1974&auto=format&fit=crop",
    discount: "SEASONAL 30% OFF"
  }
];
</script>

<style scoped>
.brand-card img {
  filter: grayscale(100%) contrast(1.1);
}

.brand-card:hover img {
  filter: grayscale(0%) contrast(1);
}

.brand-collaboration {
  border-top: 1px solid rgba(212, 175, 55, 0.1);
}
</style>
