<template>
  <div class="min-h-screen bg-[#F6F5EE] dark:bg-[#0A0A0A] text-[#1E2D1E] dark:text-stone-100">

    <!-- ── Breadcrumb ── -->
    <nav class="px-5 sm:px-10 lg:px-16 pt-8 pb-3">
      <ol class="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-stone-400">
        <li><router-link to="/" class="hover:text-[#C9973A] transition-colors">Home</router-link></li>
        <li class="text-stone-300">/</li>
        <li v-if="sectionLabel"><router-link :to="sectionPath" class="hover:text-[#C9973A] transition-colors">{{ sectionLabel }}</router-link></li>
        <li v-if="sectionLabel" class="text-stone-300">/</li>
        <li class="text-[#1f2e1f] dark:text-stone-200 font-semibold">{{ pageTitle }}</li>
      </ol>
    </nav>

    <!-- ── Hero Header ── -->
    <section class="px-5 sm:px-10 lg:px-16 py-12 sm:py-16 border-b border-stone-200/60 dark:border-white/10 relative overflow-hidden">
      <div class="max-w-4xl relative z-10">
        <div class="flex items-center gap-4 mb-5">
          <div class="w-8 h-px bg-[#C9973A]"></div>
          <span class="text-[9px] font-bold uppercase tracking-[0.6em] text-[#C9973A]">{{ sectionLabel }}</span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1f2e1f] dark:text-stone-100 uppercase tracking-[0.06em] leading-tight mb-5">
          {{ pageTitle }}
        </h1>
        <p class="text-sm text-stone-600 dark:text-stone-400 font-light leading-relaxed max-w-2xl">
          {{ pageDescription }}
        </p>
      </div>
    </section>

    <!-- ── Key Info Cards ── -->
    <section class="px-5 sm:px-10 lg:px-16 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div v-for="card in infoCards" :key="card.title"
          class="border border-stone-200/60 dark:border-white/10 p-6 bg-white dark:bg-[#111] rounded-none">
          <p class="text-[9px] uppercase tracking-[0.5em] text-[#C9973A] mb-3">{{ card.tag }}</p>
          <h2 class="text-base font-light uppercase tracking-[0.1em] text-[#1f2e1f] dark:text-stone-100 mb-3">{{ card.title }}</h2>
          <p class="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">{{ card.body }}</p>
        </div>
      </div>

      <!-- ── Long-form SEO Content ── -->
      <div class="max-w-3xl space-y-8 mb-14">
        <div v-for="section in contentSections" :key="section.heading">
          <h2 class="text-xl font-light uppercase tracking-[0.1em] text-[#1f2e1f] dark:text-stone-100 mb-4 pb-3 border-b border-stone-100 dark:border-white/10">
            {{ section.heading }}
          </h2>
          <p class="text-sm text-stone-600 dark:text-stone-400 leading-7">{{ section.body }}</p>
        </div>
      </div>

      <!-- ── Related Links ── -->
      <div class="border-t border-stone-200/60 dark:border-white/10 pt-10">
        <p class="text-[9px] uppercase tracking-[0.5em] text-[#C9973A] mb-6">Explore More</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          <router-link v-for="link in relatedLinks" :key="link.to" :to="link.to"
            class="px-4 py-3 border border-stone-200 dark:border-white/10 text-[10px] uppercase tracking-[0.3em] text-stone-600 dark:text-stone-400 hover:border-[#C9973A] hover:text-[#C9973A] transition-all text-center">
            {{ link.label }}
          </router-link>
        </div>
      </div>

      <!-- ── CTA ── -->
      <div class="mt-14 flex flex-col sm:flex-row gap-4">
        <button @click="router.push('/shop')"
          class="px-8 py-4 bg-[#1f2e1f] hover:bg-[#C9973A] text-white text-[10px] font-bold uppercase tracking-[0.4em] transition-all duration-300 flex items-center justify-center gap-3">
          <span>SHOP ALL COLLECTIONS</span>
          <span>→</span>
        </button>
        <button @click="router.push('/contact')"
          class="px-8 py-4 border border-[#1f2e1f]/30 dark:border-stone-600 text-[#1f2e1f] dark:text-stone-300 hover:border-[#C9973A] hover:text-[#C9973A] text-[10px] font-bold uppercase tracking-[0.4em] transition-all duration-300">
          GET STYLING ADVICE
        </button>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Determine page type from path
