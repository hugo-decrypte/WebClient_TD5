import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from './plugins/api'
import toolsPlugin from './plugins/tools'

const app = createApp(App)

app.use(router)
app.use(api, {
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  apiKey: import.meta.env.VITE_API_KEY
} as any)
app.use(toolsPlugin,{
  cutTextLength: 120,
} as any)

app.mount('#app')
