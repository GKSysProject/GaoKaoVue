import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import configPlugin from './plugins/config'

const app = createApp(App)

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    if (to.name !== 'Login' && !token) {
        next({ name: 'Login '})
    } else {
        next()
    }
})

app.use(router)
app.use(configPlugin)

app.mount('#app')