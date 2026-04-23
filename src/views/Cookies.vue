<template>
  <div class="luxury-cookies min-h-screen bg-[#FDFBF7] dark:bg-[#050505] transition-colors duration-700 pb-32">
    
    <!-- ═══════════════════════════════════════════
         ELITE HERO (Centered Symmetry)
    ═══════════════════════════════════════════ -->
    <header class="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-black text-center px-6">
      <!-- Ambient Glows -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_#B8860B22_0%,_transparent_70%)]"></div>
      </div>

      <!-- Pattern Overlay -->
      <div class="absolute inset-0 opacity-10 bg-damask pointer-events-none"></div>

      <div class="relative z-10 space-y-10 animate-reveal">
        <div class="flex items-center justify-center gap-6">
          <div class="h-[1px] w-12 bg-[var(--primary-gold)]/40"></div>
          <span class="text-[10px] font-black tracking-[0.8em] text-[var(--primary-gold)] uppercase">Consent Protocol</span>
          <div class="h-[1px] w-12 bg-[var(--primary-gold)]/40"></div>
        </div>

        <h1 class="text-7xl md:text-9xl font-playfair italic text-white leading-none tracking-tighter">
          Cookies <span class="text-[var(--primary-gold)] not-italic font-sans font-extralight tracking-[0.2em] block mt-4">EXPERIENCE</span>
        </h1>

        <p class="max-w-2xl mx-auto text-[11px] md:text-xs text-stone-400 font-medium tracking-[0.4em] leading-loose uppercase opacity-60">
          Tailoring your digital journey with same precision as our couture.
        </p>
      </div>

      <!-- Bottom Gradient Line -->
      <div class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--primary-gold)]/30 to-transparent"></div>
    </header>

    <!-- ═══════════════════════════════════════════
         GRID NARRATIVE CONTENT
    ═══════════════════════════════════════════ -->
    <main class="max-w-[1400px] mx-auto px-6 py-32">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <section v-for="(section, k) in cookieSections" :key="k" 
                 class="group relative bg-white dark:bg-[#0A0A0A] p-12 lg:p-16 border border-black/5 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-700 animate-reveal"
                 :style="{ animationDelay: `${k * 0.1}s` }">
          
          <!-- Decorative Corner -->
          <div class="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
            <div class="absolute top-[-50%] right-[-50%] w-[200%] h-[200%] border border-[var(--primary-gold)]/5 rounded-full group-hover:border-[var(--primary-gold)]/20 transition-all duration-700"></div>
          </div>

          <div class="space-y-8">
            <div class="flex items-center justify-between">
              <span class="text-[8px] font-black tracking-[0.5em] text-[var(--primary-gold)] uppercase">Provision 0{{ k + 1 }}</span>
              <div class="w-2 h-2 rounded-full bg-[var(--primary-gold)]/20 group-hover:bg-[var(--primary-gold)] group-hover:scale-150 transition-all duration-700"></div>
            </div>

            <h2 class="text-3xl font-playfair italic text-gray-900 dark:text-white capitalize tracking-tight group-hover:text-[var(--primary-gold)] transition-colors">
              {{ section.title }}
            </h2>

            <p class="text-stone-500 dark:text-stone-400 leading-relaxed font-light font-sans text-lg">
              {{ section.content }}
            </p>
          </div>
        </section>
      </div>

      <!-- ═══════════════════════════════════════════
           SIGNATURE ACCEPTANCE BLOCK
      ═══════════════════════════════════════════ -->
      <section class="mt-32 pt-24 border-t border-black/5 dark:border-white/5 text-center flex flex-col items-center gap-12 group">
        <div class="relative w-32 h-32 flex items-center justify-center">
          <div class="absolute inset-0 border border-[var(--primary-gold)]/20 rounded-full animate-spin-slow"></div>
          <div class="absolute inset-4 border border-[var(--primary-gold)]/10 rounded-full animate-reverse-spin"></div>
          <font-awesome-icon icon="fa-solid fa-shield-halved" class="text-3xl text-[var(--primary-gold)] group-hover:scale-125 transition-transform duration-700" />
        </div>

        <div class="space-y-6">
          <h3 class="text-4xl font-playfair italic text-gray-900 dark:text-white">Mutual Understanding</h3>
          <p class="max-w-md mx-auto text-[10px] font-bold uppercase tracking-[0.5em] text-stone-400 leading-loose opacity-60">
            By continuing your odyssey through AHMADCLOTHESFABRICS, you accept our standard cookie governance.
          </p>
        </div>

        <router-link to="/shop" 
           class="premium-btn primary group overflow-hidden bg-black text-white px-12 py-5 text-[10px] font-black tracking-[0.5em] uppercase transition-all overflow-hidden inline-flex items-center gap-4">
          <div class="btn-glow absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <span class="btn-text relative z-10">RETURN TO BOUTIQUE</span>
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="btn-icon relative z-10 text-[8px] translate-x-0 group-hover:translate-x-2 transition-transform duration-500" />
        </router-link>
      </section>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const cookieSections = [
  {
    title: "What are Cookies?",
    content: "Cookies are small text files that are stored on your device when you visit our website. They help us remember your preferences, keep your shopping bag updated, and provide a more personalized experience. We use both first-party and third-party cookies on our site."
  },
  {
    title: "Essential & Functional Cookies",
    content: "These cookies are necessary for the website to function correctly, such as managing your login sessions and your shopping bag. Without these, our boutique services cannot be provided efficiently. Functional cookies allow us to remember your choices (such as your user name or region) and provide enhanced features."
  },
  {
    title: "Performance & Analytics Cookies",
    content: "We use cookies to understand how our guests interact with our website, which helps us improve our designs and collections. This data is collected anonymously and helps us create a better experience for everyone. We use tools like Google Analytics to track site traffic and performance."
  },
  {
    title: "Advertising & Targeting Cookies",
    content: "These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign. They are usually placed by advertising networks with the website operator's permission."
  },
  {
    title: "Google AdSense & DoubleClick Cookies",
    content: "As part of our integration with Google AdSense, we use the DoubleClick cookie. This cookie enables Google and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet. You may opt out of the use of the DoubleClick cookie for interest-based advertising by visiting Google's Ad Settings."
  },
  {
    title: "How to Manage Cookies",
    content: "Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service."
  }
]

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.animate-reveal {
  animation: reveal-bottom 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  opacity: 0;
}

@keyframes reveal-bottom {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.font-playfair {
  font-family: 'Cormorant Garamond', serif;
}

.bg-damask {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='%23B8860B' fill-opacity='0.05'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3C/g%3E%3C/svg%3E");
}

.animate-spin-slow {
  animation: spin 20s linear infinite;
}

.animate-reverse-spin {
  animation: spin 15s linear infinite reverse;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

html {
  scroll-behavior: smooth;
}
</style>
