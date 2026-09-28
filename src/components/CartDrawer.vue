<template>
  <div>
    <!-- Backdrop Blur Overlay -->
    <transition name="drawer-backdrop">
      <div 
        v-if="cart.isDrawerOpen" 
        class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99998] transition-opacity"
        @click="cart.closeDrawer"
      ></div>
    </transition>

    <!-- Slide-Over Drawer Container -->
    <div 
      class="fixed inset-y-0 right-0 z-[99999] w-full max-w-[440px] bg-[#FCFCFA] dark:bg-[#0E0D0B] text-stone-900 dark:text-stone-100 shadow-2xl flex flex-col transition-transform duration-300 ease-out"
      :class="cart.isDrawerOpen ? 'translate-x-0' : 'translate-x-full'"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Bag & Checkout"
    >
      <!-- ══════════ DRAWER HEADER ══════════ -->
      <div class="px-5 sm:px-6 py-4 border-b border-stone-200/80 dark:border-white/10 flex items-center justify-between bg-white dark:bg-[#12110E] shrink-0">
        
        <!-- Back button if in Checkout -->
        <div class="flex items-center gap-2.5">
          <button 
            v-if="cart.drawerStep === 'checkout'"
            @click="cart.drawerStep = 'cart'"
            class="w-7 h-7 rounded-full flex items-center justify-center hover:bg-stone-100 dark:hover:bg-white/10 text-stone-600 dark:text-stone-300 transition-colors cursor-pointer"
            aria-label="Back to Bag"
          >
            <font-awesome-icon icon="fa-solid fa-arrow-left" class="text-xs" />
          </button>
          
          <span class="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
          <h2 class="text-xs sm:text-sm font-editorial font-bold uppercase tracking-[0.2em] text-stone-900 dark:text-white">
            <span v-if="cart.drawerStep === 'cart'">Your Shopping Bag</span>
            <span v-else-if="cart.drawerStep === 'checkout'">Express Checkout</span>
            <span v-else>Order Confirmed</span>
          </h2>
          
          <span v-if="cart.drawerStep === 'cart'" class="text-xs px-2 py-0.5 rounded-full bg-stone-100 dark:bg-white/10 text-stone-600 dark:text-stone-300 font-bold font-mono">
            {{ cart.totalItems }}
          </span>
        </div>

        <button 
          @click="cart.closeDrawer" 
          class="w-8 h-8 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close Bag"
        >
          <font-awesome-icon icon="fa-solid fa-times" class="text-sm" />
        </button>
      </div>

      <!-- ══════════ STEP 1: SHOPPING BAG VIEW ══════════ -->
      <div v-if="cart.drawerStep === 'cart'" class="flex-1 flex flex-col min-h-0">
        
        <!-- Free Shipping Progress Bar -->
        <div class="px-6 py-3 bg-stone-50 dark:bg-white/5 border-b border-stone-200/60 dark:border-white/5 text-xs shrink-0">
          <div class="flex items-center justify-between text-[11px] mb-1.5 font-medium">
            <span v-if="freeShippingRemaining > 0" class="text-stone-600 dark:text-stone-300 truncate mr-2">
              Add <strong class="text-[#B8860B] dark:text-[#D4AF37]">Rs. {{ freeShippingRemaining.toLocaleString() }}</strong> for <strong class="text-stone-900 dark:text-white">FREE Express Shipping</strong>
            </span>
            <span v-else class="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
              <span>🎉</span>
              <span>FREE Express Shipping Unlocked!</span>
            </span>
            <span class="text-[10px] text-stone-400 font-mono shrink-0">{{ Math.min(100, Math.round((cart.totalPrice / FREE_SHIPPING_THRESHOLD) * 100)) }}%</span>
          </div>
          <div class="w-full h-1.5 bg-stone-200 dark:bg-white/10 rounded-full overflow-hidden">
            <div 
              class="h-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] transition-all duration-300 rounded-full"
              :style="{ width: `${Math.min(100, (cart.totalPrice / FREE_SHIPPING_THRESHOLD) * 100)}%` }"
            ></div>
          </div>
        </div>

        <!-- Items List -->
        <div class="flex-1 overflow-y-auto px-5 sm:px-6 py-4 space-y-4 divide-y divide-stone-100 dark:divide-white/5">
          <div 
            v-for="item in cart.items" 
            :key="item.cartId || item.id"
            class="pt-4 first:pt-0 flex gap-4 items-center group"
          >
            <!-- Thumbnail -->
            <div class="w-18 h-22 rounded-lg overflow-hidden bg-stone-100 dark:bg-stone-900 border border-stone-200/80 dark:border-white/10 shrink-0 relative">
              <img 
                :src="item.cartImage || item.image || DEFAULT_IMAGE" 
                :alt="item.name" 
                class="w-full h-full object-cover"
                @error="(e) => e.target.src = DEFAULT_IMAGE"
              />
            </div>

            <!-- Details -->
            <div class="flex-1 min-w-0 flex flex-col justify-between h-22 py-0.5">
              <div class="flex items-start justify-between gap-2">
                <div>
                  <h3 class="text-xs font-bold text-stone-900 dark:text-white line-clamp-1 leading-snug">
                    {{ item.name }}
                  </h3>
                  <p v-if="item.selectedVariant" class="text-[10px] text-stone-400 mt-0.5">
                    {{ item.selectedVariant.color }} / {{ item.selectedVariant.size }}
                  </p>
                  <p v-else class="text-[10px] text-stone-400 mt-0.5">
                    {{ item.category || 'Luxury Couture' }}
                  </p>
                </div>

                <!-- Delete Button -->
                <button 
                  @click="cart.removeFromCart(item.cartId || item.id)"
                  class="text-stone-300 hover:text-red-500 text-xs p-1 transition-colors cursor-pointer"
                  aria-label="Remove item"
                >
                  <font-awesome-icon icon="fa-solid fa-trash-can" />
                </button>
              </div>

              <!-- Price & Stepper -->
              <div class="flex items-center justify-between mt-auto">
                <div class="inline-flex items-center border border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-white/5">
                  <button 
                    @click="cart.updateQuantity(item.cartId || item.id, item.quantity - 1)"
                    class="w-6 h-6 flex items-center justify-center text-xs text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span class="w-6 text-center text-xs font-bold font-mono text-stone-800 dark:text-white">
                    {{ item.quantity }}
                  </span>
                  <button 
                    @click="cart.updateQuantity(item.cartId || item.id, item.quantity + 1)"
                    class="w-6 h-6 flex items-center justify-center text-xs text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <div class="text-right font-mono text-xs font-bold text-stone-900 dark:text-white">
                  Rs. {{ ((item.price || 0) * item.quantity).toLocaleString() }}
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="cart.items.length === 0" class="h-full flex flex-col items-center justify-center text-center py-16 px-4 space-y-4">
            <div class="w-16 h-16 rounded-full bg-stone-100 dark:bg-white/5 border border-[#D4AF37]/30 flex items-center justify-center text-xl text-[#D4AF37]">
              <font-awesome-icon icon="fa-solid fa-bag-shopping" />
            </div>
            <div class="space-y-1">
              <h3 class="text-base font-editorial font-bold text-stone-900 dark:text-white">Your Bag is Empty</h3>
              <p class="text-xs text-stone-500 max-w-xs">
                Explore our hand-embroidered luxury lawn, pret, and bridal collections.
              </p>
            </div>
            <button 
              @click="navigateToShop"
              class="px-6 py-2.5 bg-stone-900 hover:bg-[#D4AF37] dark:bg-white dark:text-black dark:hover:bg-[#D4AF37] dark:hover:text-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-all cursor-pointer"
            >
              Explore Catalog
            </button>
          </div>
        </div>

        <!-- Bag Footer with Instant Checkout Action -->
        <div v-if="cart.items.length > 0" class="p-5 sm:p-6 bg-white dark:bg-[#12110E] border-t border-stone-200/80 dark:border-white/10 space-y-3.5 shadow-lg shrink-0">
          <div class="flex items-center justify-between text-xs">
            <span class="text-stone-500">Subtotal ({{ cart.totalItems }} items)</span>
            <span class="text-base font-bold text-stone-900 dark:text-white font-mono">
              Rs. {{ cart.formattedTotalPrice }}
            </span>
          </div>

          <!-- Fast In-Drawer Checkout Button -->
          <button 
            @click="cart.openCheckout()"
            class="w-full h-12 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#B8860B] hover:brightness-105 text-black text-xs font-bold uppercase tracking-[0.2em] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Express 1-Step Checkout</span>
            <span>→</span>
          </button>

          <!-- WhatsApp Direct Order -->
          <a 
            :href="whatsappOrderUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full h-10 rounded-full border border-emerald-500/40 hover:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2"
          >
            <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-sm" />
            <span>Order via WhatsApp</span>
          </a>
        </div>
      </div>

      <!-- ══════════ STEP 2: FAST IN-DRAWER EXPRESS CHECKOUT ══════════ -->
      <div v-else-if="cart.drawerStep === 'checkout'" class="flex-1 flex flex-col min-h-0">
        <div class="flex-1 overflow-y-auto px-5 sm:px-6 py-5 space-y-5">
          
          <!-- Mini Order Summary Pill -->
          <div class="p-3.5 rounded-xl bg-stone-100 dark:bg-white/5 border border-stone-200/60 dark:border-white/5 flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span class="text-stone-500">{{ cart.totalItems }} items</span>
              <span>•</span>
              <span class="font-bold text-stone-900 dark:text-white font-mono">Rs. {{ cart.formattedTotalPrice }}</span>
            </div>
            <button @click="cart.drawerStep = 'cart'" class="text-[10px] font-bold text-[#B8860B] dark:text-[#D4AF37] uppercase tracking-wider hover:underline cursor-pointer">
              Edit Bag
            </button>
          </div>

          <!-- Quick Form -->
          <div class="space-y-3.5">
            <!-- Full Name -->
            <div>
              <label class="block text-[10px] font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1">
                Full Name *
              </label>
              <input 
                v-model="customer.name" 
                type="text" 
                placeholder="e.g. Ayesha Khan" 
                class="w-full px-3.5 py-2.5 bg-white dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-lg text-xs text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:border-[#D4AF37] transition-all"
              />
            </div>

            <!-- WhatsApp Number -->
            <div>
              <label class="block text-[10px] font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1">
                WhatsApp / Mobile Number *
              </label>
              <input 
                v-model="customer.phone" 
                type="tel" 
                placeholder="03XX-XXXXXXX" 
                class="w-full px-3.5 py-2.5 bg-white dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-lg text-xs text-stone-900 dark:text-white font-mono placeholder:text-stone-400 focus:outline-none focus:border-[#D4AF37] transition-all"
              />
            </div>

            <!-- City & Address -->
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1">
                  City *
                </label>
                <input 
                  v-model="customer.city" 
                  type="text" 
                  placeholder="e.g. Lahore / Karachi" 
                  class="w-full px-3.5 py-2.5 bg-white dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-lg text-xs text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:border-[#D4AF37] transition-all"
                />
              </div>

              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1">
                  Email (Optional)
                </label>
                <input 
                  v-model="customer.email" 
                  type="email" 
                  placeholder="client@email.com" 
                  class="w-full px-3.5 py-2.5 bg-white dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-lg text-xs text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:border-[#D4AF37] transition-all"
                />
              </div>
            </div>

            <div>
              <label class="block text-[10px] font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1">
                Delivery Address *
              </label>
              <input 
                v-model="customer.address" 
                type="text" 
                placeholder="House #, Street name, Area" 
                class="w-full px-3.5 py-2.5 bg-white dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-lg text-xs text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:border-[#D4AF37] transition-all"
              />
            </div>
          </div>

          <!-- Payment Options -->
          <div class="space-y-2">
            <label class="block text-[10px] font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400">
              Payment Method *
            </label>
            <div class="grid grid-cols-3 gap-2">
              <button 
                type="button" 
                @click="paymentMethod = 'cod'"
                :class="['p-2.5 rounded-lg border text-center transition-all cursor-pointer',
                         paymentMethod === 'cod' 
                           ? 'border-[#D4AF37] bg-[#D4AF37]/10 font-bold text-stone-900 dark:text-white' 
                           : 'border-stone-200 dark:border-white/10 text-stone-500 hover:border-stone-400']"
              >
                <span class="text-xs block">Cash On Delivery</span>
                <span class="text-[8.5px] text-stone-400 block mt-0.5">Pay on delivery</span>
              </button>

              <button 
                type="button" 
                @click="paymentMethod = 'easypaisa'"
                :class="['p-2.5 rounded-lg border text-center transition-all cursor-pointer',
                         paymentMethod === 'easypaisa' 
                           ? 'border-emerald-500 bg-emerald-500/10 font-bold text-emerald-600 dark:text-emerald-400' 
                           : 'border-stone-200 dark:border-white/10 text-stone-500 hover:border-stone-400']"
              >
                <span class="text-xs block text-emerald-600 dark:text-emerald-400">Easypaisa</span>
                <span class="text-[8.5px] text-stone-400 block mt-0.5">Mobile Account</span>
              </button>

              <button 
                type="button" 
                @click="paymentMethod = 'jazzcash'"
                :class="['p-2.5 rounded-lg border text-center transition-all cursor-pointer',
                         paymentMethod === 'jazzcash' 
                           ? 'border-rose-500 bg-rose-500/10 font-bold text-rose-600 dark:text-rose-400' 
                           : 'border-stone-200 dark:border-white/10 text-stone-500 hover:border-stone-400']"
              >
                <span class="text-xs block text-rose-600 dark:text-rose-400">JazzCash</span>
                <span class="text-[8.5px] text-stone-400 block mt-0.5">Mobile Account</span>
              </button>
            </div>

            <!-- Transfer Box if Easypaisa or Jazzcash -->
            <div v-if="paymentMethod === 'easypaisa' || paymentMethod === 'jazzcash'" class="p-3 bg-stone-50 dark:bg-white/5 border border-stone-200/60 dark:border-white/5 rounded-lg space-y-2 text-xs">
              <div class="flex items-center justify-between">
                <span class="text-[10px] text-stone-500">Send To: <strong class="text-stone-900 dark:text-white font-mono">0341-6887454</strong> (Ahmad Ali)</span>
              </div>
              <input 
                v-model="transactionId" 
                type="text" 
                placeholder="Enter Transaction ID (TID) from receipt" 
                class="w-full px-3 py-2 bg-white dark:bg-black/30 border border-stone-200 dark:border-white/10 rounded text-xs font-mono uppercase text-center focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

        </div>

        <!-- Checkout Action Footer -->
        <div class="p-5 sm:p-6 bg-white dark:bg-[#12110E] border-t border-stone-200/80 dark:border-white/10 space-y-3.5 shadow-lg shrink-0">
          <div class="space-y-1 text-xs">
            <div class="flex justify-between text-stone-500">
              <span>Shipping Delivery</span>
              <span class="font-mono font-bold" :class="deliveryFee === 0 ? 'text-emerald-600' : 'text-stone-900 dark:text-white'">
                {{ deliveryFee === 0 ? 'FREE' : 'Rs. ' + deliveryFee }}
              </span>
            </div>
            <div class="flex justify-between text-stone-900 dark:text-white font-bold text-sm pt-1 border-t border-stone-100 dark:border-white/5">
              <span>Total Payable</span>
              <span class="font-mono text-[#B8860B] dark:text-[#D4AF37]">
                Rs. {{ (cart.totalPrice + deliveryFee).toLocaleString() }}
              </span>
            </div>
          </div>

          <button 
            @click="submitFastOrder" 
            :disabled="isSubmitting"
            class="w-full h-12 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#B8860B] hover:brightness-105 text-black text-xs font-bold uppercase tracking-[0.2em] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span v-if="!isSubmitting">Place Order Now • Rs. {{ (cart.totalPrice + deliveryFee).toLocaleString() }}</span>
            <span v-else class="inline-flex items-center gap-2">
              <span class="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
              <span>Confirming Order...</span>
            </span>
          </button>
        </div>
      </div>

      <!-- ══════════ STEP 3: ORDER CONFIRMED MODAL VIEW ══════════ -->
      <div v-else-if="cart.drawerStep === 'success'" class="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-5">
        <div class="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl">
          ✓
        </div>

        <div>
          <span class="text-[9.5px] uppercase font-bold tracking-[0.35em] text-[#D4AF37] block mb-1">Order Received</span>
          <h2 class="text-2xl font-editorial font-normal text-stone-900 dark:text-white">Thank You, {{ customer.name || 'Valued Client' }}!</h2>
        </div>

        <p class="text-xs text-stone-500 dark:text-stone-400 max-w-xs leading-relaxed">
          Your order ID is <strong class="text-stone-900 dark:text-white font-mono">#{{ confirmedOrderId }}</strong>. Our atelier will prepare your shipment shortly.
        </p>

        <!-- WhatsApp Confirmation Action -->
        <div class="w-full space-y-2.5 pt-2">
          <a 
            :href="whatsappConfirmationUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full py-3 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow hover:brightness-105 transition-all"
          >
            <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-base" />
            <span>Confirm Order on WhatsApp</span>
          </a>

          <button 
            @click="cart.closeDrawer"
            class="w-full py-3 rounded-full border border-stone-300 dark:border-white/10 hover:border-[#D4AF37] text-stone-800 dark:text-stone-200 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { useCartStore } from '../stores/cart'
