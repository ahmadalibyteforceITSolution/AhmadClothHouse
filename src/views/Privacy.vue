<template>
   <div
      class="min-h-screen bg-[#fafaf8] dark:bg-[#050505] transition-colors duration-700 pb-48 font-sans selection:bg-amber-500/30">
      <!-- Cinematic Header -->
      <header class="bg-black py-40 px-8 relative overflow-hidden border-b border-white/5">
         <div class="absolute inset-0 opacity-10">
            <div
               class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#B8860B11_1px,_transparent_1px)] bg-[size:60px_60px]">
            </div>
         </div>
         <div class="flex flex-col md:flex-row justify-between items-end gap-16 relative z-10">
            <div class="max-w-2xl animate-reveal-left">
               <div class="text-xl font-playfair tracking-[0.2em] font-light text-white uppercase mb-10">AHMADCLOTHS HOUSE</div>
               <div class="flex items-center gap-3 mb-6">
                  <div class="h-[1px] w-12 bg-[var(--primary-gold)]"></div>
                  <span
                     class="text-[var(--primary-gold)] font-bold text-[9px] uppercase tracking-[0.5em]">DATA
                     GOVERNANCE</span>
               </div>
               <h1
                  class="text-6xl md:text-9xl font-light uppercase tracking-tighter leading-[0.85] text-gray-900 dark:text-white font-playfair italic underline decoration-[var(--primary-gold)]/10 underline-offset-[20px]">
                  Privacy <br>
                  <span class="text-[var(--primary-gold)] font-sans tracking-[0.2em] font-light ml-4 uppercase not-italic">at
                     Ahmadcloths</span>
               </h1>
            </div>
            <div class="max-w-xs text-right animate-reveal-right">
               <p
                  class="text-[10px] text-stone-400 font-bold uppercase tracking-[0.4em] leading-loose italic opacity-60">
                  Our commitment to protecting your information and privacy within the Ahmadcloths community.
               </p>
            </div>
         </div>
      </header>

      <!-- Narrative Content -->
      <main class="max-w-4xl mx-auto px-8 py-32 space-y-32">
         <section v-for="(section, k) in privacySections" :key="k" class="space-y-10 group animate-reveal"
            :style="{ animationDelay: `${k * 0.2}s` }">
            <div class="flex items-center gap-6">
               <div
                  class="w-12 h-12 rounded-full border border-[var(--primary-gold)]/10 bg-[var(--primary-gold)]/5 flex items-center justify-center text-[var(--primary-gold)] text-xs transition-all duration-700 group-hover:bg-[var(--primary-gold)] group-hover:text-white">
                  0{{ k + 1 }}
               </div>
               <h2
                  class="text-2xl font-light uppercase tracking-tight text-gray-900 dark:text-white font-playfair italic underline decoration-[var(--primary-gold)]/10 underline-offset-8 transition-all group-hover:pl-4 group-hover:border-l group-hover:border-[var(--primary-gold)]/40">
                  {{ section.title }}
               </h2>
            </div>
            <p
               class="text-stone-500 dark:text-stone-400 leading-[2] font-light text-lg italic transition-all border-l-0 group-hover:border-l border-[var(--primary-gold)]/10 pl-0 group-hover:pl-8">
               {{ section.content }}
            </p>
         </section>

         <!-- Security Seal -->
         <div class="pt-24 border-t border-[#d4af3711] text-center">
            <div class="flex flex-col items-center gap-12 group">
               <div
                  class="w-20 h-20 rounded-full border border-[var(--primary-gold)]/20 bg-[var(--primary-gold)]/5 flex items-center justify-center text-[var(--primary-gold)] text-3xl group-hover:scale-110 transition-all duration-700">
                  <font-awesome-icon icon="fa-solid fa-shield-halved" />
               </div>
               <p
                  class="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-400 max-w-sm leading-loose opacity-60">
                  Ahmadcloths house is the sole controller of your data. We are committed to protecting your personal
                  information through industry-standard security measures.
               </p>
            </div>
         </div>

         <!-- Social Connectivity -->
         <div class="mt-20 pt-16 border-t border-[#d4af3711] text-center animate-reveal delay-300">
            <p class="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 mb-6">Stay Connected</p>
            <div class="flex justify-center gap-6">
               <a href="https://www.instagram.com/ahmadclothfabrics_aroma/" target="_blank" class="w-12 h-12 rounded-full border border-[var(--primary-gold)]/20 flex items-center justify-center text-[var(--primary-gold)] hover:bg-[var(--primary-gold)] hover:text-white transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1">
                  <font-awesome-icon :icon="['fab', 'instagram']" class="text-lg" />
               </a>
               <a href="https://www.facebook.com/profile.php?id=61573629329844" target="_blank" class="w-12 h-12 rounded-full border border-[var(--primary-gold)]/20 flex items-center justify-center text-[var(--primary-gold)] hover:bg-[var(--primary-gold)] hover:text-white transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1">
                  <font-awesome-icon :icon="['fab', 'facebook-f']" class="text-lg" />
               </a>
            </div>
         </div>
      </main>
   </div>
</template>

<script setup>
import { onMounted } from 'vue'
const Fugible = "https://loremflickr.com/200/80/fashion,logo?lock=1"

const privacySections = [
   {
      title: "Data Stewardship",
      content: "Ahmadcloths house, operating at ahmad-cloths.vercel.app, is committed to safeguarding your personal data. We act as the sole controller of information collected through our boutique. This includes identifiers like your name, email address, shipping details, and browsing behavior, which we use to refine your experience and fulfill your sartorial desires."
   },
   {
      title: "Monetization & Third-Party Advertising",
      content: "We partner with Google AdSense to serve advertisements on our platform. Google, as a third-party vendor, uses cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our sites and/or other sites on the Internet."
   },
   {
      title: "The DoubleClick DART Cookie",
      content: "Google uses the DART cookie to enable it to serve ads to our users based on their visit to our site and other sites on the Internet. You may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy. We also work with other third-party ad networks that may use cookies, web beacons, and similar technologies to collect information."
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
}

@keyframes reveal-bottom {
   from {
      opacity: 0;
      transform: translateY(30px);
   }

   to {
      opacity: 1;
      transform: translateY(0);
   }
}

.font-playfair {
   font-family: 'Playfair Display', serif;
}
</style>
