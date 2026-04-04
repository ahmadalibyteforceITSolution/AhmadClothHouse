<template>
  <div class="space-y-12 animate-in transition-all">
    
    <!-- Hero Performance Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      
       <!-- Revenue Milestone -->
       <div class="bg-black dark:bg-[#080808] rounded-2xl p-12 text-white shadow-3xl relative overflow-hidden group min-h-[450px] flex flex-col justify-between border border-[#d4af371a] hover:border-[#d4af3733] transition-all duration-700">
          <div class="absolute -right-20 -top-20 w-80 h-80 bg-[var(--primary-gold)]/10 blur-[130px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
          <div class="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          
          <div class="relative z-10">
             <div class="flex justify-between items-start mb-16">
                <div>
                   <p class="text-[10px] font-bold uppercase tracking-[0.5em] text-[var(--primary-gold)] mb-4 leading-none">BOUTIQUE REVENUE STATUS</p>
                   <h3 class="text-6xl md:text-7xl font-light italic tracking-tighter leading-none font-playfair">Rs. {{ stats.revenue.toLocaleString() }}</h3>
                </div>
                <div class="bg-white/5 backdrop-blur-3xl px-6 py-3 rounded-none border border-white/10 text-[9px] font-bold uppercase tracking-widest text-white/50">LIVE BOUTIQUE CONSOLE V.3</div>
             </div>
             
             <div class="space-y-12">
                <div>
                   <div class="flex justify-between text-[11px] font-bold uppercase tracking-[0.3em] mb-4 text-white/80">
                      <span>QUARTERLY SALES TARGET</span>
                      <span class="text-[var(--primary-gold)]">{{ breakEvenPercent }}%</span>
                   </div>
                   <div class="h-[2px] w-full bg-white/5 rounded-none overflow-hidden flex items-center">
                      <div :style="{ width: breakEvenPercent + '%' }" class="h-full bg-[var(--primary-gold)] transition-all duration-1000 ease-in-out shadow-[0_0_15px_rgba(184,134,11,0.5)]"></div>
                   </div>
                   <p class="text-[8px] font-bold text-white/20 mt-4 uppercase tracking-[0.5em]">Current Milestone: Rs. 10,000,000 Fashion Sales Goal</p>
                </div>
             </div>
          </div>

          <div class="relative z-10 pt-12 border-t border-white/5 flex justify-between items-end">
             <div>
                <p class="text-[9px] font-bold uppercase tracking-[0.4em] text-white/30 mb-2">Net Boutique Yield</p>
                <p class="text-3xl font-light italic text-[var(--primary-gold)] font-playfair">+{{ growthRate }}% <span class="text-[10px] not-italic text-stone-600 ml-2 uppercase tracking-[0.2em]">GROWTH</span></p>
             </div>
             <button @click="downloadReport" class="bg-white text-black px-10 py-5 rounded-none text-[10px] font-bold uppercase tracking-[0.4em] shadow-2xl hover:bg-[var(--primary-gold)] hover:text-white transition-all transform hover:-translate-y-1">DOWNLOAD REPORT</button>
          </div>
       </div>

       <!-- Pulse Stat Cards -->
       <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div v-for="item in pulseItems" :key="item.l" class="bg-white dark:bg-[#080808] rounded-2xl p-10 border border-[#d4af3711] shadow-2xl group transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af3733]">
             <div class="w-16 h-16 rounded-full border border-[#d4af3722] bg-[var(--primary-gold)]/5 text-[var(--primary-gold)] flex items-center justify-center text-3xl mb-10 group-hover:rotate-12 transition-transform shadow-inner">
                <font-awesome-icon :icon="item.i" />
             </div>
             <div>
                <p class="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 mb-3">{{ item.l }}</p>
                <h4 class="text-4xl font-light tracking-tighter dark:text-white leading-none font-playfair italic mb-4">{{ item.v }}</h4>
                <div class="flex items-center gap-3">
                   <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                   <span class="text-[8px] font-bold text-emerald-500 uppercase tracking-widest">REAL-TIME DATA</span>
                </div>
             </div>
          </div>

          <!-- Quick Monetization Card -->
          <div @click="$emit('switch-tab', 'monetization')" class="bg-black rounded-2xl p-10 border border-emerald-500/20 shadow-2xl group transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/40 cursor-pointer overflow-hidden relative">
             <div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full"></div>
             <div class="w-16 h-16 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 flex items-center justify-center text-3xl mb-10 group-hover:rotate-12 transition-transform shadow-inner relative z-10">
                <font-awesome-icon icon="fa-solid fa-sack-dollar" />
             </div>
             <div class="relative z-10">
                <p class="text-[9px] font-bold uppercase tracking-[0.5em] text-emerald-200/40 mb-3">TRAFFIC YIELD</p>
                <h4 class="text-4xl font-light tracking-tighter text-white leading-none font-playfair italic mb-4">Rs. {{ (activeUsers * 45 * 85.50).toFixed(0).toLocaleString() }}</h4>
                <div class="flex items-center gap-3">
                   <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                   <span class="text-[8px] font-bold text-emerald-500 uppercase tracking-widest">EST. EXTERNAL REVENUE</span>
                </div>
             </div>
          </div>
       </div>
    </div>

    <!-- Advanced Earning Metrics -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
       <div v-for="item in advancedMetrics" :key="item.l" class="bg-[#fdfdfb] dark:bg-[#0a0a0a] rounded-2xl p-8 border border-[#d4af3711] shadow-lg group relative overflow-hidden">
          <div class="absolute -right-4 -bottom-4 w-12 h-12 bg-[var(--primary-gold)]/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
          <p class="text-[8px] font-bold uppercase tracking-[0.4em] text-stone-400 mb-2 relative z-10">{{ item.l }}</p>
          <h5 class="text-2xl font-light italic font-playfair dark:text-white relative z-10">Rs. {{ item.v }}</h5>
          <p class="text-[7px] font-bold text-[var(--primary-gold)] mt-2 uppercase tracking-widest relative z-10">{{ item.tip }}</p>
       </div>
    </div>

    <!-- Execution Stream - Recent Activity -->
    <div class="bg-white dark:bg-[#080808] rounded-2xl p-12 border border-[#d4af3711] shadow-3xl relative overflow-hidden group">
       <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-10">
          <div>
             <h3 class="text-2xl font-light uppercase tracking-tight text-gray-900 dark:text-white mb-2 italic font-playfair">Recent Boutique Orders</h3>
             <p class="text-[9px] font-bold text-stone-400 uppercase tracking-[0.4em]">Monitoring all incoming customer orders and boutique activities.</p>
          </div>
          <div class="flex gap-6">
             <button @click="$emit('switch-tab', 'security')" class="px-8 py-5 border border-[#d4af3711] bg-white dark:bg-transparent rounded-none text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-[var(--primary-gold)]/5 transition-all dark:text-white/60">System Logs</button>
             <button @click="$emit('refresh')" class="px-8 py-5 bg-black dark:bg-[var(--primary-gold)] text-white rounded-none text-[9px] font-bold uppercase tracking-[0.3em] shadow-xl hover:bg-[var(--primary-gold)] transition-all">Refresh Data</button>
          </div>
       </div>

       <div class="space-y-6">
          <div v-for="t in transactions" :key="t.id" class="flex flex-col md:flex-row items-center p-8 rounded-xl bg-[#fafaf8] dark:bg-white/5 border border-transparent hover:border-[#d4af3722] transition-all duration-500 group cursor-pointer hover:shadow-xl">
             <div class="w-16 h-16 rounded-full bg-white dark:bg-black border border-[#d4af3711] shadow-2xl flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform shrink-0">
                <font-awesome-icon :icon="t.icon || 'fa-solid fa-shirt'" class="text-[var(--primary-gold)]/60" />
             </div>
             
             <div class="mt-8 md:mt-0 md:ml-12 flex-grow grid grid-cols-2 md:grid-cols-4 items-center gap-10 w-full">
                <div>
                   <p class="text-[8px] font-bold text-stone-400 uppercase mb-2 leading-none tracking-[0.3em]">CUSTOMER NAME</p>
                   <p class="text-[11px] font-bold dark:text-white tracking-widest">{{ t.user }}</p>
                </div>
                <div class="hidden md:block">
                   <p class="text-[8px] font-bold text-stone-400 uppercase mb-2 leading-none tracking-[0.3em]">ORDER ID</p>
                   <p class="text-[11px] font-bold text-[var(--primary-gold)] font-mono tracking-tighter italic">{{ t.id }}</p>
                </div>
                <div>
                   <p class="text-[8px] font-bold text-stone-400 uppercase mb-2 leading-none tracking-[0.3em]">TOTAL PRICE</p>
                   <p class="text-[11px] font-bold dark:text-white font-playfair italic text-lg tracking-tighter">Rs. {{ t.amount.toLocaleString() }}</p>
                </div>
                <div class="text-right flex justify-end">
                   <span :class="t.status === 'Delivered' || t.status === 'Completed' ? 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5' : 'text-[var(--primary-gold)] border-[var(--primary-gold)]/20 bg-[var(--primary-gold)]/5'" 
                     class="px-6 py-3 rounded-none text-[9px] font-bold uppercase tracking-[0.4em] border shadow-sm transition-all duration-500">
                     {{ t.status }}
                   </span>
                </div>
             </div>
          </div>
       </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  stats: Object,
  transactions: Array,
  activeUsers: Number,
  monetization: Object,
  growthRate: {
    type: Number,
    default: 12.5
  }
})

