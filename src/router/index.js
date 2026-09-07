import { createRouter, createWebHistory } from 'vue-router'
import { useLoadingStore } from '../stores/loading'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'AhmadClothesHouse | Pakistani Designer Suits 2026 | Luxury Lawn & Bridal Couture',
      description: 'Shop latest 2026 Pakistani luxury lawn, unstitched suits, and premium bridal couture at Ahmad Clothes House. Authentic Maria B & Sana Safinaz designs with global shipping.',
      robots: 'index, follow',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Ahmad Clothes House",
        "url": "https://ahmad-cloths.vercel.app"
      }
    }
  },
  {
    path: '/product/:id',
    name: 'product-detail',
    component: () => import('../views/ProductDetail.vue'),
    props: true,
    meta: {
      title: 'Premium Pakistani Couture | Product Detail | AhmadClothesHouse',
      description: 'Explore our selected premium fashion pieces crafted with passion at Ahmad Clothes House. Order handcrafted Pakistani dresses with express shipping to USA, UK, and Europe.',
      robots: 'index, follow'
    }
  },
  {
    path: '/shop/:category?',
    name: 'shop',
    component: () => import('../views/Shop.vue'),
    props: true,
    meta: {
      title: 'Shop Pakistani Designer Suits Online 2026 | Unstitched & Luxury Pret | AhmadClothesHouse',
      description: 'Browse the newest 2026 Pakistani summer lawn, luxury silk collections, and bridal wear at Ahmad Clothes House. Express shipping for designer suits to USA, UK, Canada, UAE, and Europe.',
      robots: 'index, follow',
      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Shop Luxury Pakistani Designer Suits - Ahmad Clothes House",
        "description": "Browse our exclusive catalog of unstitched, pret, and luxury bridal couture at Ahmad Clothes House with international delivery.",
        "url": "https://ahmad-cloths.vercel.app/shop"
      }
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue'),
    meta: {
      title: 'My Bag | AhmadClothesHouse | Secure Global Checkout',
      description: 'Review your selected fashion pieces at Ahmad Clothes House. We offer secure payments and worldwide shipping for all Pakistani luxury couture.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('../views/Favorites.vue'),
    meta: {
      title: 'My Saved Couture | AhmadClothesHouse Favorites',
      description: 'Your curated selection of favorite unstitched suites and luxury fashion pieces from Ahmad Clothes House.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/Checkout.vue'),
    meta: {
      title: 'Secure Global Checkout | AhmadClothesHouse Premium Fashion',
      description: 'Complete your purchase securely at Ahmad Clothes House. We ship our handcrafted Pakistani suits and bridal wear to USA, UK, Canada, UAE and more.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'Our Heritage & Design Philosophy | AhmadClothesHouse | Global Pakistani Fashion',
      description: 'Discover the story of Ahmad Clothes House. Traditional Lahore craftsmanship meets modern luxury. Delivering authentic Pakistani fashion to women worldwide.',
      robots: 'index, follow',
      schema: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Our Story - Ahmad Clothes House",
        "description": "Learn about Ahmad Clothes House mission to bridge artisanal craftsmanship and luxury fashion globally.",
        "url": "https://ahmad-cloths.vercel.app/about"
      }
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue'),
    meta: {
      title: 'Contact Our Boutique | AhmadClothesHouse Lahore | Global Support',
      description: 'Get in touch with Ahmad Clothes House for inquiries, bridal consultations, and international order support. Visit our luxury boutique in Lahore or contact our global team.',
      robots: 'index, follow'
    }
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/Privacy.vue'),
    meta: {
      title: 'Privacy Policy | AhmadClothesHouse Data Protection',
      description: 'Learn how Ahmad Clothes House protects your personal information and ensures a secure luxury shopping experience.',
      robots: 'index, follow'
    }
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/Terms.vue'),
    meta: {
      title: 'Terms of Service | AhmadClothesHouse Client Agreement',
      description: 'Read the terms and conditions for shopping at Ahmad Clothes House, Pakistans leading luxury fashion boutique.',
      robots: 'index, follow'
    }
  },
  {
    path: '/cookies',
    name: 'cookies',
    component: () => import('../views/Cookies.vue'),
    meta: {
      title: 'Cookie Policy | AhmadClothesHouse Digital Experience',
      description: 'Information about how Ahmad Clothes House uses cookies to enhance your luxury online shopping experience.',
      robots: 'index, follow'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Enter the House | AhmadClothesHouse Login',
      description: 'Access your Ahmad Clothes House member account to view orders and saved couture.',
      robots: 'index, follow'
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/Signup.vue'),
    meta: {
      title: 'Join the Inner Circle | AhmadClothesHouse Signup',
      description: 'Create your Ahmad Clothes House account for early access to lawn launches and exclusive bridal previews.',
      robots: 'index, follow'
    }
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../views/ForgotPassword.vue'),
    meta: {
      title: 'Reset Access | AhmadClothesHouse',
      description: 'Recover your Ahmad Clothes House account access safely.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/reset-password/:token',
    name: 'reset-password',
    component: () => import('../views/ResetPassword.vue'),
    meta: {
      title: 'Update Password | AhmadClothesHouse',
      description: 'Set a new secure password for your Ahmad Clothes House boutique account.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/admin/dashboard',
    name: 'admin-dashboard',
    component: () => import('../components/Admin/AdminDashboard.vue'),
    meta: { 
      requiresAdmin: true,
      title: 'Couture Management | AhmadClothesHouse Admin',
      description: 'Ahmad Clothes House administrative portal for collection management.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/track-order',
    name: 'track-order',
    component: () => import('../views/TrackOrder.vue'),
    meta: {
      title: 'Track Your Couture | AhmadClothesHouse Real-time Tracking',
      description: 'Track the delivery status of your luxury apparel from Ahmad Clothes House in real-time.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/UserDashboard.vue'),
    meta: {
      title: 'Client Dashboard - AhmadClothesHouse',
      description: 'Manage your luxury orders and preferences at Ahmad Clothes House.',
      robots: 'noindex, nofollow',
      requiresAuth: true
    }
  },
  {
    path: '/blog',
    name: 'blog-list',
    component: () => import('../views/BlogList.vue'),
    meta: {
      title: 'Fashion Journal | Pakistani Luxury Lawn Trends 2026 | Style Guides | AhmadClothesHouse',
      description: 'Expert insights on Pakistani fashion, 2026 bridal collection trends, lawn shopping guides, and luxury couture styling at the Ahmad Clothes House Journal.',
      robots: 'index, follow'
    }
  },
  {
    path: '/blog/:slug',
    name: 'blog-detail',
    component: () => import('../views/BlogDetail.vue'),
    props: true,
    meta: {
      title: 'Luxury Fashion Insights | AhmadClothesHouse Blog',
      description: 'Deep dive into the world of Pakistani craftsmanship, high-end design, and luxury fashion storytelling at Ahmad Clothes House.',
      robots: 'index, follow'
    }
  },
  // ══════════════════════════════════════════════
  // SEO LANDING PAGES — Collection, Fabric, Occasion, Lookbook, etc.
  // ══════════════════════════════════════════════
  {
    path: '/collection/:slug',
    name: 'collection',
    component: () => import('../views/SEOLandingPage.vue'),
    props: true,
    meta: {
      title: 'Luxury Collection | Ahmad Clothes House — Pakistani Couture',
      description: 'Explore our exclusive curated collections featuring artisanal Pakistani fashion, luxury fabrics, and bespoke couture at Ahmad Clothes House. Available with worldwide shipping.',
      robots: 'index, follow'
    }
  },
  {
    path: '/fabric/:slug',
    name: 'fabric',
    component: () => import('../views/SEOLandingPage.vue'),
    props: true,
    meta: {
      title: 'Premium Fabric Guide | Ahmad Clothes House — Pakistani Textiles',
      description: 'Discover the finest Pakistani fabrics — lawn, silk, chiffon, khaddar and more. Expert styling and buying guides at Ahmad Clothes House.',
      robots: 'index, follow'
    }
  },
  {
    path: '/occasion/:slug',
    name: 'occasion',
    component: () => import('../views/SEOLandingPage.vue'),
    props: true,
    meta: {
      title: 'Occasion Wear | Ahmad Clothes House — Bridal, Formal & Party',
      description: 'Find the perfect outfit for every occasion — bridal, mehndi, barat, walima, eid, party and formal events at Ahmad Clothes House. Pakistani luxury fashion at its finest.',
      robots: 'index, follow'
    }
  },
  {
    path: '/lookbook/:slug',
    name: 'lookbook',
    component: () => import('../views/SEOLandingPage.vue'),
    props: true,
    meta: {
      title: 'Style Lookbook | Ahmad Clothes House — Fashion Inspiration',
      description: 'Explore curated style lookbooks for every season, occasion and colour palette. Pakistani luxury fashion inspiration at Ahmad Clothes House.',
      robots: 'index, follow'
    }
  },
  {
    path: '/size-guide/:slug?',
    name: 'size-guide',
    component: () => import('../views/SEOLandingPage.vue'),
    props: true,
    meta: {
      title: 'Size Guide & Measurement Chart | Ahmad Clothes House',
      description: 'Complete size guide for Pakistani suits, kurtas, shalwar kameez, bridal wear and more at Ahmad Clothes House. Find your perfect fit with our detailed measurement charts.',
      robots: 'index, follow'
    }
  },
  {
    path: '/care/:slug',
    name: 'care-guide',
    component: () => import('../views/SEOLandingPage.vue'),
    props: true,
    meta: {
      title: 'Fabric Care Guide | Ahmad Clothes House — Clothing Care Tips',
      description: 'Expert fabric care instructions for Pakistani suits, embroidered clothes, silk, lawn and more. Keep your luxury garments looking perfect with Ahmad Clothes House.',
      robots: 'index, follow'
    }
  },
  {
    path: '/shop-in/:city',
    name: 'shop-in-city',
    component: () => import('../views/SEOLandingPage.vue'),
    props: true,
    meta: {
      title: 'Shop Pakistani Fashion Online | Ahmad Clothes House — Worldwide Delivery',
      description: 'Order authentic Pakistani luxury suits, bridal wear and couture with fast delivery worldwide. Ahmad Clothes House ships globally.',
      robots: 'index, follow'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: 'Undiscovered Design | AhmadClothesHouse',
      description: 'The requested fashion page could not be located at Ahmad Clothes House.',
      robots: 'noindex, nofollow'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// Navigation Guard
router.beforeEach((to, from, next) => {
  const loading = useLoadingStore()
  loading.setLoading(true)
  
  const token = localStorage.getItem('token')
  const storedUser = localStorage.getItem('user')
  let user = null
  
  if (storedUser && storedUser !== 'undefined') {
    try {
      user = JSON.parse(storedUser)
    } catch (e) {
      console.error('Failed to parse user session', e)
    }
  }


  if (to.meta.requiresAdmin) {
    if (!token || user?.role !== 'admin') {
      return next({ name: 'login' })
    }
  }

  if (to.meta.requiresAuth) {
    if (!token || user?.role === 'admin') {
      return next({ name: 'login' })
    }
  }

  if (to.name === 'login' && token) {
    return next({ name: 'home' })
  }

  next()
})

// Dynamic Meta Tag Guard
router.afterEach((to) => {
  const BASE_URL = 'https://ahmad-cloths.vercel.app'
  // Remove trailing slash for consistency (except for root path)
  const cleanPath = to.path.length > 1 && to.path.endsWith('/') ? to.path.slice(0, -1) : to.path
  const canonicalUrl = `${BASE_URL}${cleanPath}`
  const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`

  // === Title ===
  document.title = to.meta.title || 'AhmadClothesHouse | Premium Pakistani Fashion'

  // === Helper to set any meta tag ===
  const setMeta = (attrName, attrVal, contentVal) => {
    let el = document.querySelector(`meta[${attrName}="${attrVal}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attrName, attrVal)
      document.head.appendChild(el)
    }
    el.setAttribute('content', contentVal)
  }

  // === Standard Meta ===
  if (to.meta.description) setMeta('name', 'description', to.meta.description)
  if (to.meta.robots)      setMeta('name', 'robots',      to.meta.robots)

  // === Open Graph ===
  if (to.meta.title)       setMeta('property', 'og:title',       to.meta.title)
  if (to.meta.description) setMeta('property', 'og:description', to.meta.description)
  setMeta('property', 'og:url',   canonicalUrl)
  setMeta('property', 'og:image', DEFAULT_IMAGE)
  setMeta('property', 'og:type',  to.path.startsWith('/blog/') ? 'article' : 'website')

  // === Twitter ===
  if (to.meta.title)       setMeta('property', 'twitter:title',       to.meta.title)
  if (to.meta.description) setMeta('property', 'twitter:description', to.meta.description)
  setMeta('property', 'twitter:url',   canonicalUrl)
  setMeta('property', 'twitter:image', DEFAULT_IMAGE)

  // === Canonical ===
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = canonicalUrl

  // === Page JSON-LD Schema (from route meta) ===
  let schemaElement = document.querySelector('script[id="dynamic-schema"]')
  if (schemaElement) schemaElement.remove()
  if (to.meta.schema) {
    const script = document.createElement('script')
    script.id = 'dynamic-schema'
    script.type = 'application/ld+json'
    script.text = JSON.stringify(to.meta.schema)
    document.head.appendChild(script)
  }

  // === BreadcrumbList Schema for all indexable pages ===
  const BREADCRUMB_SKIP = ['login', 'signup', 'admin-dashboard', 'dashboard', 'checkout', 'cart', 'notfound']
  if (!BREADCRUMB_SKIP.includes(to.name)) {
    let bcEl = document.querySelector('script[id="breadcrumb-schema"]')
    if (bcEl) bcEl.remove()

    const crumbs = [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }]

    if (to.path.startsWith('/shop')) {
      crumbs.push({ '@type': 'ListItem', position: 2, name: 'Shop', item: `${BASE_URL}/shop` })
      if (to.params?.category) {
        crumbs.push({ '@type': 'ListItem', position: 3, name: to.params.category, item: canonicalUrl })
      }
    } else if (to.path.startsWith('/blog/')) {
      crumbs.push({ '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` })
      crumbs.push({ '@type': 'ListItem', position: 3, name: document.title.split('|')[0].trim(), item: canonicalUrl })
    } else if (to.path !== '/') {
      const pageName = to.name ? to.name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : to.path
      crumbs.push({ '@type': 'ListItem', position: 2, name: pageName, item: canonicalUrl })
    }

    if (crumbs.length > 1) {
      const bcScript = document.createElement('script')
      bcScript.id = 'breadcrumb-schema'
      bcScript.type = 'application/ld+json'
      bcScript.text = JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs })
      document.head.appendChild(bcScript)
    }
  }

  // === Meta Pixel PageView ===
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }

  // === Hide Loading Spinner ===
  const loading = useLoadingStore()
  loading.setLoading(false)
})

export default router