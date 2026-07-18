import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index.js'
import vue3GoogleLogin from 'vue3-google-login'

// FontAwesome Config
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faChevronDown, faChevronLeft, faChevronRight, faArrowRight, faArrowLeft, 
  faCookieBite, faQuoteLeft, faArrowUp, faTimes, faRobot, faVolumeUp, 
  faMicrophone, faMicrophoneSlash, faPaperPlane, faXmark, faBars, faLock, 
  faSun, faMoon, faMagnifyingGlass, faBagShopping, faGear, faCakeCandles, faGift, faMortarPestle,
  faArrowRightFromBracket, faUser, faPlus, faArrowRightLong, faBasketShopping, 
  faStar, faCheck, faShieldHalved, faPen, faTrashCan, faCircle, faEyeSlash, 
  faEye, faUsersSlash, faTriangleExclamation, faBolt, faGrip, faList,
  faHeart, faPenToSquare, faGem, faSatellite, faLeaf, faChartLine, 
  faCartShopping, faWandMagicSparkles, faBookOpen, faUsers, 
  faBuildingColumns, faBox, faArrowTrendUp, faArrowTrendDown,
  faCookie, faIceCream, faBreadSlice, faCreditCard, faHandHoldingDollar,
  faTruck, faTruckFast, faShirt, faLocationDot, faImage, faPhone,
  faScissors, faPalette, faTags, faShop, faVest, faUserTie, faClipboardList,
  faMobileRetro, faWallet, faMoneyBill1Wave, faMoneyBillTransfer,
  faSackDollar, faArrowsToDot, faUsersGear, faStarHalfStroke, faEarthAmericas,
  faBoxOpen, faClock, faHouseCircleCheck, faEnvelopeOpenText, faHandHoldingHeart,
  faHeadset, faRotate, faCommentSlash, faCommentDots, faCalendarDay, faHouse
} from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart, faStar as farStar, faStar as fasStar } from '@fortawesome/free-regular-svg-icons'
import { 
  faInstagram, faFacebookF, faCcVisa, faCcMastercard, faCcApplePay, 
  faCcAmex, faApplePay, faXTwitter, faLinkedinIn, faGoogle, faWhatsapp,
  faYoutube, faTiktok
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faChevronDown, faChevronLeft, faChevronRight, faArrowRight, faArrowLeft, 
  faCookieBite, faQuoteLeft, faArrowUp, faTimes, faRobot, faVolumeUp, 
  faMicrophone, faMicrophoneSlash, faPaperPlane, faXmark, faBars, faLock, 
  faSun, faMoon, faMagnifyingGlass, faBagShopping, faGear, faCakeCandles, faGift, faMortarPestle,
  faArrowRightFromBracket, faUser, faPlus, faArrowRightLong, faBasketShopping, 
  faStar, faCheck, faShieldHalved, faPen, faTrashCan, faCircle, faEyeSlash, 
  faEye, faUsersSlash, faTriangleExclamation, faBolt, faGrip, faList,
  faHeart, faPenToSquare, faGem, faSatellite, faLeaf, faChartLine, 
  faCartShopping, faWandMagicSparkles, faBookOpen, faUsers, 
  faBuildingColumns, faBox, faArrowTrendUp, faArrowTrendDown,
  faCookie, faIceCream, faBreadSlice, faCreditCard, faHandHoldingDollar,
  faTruck, faTruckFast, faShirt, faLocationDot, faImage, faPhone,
  faScissors, faPalette, faTags, faShop, faVest, faUserTie, faClipboardList,
  faMobileRetro, faWallet, faMoneyBill1Wave, faMoneyBillTransfer,
  faSackDollar, faArrowsToDot, faUsersGear, faStarHalfStroke, faEarthAmericas,
  faBoxOpen, faClock, faHouseCircleCheck, faEnvelopeOpenText, faHandHoldingHeart, faHeadset,
  faRotate, faCommentSlash, faCommentDots, faCalendarDay, faHouse,
  farHeart, farStar, fasStar,
  faInstagram, faFacebookF, faCcVisa, faCcMastercard, faCcApplePay, 
  faCcAmex, faApplePay, faXTwitter, faLinkedinIn, faGoogle, faWhatsapp,
  faYoutube, faTiktok
)

const app = createApp(App)
const pinia = createPinia()

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(pinia)
app.use(router)
app.use(vue3GoogleLogin, {
  clientId: '283391772045-1qu6ot0uclhcnvja81k7g8p9asjqpmus.apps.googleusercontent.com'
})

// ═══════════════════════════════════════════════════════════════════════════
//  DYNAMIC SEO — PER-ROUTE CANONICAL + META TAGS
//  ─────────────────────────────────────────────────────────────────────────
//  ROOT CAUSE OF GOOGLE SEARCH CONSOLE ERROR:
//  "Alternative page with proper canonical tag" — FAILED (3 pages)
//
//  The old index.html had a STATIC canonical:
//    <link rel="canonical" href="https://ahmad-cloths.vercel.app/" />
//
//  Since this is a Vue SPA, every route (/shop, /blog, /contact, etc.)
//  shares the same index.html — meaning Google saw each page pointing its
//  canonical at "/" and classified them as "alternatives to the homepage",
//  refusing to index them independently.
//
//  FIX: Remove the static canonical from index.html and use router.afterEach
//  to inject the CORRECT per-route canonical URL after every navigation.
// ═══════════════════════════════════════════════════════════════════════════

