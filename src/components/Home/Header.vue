<template>
  <header class="w-full" :class="{ 'header-scrolled': isScrolled }">
    <!-- Main Header -->
    <div class="main-header px-4 sm:px-8 lg:px-16 flex flex-col items-center transition-all duration-500"
      :class="isScrolled ? 'py-2 shadow-lg' : 'py-6'">
      <!-- Top Row: Actions Left, Logo Center, Actions Right -->
      <div class="w-full flex items-center justify-between">
        <!-- LEFT: Hamburger (mobile) + Search (desktop) -->
        <div class="flex items-center gap-4 flex-1">
          <button @click="isMenuOpen = !isMenuOpen" class="hamburger-btn flex flex-col lg:hidden shrink-0"
            aria-label="Menu">
            <span class="hamburger-line"
              :class="{ 'rotate-45 translate-y-[7px] bg-[var(--deep-burgundy)]': isMenuOpen, 'bg-[var(--luxury-black)]': !isMenuOpen }"></span>
            <span class="hamburger-line"
              :class="{ 'opacity-0 bg-[var(--deep-burgundy)]': isMenuOpen, 'bg-[var(--luxury-black)]': !isMenuOpen }"></span>
            <span class="hamburger-line"
              :class="{ '-rotate-45 -translate-y-[7px] bg-[var(--deep-burgundy)]': isMenuOpen, 'bg-[var(--luxury-black)]': !isMenuOpen }"></span>
          </button>

          <button @click="searchOpen = !searchOpen" class="icon-btn flex" aria-label="Search">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>

        <!-- CENTER: Logo -->
        <div class="flex-shrink-0 cursor-pointer flex flex-col items-center group px-2 sm:px-4" @click="goToHome">
          <div
            class="text-base sm:text-2xl lg:text-3xl font-playfair tracking-[0.15em] sm:tracking-[0.3em] font-light text-[var(--luxury-black)] dark:text-white uppercase leading-tight">
            AHMADCLOTHS HOUSE</div>
          <div
            class="logo-tagline font-playfair tracking-[0.4em] mt-1 text-[7px] opacity-60 uppercase text-[var(--primary-gold)] hidden sm:block">
            The House of Couture</div>
        </div>

        <!-- RIGHT: Actions -->
        <div class="flex items-center gap-2 sm:gap-5 flex-1 justify-end">
          <!-- Theme & Auth Actions (Desktop Only Group) -->
          <div class="hidden sm:flex items-center gap-2 sm:gap-5">
            <!-- Theme Toggle -->
            <button @click="themeStore.toggleTheme" class="icon-btn" aria-label="Toggle Theme">
              <font-awesome-icon :icon="themeStore.isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" />
            </button>

            <!-- Favorites -->
            <button v-if="auth.isAuthenticated && !auth.isAdmin" class="icon-btn relative"
              @click="router.push('/dashboard')" aria-label="Favorites">
              <font-awesome-icon icon="fa-regular fa-heart" />
              <span v-if="favorites.totalFavorites > 0" class="badge">{{ favorites.totalFavorites }}</span>
            </button>

            <!-- Cart -->
            <button v-if="auth.isAuthenticated && !auth.isAdmin" class="icon-btn relative"
              @click="router.push('/cart')" aria-label="Cart">
              <font-awesome-icon icon="fa-solid fa-bag-shopping" />
              <span v-if="cart.totalItems > 0" class="badge">{{ cart.totalItems }}</span>
            </button>
          </div>

          <!-- Google Translate (Always Show) - Bulletproof Container -->
          <div id="google_translate_element" class="flex items-center min-w-[30px] sm:min-w-[160px] min-h-[30px] scale-[0.7] sm:scale-90 mx-1 transition-all duration-500"></div>

          <!-- User Account Actions -->
          <template v-if="auth.isAuthenticated">
            <!-- User (Desktop Dropdown) -->
            <div class="relative group hidden lg:block">
              <button class="luxury-action-btn flex items-center gap-3">
                <font-awesome-icon icon="fa-solid fa-user" class="text-[10px]" />
                <span class="text-[10px] font-black uppercase tracking-widest">ACCOUNT</span>
              </button>
              <div class="dropdown-menu right-0 w-64">
                <div class="px-5 py-4 border-b border-black/5">
                  <p class="text-[9px] uppercase tracking-widest opacity-50 mb-1">Signed in as</p>
                  <p class="text-xs font-semibold truncate text-[var(--luxury-black)]">{{ auth.user?.email }}</p>
                </div>
                <div class="p-2">
                  <router-link v-if="auth.isAdmin" to="/admin/dashboard" class="dropdown-item">
                    Admin Dashboard
                  </router-link>
                  <router-link v-else to="/dashboard" class="dropdown-item">
                    My Account
                  </router-link>
                  <button @click="handleLogout" class="dropdown-item text-rose-600">
                    Sign Out
                  </button>
                </div>
              </div>
            </div>

            <!-- User Icon (Mobile) -->
            <div class="lg:hidden">
              <button @click="isMenuOpen = true" class="icon-btn" aria-label="Account">
                <font-awesome-icon icon="fa-solid fa-user" />
              </button>
            </div>
          </template>

          <div v-else class="hidden lg:flex items-center gap-3">
            <router-link to="/login" class="luxury-action-btn flex items-center gap-3 group">
              <font-awesome-icon icon="fa-solid fa-user" class="text-[10px] group-hover:text-amber-500 transition-colors" />
              <span class="text-[10px] font-black uppercase tracking-widest">LOGIN</span>
            </router-link>
            <router-link to="/signup" class="luxury-action-btn border-amber-500/20 hover:border-amber-500">
              <span class="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">JOIN HOUSE</span>
            </router-link>
          </div>

        </div>
      </div>

      <!-- Mobile Actions Row (Theme, Favorites, Cart, Login) - Below Logo -->
      <div class="flex sm:hidden w-full items-center justify-center gap-4 mt-4 4t-2 2der-t border-black/5 dark:border-white/5">
        <!-- Theme Toggle -->
        <button @click="themeStore.toggleTheme" class="icon-btn" aria-label="Toggle Theme">
          <font-awesome-icon :icon="themeStore.isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" />
        </button>

        <!-- Auth Action for Mobile (When not logged in) -->
        <template v-if="!auth.isAuthenticated">
          <router-link to="/login" class="luxury-action-btn py-2 px-6">
            <span class="text-[9px] font-black tracking-widest">LOGIN</span>
          </router-link>
          <router-link to="/signup" class="luxury-action-btn py-2 px-6 border-amber-500/20">
            <span class="text-[9px] font-black tracking-widest text-[#d4af37]">JOIN</span>
          </router-link>
        </template>

        <!-- Auth Action for Mobile (When LOGGED IN) -->
        <template v-else>
          <router-link :to="auth.isAdmin ? '/admin/dashboard' : '/dashboard'" class="luxury-action-btn py-2 px-6">
            <span class="text-[9px] font-black tracking-widest text-amber-500">ACCOUNT</span>
          </router-link>
          <button @click="handleLogout" class="luxury-action-btn py-2 px-6 border-rose-500/20">
            <span class="text-[9px] font-black tracking-widest text-rose-500">LOGOUT</span>
          </button>
        </template>

        <!-- Favorites -->
        <button v-if="auth.isAuthenticated && !auth.isAdmin" class="icon-btn relative"
          @click="router.push('/dashboard')" aria-label="Favorites">
          <font-awesome-icon icon="fa-regular fa-heart" />
          <span v-if="favorites.totalFavorites > 0" class="badge">{{ favorites.totalFavorites }}</span>
        </button>

        <!-- Cart -->
        <button v-if="auth.isAuthenticated && !auth.isAdmin" class="icon-btn relative"
          @click="router.push('/cart')" aria-label="Cart">
          <font-awesome-icon icon="fa-solid fa-bag-shopping" />
          <span v-if="cart.totalItems > 0" class="badge">{{ cart.totalItems }}</span>
        </button>
      </div>

      <!-- Bottom Row: Navigation (Desktop Only) -->
      <nav class="hidden lg:flex items-center gap-12 mt-6 w-full justify-center border-t border-black/5 pt-4">
        <div v-for="item in navItems" :key="item.name" class="relative group/nav">
          <router-link :to="item.path" class="nav-link-premium">
            {{ item.name }}
          </router-link>
          
          <!-- Category Dropdown (Mega Menu) -->
          <div v-if="item.products && item.products.length > 0" 
            class="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/5 shadow-2xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-500 z-[110] p-8 grid grid-cols-2 gap-8">
            <div class="space-y-4">
              <h3 class="text-[9px] font-black text-[var(--primary-gold)] uppercase tracking-[0.4em] mb-6">Signature Pieces</h3>
              <div v-for="p in item.products.slice(0, 4)" :key="p.id" 
                @click="goToLiveProduct(p)"
                class="flex items-center gap-4 p-3 hover:bg-stone-50 dark:hover:bg-white/5 cursor-pointer transition-all group/item">
                <div class="w-12 h-14 bg-stone-100 dark:bg-stone-900 border border-black/5 shrink-0 overflow-hidden">
                  <img :src="p.image" class="w-full h-full object-cover transition-all duration-700" />
                </div>
                <div>
                  <p class="text-[10px] font-bold uppercase tracking-widest text-[var(--luxury-black)] dark:text-white line-clamp-1">{{ p.name }}</p>
                  <p class="text-[9px] font-medium text-[var(--primary-gold)]">Rs. {{ p.price.toLocaleString() }}</p>
                </div>
              </div>
            </div>
            <div class="bg-stone-50 dark:bg-stone-900/40 p-6 flex flex-col justify-center text-center space-y-4">
              <p class="text-[8px] font-black text-stone-400 uppercase tracking-[0.4em]">The {{ item.name }} Collection</p>
              <h4 class="text-xl font-playfair italic text-[var(--luxury-black)] dark:text-white">Curated Luxury</h4>
              <p class="text-[10px] text-stone-500 italic leading-relaxed">Discover our most sought-after pieces from the signature {{ item.name }} archives.</p>
              <button @click="router.push(item.path)" class="mx-auto mt-4 px-8 py-3 bg-[var(--luxury-black)] dark:bg-white text-white dark:text-black text-[9px] font-bold uppercase tracking-widest hover:bg-[var(--primary-gold)] transition-colors">
                View All
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Search Bar Dropdown -->
    <transition name="search-drop">
      <div v-if="searchOpen" class="search-bar-container">
        <div class="max-w-4xl mx-auto px-6 py-10">
          <div class="flex items-center gap-4 mb-4 border-b border-black/10 dark:border-white/10 pb-4">
            <button @click="handleSearch" class="group/search p-2 hover:scale-110 transition-all duration-300">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass"
                class="text-[var(--primary-gold)] text-lg group-hover/search:text-amber-500 transition-colors" />
            </button>
            <input ref="searchInput" v-model="searchQuery" @keyup.enter="handleSearch" type="text"
              placeholder="Search unstitched, pret, bridal..."
              class="search-input flex-grow bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/30 outline-none text-xl font-light tracking-widest" />
            <button @click="searchOpen = false"
              class="text-gray-400 dark:text-white/40 hover:text-amber-500 transition-colors shrink-0 p-2">
              <font-awesome-icon icon="fa-solid fa-xmark" class="text-xl" />
            </button>
          </div>

          <!-- Live Results Architecture -->
          <div v-if="searchQuery.length > 1" class="mb-10 animate-reveal">
            <div class="flex items-center gap-2 mb-6">
              <span class="text-[8px] font-black tracking-[0.4em] text-[var(--primary-gold)]">LIVE RESULTS</span>
              <div class="h-[1px] flex-grow bg-[var(--primary-gold)]/10"></div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div v-for="p in liveResults" :key="p.id" @click="goToLiveProduct(p)"
                class="flex items-center gap-4 p-4 border border-black/[0.03] dark:border-white/[0.03] hover:border-[var(--primary-gold)]/30 cursor-pointer transition-all bg-stone-50 dark:bg-white/[0.02] group">
                <img :src="p.image" class="w-12 h-12 object-cover transition-all" />
                <div class="flex-grow">
                  <p class="text-[10px] font-black uppercase tracking-tighter dark:text-white line-clamp-1">{{ p.name }}
                  </p>
                  <p class="text-[8px] font-black text-[var(--primary-gold)] uppercase tracking-widest">Rs. {{
                    p.price.toLocaleString() }}</p>
                </div>
              </div>
              <div v-if="liveResults.length === 0"
                class="col-span-full py-4 text-[9px] font-black uppercase tracking-widest text-center text-stone-400 opacity-50 italic">
                No pieces match your search criteria...
              </div>
            </div>
          </div>

          <!-- Quick Filters -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 animate-reveal">
            <div>
              <h4 class="text-[9px] font-bold text-[var(--primary-gold)] uppercase tracking-[0.4em] mb-6">Quick
                Categories</h4>
              <div class="flex flex-wrap gap-3">
                <button v-for="cat in ['Unstitched', 'Pret', 'Bridal', 'M.Print']" :key="cat"
                  @click="searchQuery = cat; handleSearch()"
                  class="px-4 py-2 border border-white/10 text-[10px] text-white/60 uppercase tracking-widest hover:border-[var(--primary-gold)] hover:text-[var(--primary-gold)] transition-all">
                  {{ cat }}
                </button>
              </div>
            </div>
            <div>
              <h4 class="text-[9px] font-bold text-[var(--primary-gold)] uppercase tracking-[0.4em] mb-6">Price Range
              </h4>
              <div class="flex flex-wrap gap-3">
                <button v-for="price in ['Under 5k', '5k - 15k', '15k - 50k', 'Couture']" :key="price"
                  class="px-4 py-2 border border-white/10 text-[10px] text-white/60 uppercase tracking-widest hover:border-[var(--primary-gold)] hover:text-[var(--primary-gold)] transition-all">
                  {{ price }}
                </button>
              </div>
            </div>
            <div class="hidden md:block">
              <h4 class="text-[9px] font-bold text-[var(--primary-gold)] uppercase tracking-[0.4em] mb-6">Trending Now
              </h4>
              <p class="text-[11px] text-white/40 italic font-playfair leading-loose">
                Discover our latest "Heritage Collection" featuring artisanal hand-embroidery and premium fabrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Mobile Navigation Drawer -->
    <transition name="drawer">
      <div v-if="isMenuOpen" class="fixed inset-0 z-[20000] lg:hidden">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="isMenuOpen = false"></div>
        <div class="drawer-panel">
          <!-- Header -->
          <div class="flex items-center justify-between p-6 border-b border-white/5">
            <div class="flex flex-col items-center">
              <h1 class="text-lg font-playfair tracking-[0.2em] font-light text-white uppercase">AHMADCLOTHS</h1>
              <span class="text-[7px] tracking-[0.3em] text-[var(--primary-gold)] uppercase">House of Couture</span>
            </div>
            <button @click="isMenuOpen = false"
              class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </button>
          </div>

          <!-- Nav Links -->
          <nav class="flex-1 overflow-y-auto p-6 space-y-1">
            <router-link v-for="(item, i) in navItems" :key="item.name" :to="item.path" @click="isMenuOpen = false"
              class="mobile-nav-link group">
          
              <span class="flex-1 text-xs uppercase tracking-widest font-semibold">{{ item.name }}</span>
              <font-awesome-icon icon="fa-solid fa-arrow-right"
                class="text-[10px] opacity-0 group-hover:opacity-60 translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
            </router-link>

            <!-- Feature Banner -->
            <div class="feature-promo mt-6">
              <p class="text-[9px] uppercase tracking-[0.3em] text-[var(--primary-gold)] mb-2">Seasonal Specials</p>
              <h4 class="text-xl font-black leading-tight mb-4">HERITAGE<br>COLLECTION 2026</h4>
              <button @click="router.push('/shop'); isMenuOpen = false" class="promo-btn">
                Discover Now
              </button>
            </div>
          </nav>

          <!-- Footer -->
          <div class="p-6 border-t border-white/5">
            <div class="flex items-center justify-center gap-6 mb-8">
              <a href="https://www.instagram.com/ahmadclothfabrics_aroma/" target="_blank" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[var(--primary-gold)] hover:border-[var(--primary-gold)] transition-all">
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573629329844" target="_blank" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[var(--primary-gold)] hover:border-[var(--primary-gold)] transition-all">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
              </a>
            </div>

            <div v-if="auth.isAuthenticated" class="space-y-3">
              <div class="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                <div class="avatar">{{ auth.user?.name?.substring(0, 2).toUpperCase() || 'AH' }}</div>
                <div>
                  <p class="text-[9px] text-white/40 uppercase tracking-widest">Authenticated</p>
                  <p class="text-xs font-semibold">{{ auth.user?.name }}</p>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <router-link :to="auth.isAdmin ? '/admin/dashboard' : '/dashboard'" @click="isMenuOpen = false"
                  class="mobile-action-btn bg-amber-500/10 text-amber-400">
                  {{ auth.isAdmin ? 'Admin' : 'Dashboard' }}
                </router-link>
                <button @click="handleLogout" class="mobile-action-btn border border-rose-500/20 text-rose-400">
                  Sign Out
                </button>
              </div>
            </div>
            <div v-else>
              <router-link to="/login" @click="isMenuOpen = false"
                class="block text-center py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-xl shadow-lg shadow-amber-500/20 active:scale-95 transition-all">
                Enter the House
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useCartStore } from '../../stores/cart'
import { useFavoritesStore } from '../../stores/favorites'
import { useAuthStore } from '../../stores/auth'
import { useProductsStore } from '../../stores/products'
import { useThemeStore } from '../../stores/theme'
import { useRouter } from 'vue-router'
const Fugible = "https://loremflickr.com/200/80/fashion,logo?lock=1"
const cart = useCartStore()
const favorites = useFavoritesStore()
const auth = useAuthStore()
const productStore = useProductsStore()
const themeStore = useThemeStore()
const router = useRouter()

