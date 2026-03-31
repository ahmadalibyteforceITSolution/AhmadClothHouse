<template>
  <div class="space-y-12 animate-in transition-all">
    
    <!-- Pulse Metrics -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
       <div v-for="stat in securityStats" :key="stat.l" class="bg-white dark:bg-[#080808] p-10 border border-[#d4af3711] shadow-2xl transition-all duration-700 hover:border-[var(--primary-gold)]/30 group relative overflow-hidden">
          <div class="absolute -right-8 -top-8 w-24 h-24 bg-[var(--primary-gold)]/5 blur-[80px] rounded-full group-hover:scale-150 transition-transform"></div>
          <div class="w-14 h-14 rounded-full border border-[var(--primary-gold)]/10 bg-[var(--primary-gold)]/5 text-[var(--primary-gold)] flex items-center justify-center text-3xl mb-10 shadow-inner group-hover:rotate-12 transition-transform">
            <font-awesome-icon :icon="stat.i" />
          </div>
          <p class="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 mb-3">{{ stat.l }}</p>
          <h3 class="text-xl font-light dark:text-white uppercase tracking-tighter font-playfair italic underline decoration-[var(--primary-gold)]/20 underline-offset-4">{{ stat.v }}</h3>
       </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
       <!-- Access Records -->
       <div class="bg-white dark:bg-[#080808] p-12 border border-[#d4af3711] shadow-3xl group">
          <div class="flex justify-between items-center mb-16 px-2">
             <div class="font-sans">
               <div class="flex items-center gap-3 mb-4">
                  <div class="h-[1px] w-8 bg-[var(--primary-gold)]"></div>
                  <span class="text-[var(--primary-gold)] font-bold text-[9px] uppercase tracking-[0.4em]">ACCESS LOGS</span>
               </div>
               <h3 class="text-3xl font-light uppercase tracking-tighter text-gray-900 dark:text-white font-playfair italic">Access Records</h3>
             </div>
             <div class="flex flex-col items-end">
                <span class="text-[9px] font-bold text-red-600 bg-red-500/5 px-6 py-3 border border-red-500/10 rounded-none uppercase tracking-widest shadow-2xl">0 UNAUTHORIZED ATTEMPTS</span>
             </div>
          </div>
          
          <div class="space-y-8">
             <div v-for="log in loginLogs" :key="log.ip" class="flex items-center justify-between p-8 bg-[#fafaf8] dark:bg-white/5 border border-transparent hover:border-[#d4af3722] transition-all duration-700 group cursor-default">
                <div class="flex items-center gap-6">
                   <div class="w-10 h-10 rounded-full border border-[#d4af3711] flex items-center justify-center text-[10px]" :class="log.s === 'Authorized' ? 'text-emerald-500 bg-emerald-500/5' : 'text-red-500 bg-red-500/5'">
                      <font-awesome-icon icon="fa-solid fa-circle" class="text-[6px] animate-pulse" />
                   </div>
                   <div>
                     <p class="text-[11px] font-bold dark:text-white tracking-widest uppercase mb-1 font-sans">{{ log.u }}</p>
                     <p class="text-[9px] font-bold text-stone-400 uppercase font-mono tracking-widest">{{ log.ip }}</p>
                   </div>
                </div>
                <div class="text-right">
                   <p class="text-[9px] font-bold uppercase tracking-[0.2em] mb-2" :class="log.s === 'Authorized' ? 'text-emerald-500' : 'text-red-500'">{{ log.s.toUpperCase() }}</p>
                   <p class="text-[8px] font-bold text-stone-400 uppercase tracking-widest opacity-40 italic">{{ log.t }}</p>
                </div>
             </div>
          </div>
       </div>

       <!-- Session Command Hub -->
       <div class="bg-black text-white p-12 shadow-3xl relative overflow-hidden flex flex-col justify-between border border-[#d4af371a] group">
          <div class="absolute -bottom-20 -right-20 w-80 h-80 bg-[var(--primary-gold)]/5 blur-[120px] rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
          <div>
             <div class="flex items-center gap-3 mb-8">
                <div class="h-[1px] w-12 bg-[var(--primary-gold)]"></div>
                <h3 class="text-[10px] font-bold uppercase tracking-[0.5em] text-[var(--primary-gold)]">ADMIN SESSION HUB</h3>
             </div>
             
             <div class="space-y-8">
                <div v-for="admin in admins" :key="admin._id" class="flex items-center justify-between p-8 bg-white/5 border border-white/5 hover:border-[var(--primary-gold)]/20 transition-all duration-700">
                   <div class="flex items-center gap-6">
                      <div class="w-16 h-16 rounded-full border border-[var(--primary-gold)]/20 bg-[var(--primary-gold)]/5 flex items-center justify-center text-[11px] font-bold shadow-2xl group-hover:border-[var(--primary-gold)] transition-colors">FB</div>
                      <div>
                         <p class="text-[11px] font-bold uppercase tracking-[0.2em] mb-1">{{ admin.name }}</p>
                         <p class="text-[8px] text-white/30 uppercase tracking-widest italic">HEAD BAKER ACCESS</p>
                      </div>
                   </div>
                   <button @click="$emit('revoke', admin._id)" class="px-8 py-3 bg-red-600/10 text-red-500 text-[9px] font-bold uppercase tracking-[0.3em] border border-red-500/20 hover:bg-red-600 hover:text-white transition-all transform active:scale-95">REVOKE</button>
                </div>
             </div>
          </div>
          
          <div class="mt-20 pt-12 border-t border-white/5">
             <div class="flex justify-between items-center bg-white/5 p-8 border border-white/5 transition-colors hover:border-emerald-500/20">
                <div>
                   <p class="text-[9px] font-black text-white/40 uppercase tracking-[0.4em] mb-2 uppercase">Secure Data Vault</p>
                   <p class="text-[11px] font-black text-emerald-500 uppercase tracking-[0.5em] font-playfair italic">SECURED</p>
                </div>
                <div class="w-16 h-8 bg-emerald-500/5 border border-emerald-500/20 rounded-full relative flex items-center px-1">
                   <div class="w-5 h-5 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981] ml-auto"></div>
                </div>
             </div>
          </div>
       </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  admins: {
    type: Array,
    default: () => []
  },
  securityStats: {
    type: Array,
    default: () => [
      {l:'DATA PROTECTION', v:'SSL/AES-256 ACTIVE', i:'fa-solid fa-lock'},
      {l:'NETWORK SECURITY', v:'THREAT_LEVEL_0', i:'fa-solid fa-shield-halved'},
      {l:'USER SYNC', v:'VERIFIED', i:'fa-solid fa-users-gear'},
      {l:'SERVER LOAD', v:'OPTIMIZED', i:'fa-solid fa-bolt'}
    ]
  },
  loginLogs: {
    type: Array,
    default: () => [
      {u:'ADMIN_ROOT', ip:'4.182.20.91', s:'Authorized', t:'2m ago'},
      {u:'GUEST_USER', ip:'142.12.89.4', s:'Denied', t:'14m ago'},
      {u:'STRICT_BAKER', ip:'10.0.0.42', s:'Authorized', t:'1h ago'}
    ]
  }
})

defineEmits(['revoke'])
</script>

<style scoped>
.shadow-3xl {
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.15);
}
.dark .shadow-3xl {
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.5);
}
</style>
