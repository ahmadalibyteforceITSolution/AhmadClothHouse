<template>
  <header class="site-header w-full sticky top-0 z-[9999]" :class="{ 'header-scrolled': isScrolled }">

    <!-- ══════════ TIER 1 — Luxury Promo Marquee ══════════ -->
    <div class="announcement-bar">
      <div class="marquee-track flex whitespace-nowrap">
        <span class="marquee-inner">
          <span class="ann-text mx-16">✦ NEW COLLECTION 2026 — ARTISANAL COUTURE NOW AVAILABLE ✦</span>
          <span class="ann-text mx-16">🌍 WORLDWIDE SHIPPING ON ALL ORDERS ABOVE RS. 15,000 🌍</span>
          <span class="ann-text mx-16">✦ BESPOKE BRIDAL CONSULTATIONS — BOOK YOUR APPOINTMENT ✦</span>
          <span class="ann-text mx-16">🌍 WORLDWIDE SHIPPING ON ALL ORDERS ABOVE RS. 15,000 🌍</span>
        </span>
      </div>
    </div>

    <!-- ══════════ TIER 2 — Maria B Black Top Bar ══════════ -->
    <div class="bg-black text-stone-300 px-6 lg:px-14 py-1.5 text-[9px] font-bold tracking-[0.2em] uppercase flex items-center justify-between border-b border-stone-800">
      <!-- Left: Order Tracking & Store Locations -->
      <div class="flex items-center gap-4">
        <router-link to="/contact" class="hover:text-white transition-colors">ORDER TRACKING</router-link>
        <span class="text-stone-700">|</span>
        <router-link to="/contact" class="hover:text-white transition-colors">STORE LOCATIONS</router-link>
      </div>

      <!-- Right: Social Links -->
      <div class="hidden sm:flex items-center gap-4">
        <a href="https://www.instagram.com/ahmadclothfabrics_aroma/" target="_blank" rel="noopener" class="hover:text-white transition-colors">INSTAGRAM</a>
        <span class="text-stone-700">|</span>
        <a href="https://www.facebook.com/profile.php?id=61573629329844" target="_blank" rel="noopener" class="hover:text-white transition-colors">FACEBOOK</a>
        <span class="text-stone-700">|</span>
        <a href="https://www.youtube.com/@ahmadClothesfabrics_aroma" target="_blank" rel="noopener" class="hover:text-white transition-colors">YOUTUBE</a>
      </div>
    </div>

    <!-- ══════════ TIER 3 — Maria B Cream Main Header ══════════ -->
    <div class="main-header px-6 lg:px-14 py-0 transition-all duration-500"
      :class="isScrolled ? 'bg-[#F6F5EE]/98 dark:bg-[#0d0d0d]/98 backdrop-blur-md shadow-md border-b border-stone-200/80 dark:border-white/5' : 'bg-[#F6F5EE] dark:bg-[#0d0d0d] border-b border-stone-200/40 dark:border-white/5'">

      <div class="flex items-center justify-between h-[68px]">

        <!-- LEFT: Hamburger Menu & Search Icon -->
        <div class="flex items-center gap-4 w-[200px]">
          <button @click="isMenuOpen = !isMenuOpen" class="text-stone-800 dark:text-white text-lg hover:text-stone-600 cursor-pointer transition-colors duration-300" aria-label="Menu">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </button>
          <button @click="searchOpen ? handleSearch() : (searchOpen = true)" class="text-stone-800 dark:text-white text-lg hover:text-stone-600 cursor-pointer" aria-label="Search">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>

        <!-- CENTER: Maria B Tracked Logo -->
        <div class="flex-1 flex justify-center items-center cursor-pointer" @click="goToHome">
          <div class="text-center">
            <h1 class="text-[11px] sm:text-sm lg:text-base font-extrabold tracking-[0.15em] sm:tracking-[0.25em] lg:tracking-[0.35em] uppercase whitespace-nowrap transition-colors duration-300 text-[#203220] dark:text-white">
              AHMAD CLOTH HOUSE
            </h1>
          </div>
        </div>

        <!-- RIGHT: Wishlist, User Account, Shopping Bag -->
        <div class="flex items-center gap-5 w-[200px] justify-end transition-colors duration-300" :class="isScrolled ? 'text-stone-800 dark:text-white' : 'text-stone-800 dark:text-white'">
          
          <!-- Wishlist -->
          <router-link to="/dashboard" class="relative hover:text-stone-600 cursor-pointer" aria-label="Wishlist">
            <font-awesome-icon icon="fa-regular fa-heart" class="text-lg" />
            <span v-if="favorites.totalFavorites > 0" class="absolute -top-1.5 -right-2 bg-[#203220] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{{ favorites.totalFavorites }}</span>
          </router-link>

          <!-- User Account -->
          <router-link :to="auth.isAuthenticated ? (auth.isAdmin ? '/admin/dashboard' : '/dashboard') : '/login'" class="hover:text-stone-600 cursor-pointer" aria-label="Account">
            <font-awesome-icon icon="fa-regular fa-user" class="text-lg" />
          </router-link>

          <!-- Shopping Bag -->
          <router-link to="/cart" class="relative hover:text-stone-600 cursor-pointer" aria-label="Cart">
            <font-awesome-icon icon="fa-solid fa-bag-shopping" class="text-lg" />
            <span v-if="cart.totalItems > 0" class="absolute -top-1.5 -right-2 bg-[#203220] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{{ cart.totalItems }}</span>
          </router-link>

        </div>
      </div>

      <!-- ══════════ NAVIGATION BAR (Desktop) ══════════ -->
      <nav class="hidden lg:flex items-center justify-center gap-10 h-11">
        <div v-for="item in navItems" :key="item.name" class="relative group/nav h-full flex items-center">
          <router-link :to="item.path"
            class="nav-link-premium text-[11px] font-bold uppercase tracking-[0.18em] text-stone-600 dark:text-stone-300 hover:text-[#1a1a1a] dark:hover:text-white transition-colors duration-200 h-full flex items-center relative"
            :class="route.path === item.path || route.path.startsWith(item.path + '/') ? 'text-[#1a1a1a] dark:text-white' : ''">
            {{ item.name }}
            <!-- Active / hover underline -->
            <span class="absolute bottom-0 left-0 h-[2px] bg-[#c9973a] transition-all duration-300"
              :class="route.path === item.path ? 'w-full' : 'w-0 group-hover/nav:w-full'"></span>
          </router-link>

          <!-- Mega Dropdown -->
          <div v-if="item.products && item.products.length > 0"
            class="absolute top-full left-1/2 -translate-x-1/2 w-[560px] bg-white dark:bg-[#111] border border-stone-100 dark:border-white/5 shadow-2xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-400 z-[110] p-7 grid grid-cols-2 gap-7">
            <div class="space-y-3">
              <h3 class="text-[9px] font-black text-[#c9973a] uppercase tracking-[0.4em] mb-4">Signature Pieces</h3>
              <div v-for="p in item.products.slice(0, 4)" :key="p.id"
                @click="goToLiveProduct(p)"
                class="flex items-center gap-3 p-2.5 hover:bg-stone-50 dark:hover:bg-white/5 cursor-pointer transition-all group/item">
                <div class="w-11 h-13 bg-stone-100 dark:bg-stone-900 shrink-0 overflow-hidden">
                  <img :src="p.image" class="w-full h-full object-cover transition-all duration-500 group-hover/item:scale-110" />
                </div>
                <div>
                  <p class="text-[10px] font-bold uppercase tracking-widest text-stone-800 dark:text-white line-clamp-1">{{ p.name }}</p>
                  <p class="text-[9px] font-medium text-[#c9973a]">Rs. {{ p.price?.toLocaleString() }}</p>
                </div>
              </div>
            </div>
            <div class="bg-stone-50 dark:bg-stone-900/40 p-5 flex flex-col justify-center text-center space-y-3">
              <p class="text-[8px] font-black text-stone-400 uppercase tracking-[0.4em]">The {{ item.name }} Collection</p>
              <h4 class="text-xl font-playfair italic text-stone-800 dark:text-white">Curated Luxury</h4>
              <p class="text-[11px] text-stone-500 italic leading-relaxed">Discover our most sought-after pieces from the {{ item.name }} archives.</p>
              <button @click="router.push(item.path)"
                class="mx-auto mt-3 px-7 py-2.5 bg-[#1a1a1a] dark:bg-white text-white dark:text-black text-[9px] font-bold uppercase tracking-widest hover:bg-[#c9973a] dark:hover:bg-[#c9973a] dark:hover:text-white transition-colors">
                View All
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>


    <!-- Search Bar Dropdown — Modern Luxury Boutique Experience -->
    <transition name="modal-fade">
      <div v-if="searchOpen" class="fixed inset-0 z-[20001] flex flex-col bg-[#080808]/98 backdrop-blur-2xl text-white">
        <!-- Top Control Bar -->
        <div class="border-b border-white/10 px-6 sm:px-12 py-5 flex items-center justify-between max-w-7xl mx-auto w-full">
          <div class="flex items-center gap-3">
            <span class="text-xs uppercase tracking-[0.3em] font-extrabold text-[#c9973a]">Boutique Search</span>
            <span class="text-xs text-white/30 hidden sm:inline">|</span>
            <span class="text-xs text-white/50 hidden sm:inline">Search across 5,000+ Pakistani Designer Couture pieces</span>
          </div>

          <!-- Close Button -->
          <button @click="searchOpen = false" aria-label="Close Search"
            class="text-white/70 hover:text-white transition-all px-3.5 py-1.5 rounded-full border border-white/15 hover:border-white/40 flex items-center gap-2 text-xs font-bold uppercase tracking-wider group cursor-pointer">
            <span>Close</span>
            <font-awesome-icon icon="fa-solid fa-xmark" class="text-sm group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
        
        <!-- Modal Scroll Area -->
        <div class="relative w-full flex-1 overflow-y-auto pt-8 pb-32">
          <div class="max-w-6xl mx-auto px-6">
            
            <!-- Large Clean Search Bar Input -->
            <div class="relative flex items-center mb-8 border-b-2 border-white/20 focus-within:border-[#c9973a] pb-4 transition-colors duration-300">
              <button @click="handleSearch" class="p-2 text-[#c9973a] hover:scale-110 transition-transform" title="Search">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-2xl sm:text-3xl" />
              </button>
              
              <input 
                ref="searchInput" 
                v-model="searchQuery" 
                @keyup.enter="handleSearch" 
                type="text"
                placeholder="Search designer suits, lawn, pret, bridal, SKU..." 
                aria-label="Search Catalog"
                class="search-input flex-grow bg-transparent text-white placeholder-white/25 outline-none text-2xl sm:text-4xl md:text-5xl font-light tracking-tight px-4" 
              />

              <!-- Clear Query Button -->
              <button v-if="searchQuery.length > 0" @click="searchQuery = ''" class="text-white/40 hover:text-white p-2 text-xl" title="Clear">
                <font-awesome-icon icon="fa-solid fa-xmark" />
              </button>
            </div>

            <!-- Quick Suggestions Tags -->
            <div class="flex flex-wrap items-center gap-2.5 mb-10">
               <span class="text-[10px] font-extrabold tracking-[0.25em] text-[#c9973a] uppercase mr-2">Quick Tags:</span>
               <button v-for="tag in ['Unstitched Lawn', 'Luxury Pret', 'Bridal Wear', 'Maria B', 'Sana Safinaz', 'Chiffon', 'Silk', 'Discount Sale', '2026 Collection']" 
                 :key="tag"
                 @click="searchQuery = tag"
                 class="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/75 font-medium tracking-wide hover:border-[#c9973a] hover:bg-[#c9973a] hover:text-black transition-all cursor-pointer">
                 {{ tag }}
               </button>
            </div>

            <!-- LIVE SEARCH RESULTS GRID -->
            <div v-if="searchQuery.length > 1" class="mb-14 animate-reveal">
              <div class="flex items-center justify-between mb-6 pb-2 border-b border-white/10">
                <div class="flex items-center gap-3">
                  <span class="text-xs font-bold tracking-widest text-[#c9973a] uppercase">Matched Products</span>
                  <span class="text-xs bg-white/10 text-white/80 px-2.5 py-0.5 rounded-full font-bold">
                    {{ liveResults.length }} {{ liveResults.length === 1 ? 'Design' : 'Designs' }}
                  </span>
                </div>
                <button v-if="liveResults.length > 0" @click="handleSearch" class="text-xs font-bold text-[#c9973a] hover:underline uppercase tracking-wider">
                  View Full Catalog &rarr;
                </button>
              </div>

              <!-- Product Cards Grid -->
              <div v-if="liveResults.length > 0" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                <div 
                  v-for="p in liveResults" 
                  :key="p.id" 
                  @click="goToLiveProduct(p)"
                  class="group flex flex-col bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#c9973a] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 p-3"
                >
                  <div class="relative aspect-[3/4] overflow-hidden rounded-lg bg-black/40 mb-3">
                    <img :src="p.image" :alt="p.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span v-if="p.category" class="absolute top-2 left-2 text-[9px] uppercase tracking-wider font-extrabold bg-black/70 backdrop-blur-md text-white px-2 py-0.5 rounded">
                      {{ p.category }}
                    </span>
                  </div>
                  
                  <h5 class="text-xs sm:text-sm font-bold text-white line-clamp-1 group-hover:text-[#c9973a] transition-colors mb-1">
                    {{ p.name }}
                  </h5>
                  <p class="text-[10px] text-white/50 uppercase tracking-widest line-clamp-1 mb-2 font-mono">
                    SKU: {{ p.sku || p.id }}
                  </p>
                  
                  <div class="mt-auto flex items-center justify-between pt-2 border-t border-white/5">
                    <span class="text-xs sm:text-sm font-extrabold text-[#c9973a]">
                      Rs. {{ Number(p.price).toLocaleString() }}
                    </span>
                    <span class="text-[10px] uppercase font-bold text-white/40 group-hover:text-white transition-colors">
                      View &rarr;
                    </span>
                  </div>
                </div>
              </div>

              <!-- No Results State -->
              <div v-else class="py-16 text-center space-y-3 bg-white/[0.02] border border-white/5 rounded-2xl p-8">
                <div class="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto text-[#c9973a] text-2xl">
                  <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </div>
                <h4 class="text-lg font-bold text-white">No exact designs found for "{{ searchQuery }}"</h4>
                <p class="text-xs text-white/50 max-w-md mx-auto">
                  Try searching for general terms like "Lawn", "Pret", "Bridal", "Maria B", or browse by collection below.
                </p>
              </div>
            </div>

            <!-- Quick Category & Price Range Filter Columns -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div class="space-y-4">
                <h4 class="text-xs font-bold text-[#c9973a] uppercase tracking-[0.3em]">Explore Collections</h4>
                <div class="flex flex-col gap-2.5">
                  <button 
                    v-for="cat in ['Unstitched', 'Pret', 'Bridal', 'M.Print', 'Sale Offer']" 
                    :key="cat"
                    @click="searchQuery = cat; handleSearch()"
                    class="text-left text-sm sm:text-base text-white/60 hover:text-white hover:translate-x-1 transition-all font-semibold cursor-pointer"
                  >
                    &rsaquo; {{ cat }}
                  </button>
                </div>
              </div>

              <div class="space-y-4">
                <h4 class="text-xs font-bold text-[#c9973a] uppercase tracking-[0.3em]">Price Range</h4>
                <div class="flex flex-col gap-2.5">
                  <button 
                    v-for="priceItem in ['Under 10k', '10k - 20k', '20k - 40k', 'Couture']" 
                    :key="priceItem"
                    @click="router.push('/shop'); searchOpen = false"
                    class="text-left text-sm sm:text-base text-white/60 hover:text-white hover:translate-x-1 transition-all font-semibold cursor-pointer"
                  >
                    &rsaquo; {{ priceItem }}
                  </button>
                </div>
              </div>

              <div class="space-y-4 hidden md:block bg-white/[0.02] p-6 rounded-xl border border-white/5">
                <h4 class="text-xs font-bold text-[#c9973a] uppercase tracking-[0.3em]">Boutique Concierge</h4>
                <p class="text-xs text-white/60 leading-relaxed">
                  Looking for custom sizing, bridal consultations, or bespoke embroidery packages?
                </p>
                <a 
                  href="https://wa.me/923416887454" 
                  target="_blank" 
                  class="inline-flex items-center gap-2 text-xs font-bold text-black bg-[#25D366] hover:bg-[#20ba5a] px-4 py-2 rounded-lg transition-colors no-underline"
                >
                  <font-awesome-icon :icon="['fab', 'whatsapp']" />
                  <span>WhatsApp Concierge: 0341 6887454</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </transition>

    <!-- Mobile Navigation Drawer -->
    <transition name="drawer">
      <div v-if="isMenuOpen" class="fixed inset-0 z-[20000]">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="isMenuOpen = false"></div>
        <div class="drawer-panel">
          <!-- Header -->
          <div class="flex items-center justify-between p-6 border-b border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/5">
            <div class="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity" @click="goToHome(); isMenuOpen = false">
              <h1 class="text-lg font-playfair tracking-[0.2em] font-bold text-stone-900 dark:text-white uppercase">AHMAD CLOTHS</h1>
              <span class="text-[8px] tracking-[0.3em] text-[#c9973a] uppercase font-bold">House of Couture</span>
            </div>
            <button @click="isMenuOpen = false"
              class="w-10 h-10 rounded-full bg-stone-200/60 dark:bg-white/10 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-white/20 flex items-center justify-center transition-colors">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </button>
          </div>

          <!-- Nav Links -->
          <nav class="flex-1 overflow-y-auto p-6 space-y-1 bg-white dark:bg-[#111111]">
            <router-link v-for="(item, i) in navItems" :key="item.name" :to="item.path" @click="isMenuOpen = false"
              class="mobile-nav-link group text-stone-800 dark:text-stone-200 hover:text-black dark:hover:text-white">
          
              <span class="flex-1 text-xs uppercase tracking-widest font-bold">{{ item.name }}</span>
              <font-awesome-icon icon="fa-solid fa-arrow-right"
                class="text-[10px] opacity-0 group-hover:opacity-60 translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
            </router-link>

            <!-- Feature Banner -->
            <div class="feature-promo mt-6 p-5 rounded-lg bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
              <p class="text-[9px] uppercase tracking-[0.3em] text-[#c9973a] font-bold mb-2">Seasonal Specials</p>
              <h4 class="text-xl font-extrabold leading-tight text-stone-900 dark:text-white mb-4">HERITAGE<br>COLLECTION 2026</h4>
              <button @click="router.push('/shop'); isMenuOpen = false" class="promo-btn bg-stone-900 text-white dark:bg-white dark:text-black px-4 py-2 text-xs font-bold uppercase tracking-wider rounded">
                Discover Now
              </button>
            </div>
          </nav>

          <!-- Footer -->
          <div class="p-6 border-t border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950">
            <!-- Quick Contact -->
            <div class="mb-6">
              <p class="text-[9px] text-stone-500 dark:text-stone-400 uppercase tracking-[0.3em] font-bold text-center mb-3">Official Concierge</p>
              <div class="space-y-2.5">
                <a href="tel:+923416887454"
                  class="flex items-center justify-center gap-3 py-3 px-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-white hover:border-[#c9973a] transition-all no-underline shadow-sm">
                  <font-awesome-icon icon="fa-solid fa-phone"
                    class="text-xs text-[#c9973a]" />
                  <span class="text-xs font-bold tracking-wider text-stone-900 dark:text-white">0341 6887454</span>
                </a>
                <a href="tel:+923244902607"
                  class="flex items-center justify-center gap-3 py-3 px-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-white hover:border-[#c9973a] transition-all no-underline shadow-sm">
                  <font-awesome-icon icon="fa-solid fa-phone"
                    class="text-xs text-[#c9973a]" />
                  <span class="text-xs font-bold tracking-wider text-stone-900 dark:text-white">0324 4902607</span>
                </a>
                <button @click="isQueryModalOpen = true; isMenuOpen = false"
                  class="w-full py-3.5 mt-3 bg-stone-900 dark:bg-[var(--primary-gold)] text-white dark:text-black font-extrabold text-[10px] uppercase tracking-[0.25em] rounded-xl hover:bg-[#c9973a] transition-all shadow-md">
                  Send Quick Query
                </button>
              </div>
            </div>

            <div class="flex items-center justify-center gap-3 mb-6">
              <a href="https://www.instagram.com/ahmadclothfabrics_aroma/" target="_blank" rel="noopener" aria-label="Instagram" class="w-9 h-9 rounded-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 flex items-center justify-center text-stone-700 dark:text-stone-300 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] transition-all duration-300 shadow-sm">
                <font-awesome-icon :icon="['fab', 'instagram']" class="text-sm" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573629329844" target="_blank" rel="noopener" aria-label="Facebook" class="w-9 h-9 rounded-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 flex items-center justify-center text-stone-700 dark:text-stone-300 hover:text-white hover:bg-[#1877F2] transition-all duration-300 shadow-sm">
                <font-awesome-icon :icon="['fab', 'facebook-f']" class="text-sm" />
              </a>
              <a href="https://www.youtube.com/@ahmadClothesfabrics_aroma" target="_blank" rel="noopener" aria-label="YouTube" class="w-9 h-9 rounded-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 flex items-center justify-center text-stone-700 dark:text-stone-300 hover:text-white hover:bg-red-600 transition-all duration-300 shadow-sm">
                <font-awesome-icon :icon="['fab', 'youtube']" class="text-sm" />
              </a>
              <a href="https://www.tiktok.com/@theahmadfabrices_aroma" target="_blank" rel="noopener" aria-label="TikTok" class="w-9 h-9 rounded-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 flex items-center justify-center text-stone-700 dark:text-stone-300 hover:text-white hover:bg-black transition-all duration-300 shadow-sm">
                <font-awesome-icon :icon="['fab', 'tiktok']" class="text-sm" />
              </a>
            </div>

            <div v-if="auth.isAuthenticated" class="space-y-3">
              <div class="flex items-center gap-3 p-3 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                <div class="avatar bg-amber-500 text-black font-bold w-8 h-8 rounded-full flex items-center justify-center text-xs">{{ auth.user?.name?.substring(0, 2).toUpperCase() || 'AH' }}</div>
                <div>
                  <p class="text-[9px] text-stone-500 uppercase tracking-widest font-bold">Authenticated</p>
                  <p class="text-xs font-semibold text-stone-900 dark:text-white">{{ auth.user?.name }}</p>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <router-link :to="auth.isAdmin ? '/admin/dashboard' : '/dashboard'" @click="isMenuOpen = false"
                  class="mobile-action-btn bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 text-center py-2.5 rounded font-bold text-xs">
                  {{ auth.isAdmin ? 'Admin' : 'Dashboard' }}
                </router-link>
                <button @click="handleLogout" class="mobile-action-btn border border-rose-500/30 text-rose-600 dark:text-rose-400 py-2.5 rounded font-bold text-xs">
                  Sign Out
                </button>
              </div>
            </div>
            <div v-else>
              <router-link to="/login" @click="isMenuOpen = false"
                class="block text-center py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-xl shadow-lg shadow-amber-500/20 active:scale-95 transition-all">
                Enter the House
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Quick Query Modal -->
    <transition name="search-drop">
      <div v-if="isQueryModalOpen" class="fixed inset-0 z-[20000] flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="isQueryModalOpen = false"></div>
        <div class="relative w-full max-w-lg bg-white dark:bg-[#0A0A0A] border border-[var(--primary-gold)]/20 shadow-2xl animate-reveal overflow-hidden rounded-lg">
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-6 border-b border-black/5 dark:border-white/5 bg-stone-50/50 dark:bg-white/5">
            <div class="flex flex-col">
              <h3 class="text-xl font-playfair italic text-gray-900 dark:text-white uppercase tracking-wider">Send Quick Query</h3>
              <p class="text-[8px] font-black tracking-[0.3em] text-[var(--primary-gold)] mt-1">THE HOUSE CONCIERGE</p>
            </div>
            <button @click="isQueryModalOpen = false" class="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-black/5 dark:hover:bg-white/5 transition-all">
              <font-awesome-icon icon="fa-solid fa-xmark" class="text-xl" />
            </button>
          </div>

          <!-- Modal Body -->
          <form @submit.prevent="submitQuery" class="p-8 space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-3">
                <label class="block text-[10px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-[0.2em]">Full Name</label>
                <input v-model="queryForm.name" type="text" placeholder="E.G. JULIAN VANCE" class="luxury-input-mini" required />
              </div>
              <div class="flex flex-col gap-3">
                <label class="block text-[10px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-[0.2em]">Email Address</label>
                <input v-model="queryForm.email" type="email" placeholder="HELLO@AHMADCLOTHS.COM" class="luxury-input-mini" required />
              </div>
            </div>
            
            <div class="flex flex-col gap-3">
              <label class="block text-[10px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-[0.2em]">Your Message</label>
              <textarea v-model="queryForm.message" rows="4" placeholder="HOW CAN WE ASSIST YOU WITH YOUR COUTURE NEEDS?" class="luxury-input-mini !h-32 resize-none" required></textarea>
            </div>

            <button type="submit" :disabled="queryStatus.loading"
              class="w-full py-5 bg-black dark:bg-[var(--primary-gold)] text-white dark:text-black font-black text-[10px] uppercase tracking-[0.4em] hover:bg-[var(--deep-burgundy)] dark:hover:bg-white transition-all disabled:opacity-50 shadow-xl flex items-center justify-center gap-4 group">
              <span>{{ queryStatus.loading ? 'SENDING...' : 'TRANSMIT QUERY' }}</span>
              <font-awesome-icon icon="fa-solid fa-paper-plane" class="text-[8px] group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, watch } from 'vue'
import { useCartStore } from '../../stores/cart'
import { useFavoritesStore } from '../../stores/favorites'
import { useAuthStore } from '../../stores/auth'
import { useProductsStore } from '../../stores/products'
import { useThemeStore } from '../../stores/theme'
import { useRouter, useRoute } from 'vue-router'
import api from '../../api'
import Swal from 'sweetalert2'
import ahmadlogo from '../../assets/fugibles.png'
const Fugible = "https://loremflickr.com/200/80/fashion,logo?lock=1"
const cart = useCartStore()
const favorites = useFavoritesStore()
const auth = useAuthStore()
const productStore = useProductsStore()
const themeStore = useThemeStore()
const router = useRouter()
const route = useRoute()

const isMenuOpen = ref(false)
const searchOpen = ref(false)
const searchQuery = ref('')
const isScrolled = ref(false)
const isMobile = ref(false)
const searchInput = ref(null)

// Query Modal State
const isQueryModalOpen = ref(false)
const queryForm = reactive({
  name: '',
  email: '',
  subject: 'Quick Header Query',
  message: ''
})
const queryStatus = reactive({
  loading: false
})

const submitQuery = async () => {
  if (!queryForm.name || !queryForm.email || !queryForm.message) {
    Swal.fire({
      icon: 'error',
      title: 'Missing Information',
      text: 'Please fill in all required fields.',
      confirmButtonColor: '#d4af37'
    })
    return
  }

  queryStatus.loading = true
  try {
    const res = await api.post('/contact', queryForm)
    if (res.data.success) {
      Swal.fire({
        icon: 'success',
        title: 'Query Sent',
        text: 'Your message has been received. We will get back to you soon.',
        confirmButtonColor: '#d4af37',
        background: themeStore.isDark ? '#1a1a1a' : '#fff',
        color: themeStore.isDark ? '#fff' : '#000'
      })
      isQueryModalOpen.value = false
      queryForm.name = ''
      queryForm.email = ''
      queryForm.message = ''
    }
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Submission Failed',
      text: err.response?.data?.error || 'Something went wrong. Please try again.',
      confirmButtonColor: '#d4af37'
    })
  } finally {
    queryStatus.loading = false
  }
}

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
      try {
        new google.translate.TranslateElement({
          pageLanguage: 'en',
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        }, 'google_translate_element');
        return true;
      } catch (e) {
        console.error('Error initializing Google Translate:', e);
      }
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
  items.push({ name: 'Hero Collection', path: '/shop/hero', products: heroCollectionProducts })
  items.push({ name: 'Sale Offer', path: '/shop/Sale Offer', products: [] })
  items.push({ name: 'About Us', path: '/about', products: [] })
  items.push({ name: 'Contact Us', path: '/contact', products: [] })
  return items
})

