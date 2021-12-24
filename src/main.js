import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import Chart3 from 'vue-chart-3'

const app = createApp()

app.use(Chart3,VueAxios,axios);
createApp(App).mount('#app')
