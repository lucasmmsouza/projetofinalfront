// src/router/index.js (Versão Correta)
import { createRouter, createWebHistory } from 'vue-router'
import Projetos from '../views/Projetos.vue'
import Autores from '../views/Autores.vue'
import Avaliadores from '../views/Avaliadores.vue'
import Premios from '../views/Premios.vue'
import CriarProjeto from '../views/CriarProjeto.vue'
import ProjetoDetalhes from "@/views/ProjetoDetalhes.vue";


const routes = [
    {
        path: '/',
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
        path: '/projetos/:id', // O :id é um parâmetro dinâmico
        name: 'ProjetoDetalhes',
        component: ProjetoDetalhes,
        props: true // Permite passar o ID como prop para o componente
    }
]

const router = createRouter({
    // A linha abaixo foi a única alteração necessária
    history: createWebHistory(),
    routes
})

export default router