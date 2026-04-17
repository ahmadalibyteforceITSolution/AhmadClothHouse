<template>
  <div class="daily-seo-ads bg-black/95 border-b border-white/10 relative z-[1000] py-2 overflow-hidden">
    <!-- Combined Announcement and Trending Bar -->
    <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <span class="text-[8px] sm:text-[9px] font-black text-amber-500 uppercase tracking-[0.4em] animate-pulse whitespace-nowrap">
          ✦ Premium Luxury Couture - Worldwide Shipping Available ✦
        </span>
      </div>

      <div class="flex items-center gap-4 overflow-hidden flex-1 sm:justify-end">
        <span class="text-[8px] font-black text-amber-500/60 uppercase tracking-widest whitespace-nowrap border-l border-white/10 pl-4 hidden md:block">
          Daily Trends:
        </span>
        <div class="keywords-marquee flex items-center gap-8 animate-marquee whitespace-nowrap">
          <a v-for="keyword in trendingKeywords" :key="keyword" :href="'/shop?search=' + keyword" 
             class="text-[8px] sm:text-[9px] text-white/50 hover:text-amber-400 uppercase tracking-[0.2em] font-medium transition-colors">
            #{{ keyword }}
          </a>
          <!-- Duplicate for seamless loop -->
          <a v-for="keyword in trendingKeywords" :key="keyword + '-copy'" :href="'/shop?search=' + keyword" 
             class="text-[8px] sm:text-[9px] text-white/50 hover:text-amber-400 uppercase tracking-[0.2em] font-medium transition-colors">
            #{{ keyword }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const trendingKeywords = ref([
  'Luxury Bridal Couture upto 500,000',
  'Best Unstitched Suits Pakistan',
  'AHMADCLOTHESFABRICS Top Rated',
  'Maria B New Arrivals 2026',
  'Premium Chiffon Collection',
  'Designer Suits Lahore Online',
  'High-End Fashion Boutique',
  'Luxury Pret Deals',
  'Trending Wedding Wear',
  'Top Search Keywords Pakistan'
])

// In a real scenario, you might fetch these from an API daily
onMounted(() => {
  // Logic to rotate or update keywords could go here
})
</script>

<style scoped>
.daily-seo-ads {
  backdrop-blur: 10px;
}

.keywords-marquee {
  display: flex;
  min-width: 100%;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}

@media (max-width: 640px) {
  .animate-marquee {
    animation-duration: 20s;
  }
}
</style>