const isMenuOpen = ref(false)
const searchOpen = ref(false)
const searchQuery = ref('')
const isScrolled = ref(false)
const isMobile = ref(false)
const searchInput = ref(null)

watch(searchOpen, (isOpen) => {
  if (isOpen) {
    setTimeout(() => {
      searchInput.value?.focus()
    }, 100)
  }
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024
}

const initGoogleTranslate = (retryCount = 0) => {
  if (typeof google !== 'undefined' && google.translate && google.translate.TranslateElement) {
    const el = document.getElementById('google_translate_element')
    if (el && !el.innerHTML.trim()) {
      new google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      }, 'google_translate_element');
      return true;
    }
  }

  if (retryCount < 15) {
    setTimeout(() => initGoogleTranslate(retryCount + 1), 800);
  }
}

const loadTranslateScript = () => {
  if (!document.querySelector('script[src*="translate.google.com"]')) {
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);
  }
  
  // Set global callback as a fallback
  window.googleTranslateElementInit = () => initGoogleTranslate(0);
}

// Re-init when auth state changes
watch(() => auth.isAuthenticated, () => {
  setTimeout(() => initGoogleTranslate(0), 1000);
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', checkMobile)
  checkMobile()

  // Load and Init
  loadTranslateScript();
  initGoogleTranslate(0);
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', checkMobile)
})

