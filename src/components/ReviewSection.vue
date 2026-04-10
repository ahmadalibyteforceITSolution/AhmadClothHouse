<template>
  <div class="mt-20 border-t border-black/5 pt-20">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
      <div>
        <div class="flex items-center gap-3 mb-4">
          <div class="h-[1px] w-8 bg-[var(--primary-gold)]"></div>
          <span class="text-[var(--primary-gold)] font-bold text-[9px] uppercase tracking-[0.4em]">CLIENT SENTIMENT</span>
        </div>
        <h2 class="text-4xl font-light uppercase tracking-tighter text-gray-900 font-playfair italic">Boutique Reviews</h2>
      </div>
      
      <div v-if="auth.isAuthenticated" @click="showForm = !showForm" 
        class="group flex items-center gap-4 cursor-pointer">
        <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 group-hover:text-[var(--primary-gold)] transition-colors">
          {{ showForm ? 'CLOSE DRAWER' : 'SHARE YOUR EXPERIENCE' }}
        </span>
        <div class="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center transition-all group-hover:border-[var(--primary-gold)] group-hover:bg-[var(--primary-gold)] group-hover:text-white">
          <font-awesome-icon :icon="showForm ? 'fa-solid fa-xmark' : 'fa-solid fa-pen'" class="text-xs" />
        </div>
      </div>
      <div v-else class="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">
        PLEASE <router-link to="/login" class="text-[var(--primary-gold)] hover:underline">LOGIN</router-link> TO SHARE YOUR EXPERIENCE
      </div>
    </div>

    <!-- Review Submission Form -->
    <transition name="drawer">
      <div v-if="showForm && auth.isAuthenticated" class="mb-20 bg-[#fafaf8] p-10 md:p-16 border border-[#d4af3722] relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1 bg-[var(--primary-gold)]"></div>
        
        <div class="max-w-2xl">
          <div class="mb-10">
            <p class="text-[9px] font-bold text-stone-400 uppercase tracking-[0.4em] mb-4">RATING (REQUIRED)</p>
            <div class="flex gap-4">
              <button v-for="i in 5" :key="i" @click="form.rating = i" 
                class="text-2xl transition-all transform hover:scale-125 focus:outline-none"
                :class="i <= form.rating ? 'text-[var(--primary-gold)]' : 'text-stone-200'">
                <font-awesome-icon :icon="i <= form.rating ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
              </button>
            </div>
          </div>

          <div class="mb-10">
            <p class="text-[9px] font-bold text-stone-400 uppercase tracking-[0.4em] mb-4">YOUR COMMUNIQUÉ</p>
            <textarea 
              v-model="form.comment"
              placeholder="YOUR THOUGHTS ON THE FABRIC, FIT, AND FINISH..."
              class="w-full bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-[var(--primary-gold)] text-sm font-light leading-relaxed min-h-[120px] transition-all"
            ></textarea>
          </div>

          <button 
            @click="handleSubmit"
            :disabled="isSubmitting || !form.rating || !form.comment"
            class="px-12 py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[var(--primary-gold)] transition-all disabled:opacity-20 flex items-center gap-4 group"
          >
            <span>SUBMIT RECORD</span>
            <div v-if="isSubmitting" class="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin"></div>
            <font-awesome-icon v-else icon="fa-solid fa-arrow-right" class="text-[8px] group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </transition>

    <!-- Reviews List -->
    <div v-if="store.loading" class="flex justify-center py-20">
      <div class="w-10 h-10 border-2 border-[var(--primary-gold)] border-t-transparent rounded-full animate-spin"></div>
    </div>

    <div v-else-if="store.productReviews.length > 0" class="space-y-12">
      <div v-for="review in store.productReviews" :key="review._id" class="group">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div class="flex items-center gap-6 mb-4 md:mb-0">
            <div class="w-12 h-12 rounded-full border border-black/5 bg-white flex items-center justify-center text-[10px] font-bold text-[var(--primary-gold)] shadow-sm">
              {{ review.userName?.substring(0, 2).toUpperCase() }}
            </div>
            <div>
              <p class="text-[11px] font-bold uppercase tracking-[0.2em] mb-1">{{ review.userName }}</p>
              <div class="flex gap-1 text-[8px] text-[var(--primary-gold)]">
                <font-awesome-icon v-for="i in 5" :key="i" 
                  :icon="i <= review.rating ? 'fa-solid fa-star' : 'fa-regular fa-star'" 
                />
              </div>
            </div>
          </div>
          <span class="text-[9px] font-medium text-stone-400 uppercase tracking-widest font-mono">{{ formatDate(review.createdAt) }}</span>
        </div>
        <p class="text-sm font-light text-stone-600 dark:text-stone-400 leading-relaxed italic border-l-2 border-[var(--primary-gold)]/10 pl-8 ml-6 transform group-hover:translate-x-2 transition-transform duration-500">
          "{{ review.comment }}"
        </p>
      </div>
    </div>

    <div v-else class="text-center py-20 border border-dashed border-black/5 rounded-2xl">
      <font-awesome-icon icon="fa-solid fa-comment-dots" class="text-3xl text-stone-200 mb-6" />
      <p class="text-[10px] font-bold text-stone-400 uppercase tracking-[0.4em]">Become the first to share an experience.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useReviewsStore } from '../stores/reviews'
import { useAuthStore } from '../stores/auth'
import Swal from 'sweetalert2'

const props = defineProps({
  productId: {
    type: String,
    required: true
  }
})

const store = useReviewsStore()
const auth = useAuthStore()
const showForm = ref(false)
const isSubmitting = ref(false)

const form = ref({
  rating: 0,
  comment: ''
})

onMounted(() => {
  store.fetchProductReviews(props.productId)
})

const handleSubmit = async () => {
  if (!form.value.rating || !form.value.comment) return

  isSubmitting.value = true
  const result = await store.submitReview({
    productId: props.productId,
    rating: form.value.rating,
    comment: form.value.comment
  })

  if (result.success) {
    showForm.value = false
    form.value = { rating: 0, comment: '' }
    Swal.fire({
      icon: 'success',
      title: 'SENTIMENT RECORDED',
      text: 'Thank you for your feedback. It will be visible in the boutique after a brief moderation period.',
      confirmButtonColor: '#d4af37'
    })
  } else {
    Swal.fire({
      icon: 'error',
      title: 'SUBMISSION FAILED',
      text: result.error,
      confirmButtonColor: '#d4af37'
    })
  }
  isSubmitting.value = false
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).toUpperCase()
}
</script>

<style scoped>
.drawer-enter-active, .drawer-leave-active {
  transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
  max-height: 500px;
}
.drawer-enter-from, .drawer-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-20px);
}
</style>