const heroCollectionProducts = computed(() => {
  return productStore.products.filter(p => p.id && String(p.id).startsWith('hero-'))
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
  const q = searchQuery.value.trim()
  if (q) {
    // If it's a category name, navigate to category directly for better UX
    const categoriesList = ['unstitched', 'pret', 'bridal', 'm.print']
    if (categoriesList.includes(q.toLowerCase())) {
      router.push(`/shop/${q}`)
    } else {
      router.push({ path: '/shop', query: { q } })
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
  if (!searchQuery.value || searchQuery.value.trim().length < 2) return []
  const q = searchQuery.value.trim().toLowerCase()
  return productStore.products
    .filter(p => {
      const name = (p.name || '').toLowerCase()
      const sku = (p.sku || p.id || '').toString().toLowerCase()
      const category = (p.category || '').toLowerCase()
      const parentCategory = (p.parentCategory || '').toLowerCase()
      const description = (p.description || '').toLowerCase()
      const brand = (p.brand || '').toLowerCase()
      const fabric = (p.fabric || '').toLowerCase()
      const color = (p.color || '').toLowerCase()
      const nature = (p.nature || '').toLowerCase()
      
      return (
        name.includes(q) ||
        sku.includes(q) ||
        category.includes(q) ||
        parentCategory.includes(q) ||
        description.includes(q) ||
        brand.includes(q) ||
        fabric.includes(q) ||
        color.includes(q) ||
        nature.includes(q)
      )
    })
    .slice(0, 16)
})

const goToHome = () => {
  if (route.path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    router.push('/')
  }
}
</script>

<style scoped>
@reference "tailwindcss";

/* ═══ Announcement Bar ════════════════════════════════ */
.announcement-bar {
  background: #111111;
  color: white;
  padding: 8px 16px;
  overflow: hidden;
  position: relative;
}

.ann-text {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #ffffff;
}

/* Banner */
.luxury-banner {
  background: #111111;
  color: white;
  font-family: 'Inter', sans-serif;
}

/* ── Sticky Header ── */
.site-header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 9999;
}

/* Main Header */
.main-header {
  color: #111;
  transition: all 0.4s ease;
}

.dark .main-header {
  color: #f5f5f5;
}

.header-scrolled .main-header {
  box-shadow: 0 1px 0 rgba(0,0,0,0.08);
}

/* Marquee */
.marquee-track {
  display: flex;
  overflow: hidden;
}
.marquee-inner {
  display: inline-flex;
  white-space: nowrap;
  animation: marqueeScroll 30s linear infinite;
}
@keyframes marqueeScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Logo */
.logo-tagline {
  font-size: 8px;
  color: var(--primary-gold);
  text-transform: uppercase;
}

/* Nav Links - Shopify Style */
.nav-link-premium {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: #444;
  position: relative;
  padding: 4px 0;
  transition: color 0.2s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%;
}

.dark .nav-link-premium {
  color: #aaa;
}

.nav-link-premium:hover,
.nav-link-premium.router-link-active {
  color: #111;
}

.dark .nav-link-premium:hover,
.dark .nav-link-premium.router-link-active {
  color: #fff;
}

/* Icon Buttons - Shopify Style */
.icon-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111;
  font-size: 16px;
  transition: color 0.2s ease, transform 0.2s ease;
  background: none;
  border: none;
  cursor: pointer;
}

