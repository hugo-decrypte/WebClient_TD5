import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import toolsPlugin from './plugins/tools'

const app = createApp(App)

app.use(router)
app.use(toolsPlugin,{
  cutTextLength: 120,
})

app.mount('#app')
