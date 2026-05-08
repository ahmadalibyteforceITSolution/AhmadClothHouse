<template>
  <div class="luxury-terms min-h-screen bg-[#FDFBF7] dark:bg-[#050505] transition-colors duration-700 pb-32">
    
    <!-- ═══════════════════════════════════════════
         ELITE HERO (Monochrome Elegance)
    ═══════════════════════════════════════════ -->
    <header class="relative h-[65vh] flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] text-center px-6">
      <!-- High-Fashion Grain Overlay -->
      <div class="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-noise"></div>
      
      <!-- Pattern Overlay -->
      <div class="absolute inset-0 opacity-5 bg-damask pointer-events-none"></div>

      <div class="relative z-10 space-y-12 animate-reveal">
        <div class="flex flex-col items-center gap-4">
          <span class="text-[8px] font-black tracking-[0.6em] text-[var(--primary-gold)] uppercase opacity-80">Codex of Conduct</span>
          <div class="h-[1px] w-32 bg-gradient-to-r from-transparent via-[var(--primary-gold)] to-transparent"></div>
        </div>

        <h1 class="text-7xl md:text-9xl font-playfair italic text-white leading-none tracking-tight">
          Terms <span class="text-[var(--primary-gold)] not-italic font-sans font-extralight tracking-[0.3em] block mt-6 text-5xl md:text-7xl uppercase">OF ENGAGEMENT</span>
        </h1>

        <p class="max-w-xl mx-auto text-[10px] md:text-sm text-stone-500 font-medium tracking-[0.3em] leading-loose uppercase opacity-80 italic">
          Defining the architecture of our mutual trust.
        </p>
      </div>

      <!-- Scroll line -->
      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce">
        <div class="w-[1px] h-10 bg-white/20"></div>
      </div>
    </header>

    <!-- ═══════════════════════════════════════════
         STRUCTURED BLOCKS CONTENT
    ═══════════════════════════════════════════ -->
    <main class="max-w-[1200px] mx-auto px-6 py-40">
      <div class="space-y-40">
        <section v-for="(section, k) in termSections" :key="k" 
                 class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start group animate-reveal"
                 :style="{ animationDelay: `${k * 0.15}s` }">
          
          <!-- Section Number -->
          <div class="lg:col-span-3 flex flex-col gap-6">
            <div class="text-[8px] font-black tracking-[0.5em] text-[var(--primary-gold)] uppercase">Article 0{{ k + 1 }}</div>
            <div class="h-[1px] w-full bg-black/5 dark:bg-white/5 group-hover:bg-[var(--primary-gold)]/30 transition-all duration-700"></div>
          </div>

          <!-- Section Content -->
          <div class="lg:col-span-9 space-y-10 group-hover:translate-x-4 transition-transform duration-700">
            <h2 class="text-4xl md:text-5xl font-playfair italic text-gray-900 dark:text-white capitalize leading-tight">
              {{ section.title }}
            </h2>
            <p class="text-stone-500 dark:text-stone-400 text-lg md:text-xl leading-[2] font-light max-w-4xl">
              {{ section.content }}
            </p>
          </div>
        </section>
      </div>

      <!-- ═══════════════════════════════════════════
           ETHICAL SIGNATURE BLOCK
      ═══════════════════════════════════════════ -->
      <section class="mt-60 bg-white dark:bg-[#0A0A0A] p-20 lg:p-32 border border-black/5 dark:border-white/5 shadow-2xl text-center flex flex-col items-center gap-16 group">
        <div class="space-y-8">
          <div class="flex items-center justify-center gap-4 text-[var(--primary-gold)]">
            <span class="text-3xl">✦</span>
          </div>
          <h3 class="text-5xl md:text-7xl font-playfair italic text-gray-900 dark:text-white">Ethical Foundation</h3>
          <p class="max-w-2xl mx-auto text-stone-500 dark:text-stone-400 leading-loose text-lg font-light">
            By engaging with our digital atelier, you signify your alignment with these principles of mutual respect and integrity. We reserve the right to evolve these terms as our brand reaches new horizons.
          </p>
        </div>

        <div class="flex flex-col items-center gap-8">
          <div class="h-[1px] w-48 bg-black/10 dark:bg-white/10 group-hover:w-64 group-hover:bg-[var(--primary-gold)] transition-all duration-1000"></div>
          <p class="text-[8px] font-black tracking-[0.6em] text-stone-400 uppercase opacity-60">AHMADCLOTHESFABRICS AUTHORITY</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const termSections = [
  {
    title: "Agreement to Terms",
    content: "By accessing and using AHMADCLOTHESFABRICS (ahmad-cloths.vercel.app), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
  },
  {
    title: "Intellectual Property Rights",
    content: "The content, original features, and functionality of this website, including but not limited to designs, text, graphics, logos, and images, are the exclusive property of AHMADCLOTHESFABRICS and are protected by international copyright, trademark, patent, and other intellectual property laws."
  },
  {
    title: "User Conduct & Restrictions",
    content: "Users are prohibited from using the site for any unlawful purpose, soliciting others to perform unlawful acts, or violating any international, federal, or state regulations. You may not reproduce, duplicate, copy, sell, or exploit any portion of our service without express written permission."
  },
  {
    title: "Products & Accuracy of Information",
    content: "We make every effort to display as accurately as possible the colors and images of our products. However, we cannot guarantee that your computer monitor's display of any color will be accurate. We reserve the right to limit the sales of our products to any person or geographic region."
  },
  {
    title: "Billing & Account Integrity",
    content: "You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers, so that we can complete your transactions."
  },
  {
    title: "Third-Party Links & Ads",
    content: "Our website may contain links to third-party websites or services that are not owned or controlled by AHMADCLOTHESFABRICS. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that AHMADCLOTHESFABRICS shall not be responsible or liable, directly or indirectly, for any damage or loss caused by your use of such third-party content."
  },
  {
    title: "Governing Law",
    content: "These terms and conditions are governed by and construed in accordance with the laws of Pakistan. You irrevocably submit to the exclusive jurisdiction of the courts in that State or location."
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

.bg-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

html {
  scroll-behavior: smooth;
}
</style>
