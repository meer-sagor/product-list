import VueAwesomePaginate from "vue-awesome-paginate";


import './assets/main.css'
import "vue-awesome-paginate/dist/style.css";

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.use(VueAwesomePaginate)
app.mount('#app')
