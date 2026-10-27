<template>
  <div class="min-h-screen bg-[#f7f7f5] dark:bg-[#0c0a09] py-8 sm:py-12 px-4 sm:px-6 font-sans text-stone-900 dark:text-stone-100 print:bg-white print:p-0 print:text-black">
    <!-- Non-print Actions Bar -->
    <div class="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
      <div class="flex items-center gap-3">
        <router-link 
          to="/admin/dashboard" 
          class="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 bg-stone-200 dark:bg-stone-800 rounded-lg text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 transition"
        >
          <i class="fa-solid fa-gauge"></i>
          Admin Dashboard
        </router-link>
        <router-link 
          to="/" 
          class="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 transition"
        >
          <i class="fa-solid fa-arrow-left"></i>
          Store
        </router-link>
      </div>

      <div class="flex flex-wrap items-center gap-2.5 sm:gap-3">
        <!-- Direct PDF Download Button -->
        <button
          @click="downloadPDF"
          :disabled="isGeneratingPdf"
          class="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:brightness-110 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition cursor-pointer disabled:opacity-50"
        >
          <i v-if="!isGeneratingPdf" class="fa-solid fa-file-arrow-down text-sm"></i>
          <span v-else class="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          <span>{{ isGeneratingPdf ? 'Generating PDF...' : 'Download PDF Invoice' }}</span>
        </button>

        <!-- Native Print / Save Dialog -->
        <button
          @click="printInvoice"
          class="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 dark:bg-white hover:bg-stone-800 text-white dark:text-stone-900 rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
        >
          <i class="fa-solid fa-print"></i>
          Print
        </button>

        <!-- WhatsApp Support Link -->
        <a
          :href="whatsappShareUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-sm"
        >
          <i class="fa-brands fa-whatsapp text-sm"></i>
          WhatsApp
        </a>
      </div>
    </div>

    <!-- Main Printable & PDF Target Card -->
    <div 
      ref="invoiceContainer"
      id="invoice-print-area"
      class="max-w-4xl mx-auto bg-white dark:bg-[#141210] rounded-2xl border border-stone-200/80 dark:border-white/10 shadow-xl print:shadow-none print:border-none print:rounded-none overflow-hidden print:p-0"
    >
      <!-- Top Decorative Accent -->
      <div class="h-2 bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-700 print:hidden"></div>

      <div class="p-6 sm:p-10 space-y-8 bg-white print:bg-white">
        <!-- Header: Store Branding & Invoice Title -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-stone-200 dark:border-white/10 pb-8">
          <div>
            <div class="flex items-center gap-2.5">
              <span class="w-8 h-8 rounded-full bg-amber-600 text-white font-serif font-black flex items-center justify-center text-sm shadow">A</span>
              <h1 class="font-serif text-2xl sm:text-3xl font-black tracking-wide text-stone-900 dark:text-white print:text-black">
                Ahmad Clothes House
              </h1>
            </div>
            <p class="text-xs uppercase tracking-[0.25em] text-amber-600 dark:text-amber-400 font-bold mt-1">
              Haute Couture & Atelier • Wholesale & Retail
            </p>
            <p class="text-xs text-stone-500 dark:text-stone-400 mt-2 print:text-stone-600 leading-relaxed">
              Helpline: <strong>0324 4902607</strong> &nbsp;|&nbsp; WhatsApp: <strong>+92 341 6887454</strong><br />
              Email: ahmadalihafeez26@gmail.com &nbsp;|&nbsp; Lahore, Pakistan
            </p>
          </div>

          <div class="text-left sm:text-right bg-stone-50 dark:bg-white/5 print:bg-transparent p-4 rounded-xl border border-stone-200/60 dark:border-white/5 print:border-none">
            <span class="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 mb-2">
              Official Tax Invoice
            </span>
            <div class="font-mono text-sm font-bold text-stone-900 dark:text-white print:text-black">
              #{{ orderDisplayId }}
            </div>
            <div class="text-xs text-stone-500 dark:text-stone-400 mt-1 print:text-stone-600">
              Date: <strong class="text-stone-800 dark:text-stone-200 print:text-black">{{ orderDate }}</strong>
            </div>
            <div class="text-xs text-stone-500 dark:text-stone-400 mt-0.5 print:text-stone-600">
              Status: <strong class="text-emerald-600 dark:text-emerald-400 font-bold uppercase">{{ orderStatus }}</strong>
            </div>
          </div>
        </div>

        <!-- Bill To / Customer Information & Payment -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-stone-50 dark:bg-white/[0.02] p-5 rounded-xl border border-stone-200/60 dark:border-white/5 print:bg-transparent print:border print:border-stone-300">
          <div>
            <h3 class="text-[11px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-3">
              Billed & Shipped To:
            </h3>
            <p class="text-sm font-bold text-stone-900 dark:text-white print:text-black">
              {{ shipping.fullName || order.customerName || 'Valued Customer' }}
            </p>
            <p class="text-xs text-stone-600 dark:text-stone-300 mt-1 print:text-stone-800">
              <i class="fa-solid fa-phone text-[10px] text-amber-600 mr-1.5"></i>
              <strong>{{ shipping.phone || 'N/A' }}</strong>
            </p>
            <p v-if="customerEmail" class="text-xs text-stone-600 dark:text-stone-300 mt-0.5 print:text-stone-800">
              <i class="fa-solid fa-envelope text-[10px] text-amber-600 mr-1.5"></i>
              {{ customerEmail }}
            </p>
            <p class="text-xs text-stone-600 dark:text-stone-300 mt-1.5 leading-relaxed print:text-stone-800">
              <i class="fa-solid fa-location-dot text-[10px] text-amber-600 mr-1.5"></i>
              {{ shipping.address || 'Address on file' }}, {{ shipping.city || 'Lahore' }}, {{ shipping.country || 'Pakistan' }}
            </p>
          </div>

          <div class="sm:border-l sm:border-stone-200 dark:sm:border-white/10 sm:pl-6">
            <h3 class="text-[11px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-3">
              Payment & Dispatch Mode:
            </h3>
            <p class="text-xs text-stone-700 dark:text-stone-300 print:text-stone-800">
              Payment: 
              <strong class="uppercase text-amber-600 dark:text-amber-400 font-bold">
                {{ order.paymentMethod || 'Cash On Delivery (COD)' }}
              </strong>
            </p>
            <p v-if="order.transactionId" class="text-xs text-stone-700 dark:text-stone-300 mt-1 print:text-stone-800">
              Transaction ID: <span class="font-mono font-semibold">{{ order.transactionId }}</span>
            </p>
            <p class="text-xs text-stone-700 dark:text-stone-300 mt-1 print:text-stone-800">
              Shipping Carrier: <strong>BlueEx Luxury Express (2-4 Days)</strong>
            </p>
            <p class="text-xs text-stone-700 dark:text-stone-300 mt-1 print:text-stone-800">
              Verification: <span class="text-emerald-600 font-bold">100% Original Brand Certified</span>
            </p>
          </div>
        </div>

        <!-- Itemized Products Table -->
        <div>
          <h3 class="text-[11px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-3">
            Itemized Invoice Summary ({{ orderItems.length }} Products)
          </h3>
          
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b-2 border-stone-300 dark:border-white/20 text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  <th class="py-3 px-2 w-12 text-center">#</th>
                  <th class="py-3 px-2 w-16">Photo</th>
                  <th class="py-3 px-4">Product Details</th>
                  <th class="py-3 px-3 text-right">Unit Price</th>
                  <th class="py-3 px-3 text-center">Qty</th>
                  <th class="py-3 px-3 text-right">Total</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-stone-200 dark:divide-white/10 text-xs">
                <tr v-for="(item, idx) in orderItems" :key="idx" class="hover:bg-stone-50/50 dark:hover:bg-white/[0.02]">
                  <td class="py-4 px-2 text-center font-mono text-stone-400">{{ idx + 1 }}</td>
                  <td class="py-4 px-2">
                    <div class="w-14 h-18 rounded-md overflow-hidden bg-stone-100 dark:bg-stone-800 border border-amber-600/30 shrink-0">
                      <img 
                        :src="getItemImage(item)" 
                        :alt="item.name || 'Product'" 
                        class="w-full h-full object-cover"
                        crossorigin="anonymous"
                        @error="handleImgError"
                      />
                    </div>
                  </td>
                  <td class="py-4 px-4">
                    <div class="font-bold text-stone-900 dark:text-white print:text-black">
                      {{ item.name || 'Pakistani Designer Suit' }}
                    </div>
                    <div v-if="item.variant?.size || item.variant?.color" class="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
                      <span v-if="item.variant.size">Size: <strong>{{ item.variant.size }}</strong></span>
                      <span v-if="item.variant.size && item.variant.color"> &bull; </span>
                      <span v-if="item.variant.color">Color: <strong>{{ item.variant.color }}</strong></span>
                    </div>
                    <div class="text-[10px] text-amber-700 dark:text-amber-400 font-mono mt-0.5">
                      SKU: {{ item.product || item.id || 'ACH-' + (idx + 101) }}
                    </div>
                  </td>
                  <td class="py-4 px-3 text-right font-mono text-stone-700 dark:text-stone-300 print:text-black">
                    Rs. {{ Number(item.price || 0).toLocaleString() }}
                  </td>
                  <td class="py-4 px-3 text-center font-bold text-stone-900 dark:text-white print:text-black">
                    {{ item.quantity || 1 }}
                  </td>
                  <td class="py-4 px-3 text-right font-mono font-bold text-stone-900 dark:text-white print:text-black">
                    Rs. {{ ((item.price || 0) * (item.quantity || 1)).toLocaleString() }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Summary & Totals -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pt-4 border-t border-stone-200 dark:border-white/10">
          <div class="max-w-xs text-xs text-stone-500 dark:text-stone-400 space-y-1.5 print:text-stone-600">
            <p class="font-bold text-stone-800 dark:text-stone-200 print:text-black uppercase text-[10px] tracking-wider">
              Terms & Return Policy:
            </p>
            <p>• 7-Day Hassle-Free Exchange on intact & unstitched garments.</p>
            <p>• Open parcel facility available upon BlueEx delivery.</p>
            <p>• Retain this digital invoice for all inquiries & warranties.</p>
          </div>

          <div class="w-full sm:w-80 bg-stone-50 dark:bg-white/[0.03] p-5 rounded-xl border border-stone-200/80 dark:border-white/10 print:bg-transparent print:border-none space-y-2.5">
            <div class="flex justify-between text-xs text-stone-600 dark:text-stone-400">
              <span>Subtotal</span>
              <span class="font-mono font-bold text-stone-900 dark:text-white print:text-black">
                Rs. {{ subtotal.toLocaleString() }}
              </span>
            </div>
            <div class="flex justify-between text-xs text-stone-600 dark:text-stone-400">
              <span>Delivery Charges</span>
              <span class="font-mono font-bold text-stone-900 dark:text-white print:text-black">
                {{ deliveryFee === 0 ? 'FREE' : 'Rs. ' + deliveryFee.toLocaleString() }}
              </span>
            </div>
            <div class="border-t border-stone-200 dark:border-white/10 pt-2 flex justify-between items-center">
              <span class="text-sm font-black uppercase text-stone-900 dark:text-white print:text-black">
                Total Payable:
              </span>
              <span class="text-lg font-black font-mono text-amber-700 dark:text-amber-400 print:text-black">
                Rs. {{ grandTotal.toLocaleString() }}
              </span>
            </div>
          </div>
        </div>

        <!-- Footer Seal & Signature -->
        <div class="pt-8 border-t border-dashed border-stone-300 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full border-2 border-amber-600 flex items-center justify-center text-amber-600 text-xs font-black uppercase tracking-tighter">
              SEAL
            </div>
            <div class="text-[11px] text-stone-500 dark:text-stone-400">
              <p class="font-bold text-stone-800 dark:text-stone-200 print:text-black">Ahmad Clothes House Atelier</p>
              <p>Authorized Electronic Computer-Generated Invoice</p>
            </div>
          </div>

          <div class="text-xs text-stone-400">
            Helpline: <strong class="text-stone-800 dark:text-stone-200">0324 4902607</strong> &nbsp;|&nbsp; WhatsApp: <strong class="text-stone-800 dark:text-stone-200">+92 341 6887454</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useOrdersStore } from '../stores/orders'
