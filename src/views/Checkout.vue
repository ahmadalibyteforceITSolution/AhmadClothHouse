<template>
   <div class="min-h-screen bg-white dark:bg-[#050505] transition-colors duration-1000 pb-32 text-[#111] dark:text-[#eee] font-sans">

      <!-- LUXURY BRAND HEADER -->
      <header class="w-full py-8 px-8 border-b border-black/5 dark:border-white/5 flex flex-col items-center justify-center gap-1 mb-12 bg-white/90 dark:bg-[#050505]/90 sticky top-0 z-[100] backdrop-blur-3xl">
         <h1 class="text-2xl md:text-3xl font-playfair tracking-[0.3em] font-normal uppercase cursor-pointer transition-transform hover:scale-105"
             @click="router.push('/')">
            AHMADCLOTHES
         </h1>
         <span class="text-[7px] tracking-[0.5em] text-[#d4af37] uppercase font-bold italic">Secure Checkout</span>
      </header>

      <!-- Success Protocol Overlay -->
      <transition name="fade">
         <div v-if="success" class="h-screen flex flex-col items-center justify-center text-center px-8 bg-white dark:bg-[#050505] z-[1000] fixed inset-0">
            <div class="space-y-6 max-w-2xl px-6 animate-fade-in-up">
               <h2 class="text-5xl md:text-7xl font-light uppercase tracking-tighter font-playfair mb-6">Order Confirmed.</h2>
               <div class="w-16 h-[1px] bg-black dark:bg-white mx-auto opacity-20"></div>
               <p class="text-stone-500 max-w-md mx-auto uppercase text-[9px] font-bold leading-loose tracking-[0.4em] mt-6">
                  Order ID #{{ Math.floor(Math.random() * 9000) + 1000 }} <br><br>
                  Your luxury pieces are being prepared by our artisans. A confirmation email has been dispatched.
               </p>
            </div>

            <router-link to="/" class="mt-16 group relative px-12 py-4 border border-black dark:border-white text-black dark:text-white text-[9px] font-bold uppercase tracking-[0.4em] transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black overflow-hidden flex items-center justify-center gap-4">
               <span>Return to Collection</span>
               <font-awesome-icon icon="fa-solid fa-arrow-right" class="group-hover:translate-x-2 transition-transform" />
            </router-link>
         </div>
      </transition>

      <!-- MAIN CHECKOUT PORTAL -->
      <div v-if="!success" class="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 py-4">
         <div class="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">

            <!-- Information Formulation Column: LEFT -->
            <div class="flex-grow lg:w-[60%] animate-fade-in-up space-y-16">

               <!-- Breadcrumbs styled subtly -->
               <nav class="flex items-center gap-3 text-[8px] font-bold tracking-[0.4em] uppercase text-stone-400">
                  <router-link to="/cart" class="hover:text-black dark:hover:text-white transition-colors">Cart</router-link>
                  <span class="opacity-30">/</span>
                  <span class="text-black dark:text-white border-b border-black dark:border-white pb-0.5">Information</span>
                  <span class="opacity-30">/</span>
                  <span class="opacity-50">Payment</span>
               </nav>

               <!-- Section 1: Identity & Delivery -->
               <section class="space-y-12">
                  <h2 class="text-lg font-playfair italic underline decoration-black/10 dark:decoration-white/10 underline-offset-8">1. Delivery Destination</h2>

                  <div class="flex flex-col md:grid md:grid-cols-2 gap-x-8 gap-y-10">
                     <div class="col-span-2 relative group">
                        <input v-model="customer.name" type="text" id="fname" placeholder=" " class="mariab-input w-full peer">
                        <label for="fname" class="mariab-label">Full Legal Name</label>
                     </div>
                     <div class="col-span-2 relative group">
                        <input v-model="customer.email" type="email" id="femail" placeholder=" " class="mariab-input w-full lowercase peer">
                        <label for="femail" class="mariab-label">Email Address</label>
                     </div>
                     <div class="col-span-2 relative group">
                        <input v-model="customer.address" type="text" id="faddress" placeholder=" " class="mariab-input w-full peer">
                        <label for="faddress" class="mariab-label">Complete Shipping Address</label>
                     </div>
                     <div class="relative group">
                        <input v-model="customer.zip" type="text" id="fzip" placeholder=" " class="mariab-input w-full peer">
                        <label for="fzip" class="mariab-label">Postal Code</label>
                     </div>
                     <div class="relative group">
                        <input v-model="customer.city" type="text" id="fcity" placeholder=" " class="mariab-input w-full peer">
                        <label for="fcity" class="mariab-label">City</label>
                     </div>
                     <div class="relative group col-span-2 md:col-span-1">
                        <input v-model="customer.phone" type="tel" id="fphone" placeholder=" " class="mariab-input w-full peer">
                        <label for="fphone" class="mariab-label">Contact Number (03XX)</label>
                     </div>
                  </div>
               </section>

               <div class="w-full h-[1px] bg-black/5 dark:bg-white/5"></div>

               <!-- Section 2: Financial Selection -->
               <section class="space-y-12">
                  <h2 class="text-lg font-playfair italic underline decoration-black/10 dark:decoration-white/10 underline-offset-8">2. Payment Method</h2>

                  <div class="space-y-4">
                      <!-- Payment Options Container -->
                      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                         <div @click="paymentMethod = 'easypaisa'" :class="['payment-card', paymentMethod === 'easypaisa' ? 'active shadow-lg border-black dark:border-white scale-[1.02]' : 'border-black/10 dark:border-white/10']">
                            <span class="text-[10px] font-black uppercase tracking-[0.2em] mb-2 block text-center" :class="paymentMethod === 'easypaisa' ? 'text-black dark:text-white' : 'text-stone-500'">Easypaisa</span>
                            <p class="text-[8px] text-center text-stone-500 leading-relaxed font-medium">Direct Transfer</p>
                         </div>

                         <div @click="paymentMethod = 'jazzcash'" :class="['payment-card', paymentMethod === 'jazzcash' ? 'active shadow-lg border-black dark:border-white scale-[1.02]' : 'border-black/10 dark:border-white/10']">
                            <span class="text-[10px] font-black uppercase tracking-[0.2em] mb-2 block text-center" :class="paymentMethod === 'jazzcash' ? 'text-black dark:text-white' : 'text-stone-500'">JazzCash</span>
                            <p class="text-[8px] text-center text-stone-500 leading-relaxed font-medium">Direct Transfer</p>
                         </div>

                         <div @click="paymentMethod = 'cod'" :class="['payment-card', paymentMethod === 'cod' ? 'active shadow-lg border-black dark:border-white scale-[1.02]' : 'border-black/10 dark:border-white/10']">
                            <span class="text-[10px] font-black uppercase tracking-[0.2em] mb-2 block text-center" :class="paymentMethod === 'cod' ? 'text-black dark:text-white' : 'text-stone-500'">Cash on Delivery</span>
                            <p class="text-[8px] text-center text-stone-500 leading-relaxed font-medium">+ Rs. 200 Handling</p>
                         </div>
                      </div>

                      <!-- Payment Detail Panel -->
                      <transition name="slide-up">
                         <div v-if="paymentMethod === 'easypaisa' || paymentMethod === 'jazzcash'"
                            class="mt-8 p-8 border border-black/10 dark:border-white/10 bg-[#fafaf8] dark:bg-[#080808] space-y-8">
                            
                            <div class="text-center space-y-4">
                               <p class="text-[9px] font-bold uppercase tracking-[0.3em] text-[#d4af37]">Merchant Account</p>
                               <div class="space-y-1">
                                  <p class="text-3xl font-light tracking-widest text-black dark:text-white">
                                     {{ paymentMethod === 'easypaisa' ? easypaisaNumber : jazzcashNumber }}
                                  </p>
                                  <p class="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-500">
                                     Title: {{ paymentMethod === 'easypaisa' ? easypaisaName : jazzcashName }}
                                  </p>
                               </div>
                               <p class="text-[9px] text-stone-500 uppercase tracking-widest leading-loose pt-4">
                                  Transfer exactly <span class="text-black dark:text-white font-black border-b border-black/20 dark:border-white/20 pb-0.5">Rs. {{ (cart.totalPrice).toLocaleString() }}</span> <br>
                                  and provide the Transaction ID (TID) below.
                               </p>
                            </div>

                            <div class="max-w-md mx-auto relative group mt-6">
                               <input v-model="transactionId" type="text" id="ftid" placeholder=" " class="mariab-input w-full text-center tracking-[0.4em] font-medium peer">
                               <label for="ftid" class="mariab-label left-1/2 -translate-x-1/2 peer-focus:-translate-x-1/2 peer-[&:not(:placeholder-shown)]:-translate-x-1/2">Transaction ID (TID)</label>
                            </div>
                         </div>
                      </transition>
                  </div>
               </section>

               <button @click="processPayment" :disabled="isProcessing"
                  class="w-full bg-black dark:bg-white text-white dark:text-black py-6 text-[10px] font-bold uppercase tracking-[0.5em] transition-all hover:bg-[#111] dark:hover:bg-[#eee] hover:-translate-y-1 shadow-xl flex items-center justify-center gap-4 relative overflow-hidden group disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none mt-12">
                  <span class="relative z-10">{{ isProcessing ? 'PROCESSING...' : 'COMPLETE ORDER' }}</span>
                  <font-awesome-icon v-if="!isProcessing" icon="fa-solid fa-lock" class="relative z-10 text-[9px] opacity-70" />
               </button>
            </div>

            <!-- Order Summary: RIGHT (Sticky) -->
            <div class="lg:w-[40%] w-full lg:sticky lg:top-32 animate-fade-in-up">
               <div class="bg-[#fafaf8] dark:bg-[#080808] border border-black/10 dark:border-white/10 p-8 md:p-12">
                  <h3 class="text-xl font-playfair mb-8 text-[#111] dark:text-[#eee]">Order Summary</h3>

                  <div class="space-y-6 max-h-[50vh] overflow-y-auto pr-4 mb-8 luxury-scroll">
                     <div v-for="item in cart.items" :key="item.id" class="flex gap-6 items-start group">
                        <div class="w-20 aspect-[3/4] bg-white dark:bg-black overflow-hidden shrink-0 border border-black/5 dark:border-white/5 relative">
                           <img :src="item.cartImage || item.image" class="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Product" />
                           <div class="absolute -top-2 -right-2 w-5 h-5 bg-black dark:bg-white text-white dark:text-black text-[8px] flex items-center justify-center rounded-full font-bold">
                              {{ item.quantity }}
                           </div>
                        </div>
                        <div class="flex-grow space-y-1">
                           <p class="text-[11px] font-medium uppercase tracking-widest text-[#111] dark:text-[#eee] leading-tight">{{ item.name }}</p>
                           <p class="text-[9px] text-stone-500 uppercase tracking-widest pt-1">{{ item.category }}</p>
                           <p v-if="item.variant && item.variant.size" class="text-[9px] text-stone-400">{{ item.variant.color }} / {{ item.variant.size }}</p>
                        </div>
                        <div class="text-[10px] font-medium tracking-wide shrink-0">
                           Rs. {{ (item.price * item.quantity).toLocaleString() }}
                        </div>
                     </div>
                  </div>

                  <div class="space-y-5 pt-8 border-t border-black/10 dark:border-white/10">
                     <div class="flex justify-between text-[10px] font-bold text-stone-500 uppercase tracking-widest">
                        <span>Subtotal</span>
                        <span>Rs. {{ cart.totalPrice.toLocaleString() }}</span>
                     </div>
                     <div class="flex justify-between text-[10px] font-bold text-stone-500 uppercase tracking-widest">
                        <span>Shipping</span>
                        <span>{{ deliveryCharge === 0 ? 'COMPLIMENTARY' : 'Rs. ' + deliveryCharge }}</span>
                     </div>
                     <div class="h-[1px] bg-black/10 dark:bg-white/10 my-6"></div>
                     <div class="flex justify-between items-end">
                        <span class="text-[12px] font-bold uppercase tracking-[0.3em]">Total</span>
                        <div class="text-right">
                           <span class="text-[9px] text-stone-400 mr-2">PKR</span>
                           <span class="text-2xl font-light tracking-wide">Rs. {{ (cart.totalPrice + deliveryCharge).toLocaleString() }}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>
   </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import api from '../api'