const navItems = computed(() => {
  const items = [{ name: 'Home', path: '/', products: [] }]
  const categories = productStore.products.reduce((acc, p) => {
    if (p.parentCategory) acc.add(p.parentCategory)
    else if (p.category) acc.add(p.category)
    return acc
  }, new Set())

  // Create products by category map for dropdowns
  const productsByCategory = productStore.products.reduce((acc, p) => {
    const cat = p.parentCategory || p.category
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(p)
    return acc
  }, {})

  // Luxury Fashion Categories
  const order = ['Unstitched', 'Pret', 'Bridal', 'M.Print']
  order.forEach(catName => {
    if (categories.has(catName)) {
      items.push({ 
        name: catName, 
        path: `/shop/${catName}`,
        products: productsByCategory[catName] || []
      })
      categories.delete(catName)
    }
  })
  categories.forEach(catName => {
    if (!['Standard', 'Premium', 'Limited Edition'].includes(catName)) {
      items.push({ 
        name: catName, 
        path: `/shop/${catName}`,
        products: productsByCategory[catName] || []
      })
    }
  })
  items.push({ name: 'About Us', path: '/about', products: [] })
  items.push({ name: 'Contact Us', path: '/contact', products: [] })
  return items
})

watch(isMenuOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

const handleLogout = () => {
  auth.logout()
  router.push('/login')
  isMenuOpen.value = false
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/shop', query: { q: searchQuery.value.trim() } })
    searchQuery.value = ''
    searchOpen.value = false
  }
}

