import { createRouter, createWebHistory } from 'vue-router'
import { useLoadingStore } from '../stores/loading'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'Ahmadcloths House | Best Unstitched Ladies Suits & Luxury Pret Pakistan',
      description: 'Discover premium unstitched ladies suits, luxury pret, and bridal couture at Ahmadcloths House. Handcrafted Pakistani designer wear inspired by Maria B & Warda.',
      robots: 'index, follow',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Ahmadcloths House",
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
      title: 'Product Detail - Ahmadcloths house',
      description: 'Explore our selected premium fashion pieces crafted with passion and the finest fabrics.',
      robots: 'index, follow'
    }
  },
  {
    path: '/shop/:category?',
    name: 'shop',
    component: () => import('../views/Shop.vue'),
    props: true,
    meta: {
      title: 'Shop Pakistani Designer Suits | Unstitched, Pret & Bridal Collection',
      description: 'Browse the latest unstitched suits, luxury pret, and wedding wear for women. Designer embroidery and premium fabrics including lawn & chiffon at Ahmadcloths.',
      robots: 'index, follow',
      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Shop Luxury Pakistani Designer Suits - Ahmadcloths House",
        "description": "Browse our exclusive catalog of unstitched, pret, and luxury bridal couture.",
        "url": "https://ahmad-cloths.vercel.app/shop"
      }
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue'),
    meta: {
      title: 'My Bag - Ahmadcloths house',
      description: 'Review your selected fashion pieces in the Ahmadcloths house bag.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('../views/Favorites.vue'),
    meta: {
      title: 'My Saved Couture - Ahmadcloths House',
      description: 'Your curated selection of favorite unstitched suites and luxury fashion pieces from Ahmadcloths House.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/Checkout.vue'),
    meta: {
      title: 'Secure Checkout | Ahmadcloths House Premium Fashion',
      description: 'Complete your purchase securely through our encrypted checkout. Get your luxury unstitched suits and couture delivered safely.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'Our Heritage & Design Philosophy | Ahmadcloths House',
      description: 'Discover the story of Ahmadcloths House. Traditional craftsmanship meets modern luxury in our premium unstitched and bridal collections.',
      robots: 'index, follow',
      schema: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Our Story - Ahmadcloths House",
        "description": "Learn about Ahmadcloths House mission to bridge artisanal craftsmanship and luxury fashion.",
        "url": "https://ahmad-cloths.vercel.app/about"
      }
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue'),
    meta: {
      title: 'Contact Us | Ahmadcloths House Premium Fashion Support',
      description: 'Get in touch with Ahmadcloths House for orders, wholesale inquiries, and customer support. Experience the finest Pakistani luxury wear.',
      robots: 'index, follow'
    }
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/Privacy.vue'),
    meta: {
      title: 'Privacy Protocol | Ahmadcloths House Data Security',
      description: 'Review the Ahmadcloths House privacy policy and our commitment to protecting your personal data and fashion journey.',
      robots: 'index, follow'
    }
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/Terms.vue'),
    meta: {
      title: 'Terms of Service | Ahmadcloths House Legal',
      description: 'Read the terms and conditions for orders, shipping, and returns at Ahmadcloths House.',
      robots: 'index, follow'
    }
  },
  {
    path: '/cookies',
    name: 'cookies',
    component: () => import('../views/Cookies.vue'),
    meta: {
      title: 'Cookie Consent | Ahmadcloths House Digital Experience',
      description: 'Details on how Ahmadcloths House utilizes cookies to enhance your luxury shopping experience.',
      robots: 'index, follow'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Enter the House | Ahmadcloths House Login',
      description: 'Access your Ahmadcloths House member account to view orders and saved couture.',
      robots: 'index, follow'
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/Signup.vue'),
    meta: {
      title: 'Join the Inner Circle | Ahmadcloths House Signup',
      description: 'Create your Ahmadcloths House account for early access to lawn launches and exclusive bridal previews.',
      robots: 'index, follow'
    }
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../views/ForgotPassword.vue'),
    meta: {
      title: 'Recover Account Access | Ahmadcloths House',
      description: 'Regain access to your Ahmadcloths House account and your fashion history.',
      robots: 'index, follow'
    }
  },
  {
    path: '/reset-password/:token',
    name: 'reset-password',
    component: () => import('../views/ResetPassword.vue'),
    meta: {
      title: 'Reset Security Code | Ahmadcloths House',
      description: 'Set a new password for your Ahmadcloths House secure profile.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/admin/dashboard',
    name: 'admin-dashboard',
    component: () => import('../components/Admin/AdminDashboard.vue'),
    meta: { 
      requiresAdmin: true,
      title: 'Couture Management | Ahmadcloths House Admin',
      description: 'Ahmadcloths House administrative portal for collection management.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/track-order',
    name: 'track-order',
    component: () => import('../views/TrackOrder.vue'),
    meta: {
      title: 'Track Your Couture | Ahmadcloths House Order Tracking',
      description: 'Track your Ahmadcloths House order in real-time. View shipping status and estimated delivery for your luxury unstitched and pret pieces.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/dashboard',
    name: 'user-dashboard',
    component: () => import('../views/UserDashboard.vue'),
    meta: { 
      requiresAuth: true,
      title: 'My Fashion Profile | Ahmadcloths House Dashboard',
      description: 'Personalized couture dashboard for Ahmadcloths House members to manage orders and saved items.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: 'Undiscovered Design | Ahmadcloths House',
      description: 'The requested fashion page could not be located in our House of Couture.',
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
  // Update Title
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'AhmadClothes House - Premium Fashion House'
  }

  // Update Meta Description
  let descriptionElement = document.querySelector('meta[name="description"]')
  if (to.meta.description) {
    if (descriptionElement) {
      descriptionElement.setAttribute('content', to.meta.description)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = to.meta.description
      document.head.appendChild(meta)
    }
  }

  // Update Meta Robots
  let robotsElement = document.querySelector('meta[name="robots"]')
  if (to.meta.robots) {
    if (robotsElement) {
      robotsElement.setAttribute('content', to.meta.robots)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'robots'
      meta.content = to.meta.robots
      document.head.appendChild(meta)
    }
  }

  // Update Canonical Tag
  let canonicalElement = document.querySelector('link[rel="canonical"]')
  const canonicalUrl = `https://ahmad-cloths.vercel.app${to.path}`
  if (canonicalElement) {
    canonicalElement.setAttribute('href', canonicalUrl)
  } else {
    const link = document.createElement('link')
    link.rel = 'canonical'
    link.href = canonicalUrl
    document.head.appendChild(link)
  }

  // Update Schema (JSON-LD)
  let schemaElement = document.querySelector('script[id="dynamic-schema"]')
  if (schemaElement) {
    schemaElement.remove()
  }
  if (to.meta.schema) {
    const script = document.createElement('script')
    script.id = 'dynamic-schema'
    script.type = 'application/ld+json'
    script.text = JSON.stringify(to.meta.schema)
    document.head.appendChild(script)
  }

  // Meta Pixel PageView Tracking
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }

  // Hide loading spinner after transition
  const loading = useLoadingStore()
  setTimeout(() => {
    loading.setLoading(false)
  }, 1000) // Delay to ensure consistent premium feel
})

export default router