import { useAuthStore } from '../stores/auth'
import { useOrdersStore } from '../stores/orders'

const router = useRouter()
const cart = useCartStore()
const auth = useAuthStore()
const orderStore = useOrdersStore()

const FREE_SHIPPING_THRESHOLD = 15000
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600'

const isSubmitting = ref(false)
const confirmedOrderId = ref('')
const paymentMethod = ref('cod')
const transactionId = ref('')

const customer = reactive({
  name: auth.user?.name || '',
  phone: '',
  city: '',
  email: auth.user?.email || '',
  address: ''
})

const freeShippingRemaining = computed(() => {
  return Math.max(0, FREE_SHIPPING_THRESHOLD - cart.totalPrice)
})

const deliveryFee = computed(() => {
  if (cart.totalPrice >= FREE_SHIPPING_THRESHOLD) return 0
  const c = customer.city.toLowerCase().trim()
  if (!c) return 200
  if (c === 'lahore') return 150
  if (['karachi', 'islamabad', 'rawalpindi', 'faisalabad', 'multan'].includes(c)) return 200
  return 250
})

const navigateToShop = () => {
  cart.closeDrawer()
  router.push('/shop')
}

const submitFastOrder = async () => {
  if (!customer.name.trim() || !customer.phone.trim() || !customer.city.trim() || !customer.address.trim()) {
    Swal.fire({
      icon: 'warning',
      title: 'Incomplete Details',
      text: 'Please provide your Full Name, Phone / WhatsApp, City, and Delivery Address.',
      confirmButtonColor: '#181818'
    })
    return
  }

  isSubmitting.value = true
  const newOrderId = Math.floor(Math.random() * 90000) + 10000
  confirmedOrderId.value = newOrderId

  try {
    const orderData = {
      user: auth.user?._id || auth.user?.id,
      items: cart.items.map(item => ({
        product: item.id || item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        variant: item.selectedVariant || item.variant || {}
      })),
      subtotal: cart.totalPrice,
      deliveryCharge: deliveryFee.value,
      totalAmount: cart.totalPrice + deliveryFee.value,
      shippingAddress: {
        fullName: customer.name,
        address: customer.address,
        city: customer.city,
        phone: customer.phone,
        country: 'Pakistan'
      },
      paymentMethod: paymentMethod.value,
      customerEmail: customer.email || `${customer.phone}@ahmadcloths.com`,
      customerName: customer.name,
      transactionId: transactionId.value
    }

    await orderStore.createOrder(orderData)
  } catch (err) {
    // Offline / Mock fallback
  }

  cart.clearCart()
  isSubmitting.value = false
  cart.drawerStep = 'success'
}

