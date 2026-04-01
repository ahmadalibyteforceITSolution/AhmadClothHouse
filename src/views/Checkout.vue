<template>
   <div
      class="min-h-screen bg-[#FDFBF7] dark:bg-[#050505] transition-colors duration-700 pb-32 selection:bg-[var(--primary-gold)]/30 font-sans">

      <!-- LUXURY BRAND HEADER -->
      <header
         class="w-full py-12 px-8 border-b border-stone-200 dark:border-stone-800 flex flex-col items-center gap-2 mb-16 transition-colors bg-white dark:bg-[#0A0A0A] sticky top-0 z-[100] backdrop-blur-xl bg-opacity-90">
         <div class="flex items-center gap-6 mb-2">
            <div class="h-[1px] w-8 bg-[var(--primary-gold)] opacity-40"></div>
            <h1 class="text-3xl font-playfair tracking-[0.4em] font-light text-[var(--luxury-black)] dark:text-white uppercase cursor-pointer"
               @click="router.push('/')">AHMADCLOTHS HOUSE</h1>
            <div class="h-[1px] w-8 bg-[var(--primary-gold)] opacity-40"></div>
         </div>
         <span class="text-[8px] tracking-[0.6em] text-[var(--primary-gold)] uppercase font-bold opacity-80 italic">The
            Art of Couture Checkout</span>
      </header>

      <!-- Success Protocol Overlay -->
      <transition name="fade">
         <div v-if="success"
            class="h-screen flex flex-col items-center justify-center text-center px-8 bg-white dark:bg-[#050505] z-[1000] fixed inset-0">
            <div class="relative mb-12">
               <div
                  class="w-40 h-40 border border-[var(--primary-gold)]/30 rounded-full flex items-center justify-center text-6xl text-[var(--primary-gold)] shadow-[0_0_80px_rgba(184,134,11,0.15)] animate-reveal">
                  <font-awesome-icon icon="fa-solid fa-check" />
               </div>
               <div class="absolute inset-0 border border-[var(--primary-gold)] rounded-full animate-ping opacity-10">
               </div>
            </div>

            <div class="space-y-6 max-w-2xl px-6">
               <h2
                  class="text-6xl md:text-8xl font-light uppercase tracking-tighter font-playfair italic text-[var(--luxury-black)] dark:text-white">
                  AhmadClothes House</h2>
               <div class="w-24 h-[1px] bg-[var(--primary-gold)] mx-auto opacity-40"></div>
               <p
                  class="text-stone-500 dark:text-stone-400 max-w-md mx-auto uppercase text-[10px] font-bold leading-loose tracking-[0.4em]">
                  Order ID #{{ Math.floor(Math.random() * 9000) + 1000 }} Confirmed. <br>
                  A signature couture experience awaits you.
               </p>
            </div>

            <router-link to="/"
               class="mt-20 group relative px-20 py-6 bg-[var(--luxury-black)] dark:bg-white text-white dark:text-black text-[11px] font-bold uppercase tracking-[0.4em] transition-all hover:bg-[var(--deep-burgundy)] dark:hover:bg-[var(--primary-gold)] overflow-hidden flex items-center gap-6">
               <span class="relative z-10 font-bold">RETURN TO ATELIER</span>
               <font-awesome-icon icon="fa-solid fa-arrow-right"
                  class="relative z-10 group-hover:translate-x-4 transition-transform text-[10px]" />
               <div
                  class="absolute inset-0 bg-[var(--primary-gold)] translate-y-full group-hover:translate-y-0 transition-transform duration-500">
               </div>
            </router-link>
         </div>
      </transition>

      <!-- MAIN CHECKOUT PORTAL -->
      <div v-if="!success" class="max-w-7xl mx-auto px-6 py-12">
         <div class="flex flex-col lg:flex-row gap-16 relative items-start">

            <!-- Formulation Column: LEFT -->
            <div class="flex-grow lg:w-2/3 animate-reveal-left space-y-20">

               <!-- Breadcrumbs Integration -->
               <nav
                  class="flex items-center gap-4 text-[9px] font-bold tracking-[0.3em] uppercase text-stone-400 mb-12">
                  <router-link to="/cart" class="hover:text-[var(--primary-gold)] transition-colors">Bag</router-link>
                  <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-[7px] opacity-40" />
                  <span class="text-[var(--luxury-black)] dark:text-white">Checkout Information</span>
               </nav>

               <!-- Section 1: Identity & Delivery -->
               <section
                  class="bg-white dark:bg-[#0A0A0A] p-10 md:p-16 border border-stone-100 dark:border-stone-900 shadow-sm space-y-16">
                  <div
                     class="flex items-center gap-6 mb-8 text-[9px] font-bold tracking-[0.4em] text-[var(--primary-gold)] uppercase">
                     <span>01</span>
                     <div class="h-[1px] flex-grow bg-stone-100 dark:bg-stone-900"></div>
                     <span>DELIVERY PROTOCOL</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                     <div class="col-span-2 relative group">
                        <label
                           class="text-[9px] font-black text-stone-400 uppercase tracking-widest pl-1 mb-4 block group-focus-within:text-[var(--primary-gold)] transition-colors">Full
                           Name</label>
                        <input v-model="customer.name" type="text" placeholder="GIVEN & FAMILY NAME"
                           class="mariab-input w-full">
                     </div>
                     <div class="col-span-2 relative group">
                        <label
                           class="text-[9px] font-black text-stone-400 uppercase tracking-widest pl-1 mb-4 block group-focus-within:text-[var(--primary-gold)] transition-colors">Digital
                           Identity (Email)</label>
                        <input v-model="customer.email" type="email" placeholder="SECURE@DOMAIN.COM"
                           class="mariab-input w-full lowercase">
                     </div>
                     <div class="col-span-2 relative group">
                        <label
                           class="text-[9px] font-black text-stone-400 uppercase tracking-widest pl-1 mb-4 block group-focus-within:text-[var(--primary-gold)] transition-colors">Residence
                           Address</label>
                        <input v-model="customer.address" type="text" placeholder="HOUSE, STREET, AREA"
                           class="mariab-input w-full">
                     </div>
                     <div class="relative group">
                        <label
                           class="text-[9px] font-black text-stone-400 uppercase tracking-widest pl-1 mb-4 block group-focus-within:text-[var(--primary-gold)] transition-colors">Postal
                           Code</label>
                        <input v-model="customer.zip" type="text" placeholder="ZIP CODE" class="mariab-input w-full">
                     </div>
                     <div class="relative group">
                        <label
                           class="text-[9px] font-black text-stone-400 uppercase tracking-widest pl-1 mb-4 block group-focus-within:text-[var(--primary-gold)] transition-colors">Jurisdiction
                           (City)</label>
                        <input v-model="customer.city" type="text" placeholder="CITY NAME" class="mariab-input w-full">
                     </div>
                  </div>
               </section>

               <!-- Section 2: Financial Selection -->
               <section
                  class="bg-white dark:bg-[#0A0A0A] p-10 md:p-16 border border-stone-100 dark:border-stone-900 shadow-sm space-y-16">
                  <div
                     class="flex items-center gap-6 mb-8 text-[9px] font-bold tracking-[0.4em] text-[var(--primary-gold)] uppercase">
                     <span>02</span>
                     <div class="h-[1px] flex-grow bg-stone-100 dark:bg-stone-900"></div>
                     <span>FINANCIAL ARCHITECTURE</span>
                  </div>

                  <div class="space-y-6">
                      <!-- Payment Options Container -->
                      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                         <div @click="paymentMethod = 'easypaisa'" :class="['payment-card group',
                            paymentMethod === 'easypaisa' ? 'active' : 'inactive']">
                            <div class="flex justify-between items-center mb-6">
                               <span class="text-[10px] font-bold uppercase tracking-[0.2em] transition-colors"
                                  :class="paymentMethod === 'easypaisa' ? 'text-black dark:text-white' : 'text-stone-400'">Easypaisa</span>
                               <font-awesome-icon icon="fa-solid fa-mobile-retro"
                                  class="text-lg transition-colors group-hover:text-[#37a844]"
                                  :class="paymentMethod === 'easypaisa' ? 'text-[#37a844]' : 'text-stone-300'" />
                            </div>
                            <p class="text-[9px] leading-relaxed text-stone-400 font-medium tracking-wide">Direct transfer to our EasyPaisa account.</p>
                         </div>

                         <div @click="paymentMethod = 'jazzcash'" :class="['payment-card group',
                            paymentMethod === 'jazzcash' ? 'active' : 'inactive']">
                            <div class="flex justify-between items-center mb-6">
                               <span class="text-[10px] font-bold uppercase tracking-[0.2em] transition-colors"
                                  :class="paymentMethod === 'jazzcash' ? 'text-black dark:text-white' : 'text-stone-400'">JazzCash</span>
                               <font-awesome-icon icon="fa-solid fa-wallet"
                                  class="text-lg transition-colors group-hover:text-[#ed1c24]"
                                  :class="paymentMethod === 'jazzcash' ? 'text-[#ed1c24]' : 'text-stone-300'" />
                            </div>
                            <p class="text-[9px] leading-relaxed text-stone-400 font-medium tracking-wide">Direct transfer to our JazzCash account.</p>
                         </div>

                         <div @click="paymentMethod = 'cod'" :class="['payment-card group',
                            paymentMethod === 'cod' ? 'active' : 'inactive']">
                            <div class="flex justify-between items-center mb-6">
                               <span class="text-[10px] font-bold uppercase tracking-[0.2em] transition-colors"
                                  :class="paymentMethod === 'cod' ? 'text-black dark:text-white' : 'text-stone-400'">Cash
                                  On Delivery</span>
                               <font-awesome-icon icon="fa-solid fa-money-bill-transfer"
                                  class="text-lg transition-colors group-hover:text-[var(--primary-gold)]"
                                  :class="paymentMethod === 'cod' ? 'text-[var(--primary-gold)]' : 'text-stone-300'" />
                            </div>
                            <p class="text-[9px] leading-relaxed text-stone-400 font-medium tracking-wide">Payment on
                               delivery. RS. 200 service charge applies.</p>
                         </div>
                      </div>

                      <!-- Payment Detail Panel -->
                      <transition name="slide-up">
                         <div v-if="paymentMethod === 'easypaisa' || paymentMethod === 'jazzcash'"
                            class="mt-8 p-10 border border-stone-100 dark:border-stone-900 bg-stone-50/50 dark:bg-stone-900/20 space-y-8">
                            
                            <div class="text-center space-y-4">
                               <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary-gold)]">Account Details</p>
                               <div class="space-y-2">
                                  <p class="text-2xl font-playfair italic text-[var(--luxury-black)] dark:text-white">
                                     {{ paymentMethod === 'easypaisa' ? (import.meta.env.VITE_EASYPAISA_NUMBER || '03xxxxxxxxx') : (import.meta.env.VITE_JAZZCASH_NUMBER || '03xxxxxxxxx') }}
                                  </p>
                                  <p class="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400">
                                     Account Name: {{ paymentMethod === 'easypaisa' ? (import.meta.env.VITE_EASYPAISA_NAME || 'STORE NAME') : (import.meta.env.VITE_JAZZCASH_NAME || 'STORE NAME') }}
                                  </p>
                               </div>
                               <p class="text-[8px] text-stone-400 uppercase tracking-widest leading-loose">
                                  Please send exactly <span class="text-[var(--primary-gold)] font-bold">Rs. {{ (cart.totalPrice).toLocaleString() }}</span> to the above account <br>
                                  and enter your Transaction ID (TID) below to finalize your order.
                               </p>
                            </div>

                            <div class="max-w-md mx-auto relative group">
                               <label class="text-[9px] font-black text-stone-400 uppercase tracking-widest pl-1 mb-4 block group-focus-within:text-[var(--primary-gold)] transition-colors">Transaction ID (TID)</label>
                               <input v-model="transactionId" type="text" placeholder="12-DIGIT TRANSACTION ID" class="mariab-input w-full text-center tracking-[0.5em]">
                               <font-awesome-icon icon="fa-solid fa-money-bill-1-wave" class="absolute right-0 bottom-6 text-[var(--primary-gold)] opacity-0 group-focus-within:opacity-100 transition-all" />
                            </div>
                         </div>
                      </transition>
                  </div>
               </section>

               <button @click="processPayment" :disabled="isProcessing"
                  class="w-full bg-[var(--luxury-black)] dark:bg-white text-white dark:text-black py-8 text-[11px] font-bold uppercase tracking-[0.5em] transition-all hover:bg-[var(--deep-burgundy)] dark:hover:bg-[var(--primary-gold)] flex items-center justify-center gap-6 relative overflow-hidden group disabled:opacity-50">
                  <span class="relative z-10 tracking-[0.8em] font-bold">{{ isProcessing ? 'AUTHENTICATING TRANSACTION...' : 'FINALIZE SECURE ORDER' }}</span>
                  <font-awesome-icon v-if="!isProcessing" icon="fa-solid fa-lock"
                     class="relative z-10 text-[10px] group-hover:scale-125 transition-transform" />
                  <div
                     class="absolute inset-0 bg-[var(--primary-gold)] translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                  </div>
               </button>
            </div>

            <!-- Order Summary: RIGHT (Sticky) -->
            <div class="lg:w-1/3 w-full lg:sticky lg:top-40 animate-reveal-right space-y-8">
               <div class="bg-white dark:bg-[#0A0A0A] border border-stone-100 dark:border-stone-900 p-10 shadow-sm">
                  <h3
                     class="text-xl font-playfair italic mb-10 text-[var(--luxury-black)] dark:text-white border-b border-stone-50 pb-6 uppercase tracking-wider">
                     Catalogue Summary</h3>

                  <div class="space-y-8 max-h-[400px] overflow-y-auto pr-4 mb-10 luxury-scroll">
                     <div v-for="item in cart.items" :key="item.id" class="flex gap-6 items-center">
                        <div class="w-20 h-24 bg-stone-50 overflow-hidden shrink-0 border border-stone-50">
                           <img :src="item.image"
                              class="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                              alt="Product" />
                        </div>
                        <div class="flex-grow space-y-1">
                           <p
                              class="text-[10px] font-black uppercase tracking-tighter text-[var(--luxury-black)] dark:text-white leading-tight line-clamp-1">
                              {{ item.name }}</p>
                           <p class="text-[8px] font-bold text-stone-400 uppercase tracking-widest">{{ item.category }}
                              &nbsp; ✦ &nbsp; QTY: {{ item.quantity }}</p>
                           <p class="text-[10px] font-bold text-[var(--primary-gold)]">Rs. {{ (item.price *
                              item.quantity).toLocaleString() }}</p>
                        </div>
                     </div>
                  </div>

                  <div class="space-y-4 pt-10 border-t border-stone-100 dark:border-stone-900">
                     <div
                        class="flex justify-between text-[10px] font-bold text-stone-400 uppercase tracking-widest italic leading-relaxed">
                        <span>Subtotal</span>
                        <span>Rs. {{ cart.totalPrice.toLocaleString() }}</span>
                     </div>
                     <div
                        class="flex justify-between text-[10px] font-bold text-stone-400 uppercase tracking-widest italic leading-relaxed">
                        <span>Delivery (Standard)</span>
                        <span>{{ paymentMethod === 'cod' ? 'Rs. 200' : 'FREE' }}</span>
                     </div>
                     <div class="h-[1px] bg-stone-100 dark:bg-stone-900 my-4"></div>
                     <div
                        class="flex justify-between text-lg font-playfair italic text-[var(--luxury-black)] dark:text-white">
                        <span>Grand Total</span>
                        <span class="text-[var(--primary-gold)] font-sans not-italic font-black">Rs. {{ (cart.totalPrice
                           + (paymentMethod === 'cod' ? 200 : 0)).toLocaleString() }}</span>
                     </div>
                  </div>

                  <div
                     class="mt-12 flex items-center gap-4 py-4 px-6 bg-stone-50 dark:bg-stone-900/10 border border-stone-100 dark:border-white/5 rounded-sm">
                     <font-awesome-icon icon="fa-solid fa-shield-halved" class="text-[var(--primary-gold)] text-sm" />
                     <p class="text-[8px] font-bold uppercase tracking-[0.3em] text-stone-400">Authentic Secure Checkout
                     </p>
                  </div>
               </div>

               <div class="bg-[var(--primary-gold)]/5 border border-[var(--primary-gold)]/10 p-10 text-center">
                  <p class="text-[8px] font-black text-[var(--primary-gold)] uppercase tracking-[0.5em] mb-4">MEMBER
                     EXCLUSIVE</p>
                  <p class="text-[10px] font-playfair italic text-stone-500">Free nationwide shipping on orders over
                     <br> Rs. 5000 (Non-COD)
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
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

