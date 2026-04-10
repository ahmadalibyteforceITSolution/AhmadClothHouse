<template>
  <div class="space-y-12 animate-in transition-all">
    <!-- Catalog Controller -->
    <div class="bg-white dark:bg-[#080808] p-12 border border-[#d4af3711] shadow-3xl relative overflow-hidden group">
      <div class="absolute -top-20 -left-20 w-80 h-80 bg-[var(--primary-gold)]/5 blur-[100px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
      
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 relative z-10 font-sans">
        <div class="flex-grow">
           <div class="flex items-center gap-3 mb-4">
              <div class="h-[1px] w-8 bg-[var(--primary-gold)]"></div>
              <span class="text-[var(--primary-gold)] font-bold text-[9px] uppercase tracking-[0.4em]">DESIGN EXPLORATION</span>
           </div>
          <h2 class="text-3xl font-light uppercase tracking-tighter text-gray-900 dark:text-white mb-6 font-playfair italic underline decoration-[var(--primary-gold)]/20 underline-offset-8">Boutique Catalog</h2>
          
          <div class="flex flex-wrap gap-12 items-end">
            <div class="min-w-[280px] space-y-4">
              <label class="text-[9px] font-bold uppercase tracking-[0.3em] text-stone-400">FILTER BY COLLECTION</label>
              <div class="luxury-dropdown-container" @click="isOpen = !isOpen">
                <div class="luxury-dropdown-selected">
                   {{ selectedCategory || '— ALL COLLECTIONS —' }}
                   <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-[8px] transition-transform" :class="{'rotate-180': isOpen}" />
                </div>
                <transition name="dropdown-reveal">
                   <div v-if="isOpen" class="luxury-dropdown-list shadow-3xl">
                      <div class="luxury-dropdown-item" @click="selectedCategory = ''; $emit('update:selectedCategory', '')">— ALL COLLECTIONS —</div>
                      <div v-for="cat in navCategories" :key="cat" class="luxury-dropdown-item" @click="selectedCategory = cat; $emit('update:selectedCategory', cat)">{{ cat.toUpperCase() }}</div>
                   </div>
                </transition>
              </div>
            </div>
            
            <div class="flex items-center gap-4 text-stone-400 bg-[var(--primary-gold)]/5 px-6 py-3 border border-[#d4af3711]">
               <span class="text-[10px] font-bold tracking-[0.2em] text-[var(--primary-gold)]">{{ products.length }} DESIGNS ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Grid -->
    <div v-if="products.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <div
        v-for="(p, i) in products"
        :key="p.id"
        class="bg-white dark:bg-[#080808] border border-[#d4af3711] overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-3xl hover:border-[var(--primary-gold)]/30 group relative"
        :style="{ animationDelay: `${(i % 8) * 0.1}s` }"
      >
        <!-- Administrative Overlays -->
        <div v-if="isDynamic(p.id)" class="absolute top-4 right-4 z-30 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <button @click.stop="$emit('edit', p)" class="w-10 h-10 bg-black/80 backdrop-blur-3xl text-[var(--primary-gold)] rounded-full flex items-center justify-center text-xs shadow-2xl border border-[var(--primary-gold)]/20 hover:bg-[var(--primary-gold)] hover:text-white transition-all transform active:scale-95"><font-awesome-icon icon="fa-solid fa-pen" /></button>
          <button @click.stop="$emit('delete', p)" class="w-10 h-10 bg-black/80 backdrop-blur-3xl text-red-500 rounded-full flex items-center justify-center text-xs shadow-2xl border border-red-500/20 hover:bg-red-500 hover:text-white transition-all transform active:scale-95"><font-awesome-icon icon="fa-solid fa-trash-can" /></button>
        </div>

        <div class="relative overflow-hidden aspect-[4/5] cursor-pointer" @click="goToDetail(p.id)">
          <div class="absolute inset-0 bg-[#050505]/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
          <img :src="p.image" :alt="p.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-2000">
          
          <!-- Bottom Floating Detail -->
          <div class="absolute inset-x-0 bottom-0 p-8 z-20 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
             <div class="flex flex-col items-center">
                <span class="text-[9px] font-bold uppercase tracking-[0.5em] text-white/60 mb-2">VIEW DESIGN</span>
                <div class="h-[1px] w-8 bg-[var(--primary-gold)] mb-4"></div>
             </div>
          </div>
        </div>

        <div class="p-8 border-t border-[#d4af3711]">
          <div class="flex justify-between items-start mb-4">
             <p class="text-[8px] font-bold uppercase tracking-[0.3em] text-[var(--primary-gold)]/60 transition-colors group-hover:text-[var(--primary-gold)]">{{ p.category.toUpperCase() }}</p>
             <div v-if="p.nature && p.nature !== 'standard'" class="w-1.5 h-1.5 rounded-full bg-[var(--primary-gold)] shadow-[0_0_8px_rgba(184,134,11,0.5)]"></div>
          </div>
          <h3 class="text-sm font-light dark:text-white line-clamp-1 leading-snug font-playfair italic mb-3">{{ p.name }}</h3>
          <div class="flex items-center gap-4">
            <p class="text-xs font-bold dark:text-stone-400 tracking-tighter italic font-serif opacity-60 text-stone-500 group-hover:opacity-100 transition-opacity">Rs. {{ p.price?.toLocaleString() }}</p>
            <p v-if="p.originalPrice && p.originalPrice > p.price" class="text-[9px] font-bold text-stone-300 line-through font-serif italic tracking-tighter opacity-40">Rs. {{ p.originalPrice.toLocaleString() }}</p>
          </div>
          <!-- Real views & sales stats -->
          <div class="flex items-center gap-4 mt-3 pt-3 border-t border-[#d4af3708]">
            <div class="flex items-center gap-1.5">
              <font-awesome-icon icon="fa-solid fa-eye" class="text-[8px] text-blue-400/60" />
              <span class="text-[9px] font-bold text-blue-400">{{ p.views || 0 }}</span>
              <span class="text-[7px] font-bold text-stone-400 uppercase tracking-widest">views</span>
            </div>
            <div class="flex items-center gap-1.5">
              <font-awesome-icon icon="fa-solid fa-bag-shopping" class="text-[8px] text-emerald-400/60" />
              <span class="text-[9px] font-bold text-emerald-400">{{ p.sales || 0 }}</span>
              <span class="text-[7px] font-bold text-stone-400 uppercase tracking-widest">sold</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="h-[50vh] flex flex-col items-center justify-center text-center bg-white dark:bg-[#080808] border border-[#d4af3711] shadow-3xl">
      <div class="w-24 h-24 border border-[#d4af3711] rounded-full flex items-center justify-center mb-10 opacity-30 text-3xl"><font-awesome-icon icon="fa-solid fa-shirt" /></div>
      <h3 class="text-2xl font-black uppercase tracking-[0.2em] text-stone-400 font-playfair italic transition-all">No Designs Found</h3>
      <p class="text-[9px] text-stone-400 font-black mt-6 uppercase tracking-[0.4em] max-w-xs transition-all opacity-40 leading-loose">The requested category of the catalog is currently empty or has no matching items.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineProps({
  products: Array,
  navCategories: Array,
  isDynamic: Function
})

