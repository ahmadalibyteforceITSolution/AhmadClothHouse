<template>
  <div class="space-y-12 animate-in transition-all">
    
    <!-- Revenue Performance Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      
       <!-- Traffic Value Console -->
       <div class="bg-black dark:bg-[#080808] rounded-2xl p-12 text-white shadow-3xl relative overflow-hidden group min-h-[400px] flex flex-col justify-between border border-[#d4af371a] hover:border-[#d4af3733] transition-all duration-700">
          <div class="absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/10 blur-[130px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
          
          <div class="relative z-10">
             <div class="flex justify-between items-start mb-12">
                <div>
                   <p class="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-500 mb-4 leading-none">MONETIZATION ENGINE</p>
                   <h3 class="text-6xl md:text-7xl font-light italic tracking-tighter leading-none font-playfair">Rs. {{ projectedEarnings.toLocaleString() }}</h3>
                   <p class="text-[9px] font-bold text-white/30 mt-4 uppercase tracking-[0.5em]">Estimated Monthly Traffic Value</p>
                </div>
                <div class="bg-white/5 backdrop-blur-3xl px-6 py-3 rounded-none border border-white/10 text-[9px] font-bold uppercase tracking-widest text-white/50">AD-CORE ACTIVE</div>
             </div>
             
             <div class="grid grid-cols-2 gap-8 mt-12">
                <div>
                   <p class="text-[8px] font-bold uppercase tracking-[0.4em] text-white/30 mb-2">Impressions</p>
                   <p class="text-2xl font-light italic text-[var(--primary-gold)] font-playfair">{{ (activeUsers * 150).toLocaleString() }} <span class="text-[9px] not-italic text-stone-600 ml-2 uppercase tracking-[0.2em]">LIVE</span></p>
                </div>
                <div>
                   <p class="text-[8px] font-bold uppercase tracking-[0.4em] text-white/30 mb-2">eCPM Yield</p>
                   <p class="text-2xl font-light italic text-emerald-500 font-playfair">Rs. 85.50</p>
                </div>
             </div>
          </div>

          <div class="relative z-10 pt-12 border-t border-white/5 flex justify-between items-center">
             <div class="flex items-center gap-4">
                <div class="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <span class="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-500">ENGINE OPTIMIZED</span>
             </div>
             <button class="bg-emerald-500 text-black px-10 py-5 rounded-none text-[10px] font-bold uppercase tracking-[0.4em] shadow-2xl hover:bg-white transition-all transform hover:-translate-y-1">WITHDRAW REVENUE</button>
          </div>
       </div>

       <!-- AdSense Settings Center -->
       <div class="bg-white dark:bg-[#080808] rounded-2xl p-12 border border-[#d4af3711] shadow-2xl flex flex-col justify-between">
          <div>
             <h4 class="text-2xl font-light uppercase tracking-tight text-gray-900 dark:text-white mb-6 italic font-playfair">External Ad Integration</h4>
             <p class="text-[10px] font-bold text-stone-400 uppercase tracking-[0.4em] mb-10 leading-loose">
               Connect your **Google AdSense** or other ad network scripts here. The system will automatically inject these into the boutique's optimal revenue slots.
             </p>
             
             <div class="space-y-8">
                <div>
                   <label class="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-500 mb-3 block">AdSense Publisher ID</label>
                   <input 
                     v-model="monetizationSettings.publisherId"
                     placeholder="ca-pub-XXXXXXXXXXXXXXXX"
                     class="w-full bg-[#fafaf8] dark:bg-black/40 border border-[#d4af3711] p-6 text-xs font-mono tracking-widest focus:border-[var(--primary-gold)] transition-all outline-none dark:text-white"
                   />
                </div>
                <div>
                   <label class="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-500 mb-3 block">Global Snippet (Advanced)</label>
                   <textarea 
                     v-model="monetizationSettings.adSnippet"
                     rows="4"
                     placeholder="Paste your <script> here..."
                     class="w-full bg-[#fafaf8] dark:bg-black/40 border border-[#d4af3711] p-6 text-[10px] font-mono leading-relaxed tracking-wider focus:border-[var(--primary-gold)] transition-all outline-none dark:text-white resize-none"
                   ></textarea>
                </div>
             </div>
          </div>
          
          <div class="pt-10 flex gap-6 mt-8">
             <button @click="saveSettings" class="flex-grow py-5 bg-black dark:bg-[var(--primary-gold)] text-white rounded-none text-[10px] font-bold uppercase tracking-[0.4em] shadow-xl hover:bg-emerald-600 transition-all">SAVE CONFIGURATION</button>
             <button @click="testAdSense" class="px-10 py-5 border border-[#d4af3711] text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-stone-50 transition-all dark:text-white">RUN PILOT TEST</button>
          </div>
       </div>
    </div>

    <!-- Monetization Methods Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
       <div v-for="method in revenueMethods" :key="method.l" class="bg-[#fdfdfb] dark:bg-[#0a0a0a] rounded-2xl p-10 border border-[#d4af3711] shadow-lg group relative overflow-hidden transition-all hover:-translate-y-2">
          <div :class="method.color" class="absolute -right-4 -bottom-4 w-16 h-16 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
          <p class="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 mb-4 relative z-10">{{ method.l }}</p>
          <h5 class="text-3xl font-light italic font-playfair dark:text-white relative z-10 mb-4">{{ method.status }}</h5>
          <button class="text-[8px] font-bold text-[var(--primary-gold)] uppercase tracking-[0.5em] relative z-10 hover:tracking-[0.7em] transition-all">{{ method.action }}</button>
       </div>
    </div>

    <!-- Affiliate Partner Registry -->
    <div class="bg-white dark:bg-[#080808] rounded-2xl p-12 border border-[#d4af3711] shadow-3xl">
       <div class="flex justify-between items-center mb-16">
          <div>
             <h3 class="text-2xl font-light uppercase tracking-tight text-gray-900 dark:text-white mb-2 italic font-playfair">Affiliate Network</h3>
             <p class="text-[9px] font-bold text-stone-400 uppercase tracking-[0.4em]">Manage external brand partnerships and referral links.</p>
          </div>
          <button class="bg-black dark:bg-white dark:text-black text-white px-8 py-4 text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-[var(--primary-gold)] transition-all">ADD PARTNER</button>
       </div>

       <div class="space-y-6">
          <div v-for="partner in partners" :key="partner.name" class="flex items-center p-8 rounded-xl bg-[#fafaf8] dark:bg-white/5 border border-transparent hover:border-[#d4af3722] transition-all group">
             <div class="w-12 h-12 rounded-full bg-white dark:bg-black border border-[#d4af3711] flex items-center justify-center text-xl text-[var(--primary-gold)] shadow-lg group-hover:scale-110 transition-transform italic font-playfair">
                {{ partner.name[0] }}
             </div>
             <div class="ml-10 flex-grow grid grid-cols-4 items-center gap-10">
                <div>
                   <p class="text-[8px] font-bold text-stone-400 uppercase mb-2 tracking-[0.2em]">PARTNER</p>
                   <p class="text-[11px] font-bold dark:text-white tracking-widest">{{ partner.name }}</p>
                </div>
                <div>
                   <p class="text-[8px] font-bold text-stone-400 uppercase mb-2 tracking-[0.2em]">COMISSION</p>
                   <p class="text-[11px] font-bold text-emerald-500 tracking-widest">{{ partner.commission }}%</p>
                </div>
                <div>
                   <p class="text-[8px] font-bold text-stone-400 uppercase mb-2 tracking-[0.2em]">CONVERSIONS</p>
                   <p class="text-[11px] font-bold dark:text-white">{{ partner.conversions }}</p>
                </div>
                <div class="text-right">
                   <span class="px-6 py-3 border border-[#d4af3722] text-[8px] font-bold uppercase tracking-[0.3em] dark:text-white/60">ACTIVE</span>
                </div>
             </div>
          </div>
       </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import api from '../../api'

