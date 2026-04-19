<template>
  <div class="luxury-home overflow-x-hidden">

    <!-- ═══════════════════════════════════════════
         SEO CONTENT (VISUALLY HIDDEN)
    ═══════════════════════════════════════════ -->
    <section class="sr-only">
      <h1>AhmadClothesHouse | Premium Unstitched Ladies Suits & Luxury Pret | Worldwide Shipping</h1>
      <p>AhmadClothesHouse (formerly AhmadClothesFabrics) is your premier destination for high-quality Pakistani designer suits. Discover the finest selection of handcrafted unstitched fabrics, luxury pret, and bridal couture. Our premium boutique offers designer embroidered lawn, chiffon collections, and signature bridal wear. 
        Top-ranked Pakistani designer suits for our customers in Pakistan, USA, UK, Canada, UAE, and Australia. Experience premium fashion in Lahore with express worldwide shipping.</p>
      <ul>
        <li>AhmadClothesHouse Pakistani Suits Online</li>
        <li>Premium Unstitched Ladies Suits Pakistan</li>
        <li>Luxury Pret Pakistan - Ready to Wear Online</li>
        <li>Bridal Couture & Wedding Wear Lahore</li>
        <li>Pakistani Designer Suits Online USA, UK & Canada</li>
        <li>Embroidered Lawn & Chiffon Collections 2026</li>
        <li>Buy Unstitched Pakistani Suits Online Australia</li>
        <li>Festive Wear & Eid Collections Shipping Worldwide</li>
        <li>Exclusive Silk and Velvet Designs by AhmadClothesHouse</li>
        <li>Hand-embroidered Masterpieces for Overseas Pakistanis</li>
        <li>Luxury Apparel & Fashion Catalog AhmadClothesHouse</li>
      </ul>
    </section>

    <!-- ═══════════════════════════════════════════
         GSAP LUXURY HERO SECTION
    ═══════════════════════════════════════════ -->

    <!-- Custom Magnetic Cursor -->
    <div ref="cursorOuter" class="gsap-cursor-outer" aria-hidden="true"></div>
    <div ref="cursorInner" class="gsap-cursor-inner" aria-hidden="true"></div>

    <section
      ref="heroSection"
      class="gsap-hero min-h-screen relative flex items-center justify-center overflow-hidden"
      aria-label="Hero"
      @mousemove="onHeroMouseMove"
      :style="{ backgroundImage: `url(${ShopInterior})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
    >
      <!-- Premium Dark Overlay for readability -->
      <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-[1]"></div>
      
      <!-- Ambient Glow Background -->
      <div class="hero-ambient-bg z-[2]"></div>

      <!-- Floating Particles Canvas -->
      <canvas ref="particleCanvas" class="absolute inset-0 w-full h-full pointer-events-none z-[1]"></canvas>

      <!-- Mouse Spotlight -->
      <div ref="spotlight" class="hero-spotlight pointer-events-none z-[2]"></div>

      <!-- Golden Grain Overlay -->
      <div class="hero-grain-overlay pointer-events-none z-[3]"></div>

      <!-- Main Grid -->
      <div class="max-w-[1700px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

        <!-- Collage Column -->
        <div ref="collageCol" class="lg:col-span-7 order-2 lg:order-1 relative">
          <div class="hero-orb-behind"></div>

          <div class="collage-grid grid grid-cols-2 gap-4 lg:gap-6 relative z-10">
            <!-- Left Column -->
            <div class="space-y-4 lg:space-y-6">
              <div ref="colImg0" @click="openZoom(HeroCollage1)" class="gsap-collage-item group overflow-hidden shadow-2xl cursor-zoom-in">
                <div class="gsap-collage-shimmer"></div>
                <img :src="HeroCollage1" alt="Luxury Pakistani Suit"
                  class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                <div class="collage-gold-border"></div>
              </div>
              <div ref="colImg2" @click="openZoom(HeroCollage3)" class="gsap-collage-item group overflow-hidden shadow-xl aspect-[1/0.8] cursor-zoom-in">
                <div class="gsap-collage-shimmer"></div>
                <img :src="HeroCollage3" alt="Intricate Embroidery"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                <div class="collage-gold-border"></div>
              </div>
            </div>
            <!-- Right Column -->
            <div class="space-y-4 lg:space-y-6 pt-12 lg:pt-20">
              <div ref="colImg1" @click="openZoom(HeroCollage2)" class="gsap-collage-item group overflow-hidden shadow-xl aspect-[1.2/1] cursor-zoom-in">
                <div class="gsap-collage-shimmer"></div>
                <img :src="HeroCollage2" alt="Modern Luxury Collection"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                <div class="collage-gold-border"></div>
              </div>
              <div ref="colImg3" @click="openZoom(HeroCollage4)" class="gsap-collage-item group overflow-hidden shadow-2xl cursor-zoom-in">
                <div class="gsap-collage-shimmer"></div>
                <img :src="HeroCollage4" alt="Premium Fabrics"
                  class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                <div class="collage-gold-border"></div>
              </div>
            </div>
          </div>

          <!-- Floating badge -->
          <div ref="floatingBadge" class="hero-floating-badge hidden lg:flex">
            <div class="hero-badge-ring"></div>
            <div class="hero-badge-content">
              <span class="text-[var(--primary-gold)] text-[7px] font-black tracking-widest uppercase">EST.</span>
              <span class="text-white text-lg font-playfair font-bold leading-none">2026</span>
              <span class="text-gray-400 text-[7px] font-bold tracking-widest uppercase">LAHORE</span>
            </div>
          </div>
        </div>

        <!-- Text Column -->
        <div ref="textCol" class="lg:col-span-5 space-y-8 order-1 lg:order-2 text-center lg:text-left z-10">

          <!-- Label -->
          <div ref="heroLabel" class="flex items-center justify-center lg:justify-start gap-4">
            <span class="h-[1px] w-8 bg-[var(--primary-gold)] hero-line-left"></span>
            <span class="text-[10px] font-bold tracking-[0.6em] text-[var(--primary-gold)] uppercase hero-eyebrow">
              AhmadCloths Luxe
            </span>
            <span class="h-[1px] w-8 bg-[var(--primary-gold)] hero-line-right"></span>
          </div>

          <!-- Split Title -->
          <h1 ref="heroTitle" class="hero-main-title font-playfair text-white dark:text-white leading-[0.9] overflow-hidden drop-shadow-[0_10px_20px_rgba(0,0,0,1)]">
            <span class="hero-char-line block">
              <span
                v-for="(ch, i) in titleLine1"
                :key="'t'+i"
                class="hero-char inline-block"
                :style="ch === ' ' ? 'margin-right:0.5rem; font-size:clamp(3rem,8vw,7rem); font-style:italic; font-weight:300;' : 'font-size:clamp(3rem,8vw,7rem); font-style:italic; font-weight:300;'"
              >{{ ch === ' ' ? '\u00a0' : ch }}</span>
            </span>
            <span class="hero-char-line block -mt-2">
              <span
                v-for="(ch, i) in titleLine2"
                :key="'c'+i"
                class="hero-char inline-block"
                :style="'font-size:clamp(3.5rem,10vw,9rem); font-weight:900; letter-spacing:-0.04em; color:var(--primary-gold); text-shadow: 0 0 40px rgba(212,175,55,0.3);'"
              >{{ ch === ' ' ? '\u00a0' : ch }}</span>
            </span>
          </h1>

          <!-- Ornament -->
          <div ref="heroOrnament" class="flex items-center justify-center lg:justify-start gap-3">
            <span class="w-8 h-[1px] bg-[var(--primary-gold)]/40"></span>
            <span class="text-[var(--primary-gold)]/60 text-lg">✦</span>
            <span class="w-8 h-[1px] bg-[var(--primary-gold)]/40"></span>
          </div>

          <!-- Description -->
          <p ref="heroDesc" class="hero-description text-white dark:text-white text-sm sm:text-base max-w-md mx-auto lg:mx-0 font-medium tracking-wide leading-relaxed drop-shadow-md">
            A masterpiece of hand-embroidered artisanal couture. Discover the soul of traditional Pakistani textiles revived for the modern woman.
          </p>

          <!-- CTA Buttons -->
          <div ref="heroCta" class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4">
            <button
              ref="ctaPrimary"
              @click="scrollToDiscovery"
              class="gsap-btn-primary group relative overflow-hidden"
            >
              <span class="gsap-btn-fill"></span>
              <span class="relative z-10 flex items-center gap-3">
                EXPLORE COLLECTION
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </span>
            </button>

            <button
              ref="ctaSecondary"
              @click="router.push('/about')"
              class="gsap-btn-secondary group relative"
            >
              <span class="gsap-btn-ring"></span>
              OUR HERITAGE
            </button>
          </div>

          <!-- Social Proof -->
          <div ref="heroSocial" class="flex items-center justify-center lg:justify-start gap-5 pt-8 border-t border-black/5 dark:border-white/5">
            <div class="flex -space-x-2.5">
              <img v-for="i in 3" :key="i"
                :src="`https://i.pravatar.cc/100?u=ahmad${i}`"
                class="w-8 h-8 rounded-full border-2 border-white dark:border-black object-cover" />
            </div>
            <div>
              <div class="flex gap-0.5 mb-0.5">
                <span v-for="s in 5" :key="s" class="text-[var(--primary-gold)] text-[10px]">★</span>
              </div>
              <span class="text-[9px] font-bold tracking-widest uppercase text-gray-400">Trusted by 10k+ Patrons</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div ref="scrollIndicator" class="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 hidden lg:flex flex-col items-center gap-3">
        <span class="text-[8px] font-bold tracking-[0.4em] uppercase text-gray-400">SCROLL</span>
        <div class="w-[1px] h-14 bg-black/10 dark:bg-white/10 relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1/2 bg-[var(--primary-gold)] animate-scroll-line"></div>
        </div>
      </div>

      <!-- Floating Discount Badge -->
      <div v-if="featuredDiscountProduct"
        class="absolute right-12 bottom-12 z-[100] hidden xl:block"
        ref="discountBubble"
      >
        <div class="relative group cursor-pointer gsap-discount-bubble" @click="goToDetail(featuredDiscountProduct)">
          <div class="w-28 h-28 rounded-full border border-[var(--primary-gold)]/30 p-1 overflow-hidden shadow-2xl group-hover:scale-105 transition-all bg-black/20 backdrop-blur-2xl">
            <img :src="featuredDiscountProduct.image" class="w-full h-full object-cover rounded-full">
            <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-2 bg-black/50 rounded-full">
              <span class="text-[var(--primary-gold)] text-[7px] font-black tracking-[0.3em] uppercase mb-0.5">HOT</span>
              <div class="bg-[var(--deep-burgundy)] text-white px-2 py-0.5 rounded-full text-[8px] font-black animate-pulse">
                -{{ featuredDiscountProduct.discount }}%
              </div>
            </div>
          </div>
          <span class="absolute -top-3 -right-3 w-7 h-7 bg-[var(--primary-gold)] rounded-full flex items-center justify-center text-black text-[8px] font-black animate-bounce">✦</span>
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
            <h2 class="text-4xl md:text-6xl font-playfair italic text-gray-900 dark:text-white leading-tight">Reviving the Soul of <br>Traditional Textiles at AhmadClothesHouse</h2>
          </div>
          <div class="space-y-6 text-stone-500 dark:text-stone-400 leading-loose text-lg font-light">
            <p>
              At AhmadClothesHouse (formerly AHMADCLOTHESFABRICS), we believe that fashion is a bridge between the past and the future. Our boutique is dedicated to the preservation and innovation of traditional Pakistani craftsmanship, offering a curated selection of unstitched ladies' suits, luxury pret, and bespoke bridal wear.
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
              <img :src="Highlight1" class="w-full h-[350px] object-cover transition-all duration-1000 shadow-2xl hover:scale-105" alt="Premium Pakistani Suit">
              <img :src="Highlight2" class="w-full h-[250px] object-cover transition-all duration-1000 shadow-2xl hover:scale-105" alt="Intricate Embroidery Detail">
            </div>
            <div class="space-y-6">
              <img :src="Highlight3" class="w-full h-[250px] object-cover transition-all duration-1000 shadow-2xl hover:scale-105" alt="Boutique Luxury Pret">
              <img :src="Highlight4" class="w-full h-[350px] object-cover transition-all duration-1000 shadow-2xl hover:scale-105" alt="Luxury Fabric Selection">
            </div>
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
            <input type="range" min="0" max="500000" step="1000" v-model="maxPrice"
              class="w-full accent-[var(--deep-burgundy)]">
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         PRODUCT GRID
    ═══════════════════════════════════════════ -->
    <section class="products-section pb-32 bg-white dark:bg-[#080808] min-h-[600px]">
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
    <!-- ═══════════════════════════════════════════
         WHY CHOOSE AHMADCLOTHS (SEO & Value Boost)
    ═══════════════════════════════════════════ -->
   

    <!-- Collaboration Slot: Sponsored Brands -->
    <SponsoredAd 
      title="Elite Designer Collaborations" 
      description="Exclusive partnership with Sana Safinaz, Aneela's Collection, Maria B, and Nishat Brand. Experience the pinnacle of Pakistani fashion with an exclusive 30% discount on all collaboration pieces." 
      button-text="VIEW COLLABORATIONS"
      :image="Fugibles3"
      link="/shop"
      :brands="[
        { name: 'Sana Safinaz', link: 'https://www.sanasafinaz.com/' },
        { name: 'Aneelas Collection', link: 'https://www.facebook.com/aneelascollection/' },
        { name: 'Maria B', link: 'https://www.mariab.pk/' },
        { name: 'Nishat Brand', link: 'https://nishatlinen.com/' }
      ]"
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
          SANA SAFINAZ ✦ ANEELAS COLLECTION ✦ MARIA B ✦ NISHAT BRAND ✦
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
    <!-- <section class="craft-essence-section py-40 bg-[var(--luxury-cream)] dark:bg-[#050505] overflow-hidden">
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
    </section> -->


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

    <!-- ═══════════════════════════════════════════
         IMAGE ZOOM MODAL (Lightbox)
    ═══════════════════════════════════════════ -->
    <transition name="zoom">
      <div v-if="isZoomOpen" class="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-12 cursor-zoom-out" @click="closeZoom">
        <div class="absolute inset-0 bg-black/95 backdrop-blur-3xl"></div>
        
        <!-- Luxury Close Button -->
        <button class="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[111]">
          <font-awesome-icon icon="fa-solid fa-times" class="text-3xl" />
        </button>

        <img :src="zoomImg" class="max-w-full max-h-full object-contain relative z-10 shadow-3xl animate-zoom-in" alt="Zoomed View">
        
        <div class="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[0.6em] text-[var(--primary-gold)] uppercase animate-fade-in">
          AhmadCloth Luxe Gallery
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'


