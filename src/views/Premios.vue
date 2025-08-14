<template>
  <div class="container">
    <div class="header">
      <h1>Gestão de Prêmios</h1>
      <router-link to="/premios/novo" class="btn-new">Adicionar Prêmio</router-link>
    </div>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Descrição</th>
        <th>Ano</th>
        <th>Ações</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="premio in premios" :key="premio.id">
        <td>{{ premio.id }}</td>
        <td>{{ premio.nome }}</td>
        <td>{{ premio.descricao }}</td>
        <td>{{ premio.anoEdicao }}</td>
        <td>
          <button @click="deletePremio(premio.id)">Deletar</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ApiService from '../services/ApiService.js';

export default {
  name: 'PremiosView',
  data() {
    return {
      premios: []
    };
  },
  methods: {
    fetchPremios() {
      ApiService.getPremios()
          .then(response => {
            this.premios = response.data;
          })
          .catch(error => {
            console.error("Erro ao buscar prêmios:", error);
          });
    },
    deletePremio(id) {
      if (confirm('Tem certeza que deseja deletar este prêmio?')) {
        ApiService.deletePremio(id)
            .then(() => {
              this.fetchPremios();
            })
            .catch(error => {
              console.error("Erro ao deletar prêmio:", error);
            });
      }
    }
  },
  created() {
    this.fetchPremios();
  }
}
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}
.btn-new {
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
button {
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>