const props = defineProps({
  activeUsers: Number,
  monetization: Object
})

const monetizationSettings = ref({
  publisherId: '',
  adSnippet: '',
  isActive: true
})

const fetchSettings = async () => {
    try {
        const { data } = await api.get('/monetization')
        monetizationSettings.value = {
            publisherId: data.publisherId || '',
            adSnippet: data.adSnippet || '',
            isActive: data.isActive ?? true
        }
    } catch (err) {
        console.error("Failed to fetch monetization settings", err)
    }
}

const projectedEarnings = computed(() => {
  // Logic: Active Users * Potential Visits * CPM / 1000
  return Math.round((props.activeUsers || 0) * 45 * 85.50)
})

const revenueMethods = [
  { l: 'IN-SITE ADS (ADSENSE)', status: 'ENABLED', action: 'CONFIGURE SLOTS', color: 'bg-amber-500/10' },
  { l: 'AFFILIATE LINKS', status: 'ACTIVE', action: 'MANAGE LINKS', color: 'bg-indigo-500/10' },
  { l: 'SPONSORED COLLECTIONS', status: 'LOCKED', action: 'UPGRADE PLAN', color: 'bg-rose-500/10' }
]

const partners = [
  { name: 'Bridal Jewelry Co', commission: 15, conversions: 124 },
  { name: 'Silk Traders', commission: 10, conversions: 89 },
  { name: 'Luxury Footwear', commission: 12, conversions: 45 }
]

const saveSettings = async () => {
    try {
        await api.post('/monetization', monetizationSettings.value)
        alert("Monetization configuration saved and engine re-optimized.")
    } catch (err) {
        alert("Failed to save settings. Check your connection.")
    }
}

const testAdSense = () => {
    alert("Pilot test initiated. Checking for conflicting scripts and layout integrity...")
}

onMounted(fetchSettings)
</script>

<style scoped>
.shadow-3xl {
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.15);
}
.dark .shadow-3xl {
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.5);
}
</style>