import Fugibles from "C:/Users/ltc/.gemini/antigravity/brain/b52d09ca-52b9-41bc-a17b-2f944043cc90/hero_collage_3_1776631788553.png"
import Fugibles1 from "C:/Users/ltc/.gemini/antigravity/brain/b52d09ca-52b9-41bc-a17b-2f944043cc90/hero_collage_2_1776631769735.png"
import Fugibles2 from "C:/Users/ltc/.gemini/antigravity/brain/b52d09ca-52b9-41bc-a17b-2f944043cc90/highlight_1_new_val_1776632331730.png"
import Fugibles3 from "C:/Users/ltc/.gemini/antigravity/brain/b52d09ca-52b9-41bc-a17b-2f944043cc90/hero_collage_1_1776631751767.png"
import Fugibles4 from "C:/Users/ltc/.gemini/antigravity/brain/b52d09ca-52b9-41bc-a17b-2f944043cc90/hero_collage_4_new_1776632263023.png"

import HeroCollage1 from "C:/Users/ltc/.gemini/antigravity/brain/b52d09ca-52b9-41bc-a17b-2f944043cc90/hero_collage_1_1776631751767.png"
import HeroCollage2 from "C:/Users/ltc/.gemini/antigravity/brain/b52d09ca-52b9-41bc-a17b-2f944043cc90/hero_collage_2_1776631769735.png"
import HeroCollage3 from "C:/Users/ltc/.gemini/antigravity/brain/b52d09ca-52b9-41bc-a17b-2f944043cc90/hero_collage_3_1776631788553.png"
import HeroCollage4 from "C:/Users/ltc/.gemini/antigravity/brain/b52d09ca-52b9-41bc-a17b-2f944043cc90/hero_collage_4_new_1776632263023.png"