.luxury-action-btn {
  padding: 8px 18px;
  border: 1.5px solid #111;
  border-radius: 4px;
  color: #111;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  transition: all 0.2s ease;
  text-decoration: none;
  background: transparent;
}

.luxury-action-btn:hover {
  background: #111;
  color: #fff;
  transform: translateY(-1px);
}

.dark .icon-btn {
  color: #F5F5F5;
}

.icon-btn:hover {
  color: #B8860B;
  transform: translateY(-1px);
}

.badge {
  position: absolute;
  top: 5px;
  right: 5px;
  background: #111111;
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

.dark .badge {
  background: #ffffff;
  color: #111111;
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
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.98);
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

/* Luxury Input Mini */
.luxury-input-mini {
  width: 100%;
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(212, 175, 55, 0.1);
  padding: 14px 16px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  outline: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  color: #1a1a1a;
  border-radius: 4px;
}

.dark .luxury-input-mini {
  background: rgba(255, 255, 255, 0.03);
  color: white;
  border-color: rgba(255, 255, 255, 0.05);
}

.luxury-input-mini:focus {
  border-color: var(--primary-gold);
  background: transparent;
  box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.05);
}

.luxury-input-mini::placeholder {
  color: #999;
  font-size: 9px;
  letter-spacing: 0.15em;
  opacity: 0.5;
}

