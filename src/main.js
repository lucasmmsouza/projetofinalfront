// src/main.js (Versão Correta)
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 1. Importe o router

createApp(App).use(router).mount('#app') // 2. Adicione .use(router) aqui