import Swal from 'sweetalert2'
import { useAuthStore } from '../stores/auth'
import { useCartStore } from '../stores/cart'
import { useProductsStore } from '../stores/products'
import { useOrdersStore } from '../stores/orders'

const auth = useAuthStore()
const cart = useCartStore()
const productStore = useProductsStore()
const orderStore = useOrdersStore()
const router = useRouter()
const route = useRoute()

const success = ref(false)
const isProcessing = ref(false)
const paymentMethod = ref('easypaisa')
const transactionId = ref('')

// Dynamic Delivery Charge Logic
const deliveryCharge = computed(() => {
   if (cart.totalPrice >= 5000 && paymentMethod.value !== 'cod') return 0
   
   const city = customer.city.toLowerCase().trim()
   if (!city) return 200 // Default if empty
   
   if (city === 'lahore') return 150
   if (['karachi', 'islamabad', 'rawalpindi', 'faisalabad', 'multan'].includes(city)) return 250
   if (['peshawar', 'quetta', 'gujranwala', 'sialkot'].includes(city)) return 350
   return 300 // Nationwide for other cities
})

// Expose Env Variables safely for Template
const easypaisaNumber = import.meta.env.VITE_EASYPAISA_NUMBER || '03416887454'
const easypaisaName = import.meta.env.VITE_EASYPAISA_NAME || 'Ahmad Ali'
const jazzcashNumber = import.meta.env.VITE_JAZZCASH_NUMBER || '03416887454'
const jazzcashName = import.meta.env.VITE_JAZZCASH_NAME || 'Ahmad Ali'

