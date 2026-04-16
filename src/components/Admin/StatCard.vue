<template>
  <div class="bg-white dark:bg-[#080808] p-5 md:p-10 border border-[#d4af3711] shadow-sm transition-all hover:shadow-2xl hover:border-[#d4af3744] group relative overflow-hidden group">
    
    <!-- Subtle Gradient Background -->
    <div class="absolute -right-8 -top-8 w-32 h-32 bg-[var(--primary-gold)]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>

    <div class="flex items-center justify-between mb-8 relative z-10">
      <div class="w-14 h-14 rounded-full border border-[#d4af3722] bg-[var(--primary-gold)]/5 text-[var(--primary-gold)] flex items-center justify-center text-xl transition-all duration-700 group-hover:bg-[var(--primary-gold)] group-hover:text-white" :class="colorClass">
        <font-awesome-icon :icon="icon" class="transition-transform duration-700 group-hover:rotate-[15deg]" />
      </div>
      
      <div v-if="trend" class="flex flex-col items-end">
        <div class="flex items-center gap-1.5" :class="trend > 0 ? 'text-emerald-500' : 'text-rose-500'">
            <font-awesome-icon :icon="trend > 0 ? 'fa-solid fa-arrow-trend-up' : 'fa-solid fa-arrow-trend-down'" class="text-[8px]" />
            <span class="text-[10px] font-bold tracking-widest leading-none">
              {{ Math.abs(trend) }}%
            </span>
        </div>
        <span class="text-[7px] text-stone-400 font-bold uppercase tracking-[0.2em] mt-1.5 opacity-40">Period Growth</span>
      </div>
    </div>

    <div class="relative z-10">
      <p class="text-[9px] font-bold text-stone-400 uppercase tracking-[0.4em] mb-2">{{ label }}</p>
      <h3 class="text-3xl font-light dark:text-white tracking-tighter font-playfair italic">{{ value }}</h3>
    </div>

    <!-- Bottom Accent Line -->
    <div class="absolute bottom-0 left-0 h-[1px] w-0 bg-[var(--primary-gold)] transition-all duration-700 group-hover:w-full"></div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: [String, Number],
  icon: String,
  colorClass: {
    type: String,
    default: 'text-[var(--primary-gold)]'
  },
  trend: Number
})
</script>
