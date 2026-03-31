<template>
  <div
    class="min-h-screen bg-[#fafaf8] dark:bg-[#050505] transition-colors duration-700 font-sans selection:bg-amber-500/30 flex relative overflow-x-hidden">

    <!-- Sidebar -->
    <aside :class="isMobileMenuOpen ? 'translate-x-0 shadow-2xl shadow-black/50' : '-translate-x-full lg:translate-x-0'"
      class="fixed left-0 top-0 h-screen w-72 bg-white dark:bg-[#080808] border-r border-[#d4af371a] z-[60] transition-transform duration-700 ease-in-out p-10 flex flex-col shrink-0 overflow-y-auto scrollbar-none">
      <div class="mb-16">
        <h1
          class="text-xl font-playfair tracking-[0.2em] font-light text-[var(--luxury-black)] dark:text-white uppercase cursor-pointer"
          @click="router.push('/')">AHMADCLOTHS</h1>
        <p
          class="text-[8px] font-bold text-stone-400 uppercase tracking-[0.4em] mt-4 border-l border-[var(--primary-gold)]/40 pl-3">
          BOUTIQUE CONSOLE_V3</p>
      </div>

      <nav class="flex flex-col gap-3 flex-grow overflow-y-auto scrollbar-none">
        <button v-for="link in navLinks" :key="link.id" @click="currentTab = link.id; isMobileMenuOpen = false"
          :class="currentTab === link.id
            ? 'text-black dark:text-white bg-[var(--primary-gold)]/5 border-[var(--primary-gold)]/20'
            : 'text-gray-400 dark:text-stone-600 hover:text-[var(--primary-gold)] dark:hover:text-[var(--primary-gold)] border-transparent'"
          class="flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.2em] p-4 rounded-xl transition-all duration-500 border group">
          <font-awesome-icon :icon="link.icon" class="text-xs transition-transform group-hover:scale-110" />
          {{ link.name }}
          <div v-if="currentTab === link.id"
            class="ml-auto w-1 h-1 rounded-full bg-[var(--primary-gold)] shadow-[0_0_10px_rgba(184,134,11,0.5)]"></div>
        </button>
      </nav>

      <div class="mt-auto pt-10 border-t border-[#d4af371a]">
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-900 border border-[#d4af371a] flex items-center justify-center text-[10px] font-bold text-[var(--primary-gold)] uppercase tracking-widest">
            AH
          </div>
          <div class="flex flex-col">
            <span class="text-[8px] font-bold uppercase tracking-widest text-[var(--primary-gold)] mb-0.5">HEAD
              DESIGNER</span>
            <span class="text-xs font-bold text-gray-900 dark:text-white">{{ auth.user?.name || 'Director' }}</span>
          </div>
        </div>

        <button @click="handleLogout"
          class="w-full py-4 text-[9px] font-bold uppercase tracking-[0.4em] text-red-800/60 dark:text-red-400/40 hover:text-red-600 dark:hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl transition-all duration-500">
          End Session
        </button>
      </div>
    </aside>

    <!-- Mobile Backdrop -->
    <div v-if="isMobileMenuOpen"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-500"
      @click="isMobileMenuOpen = false"></div>

    <!-- Main Content -->
    <div class="flex-grow flex flex-col min-h-screen overflow-x-hidden relative lg:ml-72 transition-all duration-700">
      <!-- Background Decorative Element -->
      <div
        class="absolute -top-24 -right-24 w-96 h-96 bg-[var(--primary-gold)]/5 blur-[120px] rounded-full pointer-events-none">
      </div>

      <!-- Mobile Header -->
      <header
        class="lg:hidden h-20 bg-white dark:bg-[#080808] border-b border-[#d4af371a] px-8 flex justify-between items-center z-40 shrink-0">
        <h1
          class="text-lg font-playfair tracking-[0.2em] font-light text-[var(--luxury-black)] dark:text-white uppercase cursor-pointer"
          @click="router.push('/')">AHMADCLOTHS</h1>
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="p-2 text-stone-400">
          <font-awesome-icon :icon="isMobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" />
        </button>
      </header>

      <!-- Scrollable Main Content -->
      <main class="flex-grow overflow-y-auto p-6 md:p-12 lg:p-20 scroll-smooth relative">
        <div class="max-w-7xl mx-auto">
          <header class="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div>
              <div class="flex items-center gap-4 mb-4">
                <div class="h-[1px] w-12 bg-[var(--primary-gold)]/40"></div>
                <span class="text-[9px] font-bold uppercase tracking-[0.4em] text-[var(--primary-gold)]/80">{{ todayDate
                  }}</span>
              </div>
              <h1
                class="text-4xl md:text-5xl font-light uppercase tracking-tighter text-gray-900 dark:text-white font-playfair italic">
                {{ currentTabTitleParts.main }} <span
                  class="text-[var(--primary-gold)] font-sans tracking-widest font-light ml-4 uppercase">{{
                  currentTabTitleParts.accent }}</span>
              </h1>
            </div>

            <div class="flex items-center gap-6">
              <div v-if="currentTab === 'overview'" class="flex gap-2">
                <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span class="text-[8px] font-bold uppercase tracking-widest text-emerald-500">Boutique Online</span>
              </div>
            </div>
          </header>

          <div v-if="currentTab === 'overview'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <StatCard label="GROSS REVENUE" :value="`Rs. ${dynamicStats.revenue.toLocaleString()}`"
              icon="fa-solid fa-gem" :trend="14" />
            <StatCard label="NET PROFITS" :value="`Rs. ${dynamicStats.profit.toLocaleString()}`"
              icon="fa-solid fa-building-columns" :trend="8" color-class="bg-emerald-500/10 text-emerald-500" />
            <StatCard label="PRODUCT VIEWS" :value="dynamicStats.clicks" icon="fa-solid fa-eye" :trend="22"
              color-class="bg-[var(--primary-gold)]/10 text-[var(--primary-gold)]" />
            <StatCard label="TOTAL SALES" :value="dynamicStats.sales" icon="fa-solid fa-bag-shopping" :trend="-2"
              color-class="bg-rose-500/10 text-rose-500" />
          </div>

          <transition name="fade-slide" mode="out-in">
            <div :key="currentTab" class="relative">
              <component :is="currentTabComponent" v-bind="currentTabProps" v-on="currentTabEvents"
                class="admin-tab-reveal" />
            </div>
          </transition>

          <div v-if="!currentTabComponent"
            class="h-[40vh] border border-dashed border-[#d4af3722] rounded-3xl flex flex-col items-center justify-center text-center p-12 mt-12">
            <font-awesome-icon icon="fa-solid fa-lock" class="text-3xl text-[var(--primary-gold)]/20 mb-6" />
            <h3
              class="text-xl font-light uppercase tracking-widest text-stone-300 dark:text-stone-700 italic font-playfair">
              Restricted Area</h3>
            <p class="text-[9px] text-stone-400 font-bold mt-4 uppercase tracking-[0.3em] max-w-xs leading-loose">Access
              to the {{ currentTabTitle }} requires higher administrative authorization.</p>
          </div>
        </div>
      </main>
    </div>

    <!-- Global Loading -->
    <transition name="fade">
      <div v-if="productStore.loading"
        class="fixed inset-0 bg-[#050505]/80 backdrop-blur-xl z-[100] flex items-center justify-center">
        <div class="flex flex-col items-center gap-10">
          <div class="relative w-24 h-24">
            <div class="absolute inset-0 border-[1px] border-[var(--primary-gold)]/20 rounded-full"></div>
            <div class="absolute inset-0 border-t-[1px] border-[var(--primary-gold)] rounded-full animate-spin"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-[8px] font-bold text-[var(--primary-gold)] tracking-[0.4em]">A. C.</span>
            </div>
          </div>
          <p class="text-[9px] font-bold uppercase tracking-[0.5em] text-white/40">Preparing Boutique Dashboard</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, markRaw, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'
const Fugible = "https://loremflickr.com/200/80/fashion,logo?lock=1"
import { useProductsStore } from '../../stores/products'
import { useOrdersStore } from '../../stores/orders'

// Sub-components
import StatCard from './StatCard.vue'
import DashboardOverview from './DashboardOverview.vue'
import TransactionalFlow from './TransactionalFlow.vue'
import SecuritySystem from './SecuritySystem.vue'
import ProductForm from './ProductForm.vue'
import CategoryBrowser from './CategoryBrowser.vue'
import IdentityTable from './IdentityTable.vue'

const router = useRouter()
const auth = useAuthStore()
const productStore = useProductsStore()
const orderStore = useOrdersStore()

const currentTab = ref('overview')
const isMobileMenuOpen = ref(false)

watch(isMobileMenuOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

const todayDate = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }).toUpperCase()

