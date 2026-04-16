<template>
  <div class="luxury-home overflow-x-hidden">

    <!-- ═══════════════════════════════════════════
         SEO CONTENT (VISUALLY HIDDEN)
    ═══════════════════════════════════════════ -->
    <section class="sr-only">
      <h1>AhmadClothesFabrics | Best Unstitched Ladies Suits & Luxury Pret in Pakistan</h1>
      <p>Discover the finest selection of handcrafted unstitched fabrics, luxury pret, and bridal couture at AhmadClothesFabrics. Our premium boutique offers designer embroidered lawn, chiffon collections, and signature bridal wear. 
        Top-ranked Pakistani designer suits inspired by Maria B, Warda, and Sana Safinaz. Experience premium fashion in Lahore with worldwide shipping.</p>
      <ul>
        <li>Premium Unstitched Ladies Suits</li>
        <li>Luxury Pret Pakistan - Ready to Wear</li>
        <li>Bridal Couture & Wedding Wear</li>
        <li>Embroidered Lawn & Chiffon Collections</li>
        <li>Pakistani Designer Suits Online</li>
        <li>Festive Wear & Eid Collections</li>
        <li>Exclusive Silk and Velvet Designs</li>
        <li>Hand-embroidered Masterpieces</li>
        <li>Custom Bridal Consultations Lahore</li>
        <li>Luxury Apparel & Fashion Catalog</li>
      </ul>
    </section>

    <!-- ═══════════════════════════════════════════
         CINEMATIC HERO SECTION
    ═══════════════════════════════════════════ -->
    <section class="hero-cinematic h-screen relative overflow-hidden bg-black" aria-label="Hero">
      <!-- Image Slider -->
      <div class="absolute inset-0">
        <transition-group name="fade-scale">
          <div v-for="(slide, i) in heroSlides" :key="i" v-show="currentHeroIndex === i"
            class="absolute inset-0 w-full h-full">
            <div class="absolute inset-0 bg-black/40 z-10"></div>
            <img :src="slide.image" :alt="slide.title1" class="w-full h-full object-cover animate-ken-burns" />
          </div>
        </transition-group>
      </div>

      <!-- Content Overlay -->
      <div class="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <transition name="slide-up" mode="out-in">
          <div :key="currentHeroIndex" class="space-y-6 max-w-4xl">
            <div class="hero-label-wrap flex items-center justify-center gap-4 animate-fade-in">
              <span class="h-[1px] w-12 bg-[var(--primary-gold)]"></span>
              <span class="text-[10px] sm:text-xs font-bold tracking-[0.5em] text-[var(--primary-gold)] uppercase">
                {{ heroSlides[currentHeroIndex].subtitle }}
              </span>
              <span class="h-[1px] w-12 bg-[var(--primary-gold)]"></span>
            </div>

            <h2 class="hero-main-title font-playfair text-white leading-tight">
              <span class="block text-4xl sm:text-6xl md:text-8xl lg:text-9xl italic font-light">
                {{ heroSlides[currentHeroIndex].title1 }}
              </span>
              <span
                class="block text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-bold -mt-4 sm:-mt-8 tracking-tighter">
                {{ heroSlides[currentHeroIndex].titleHighlight }}
              </span>
            </h2>

            <p
              class="hero-description text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light tracking-wide leading-relaxed animate-fade-in-delayed">
              {{ heroSlides[currentHeroIndex].description }}
            </p>

            <div
              class="hero-cta-wrap flex flex-col sm:flex-row items-center justify-center gap-6 pt-10 animate-fade-in-delayed">
              <button @click="scrollToDiscovery"
                class="group relative px-12 py-5 bg-white text-black text-[10px] font-bold tracking-[0.3em] uppercase overflow-hidden transition-all duration-500 hover:text-white">
                <span class="relative z-10">EXPLORE COLLECTION</span>
                <div
                  class="absolute inset-0 bg-[var(--deep-burgundy)] translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                </div>
              </button>

              <button @click="router.push('/about')"
                class="group px-12 py-5 border border-white/30 text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500">
                OUR HERITAGE
              </button>
            </div>
          </div>
        </transition>
      </div>

      <!-- Navigation Controls -->
      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-8">
        <button @click="prevHero" class="text-white/40 hover:text-[var(--primary-gold)] transition-colors p-2">
          <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-sm" />
        </button>

        <div class="flex gap-3">
          <div v-for="(_, i) in heroSlides" :key="i" @click="goToSlide(i)"
            class="h-1 transition-all duration-500 cursor-pointer"
            :class="currentHeroIndex === i ? 'w-12 bg-[var(--primary-gold)]' : 'w-6 bg-white/20'"></div>
        </div>

        <button @click="nextHero" class="text-white/40 hover:text-[var(--primary-gold)] transition-colors p-2">
          <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-sm" />
        </button>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute right-12 bottom-12 z-30 hidden lg:flex flex-col items-center gap-6">
        <span class="text-[8px] font-bold tracking-[0.5em] text-white/30 uppercase vertical-text">SCROLL TO
          EXPLORE</span>
        <div class="w-[1px] h-20 bg-white/10 relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1/2 bg-[var(--primary-gold)] animate-scroll-line"></div>
        </div>
      </div>

      <!-- Floating Offer Tooltip Ad (Right Side) -->
      <div v-if="featuredDiscountProduct"
        class="absolute right-16 top-[45%] -translate-y-1/2 z-[100] hidden xl:block animate-fade-in-delayed">
        <div class="relative group cursor-pointer" @click="goToDetail(featuredDiscountProduct)">
          <!-- Decorative Frame -->
          <div
            class="absolute -inset-8 border border-[var(--primary-gold)]/20 rounded-full animate-spin-slow pointer-events-none">
          </div>
          <div
            class="absolute -inset-4 border border-[var(--primary-gold)]/10 rounded-full animate-spin-slow-reverse pointer-events-none">
          </div>

          <div
            class="w-48 h-48 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 p-2 overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-1000">
            <img :src="featuredDiscountProduct.image"
              class="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-1000">
            <!-- Content Overlay -->
            <div
              class="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black/60 group-hover:bg-black/30 transition-colors">
              <span
                class="text-[var(--primary-gold)] text-[9px] font-black tracking-[0.4em] uppercase mb-1 drop-shadow-lg">LIMITED
                OFFER</span>
              <h3
                class="text-white text-[10px] font-bold uppercase tracking-[0.2em] line-clamp-2 leading-tight px-3 drop-shadow-md group-hover:scale-110 transition-transform">
                {{ featuredDiscountProduct.name }}</h3>
              <div
                class="mt-3 bg-[var(--deep-burgundy)] text-white px-4 py-1.5 rounded-full text-[10px] font-black shadow-lg shadow-black/50 border border-white/10 animate-pulse">
                -{{ featuredDiscountProduct.discount }}% OFF
              </div>
            </div>
          </div>

          <!-- Tooltip Label (Always Visible) -->
          <div
            class="absolute right-full mr-12 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-100 translate-x-0 transition-all duration-700 pointer-events-none">
            <div
              class="bg-black/80 backdrop-blur-md border-r-4 border-r-[var(--primary-gold)] px-8 py-5 shadow-2xl relative animate-reveal-left">
              <!-- Diamond icon -->
              <div class="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--primary-gold)] rotate-45"></div>
              <p class="text-[9px] font-black uppercase tracking-[0.6em] text-[var(--primary-gold)] mb-1">Ahmadcloths
                Luxe</p>
              <p class="text-white text-xs font-bold uppercase tracking-[0.3em]">Signature Collection Sale</p>
              <div class="flex items-center gap-3 mt-3">
                <span class="h-[1px] w-6 bg-white/30"></span>
                <span class="text-white/60 text-[8px] font-bold tracking-[0.2em]">VIEW PRODUCT DETAILS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         HERITAGE & CRAFTSMANSHIP (AdSense Content Boost)
    ═══════════════════════════════════════════ -->
    <section class="heritage-narrative py-32 bg-[#fafaf8] dark:bg-[#050505] transition-colors duration-700 overflow-hidden">
      <div class="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div class="space-y-12 animate-reveal-left">
          <div class="relative">
            <div class="absolute -left-12 -top-12 text-[var(--primary-gold)]/5 text-9xl font-playfair italic -z-10 select-none">H</div>
            <h3 class="text-[10px] font-bold text-[var(--primary-gold)] tracking-[0.5em] uppercase mb-6">OUR HERITAGE</h3>
            <h2 class="text-4xl md:text-6xl font-playfair italic text-gray-900 dark:text-white leading-tight">Reviving the Soul of <br>Traditional Textiles</h2>
          </div>
          <div class="space-y-6 text-stone-500 dark:text-stone-400 leading-loose text-lg font-light">
            <p>
              At AHMADCLOTHESFABRICS, we believe that fashion is a bridge between the past and the future. Our boutique is dedicated to the preservation and innovation of traditional Pakistani craftsmanship, offering a curated selection of unstitched ladies' suits, luxury pret, and bespoke bridal wear.
            </p>
            <p>
              Since our establishment in 2026, we have focused on sourcing the highest quality fabrics—from the finest Egyptian cotton to hand-loomed silks and intricate chiffons. Each collection is a masterpiece of design, blending contemporary silhouettes with age-old embroidery techniques like Zardozi, Resham, and Tilla work.
            </p>
            <p>
              Our commitment to excellence extends beyond the garment. We support a network of master artisans in Lahore, ensuring that the legacy of handcrafted couture continues to thrive in a world of fast fashion. When you choose Ahmadcloths, you are choosing more than just an outfit; you are choosing a piece of heritage.
            </p>
            <p>
              Whether you are looking for an elegant unstitched lawn suit for the summer heat or a signature bridal ensemble that captures the essence of tradition, AHMADCLOTHESFABRICS provides an experience that is as unique as the women who wear our designs. Explore our collections and discover the artistry that defines us.
            </p>
          </div>
          <div class="flex items-center gap-12 pt-8 border-t border-[#d4af3711]">
            <div class="text-center">
              <span class="block text-3xl font-playfair italic text-[var(--primary-gold)]">100%</span>
              <span class="text-[8px] font-bold uppercase tracking-widest text-stone-400">Authentic Fabrics</span>
            </div>
            <div class="text-center">
              <span class="block text-3xl font-playfair italic text-[var(--primary-gold)]">Hand</span>
              <span class="text-[8px] font-bold uppercase tracking-widest text-stone-400">Embroidered</span>
            </div>
            <div class="text-center">
              <span class="block text-3xl font-playfair italic text-[var(--primary-gold)]">Ethical</span>
              <span class="text-[8px] font-bold uppercase tracking-widest text-stone-400">Sourcing</span>
            </div>
          </div>
        </div>

        <div class="relative animate-reveal-right">
          <div class="absolute -right-16 -bottom-16 w-64 h-64 bg-[var(--primary-gold)]/5 blur-[100px] rounded-full pointer-events-none"></div>
          <div class="grid grid-cols-2 gap-6 relative z-10">
            <div class="space-y-6 pt-12">
              <img src="https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop" class="w-full h-[350px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl" alt="Artisan Weaving">
              <img src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=800&auto=format&fit=crop" class="w-full h-[250px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl" alt="Luxury Fabric Detail">
            </div>
            <div class="space-y-6">
              <img src="https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=800&auto=format&fit=crop" class="w-full h-[250px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl" alt="Embroidery Craft">
              <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop" class="w-full h-[350px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl" alt="Boutique Studio">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         WHY CHOOSE AHMADCLOTHS (SEO & Value Boost)
    ═══════════════════════════════════════════ -->
    <section class="why-choose-us py-32 bg-white dark:bg-[#080808] border-t border-black/5 dark:border-white/5">
      <div class="max-w-7xl mx-auto px-8">
        <div class="text-center mb-24 space-y-6">
          <h3 class="text-[10px] font-bold text-[var(--primary-gold)] tracking-[0.6em] uppercase">THE AHMADCLOTHS ADVANTAGE</h3>
          <h2 class="text-4xl md:text-6xl font-playfair italic text-gray-900 dark:text-white">Excellence in Every Detail</h2>
          <div class="h-[1px] w-24 bg-[var(--primary-gold)] mx-auto mt-8"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div class="space-y-6 group">
            <div class="w-16 h-16 rounded-full border border-[var(--primary-gold)]/20 flex items-center justify-center text-[var(--primary-gold)] group-hover:bg-[var(--primary-gold)] group-hover:text-white transition-all duration-700">
              <font-awesome-icon icon="fa-solid fa-gem" class="text-xl" />
            </div>
            <h4 class="text-lg font-playfair italic text-gray-900 dark:text-white">Premium Quality</h4>
            <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-light">
              We source only the finest fabrics from globally recognized textile mills, ensuring that every unstitched suit and ready-to-wear piece meets the highest standards of luxury and durability.
            </p>
          </div>

          <div class="space-y-6 group">
            <div class="w-16 h-16 rounded-full border border-[var(--primary-gold)]/20 flex items-center justify-center text-[var(--primary-gold)] group-hover:bg-[var(--primary-gold)] group-hover:text-white transition-all duration-700">
              <font-awesome-icon icon="fa-solid fa-palette" class="text-xl" />
            </div>
            <h4 class="text-lg font-playfair italic text-gray-900 dark:text-white">Unique Designs</h4>
            <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-light">
              Our design team draws inspiration from both traditional Pakistani heritage and modern international fashion trends, creating unique patterns and silhouettes that you won't find anywhere else.
            </p>
          </div>

          <div class="space-y-6 group">
            <div class="w-16 h-16 rounded-full border border-[var(--primary-gold)]/20 flex items-center justify-center text-[var(--primary-gold)] group-hover:bg-[var(--primary-gold)] group-hover:text-white transition-all duration-700">
              <font-awesome-icon icon="fa-solid fa-leaf" class="text-xl" />
            </div>
            <h4 class="text-lg font-playfair italic text-gray-900 dark:text-white">Ethical Production</h4>
            <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-light">
              We are committed to fair labor practices and sustainable sourcing. By supporting Ahmadcloths, you are supporting a community of master artisans and promoting responsible fashion.
            </p>
          </div>

          <div class="space-y-6 group">
            <div class="w-16 h-16 rounded-full border border-[var(--primary-gold)]/20 flex items-center justify-center text-[var(--primary-gold)] group-hover:bg-[var(--primary-gold)] group-hover:text-white transition-all duration-700">
              <font-awesome-icon icon="fa-solid fa-earth-americas" class="text-xl" />
            </div>
            <h4 class="text-lg font-playfair italic text-gray-900 dark:text-white">Global Reach</h4>
            <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-light">
              With our secure worldwide shipping, the elegance of Pakistani couture is just a click away. We ensure that your luxury apparel reaches you safely and promptly, no matter where you are in the world.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="discovery" class="filter-section py-20 bg-white dark:bg-[#080808]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-b border-black/5 pb-8">
          <div class="space-y-2">
            <p class="text-[10px] font-bold tracking-[0.3em] text-[var(--primary-gold)] uppercase">THE COLLECTIONS</p>
            <h2 class="text-4xl font-playfair italic text-[var(--luxury-black)] dark:text-white">
              {{ selectedCategory === 'all' ? 'All Designs' : selectedCategory }}
            </h2>
          </div>
          <div class="flex items-center gap-4 text-gray-400 text-[10px] font-bold tracking-widest uppercase">
            <span class="text-[var(--deep-burgundy)]">{{ filteredProducts.length }}</span> ITEMS FOUND
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Filters (Simplified) -->
          <div class="filter-group">
            <label class="text-[9px] font-bold tracking-widest text-gray-400 uppercase mb-3 block">Category</label>
            <select v-model="selectedCategory"
              class="w-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 px-4 py-3 text-[10px] font-bold tracking-widest uppercase outline-none focus:border-[var(--primary-gold)]">
              <option value="all">All Categories</option>
              <option v-for="cat in productStore.categories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
          </div>
          <div class="filter-group">
            <label class="text-[9px] font-bold tracking-widest text-gray-400 uppercase mb-3 block">Type</label>
            <select v-model="selectedNature"
              class="w-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 px-4 py-3 text-[10px] font-bold tracking-widest uppercase outline-none focus:border-[var(--primary-gold)]">
              <option value="all">All Types</option>
              <option value="standard">Ready to Wear</option>
              <option value="premium">Luxury Collection</option>
              <option value="limited">Limited Edition</option>
            </select>
          </div>
          <div class="filter-group">
            <label class="text-[9px] font-bold tracking-widest text-gray-400 uppercase mb-3 block">Max Price: Rs. {{
              maxPrice }}</label>
            <input type="range" min="0" max="50000" step="1000" v-model="maxPrice"
              class="w-full accent-[var(--deep-burgundy)]">
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         PRODUCT GRID
    ═══════════════════════════════════════════ -->
    <section class="products-section pb-32 bg-white dark:bg-[#080808]">
      <div class="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6">
        <ProductCard v-for="product in displayedProducts" :key="product.id" :product="product"
          @click-product="goToDetail" />

        <!-- Loading State for API -->
        <div v-if="productStore.loading" class="col-span-full py-20 flex flex-col items-center justify-center space-y-6">
          <div class="w-16 h-16 border-4 border-gray-100 dark:border-white/5 border-t-[var(--primary-gold)] rounded-full animate-spin"></div>
          <p class="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--primary-gold)] animate-pulse">Syncing with Couture House...</p>
        </div>

        <!-- Empty State -->
        <div v-else-if="displayedProducts.length === 0" class="col-span-full py-32 text-center">
          <font-awesome-icon icon="fa-solid fa-shirt" class="text-4xl mb-6 text-gray-200" />
          <p class="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">No designs found</p>
        </div>
      </div>

      <div v-if="hasMore" class="mt-20 flex justify-center">
        <button @click="loadMore"
          class="border border-black dark:border-white px-12 py-4 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
          LOAD MORE DESIGNS
        </button>
      </div>
    </section>

    <!-- Monetization Slot: Sponsored Ad -->
    <SponsoredAd 
      title="Bridal Jewelry Couture" 
      description="Elevate your Ahmadcloths ensemble with our curated partner jewelry collections. Hand-crafted elegance for the modern bride." 
      button-text="SHOP JEWELRY"
      :image="JewelrySponsored"
      link="/shop"
    />

    <!-- Google AdSense: Home Page — Slot A (unique to this page) -->
    <!-- Replace slot="1111111111" with your actual AdSense Slot ID to enable ads -->
    <div class="max-w-5xl mx-auto px-6">
      <AdSenseUnit slot="7312321912" format="auto" :full-width-responsive="true" wrapper-class="my-10" />
    </div>

    <!-- Atelier Section -->
    <section class="atelier-section bg-[var(--luxury-cream)] dark:bg-[#080808] py-32 transition-colors duration-500">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <!-- Text Content -->
        <div class="lg:col-span-5 space-y-8">
          <div class="text-[var(--primary-gold)] text-[10px] font-bold tracking-[0.3em] uppercase">LUXURY PRET PAKISTAN</div>
          <h2
            class="text-5xl md:text-6xl font-playfair italic text-[var(--luxury-black)] dark:text-white leading-tight">
            UNSTITCHED<br><span class="text-[var(--deep-burgundy)]">LADIES SUITS</span></h2>
          <p class="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
            True elegance resides in the selection of fabrics. Every garment in the AHMADCLOTHESFABRICS atelier is crafted
            with precision — premium silk, luxury lawn, and the finest hand embroidery. Our artisans spend hundreds of 
            hours on each piece to ensure it meets our rigorous standards of quality and beauty.
          </p>
          <p class="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
            From the initial sketch to the final stitch, our process is a labor of love. We take pride in our ability to 
            revive forgotten techniques and present them in a way that resonates with the modern woman. Discover our 
            Luxury Pret and Bridal Couture collections today.
          </p>
          <div class="grid grid-cols-2 gap-8 py-6 border-y border-black/5 dark:border-white/5">
            <div v-for="stat in ['Master Artisans', 'Premium Fabrics']" :key="stat" class="flex items-center gap-3">
              <span class="w-1.5 h-1.5 rounded-full bg-[var(--primary-gold)]"></span>
              <span
                class="text-[10px] font-bold tracking-widest uppercase text-[var(--luxury-black)] dark:text-gray-300">{{
                  stat }}</span>
            </div>
          </div>
          <button class="btn-outline-gold" @click="router.push('/about')">Our Legacy</button>
        </div>
        <!-- Split Grid Images -->
        <div class="lg:col-span-7 grid grid-cols-2 gap-6 relative">
          <div class="space-y-6 pt-16">
            <div class="atelier-img-card h-[420px] overflow-hidden group">
              <img :src="Fugibles1" alt="Luxury Pret"
                class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div class="atelier-img-card h-[280px] overflow-hidden group">
              <img :src="Fugibles2" alt="Bridal Couture"
                class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
          <div class="space-y-6">
            <div class="atelier-img-card h-[320px] overflow-hidden group">
              <img :src="Fugibles3" alt="Artisan Crafts"
                class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div class="atelier-img-card h-[480px] overflow-hidden group">
              <img :src="Fugibles4" alt="Signature Designs"
                class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      class="marquee-strip-luxe bg-[var(--luxury-black)] dark:bg-black py-4 border-y border-[var(--primary-gold)]/10 overflow-hidden">
      <div class="marquee-track flex items-center whitespace-nowrap">
        <span v-for="n in 12" :key="n"
          class="marquee-item text-[10px] font-bold tracking-[0.6em] text-white/40 dark:text-amber-400/20 px-8 uppercase">
          LUXURY LAWN ✦ BRIDAL COUTURE ✦ READY TO WEAR ✦ M.PRINT ✦
        </span>
      </div>
    </div>




    <section class="curated-look-section bg-white dark:bg-[#050505] py-32 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div class="relative order-2 lg:order-1">
          <div class="look-image-frame bg-gray-50 p-4">
            <img :src="Fugibles" class="look-img transition-all duration-1000"
              alt="Seasonal Collection" loading="lazy" />
            <div
              class="absolute top-8 left-0 bg-[var(--deep-burgundy)] text-white px-6 py-2 text-[10px] font-bold tracking-[0.3em] -rotate-90 origin-top-left">
              SUMMER '26
            </div>
          </div>
        </div>
        <div class="space-y-10 order-1 lg:order-2">
          <div class="text-[var(--primary-gold)] text-[10px] font-bold tracking-[0.3em] uppercase">PAKISTANI DESIGNER SUITS</div>
          <h2
            class="text-5xl md:text-7xl font-playfair italic text-[var(--luxury-black)] dark:text-white leading-tight">
            SIGNATURE<br><span class="text-[var(--deep-burgundy)]">BRIDAL COUTURE</span></h2>
          <p class="text-gray-500 dark:text-gray-400 leading-relaxed text-lg font-light italic">
            Our latest collection explores the delicate balance of textures—from the intricate patterns of hand-woven
            fabrics to the luxury feel of our signature unstitched collections.
          </p>
          <button
            class="bg-[var(--deep-burgundy)] text-white px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[var(--luxury-black)] transition-all"
            @click="router.push('/shop')">
            VIEW COLLECTION
          </button>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         THE ESSENCE OF CRAFT
    ═══════════════════════════════════════════ -->
    <section class="craft-essence-section py-40 bg-[var(--luxury-cream)] dark:bg-[#050505] overflow-hidden">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div class="max-w-2xl space-y-6">
            <div class="text-[var(--primary-gold)] text-[10px] font-bold tracking-[0.3em] uppercase">THE CRAFT</div>
            <h2
              class="text-5xl md:text-7xl font-playfair italic text-[var(--luxury-black)] dark:text-white leading-tight">
              Alchemy of <span class="text-[var(--deep-burgundy)]">Pure</span> Artistry
            </h2>
          </div>
          <p class="text-gray-500 dark:text-gray-400 max-w-sm text-sm leading-relaxed pb-2">
            Every creation begins with a selection of the world's finest raw materials, transformed through time-honored
            techniques.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div v-for="(item, i) in craftItems" :key="i" class="craft-card group">
            <div class="relative overflow-hidden aspect-[3/4] mb-8 bg-gray-100">
              <img :src="item.image" :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
             
            </div>
            <h3
              class="text-xl font-playfair italic text-[var(--luxury-black)] dark:text-white mb-4 uppercase tracking-wider">
              {{ item.title }}</h3>
            <p class="text-gray-500 dark:text-gray-400 text-xs leading-relaxed tracking-wide">{{ item.desc }}</p>
            <div class="h-[1px] w-0 bg-[var(--deep-burgundy)] mt-6 group-hover:w-full transition-all duration-700">
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="patron-stories py-40 bg-white dark:bg-[#080808] border-y border-black/5 dark:border-white/5">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-24 space-y-4">
          <div class="text-[var(--primary-gold)] text-[10px] font-bold tracking-[0.3em] uppercase">THE PATRONS</div>
          <h2 class="text-4xl md:text-6xl font-playfair text-[var(--luxury-black)] dark:text-white uppercase">Voices of
            <span class="italic text-[var(--deep-burgundy)]">Excellence</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <div v-for="(patron, i) in patronStories" :key="i" class="patron-card space-y-8">
            <font-awesome-icon icon="fa-solid fa-quote-left" class="text-[var(--primary-gold)]/20 text-4xl" />
            <p class="text-lg text-gray-600 dark:text-gray-300 italic font-light leading-relaxed">
              "{{ patron.quote }}"
            </p>
            <div class="flex items-center gap-6 pt-8 border-t border-black/5 dark:border-white/5">
              <div class="w-12 h-12 rounded-full overflow-hidden">
                <img :src="patron.avatar" :alt="patron.name" class="w-full h-full object-cover" />
              </div>
              <div>
                <div class="text-xs font-bold uppercase tracking-widest text-[var(--luxury-black)] dark:text-white">{{
                  patron.name }}</div>
                <div class="text-[9px] uppercase tracking-[0.2em] text-[var(--primary-gold)] mt-1">{{ patron.role }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ═══════════════════════════════════════════
         CATEGORY TILES
    ═══════════════════════════════════════════ -->
    <section class="categories-section bg-[var(--luxury-cream)] dark:bg-black py-32" aria-label="Shop Categories">
      <div class="text-center mb-16">
        <div class="text-[var(--primary-gold)] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">COLLECTIONS</div>
        <h2 class="text-4xl md:text-5xl font-playfair italic text-[var(--luxury-black)] dark:text-white">SHOP BY
          CATEGORY</h2>
      </div>

      <div class="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        <div v-for="(cat, i) in categoryTiles" :key="cat.name"
          class="relative group cursor-pointer aspect-[3/4] overflow-hidden" @click="router.push(`/shop/${cat.name}`)">
          <img :src="cat.image" :alt="cat.name"
            class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <p class="text-[var(--primary-gold)] text-[10px] font-bold tracking-[0.3em] uppercase mb-2">{{ cat.sub }}
            </p>
            <h3 class="text-white text-3xl font-playfair italic mb-6">{{ cat.name }}</h3>
            <div
              class="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </div>
          </div>
        </div>
      </div>
    </section>



   
    <!-- ═══════════════════════════════════════════
         FAQ SECTION (Content Boost)
    ═══════════════════════════════════════════ -->
    <section class="faq-section py-32 bg-[#fafaf8] dark:bg-[#050505]">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-16 space-y-4">
          <h3 class="text-[10px] font-bold text-[var(--primary-gold)] tracking-[0.5em] uppercase">FREQUENTLY ASKED</h3>
          <h2 class="text-4xl font-playfair italic text-gray-900 dark:text-white">Questions & Answers</h2>
        </div>
        
        <div class="space-y-8">
          <div v-for="(faq, i) in faqs" :key="i" class="border-b border-black/5 dark:border-white/5 pb-8">
            <h4 class="text-lg font-playfair text-gray-900 dark:text-white mb-4">{{ faq.q }}</h4>
            <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-light">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="heritage-banner relative py-40 overflow-hidden bg-black text-white">

      <!-- Background Images -->
      <div class="absolute inset-0">

        <!-- First Image -->
        <img :src="Fugibles1" class="absolute inset-0 w-full h-full object-cover opacity-70" loading="lazy" />

        <!-- Second Image with blend -->
        <img :src="Fugibles4" class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
          loading="lazy" />

      </div>

      <!-- Softer Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

      <!-- Content -->
      <div class="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div class="space-y-8">
          <p class="heritage-tag text-amber-400">OUR PHILOSOPHY</p>

          <h2 class="heritage-title text-4xl md:text-6xl font-black font-playfair uppercase leading-tight">
            THE ART OF<br>
            <span class="italic text-amber-200">COUTURE</span>
          </h2>

          <p class="heritage-desc text-gray-300 max-w-lg leading-relaxed text-lg font-light">
            We believe the finest fabrics tell their own story. AHMADCLOTHESFABRICS represents the commitment to quality
            and the joy of elegance through artisanal craftsmanship. Our collections are designed to make every woman 
            feel confident and beautiful, blending the rich heritage of Pakistan with modern fashion sensibilities.
          </p>
          <p class="heritage-desc text-gray-300 max-w-lg leading-relaxed text-sm font-light">
            Each season, we bring you new designs that push the boundaries of luxury. From our signature unstitched 
            collections to our bespoke bridal wear, we are dedicated to providing the highest level of service and 
            craftsmanship. Join us on this journey of elegance and style.
          </p>
          <div class="flex items-center gap-10">
            <div v-for="stat in brandStats" :key="stat.label">
              <div class="text-3xl font-black text-amber-400 mb-1">{{ stat.value }}</div>
              <div class="text-[10px] uppercase tracking-[0.2em] text-gray-400">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Card -->
        <div class="hidden lg:block relative">
          <div
            class="w-full h-[500px] border border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-black/30 backdrop-blur-2xl group">


            <img :src="Fugibles1" class="img-zoom" alt="Limited Edition" />


            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div class="absolute bottom-8 left-8 right-8">
              <p class="text-xs font-black tracking-widest text-amber-400 mb-2">
                PRODUCT ARCHIVE
              </p>

              <h4 class="text-2xl font-black tracking-tight uppercase">
                TRADITION & TRENDS
              </h4>

              <div class="h-0.5 w-12 bg-amber-400 mt-4 group-hover:w-full transition-all duration-700"></div>
            </div>

          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'


import Fugibles from "../assets/ladies.jpg"
import Fugibles1 from "../assets/ladies3.jpg"

import Fugibles2 from "../assets/ladies1.jpg"
import Fugibles3 from "../assets/ladies2.jpg"
import Fugibles4 from "../assets/ladies1.jpg"

import { useProductsStore } from '../stores/products'
import ProductCard from '../components/ProductCard.vue'
import SponsoredAd from '../components/Home/SponsoredAd.vue'
import AdSenseUnit from '../components/AdSenseUnit.vue'
import JewelrySponsored from '../assets/jewelry_sponsored.png'

const isExpanded = ref(false)
const isExiting = ref(false)
const currentHeroIndex = ref(0)
const scrollY = ref(0)
const heroTimer = ref(null)

const heroSlides = [
  { image: Fugibles1, subtitle: 'LUXURY BRIDAL', title1: 'TIMLESS', titleHighlight: 'COUTURE', title2: '2026', description: 'A masterpiece of hand-embroidered artisanal couture.' },
  { image: Fugibles2, subtitle: 'PREMIUM LAWN', title1: 'HERITAGE', titleHighlight: 'UNSTITCHED', title2: 'COLLECTION', description: 'Traditional weaving with modern aesthetics and graceful designs.' },
  { image: Fugibles3, subtitle: 'DESIGNER PRET', title1: 'PURE', titleHighlight: 'LUXURY', title2: 'ELEGANCE', description: 'Delicate, stylish, and packed with grace for the modern woman.' },
  { image: Fugibles4, subtitle: 'M.PRINT', title1: 'CHIC', titleHighlight: 'STYLE', title2: 'PRINTS', description: 'We believe the finest fabrics tell their own story.' }
]

const router = useRouter()
const productStore = useProductsStore()
const limit = ref(12)
const selectedCategory = ref('all')
const selectedNature = ref('all')
const maxPrice = ref(500000)
const isCatOpen = ref(false)
const isNatureOpen = ref(false)

const brandStats = [
  { label: 'Master Artisans', value: '50+' },
  { label: 'Handcrafted', value: '100%' },
  { label: 'Exclusive Designs', value: '1000+' }
]

const craftItems = [
  {
    title: 'Heritage Weaving',
    desc: 'Our fabrics are woven using traditional techniques passed down through generations of master artisans.',
    image: Fugibles2
  },
  {
    title: 'Intricate Embroidery',
    desc: 'Each piece features hand-crafted embroidery, using the finest silk threads and traditional tilla work.',
    image: Fugibles3
  },
  {
    title: 'Bespoke Tailoring',
    desc: 'Precision is our hallmark. Each garment is tailored to perfection, ensuring a flawless silhouette.',
    image: Fugibles4
  }
]

const patronStories = [
  {
    quote: "The attention to detail at AHMADCLOTHESFABRICS is simply unparalleled. Their bridal couture is a masterclass in elegance.",
    name: "Eleanor Vance",
    role: "Fashion Curator",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop"
  },
  {
    quote: "Every piece feels like a journey through an artisan's workshop. The unstitched fabric quality is the best I've ever seen.",
    name: "Marcus Thorne",
    role: "Fashion Critic",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop"
  },
  {
    quote: "AHMADCLOTHESFABRICS has become our go-to for all celebrations. Their festive collections are as much a work of art as they are beautiful.",
    name: "Julianna Ross",
    role: "Event Designer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop"
  }
]

const faqs = [
  {
    q: 'What types of fabrics do you use?',
    a: 'We use the highest quality fabrics including premium Egyptian cotton, hand-loomed silk, luxury lawn, and delicate chiffons. Each piece is selected for its durability and luxurious feel.'
  },
  {
    q: 'Do you offer international shipping?',
    a: 'Yes, AHMADCLOTHESFABRICS provides secure worldwide shipping. Delivery times and costs vary depending on the destination. You can track your order in real-time through our order tracking portal.'
  },
  {
    q: 'How can I care for my luxury garments?',
    a: 'We recommend professional dry cleaning for all our embroidered and luxury pret pieces. For unstitched lawn, gentle hand washing with mild detergent is recommended to maintain the fabric\'s integrity and color.'
  },
  {
    q: 'Can I customize a bridal outfit?',
    a: 'Yes, we offer custom bridal consultations in Lahore. Our team of master artisans and designers will work with you to create a signature bridal ensemble that reflects your personal style.'
  }
]

const heroWrapStyle = computed(() => ({
  transform: `translateY(${scrollY.value * 0.35}px) scale(${isExpanded.value ? 1.05 : 1})`,
  filter: isExpanded.value ? 'brightness(0.6) blur(2px)' : 'none'
}))

const handleScroll = () => {
  scrollY.value = window.scrollY
}
const scrollToDiscovery = () => document.getElementById('discovery')?.scrollIntoView({ behavior: 'smooth' })

const resetHeroTimer = () => {
  if (heroTimer.value) clearInterval(heroTimer.value)
  heroTimer.value = setInterval(() => {
    if (isExpanded.value && !isExiting.value) {
      nextHero()
    }
  }, 10000)
}

const handleHeroClick = () => {
  if (isExiting.value) return
  if (!isExpanded.value) isExpanded.value = true
  else {
    isExiting.value = true
    setTimeout(() => {
      currentHeroIndex.value = (currentHeroIndex.value + 1) % heroSlides.length
      isExiting.value = false
      isExpanded.value = false
      resetHeroTimer()
    }, 1200)
  }
}

const onImageClick = i => i === currentHeroIndex.value ? handleHeroClick() : goToSlide(i)
const nextHero = () => { isExiting.value = true; setTimeout(() => { currentHeroIndex.value = (currentHeroIndex.value + 1) % heroSlides.length; isExiting.value = false; resetHeroTimer() }, 1000) }
const prevHero = () => { isExiting.value = true; setTimeout(() => { currentHeroIndex.value = (currentHeroIndex.value - 1 + heroSlides.length) % heroSlides.length; isExiting.value = false; resetHeroTimer() }, 1000) }
const goToSlide = i => { isExiting.value = true; setTimeout(() => { currentHeroIndex.value = i; isExiting.value = false; resetHeroTimer() }, 1000) }

const getHeroImageState = index => {
  const len = heroSlides.length
  const focus = currentHeroIndex.value
  const b1 = (focus + 1) % len
  const b2 = (focus + 2) % len
  if (isExiting.value && index === focus) return 'exiting'
  if (index === focus) return isExpanded.value ? 'expanded' : 'focus'
  if (isExpanded.value) return 'idle'
  if (index === b1) return 'behind-1'
  if (index === b2) return 'behind-2'
  return 'idle'
}

onMounted(() => {
  productStore.fetchProducts()
  resetHeroTimer()
  window.addEventListener('scroll', handleScroll, { passive: true })
})
onUnmounted(() => {
  if (heroTimer.value) clearInterval(heroTimer.value)
  window.removeEventListener('scroll', handleScroll)
})

// Filtering logic
const filteredProducts = computed(() =>
  productStore.products.filter(p => {
    const matchCat = selectedCategory.value === 'all' || p.category?.toLowerCase() === selectedCategory.value.toLowerCase() || p.parentCategory?.toLowerCase() === selectedCategory.value.toLowerCase()
    const matchNature = selectedNature.value === 'all' || p.nature?.toLowerCase() === selectedNature.value.toLowerCase()
    const matchPrice = p.price <= maxPrice.value
    return matchCat && matchNature && matchPrice
  })
)

const displayedProducts = computed(() => filteredProducts.value.slice(0, limit.value))
const hasMore = computed(() => limit.value < filteredProducts.value.length)
const loadMore = () => limit.value += 12
watch([selectedCategory, selectedNature, maxPrice], () => limit.value = 12)
const goToDetail = product => router.push(`/product/${product.id}`)

const featuredDiscountProduct = computed(() => {
  if (!productStore.products || productStore.products.length === 0) return null;
  // Try to find a real discounted product
  const discounted = productStore.products.filter(p => p.discount > 0);
  if (discounted.length > 0) {
    return discounted.sort((a, b) => b.discount - a.discount)[0];
  }
  // If no products have a discount in the database, grab the very first product 
  // and artificially apply a 30% discount merely for presentation in the Hero Section.
  const sample = { ...productStore.products[0] };
  sample.discount = 30; // Fake it for the Hero display
  return sample;
})

const categoryTiles = [
  { name: 'Unstitched Lawn', sub: 'Summer Collections', image: Fugibles1 },
  { name: 'Bridal Couture', sub: 'Wedding Essentials', image: Fugibles2 },
  { name: 'Luxury Chiffon', sub: 'Evening Wear', image: Fugibles3 },
  { name: 'Pret-Wear', sub: 'Ready-to-Wear', image: Fugibles4 }
]
</script>


<style scoped>
@reference "../style.css";

.hero-cinematic {
  background: #000;
}

.animate-ken-burns {
  animation: ken-burns 20s ease infinite alternate;
}

@keyframes ken-burns {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.1);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease forwards;
}

.animate-fade-in-delayed {
  animation: fade-in 1s ease forwards 0.5s;
  opacity: 0;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-scroll-line {
  animation: scroll-line 2s infinite;
}

@keyframes scroll-line {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(100%);
  }
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-scale-enter-from {
  opacity: 0;
  transform: scale(1.1);
}

.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.slide-up-enter-active {
  transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.vertical-text {
  writing-mode: vertical-rl;
}

.hero-main-title {
  letter-spacing: -0.02em;
}

.atelier-img-card {
  position: relative;
  overflow: hidden;
}

.btn-outline-gold {
  @apply px-10 py-4 border border-[var(--primary-gold)] text-[var(--primary-gold)] text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:bg-[var(--primary-gold)] hover:text-white;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-slow-reverse {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 15s linear infinite;
}

.animate-spin-slow-reverse {
  animation: spin-slow-reverse 10s linear infinite;
}

@keyframes reveal-left {
  from {
    opacity: 0;
    transform: translateX(20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-reveal-left {
  animation: reveal-left 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}
</style>