const goToLiveProduct = (p) => {
  router.push({ name: 'product-detail', params: { id: p.id || p._id } })
  searchOpen.value = false
  searchQuery.value = ''
}

const liveResults = computed(() => {
  if (searchQuery.value.length < 2) return []
  const q = searchQuery.value.toLowerCase()
  return productStore.products
    .filter(p => p.name.toLowerCase().includes(q) || (p.category && p.category.toLowerCase().includes(q)))
    .slice(0, 4)
})

const goToHome = () => router.push('/')
</script>

<style scoped>
/* Banner */
.luxury-banner {
  background: var(--deep-burgundy);
  color: white;
  font-family: 'Montserrat', sans-serif;
}

/* Main Header */
.main-header {
  background: var(--luxury-cream);
  color: var(--luxury-black);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: sticky;
  top: 0;
  z-index: 10000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.dark .main-header {
  background: #0A0A0A;
  color: #F5F5F5;
  border-bottom-color: rgba(255, 255, 255, 0.05);
}

.header-scrolled {
  transform: translateY(-5px);
}

/* Logo */
.logo-tagline {
  font-size: 8px;
  color: var(--primary-gold);
  text-transform: uppercase;
}

/* Nav Links */
.nav-link-premium {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--luxury-black);
  position: relative;
  padding: 4px 0;
  transition: color 0.3s ease;
  text-decoration: none;
}

