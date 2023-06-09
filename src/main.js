import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//icon
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSun,
  faMoon,
  faAngleDown,
  faGlobe,
  faEye,
  faEyeSlash
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSun, faMoon, faAngleDown, faGlobe, faEye, faEyeSlash)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
