<template>
  <div class="daily-seo-ads bg-black/95 border-b border-white/10 relative z-[1000]">
    <!-- Top Announcement Bar (SEO Boost) -->
    <div class="bg-[var(--primary-gold)]/10 text-center py-1.5 border-b border-white/5">
      <p class="text-[8px] sm:text-[10px] font-bold text-amber-500 uppercase tracking-[0.4em] animate-pulse">
        ✦ Premium Luxury Couture - Worldwide Shipping Available ✦
      </p>
    </div>

    <!-- Top Ad Slot (Google AdSense) -->
    <div class="max-w-7xl mx-auto px-4 py-1">
      <AdSenseUnit 
        slot="5432109876" 
        format="horizontal" 
        :full-width-responsive="true" 
        wrapper-class="my-0 h-[10px] overflow-hidden flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
      />
    </div>

    <!-- Daily Trending SEO Keywords Bar -->
    <div class="trending-bar py-2 border-t border-white/5">
      <div class="max-w-7xl mx-auto px-4 flex items-center gap-4 overflow-hidden">
        <span class="text-[9px] font-black text-amber-500 uppercase tracking-widest whitespace-nowrap border-r border-white/10 pr-4">
          Daily Trends:
        </span>
        <div class="keywords-marquee flex items-center gap-8 animate-marquee whitespace-nowrap">
          <a v-for="keyword in trendingKeywords" :key="keyword" :href="'/shop?search=' + keyword" 
             class="text-[8px] sm:text-[10px] text-white/60 hover:text-amber-400 uppercase tracking-[0.2em] font-medium transition-colors">
            #{{ keyword }}
          </a>
          <!-- Duplicate for seamless loop -->
          <a v-for="keyword in trendingKeywords" :key="keyword + '-copy'" :href="'/shop?search=' + keyword" 
             class="text-[8px] sm:text-[10px] text-white/60 hover:text-amber-400 uppercase tracking-[0.2em] font-medium transition-colors">
            #{{ keyword }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AdSenseUnit from './AdSenseUnit.vue'

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
