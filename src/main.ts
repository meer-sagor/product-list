import VueAwesomePaginate from "vue-awesome-paginate";
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import "vue-awesome-paginate/dist/style.css";

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.component('vSelect', vSelect)
app.use(VueAwesomePaginate)
app.mount('#app')
