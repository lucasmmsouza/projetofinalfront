<template>
  <div class="container">
    <div class="header">
      <h1>Gestão de Autores</h1>
      <router-link to="/autores/novo" class="btn-new">Adicionar Autor</router-link>
    </div>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Ações</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="autor in autores" :key="autor.id">
        <td>{{ autor.id }}</td>
        <td>{{ autor.dadosPessoais }}</td>
        <td>
          <button @click="deleteAutor(autor.id)">Deletar</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ApiService from '../services/ApiService.js';

export default {
  name: 'AutoresView',
  data() {
    return {
      autores: []
    };
  },
  methods: {
    fetchAutores() {
      ApiService.getAutores()
          .then(response => {
            this.autores = response.data;
          })
          .catch(error => {
            console.error("Erro ao buscar autores:", error);
          });
    },
    deleteAutor(id) {
      if (confirm('Tem certeza que deseja deletar este autor?')) {
        ApiService.deleteAutor(id)
            .then(() => {
              this.fetchAutores();
            })
            .catch(error => {
              console.error("Erro ao deletar autor:", error);
            });
      }
    }
  },
  created() {
    this.fetchAutores();
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