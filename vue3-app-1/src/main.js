import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '../public/bootstrap-5.0.2-dist/css/bootstrap.min.css'
import '../public/bootstrap-5.0.2-dist/js/bootstrap.bundle.min'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
