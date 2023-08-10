

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarIconSet from 'quasar/icon-set/fontawesome-v6'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
const app = createApp(App)

app.use(router)
app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    iconSet: quasarIconSet,
  })
app.mount('#app')
