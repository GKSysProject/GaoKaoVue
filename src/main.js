import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import configPlugin from './plugins/config'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})



app.use(router)
app.use(configPlugin)
app.use(ElementPlus)

app.mount('#app')