<template>
  <div class="luxury-privacy min-h-screen bg-[#FDFBF7] dark:bg-[#050505] transition-colors duration-700">
    
    <!-- ═══════════════════════════════════════════
         ELITE HERO SECTION
    ═══════════════════════════════════════════ -->
    <header class="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black">
      <!-- Animated Background Mesh -->
      <div class="absolute inset-0 opacity-40">
        <div class="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_30%_30%,_#B8860B33_0%,_transparent_50%),radial-gradient(circle_at_70%_70%,_#4A0E0E33_0%,_transparent_50%)] animate-mesh-flow"></div>
      </div>

      <!-- Luxury Pattern Overlay -->
      <div class="absolute inset-0 opacity-10 bg-damask pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div class="flex flex-col items-center gap-8 animate-reveal">
          <div class="h-[1px] w-24 bg-gradient-to-r from-transparent via-[var(--primary-gold)] to-transparent"></div>
          
          <div class="space-y-4">
            <p class="text-[10px] font-black tracking-[0.8em] text-[var(--primary-gold)] uppercase mb-4">AhmadCloths Governance</p>
            <h1 class="text-7xl md:text-9xl font-playfair italic text-white leading-none">
              Privacy <span class="text-[var(--primary-gold)] not-italic font-sans font-extralight tracking-widest block mt-4">COMMITMENT</span>
            </h1>
          </div>

          <p class="max-w-xl text-xs md:text-sm text-stone-400 font-medium tracking-[0.2em] leading-relaxed uppercase opacity-80">
            Elevating data safety to the standards of our finest silk. Your trust is our most precious fabric.
          </p>

          <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
            <span class="text-[8px] font-bold tracking-[0.4em] text-white">SCROLL TO READ</span>
            <div class="w-[1px] h-12 bg-gradient-to-b from-[var(--primary-gold)] to-transparent"></div>
          </div>
        </div>
      </div>
    </header>

    <!-- ═══════════════════════════════════════════
         NARRATIVE LAYOUT
    ═══════════════════════════════════════════ -->
    <main class="max-w-[1400px] mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-12 gap-20">
      
      <!-- Side Navigation (Sticky) -->
      <aside class="lg:col-span-3 hidden lg:block sticky top-32 h-fit space-y-8 border-l border-black/5 dark:border-white/5 pl-8">
        <p class="text-[8px] font-black tracking-[0.4em] text-[var(--primary-gold)] uppercase mb-6">Directory</p>
        <nav class="flex flex-col gap-6">
          <a v-for="(section, k) in privacySections" :key="'nav-'+k" 
             :href="'#section-'+k"
             class="text-[10px] font-bold tracking-widest text-stone-400 hover:text-[var(--primary-gold)] transition-colors uppercase">
            0{{ k + 1 }}. {{ section.title }}
          </a>
        </nav>
      </aside>

      <!-- Main Content Cards -->
      <div class="lg:col-span-9 space-y-24">
        <section v-for="(section, k) in privacySections" :id="'section-'+k" :key="k" 
                 class="group relative bg-white dark:bg-[#0A0A0A] p-12 md:p-16 border border-black/5 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-700 animate-reveal"
                 :style="{ animationDelay: `${k * 0.15}s` }">
          
          <!-- Section Accent -->
          <div class="absolute top-0 left-0 w-1.5 h-0 bg-[var(--primary-gold)] group-hover:h-full transition-all duration-700"></div>
          
          <div class="flex flex-col md:flex-row gap-12 items-start">
            <div class="flex-shrink-0">
              <span class="text-4xl md:text-6xl font-playfair italic text-[var(--primary-gold)]/20 group-hover:text-[var(--primary-gold)] transition-colors duration-700">
                0{{ k + 1 }}
              </span>
            </div>
            
            <div class="space-y-8">
              <h2 class="text-3xl md:text-4xl font-playfair italic text-gray-900 dark:text-white capitalize tracking-tight">
                {{ section.title }}
              </h2>
              <div class="h-[1px] w-12 bg-[var(--primary-gold)]/30 group-hover:w-24 transition-all duration-700"></div>
              <p class="text-stone-500 dark:text-stone-400 text-lg leading-relaxed font-light font-sans group-hover:text-black dark:group-hover:text-white transition-colors">
                {{ section.content }}
              </p>
            </div>
          </div>
        </section>

        <!-- Signature Security Section -->
        <section class="bg-black text-white p-16 md:p-24 relative overflow-hidden group">
          <div class="absolute inset-0 bg-damask opacity-20 group-hover:scale-110 transition-transform duration-1000"></div>
          
          <div class="relative z-10 flex flex-col items-center text-center gap-10">
            <div class="w-24 h-24 rounded-full border border-[var(--primary-gold)]/30 flex items-center justify-center group-hover:border-[var(--primary-gold)] transition-all duration-500">
              <font-awesome-icon icon="fa-solid fa-shield-halved" class="text-3xl text-[var(--primary-gold)] animate-pulse-slow" />
            </div>
            <h3 class="text-4xl font-playfair italic">Elite Safeguarding</h3>
            <p class="max-w-2xl text-stone-400 text-sm font-light leading-loose tracking-wide">
              AHMADCLOTHESFABRICS is the sole architect of your data journey. Our encryption protocols mirror the complexity of our finest embroideries—beautifully secure, absolutely reliable.
            </p>
            <div class="flex gap-4 pt-4">
              <a href="https://www.instagram.com/ahmadclothfabrics_aroma/" target="_blank" class="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-[var(--primary-gold)] hover:border-[var(--primary-gold)] transition-all group/icon">
                <font-awesome-icon :icon="['fab', 'instagram']" class="text-lg group-hover/icon:scale-125 transition-transform" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573629329844" target="_blank" class="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-[var(--primary-gold)] hover:border-[var(--primary-gold)] transition-all group/icon">
                <font-awesome-icon :icon="['fab', 'facebook-f']" class="text-lg group-hover/icon:scale-125 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- ═══════════════════════════════════════════
         FLOATING ACTION BUTTON
    ═══════════════════════════════════════════ -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const privacySections = [
  {
    title: "Data Stewardship",
    content: "AHMADCLOTHESFABRICS, operating at ahmad-cloths.vercel.app, is committed to safeguarding your personal data. We act as the sole controller of information collected through our boutique. This includes identifiers like your name, email address, shipping details, and browsing behavior, which we use to refine your experience and fulfill your sartorial desires."
  },
  {
    title: "Monetization & Advertising Ecosystem",
    content: "We partner with Google AdSense to sustain our digital boutique. Google, as a third-party vendor, uses cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our sites and/or other sites on the Internet."
  },
  {
    title: "Personalized Advertising & Opt-Out",
    content: "You may opt out of personalized advertising by visiting Google's Ads Settings (https://www.google.com/settings/ads). Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting www.aboutads.info. We also work with other third-party ad networks that may use cookies, web beacons, and similar technologies to collect information."
  },
  {
    title: "GDPR & CCPA Compliance",
    content: "If you are a resident of the European Economic Area (EEA) or California, you have specific data protection rights. This includes the right to access, rectify, or erase your personal data, as well as the right to object to processing. We ensure all data handling aligns with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA)."
  },
  {
    title: "Cookie Governance",
    content: "We employ cookies to analyze site traffic, remember your preferences, and optimize ad performance. You can choose to accept or decline cookies through your browser settings. However, declining cookies may prevent you from taking full advantage of the Ahmadcloths experience."
  },
  {
    title: "Information Security & Retention",
    content: "Your data is encrypted and stored securely. We retain your information only for as long as necessary to provide you with our services, comply with legal obligations, and resolve disputes. We never sell, trade, or otherwise transfer your personally identifiable information to outside parties without your explicit consent."
  },
  {
    title: "Contact Our Data Officer",
    content: "For any inquiries regarding your privacy rights or our data practices, please reach out to our dedicated support team at ahmadalihafeez24@gmail.com. We respond to all data-related requests within 30 days."
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
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes mesh-flow {
  0% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.1) rotate(2deg); }
  100% { transform: scale(1) rotate(0deg); }
}

.animate-mesh-flow {
  animation: mesh-flow 20s infinite ease-in-out;
}

.font-playfair {
  font-family: 'Cormorant Garamond', serif;
}

.bg-damask {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='%23B8860B' fill-opacity='0.05'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3C/g%3E%3C/svg%3E");
}

.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
}

html {
  scroll-behavior: smooth;
}
</style>