import Highlight1 from "C:/Users/ltc/.gemini/antigravity/brain/b52d09ca-52b9-41bc-a17b-2f944043cc90/highlight_1_new_val_1776632331730.png"
import Highlight2 from "C:/Users/ltc/.gemini/antigravity/brain/b52d09ca-52b9-41bc-a17b-2f944043cc90/hero_collage_2_1776631769735.png"
import Highlight3 from "C:/Users/ltc/.gemini/antigravity/brain/b52d09ca-52b9-41bc-a17b-2f944043cc90/hero_collage_3_1776631788553.png"
import Highlight4 from "C:/Users/ltc/.gemini/antigravity/brain/b52d09ca-52b9-41bc-a17b-2f944043cc90/hero_collage_4_new_1776632263023.png"
import ShopInterior from "../assets/hero/shop_interior.png"

import { useProductsStore } from '../stores/products'
import ProductCard from '../components/ProductCard.vue'
import SponsoredAd from '../components/Home/SponsoredAd.vue'
import AdSenseUnit from '../components/AdSenseUnit.vue'
import JewelrySponsored from "C:/Users/ltc/.gemini/antigravity/brain/b52d09ca-52b9-41bc-a17b-2f944043cc90/highlight_1_new_val_1776632331730.png"

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ── Title character arrays for split-text ───────────────────
const titleLine1 = 'TIMELESS'.split('')
const titleLine2 = 'COUTURE'.split('')