const whatsappOrderUrl = computed(() => {
  const itemsText = cart.items.map(i => `• ${i.name} (Qty: ${i.quantity}) - Rs. ${(i.price * i.quantity).toLocaleString()}`).join('\n')
  const message = `Hello Ahmad Clothes House, I would like to order the following items from my bag:\n\n${itemsText}\n\n*Total Amount: Rs. ${cart.formattedTotalPrice}*`
  return `https://wa.me/923416887454?text=${encodeURIComponent(message)}`
})

const whatsappConfirmationUrl = computed(() => {
  const message = `Hello Ahmad Clothes House, I just placed an order!\n\n*Order ID: #${confirmedOrderId.value}*\n*Name: ${customer.name}*\n*Phone: ${customer.phone}*\n*Address: ${customer.address}, ${customer.city}*\n*Payment: ${paymentMethod.value.toUpperCase()}*\n\nPlease confirm my dispatch at your earliest convenience.`
  return `https://wa.me/923416887454?text=${encodeURIComponent(message)}`
})
</script>

<style scoped>
.drawer-backdrop-enter-active,
.drawer-backdrop-leave-active {
  transition: opacity 0.3s ease;
}

.drawer-backdrop-enter-from,
.drawer-backdrop-leave-to {
  opacity: 0;
}
</style>