const breakEvenPercent = computed(() => {
  const goal = 100000 
  return Math.min(100, Math.round((props.stats.revenue / goal) * 100))
})
const emit = defineEmits(['switch-tab', 'refresh'])

const downloadReport = () => {
  const data = [
    ['Label', 'Value'],
    ['Revenue', props.stats.revenue],
    ['Clicks', props.stats.clicks],
    ['Sales', props.stats.sales],
    ['Active Users', props.activeUsers]
  ]
  const csvContent = "data:text/csv;charset=utf-8," + data.map(e => e.join(",")).join("\n")
  const encodedUri = encodeURI(csvContent)
  const link = document.createElement("a")
  link.setAttribute("href", encodedUri)
  link.setAttribute("download", `Boutique_Report_${new Date().toISOString().slice(0,10)}.csv`)
  document.body.appendChild(link)
  link.click()
}

const pulseItems = computed(() => [
  { l: 'TRAFFIC VALUE', v: `Rs. ${props.monetization?.visitorValue || 0}`, i: 'fa-solid fa-sack-dollar' },
  { l: 'CONVERSION RATIO', v: `${props.monetization?.conversionRate || 0}%`, i: 'fa-solid fa-arrows-to-dot' },
  { l: 'AVG TRANSACTION', v: `Rs. ${props.monetization?.avgTransaction || 0}`, i: 'fa-solid fa-gem' },
  { l: 'REVENUE PROJECTION', v: `Rs. ${(props.monetization?.revenueProjection || 0).toLocaleString()}`, i: 'fa-solid fa-chart-line' }
])

const advancedMetrics = computed(() => [
  { l: 'ABANDONED VALUE', v: (props.monetization?.abandonedValue || 0).toLocaleString(), tip: 'CAPTURE WITH UPSELLS' },
  { l: 'POTENTIAL YIELD', v: Math.max(0, (props.monetization?.revenueProjection || 0) - (props.stats?.revenue || 0)).toLocaleString(), tip: 'GROWTH POTENTIAL' },
  { l: 'VISITOR EQUITY', v: ((props.monetization?.visitorValue || 0) * 1.5).toFixed(0), tip: 'LIFETIME POTENTIAL' }
])
</script>

<style scoped>
.shadow-3xl {
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.15);
}
.dark .shadow-3xl {
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.5);
}
</style>