.dark .nav-link-premium {
  color: #F5F5F5;
}

.nav-link-premium::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 1px;
  background: var(--deep-burgundy);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link-premium:hover::after,
.nav-link-premium.router-link-active::after {
  width: 100%;
}

.nav-link-premium:hover {
  color: var(--deep-burgundy);
}

/* Icon Buttons */
.icon-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--luxury-black);
  transition: all 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
}

.luxury-action-btn {
  padding: 10px 24px;
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 100px;
  color: #d4af37;
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  text-decoration: none;
  background: rgba(212, 175, 55, 0.03);
}

.luxury-action-btn:hover {
  background: #d4af37;
  color: black;
  border-color: #d4af37;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.dark .icon-btn {
  color: #F5F5F5;
}

.icon-btn:hover {
  color: var(--primary-gold);
  transform: translateY(-2px);
}

.badge {
  position: absolute;
  top: 5px;
  right: 5px;
  background: var(--deep-burgundy);
  color: white;
  font-size: 8px;
  font-weight: 700;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

/* Dropdown */
.dropdown-menu {
  position: absolute;
  top: 100%;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 100;
}

.dark .dropdown-menu {
  background: #1A1A1A;
  border-color: rgba(255, 255, 255, 0.05);
}

.group:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: block;
  padding: 12px 20px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--luxury-black);
  transition: all 0.2s ease;
  text-decoration: none;
}