// ── GSAP Refs ──────────────────────────────────────────
const heroSection     = ref(null)
const cursorOuter    = ref(null)
const cursorInner    = ref(null)
const spotlight      = ref(null)
const particleCanvas = ref(null)
const collageCol     = ref(null)
const colImg0        = ref(null)
const colImg1        = ref(null)
const colImg2        = ref(null)
const colImg3        = ref(null)
const textCol        = ref(null)
const heroLabel      = ref(null)
const heroTitle      = ref(null)
const heroOrnament   = ref(null)
const heroDesc       = ref(null)
const heroCta        = ref(null)
const heroSocial     = ref(null)
const ctaPrimary     = ref(null)
const ctaSecondary   = ref(null)
const floatingBadge  = ref(null)
const discountBubble = ref(null)
const scrollIndicator = ref(null)
const isZoomOpen = ref(false)
const zoomImg = ref('')

const isExpanded = ref(false)
const isExiting = ref(false)
const currentHeroIndex = ref(0)
const scrollY = ref(0)
const heroTimer = ref(null)

const openZoom = (img) => {
  zoomImg.value = img
  isZoomOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeZoom = () => {
  isZoomOpen.value = false
  document.body.style.overflow = ''
}

// ── Particle System ────────────────────────
function initParticles() {
  const canvas = particleCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  let particles = []
  let animId

  function resize() {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }
  resize()
  window.addEventListener('resize', resize)

  const GOLD = ['rgba(212,175,55,', 'rgba(255,215,100,', 'rgba(184,148,34,']
  for (let i = 0; i < 55; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.4,
      alpha: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.35 + 0.08,
      drift: (Math.random() - 0.5) * 0.3,
      color: GOLD[Math.floor(Math.random() * GOLD.length)]
    })
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particles.forEach(p => {
      p.y -= p.speed
      p.x += p.drift
      p.alpha += (Math.random() - 0.5) * 0.01
      p.alpha = Math.max(0.05, Math.min(0.7, p.alpha))
      if (p.y < -10) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width }
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = p.color + p.alpha + ')'
      ctx.fill()
    })
    animId = requestAnimationFrame(animate)
  }
  animate()
  return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
}