import api from '../api'

const route = useRoute()
const ordersStore = useOrdersStore()

const invoiceContainer = ref(null)
const order = ref(null)
const isGeneratingPdf = ref(false)
const defaultFallbackImage = 'https://ahmad-cloths.vercel.app/assets/women_pishwas_peach-DDMSNZCq.jpg'

onMounted(async () => {
  const orderId = route.params.id || route.query.id
  if (orderId) {
    const matched = ordersStore.orders.find(o => String(o._id || o.id) === String(orderId))
    if (matched) {
      order.value = matched
    } else {
      try {
        const res = await api.get(`/orders/${orderId}`)
        if (res.data?.success && res.data?.data) {
          order.value = res.data.data
        }
      } catch (err) {
        console.warn('Could not fetch order from server, checking local storage...', err)
      }
    }
  }

  if (!order.value) {
    try {
      const stored = localStorage.getItem('lastOrder')
      if (stored) {
        order.value = JSON.parse(stored)
      }
    } catch (e) {}
  }

  if (!order.value) {
    order.value = {
      _id: 'ACH-' + Math.floor(100000 + Math.random() * 900000),
      createdAt: new Date().toISOString(),
      status: 'Confirmed',
      paymentMethod: 'Cash on Delivery (COD)',
      shippingAddress: {
        fullName: 'Ahmad Clothes Valued Customer',
        phone: '03244902607',
        address: 'Main Boulevard, Gulberg III',
        city: 'Lahore',
        country: 'Pakistan'
      },
      customerEmail: 'customer@ahmadcloths.com',
      subtotal: 16500,
      deliveryCharge: 0,
      totalAmount: 16500,
      items: [
        {
          name: 'Asim Jofa Regal Pishwas Replica - Peach',
          product: 'aj-rep-005',
          price: 16500,
          quantity: 1,
          variant: { size: 'Bespoke Medium', color: 'Soft Peach' },
          image: defaultFallbackImage
        }
      ]
    }
  }

  // Auto trigger download if URL has ?download=1 or ?pdf=1
  if (route.query.download === '1' || route.query.pdf === '1' || route.query.download === 'true') {
    setTimeout(() => {
      downloadPDF()
    }, 800)
  } else if (route.query.print === '1' || route.query.print === 'true') {
    setTimeout(() => {
      printInvoice()
    }, 600)
  }
})

