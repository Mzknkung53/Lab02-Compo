// import './assets/main.css'
import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { createAppRouter } from './router'
import 'nprogress/nprogress.css'

const app = createApp(App)
import { inject } from '@vercel/analytics'
inject()
const pageLimit = [null, 1, 3, 2, 1] // *** null เป็น skip เพราะ page เริ่มที่ 1 *** //

app.use(createPinia())
app.use(createAppRouter(pageLimit))

app.mount('#app')