const SITE_BASE   = 'https://ahmad-cloths.vercel.app'
const DFLT_TITLE  = 'AhmadClothesHouse | Premium Pakistani Designer Suits & Couture 2026'
const DFLT_DESC   = 'Discover luxury Pakistani fashion at AhmadClothesHouse. Unstitched suits, luxury pret, and bridal wear shipping to USA, UK, Canada & UAE.'

// Per-route title + description for the pages Google actually crawls
const PAGE_META = {
  '/':        { title: 'AhmadClothesHouse | Boutique Pakistani Designer Suits 2026',          desc: 'Shop exclusive 2026 designer suits, luxury unstitched lawn & bridal wear. Worldwide delivery from Lahore.' },
  '/shop':    { title: 'Shop Pakistani Designer Suits & Fabrics | AhmadClothesHouse',         desc: 'Browse our full collection of unstitched lawn, pret, bridal & mens kurta fabric. Fast delivery worldwide.' },
  '/blog':    { title: 'Pakistani Fashion Blog 2026 | Trends & Style | AhmadClothesHouse',    desc: 'Expert fashion guides, lawn reviews, bridal trends, and July 2026 collection highlights from Ahmad Cloth House.' },
  '/about':   { title: 'About AhmadClothesHouse | Lahores Premier Fashion Boutique',          desc: 'Our heritage, mission, and commitment to authentic Pakistani luxury fashion.' },
  '/contact': { title: 'Contact AhmadClothesHouse | WhatsApp & Email',                        desc: 'Contact Ahmad Cloth House for orders, custom requests, or enquiries.' },
  '/privacy': { title: 'Privacy Policy | AhmadClothesHouse',                                  desc: 'How Ahmad Cloth House collects, uses and protects your personal data.' },
  '/terms':   { title: 'Terms & Conditions | AhmadClothesHouse',                              desc: 'Terms and conditions governing your use of AhmadClothesHouse.' },
  '/cookies': { title: 'Cookie Policy | AhmadClothesHouse',                                   desc: 'How AhmadClothesHouse uses cookies to improve your experience.' },
}

/** Create or update a single <meta> or <link> tag in document.head */
function upsertHeadTag(selector, valueAttr, value) {
  let el = document.querySelector(selector)
  if (!el) {
    const isLink = selector.startsWith('link')
    el = document.createElement(isLink ? 'link' : 'meta')
    // Parse attribute pairs from selector like link[rel="canonical"]
    const pairs = selector.match(/\[([^\]]+)]/g) || []
    pairs.forEach(p => {
      const inner = p.slice(1, -1)
      const eq = inner.indexOf('=')
      el.setAttribute(inner.slice(0, eq), inner.slice(eq + 1).replace(/"/g, ''))
    })
    document.head.appendChild(el)
  }
  el.setAttribute(valueAttr, value)
}

// Private routes — should never be indexed by search engines
const PRIVATE_PATHS = [
  '/admin', '/checkout', '/cart', '/dashboard',
  '/track-order', '/reset-password', '/forgot-password', '/login', '/signup'
]

router.afterEach((to) => {
  // Normalise path: strip trailing slash except for root
  const path = to.path.length > 1 ? to.path.replace(/\/$/, '') : '/'
  const canonicalUrl = SITE_BASE + path

  // Resolve title + description (route meta > PAGE_META lookup > defaults)
  const pm    = PAGE_META[path] || {}
  const title = (to.meta && to.meta.title) || pm.title || DFLT_TITLE
  const desc  = (to.meta && to.meta.desc)  || pm.desc  || DFLT_DESC

  // 1. <title>
  document.title = title

  // 2. <link rel="canonical"> ← THE FIX for GSC "Alternative page" error
  upsertHeadTag('link[rel="canonical"]',           'href',    canonicalUrl)

  // 3. Open Graph
  upsertHeadTag('meta[property="og:url"]',         'content', canonicalUrl)
  upsertHeadTag('meta[property="og:title"]',       'content', title)
  upsertHeadTag('meta[property="og:description"]', 'content', desc)

  // 4. Standard meta description
  upsertHeadTag('meta[name="description"]',        'content', desc)

  // 5. Twitter / X Card
  upsertHeadTag('meta[property="twitter:url"]',   'content', canonicalUrl)
  upsertHeadTag('meta[property="twitter:title"]', 'content', title)

  const isPrivate = PRIVATE_PATHS.some(p => path.startsWith(p))
  upsertHeadTag('meta[name="robots"]', 'content', isPrivate ? 'noindex, nofollow' : 'index, follow')
})

// ═══════════════════════════════════════════════════════════════════════════
//  REGISTER SERVICE WORKER FOR MOBILE APP INSTALLATION (PWA)
// ═══════════════════════════════════════════════════════════════════════════
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .catch(err => {
        // Silent failure in production console suppression is fine
      });
  });
}

app.mount('#app')