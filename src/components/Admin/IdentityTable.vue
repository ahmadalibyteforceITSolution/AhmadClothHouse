<template>
  <div class="space-y-10 animate-in transition-all">
    <!-- Header Card -->
    <div class="bg-white dark:bg-[#080808] p-10 border border-[#d4af3711] shadow-2xl relative overflow-hidden group">
      <div class="absolute -top-20 -left-20 w-80 h-80 bg-[var(--primary-gold)]/5 blur-[100px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
      
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 relative z-10">
        <div>
           <div class="flex items-center gap-3 mb-4">
              <div class="h-[1px] w-8 bg-[var(--primary-gold)]"></div>
              <span class="text-[var(--primary-gold)] font-bold text-[9px] uppercase tracking-[0.4em]">CUSTOMER REGISTRY</span>
           </div>
          <h2 class="text-3xl font-light uppercase tracking-tighter text-gray-900 dark:text-white mb-2 font-playfair italic underline decoration-[var(--primary-gold)]/20 underline-offset-8">Customer List</h2>
          <p class="text-[9px] font-bold text-stone-400 uppercase tracking-[0.3em]">Overseeing {{ users.length }} registered customers in the Ahmadcloths community.</p>
        </div>
        
        <div class="relative w-full md:w-80">
          <input 
            v-model="searchQuery" 
            @input="$emit('update:searchQuery', searchQuery)" 
            type="text" 
            placeholder="SEARCH CUSTOMERS..." 
            class="w-full bg-[#fafaf8] dark:bg-black/40 border border-[#d4af3711] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] focus:outline-none focus:border-[var(--primary-gold)] dark:text-white rounded-none transition-all placeholder:text-stone-300 dark:placeholder:text-stone-700 shadow-inner"
          >
          <span class="absolute right-6 top-1/2 -translate-y-1/2 text-xs text-[var(--primary-gold)]/40"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></span>
        </div>
      </div>
    </div>

    <!-- Table Container -->
    <div class="bg-white dark:bg-[#080808] border border-[#d4af3711] shadow-3xl overflow-hidden relative min-h-[500px]">
      <div v-if="loading && users.length === 0" class="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-black/50 backdrop-blur-[2px] z-50">
        <div class="w-10 h-10 border-2 border-[var(--primary-gold)] border-t-transparent rounded-full animate-spin"></div>
      </div>

      <div class="overflow-x-auto scrollbar-none">
        <table class="w-full text-left">
          <thead>
            <tr class="text-[8px] font-bold uppercase tracking-[0.4em] text-stone-400 border-b border-[#d4af3711]">
              <th class="px-10 py-8">Customer Name</th>
              <th class="px-10 py-8">Email Address</th>
              <th class="px-10 py-8">Account Role</th>
              <th class="px-10 py-8">Security Info</th>
              <th class="px-10 py-8 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#d4af3711]">
            <tr v-for="u in items" :key="u._id" class="text-[11px] font-bold uppercase tracking-tight hover:bg-[var(--primary-gold)]/[0.02] transition-colors group">
              <td class="px-10 py-8">
                <div v-if="editingUser === u._id">
                  <input v-model="editForm.name" class="bg-white dark:bg-black px-4 py-2 border border-[var(--primary-gold)]/30 text-[11px] font-bold w-40 outline-none focus:border-[var(--primary-gold)]">
                </div>
                <span v-else class="dark:text-white font-sans">{{ u.name }}</span>
              </td>
              <td class="px-10 py-8">
                <div v-if="editingUser === u._id">
                  <input v-model="editForm.email" class="bg-white dark:bg-black px-4 py-2 border border-[var(--primary-gold)]/30 text-[11px] font-bold w-56 outline-none focus:border-[var(--primary-gold)] lowercase">
                </div>
                <span v-else class="text-stone-400 truncate max-w-[200px] block leading-none font-sans lowercase">{{ u.email }}</span>
              </td>
              <td class="px-10 py-8">
                <div v-if="editingUser === u._id">
                  <select v-model="editForm.role" class="bg-white dark:bg-black px-4 py-2 border border-[var(--primary-gold)]/30 text-[10px] font-bold uppercase outline-none focus:border-[var(--primary-gold)] cursor-pointer">
                    <option value="user">GUEST ACCESS</option>
                    <option value="admin">BOUTIQUE ADMIN</option>
                  </select>
                </div>
                <div v-else class="flex items-center gap-2">
                   <div v-if="u.role === 'admin'" class="w-1.5 h-1.5 rounded-full bg-[var(--primary-gold)] shadow-[0_0_8px_rgba(184,134,11,0.5)]"></div>
                   <span :class="u.role === 'admin' ? 'text-[var(--primary-gold)]' : 'text-stone-500'">{{ u.role.toUpperCase() }}</span>
                </div>
              </td>
              <td class="px-10 py-8">
                <div class="flex items-center gap-4">
                  <span class="font-mono text-[10px] tracking-widest text-stone-300 dark:text-stone-700 max-w-[150px] truncate leading-none">
                    {{ u.showPass ? u.password : '••••••••••••' }}
                  </span>
                  <button @click="u.showPass = !u.showPass" class="text-xs text-stone-300 hover:text-[var(--primary-gold)] transition-all">
                    <font-awesome-icon :icon="u.showPass ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'" />
                  </button>
                </div>
              </td>
              <td class="px-10 py-8 text-right">
                <div class="flex justify-end gap-6 transition-all transform translate-x-0">
                  <template v-if="editingUser === u._id">
                    <button @click="$emit('save', u._id)" class="flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-500 transition-all group/save">
                      <font-awesome-icon icon="fa-solid fa-check" class="text-[10px] group-hover/save:scale-110" />
                      SAVE
                    </button>
                    <button @click="$emit('cancel')" class="flex items-center gap-2 text-stone-400 font-bold hover:text-stone-300 transition-all group/cancel">
                      <font-awesome-icon icon="fa-solid fa-xmark" class="text-[10px] group-hover/cancel:scale-110" />
                      CANCEL
                    </button>
                  </template>
                  <template v-else>
                    <button @click="$emit('edit', u)" class="flex items-center gap-2 text-[var(--primary-gold)] hover:text-[var(--primary-gold)] font-bold tracking-widest group/btn transition-all">
                      <font-awesome-icon icon="fa-solid fa-pen-to-square" class="text-[10px] group-hover/btn:scale-110" />
                      EDIT
                    </button>
                    <button @click="$emit('delete', u._id)" class="flex items-center gap-2 text-red-800/40 hover:text-red-600 font-bold tracking-widest group/btn transition-all disabled:opacity-20" :disabled="u._id === currentUserId">
                      <font-awesome-icon icon="fa-solid fa-trash-can" class="text-[10px] group-hover/btn:scale-110" />
                      DELETE
                    </button>
                  </template>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Empty State -->
      <div v-if="items.length === 0" class="h-[300px] flex flex-col items-center justify-center opacity-30">
         <font-awesome-icon icon="fa-solid fa-users-slash" class="text-4xl mb-6" />
         <p class="text-[10px] font-bold uppercase tracking-[0.4em] italic">No guests match your search criteria</p>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="p-10 border-t border-[#d4af3711] flex flex-col sm:flex-row justify-between items-center gap-10">
         <div class="flex items-center gap-4 text-stone-400">
            <span class="text-[8px] font-bold uppercase tracking-[0.4em]">PAGE</span>
            <span class="text-lg font-bold text-[var(--primary-gold)] font-playfair italic underline decoration-[var(--primary-gold)]/20 underline-offset-4">{{ currentPage }}</span>
            <span class="text-[8px] font-bold uppercase tracking-[0.4em] opacity-40">OF {{ totalPages }} GUESTS</span>
         </div>
         <div class="flex gap-4 w-full sm:w-auto">
            <button @click="$emit('prev-page')" :disabled="currentPage <= 1" class="px-10 py-4 border border-[#d4af3722] text-[10px] font-bold disabled:opacity-20 transition-all hover:bg-[var(--primary-gold)]/5 dark:text-gray-300 uppercase tracking-widest">Previous Page</button>
            <button @click="$emit('next-page')" :disabled="currentPage >= totalPages" class="px-10 py-4 bg-black dark:bg-[var(--primary-gold)] text-white text-[10px] font-bold disabled:opacity-20 transition-all shadow-2xl hover:bg-[var(--primary-gold)] uppercase tracking-widest">Next Page</button>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  users: Array,
  items: Array,
  loading: Boolean,
  editingUser: String,
  editForm: Object,
  currentPage: Number,
  totalPages: Number,
  currentUserId: String
})

const searchQuery = ref('')

defineEmits(['update:searchQuery', 'edit', 'delete', 'save', 'cancel', 'prev-page', 'next-page'])
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
</style>
