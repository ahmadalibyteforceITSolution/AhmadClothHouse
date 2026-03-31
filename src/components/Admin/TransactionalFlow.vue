<template>
  <div class="space-y-10 animate-in transition-all">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
      
      <!-- Sales Revenue Chart -->
      <div class="lg:col-span-2 bg-white dark:bg-[#080808] p-6 sm:p-12 border border-[#d4af3711] shadow-3xl relative overflow-hidden group">
         <div class="absolute -right-16 -top-16 w-64 h-64 bg-[var(--primary-gold)]/5 blur-[100px] rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
         
         <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 relative z-10 gap-6">
            <div>
               <div class="flex items-center gap-3 mb-3">
                  <div class="h-[1px] w-8 bg-[var(--primary-gold)]"></div>
                  <span class="text-[var(--primary-gold)] font-bold text-[9px] uppercase tracking-[0.4em]">SALES ANALYSIS</span>
               </div>
              <h2 class="text-2xl sm:text-3xl font-light uppercase tracking-tighter text-gray-900 dark:text-white font-playfair italic">Sales Revenue</h2>
            </div>
            <div class="bg-[var(--primary-gold)]/5 text-[var(--primary-gold)] px-6 py-3 rounded-none text-[9px] font-bold uppercase tracking-[0.3em] border border-[var(--primary-gold)]/10 backdrop-blur-3xl">LIVE SYNC</div>
         </div>

         <!-- Sales Chart -->
         <div class="flex items-end justify-between h-48 sm:h-64 gap-2 sm:gap-3 relative z-10 mt-10">
            <div v-for="(v, i) in chartData" :key="i" class="flex-grow group relative h-full flex flex-col justify-end">
               <div :style="{ height: v + '%' }" class="bg-[var(--primary-gold)]/10 group-hover:bg-[var(--primary-gold)] transition-all duration-700 rounded-none shadow-[0_0_10px_transparent] group-hover:shadow-[0_0_15px_rgba(184,134,11,0.5)]"></div>
               <span class="text-[7px] font-bold text-stone-400 text-center mt-4 opacity-40 uppercase tracking-widest">{{ i+1 }}</span>
            </div>
         </div>
      </div>

      <!-- Sales Channels -->
      <div class="bg-black text-white p-12 shadow-3xl relative overflow-hidden flex flex-col justify-between border border-[#d4af371a] group">
         <div class="absolute -top-20 -right-20 w-64 h-64 bg-[var(--primary-gold)]/10 blur-[120px] rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
         <div>
            <h3 class="text-[10px] font-bold uppercase tracking-[0.5em] text-[var(--primary-gold)] mb-12">SALES CHANNELS</h3>
            <div class="space-y-10">
              <div v-for="item in distribution" :key="item.n">
                 <div class="flex justify-between text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                    <span class="text-white/40">{{ item.n }}</span>
                    <span class="text-[var(--primary-gold)] font-playfair italic underline decoration-[var(--primary-gold)]/20 underline-offset-4">{{ item.v }}%</span>
                 </div>
                 <div class="w-full h-[2px] bg-white/5 rounded-none overflow-hidden">
                    <div :style="{ width: item.v + '%' }" class="h-full bg-[var(--primary-gold)] shadow-[0_0_10px_rgba(184,134,11,0.5)]"></div>
                 </div>
              </div>
            </div>
         </div>
         <div class="pt-12 border-t border-white/5 mt-16">
            <p class="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20 mb-3">Payment Processing</p>
            <p class="text-2xl font-light italic tracking-tighter font-playfair uppercase">SECURE_PAYMENTS <span class="text-[var(--primary-gold)] text-xs not-italic ml-2 tracking-widest">ACTIVE</span></p>
         </div>
      </div>
    </div>

    <!-- Recent Sales Ledger -->
    <div class="bg-white dark:bg-[#080808] border border-[#d4af3711] shadow-3xl overflow-hidden p-6 sm:p-12 mb-10 group">
       <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 px-2 gap-8">
          <div>
            <div class="flex items-center gap-3 mb-4">
               <div class="h-[1px] w-12 bg-[var(--primary-gold)]"></div>
               <span class="text-[var(--primary-gold)] font-bold text-[9px] uppercase tracking-[0.4em]">ORDER HISTORY</span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-light uppercase tracking-tighter text-gray-900 dark:text-white font-playfair italic">Recent Sales Ledger</h3>
          </div>
          <button @click="$emit('refresh')" class="bg-black dark:bg-[var(--primary-gold)] text-white px-10 py-5 rounded-none text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[var(--primary-gold)] transition-all shadow-2xl active:scale-95 w-full sm:w-auto text-center">REFRESH LIST</button>
       </div>

        <div class="space-y-4">
          <div v-for="t in transactions" :key="t.id" class="flex flex-col p-8 rounded-none bg-[#fafaf8] dark:bg-white/5 border border-transparent hover:border-[#d4af3722] hover:shadow-2xl transition-all duration-700 group cursor-pointer relative overflow-hidden">
             <!-- Decorative side accent -->
             <div class="absolute left-0 top-0 bottom-0 w-[4px] bg-[var(--primary-gold)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>

             <div class="flex flex-col lg:flex-row items-center lg:items-center w-full gap-8 lg:gap-0">
                <div class="w-20 h-20 lg:w-16 lg:h-16 rounded-full bg-white dark:bg-black border border-[#d4af3711] shadow-2xl flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform shrink-0">
                   <font-awesome-icon :icon="t.icon || 'fa-solid fa-shirt'" class="text-[var(--primary-gold)]/60" />
                </div>
                
                <div class="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-center gap-x-8 gap-y-6 lg:gap-8 w-full text-center sm:text-left lg:ml-12">
                   <div>
                      <p class="text-[8px] font-bold text-stone-400 uppercase mb-2 leading-none tracking-[0.3em]">CUSTOMER NAME</p>
                      <p class="text-[11px] font-bold dark:text-white tracking-widest">{{ t.user }}</p>
                   </div>
                   <div>
                      <p class="text-[8px] font-bold text-stone-400 uppercase mb-2 leading-none tracking-[0.3em]">ORDER ID</p>
                      <p class="text-[11px] font-bold text-[var(--primary-gold)] font-mono italic">{{ t.id }}</p>
                   </div>
                   <div class="hidden lg:block">
                      <p class="text-[8px] font-bold text-stone-400 uppercase mb-2 leading-none tracking-[0.3em]">TRACKING REF</p>
                      <p class="text-[11px] font-bold text-stone-600 uppercase italic">{{ t.trackingNumber || 'PENDING_DISPATCH' }}</p>
                   </div>
                   <div>
                      <p class="text-[8px] font-bold text-stone-400 uppercase mb-2 leading-none tracking-[0.3em]">AMOUNT</p>
                      <p class="text-lg font-light dark:text-white font-playfair italic tracking-tighter">Rs. {{ t.amount.toLocaleString() }}</p>
                   </div>
                   <div class="flex justify-center sm:justify-start lg:justify-end gap-4">
                      <span :class="t.status === 'Delivered' || t.status === 'Completed' ? 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5' : 'text-[var(--primary-gold)] border-[var(--primary-gold)]/20 bg-[var(--primary-gold)]/5'" 
                        class="px-8 py-3 rounded-none text-[9px] font-bold uppercase tracking-[0.4em] border transition-all duration-700">
                        {{ t.status }}
                      </span>
                   </div>
                </div>
             </div>

             <!-- Admin Controls Expansion -->
             <div class="mt-8 pt-8 border-t border-[#d4af3711] flex flex-wrap items-center gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="flex items-center gap-4">
                   <span class="text-[8px] font-bold text-stone-400 uppercase tracking-widest">DISPATCH STATUS:</span>
                   <select @change="$emit('update-status', t.id, $event.target.value)" class="bg-transparent border-b border-[var(--primary-gold)]/20 text-[10px] font-bold text-[var(--primary-gold)] outline-none cursor-pointer">
                      <option v-for="s in ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled']" :key="s" :value="s" :selected="t.status === s">{{ s.toUpperCase() }}</option>
                   </select>
                </div>
                <div class="flex items-center gap-4 flex-grow max-w-xs">
                   <span class="text-[8px] font-bold text-stone-400 uppercase tracking-widest">TRACKING NO:</span>
                   <input type="text" :value="t.trackingNumber" @blur="$emit('update-tracking', t.id, $event.target.value)" placeholder="Enter Tracking Code..." class="bg-transparent border-b border-[var(--primary-gold)]/20 text-[10px] font-bold text-[var(--primary-gold)] outline-none w-full placeholder:opacity-30">
                </div>
                <button class="ml-auto text-[9px] font-bold text-[var(--primary-gold)] uppercase tracking-[0.3em] hover:underline">View Signature</button>
             </div>
          </div>
       </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  transactions: {
    type: Array,
    default: () => []
  },
  chartData: {
    type: Array,
    default: () => [30, 80, 45, 90, 60, 100, 75, 40, 85, 30, 95, 65]
  },
  distribution: {
    type: Array,
    default: () => [{n:'Direct Website', v:64}, {n:'Social Media', v:22}, {n:'Search Engines', v:14}]
  }
})

defineEmits(['update-status', 'update-tracking', 'refresh'])
</script>

<style scoped>
.shadow-3xl {
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.15);
}
.dark .shadow-3xl {
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.5);
}
</style>
