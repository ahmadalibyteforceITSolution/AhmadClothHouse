<template>
  <div class="space-y-10 animate-in transition-all">
    <!-- Main Boutique Form -->
    <div class="bg-white dark:bg-[#080808] p-10 md:p-16 border border-[#d4af3711] shadow-3xl relative overflow-hidden group">
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-[var(--primary-gold)]/5 blur-[120px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>

      <div class="mb-16">
         <div class="flex items-center gap-3 mb-4">
            <div class="h-[1px] w-12 bg-[var(--primary-gold)]"></div>
            <span class="text-[var(--primary-gold)] font-bold text-[9px] uppercase tracking-[0.4em]">BOUTIQUE STUDIO</span>
         </div>
         <h2 class="text-4xl font-light uppercase tracking-tighter text-gray-900 dark:text-white font-playfair italic underline decoration-[var(--primary-gold)]/10 underline-offset-8">
            {{ editingProduct ? 'Modify Design' : 'Create New Design' }}
         </h2>
      </div>

      <!-- Error Terminal -->
      <transition name="fade">
        <div v-if="error" class="mb-12 p-8 bg-red-500/5 border border-red-500/20 rounded-none flex items-center justify-between backdrop-blur-3xl">
          <div class="flex items-center gap-6">
            <div class="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500"><font-awesome-icon icon="fa-solid fa-triangle-exclamation" /></div>
            <div>
              <p class="text-[9px] font-bold uppercase tracking-[0.3em] text-red-600 dark:text-red-400 mb-1 leading-none">Creation Process Interrupted</p>
              <p class="text-[11px] font-bold text-red-500/70 uppercase tracking-tighter font-sans lowercase">{{ error }}</p>
            </div>
          </div>
          <button @click="$emit('clear-error')" class="text-red-400 hover:text-red-600 transition-colors p-2"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
        </div>
      </transition>

      <form @submit.prevent="$emit('submit')" class="space-y-12 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">

          <!-- Item Batch -->
          <div class="space-y-4">
            <label class="text-[9px] font-bold uppercase tracking-[0.4em] text-[var(--primary-gold)]">Design Collection</label>
            <input type="text" v-model="form.separateName" class="luxury-input" placeholder="e.g. SUMMER COUTURE 2026">
          </div>

          <!-- Iconography -->
          <div class="space-y-4">
            <label class="text-[9px] font-bold uppercase tracking-[0.4em] text-[var(--primary-gold)]">Fashion Icon (FA Class)</label>
            <input type="text" v-model="form.iconClass" class="luxury-input" placeholder="e.g. fa-solid fa-shirt">
          </div>

          <!-- Master Title -->
          <div class="space-y-4 md:col-span-2">
            <label class="text-[9px] font-bold uppercase tracking-[0.4em] text-[var(--primary-gold)]">Design Name (Title)</label>
            <input type="text" v-model="form.title" required class="luxury-input text-xl font-playfair italic" placeholder="e.g. HAND-EMBROIDERED LUXURY LAWN">
          </div>

          <!-- Master Hierarchy -->
          <div class="space-y-4">
            <label class="text-[9px] font-bold uppercase tracking-[0.4em] text-[var(--primary-gold)]">Main Category</label>
            <div class="relative group">
              <select v-model="form.parentCategory" @change="form.category = ''" class="luxury-input appearance-none pr-12 cursor-pointer">
                <option value="">— Select Category —</option>
                <option v-for="cat in navCategories" :key="cat" :value="cat">{{ cat.toUpperCase() }}</option>
                <option value="__new__">+ ADD NEW CATEGORY...</option>
              </select>
              <font-awesome-icon icon="fa-solid fa-chevron-down" class="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--primary-gold)]/30 group-hover:text-[var(--primary-gold)] transition-colors text-[8px] pointer-events-none" />
            </div>
            <input v-if="form.parentCategory === '__new__'" type="text" v-model="form.newCategoryName" class="w-full bg-[var(--primary-gold)]/5 border border-[var(--primary-gold)]/20 px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-[var(--primary-gold)] outline-none mt-4 placeholder:text-[var(--primary-gold)]/40" placeholder="Name of new category...">
          </div>

          <!-- Product Sub-Division -->
          <div class="space-y-4">
            <label class="text-[9px] font-bold uppercase tracking-[0.4em] text-[var(--primary-gold)]">Sub-Category</label>
            <div class="relative group">
              <select v-model="form.category" class="luxury-input appearance-none pr-12 cursor-pointer" :disabled="!subCategories.length">
                <option value="">— All in {{ form.parentCategory || 'Category' }} —</option>
                <option v-for="sub in subCategories" :key="sub" :value="sub">{{ sub.toUpperCase() }}</option>
              </select>
              <font-awesome-icon icon="fa-solid fa-chevron-down" class="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--primary-gold)]/30 group-hover:text-[var(--primary-gold)] transition-colors text-[8px] pointer-events-none" />
            </div>
          </div>

          <!-- Item Type -->
          <div class="space-y-4">
            <label class="text-[9px] font-bold uppercase tracking-[0.4em] text-[var(--primary-gold)]">Design Nature</label>
            <div class="relative group">
              <select v-model="form.nature" class="luxury-input appearance-none pr-12 cursor-pointer">
                <option value="standard">REGULAR CATALOG</option>
                <option value="premium">PREMIUM PIECE</option>
                <option value="limited">LIMITED EDITION</option>
              </select>
              <font-awesome-icon icon="fa-solid fa-chevron-down" class="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--primary-gold)]/30 group-hover:text-[var(--primary-gold)] transition-colors text-[8px] pointer-events-none" />
            </div>
          </div>

          <!-- Pricing Metrics -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:col-span-2">
            <div class="space-y-4">
              <label class="text-[9px] font-bold uppercase tracking-[0.4em] text-[var(--primary-gold)]">Retail Price (Rs.)</label>
              <div class="relative">
                <span class="absolute left-0 bottom-4 text-xs font-bold text-[var(--primary-gold)] font-serif">Rs.</span>
                <input type="number" step="1" min="0" v-model="form.price" required class="luxury-input pl-12" placeholder="0">
              </div>
            </div>
            <div class="space-y-4">
              <label class="text-[9px] font-bold uppercase tracking-[0.4em] text-[var(--primary-gold)]">Original Price (Rs.)</label>
              <div class="relative group">
                <span class="absolute left-0 bottom-4 text-xs font-bold text-stone-400 font-serif">Rs.</span>
                <input type="number" step="1" min="0" v-model="form.originalPrice" class="luxury-input pl-12 border-stone-100 group-hover:border-[var(--primary-gold)]/40" placeholder="Optional">
                <p class="text-[7px] font-bold text-stone-400 uppercase tracking-widest mt-2 italic">Strike-through price</p>
              </div>
            </div>
            <div class="space-y-4">
              <label class="text-[9px] font-bold uppercase tracking-[0.4em] text-[var(--primary-gold)]">Discount Offer (%)</label>
              <div class="relative group">
                <span class="absolute left-0 bottom-4 text-xs font-bold text-stone-400 font-serif">%</span>
                <input type="number" step="1" min="0" max="100" v-model="form.discount" class="luxury-input pl-12 border-stone-100 group-hover:border-[var(--primary-gold)]/40" placeholder="0">
                <p class="text-[7px] font-bold text-stone-400 uppercase tracking-widest mt-2 italic">Shows as badge</p>
              </div>
            </div>
            <div class="space-y-4">
              <label class="text-[9px] font-bold uppercase tracking-[0.4em] text-[var(--primary-gold)]">Cost Price (Rs.)</label>
              <div class="relative">
                <span class="absolute left-0 bottom-4 text-xs font-bold text-[var(--primary-gold)] font-serif">Rs.</span>
                <input type="number" step="1" min="0" v-model="form.costPrice" required class="luxury-input pl-12" placeholder="0">
              </div>
            </div>
          </div>

          <!-- Product Image -->
          <div class="space-y-4 md:col-span-2">
            <label class="text-[9px] font-bold uppercase tracking-[0.4em] text-[var(--primary-gold)]">Primary Product Image</label>
            <div class="relative h-[250px] border border-dashed border-[#d4af3722] hover:border-[var(--primary-gold)] transition-all duration-700 bg-[#fafaf8] dark:bg-black/40 flex flex-col items-center justify-center cursor-pointer group overflow-hidden">
              <input type="file" accept="image/*" @change="e => $emit('file-upload', e, 'filterImage')" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10">
              <img v-if="form.filterImagePreview" :src="form.filterImagePreview" class="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-1000 z-0">
              <div v-else class="flex flex-col items-center gap-6 pointer-events-none z-0">
                <div class="w-20 h-20 rounded-full border border-[var(--primary-gold)]/20 flex items-center justify-center text-3xl text-[var(--primary-gold)]/40 group-hover:text-[var(--primary-gold)] group-hover:scale-110 transition-all duration-700">
                  <font-awesome-icon icon="fa-solid fa-shirt" />
                </div>
                <span class="text-[9px] font-bold uppercase tracking-[0.5em] text-stone-400 group-hover:text-[var(--primary-gold)]">Upload Product Visual</span>
              </div>
            </div>
          </div>

          <!-- Item Variants -->
          <div class="md:col-span-2 space-y-10 pt-10 border-t border-[#d4af3711]">
            <div class="flex justify-between items-center">
               <div class="flex items-center gap-3">
                  <div class="h-[1px] w-8 bg-[var(--primary-gold)]/40"></div>
                  <h3 class="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--primary-gold)]">Item Variants (Size/Color)</h3>
               </div>
               <button type="button" @click="$emit('add-variant')" class="px-8 py-3 bg-black dark:bg-[var(--primary-gold)] text-white text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-[var(--primary-gold)] transition-all shadow-xl">+ NEW VARIANT</button>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
               <div v-for="(v, idx) in form.variants" :key="idx" class="relative group p-10 bg-[#fafaf8] dark:bg-black/40 border border-[#d4af3711] transition-all hover:border-[var(--primary-gold)] duration-500">
                  <button type="button" @click="$emit('remove-variant', idx)" class="absolute top-4 right-4 text-red-800/20 hover:text-red-600 transition-colors p-2 text-sm"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
                  <div class="grid grid-cols-2 gap-8 mb-8">
                     <div class="space-y-2">
                        <label class="text-[7px] font-bold uppercase tracking-widest text-stone-400">SIZE</label>
                        <input type="text" v-model="v.size" placeholder="Small / Regular / Large" class="w-full bg-transparent border-b border-stone-200 dark:border-stone-800 py-2 text-xs font-bold outline-none focus:border-[var(--primary-gold)] transition-all dark:text-white">
                     </div>
                     <div class="space-y-2">
                        <label class="text-[7px] font-bold uppercase tracking-widest text-stone-400">COLOR / SHADE</label>
                        <input type="text" v-model="v.color" placeholder="Midnight Blue" class="w-full bg-transparent border-b border-stone-200 dark:border-stone-800 py-2 text-xs font-bold outline-none focus:border-[var(--primary-gold)] transition-all dark:text-white">
                     </div>
                  </div>
                  <div class="flex items-center gap-6">
                     <div class="w-16 h-20 bg-white dark:bg-black border border-[#d4af371a] flex items-center justify-center overflow-hidden shrink-0 group-hover:border-[var(--primary-gold)]/40 transition-colors">
                        <img v-if="v.imagePreview" :src="v.imagePreview" class="w-full h-full object-cover">
                        <font-awesome-icon v-else icon="fa-solid fa-image" class="text-stone-300 dark:text-stone-800 text-xl" />
                     </div>
                     <div class="flex-grow space-y-4">
                        <p class="text-[8px] font-bold text-stone-400 uppercase tracking-widest">VARIANT IMAGE</p>
                        <input type="file" @change="e => $emit('variant-file-upload', e, idx)" class="text-[9px] font-bold text-[var(--primary-gold)]/60 file:mr-6 file:py-2 file:px-4 file:bg-[var(--primary-gold)]/5 file:border-0 file:text-[var(--primary-gold)] file:text-[8px] file:font-bold file:uppercase file:cursor-pointer cursor-pointer">
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <!-- Master Submission -->
        <div class="pt-20 border-t border-[#d4af3711] flex flex-col sm:flex-row items-center justify-between gap-10">
           <div class="flex items-center gap-4 group">
              <div class="w-2 h-2 rounded-full bg-[var(--primary-gold)] shadow-[0_0_10px_rgba(184,134,11,0.5)] animate-pulse"></div>
              <p class="text-[9px] text-stone-400 font-bold uppercase tracking-[0.5em] group-hover:text-[var(--primary-gold)] transition-colors">Design Studio Ready</p>
           </div>
           
           <div class="flex gap-6 w-full sm:w-auto">
              <button v-if="editingProduct" @click.prevent="$emit('cancel')" class="px-12 py-5 border border-[#d4af3722] text-[10px] font-bold uppercase tracking-[0.4em] dark:text-white hover:bg-stone-50 dark:hover:bg-white/5 transition-all">Cancel Creation</button>
              <button type="submit" :disabled="loading" class="flex-grow sm:flex-none bg-black dark:bg-[var(--primary-gold)] text-white px-16 py-6 text-[10px] font-bold uppercase tracking-[0.5em] shadow-3xl hover:bg-[var(--deep-burgundy)] transition-all disabled:opacity-20 active:scale-95 flex items-center justify-center gap-4">
                 <span>{{ loading ? 'PROCESSING...' : (editingProduct ? 'UPDATE DESIGN' : 'CREATE DESIGN') }}</span>
                 <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-[8px] mt-0.5" />
              </button>
           </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
defineProps({
  form: Object,
  editingProduct: Object,
  error: String,
  loading: Boolean,
  navCategories: Array,
  subCategories: Array
})

defineEmits(['submit', 'cancel', 'file-upload', 'variant-file-upload', 'add-variant', 'remove-variant', 'clear-error'])
</script>

<style scoped>
.luxury-input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #d4af3722;
  padding: 16px 0;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  outline: none;
  transition: all 0.5s ease;
  color: #1a1a1a;
}
.dark .luxury-input { color: white; }
.luxury-input:focus { border-color: #d4af37; padding-left: 12px; }
.luxury-input::placeholder { color: #ccc; font-weight: 400; }
.dark .luxury-input::placeholder { color: #333; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