const orderDisplayId = computed(() => {
  if (!order.value) return 'ACH-2026'
  return order.value._id || order.value.id || 'ACH-2026'
})

const orderDate = computed(() => {
  const d = order.value?.createdAt ? new Date(order.value.createdAt) : new Date()
  return d.toLocaleDateString('en-PK', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
})

const orderStatus = computed(() => order.value?.status || 'Confirmed')
const shipping = computed(() => order.value?.shippingAddress || {})
const customerEmail = computed(() => order.value?.customerEmail || '')
const orderItems = computed(() => order.value?.items || [])

const subtotal = computed(() => {
  if (order.value?.subtotal) return order.value.subtotal
  return orderItems.value.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 1)), 0)
})

const deliveryFee = computed(() => order.value?.deliveryCharge || 0)

const grandTotal = computed(() => {
  if (order.value?.totalAmount) return order.value.totalAmount
  return subtotal.value + deliveryFee.value
})

const getItemImage = (item) => {
  const img = item.image || item.cartImage || item.variant?.image
  if (!img) return defaultFallbackImage
  if (img.startsWith('http://') || img.startsWith('https://')) return img
  return 'https://ahmad-cloths.vercel.app' + (img.startsWith('/') ? '' : '/') + img
}

const handleImgError = (event) => {
  event.target.src = defaultFallbackImage
}