const pathType = computed(() => {
  const p = route.path
  if (p.startsWith('/collection/')) return 'collection'
  if (p.startsWith('/fabric/')) return 'fabric'
  if (p.startsWith('/occasion/')) return 'occasion'
  if (p.startsWith('/lookbook/')) return 'lookbook'
  if (p.startsWith('/size-guide')) return 'size-guide'
  if (p.startsWith('/care/')) return 'care'
  if (p.startsWith('/shop-in/')) return 'shop-in'
  return 'general'
})

const slug = computed(() => route.params.slug || route.params.city || '')

// Format slug to readable title
function formatSlug(s) {
  return (s || '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

const sectionLabel = computed(() => {
  const map = {
    collection: 'Collections',
    fabric: 'Fabrics & Textiles',
    occasion: 'Occasion Wear',
    lookbook: 'Style Lookbook',
    'size-guide': 'Size Guide',
    care: 'Care Instructions',
    'shop-in': 'Shop Online'
  }
  return map[pathType.value] || 'Ahmad Cloth House'
})

const sectionPath = computed(() => {
  const map = {
    collection: '/shop',
    fabric: '/shop',
    occasion: '/shop',
    lookbook: '/blog',
    'size-guide': '/about',
    care: '/about',
    'shop-in': '/shop'
  }
  return map[pathType.value] || '/'
})

const pageTitle = computed(() => {
  const t = pathType.value
  const s = formatSlug(slug.value)
  if (t === 'collection') return `${s} — Luxury Collection`
  if (t === 'fabric') return `${s} — Premium Fabric Guide`
  if (t === 'occasion') return `${s} — Style & Outfit Guide`
  if (t === 'lookbook') return `${s} — Editorial Lookbook`
  if (t === 'size-guide') return s ? `${s} Size Guide` : 'Complete Size Guide'
  if (t === 'care') return `${s} — Care Instructions`
  if (t === 'shop-in') return `Shop Pakistani Fashion in ${s}`
  return s || 'Luxury Couture & Fashion'
})

const pageDescription = computed(() => {
  const t = pathType.value
  const s = formatSlug(slug.value)
  if (t === 'collection') return `Discover the ${s} at Ahmad Cloth House — meticulously crafted Pakistani couture featuring hand-embroidered textiles, premium fabrics, and bespoke designs. Each piece is a testament to generations of artisanal skill. Available with express worldwide shipping.`
  if (t === 'fabric') return `Explore everything about ${s} fabric — its origin, weave, styling potential, and care instructions. Ahmad Cloth House offers an exclusive range of the finest Pakistani textiles, available in hundreds of designs and colourways, delivered worldwide.`
  if (t === 'occasion') return `Find the perfect ${s} outfit at Ahmad Cloth House. From intricately embroidered bridal ensembles to effortlessly elegant casuals, our curated selection spans every dress code and occasion with authentic Pakistani craftsmanship.`
  if (t === 'lookbook') return `Explore the ${s} from Ahmad Cloth House — seasonal styling inspiration drawn from the rich heritage of Pakistani fashion. Discover colour combinations, silhouette guides, and complete outfit ideas.`
  if (t === 'size-guide') return `Ahmad Cloth House complete sizing reference — detailed measurement guides for women's suits, kurtas, shalwar kameez, bridal wear, and men's ethnic wear. Find your perfect fit with our international size conversion charts.`
  if (t === 'care') return `Protect your investment with expert fabric care advice from Ahmad Cloth House. Detailed instructions for washing, ironing, storing, and preserving the quality and colour of your luxury Pakistani garments.`
  if (t === 'shop-in') return `Ahmad Cloth House delivers authentic Pakistani luxury fashion to ${s} and worldwide. Browse our full catalog of unstitched suits, bridal couture, luxury pret, and more — with fast, tracked international shipping.`
  return `Explore Ahmad Cloth House — Pakistan's premier destination for luxury fashion, artisanal couture, and premium textiles.`
})

const infoCards = computed(() => {
  const t = pathType.value
  if (t === 'fabric') return [
    { tag: 'Origin', title: 'Heritage Textile', body: 'Pakistani fabrics carry centuries of artisanal tradition, from the silk looms of Lahore to the block printers of Multan, each fabric tells a story.' },
    { tag: 'Usage', title: 'Styling Versatility', body: 'Discover how to style, drape and pair this fabric for any occasion from casual daywear to grand bridal ensembles.' },
    { tag: 'Care', title: 'Fabric Maintenance', body: 'Proper care ensures your garment retains its colour, sheen and structure for years. Follow our expert care guide for best results.' }
  ]
  if (t === 'occasion') return [
    { tag: 'Styling', title: 'Complete Outfit Guide', body: 'Curated head-to-toe looks with fabric recommendations, colour palettes, silhouette guides, and accessory pairings for this occasion.' },
    { tag: 'Shopping', title: 'Curated Selection', body: 'Browse our hand-picked collection specifically suited for this occasion with filter options for budget, colour, and fabric type.' },
    { tag: 'Delivery', title: 'Worldwide Shipping', body: 'Express delivery available to UK, USA, Canada, UAE, Australia, and 50+ countries. Order 2–3 weeks before your event.' }
  ]
  if (t === 'collection') return [
    { tag: 'Craftsmanship', title: 'Artisanal Excellence', body: 'Each piece in this collection is crafted by master artisans using traditional techniques passed down through generations.' },
    { tag: 'Materials', title: 'Premium Fabrics', body: 'We source only the finest fabrics — from Multan cotton to Kashmiri silk — ensuring every garment feels as luxurious as it looks.' },
    { tag: 'Availability', title: 'Limited Edition', body: 'Our collections are produced in limited quantities to ensure exclusivity. Reserve your piece early to avoid disappointment.' }
  ]
  return [
    { tag: 'Quality', title: 'Premium Standards', body: 'Every item at Ahmad Cloth House meets rigorous quality standards, from fabric selection to the final stitch.' },
    { tag: 'Delivery', title: 'Global Shipping', body: 'Fast, insured international shipping to 50+ countries with real-time tracking and easy returns.' },
    { tag: 'Support', title: 'Expert Assistance', body: 'Our style advisors are available to help you find the perfect outfit for any occasion, size, or budget.' }
  ]
})

const contentSections = computed(() => {
  const t = pathType.value
  const s = formatSlug(slug.value)
  if (t === 'fabric') return [
    { heading: `What is ${s} Fabric?`, body: `${s} is one of Pakistan's most cherished textile traditions, known for its exceptional quality, unique texture, and versatile styling potential. Used by generations of craftspeople, this fabric has become a cornerstone of Pakistani fashion — from everyday casual wear to grand bridal ensembles. At Ahmad Cloth House, we carefully select only the finest quality ${s.toLowerCase()} fabrics to ensure every garment lives up to the highest standards.` },
    { heading: `Styling ${s} Fabric`, body: `The beauty of ${s.toLowerCase()} lies in its adaptability. It can be transformed into flowing anarkalis, structured kurtas, elegant maxi dresses, and intricate bridal suits with equal grace. Pair it with contrast dupatta fabrics for a traditional look, or keep it monochromatic for a modern minimalist approach. The fabric responds beautifully to embroidery, prints, and embellishments.` },
    { heading: `Caring for ${s} Garments`, body: `To preserve the quality of your ${s.toLowerCase()} garment, follow these essential care tips: Hand wash in cold water with mild detergent, or dry clean for embroidered pieces. Avoid soaking for more than 15 minutes. Iron on low heat with a pressing cloth to protect the surface. Store in a cool, dry place away from direct sunlight in a breathable fabric bag.` },
    { heading: `Shop ${s} at Ahmad Cloth House`, body: `Browse our extensive range of ${s.toLowerCase()} suits, unstitched fabric, and ready-to-wear pieces at Ahmad Cloth House. With worldwide shipping, secure payment options, and expert customer support, shopping for premium Pakistani fashion has never been easier. Explore seasonal collections, signature designs, and exclusive limited-edition pieces.` }
  ]
  if (t === 'occasion') return [
    { heading: `${s} Outfit Guide 2026`, body: `Dressing for a ${s.toLowerCase()} requires careful consideration of formality, colour, and cultural expectations. At Ahmad Cloth House, we offer a curated selection of outfits specifically designed for this occasion, taking the guesswork out of your wardrobe choices. Our collection spans everything from subtle, understated elegance to opulent embroidered masterpieces.` },
    { heading: `Fabric Recommendations`, body: `For ${s.toLowerCase()}, we recommend fabrics that balance comfort with visual impact. Embroidered chiffon and georgette are perennial favourites for their flowing silhouette and evening light catchment. Pure silk and raw silk offer a timeless luxury appeal. For daytime occasions, consider premium cotton or lawn with subtle embellishments.` },
    { heading: `Colour Palette for ${s}`, body: `The right colour can make an outfit unforgettable. For ${s.toLowerCase()}, trending colours include rich jewel tones like emerald, sapphire and ruby, as well as soft neutrals like champagne, ivory and blush. Bold reds and deep burgundies remain classic choices. Always consider the venue, time of day, and overall event colour theme when making your selection.` },
    { heading: `Accessorising Your ${s} Look`, body: `Complete your ${s.toLowerCase()} ensemble with thoughtfully chosen accessories. Opt for statement jewellery that complements rather than competes with embroidery. A silk or zari dupatta adds instant elegance. Choose clutch bags in metallic or jewel tones. For footwear, embroidered khussas or heeled sandals are ideal choices for traditional Pakistani occasions.` }
  ]
  if (t === 'shop-in') return [
    { heading: `Pakistani Fashion Delivery to ${s}`, body: `Ahmad Cloth House delivers authentic Pakistani luxury fashion directly to ${s} with fast, tracked international shipping. Our courier partners ensure your order arrives safely within 5–10 business days. All packages are carefully wrapped and fully insured. We accept all major payment methods including credit cards, PayPal, and bank transfers.` },
    { heading: `Why Shop with Ahmad Cloth House?`, body: `Founded with a passion for authentic Pakistani craftsmanship, Ahmad Cloth House has been serving the diaspora community with the finest selection of unstitched suits, bridal couture, luxury pret, and accessories. Every item is quality-checked before dispatch, and our customer service team is always available to assist with sizing, styling, and delivery queries.` },
    { heading: `Popular Products for Pakistani Diaspora in ${s}`, body: `Our customers in ${s} most frequently order unstitched lawn suits for summer, heavy embroidered chiffon and georgette for wedding functions, bridal and semi-formal wear for Eid and celebration events, and children's festival collections. Browse our full catalog or contact our style advisors for personalised recommendations.` }
  ]
  return [
    { heading: `About This Collection`, body: `Explore our curated selection at Ahmad Cloth House. Each product is handpicked to meet our rigorous standards of quality, craftsmanship, and style. We partner with the finest artisans across Pakistan to bring you fashion that is both authentic and extraordinary.` },
    { heading: `Worldwide Shipping`, body: `Ahmad Cloth House ships to over 50 countries worldwide with fast, tracked delivery. All orders are carefully packed and fully insured. Our customer support team is available to assist with any queries about delivery, returns, or exchanges.` }
  ]
})

const relatedLinks = computed(() => {
  return [
    { to: '/shop/Unstitched', label: 'Unstitched' },
    { to: '/shop/Bridal', label: 'Bridal' },
    { to: '/shop/Pret', label: 'Luxury Pret' },
    { to: '/shop/Formal', label: 'Formal Wear' },
    { to: '/collection/summer-2026', label: 'Summer 2026' },
    { to: '/collection/bridal-2026', label: 'Bridal 2026' },
    { to: '/fabric/lawn', label: 'Lawn Fabric' },
    { to: '/fabric/silk', label: 'Silk Fabric' },
    { to: '/occasion/bridal-wear', label: 'Bridal Wear' },
    { to: '/occasion/party-wear', label: 'Party Wear' },
    { to: '/size-guide', label: 'Size Guide' },
    { to: '/contact', label: 'Contact Us' }
  ]
})
</script>
