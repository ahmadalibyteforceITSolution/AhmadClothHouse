<template>
  <div class="space-y-10 animate-in transition-all">
    <!-- Header Card -->
    <div class="bg-white dark:bg-[#080808] p-10 border border-[#d4af3711] shadow-2xl relative overflow-hidden group">
      <div class="absolute -top-20 -left-20 w-80 h-80 bg-[var(--primary-gold)]/5 blur-[100px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
      
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 relative z-10">
        <div>
           <div class="flex items-center gap-3 mb-4">
              <div class="h-[1px] w-8 bg-[var(--primary-gold)]"></div>
              <span class="text-[var(--primary-gold)] font-bold text-[9px] uppercase tracking-[0.4em]">MODERATION CORE</span>
           </div>
          <h2 class="text-3xl font-light uppercase tracking-tighter text-gray-900 dark:text-white mb-2 font-playfair italic underline decoration-[var(--primary-gold)]/20 underline-offset-8">Guest Reviews</h2>
          <p class="text-[9px] font-bold text-stone-400 uppercase tracking-[0.3em]">Overseeing boutique sentiments and community feedback.</p>
        </div>
        
        <div class="flex items-center gap-4">
          <div class="text-right">
             <p class="text-[9px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-1">TOTAL REVIEWS</p>
             <p class="text-2xl font-light dark:text-white font-playfair italic leading-none">{{ reviews.length }}</p>
          </div>
          <div class="w-[1px] h-10 bg-[#d4af3722]"></div>
          <button @click="fetchReviews" class="w-10 h-10 rounded-full border border-[#d4af3744] flex items-center justify-center text-[var(--primary-gold)] hover:bg-[var(--primary-gold)] hover:text-white transition-all">
            <font-awesome-icon icon="fa-solid fa-rotate" class="text-xs" :class="{'animate-spin': loading}" />
          </button>
        </div>
      </div>
    </div>

    <!-- Reviews Grid/Table -->
    <div class="bg-white dark:bg-[#080808] border border-[#d4af3711] shadow-3xl overflow-hidden relative min-h-[500px]">
      <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-black/50 backdrop-blur-[2px] z-50">
        <div class="w-10 h-10 border-2 border-[var(--primary-gold)] border-t-transparent rounded-full animate-spin"></div>
      </div>

      <div class="overflow-x-auto scrollbar-none">
        <table class="w-full text-left">
          <thead>
            <tr class="text-[8px] font-bold uppercase tracking-[0.4em] text-stone-400 border-b border-[#d4af3711]">
              <th class="px-10 py-8">Reviewer</th>
              <th class="px-10 py-8">Design Piece</th>
              <th class="px-10 py-8">Rating</th>
              <th class="px-10 py-8">Communiqué</th>
              <th class="px-10 py-8 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#d4af3711]">
            <tr v-for="r in reviews" :key="r._id" class="text-[11px] font-bold uppercase tracking-tight hover:bg-[var(--primary-gold)]/[0.02] transition-colors group">
              <td class="px-10 py-8">
                <div class="flex items-center gap-4">
                   <div class="w-8 h-8 rounded-full bg-stone-50 dark:bg-white/5 flex items-center justify-center text-[9px] text-[var(--primary-gold)] border border-[var(--primary-gold)]/10">
                     {{ r.userName?.substring(0,2).toUpperCase() }}
                   </div>
                   <span class="dark:text-white font-sans">{{ r.userName }}</span>
                </div>
              </td>
              <td class="px-10 py-8">
                <div class="flex items-center gap-4">
                   <img :src="r.product?.image" class="w-10 h-12 object-cover border border-[#d4af3722]" v-if="r.product?.image" />
                   <span class="text-stone-400 font-sans truncate max-w-[150px]">{{ r.product?.name || 'Deleted Product' }}</span>
                </div>
              </td>
              <td class="px-10 py-8">
                <div class="flex gap-1 text-[8px] text-[var(--primary-gold)]">
                  <font-awesome-icon v-for="i in 5" :key="i" 
                    :icon="i <= r.rating ? 'fa-solid fa-star' : 'fa-regular fa-star'" 
                  />
                </div>
              </td>
              <td class="px-10 py-8">
                <p class="text-[10px] font-light italic text-stone-500 max-w-[300px] truncate group-hover:overflow-visible group-hover:whitespace-normal transition-all duration-700">
                  "{{ r.comment }}"
                </p>
              </td>
              <td class="px-10 py-8 text-right">
                <button @click="deleteReview(r._id)" class="text-red-800/20 hover:text-red-600 transition-all group/btn">
                  <font-awesome-icon icon="fa-solid fa-trash-can" class="text-[10px] group-hover/btn:scale-110" />
                  <span class="ml-2 text-[9px] opacity-0 group-hover/btn:opacity-100 transition-opacity">DELETE</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Empty State -->
      <div v-if="reviews.length === 0 && !loading" class="h-[400px] flex flex-col items-center justify-center opacity-30">
         <font-awesome-icon icon="fa-solid fa-comment-slash" class="text-4xl mb-6" />
         <p class="text-[10px] font-bold uppercase tracking-[0.4em] italic">No boutique feedback discovered in archives</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useReviewsStore } from '../../stores/reviews'
import Swal from 'sweetalert2'

const store = useReviewsStore()
const reviews = ref([])
const loading = ref(false)

const fetchReviews = async () => {
  loading.value = true
  await store.fetchAllReviews()
  reviews.value = store.allReviews
  loading.value = false
}

onMounted(fetchReviews)

const deleteReview = async (id) => {
  const result = await Swal.fire({
    title: 'EXPUNGE RECORD?',
    text: "This sentiment will be permanently removed from the boutique archives.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#000',
    cancelButtonColor: '#d33',
    confirmButtonText: 'CONFIRM DELETION',
    background: '#fafaf8'
  })

  if (result.isConfirmed) {
    const res = await store.deleteReview(id)
    if (res.success) {
      reviews.value = reviews.value.filter(r => r._id !== id)
      Swal.fire({
        icon: 'success',
        title: 'RECORD EXPUNGED',
        confirmButtonColor: '#d4af37'
      })
    }
  }
}
</script>