const editingProduct = ref(null)
const userSearchQuery = ref('')
const userCurrentPage = ref(1)
const usersPerPage = 5

const productForm = ref({
  separateName: '',
  title: '',
  iconClass: '',
  parentCategory: '',
  newCategoryName: '',
  category: '',
  nature: 'standard',
  price: null,
  originalPrice: null,
  discount: null,
  costPrice: null,
  filterImage: null,
  filterImagePreview: null,
  variants: []
})

const editForm = ref({ name: '', email: '', role: 'user' })
const editingUser = ref(null)

const navLinks = [
  { id: 'overview', name: 'BOUTIQUE ANALYTICS', icon: ['fas', 'chart-line'] },
  { id: 'sales', name: 'ORDER LOGS', icon: ['fas', 'clipboard-list'] },
  { id: 'products', name: 'CREATE DESIGN', icon: ['fas', 'scissors'] },
  { id: 'catalog', name: 'FASHION CATALOG', icon: ['fas', 'shop'] },
  { id: 'customers', name: 'CLIENT REGISTRY', icon: ['fas', 'user-tie'] },
  { id: 'security', name: 'SYSTEM SECURITY', icon: ['fas', 'shield-halved'] }
]

const currentTabTitle = computed(() => {
  return navLinks.find(l => l.id === currentTab.value)?.name || 'Dashboard'
})

