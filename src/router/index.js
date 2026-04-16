import { createRouter, createWebHistory } from 'vue-router'
import { useLoadingStore } from '../stores/loading'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'AhmadClothesFabrics | Best Unstitched Ladies Suits & Luxury Pret Pakistan',
      description: 'Discover premium unstitched ladies suits, luxury pret, and bridal couture at AhmadClothesFabrics. Handcrafted Pakistani designer wear inspired by Maria B & Warda.',
      robots: 'index, follow',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "AhmadClothesFabrics",
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
      title: 'Product Detail - AhmadClothesFabrics',
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
      description: 'Browse the latest unstitched suits, luxury pret, and wedding wear for women. Designer embroidery and premium fabrics including lawn & chiffon at AhmadClothesFabrics.',
      robots: 'index, follow',
      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Shop Luxury Pakistani Designer Suits - AhmadClothesFabrics",
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
      title: 'My Bag - AhmadClothesFabrics',
      description: 'Review your selected fashion pieces in the AhmadClothesFabrics bag.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('../views/Favorites.vue'),
    meta: {
      title: 'My Saved Couture - AhmadClothesFabrics',
      description: 'Your curated selection of favorite unstitched suites and luxury fashion pieces from AhmadClothesFabrics.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/Checkout.vue'),
    meta: {
      title: 'Secure Checkout | AhmadClothesFabrics Premium Fashion',
      description: 'Complete your purchase securely through our encrypted checkout. Get your luxury unstitched suits and couture delivered safely.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'Our Heritage & Design Philosophy | AhmadClothesFabrics',
      description: 'Discover the story of AhmadClothesFabrics. Traditional craftsmanship meets modern luxury in our premium unstitched and bridal collections.',
      robots: 'index, follow',
      schema: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Our Story - AhmadClothesFabrics",
        "description": "Learn about AhmadClothesFabrics mission to bridge artisanal craftsmanship and luxury fashion.",
        "url": "https://ahmad-cloths.vercel.app/about"
      }
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue'),
    meta: {
      title: 'Contact Us | AhmadClothesFabrics Boutique Lahore',
      description: 'Get in touch with AhmadClothesFabrics for inquiries, bridal consultations, and order support. Visit our luxury boutique in Lahore or shop online.',
      robots: 'index, follow'
    }
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/Privacy.vue'),
    meta: {
      title: 'Privacy Policy | AhmadClothesFabrics Data Protection',
      description: 'Learn how AhmadClothesFabrics House protects your personal information and ensures a secure luxury shopping experience.',
      robots: 'index, follow'
    }
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/Terms.vue'),
    meta: {
      title: 'Terms of Service | AhmadClothesFabrics Client Agreement',
      description: 'Read the terms and conditions for shopping at AhmadClothesFabrics House, Pakistans leading luxury fashion boutique.',
      robots: 'index, follow'
    }
  },
  {
    path: '/cookies',
    name: 'cookies',
    component: () => import('../views/Cookies.vue'),
    meta: {
      title: 'Cookie Policy | AhmadClothesFabrics Digital Experience',
      description: 'Information about how AhmadClothesFabrics House uses cookies to enhance your luxury online shopping experience.',
      robots: 'index, follow'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Enter the House | AHMADCLOTHESFABRICS Login',
      description: 'Access your AHMADCLOTHESFABRICS member account to view orders and saved couture.',
      robots: 'index, follow'
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/Signup.vue'),
    meta: {
      title: 'Join the Inner Circle | AHMADCLOTHESFABRICS Signup',
      description: 'Create your AHMADCLOTHESFABRICS account for early access to lawn launches and exclusive bridal previews.',
      robots: 'index, follow'
    }
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../views/ForgotPassword.vue'),
    meta: {
      title: 'Reset Access | AhmadClothesFabrics',
      description: 'Recover your AhmadClothesFabrics account access safely.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/reset-password/:token',
    name: 'reset-password',
    component: () => import('../views/ResetPassword.vue'),
    meta: {
      title: 'Update Password | AhmadClothesFabrics',
      description: 'Set a new secure password for your AhmadClothesFabrics boutique account.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/admin/dashboard',
    name: 'admin-dashboard',
    component: () => import('../components/Admin/AdminDashboard.vue'),
    meta: { 
      requiresAdmin: true,
      title: 'Couture Management | AHMADCLOTHESFABRICS Admin',
      description: 'AHMADCLOTHESFABRICS administrative portal for collection management.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/track-order',
    name: 'track-order',
    component: () => import('../views/TrackOrder.vue'),
    meta: {
      title: 'Track Your Couture | AhmadClothesFabrics Real-time Tracking',
      description: 'Track the delivery status of your luxury apparel from AhmadClothesFabrics House in real-time.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/UserDashboard.vue'),
    meta: {
      title: 'Client Dashboard - AhmadClothesFabrics',
      description: 'Manage your luxury orders and preferences at AhmadClothesFabrics.',
      robots: 'noindex, nofollow',
      requiresAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: 'Undiscovered Design | AHMADCLOTHESFABRICS',
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