const selectedCategory = ref('')
const isOpen = ref(false)
const router = useRouter()

const goToDetail = (id) => {
  router.push(`/product/${id}`)
}

defineEmits(['update:selectedCategory', 'edit', 'delete'])
</script>

<style scoped>
.luxury-dropdown-container {
  position: relative;
  min-width: 280px;
  cursor: pointer;
  user-select: none;
}
.luxury-dropdown-selected {
  border-bottom: 1px solid #d4af3722;
  padding: 16px 0;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: #1a1a1a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease;
}
.dark .luxury-dropdown-selected { color: white; }
.luxury-dropdown-container:hover .luxury-dropdown-selected { border-color: #d4af37; padding-left: 8px; }

.luxury-dropdown-list {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #d4af3711;
  z-index: 100;
  max-height: 250px;
  overflow-y: auto;
  padding: 8px;
}
.dark .luxury-dropdown-list { 
  background: rgba(8, 8, 8, 0.95); 
  backdrop-filter: blur(20px);
  border-color: rgba(212, 175, 55, 0.1);
}

.luxury-dropdown-item {
  padding: 14px 16px;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #666;
  transition: all 0.3s ease;
}
.dark .luxury-dropdown-item { color: rgba(255, 255, 255, 0.5); }

.luxury-dropdown-item:hover {
  background: rgba(212, 175, 55, 0.05);
  color: #d4af37;
  padding-left: 20px;
}

/* Custom Scrollbar */
.luxury-dropdown-list::-webkit-scrollbar { width: 3px; }
.luxury-dropdown-list::-webkit-scrollbar-track { background: transparent; }
.luxury-dropdown-list::-webkit-scrollbar-thumb { background: rgba(212, 175, 55, 0.2); border-radius: 10px; }

.dropdown-reveal-enter-active, .dropdown-reveal-leave-active {
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.dropdown-reveal-enter-from, .dropdown-reveal-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.shadow-3xl {
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.15);
}
.dark .shadow-3xl {
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.5);
}
</style>
