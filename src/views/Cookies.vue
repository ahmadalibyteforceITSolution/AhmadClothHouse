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
            <div class="text-xl font-playfair tracking-[0.2em] font-light text-white uppercase mb-10">AHMADCLOTHS HOUSE</div>
            <div class="flex items-center justify-center gap-6 mb-12">
               <div class="h-[1px] w-16 bg-[var(--primary-gold)]/30"></div>
               <span class="text-[var(--primary-gold)] font-bold text-[10px] uppercase tracking-[0.6em] block">CHOICE &
                  EXPERIENCE</span>
               <div class="h-[1px] w-16 bg-[var(--primary-gold)]/30"></div>
            </div>
            <h1
               class="text-6xl md:text-8xl font-light uppercase tracking-tighter text-white font-playfair italic underline decoration-[var(--primary-gold)]/10 underline-offset-[20px]">
               Cookies <span
                  class="text-[var(--primary-gold)] font-sans tracking-[0.2em] font-light ml-4 uppercase not-italic">Policy</span>
            </h1>
            <p
               class="text-[11px] font-bold text-white/30 uppercase tracking-[0.5em] mt-16 max-w-2xl mx-auto leading-loose italic">
               How we use cookies to enhance your journey through Ahmadcloths house.
            </p>
         </div>
      </header>

      <!-- Narrative Content -->
      <main class="max-w-4xl mx-auto px-8 py-32 space-y-32">
         <section v-for="(section, k) in cookieSections" :key="k" class="space-y-10 group animate-reveal"
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

         <!-- Acceptance Protocol -->
         <div class="pt-24 border-t border-[#d4af3711] text-center">
            <div class="flex flex-col items-center gap-12">
               <div
                  class="w-16 h-16 rounded-full border border-[var(--primary-gold)]/20 flex items-center justify-center text-[var(--primary-gold)] animate-bounce">
                  <font-awesome-icon icon="fa-solid fa-shield-halved" />
               </div>
               <p class="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-400 max-w-xs leading-loose">
                  By using our website, you agree to our use of cookies as described in this policy.
               </p>
               <router-link to="/shop"
                  class="bg-black dark:bg-[var(--primary-gold)] text-white px-16 py-6 text-[10px] font-bold uppercase tracking-[0.5em] shadow-3xl hover:bg-[var(--deep-burgundy)] transition-all active:scale-95">
                  RETURN TO BOUTIQUE
               </router-link>
            </div>
         </div>
      </main>
   </div>
</template>

<script setup>
import { onMounted } from 'vue'
const Fugible = "https://loremflickr.com/200/80/fashion,logo?lock=1"

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
      content: "As part of our partnership with Google AdSense, we use the DoubleClick cookie. This cookie enables Google and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet. You may opt out of the use of the DoubleClick cookie for interest-based advertising by visiting Google's Ad Settings."
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

.shadow-3xl {
   box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.2);
}

.dark .shadow-3xl {
   box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.6);
}

.font-playfair {
   font-family: 'Playfair Display', serif;
}
</style>
