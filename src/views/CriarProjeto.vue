<template>
  <div class="container">
    <h1>Criar Novo Projeto</h1>
    <form @submit.prevent="submitForm" class="form-create">
      <div class="form-group">
        <label for="titulo">Título:</label>
        <input type="text" id="titulo" v-model="projeto.titulo" required>
      </div>
      <div class="form-group">
        <label for="resumo">Resumo:</label>
        <textarea id="resumo" v-model="projeto.resumo" rows="4" required></textarea>
      </div>
      <div class="form-group">
        <label for="areaTematica">Área Temática:</label>
        <input type="text" id="areaTematica" v-model="projeto.areaTematica" required>
      </div>
      <div class="form-group">
        <label for="premioId">Prêmio:</label>
        <select id="premioId" v-model="projeto.premioId" required>
          <option disabled :value="null">Selecione um prêmio</option>
          <option v-for="premio in premios" :key="premio.id" :value="premio.id">
            {{ premio.nome }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="autores">Autores (segure Ctrl ou Cmd para selecionar vários):</label>
        <select id="autores" v-model="projeto.autorIds" multiple required size="5">
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
            alert('Projeto criado com sucesso!');
            this.$router.push('/projetos');
          })
          .catch(error => {
            console.error("Erro ao criar projeto:", error);
            alert('Falha ao criar o projeto.');
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
  max-width: 600px;
  margin: auto;
}
.form-create {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-group {
  text-align: left;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
input, textarea, select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* Adicionado para consistência de tamanho */
}
select[multiple] {
  height: auto;
  background-color: white;
}
button {
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  align-self: flex-start;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
}
</style>