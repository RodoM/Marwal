import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { MotionPlugin } from '@vueuse/motion'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(router).use(MotionPlugin).mount('#app')

import 'bootstrap/dist/js/bootstrap.js'