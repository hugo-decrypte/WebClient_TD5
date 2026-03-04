import axios from "axios";
import type { Plugin } from "vue";

interface ApiOptions {
  baseUrl: string;
  apiKey: string;
}

const apiPlugin: Plugin<ApiOptions> = {
  install(app, options) {
    app.config.globalProperties.$api = axios.create({
      baseURL: options.baseUrl,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `key=${options.apiKey}`
      }
    });
  }
}

export default apiPlugin;
