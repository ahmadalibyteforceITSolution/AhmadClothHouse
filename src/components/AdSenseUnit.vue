<template>
  <div v-if="publisherId" class="adsense-wrapper" :class="wrapperClass">
    <ins
      class="adsbygoogle"
      style="display:block"
      :data-ad-client="publisherId"
      :data-ad-slot="slot"
      :data-ad-format="format"
      :data-full-width-responsive="fullWidthResponsive ? 'true' : 'false'"
    ></ins>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  /** Unique ad slot ID from your AdSense dashboard (e.g. "1234567890") */
  slot: {
    type: String,
    required: true
  },
  /** AdSense ad format: "auto", "rectangle", "vertical", "horizontal" */
  format: {
    type: String,
    default: 'auto'
  },
  /** Whether to use full-width responsive ads */
  fullWidthResponsive: {
    type: Boolean,
    default: true
  },
  /** Optional extra CSS classes for the wrapper div */
  wrapperClass: {
    type: String,
    default: 'my-8'
  },
  /** Publisher ID – falls back to the one already loaded in index.html */
  publisherId: {
    type: String,
    default: 'ca-pub-1888138480311828'
  }
})

onMounted(() => {
  try {
    // Push to adsbygoogle queue to initialize this unit
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  } catch (e) {
    // AdSense not loaded yet or blocked by ad blocker — fail silently
    console.warn('[AdSense] Could not initialize ad unit for slot:', props.slot, e)
  }
})
</script>

<style scoped>
.adsense-wrapper {
  width: 100%;
  overflow: hidden;
  text-align: center;
}
/* Prevent layout shift when ad hasn't loaded */
.adsbygoogle {
  min-height: 90px;
}
</style>