const customer = reactive({
   name: auth.user?.name || '',
   email: auth.user?.email || '',
   address: '',
   city: '',
   zip: '',
   phone: ''
})

const processPayment = async () => {
   if (!customer.name || !customer.email || !customer.address || !customer.city || !customer.phone) {
      Swal.fire({
         icon: 'warning',
         title: 'AhmadClothes House - INCOMPLETE PROTOCOL',
         text: 'Please complete the delivery architecture to proceed.',
         confirmButtonColor: '#d4af37'
      })
      return
   }

   isProcessing.value = true

   try {
      const orderData = {
         user: auth.user?._id || auth.user?.id,
         items: cart.items.map(item => ({
            product: item.id || item._id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            variant: item.variant || {}
         })),
         subtotal: cart.totalPrice,
         deliveryCharge: deliveryCharge.value,
         totalAmount: cart.totalPrice + deliveryCharge.value,
         shippingAddress: {
            fullName: customer.name,
            address: customer.address,
            city: customer.city,
            zipCode: customer.zip,
            phone: customer.phone,
            country: 'Pakistan'
         },
         paymentMethod: paymentMethod.value,
         customerEmail: customer.email,
         customerName: customer.name
      }

      if ((paymentMethod.value === 'easypaisa' || paymentMethod.value === 'jazzcash') && !transactionId.value) {
         Swal.fire({
            icon: 'warning',
            title: 'AhmadClothes House - PAYMENT VERIFICATION REQUIRED',
            text: 'Please provide the Transaction ID (TID) from your mobile transfer receipt.',
            confirmButtonColor: '#d4af37'
         })
         isProcessing.value = false
         return
      }

      orderData.transactionId = transactionId.value

      // Create order directly for all methods
      await orderStore.createOrder(orderData)

      // Record sales
      cart.items.forEach(item => {
         productStore.recordSale(item.id || item._id, item.quantity)
      })

      // Track Meta Purchase Event
      if (typeof window !== 'undefined' && window.fbq) {
         window.fbq('track', 'Purchase', {
            value: orderData.totalAmount,
            currency: 'PKR',
            content_ids: cart.items.map(i => i.id || i._id),
            content_type: 'product'
         })
      }

      success.value = true
      
      // GENERATE WHATSAPP NOTIFICATION
      const orderSummary = cart.items.map(i => `- ${i.name} (x${i.quantity})`).join('%0A')
      const waMessage = `*NEW ORDER FROM AHMADCLOTHES*%0A%0A` +
        `*Customer:* ${customer.name}%0A` +
        `*Phone:* ${customer.phone}%0A` +
        `*Address:* ${customer.address}, ${customer.city}%0A` +
        `*Items:*%0A${orderSummary}%0A` +
        `*Total:* Rs. ${(cart.totalPrice + deliveryCharge.value).toLocaleString()}%0A` +
        `*Payment:* ${paymentMethod.value.toUpperCase()}%0A` +
        `${transactionId.value ? `*TID:* ${transactionId.value}` : ''}`
      
      const waNumber = '923416887454'
      const waLink = `https://wa.me/${waNumber}?text=${waMessage}`
      
      cart.clearCart()

      Swal.fire({
         icon: 'success',
         confirmButtonColor: '#d4af37',
         title: 'AhmadClothes House - ACQUISITION COMPLETE',
         text: paymentMethod.value === 'cod' 
            ? 'Your luxury pieces are now being prepared for shipment.'
            : 'Your payment is under verification. Your luxury pieces will be prepared shortly.'
      })
   } catch (error) {
      console.error('Payment Error:', error)
      Swal.fire({
         icon: 'error',
         title: 'AhmadClothes House - ORDER PROTOCOL FAILED',
         text: 'Your order could not be registered in our archives.',
         confirmButtonColor: '#d4af37'
      })
   } finally {
      isProcessing.value = false
   }
}

