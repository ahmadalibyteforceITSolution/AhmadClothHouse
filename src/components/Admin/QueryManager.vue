<template>
  <div class="space-y-12 animate-reveal">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
      <div>
        <h3 class="text-2xl font-light uppercase tracking-tight text-gray-900 dark:text-white mb-2 italic font-playfair">Customer Inquiries</h3>
        <p class="text-[9px] font-bold text-stone-400 uppercase tracking-[0.4em]">Managing all incoming queries from the header and contact page.</p>
      </div>
      <button @click="fetchQueries" class="px-8 py-5 bg-black dark:bg-[var(--primary-gold)] text-white dark:text-black rounded-none text-[9px] font-bold uppercase tracking-[0.3em] shadow-xl hover:bg-[var(--primary-gold)] transition-all flex items-center gap-3">
        <font-awesome-icon icon="fa-solid fa-rotate" :class="{ 'animate-spin': loading }" />
        Refresh Queries
      </button>
    </div>

    <div v-if="loading" class="py-20 flex justify-center">
      <div class="animate-pulse text-[var(--primary-gold)] font-bold text-[10px] uppercase tracking-[0.5em]">Fetching Inquiries...</div>
    </div>

    <div v-else-if="queries.length === 0" class="py-32 border border-dashed border-[#d4af3722] rounded-3xl text-center">
      <font-awesome-icon icon="fa-solid fa-envelope-open-text" class="text-5xl text-[var(--primary-gold)]/20 mb-8" />
      <p class="text-[9px] font-bold uppercase tracking-[0.5em] text-stone-400">No customer queries found in the registry.</p>
    </div>

    <div v-else class="grid grid-cols-1 gap-6">
      <div v-for="q in queries" :key="q._id" 
        class="bg-white dark:bg-white/5 border border-[#d4af3711] rounded-2xl p-8 hover:border-[var(--primary-gold)]/30 transition-all duration-500 group relative overflow-hidden">
        
        <!-- Status Indicator -->
        <div class="absolute left-0 top-0 bottom-0 w-1 transition-all duration-500"
          :class="q.status === 'New' ? 'bg-amber-500' : q.status === 'Read' ? 'bg-blue-500' : 'bg-emerald-500'"></div>

        <div class="flex flex-col lg:flex-row justify-between gap-8">
          <div class="space-y-6 flex-grow">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-[var(--primary-gold)]/10 border border-[var(--primary-gold)]/20 flex items-center justify-center text-[var(--primary-gold)]">
                <font-awesome-icon icon="fa-solid fa-user" class="text-sm" />
              </div>
              <div>
                <h4 class="text-sm font-bold dark:text-white uppercase tracking-wider">{{ q.name }}</h4>
                <p class="text-[10px] text-stone-400 font-mono">{{ q.email }}</p>
              </div>
              <span class="ml-auto lg:ml-4 px-4 py-1.5 rounded-none text-[8px] font-bold uppercase tracking-widest border transition-all"
                :class="getStatusClass(q.status)">
                {{ q.status }}
              </span>
            </div>

            <div class="space-y-3">
              <p class="text-[9px] font-bold text-[var(--primary-gold)] uppercase tracking-[0.3em]">Subject: {{ q.subject }}</p>
              <p class="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-light italic">"{{ q.message }}"</p>
            </div>

            <div class="flex items-center gap-6 text-[8px] font-bold text-stone-400 uppercase tracking-widest">
              <span class="flex items-center gap-2">
                <font-awesome-icon icon="fa-solid fa-calendar-day" />
                {{ formatDate(q.createdAt) }}
              </span>
            </div>
          </div>

          <div class="flex flex-row lg:flex-col justify-end gap-3 shrink-0">
            <button v-if="q.status !== 'Resolved'" @click="updateStatus(q._id, 'Resolved')"
              class="px-6 py-3 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[8px] font-bold uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all">
              Mark Resolved
            </button>
            <button v-if="q.status === 'New'" @click="updateStatus(q._id, 'Read')"
              class="px-6 py-3 bg-blue-500/10 text-blue-500 border border-blue-500/20 text-[8px] font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all">
              Mark Read
            </button>
            <button @click="deleteQuery(q._id)"
              class="px-6 py-3 bg-rose-500/10 text-rose-500 border border-rose-500/20 text-[8px] font-bold uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../../api'
import Swal from 'sweetalert2'

const queries = ref([])
const loading = ref(false)

const fetchQueries = async () => {
  loading.value = true
  try {
    const res = await api.get('/contact')
    queries.value = res.data.data
  } catch (err) {
    console.error('Failed to fetch queries', err)
  } finally {
    loading.value = false
  }
}

const updateStatus = async (id, status) => {
  try {
    await api.put(`/contact/${id}`, { status })
    fetchQueries()
  } catch (err) {
    Swal.fire({ icon: 'error', title: 'Update Failed', text: 'Could not update query status.' })
  }
}

const deleteQuery = async (id) => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: "This query will be permanently removed from the registry.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!'
  })

  if (result.isConfirmed) {
    try {
      await api.delete(`/contact/${id}`)
      fetchQueries()
      Swal.fire('Deleted!', 'The query has been removed.', 'success')
    } catch (err) {
      Swal.fire('Error!', 'Failed to delete the query.', 'error')
    }
  }
}

const getStatusClass = (status) => {
  if (status === 'New') return 'text-amber-500 border-amber-500/20 bg-amber-500/5'
  if (status === 'Read') return 'text-blue-500 border-blue-500/20 bg-blue-500/5'
  return 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5'
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).toUpperCase()
}

onMounted(fetchQueries)
</script>