const customer = reactive({
   name: auth.user?.name || '',
   email: auth.user?.email || '',
   address: '',
   city: '',
   zip: ''
})

const processPayment = async () => {
   if (!customer.name || !customer.email || !customer.address || !customer.city) {
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
         totalAmount: cart.totalPrice + (paymentMethod.value === 'cod' ? 200 : 0),
         shippingAddress: {
            fullName: customer.name,
            address: customer.address,
            city: customer.city,
            zipCode: customer.zip,
            phone: '', // Can be added later
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

      success.value = true
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
   }
})
</script>

<style scoped>
.mariab-input {
   background: transparent;
   border: none;
   border-bottom: 1px solid rgba(0, 0, 0, 0.05);
   padding: 18px 0;
   font-size: 13px;
   font-weight: 500;
   letter-spacing: 0.1em;
   outline: none;
   transition: all 0.5s ease;
   color: #1a1a1a;
}

.dark .mariab-input {
   color: white;
   border-bottom-color: rgba(255, 255, 255, 0.1);
}

.mariab-input:focus {
   border-bottom-color: var(--primary-gold);
   padding-left: 12px;
}

.mariab-input::placeholder {
   color: #ccc;
   font-weight: 300;
   font-size: 11px;
   letter-spacing: 0.2em;
}

.payment-card {
   padding: 30px;
   border: 1px solid #f0f0f0;
   cursor: pointer;
   transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
   background: white;
}

.dark .payment-card {
   background: #0A0A0A;
   border-color: #1a1a1a;
}

.payment-card.active {
   border-color: var(--primary-gold);
   background: rgba(184, 134, 11, 0.03);
}

.payment-card.inactive:hover {
   border-color: #ccc;
   transform: translateY(-4px);
}

.luxury-scroll::-webkit-scrollbar {
   width: 2px;
}

.luxury-scroll::-webkit-scrollbar-thumb {
   background: var(--primary-gold);
   opacity: 0.2;
}

.animate-reveal-left {
   animation: reveal-left 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

.animate-reveal-right {
   animation: reveal-right 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

@keyframes reveal-left {
   from {
      opacity: 0;
      transform: translateX(-30px);
   }

   to {
      opacity: 1;
      transform: translateX(0);
   }
}

@keyframes reveal-right {
   from {
      opacity: 0;
      transform: translateX(30px);
   }

   to {
      opacity: 1;
      transform: translateX(0);
   }
}

.font-playfair {
   font-family: 'Playfair Display', serif;
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
