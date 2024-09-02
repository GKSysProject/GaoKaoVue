import { reactive } from 'vue'
import axios from 'axios'

let config = reactive({
  serverUrl: ''
  // 其他需要的配置项
});

export default {
  async install(app) {
    const response = await axios.get('/config.json')
    Object.assign(config, response.data)

    app.config.globalProperties.$config = config
  },
  getConfig() {
    return config
  }
};