const printInvoice = () => {
  window.print()
}

// Direct system PDF download
const downloadPDF = async () => {
  if (isGeneratingPdf.value) return
  isGeneratingPdf.value = true

  try {
    const html2pdfModule = await import('html2pdf.js')
    const html2pdf = html2pdfModule.default || html2pdfModule

    const element = invoiceContainer.value || document.getElementById('invoice-print-area')
    const fileName = `Invoice-${orderDisplayId.value}.pdf`

    const opt = {
      margin: [10, 10, 10, 10],
      filename: fileName,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, logging: false },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }

    await html2pdf().set(opt).from(element).save()
  } catch (err) {
    console.error('PDF Generation Error:', err)
    // Fallback to native print dialog which allows "Save as PDF"
    window.print()
  } finally {
    isGeneratingPdf.value = false
  }
}

const whatsappShareUrl = computed(() => {
  const text = `Assalam-o-Alaikum Ahmad Clothes House, I am inquiring about my invoice #${orderDisplayId.value} for Rs. ${grandTotal.value.toLocaleString()}.`
  return `https://wa.me/923416887454?text=${encodeURIComponent(text)}`
})
</script>

<style scoped>
@media print {
  body {
    background: white !important;
    color: black !important;
  }
  nav, footer, .navbar, .site-footer {
    display: none !important;
  }
  #invoice-print-area {
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    margin: 0 !important;
    max-width: 100% !important;
  }
}
</style>