const currentTabTitleParts = computed(() => {
  const full = currentTabTitle.value
  const parts = full.split(' ')
  return {
    main: parts[0],
    accent: parts.slice(1).join(' ')
  }
})

// Dynamic Component Resolution
const currentTabComponent = computed(() => {
  const map = {
    overview: markRaw(DashboardOverview),
    sales: markRaw(TransactionalFlow),
    security: markRaw(SecuritySystem),
    products: markRaw(ProductForm),
    catalog: markRaw(CategoryBrowser),
    customers: markRaw(IdentityTable)
  }
  return map[currentTab.value]
})

// Dynamic Props
const currentTabProps = computed(() => {
  if (currentTab.value === 'overview') {
    return { stats: dynamicStats.value, transactions: transactions.value }
  }
  if (currentTab.value === 'sales') {
     return { 
       transactions: transactions.value,
       'update-status': async (id, status) => {
         await orderStore.updateOrderStatus(id, status)
       },
       'update-tracking': async (id, tracking) => {
         await orderStore.updateOrderTracking(id, tracking)
       },
       refresh: () => orderStore.fetchAllOrders()
     }
  }
  if (currentTab.value === 'security') {
    return { admins: auth.users.filter(u => u.role === 'admin') }
  }
  if (currentTab.value === 'products') {
    return {
      form: productForm.value,
      editingProduct: editingProduct.value,
      error: productStore.error,
      loading: productStore.loading,
      navCategories: allNavCategories.value,
      subCategories: availableSubCategories.value
    }
  }
  if (currentTab.value === 'catalog') {
    return {
      products: adminCategoryProducts.value,
      navCategories: allNavCategories.value,
      isDynamic: (id) => typeof id === 'string' && id.length > 5
    }
  }
  if (currentTab.value === 'customers') {
    return {
      users: auth.users,
      items: paginatedUsers.value,
      loading: auth.loading,
      editingUser: editingUser.value,
      editForm: editForm.value,
      currentPage: userCurrentPage.value,
      totalPages: totalUserPages.value,
      currentUserId: auth.user?.id,
      searchQuery: userSearchQuery.value
    }
  }
  return {}
})

