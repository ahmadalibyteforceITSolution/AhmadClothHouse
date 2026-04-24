<template>
  <section class="brands-section py-16" :class="{ 'dark': isDark }">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Premium Brands</h2>
        <div class="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
      </div>
      
      <div class="flex flex-wrap justify-center items-center gap-6 md:gap-10">
        <div 
          v-for="brand in brands" 
          :key="brand.name"
          class="brand-card group cursor-pointer relative overflow-hidden rounded-2xl w-32 h-44 md:w-40 md:h-56"
        >
          <!-- Background Image (AI Generated) -->
          <div class="absolute inset-0 z-0">
            <img :src="brand.image" :alt="brand.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>

          <div class="relative z-10 p-4 h-full flex flex-col items-center justify-end text-center">
            <div class="brand-logo mb-3 bg-white/20 backdrop-blur-md rounded-xl p-2 w-14 h-14 flex items-center justify-center border border-white/30 group-hover:border-amber-500 shadow-xl transition-all">
              <span class="text-xl font-black italic text-white group-hover:text-amber-500">{{ brand.initials }}</span>
            </div>
            <h3 class="text-sm md:text-base font-bold text-white group-hover:text-amber-500 transition-colors drop-shadow-md">{{ brand.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '../../stores/auth';

// Import AI assets for brand backgrounds
import mbImg from '../../assets/ai_new/hero_collage_1.png';
import nlImg from '../../assets/ai/hero_3.png';
import abImg from '../../assets/ai_new/shop_header.png';
import jjImg from '../../assets/junaid.jpg';
import acImg from '../../assets/ai/hero_2.png';
import wImg from '../../assets/ai/hero_4.png';
import ssImg from '../../assets/ai_new/hero_collage_2.png';
import gaImg from '../../assets/ai_new/hero_collage_4.png';

const authStore = useAuthStore();
const isDark = computed(() => authStore.isDark);

const brands = [
  { name: 'Maria B', initials: 'MB', image: mbImg },
  { name: 'Nishat', initials: 'NL', image: nlImg },
  { name: "Aneela's", initials: 'AB', image: abImg },
  { name: 'Junaid Jamshed', initials: 'J.', image: jjImg },
  { name: 'Ahmad Cloths', initials: 'AC', image: acImg },
  { name: 'Warda', initials: 'W', image: wImg },
  { name: 'Sana Safinaz', initials: 'SS', image: ssImg },
  { name: 'Gul Ahmed', initials: 'GA', image: gaImg }
];
</script>

<style scoped>
.brands-section {
  background: radial-gradient(circle at top right, rgba(245, 158, 11, 0.05), transparent),
              radial-gradient(circle at bottom left, rgba(245, 158, 11, 0.05), transparent);
}

.dark .brands-section {
  background: radial-gradient(circle at top right, rgba(245, 158, 11, 0.1), transparent),
              radial-gradient(circle at bottom left, rgba(245, 158, 11, 0.1), transparent);
}

.gradient-text {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.brand-inner {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.dark .brand-inner {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.brand-name {
  color: #1f2937;
}

.dark .brand-name {
  color: #f3f4f6;
}

.brand-card:hover .brand-logo {
  transform: scale(1.05);
}
</style>