// ── Mouse Cursor Effect ────────────────────────
let cursorRaf = null
let mouseX = 0, mouseY = 0
let outerX = 0, outerY = 0

function initCursor() {
  const outer = cursorOuter.value
  const inner = cursorInner.value
  if (!outer || !inner) return

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    gsap.to(inner, { x: mouseX, y: mouseY, duration: 0.12, ease: 'power2.out' })
  })

  function lerp(a, b, t) { return a + (b - a) * t }
  function loop() {
    outerX = lerp(outerX, mouseX, 0.09)
    outerY = lerp(outerY, mouseY, 0.09)
    gsap.set(outer, { x: outerX, y: outerY })
    cursorRaf = requestAnimationFrame(loop)
  }
  loop()

  setTimeout(() => {
    const magnetEls = document.querySelectorAll('.gsap-btn-primary, .gsap-btn-secondary')
    magnetEls.forEach(el => {
      el.addEventListener('mouseenter', () => gsap.to(outer, { scale: 2.5, duration: 0.3, ease: 'back.out(2)' }))
      el.addEventListener('mouseleave', () => gsap.to(outer, { scale: 1, duration: 0.3, ease: 'back.out(2)' }))
    })

    const imgEls = document.querySelectorAll('.gsap-collage-item')
    imgEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        gsap.to(outer, { scale: 1.8, borderColor: 'rgba(212,175,55,1)', duration: 0.3 })
        gsap.to(inner, { scale: 0.3, backgroundColor: 'rgba(212,175,55,1)', duration: 0.3 })
      })
      el.addEventListener('mouseleave', () => {
        gsap.to(outer, { scale: 1, borderColor: 'rgba(212,175,55,0.6)', duration: 0.3 })
        gsap.to(inner, { scale: 1, backgroundColor: 'rgba(212,175,55,1)', duration: 0.3 })
      })
    })
  }, 1000)
}