.dark .dropdown-item {
  color: #F5F5F5;
}

.dropdown-item:hover {
  background: var(--luxury-cream);
  color: var(--deep-burgundy);
}

/* Hamburger */
.hamburger-line {
  height: 1.5px;
  width: 24px;
  margin: 3px 0;
  transition: all 0.3s ease;
}

/* Search Bar */
.search-bar-container {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 99;
}

.dark .search-bar-container {
  background: #1A1A1A;
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  padding: 15px 0;
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  color: var(--luxury-black);
  outline: none;
}

.dark .search-input {
  color: white;
}

/* Mobile Drawer */
.drawer-panel {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 85%;
  max-width: 360px;
  background: #050505;
  border-right: 1px solid rgba(212, 175, 55, 0.1);
  display: flex;
  flex-direction: column;
  color: white;
  overflow: hidden;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-radius: 10px;
  border: 1px solid transparent;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.65);
  transition: all 0.25s ease;
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  background: rgba(212, 175, 55, 0.05);
  border-color: rgba(212, 175, 55, 0.1);
  color: #d4af37;
}

.feature-promo {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.05));
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 16px;
  padding: 24px;
  color: white;
}

.promo-btn {
  padding: 10px 20px;
  background: linear-gradient(135deg, #d4af37, #f5e17a);
  color: #0a0a0a;
  border-radius: 40px;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: all 0.25s ease;
}

.promo-btn:hover {
  transform: scale(1.02);
}

.mobile-action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 10px;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.25s ease;
  cursor: pointer;
  background: none;
  border: none;
}

/* Transitions */
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  display: inline-block;
  animation: marquee 15s linear infinite;
}

.search-drop-enter-active,
.search-drop-leave-active {
  transition: all 0.3s ease;
}

.search-drop-enter-from,
.search-drop-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.drawer-enter-from .drawer-panel,
.drawer-leave-to .drawer-panel {
  transform: translateX(-100%);
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

::-webkit-scrollbar {
  width: 3px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(212, 175, 55, 0.2);
  border-radius: 10px;
}
</style>