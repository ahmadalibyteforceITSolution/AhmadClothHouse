<template>
  <div v-if="publisherId" class="adsense-wrapper overflow-hidden transition-all duration-700" :class="[wrapperClass, { 'opacity-0 h-0 my-0': !isAdLoaded && !isDevelopment }]">
    <ins
      class="adsbygoogle"
      style="display:block"
      :data-ad-client="publisherId"
      :data-ad-slot="slot"
      :data-ad-format="format"
      :data-full-width-responsive="fullWidthResponsive ? 'true' : 'false'"
    ></ins>
    
    <!-- Development/Empty Placeholder (Branded Ahmad Cloth House) -->
    <div v-if="isDevelopment && !isAdLoaded" class="flex flex-col items-center justify-center py-12 bg-[#fafaf8] dark:bg-[#080808] border border-dashed border-stone-200 dark:border-white/10 opacity-50">
       <span class="text-[8px] tracking-[0.4em] uppercase text-stone-400 font-bold mb-2">Ahmad Cloth House</span>
       <span class="text-[7px] tracking-[0.2em] italic text-stone-400 uppercase">Premium Editorial Placement</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  slot: { type: String, required: true },
  format: { type: String, default: 'auto' },
  fullWidthResponsive: { type: Boolean, default: true },
  wrapperClass: { type: String, default: 'my-8' },
  publisherId: { type: String, default: 'ca-pub-1888138480311828' }
})

const isAdLoaded = ref(false)
const isDevelopment = ref(false)

onMounted(() => {
  if (typeof window !== 'undefined') {
    isDevelopment.value = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  }

  setTimeout(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
      // Check if ad was injected after a few seconds
      setTimeout(() => {
        const ins = document.querySelector(`ins[data-ad-slot="${props.slot}"]`)
        if (ins && ins.innerHTML.trim().length > 0) {
          isAdLoaded.value = true
        }
      }, 3000)
    } catch (e) {
      console.warn('[AdSense] Initialization skipped or blocked.', e)
    }
  }, 100)
})
</script>

<style scoped>
.adsense-wrapper {
  width: 100%;
  min-width: 250px;
  overflow: hidden;
  text-align: center;
}
/* Prevent layout shift when ad hasn't loaded */
.adsbygoogle {
  min-width: 250px;
}
</style>