function onHeroMouseMove(e) {
  if (!spotlight.value || !heroSection.value) return
  const rect = heroSection.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  gsap.to(spotlight.value, {
    left: x + 'px', top: y + 'px',
    duration: 0.6, ease: 'power2.out'
  })
}

// ── Hero Animation Timeline ────────────────────
function initHeroGSAP() {
  const chars = heroTitle.value?.querySelectorAll('.hero-char')
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

  gsap.set([collageCol.value, colImg0.value, colImg1.value, colImg2.value, colImg3.value], { opacity: 0, y: 60 })
  gsap.set(heroLabel.value, { opacity: 0, y: 20 })
  gsap.set(chars, { y: 120, opacity: 0 })
  gsap.set(heroOrnament.value, { opacity: 0, scaleX: 0 })
  gsap.set(heroDesc.value, { opacity: 0, y: 30 })
  gsap.set(heroCta.value, { opacity: 0, y: 30 })
  gsap.set(heroSocial.value, { opacity: 0, y: 20 })
  gsap.set(scrollIndicator.value, { opacity: 0, y: 10 })
  if (floatingBadge.value) gsap.set(floatingBadge.value, { opacity: 0, scale: 0.7, rotation: -15 })
  if (discountBubble.value) gsap.set(discountBubble.value, { opacity: 0, scale: 0.7 })

  tl.to(heroLabel.value, { opacity: 1, y: 0, duration: 0.8 })
    .to(chars, { y: 0, opacity: 1, duration: 0.9, stagger: 0.045, ease: 'power4.out' }, '-=0.4')
    .to(heroOrnament.value, { opacity: 1, scaleX: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
    .to(heroDesc.value, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
    .to(heroCta.value, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
    .to(heroSocial.value, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
    .to(colImg0.value, { opacity: 1, y: 0, duration: 1.1 }, 0.2)
    .to(colImg1.value, { opacity: 1, y: 0, duration: 1.1 }, 0.35)
    .to(colImg2.value, { opacity: 1, y: 0, duration: 1.1 }, 0.5)
    .to(colImg3.value, { opacity: 1, y: 0, duration: 1.1 }, 0.65)
    .to(scrollIndicator.value, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')

  if (floatingBadge.value) {
    tl.to(floatingBadge.value, { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: 'elastic.out(1, 0.7)' }, '-=0.5')
    gsap.to(floatingBadge.value, { y: -10, duration: 2.5, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2 })
  }

  if (discountBubble.value) {
    tl.to(discountBubble.value, { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)' }, '-=0.3')
  }

  window.addEventListener('scroll', () => {
    const sy = window.scrollY
    if (collageCol.value) {
      gsap.to(collageCol.value, { y: sy * 0.12, duration: 0.5, ease: 'none' })
    }
  }, { passive: true })
}

// ── Global Scroll Animations ───────────────────
function initScrollAnimations() {
  // Grab all sections except the hero
  const sections = document.querySelectorAll('section:not(.gsap-hero)')
  
  sections.forEach((sec) => {
    gsap.fromTo(sec, 
      { opacity: 0, y: 80 }, 
      {
        opacity: 1, 
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sec,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )

    // Also float up individual child elements to create a staggered beautiful effect
    const childrenToAnimate = sec.querySelectorAll('h2, h3, p, img, .filter-group, .product-card, .patron-card, .atelier-img-card')
    if (childrenToAnimate.length > 0) {
      gsap.fromTo(childrenToAnimate,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      )
    }
  })
}

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
    avatar: "https://i.pravatar.cc/200?u=eleanor"
  },
  {
    quote: "Every piece feels like a journey through an artisan's workshop. The unstitched fabric quality is the best I've ever seen.",
    name: "Marcus Thorne",
    role: "Fashion Critic",
    avatar: "https://i.pravatar.cc/200?u=marcus"
  },
  {
    quote: "AHMADCLOTHESFABRICS has become our go-to for all celebrations. Their festive collections are as much a work of art as they are beautiful.",
    name: "Julianna Ross",
    role: "Event Designer",
    avatar: "https://i.pravatar.cc/200?u=julianna"
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

.hero-luxury-collage {
  background: #fafaf8;
}

.dark .hero-luxury-collage {
  background: #050505;
}

.collage-item {
  position: relative;
  border: 1px solid rgba(0,0,0,0.03);
}

.dark .collage-item {
  border-color: rgba(255,255,255,0.03);
}

.collage-item img {
  transform-origin: center;
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

.zoom-enter-active, .zoom-leave-active {
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.zoom-enter-from, .zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in-ani {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.animate-zoom-in {
  animation: zoom-in-ani 0.7s cubic-bezier(0.19, 1, 0.22, 1) forwards;
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