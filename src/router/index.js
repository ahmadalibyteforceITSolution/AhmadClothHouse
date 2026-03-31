import { createRouter, createWebHistory } from 'vue-router'
import { useLoadingStore } from '../stores/loading'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'Ahmadcloths house | Premium Luxury Fashion & Couture',
      description: 'Experience the art of luxury fashion at Ahmadcloths house. Discover our premium selection of handcrafted unstitched fabrics, pret wear, and bridal couture inspired by Maria B and Warda.',
      robots: 'index, follow',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Ahmadcloths house",
        "url": "https://shop.bytely.ai"
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
      title: 'Shop Luxury Fashion & Couture | Ahmadcloths house Premium Fashion',
      description: 'Explore our exclusive collection of unstitched fabrics, pret wear, and handcrafted couture. Each piece is designed with premium luxury fabrics.',
      robots: 'index, follow',
      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Shop Luxury Fashion & Couture - Ahmadcloths house",
        "description": "Browse our exclusive catalog of unstitched, pret, and luxury bridal couture.",
        "url": "https://shop.bytely.ai/shop"
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
      title: 'Saved Designs - Ahmadcloths house',
      description: 'Your saved favorite fashion designs and luxury pieces.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/Checkout.vue'),
    meta: {
      title: 'Secure Checkout - Ahmadcloths house',
      description: 'Complete your purchase securely through the Ahmadcloths house encrypted gateway.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'Our Fashion Heritage & Design Philosophy | Ahmadcloths house',
      description: 'Discover the story of Ahmadcloths house, where traditional craftsmanship meets modern luxury. Learn about our commitment to premium fabrics and sustainable practices.',
      robots: 'index, follow',
      schema: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Our Story - Ahmadcloths house",
        "description": "Learn about Ahmadcloths house mission to bridge artisanal craftsmanship and luxury fashion.",
        "url": "https://shop.bytely.ai/about"
      }
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue'),
    meta: {
      title: 'Contact Our Artisan Fashion House | AhmadClothes House Support',
      description: 'Get in touch with AhmadClothes House for custom cake orders, event catering, and gourmet gift inquiries. We are here to help you celebrate.',
      robots: 'index, follow'
    }
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/Privacy.vue'),
    meta: {
      title: 'Privacy Protocol - AhmadClothes House',
      description: 'AhmadClothes House privacy policy and data security commitments.',
      robots: 'index, follow'
    }
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/Terms.vue'),
    meta: {
      title: 'Terms of Service - AhmadClothes House',
      description: 'Terms and conditions for AhmadClothes House bakery operations.',
      robots: 'index, follow'
    }
  },
  {
    path: '/cookies',
    name: 'cookies',
    component: () => import('../views/Cookies.vue'),
    meta: {
      title: 'Cookie Consent - AhmadClothes House',
      description: 'Details on how AhmadClothes House utilizes digital footprints and cookies to enhance your experience.',
      robots: 'index, follow'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Fashion House Login - AhmadClothes House',
      description: 'Access your AhmadClothes House bakery account or admin console.',
      robots: 'index, follow'
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/Signup.vue'),
    meta: {
      title: 'Join the Circle - AhmadClothes House',
      description: 'Register a new account within the AhmadClothes House sweet community.',
      robots: 'index, follow'
    }
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../views/ForgotPassword.vue'),
    meta: {
      title: 'Recover Account - AhmadClothes House',
      description: 'Recover your lost password to regain access to AhmadClothes House.',
      robots: 'index, follow'
    }
  },
  {
    path: '/reset-password/:token',
    name: 'reset-password',
    component: () => import('../views/ResetPassword.vue'),
    meta: {
      title: 'Reset Password - AhmadClothes House',
      description: 'Reset your AhmadClothes House security password.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/admin/dashboard',
    name: 'admin-dashboard',
    component: () => import('../components/Admin/AdminDashboard.vue'),
    meta: { 
      requiresAdmin: true,
      title: 'Fashion House Management - AhmadClothes House',
      description: 'AhmadClothes House administrative management portal.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/dashboard',
    name: 'user-dashboard',
    component: () => import('../views/UserDashboard.vue'),
    meta: { 
      requiresAuth: true,
      title: 'My Fashion House Account - AhmadClothes House',
      description: 'Personal bakery dashboard for AhmadClothes House members.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: 'Void - AhmadClothes House',
      description: 'The requested delight could not be located.',
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
  const canonicalUrl = `https://shop.bytely.ai${to.path}`
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