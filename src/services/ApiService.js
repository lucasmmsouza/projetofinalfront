// src/services/ApiService.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api/v1', // A URL base da sua API
    headers: {
        'Content-Type': 'application/json'
    }
});

export default {
    // Endpoints de Projetos
    getProjetos() {
        return apiClient.get('/projetos');
    },
    getProjeto(id) {
        return apiClient.get(`/projetos/${id}`);
    },
    createProjeto(data) {
        return apiClient.post('/projetos', data);
    },
    updateProjeto(id, data) {
        return apiClient.put(`/projetos/${id}`, data);
    },
    deleteProjeto(id) {
        return apiClient.delete(`/projetos/${id}`);
    },
    getProjetosNaoAvaliados() {
        return apiClient.get('/projetos/nao-avaliados');
    },
    getProjetosVencedores() {
        return apiClient.get('/projetos/vencedores');
    },

    // Endpoints de Autores
    getAutores() {
        return apiClient.get('/autores');
    },
    createAutor(data) {
        return apiClient.post('/autores', data);
    },
    deleteAutor(id) {
        return apiClient.delete(`/autores/${id}`);
    },

    // Endpoints de Avaliadores
    getAvaliadores() {
        return apiClient.get('/avaliadores');
    },
    createAvaliador(data) {
        return apiClient.post('/avaliadores', data);
    },
    deleteAvaliador(id) {
        return apiClient.delete(`/avaliadores/${id}`);
    },


    // Endpoints de Prêmios
    getPremios() {
        return apiClient.get('/premios');
    },
    createPremio(data) {
        return apiClient.post('/premios', data);
    },
    updatePremio(id, data) {
        return apiClient.put(`/premios/${id}`, data);
    },
    deletePremio(id) {
        return apiClient.delete(`/premios/${id}`);
    },

    // Endpoints de Avaliações
    createAvaliacao(data) {
        return apiClient.post('/avaliacoes', data);
    },
    getAvaliacoesPorProjeto(projetoId) {
        return apiClient.get(`/avaliacoes/projeto/${projetoId}`);
    }
};