onMounted(() => {
   window.scrollTo(0, 0)
   if (route.query.success === 'true') {
      success.value = true
      cart.clearCart()
   } else {
      // Track Meta InitiateCheckout Event
      if (typeof window !== 'undefined' && window.fbq && cart.items.length > 0) {
         window.fbq('track', 'InitiateCheckout', {
            value: cart.totalPrice,
            currency: 'PKR',
            num_items: cart.items.reduce((sum, item) => sum + item.quantity, 0)
         })
      }
   }
})
</script>

<style scoped>
/* Ultra Luxury Maria B Style Inputs */
.mariab-input {
   background: transparent;
   border: 1px solid rgba(0, 0, 0, 0.15);
   padding: 22px 16px 8px;
   font-size: 13px;
   font-weight: 500;
   border-radius: 2px;
   outline: none;
   transition: border-color 0.3s ease;
   color: #111;
}

.dark .mariab-input {
   border-color: rgba(255, 255, 255, 0.15);
   color: #eee;
}

.mariab-input:focus {
   border-color: #111;
}

.dark .mariab-input:focus {
   border-color: #eee;
}

.mariab-label {
   position: absolute;
   left: 16px;
   top: 15px;
   font-size: 10px;
   font-weight: 600;
   text-transform: uppercase;
   letter-spacing: 0.1em;
   color: #888;
   transition: all 0.2s ease;
   pointer-events: none;
}

.mariab-input:focus ~ .mariab-label,
.mariab-input:not(:placeholder-shown) ~ .mariab-label {
   top: 6px;
   font-size: 7px;
   color: #111;
}

.dark .mariab-input:focus ~ .mariab-label,
.dark .mariab-input:not(:placeholder-shown) ~ .mariab-label {
   color: #eee;
}

/* Payment Cards */
.payment-card {
   padding: 24px;
   border: 1px solid;
   cursor: pointer;
   transition: all 0.3s ease;
   background: transparent;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   min-height: 100px;
}

/* Animations */
.animate-fade-in-up {
   animation: fadeInUp 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

@keyframes fadeInUp {
   from {
      opacity: 0;
      transform: translateY(30px);
   }
   to {
      opacity: 1;
      transform: translateY(0);
   }
}

.luxury-scroll::-webkit-scrollbar {
   width: 2px;
}

.luxury-scroll::-webkit-scrollbar-thumb {
   background: #111;
}

.dark .luxury-scroll::-webkit-scrollbar-thumb {
   background: #eee;
}

.fade-enter-active,
.fade-leave-active {
   transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
   opacity: 0;
}
</style>
