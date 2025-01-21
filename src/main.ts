import './assets/styles.css'

import { createApp } from 'vue'

import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import i18n from './langs'
import router from './router'

const app = createApp(App)

app.use(MotionPlugin)
app.use(router)
app.use(i18n)

app.mount('#app')
