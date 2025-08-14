<template>
  <div class="container" v-if="projeto">
    <div class="card">
      <h2>{{ projeto.titulo }}</h2>
      <p><strong>Resumo:</strong> {{ projeto.resumo }}</p>
      <p><strong>Área Temática:</strong> {{ projeto.areaTematica }}</p>

      <div v-if="projeto.autores && projeto.autores.length > 0" class="autores-list">
        <p><strong>Autores:</strong>
          <span v-for="(autor, index) in projeto.autores" :key="autor.id">
            {{ autor.dadosPessoais }}{{ index < projeto.autores.length - 1 ? ', ' : '' }}
          </span>
        </p>
      </div>

      <p><strong>Status:</strong> {{ projeto.status }}</p>
    </div>

    <div class="card">
      <h3>Avaliações</h3>
      <div v-if="avaliacoes.length > 0">
        <ul>
          <li v-for="avaliacao in avaliacoes" :key="avaliacao.id">
            <strong>{{ avaliacao.nomeAvaliador }}:</strong> (Nota: {{ avaliacao.nota }}) - <em>"{{ avaliacao.parecer }}"</em>
          </li>
        </ul>
      </div>
      <p v-else>Este projeto ainda não possui avaliações.</p>
    </div>

    <div class="card">
      <h3>Submeter Nova Avaliação</h3>
      <form @submit.prevent="submitAvaliacao">
        <div class="form-group">
          <label for="avaliador">Avaliador:</label>
          <select id="avaliador" v-model="novaAvaliacao.avaliadorId" required>
            <option disabled value="">Selecione um avaliador</option>
            <option v-for="avaliador in todosAvaliadores" :key="avaliador.id" :value="avaliador.id">
              {{ avaliador.dadosPessoais }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="nota">Nota (0.0 a 10.0):</label>
          <input type="number" id="nota" v-model="novaAvaliacao.nota" min="0" max="10" step="0.1" required>
        </div>
        <div class="form-group">
          <label for="parecer">Parecer:</label>
          <textarea id="parecer" v-model="novaAvaliacao.parecer" required></textarea>
        </div>
        <button type="submit">Enviar Avaliação</button>
      </form>
    </div>

  </div>
</template>

<script>
import ApiService from '../services/ApiService';

export default {
  name: 'ProjetoDetalhes',
  props: ['id'],
  data() {
    return {
      projeto: null,
      avaliacoes: [],
      todosAvaliadores: [],
      novaAvaliacao: {
        projetoId: this.id,
        avaliadorId: '',
        nota: null,
        parecer: ''
      }
    };
  },
  methods: {
    fetchData() {
      ApiService.getProjeto(this.id)
          .then(response => this.projeto = response.data)
          .catch(error => console.error("Erro ao buscar projeto:", error));

      this.fetchAvaliacoes();

      ApiService.getAvaliadores()
          .then(response => this.todosAvaliadores = response.data)
          .catch(error => console.error("Erro ao buscar avaliadores:", error));
    },
    fetchAvaliacoes() {
      ApiService.getAvaliacoesPorProjeto(this.id)
          .then(response => this.avaliacoes = response.data)
          .catch(error => console.error("Erro ao buscar avaliações:", error));
    },
    submitAvaliacao() {
      ApiService.createAvaliacao(this.novaAvaliacao)
          .then(() => {
            alert('Avaliação submetida com sucesso!');
            this.fetchAvaliacoes();
            this.novaAvaliacao.avaliadorId = '';
            this.novaAvaliacao.nota = null;
            this.novaAvaliacao.parecer = '';
          })
          .catch(error => {
            alert('Erro ao submeter avaliação: ' + (error.response?.data?.message || error.message));
          });
    }
  },
  created() {
    this.fetchData();
  }
}
</script>

<style scoped>
.container {
  max-width: 960px; /* Largura menor para melhor leitura */
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.card {
  background-color: #f9f9f9;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: left;
}
.autores-list {
  margin: 1rem 0;
}
.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
}
input, select, textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}
</style>