// Dynamic Events
const currentTabEvents = computed(() => {
  if (currentTab.value === 'security') {
    return {
      revoke: async (id) => {
        await auth.updateExternalUser(id, { role: 'user' })
      }
    }
  }
  if (currentTab.value === 'products') {
    return {
      submit: submitProduct,
      cancel: cancelEditProduct,
      'file-upload': handleFileUpload,
      'variant-file-upload': handleVariantFileUpload,
      'add-variant': addVariant,
      'remove-variant': removeVariant,
      'clear-error': () => productStore.error = null
    }
  }
  if (currentTab.value === 'catalog') {
    return {
      'update:selectedCategory': (val) => adminSelectedCategory.value = val,
      edit: startEditProduct,
      delete: confirmDeleteProduct
    }
  }
  if (currentTab.value === 'customers') {
    return {
      'update:searchQuery': (val) => userSearchQuery.value = val,
      edit: startUserEdit,
      delete: deleteIdentity,
      save: saveUserEdit,
      cancel: () => editingUser.value = null,
      'prev-page': () => userCurrentPage.value--,
      'next-page': () => userCurrentPage.value++
    }
  }
  return {}
})

// Business Logic
const dynamicStats = computed(() => {
  const products = productStore.products
  const orders = orderStore.orders
  
  // Calculate from completed/confirmed orders
  const paidOrders = orders.filter(o => o.paymentStatus === 'Completed' || o.paymentStatus === 'Paid' || o.status !== 'Cancelled')
  const totalRevenue = paidOrders.reduce((sum, o) => sum + (o.totalAmount || 0), 0)
  
  // Estimate costs (assuming 30% margin if costPrice not set)
  const totalCost = paidOrders.reduce((sum, o) => {
    return sum + (o.items || []).reduce((iSum, item) => {
      // Find product to get cost
      const prod = products.find(p => (p._id || p.id) === item.product)
      const cost = prod?.costPrice || (item.price * 0.7) // Default to 70% cost
      return iSum + (cost * item.quantity)
    }, 0)
  }, 0)

  const totalProfit = totalRevenue - totalCost
  const totalClicks = products.reduce((sum, p) => sum + (p.views || 0), 0)
  const totalSales = paidOrders.length

  return {
    revenue: totalRevenue || 0,
    profit: totalProfit || 0,
    clicks: totalClicks || 0,
    sales: totalSales || 0
  }
})

const transactions = computed(() => {
  return orderStore.orders.map(o => ({
    id: o._id || o.id,
    user: o.user?.name || 'Client',
    amount: o.totalAmount || 0,
    status: o.status || 'Pending',
    trackingNumber: o.tracking?.trackingNumber || '',
    carrier: o.tracking?.carrier || '',
    icon: (o.items && o.items[0]) ? 'fa-solid fa-shirt' : 'fa-solid fa-box'
  }))
})

const allNavCategories = computed(() => ['Unstitched', 'Bridal', 'Pret'])
const subCategoryMap = {
  'Unstitched': ['Lawn', 'Silk', 'Chiffon'],
  'Bridal': ['Lehenga', 'Gharara', 'Maxi'],
  'Pret': ['Kurta', 'Trousers', 'Dupatta']
}
const availableSubCategories = computed(() => subCategoryMap[productForm.value.parentCategory] || [])

const handleFileUpload = (e, field) => {
  const file = e.target.files[0]
  if (file) {
    productForm.value[field] = file
    productForm.value[field + 'Preview'] = URL.createObjectURL(file)
  }
}

const handleVariantFileUpload = (e, idx) => {
  const file = e.target.files[0]
  if (file) {
    productForm.value.variants[idx].imageFile = file
    productForm.value.variants[idx].imagePreview = URL.createObjectURL(file)
  }
}

const addVariant = () => productForm.value.variants.push({ size: '', color: '', imageFile: null, imagePreview: null })
const removeVariant = (idx) => productForm.value.variants.splice(idx, 1)

