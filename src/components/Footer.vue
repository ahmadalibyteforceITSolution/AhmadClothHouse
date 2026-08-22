<template>
  <footer class="bg-white dark:bg-[#0A0A0A] text-stone-800 dark:text-stone-200 pt-16 pb-8 border-t border-stone-200 dark:border-white/10 font-sans transition-colors duration-500">
    <div class="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">

      <!-- Main Footer Row -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-stone-200/80 dark:border-white/10">

        <!-- Left Brand & Contact Info Column -->
        <div class="lg:col-span-6 space-y-6">
          <!-- Brand Logo Header -->
          <div @click="$router.push('/')" class="cursor-pointer">
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-[0.2em] text-stone-900 dark:text-white uppercase font-sans">
              AHMAD CLOTH HOUSE
            </h2>
          </div>

          <!-- Address & Contact Details -->
          <div class="space-y-1.5 text-xs text-stone-500 dark:text-stone-400 font-medium leading-relaxed">
            <p>Wapda Town, Ameer Chowk,</p>
            <p>Lahore, Pakistan.</p>
            <p class="pt-2">Call / WhatsApp: <a href="https://wa.me/923416887454" target="_blank" class="hover:text-stone-900 dark:hover:text-white transition-colors">0341 6887454</a> / <a href="https://wa.me/923244902607" target="_blank" class="hover:text-stone-900 dark:hover:text-white transition-colors">0324 4902607</a></p>
            <p>Email: <a href="mailto:ahmadalihafeez24@gmail.com" class="hover:text-stone-900 dark:hover:text-white transition-colors">ahmadalihafeez24@gmail.com</a></p>
          </div>
        </div>

        <!-- Right Links Grid (Information & Customer Care) -->
        <div class="lg:col-span-6 grid grid-cols-2 gap-8 lg:pl-12">
          
          <!-- Information Column -->
          <div class="space-y-4">
            <h3 class="text-sm font-extrabold tracking-wider text-stone-900 dark:text-white uppercase">
              Information
            </h3>
            <ul class="space-y-2.5 text-xs font-medium text-stone-500 dark:text-stone-400">
              <li>
                <router-link to="/terms" class="hover:text-stone-900 dark:hover:text-white transition-colors">Returns and Exchange</router-link>
              </li>
              <li>
                <router-link to="/privacy" class="hover:text-stone-900 dark:hover:text-white transition-colors">Privacy Policy</router-link>
              </li>
              <li>
                <router-link to="/contact" class="hover:text-stone-900 dark:hover:text-white transition-colors">FAQs</router-link>
              </li>
              <li>
                <router-link to="/contact" class="hover:text-stone-900 dark:hover:text-white transition-colors">Store Locator</router-link>
              </li>
              <li>
                <router-link to="/dashboard" class="hover:text-stone-900 dark:hover:text-white transition-colors">Track Your Order</router-link>
              </li>
              <li>
                <router-link to="/blog" class="hover:text-stone-900 dark:hover:text-white transition-colors">Blogs</router-link>
              </li>
            </ul>
          </div>

          <!-- Customer Care Column -->
          <div class="space-y-4">
            <h3 class="text-sm font-extrabold tracking-wider text-stone-900 dark:text-white uppercase">
              Customer Care
            </h3>
            <ul class="space-y-2.5 text-xs font-medium text-stone-500 dark:text-stone-400">
              <li>
                <router-link to="/about" class="hover:text-stone-900 dark:hover:text-white transition-colors">About Ahmad Cloth House</router-link>
              </li>
              <li>
                <router-link to="/contact" class="hover:text-stone-900 dark:hover:text-white transition-colors">Contact Us</router-link>
              </li>
              <li>
                <router-link to="/contact" class="hover:text-stone-900 dark:hover:text-white transition-colors">Careers</router-link>
              </li>
              <li>
                <router-link to="/terms" class="hover:text-stone-900 dark:hover:text-white transition-colors">Terms and Conditions</router-link>
              </li>
            </ul>
          </div>

        </div>

      </div>

      <!-- Sponsored Partner Ad Section -->
      <div class="my-10 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-stone-50 via-stone-100 to-amber-50/40 dark:from-[#111] dark:via-[#161616] dark:to-stone-900 border border-stone-200 dark:border-white/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300">
        <div class="flex items-center gap-4 text-left">
          <div class="w-12 h-12 rounded-xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-[9px] font-black uppercase tracking-[0.25em] text-[#c9973a] bg-[#c9973a]/15 px-2 py-0.5 rounded">Sponsored Partner</span>
              <span class="text-[10px] text-stone-400 dark:text-stone-500 font-semibold">· Architecture &amp; 3D Design</span>
            </div>
            <h4 class="text-base sm:text-lg font-extrabold text-stone-900 dark:text-white tracking-tight">
              H&amp;Q Design Services
            </h4>
            <p class="text-xs text-stone-600 dark:text-stone-400 max-w-xl leading-relaxed mt-0.5 font-normal">
              Bespoke Architectural Plans, Photorealistic 3D Interior &amp; Exterior Renderings, and Structural Visualizations.
            </p>
          </div>
        </div>

        <a 
          href="https://h-q-design-services.vercel.app/" 
          target="_blank" 
          rel="noopener sponsored"
          class="shrink-0 inline-flex items-center gap-3 px-6 py-3 bg-stone-900 hover:bg-[#c9973a] text-white dark:bg-white dark:text-black dark:hover:bg-[#c9973a] dark:hover:text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md group no-underline"
        >
          <span>Visit H&amp;Q Design</span>
          <span class="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </a>
      </div>

      <!-- Bottom Sub-Footer Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 dark:text-stone-500 font-medium">
        <p>© 2026, Ahmad Cloth House Designs (PK) Powered by ByteForce</p>
        
        <!-- Social Icons Row -->
        <div class="flex items-center gap-5 text-base text-stone-600 dark:text-stone-300">
          <a href="https://www.youtube.com/@ahmadClothesfabrics_aroma" target="_blank" aria-label="YouTube" class="hover:text-red-600 transition-colors">
            <font-awesome-icon :icon="['fab', 'youtube']" />
          </a>
          <a href="https://www.instagram.com/ahmadclothfabrics_aroma/" target="_blank" aria-label="Instagram" class="hover:text-pink-600 transition-colors">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61573629329844" target="_blank" aria-label="Facebook" class="hover:text-blue-600 transition-colors">
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
          </a>
          <a href="https://www.tiktok.com/@theahmadfabrices_aroma" target="_blank" aria-label="TikTok" class="hover:text-black dark:hover:text-white transition-colors">
            <font-awesome-icon :icon="['fab', 'tiktok']" />
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
// Clean Maria B style Footer for AHMAD CLOTH HOUSE
</script>
