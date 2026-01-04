import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.mount('#app')

// Inisialisasi AOS Global
AOS.init({
  duration: 1000,
  once: false,
  mirror: true
});
