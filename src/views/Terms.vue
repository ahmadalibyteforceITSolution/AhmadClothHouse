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
         <div class="max-w-7xl mx-auto text-center relative z-10 animate-reveal">
            <div class="text-xl font-playfair tracking-[0.2em] font-light text-white uppercase mb-10">AHMADCLOTHESFABRICS</div>
            <div class="flex items-center justify-center gap-6 mb-12">
               <div class="h-[1px] w-16 bg-[var(--primary-gold)]/30"></div>
               <span class="text-[var(--primary-gold)] font-bold text-[10px] uppercase tracking-[0.6em] block">GOVERNANCE &
                  ETHICS</span>
               <div class="h-[1px] w-16 bg-[var(--primary-gold)]/30"></div>
            </div>
            <h1
               class="text-6xl md:text-8xl font-light uppercase tracking-tighter text-white font-playfair italic underline decoration-[var(--primary-gold)]/10 underline-offset-[20px]">
               Terms of <span
                  class="text-[var(--primary-gold)] font-sans tracking-[0.2em] font-light ml-4 uppercase not-italic">Service</span>
            </h1>
            <p
               class="text-[11px] font-bold text-white/30 uppercase tracking-[0.5em] mt-16 max-w-2xl mx-auto leading-loose italic">
               The framework of mutual agreement and authority within the Ahmadcloths network.
            </p>
         </div>
      </header>

      <!-- Narrative Content -->
      <main class="max-w-4xl mx-auto px-8 py-32 space-y-32">
         <section v-for="(section, k) in termSections" :key="k" class="space-y-10 group animate-reveal"
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

         <!-- Signature Block -->
         <div class="pt-24 border-t border-[#d4af3711] text-center">
            <div class="flex flex-col items-center gap-12">
               <p class="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-400 max-w-xs leading-loose italic">
                  By using this website, you agree to our terms and conditions.
               </p>
               <div class="h-[1px] w-32 bg-[var(--primary-gold)]/20"></div>
            </div>
         </div>
      </main>
   </div>
</template>

<script setup>
import { onMounted } from 'vue'
const Fugible = "https://loremflickr.com/200/80/fashion,logo?lock=1"

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