.dark .luxury-input-mini::placeholder {
  color: #666;
}

/* Mobile Drawer - Shopify Style */
.drawer-panel {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 340px;
  background: #ffffff;
  border-right: 1px solid #E5E7EB;
  display: flex;
  flex-direction: column;
  color: #111111;
  overflow: hidden;
}

@media (min-width: 400px) {
  .drawer-panel {
    width: 85%;
    max-width: 360px;
  }
}

.dark .drawer-panel {
  background: #111111;
  border-right-color: #222222;
  color: #f5f5f5;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 6px;
  border: 1px solid transparent;
  text-decoration: none;
  color: #444444;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.dark .mobile-nav-link {
  color: rgba(255, 255, 255, 0.7);
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  background: #F4F4F4;
  color: #111111;
}

.dark .mobile-nav-link:hover,
.dark .mobile-nav-link.router-link-active {
  background: rgba(255,255,255,0.05);
  color: #fff;
}

.feature-promo {
  background: #F4F4F4;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  padding: 20px;
  color: #111111;
}

.dark .feature-promo {
  background: rgba(212, 175, 55, 0.08);
  border-color: rgba(212, 175, 55, 0.15);
  color: white;
}

.promo-btn {
  padding: 10px 20px;
  background: #111111;
  color: #ffffff;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
}

.promo-btn:hover {
  background: #333333;
  transform: translateY(-1px);
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
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.1); }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

.concierge-btn {
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.05);
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.concierge-btn:hover {
  box-shadow: 0 0 25px rgba(212, 175, 55, 0.15);
  border-color: rgba(212, 175, 55, 0.5);
  transform: translateY(-1px);
}

.main-header {
  /* transparent — background controlled by Tailwind :class binding */
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