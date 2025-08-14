<template>
  <div class="container">
    <h1>Criar Novo Projeto</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="titulo">Título:</label>
        <input type="text" id="titulo" v-model="projeto.titulo" required>
      </div>
      <div class="form-group">
        <label for="resumo">Resumo:</label>
        <textarea id="resumo" v-model="projeto.resumo" required></textarea>
      </div>
      <div class="form-group">
        <label for="areaTematica">Área Temática:</label>
        <input type="text" id="areaTematica" v-model="projeto.areaTematica" required>
      </div>
      <div class="form-group">
        <label for="premioId">Prêmio:</label>
        <select id="premioId" v-model="projeto.premioId" required>
          <option v-for="premio in premios" :key="premio.id" :value="premio.id">
            {{ premio.nome }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="autores">Autores:</label>
        <select id="autores" v-model="projeto.autorIds" multiple required>
          <option v-for="autor in autores" :key="autor.id" :value="autor.id">
            {{ autor.dadosPessoais }}
          </option>
        </select>
      </div>
      <button type="submit">Criar Projeto</button>
    </form>
  </div>
</template>

<script>
import ApiService from '../services/ApiService.js';

export default {
  name: 'CriarProjeto',
  data() {
    return {
      projeto: {
        titulo: '',
        resumo: '',
        areaTematica: '',
        premioId: null,
        autorIds: []
      },
      autores: [],
      premios: []
    };
  },
  methods: {
    fetchAutores() {
      ApiService.getAutores().then(response => {
        this.autores = response.data;
      });
    },
    fetchPremios() {
      ApiService.getPremios().then(response => {
        this.premios = response.data;
      });
    },
    submitForm() {
      ApiService.createProjeto(this.projeto)
          .then(() => {
            this.$router.push('/'); // Redireciona para a lista de projetos
          })
          .catch(error => {
            console.error("Erro ao criar projeto:", error);
          });
    }
  },
  created() {
    this.fetchAutores();
    this.fetchPremios();
  }
}
</script>

<style scoped>
.container {
  padding: 2rem;
}
.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
}
input, textarea, select {
  width: 100%;
  padding: 0.5rem;
}
</style>