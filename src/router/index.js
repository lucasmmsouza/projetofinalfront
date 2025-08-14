// src/router/index.js (Versão Atualizada)
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' // Importe a nova Home
import Projetos from '../views/Projetos.vue'
import Autores from '../views/Autores.vue'
import Avaliadores from '../views/Avaliadores.vue'
import Premios from '../views/Premios.vue'
import CriarProjeto from '../views/CriarProjeto.vue'
import ProjetoDetalhes from "@/views/ProjetoDetalhes.vue"
import CriarAutor from '../views/CriarAutor.vue' // Nova importação
import CriarAvaliador from '../views/CriarAvaliador.vue' // Nova importação
import CriarPremio from '../views/CriarPremio.vue' // Nova importação


const routes = [
    {
        path: '/',
        name: 'Home', // Rota principal agora é a Home
        component: Home
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: Projetos
    },
    {
        path: '/autores',
        name: 'Autores',
        component: Autores
    },
    {
        path: '/avaliadores',
        name: 'Avaliadores',
        component: Avaliadores
    },
    {
        path: '/premios',
        name: 'Premios',
        component: Premios
    },
    {
        path: '/projetos/novo',
        name: 'CriarProjeto',
        component: CriarProjeto
    },
    {
        path: '/projetos/:id',
        name: 'ProjetoDetalhes',
        component: ProjetoDetalhes,
        props: true
    },
    // Novas rotas de criação
    {
        path: '/autores/novo',
        name: 'CriarAutor',
        component: CriarAutor
    },
    {
        path: '/avaliadores/novo',
        name: 'CriarAvaliador',
        component: CriarAvaliador
    },
    {
        path: '/premios/novo',
        name: 'CriarPremio',
        component: CriarPremio
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router