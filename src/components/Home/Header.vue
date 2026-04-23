<template>
  <header class="w-full" :class="{ 'header-scrolled': isScrolled }">
    <div class="bg-[var(--deep-burgundy)] text-white py-1.5 px-4 text-center overflow-hidden relative group border-b border-white/10">
      <div class="animate-marquee whitespace-nowrap inline-block">
        <span class="text-[10px] font-bold uppercase tracking-[0.3em] mx-10">
          ✨ SPECIAL RAMADAN OFFER: FLAT 20% OFF ON ALL NEW ARRIVALS ✨ 
        </span>
        <span class="text-[10px] font-bold uppercase tracking-[0.3em] mx-10">
          🚚 FREE WORLDWIDE SHIPPING ON ORDERS OVER RS. 15,000 🚚
        </span>
      </div>
      <!-- Duplicate for seamless loop -->
      <div class="animate-marquee whitespace-nowrap inline-block absolute top-1.5 left-full">
        <span class="text-[10px] font-bold uppercase tracking-[0.3em] mx-10">
          ✨ SPECIAL RAMADAN OFFER: FLAT 20% OFF ON ALL NEW ARRIVALS ✨ 
        </span>
        <span class="text-[10px] font-bold uppercase tracking-[0.3em] mx-10">
          🚚 FREE WORLDWIDE SHIPPING ON ORDERS OVER RS. 15,000 🚚
        </span>
      </div>
    </div>
    
    <!-- WhatsApp Support Bar -->
    <div class="bg-white dark:bg-[#0A0A0A] py-2 px-4 border-b border-black/5 dark:border-white/5 flex items-center justify-center gap-6 overflow-hidden">
      <div class="flex items-center gap-2 group/wa">
        <div class="relative">
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-[#25D366] text-base group-hover/wa:scale-110 transition-transform" />
          <span class="absolute inset-0 bg-[#25D366] rounded-full blur-[4px] opacity-0 group-hover/wa:opacity-40 transition-opacity"></span>
        </div>
        <p class="text-[10px] sm:text-[11px] font-bold tracking-wide">
          <span class="text-[#25D366] uppercase mr-1">Inquiry:</span> 
          <a href="https://wa.me/923416887454" target="_blank" class="text-black dark:text-white hover:text-green-600 transition-colors">0341 6887454</a>
        </p>
      </div>
      <div class="w-[1px] h-3 bg-black/10 dark:bg-white/10 hidden sm:block"></div>
      <div class="flex items-center gap-2 group/wa2">
        <div class="relative">
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-[#25D366] text-base group-hover/wa2:scale-110 transition-transform" />
          <span class="absolute inset-0 bg-[#25D366] rounded-full blur-[4px] opacity-0 group-hover/wa2:opacity-40 transition-opacity"></span>
        </div>
        <p class="text-[10px] sm:text-[11px] font-bold tracking-wide">
          <span class="text-[#25D366] uppercase mr-1">Support:</span> 
          <a href="https://wa.me/923244902607" target="_blank" class="text-black dark:text-white hover:text-green-600 transition-colors">0324 4902607</a>
        </p>
      </div>
    </div>

    <!-- Main Header -->
    <div class="main-header px-4 sm:px-8 lg:px-16 flex flex-col items-center transition-all duration-500"
      :class="isScrolled ? 'py-0 shadow-lg' : 'py-0'">
      <!-- Top Row: Actions Left, Logo Center, Actions Right -->
      <div class="w-full flex items-center justify-between">
        <!-- LEFT: Logo (Mobile) + Actions (Desktop/Mobile) -->
        <div class="flex items-center gap-4 flex-1">
          <!-- Logo for Mobile (Left) -->
          <div class="lg:hidden cursor-pointer" @click="goToHome">
            <img :src="ahmadlogo" alt="Ahmad Cloth House" class="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
          </div>

          <!-- Back Button (Mobile Only) -->
          <button v-if="route.path !== '/' && isMobile" @click="router.back()" class="icon-btn" aria-label="Back">
            <font-awesome-icon icon="fa-solid fa-arrow-left" />
          </button>



          <!-- Luxury Concierge (Desktop) -->
          <div class="relative group ml-1 sm:ml-4 hidden lg:block">
            <button class="concierge-btn flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 hover:bg-amber-500/10 transition-all duration-500 group/btn shadow-[0_0_15px_rgba(245,158,11,0.1)] hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <div class="relative">
                <font-awesome-icon icon="fa-solid fa-headset" class="text-[11px] text-amber-500" />
                <span class="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border border-black animate-pulse"></span>
                <span class="absolute inset-0 bg-amber-500 rounded-full blur-[6px] animate-pulse opacity-40"></span>
              </div>
              <span class="text-[9px] sm:text-[10px] font-black tracking-[0.3em] text-amber-600 dark:text-amber-500 uppercase flex items-center gap-1">
                Concierge
                <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-[7px] opacity-40 group-hover/btn:rotate-180 transition-transform duration-500" />
              </span>
            </button>
            <div class="dropdown-menu left-0 w-64 mt-3 rounded-none border-amber-500/10 shadow-[0_20px_50px_rgba(212,175,55,0.15)] overflow-hidden">
              <div class="bg-gradient-to-b from-amber-50/50 to-white dark:from-amber-950/20 dark:to-[#0A0A0A] p-5">
                <p class="text-[8px] font-black text-amber-600/50 uppercase tracking-[0.4em] mb-4">Personal Styling & Help</p>
                <div class="space-y-1">
                  <a href="https://wa.me/923416887454" target="_blank" class="flex items-center justify-between p-3 bg-white dark:bg-white/5 border border-amber-500/10 hover:border-amber-500/40 transition-all group/wa">
                    <div class="flex items-center gap-3">
                      <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-green-500 text-sm" />
                      <div>
                        <p class="text-[10px] font-black uppercase tracking-widest text-[#111] dark:text-white">WhatsApp Live</p>
                        <p class="text-[8px] text-stone-400">Response in < 5 mins</p>
                      </div>
                    </div>
                    <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-[8px] text-amber-500 -translate-x-2 opacity-0 group-hover/wa:translate-x-0 group-hover/wa:opacity-100 transition-all" />
                  </a>
                  <a href="tel:+923416887454" class="flex items-center gap-3 p-3 hover:bg-amber-500/5 transition-all">
                    <font-awesome-icon icon="fa-solid fa-phone" class="text-[9px] text-amber-600" />
                    <span class="text-[10px] font-bold text-stone-600 dark:text-stone-300 tracking-widest">0341 6887454</span>
                  </a>
                  <a href="tel:+923244902607" class="flex items-center gap-3 p-3 hover:bg-amber-500/5 transition-all">
                    <font-awesome-icon icon="fa-solid fa-phone" class="text-[9px] text-amber-600" />
                    <span class="text-[10px] font-bold text-stone-600 dark:text-stone-300 tracking-widest">0324 4902607</span>
                  </a>
                </div>
                <div class="mt-4 pt-4 border-t border-amber-500/10">
                  <button @click="isQueryModalOpen = true" class="w-full py-3 bg-[#111] dark:bg-amber-500 text-white dark:text-black font-black text-[9px] uppercase tracking-[0.3em] hover:bg-amber-600 transition-all">
                    Leave a Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CENTER: Logo (Desktop Only) -->
        <div class="hidden lg:flex flex-shrink-0 cursor-pointer flex-col items-center group px-4" @click="goToHome">
          <img :src="ahmadlogo" alt="Ahmad Cloth House" class="w-24 h-24">
        </div>

        <div class="flex items-center gap-2 sm:gap-5 flex-1 justify-end">
          <!-- Google Translate (Always Visible) -->
          <div id="google_translate_element" class="flex items-center justify-center scale-90 sm:scale-100 mx-1 transition-all duration-500"></div>

          <!-- Search Icon (Always Visible) -->
          <button @click="searchOpen ? handleSearch() : (searchOpen = true)" class="icon-btn" aria-label="Search">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </button>

          <!-- Mobile Only Actions -->
          <div class="lg:hidden flex items-center gap-2">
            <button @click="isQueryModalOpen = true" class="icon-btn" aria-label="Concierge">
              <font-awesome-icon icon="fa-solid fa-headset" class="text-amber-500" />
            </button>
            <button v-if="route.path === '/'" @click="isMenuOpen = !isMenuOpen" class="hamburger-btn" aria-label="Menu">
              <span class="hamburger-line bg-[var(--luxury-black)]"></span>
              <span class="hamburger-line bg-[var(--luxury-black)]"></span>
              <span class="hamburger-line bg-[var(--luxury-black)]"></span>
            </button>
          </div>

          <!-- Desktop Only Actions -->
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
      <div class="flex sm:hidden w-full items-center justify-center gap-4 mt-4 pt-2 border-t border-black/5 dark:border-white/5">
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

      <!-- Bottom Row: Navigation (Visible on Desktop) -->
      <nav class="hidden lg:flex items-center gap-12 mt-6 w-full justify-center border-t border-black/5 dark:border-white/5 pt-4">
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
    <transition name="modal-fade">
      <div v-if="searchOpen" class="fixed inset-0 z-[20001] flex flex-col">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/95 backdrop-blur-xl" @click="searchOpen = false"></div>
        
        <!-- Modal Content -->
        <div class="relative w-full h-full overflow-y-auto pt-20 pb-32">
          <!-- Close Button -->
          <button @click="searchOpen = false" 
            class="absolute top-8 right-8 text-white/40 hover:text-white transition-all w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:border-white/40 group">
            <font-awesome-icon icon="fa-solid fa-xmark" class="text-2xl group-hover:rotate-90 transition-transform duration-500" />
          </button>

          <div class="max-w-6xl mx-auto px-6">
          <div class="flex items-center gap-4 mb-4 border-b border-black/10 dark:border-white/10 pb-4">
            <button @click="handleSearch" class="group/search p-2 hover:scale-110 transition-all duration-300">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass"
                class="text-[var(--primary-gold)] text-lg group-hover/search:text-amber-500 transition-colors" />
            </button>
            <input ref="searchInput" v-model="searchQuery" @keyup.enter="handleSearch" type="text"
              placeholder="What are you looking for today?"
              class="search-input flex-grow bg-transparent text-white placeholder-white/20 outline-none text-4xl md:text-6xl font-playfair font-light tracking-tight italic" />
          </div>

          <!-- Quick Suggestions -->
          <div v-if="searchQuery.length === 0" class="flex flex-wrap gap-4 mb-16 animate-reveal">
             <span class="text-[9px] font-black tracking-[0.4em] text-[var(--primary-gold)] w-full mb-2">SUGGESTIONS</span>
             <button v-for="tag in ['Chiffon', 'Bridal', 'Silk', 'Lawn', 'Pret']" :key="tag"
               @click="searchQuery = tag"
               class="px-6 py-2 border border-white/5 bg-white/5 text-[10px] text-white/60 uppercase tracking-widest hover:border-[var(--primary-gold)] hover:text-[var(--primary-gold)] transition-all">
               {{ tag }}
             </button>
          </div>

          <!-- Live Results Architecture -->
          <div v-if="searchQuery.length > 1" class="mb-10 animate-reveal">
            <div class="flex items-center gap-2 mb-6">
              <span class="text-[8px] font-black tracking-[0.4em] text-[var(--primary-gold)]">LIVE RESULTS</span>
              <div class="h-[1px] flex-grow bg-[var(--primary-gold)]/10"></div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <div v-for="p in liveResults" :key="p.id" @click="goToLiveProduct(p)"
                class="flex items-center gap-4 p-4 border border-black/[0.05] dark:border-white/[0.05] hover:border-[var(--primary-gold)] hover:bg-white dark:hover:bg-white/[0.05] cursor-pointer transition-all bg-white dark:bg-white/[0.02] group rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1">
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
              <div v-if="liveResults.length > 0" class="col-span-full mt-6 text-center">
                <button @click="handleSearch" class="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary-gold)] border-b border-[var(--primary-gold)]/20 pb-1 hover:border-[var(--primary-gold)] transition-all">
                  View All Search Results
                </button>
              </div>
            </div>
          </div>

          <!-- Quick Filters -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 animate-reveal">
            <div>
              <h4 class="text-[9px] font-bold text-[var(--primary-gold)] uppercase tracking-[0.4em] mb-6">Explore Collections</h4>
              <div class="space-y-4">
                <button v-for="cat in ['Unstitched', 'Pret', 'Bridal', 'M.Print']" :key="cat"
                  @click="searchQuery = cat; handleSearch()"
                  class="block text-2xl font-playfair text-white/40 hover:text-[var(--primary-gold)] transition-all italic">
                  {{ cat }}
                </button>
              </div>
            </div>
            <div>
              <h4 class="text-[9px] font-bold text-[var(--primary-gold)] uppercase tracking-[0.4em] mb-6">Price Points</h4>
              <div class="space-y-4">
                <button v-for="price in ['Under 5k', '5k - 15k', '15k - 50k', 'Couture']" :key="price"
                  class="block text-2xl font-playfair text-white/40 hover:text-[var(--primary-gold)] transition-all italic">
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
    </div>
  </transition>

    <!-- Mobile Navigation Drawer -->
    <transition name="drawer">
      <div v-if="isMenuOpen" class="fixed inset-0 z-[20000]">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="isMenuOpen = false"></div>
        <div class="drawer-panel">
          <!-- Header -->
          <div class="flex items-center justify-between p-6 border-b border-white/5">
            <div class="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity" @click="goToHome(); isMenuOpen = false">
              <h1 class="text-lg font-playfair tracking-[0.2em] font-light text-white uppercase">AHMAD CLOTHS</h1>
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
            <!-- Quick Contact -->
            <div class="mb-8">
              <p class="text-[8px] text-white/30 uppercase tracking-[0.3em] text-center mb-4">Official Concierge</p>
              <div class="space-y-2">
                <a href="tel:+923416887454"
                  class="flex items-center justify-center gap-3 py-3 px-6 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-[var(--primary-gold)] hover:border-[var(--primary-gold)]/30 transition-all no-underline group/phone-m">
                  <font-awesome-icon icon="fa-solid fa-phone"
                    class="text-[10px] text-[var(--primary-gold)] group-hover/phone-m:rotate-12 transition-transform" />
                  <span class="text-[10px] font-black uppercase tracking-[0.2em]">0341 6887454</span>
                </a>
                <a href="tel:+923244902607"
                  class="flex items-center justify-center gap-3 py-3 px-6 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-[var(--primary-gold)] hover:border-[var(--primary-gold)]/30 transition-all no-underline group/phone-m">
                  <font-awesome-icon icon="fa-solid fa-phone"
                    class="text-[10px] text-[var(--primary-gold)] group-hover/phone-m:rotate-12 transition-transform" />
                  <span class="text-[10px] font-black uppercase tracking-[0.2em]">0324 4902607</span>
                </a>
                <button @click="isQueryModalOpen = true; isMenuOpen = false"
                  class="w-full py-4 mt-4 bg-white/5 border border-[var(--primary-gold)]/30 text-[var(--primary-gold)] font-black text-[10px] uppercase tracking-[0.3em] rounded-xl hover:bg-[var(--primary-gold)] hover:text-black transition-all">
                  Send Quick Query
                </button>
              </div>
            </div>

            <div class="flex items-center justify-center gap-8 mb-8">
              <a href="https://www.instagram.com/ahmadclothfabrics_aroma/" target="_blank" class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[var(--primary-gold)] hover:bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] transition-all duration-500 group">
                <font-awesome-icon :icon="['fab', 'instagram']" class="text-xl group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573629329844" target="_blank" class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-blue-600 hover:bg-blue-600 transition-all duration-500 group">
                <font-awesome-icon :icon="['fab', 'facebook-f']" class="text-xl group-hover:scale-110 transition-transform" />
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
  items.push({ name: 'Discount', path: '/shop/Discount', products: [] })
  items.push({ name: 'Office', path: '/shop/Office', products: [] })
  items.push({ name: 'Sale Offer', path: '/shop/Sale Offer', products: [] })
  items.push({ name: 'About Us', path: '/about', products: [] })
  items.push({ name: 'Blog', path: '/blog', products: [] })
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
  if (searchQuery.value.length < 2) return []
  const q = searchQuery.value.toLowerCase()
  return productStore.products
    .filter(p => 
      p.name?.toLowerCase().includes(q) || 
      p.category?.toLowerCase().includes(q) ||
      p.parentCategory?.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q) ||
      p.brand?.toLowerCase().includes(q) ||
      p.nature?.toLowerCase().includes(q)
    )
    .slice(0, 12)
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
  @apply bg-white dark:bg-[#080808];
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