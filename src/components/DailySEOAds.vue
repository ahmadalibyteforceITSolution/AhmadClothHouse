<template>
  <div class="daily-seo-ads bg-black/95 border-b border-white/10 relative z-[1000] py-1.5 overflow-hidden">
    <!-- Row 1: Announcement and Trending Bar -->
    <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-white/5 pb-1 mb-1">
      <div class="flex items-center gap-2">
        <span class="text-[7px] sm:text-[8px] font-black text-amber-500 uppercase tracking-[0.4em] animate-pulse whitespace-nowrap">
          ✦ Premium Luxury Couture - Worldwide Shipping Available ✦
        </span>
      </div>

      <div class="flex items-center gap-4 overflow-hidden flex-1 sm:justify-end">
        <span class="text-[7px] font-black text-amber-500/60 uppercase tracking-widest whitespace-nowrap border-l border-white/10 pl-4 hidden md:block">
          Daily Trends:
        </span>
        <div class="keywords-marquee flex items-center gap-6 animate-marquee-fast whitespace-nowrap">
          <a v-for="keyword in trendingKeywords" :key="keyword" :href="'/shop?search=' + keyword" 
             class="text-[7px] sm:text-[8px] text-white/50 hover:text-amber-400 uppercase tracking-[0.2em] font-medium transition-colors">
            #{{ keyword }}
          </a>
        </div>
      </div>
    </div>

    <!-- Row 2: Featured Journals / Blogs -->
    <div class="max-w-7xl mx-auto px-4 flex items-center gap-4">
      <span class="text-[7px] font-black text-amber-500 uppercase tracking-widest whitespace-nowrap pr-4 border-r border-white/10">
        Latest Journals:
      </span>
      <div class="blogs-marquee flex items-center gap-12 animate-marquee-slow whitespace-nowrap overflow-hidden flex-1">
        <router-link v-for="blog in displayedBlogs" :key="blog.id" :to="'/blog/' + blog.slug"
           class="text-[7px] sm:text-[8px] text-white/40 hover:text-amber-500 uppercase tracking-[0.3em] font-bold transition-all flex items-center gap-2">
          <span class="w-1 h-1 bg-amber-500/30 rounded-full"></span>
          {{ blog.title }}
        </router-link>
        <!-- Duplicate for loop -->
        <router-link v-for="blog in displayedBlogs" :key="blog.id + '-copy'" :to="'/blog/' + blog.slug"
           class="text-[7px] sm:text-[8px] text-white/40 hover:text-amber-500 uppercase tracking-[0.3em] font-bold transition-all flex items-center gap-2">
          <span class="w-1 h-1 bg-amber-500/30 rounded-full"></span>
          {{ blog.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { blogs } from '../data/blogs'

const displayedBlogs = computed(() => blogs.slice(0, 10))

const trendingKeywords = ref([
  // ✦ BRIDAL & COUTURE (High Intent)
  'bridal dresses pakistan 2026',
  'luxury bridal couture pakistan',
  'pakistani bridal lehenga choli',
  'wedding dresses for women pakistan',
  'latest bridal wear pakistan',
  'custom bridal dresses lahore',
  'bridal maxi dresses pakistan',
  'hand-embroidered bridal wear',
  'walima dresses for bride 2026',
  'nikah dresses pakistan online',

  // ✦ LAWN & SEASONAL (Volume Keywords)
  'lawn suits pakistan 2026',
  'unstitched lawn suits pakistan',
  'designer lawn collection 2026',
  'summer lawn suits pakistan',
  '3 piece lawn suit pakistan',
  'printed lawn suits pakistan',
  'eid lawn suits pakistan 2026',
  'best lawn brands in pakistan',
  'luxury lawn collection online',
  'cheap lawn suits pakistan sale',

  // ✦ TOP BRANDS (Brand Specific SEO)
  'maria b lawn collection 2026',
  'sana safinaz luxury collection',
  'gul ahmed lawn sale online',
  'asim jofa bridal couture',
  'baroque premium lawn 2026',
  'khaadi new arrivals 2026',
  'elaf premium collection lahore',
  'charizma unstitched suits',
  'aghanoor pret collection',
  'crimson luxury lawn pakistan',
  'sobia nazir dresses online',
  'mushq luxury collection 2026',

  // ✦ FABRIC SPECIALS
  'chiffon dresses for wedding',
  'embroidered chiffon suits pakistan',
  'luxury silk collection 2026',
  'velvet suits pakistan online',
  'linen collection 2026 pakistan',
  'organza formal dresses online',
  'net bridal dresses pakistan',
  'pure cotton suits online shop',
  'karandi suits collection 2026',

  // ✦ PRET & READY TO WEAR (Convenience)
  'ready to wear dresses pakistan',
  'luxury pret pakistan 2026',
  'pakistani kurti designs 2026',
  'designer pret online pakistan',
  'formal pret wear for women',
  'casual pret collection lahore',
  'pret sale pakistan online',
  'two piece pret suits pakistan',
  'embroidered kurtas for ladies',

  // ✦ MODERN TRENDS (2026 Specific)
  'pakistani co-ord sets 2026',
  'fusion wear pakistan trends',
  'monochromatic pakistani outfits',
  'minimalist bridal wear 2026',
  'sustainable fashion pakistan',
  'contemporary pakistani couture',
  'pakistani wedding guest dresses',

  // ✦ INTERNATIONAL & SHOPPING
  'pakistani suits online usa uk',
  'worldwide shipping pakistani clothes',
  'buy pakistani suits in canada',
  'pakistani clothing online australia',
  'best online boutique pakistan',
  'ahmad clothes house official',
  'designer suits lahore shipping',
  'online shopping pakistan clothes',
  'premium pakistani fashion shop',

  // ✦ ETHNIC & TRADITIONAL
  'sharara dresses pakistan online',
  'gharara suits latest designs',
  'anarkali frocks pakistan 2026',
  'traditional mehndi dresses',
  'party wear frocks pakistan',
  'maxi dresses lahore online',
  'stylish abaya designs pakistan'
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

.keywords-marquee, .blogs-marquee {
  display: flex;
  min-width: 100%;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee-fast {
  animation: marquee 25s linear infinite;
}

.animate-marquee-slow {
  animation: marquee 60s linear infinite;
}

.animate-marquee-fast:hover, .animate-marquee-slow:hover {
  animation-play-state: paused;
}

@media (max-width: 640px) {
  .animate-marquee-fast {
    animation-duration: 15s;
  }
  .animate-marquee-slow {
    animation-duration: 40s;
  }
}
</style>
