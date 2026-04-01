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
  faTruck, faTruckFast, faShirt, faLocationDot, faImage,
  faScissors, faPalette, faTags, faShop, faVest, faUserTie, faClipboardList,
  faMobileRetro, faWallet, faMoneyBill1Wave, faMoneyBillTransfer
} from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart, faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { 
  faInstagram, faFacebookF, faCcVisa, faCcMastercard, faCcApplePay, 
  faCcAmex, faApplePay, faXTwitter, faLinkedinIn, faGoogle
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
  faTruck, faTruckFast, faShirt, faLocationDot, faImage,
  faScissors, faPalette, faTags, faShop, faVest, faUserTie, faClipboardList,
  faMobileRetro, faWallet, faMoneyBill1Wave, faMoneyBillTransfer,
  farHeart, farStar,
  faInstagram, faFacebookF, faCcVisa, faCcMastercard, faCcApplePay, 
  faCcAmex, faApplePay, faXTwitter, faLinkedinIn, faGoogle
)

const app = createApp(App)
const pinia = createPinia()

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(pinia)
app.use(router)
app.use(vue3GoogleLogin, {
  clientId: '283391772045-1qu6ot0uclhcnvja81k7g8p9asjqpmus.apps.googleusercontent.com'
})

app.mount('#app')