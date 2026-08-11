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

      <!-- Bottom Sub-Footer Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 dark:text-stone-500 font-medium">
        <p>© 2026, Ahmad Cloth House Designs (PK) Powered by ByteForce</p>
        
        <!-- Social Icons Row -->
        <div class="flex items-center gap-5 text-base text-stone-600 dark:text-stone-300">
          <a href="https://www.youtube.com/@ahmadfabrics_aroma" target="_blank" aria-label="YouTube" class="hover:text-red-600 transition-colors">
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