const submitProduct = async () => {
  try {
    const payload = {
      title: productForm.value.title,
      price: productForm.value.price,
      originalPrice: productForm.value.originalPrice,
      discount: productForm.value.discount,
      costPrice: productForm.value.costPrice,
      nature: productForm.value.nature,
      parentCategory: productForm.value.parentCategory === '__new__' ? productForm.value.newCategoryName : productForm.value.parentCategory,
      category: productForm.value.category || (productForm.value.parentCategory === '__new__' ? productForm.value.newCategoryName : productForm.value.parentCategory),
      iconClass: productForm.value.iconClass,
      separateName: productForm.value.separateName,
      variants: [],
      imageUrl: productForm.value.filterImagePreview,
      filterImageUrl: productForm.value.filterImagePreview
    }

    if (productForm.value.filterImage) {
      const uploadedUrl = await productStore.uploadImage(productForm.value.filterImage)
      if (uploadedUrl) {
        payload.imageUrl = uploadedUrl
        payload.filterImageUrl = uploadedUrl
      }
    }

    for (const v of productForm.value.variants) {
      let variantImage = v.imagePreview || payload.imageUrl || 'https://via.placeholder.com/150'

      if (v.imageFile) {
        const uploadedUrl = await productStore.uploadImage(v.imageFile)
        if (uploadedUrl) {
          variantImage = uploadedUrl
        }
      }

      payload.variants.push({
        size: v.size,
        color: v.color,
        image: variantImage
      })
    }

    if (editingProduct.value) await productStore.updateProduct(editingProduct.value._id, payload)
    else await productStore.addProduct(payload)

    cancelEditProduct()
  } catch (err) { console.error(err) }
}

const adminSelectedCategory = ref('')
const adminCategoryProducts = computed(() => {
  if (!adminSelectedCategory.value) return productStore.products
  return productStore.products.filter(p => p.parentCategory === adminSelectedCategory.value)
})

const startEditProduct = async (p) => {
  editingProduct.value = p
  currentTab.value = 'products'

  // Ensure we have full details including variants
  if (!p.variants || p.variants.length === 0) {
    const fullProduct = await productStore.fetchProductById(p._id || p.id)
    if (fullProduct) {
      p = fullProduct
      editingProduct.value = p
    }
  }

  productForm.value = {
    title: p.name,
    parentCategory: p.parentCategory,
    category: p.category,
    price: p.price,
    originalPrice: p.originalPrice || null,
    discount: p.discount || null,
    costPrice: p.costPrice || 0,
    nature: p.nature || 'standard',
    separateName: p.separateName || '',
    iconClass: p.icon || '',
    variants: (p.variants || []).map(v => ({
      size: v.size,
      color: v.color,
      imagePreview: v.image,
      imageFile: null
    })),
    filterImagePreview: p.image
  }
}

const confirmDeleteProduct = async (p) => {
  if (confirm(`Are you sure you want to remove ${p.name} from the catalog?`)) {
    await productStore.removeProduct(p._id || p.id)
  }
}

const cancelEditProduct = () => {
  editingProduct.value = null
  productForm.value = { separateName: '', title: '', iconClass: '', parentCategory: '', newCategoryName: '', category: '', nature: 'standard', price: null, originalPrice: null, discount: null, costPrice: null, filterImage: null, filterImagePreview: null, variants: [] }
  currentTab.value = 'catalog'
}

// User Logic
const filteredUsers = computed(() => {
  const q = userSearchQuery.value.toLowerCase()
  return auth.users.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q))
})
const totalUserPages = computed(() => Math.ceil(filteredUsers.value.length / usersPerPage))
const paginatedUsers = computed(() => {
  const start = (userCurrentPage.value - 1) * usersPerPage
  return filteredUsers.value.slice(start, start + usersPerPage)
})

const startUserEdit = (u) => { editingUser.value = u._id; editForm.value = { name: u.name, email: u.email, role: u.role } }
const saveUserEdit = async (id) => { await auth.updateExternalUser(id, editForm.value); editingUser.value = null }
const deleteIdentity = async (id) => { await auth.deleteExternalUser(id) }

const handleLogout = async () => { if (confirm('Log out of the Bakery Console?')) { await auth.logout(); router.push('/login') } }

onMounted(() => { 
  if (auth.users.length === 0) auth.fetchUsers() 
  orderStore.fetchAllOrders()
  productStore.fetchProducts()
})
watch(userSearchQuery, () => userCurrentPage.value = 1)
</script>

<style scoped>
.admin-tab-reveal {
  animation: tab-reveal 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

@keyframes tab-reveal {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

/* Sub-component Style Neutralization */
:deep(.bg-gray-50) {
  background: transparent !important;
}

:deep(.rounded-3xl) {
  border-radius: 1rem !important;
}

:deep(.border-gray-100) {
  border-color: #d4af3711 !important;
}

:deep(.shadow-sm) {
  box-shadow: none !important;
}
</style>