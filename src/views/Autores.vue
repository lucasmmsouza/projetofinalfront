<template>
  <div class="container">
    <h1>Gestão de Autores</h1>
    <form @submit.prevent="createAutor" class="form-create">
      <input type="text" v-model="newAutor.dadosPessoais" placeholder="Nome do novo autor" required>
      <button type="submit">Adicionar Autor</button>
    </form>
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
      autores: [],
      newAutor: {
        dadosPessoais: ''
      }
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
    createAutor() {
      ApiService.createAutor(this.newAutor)
          .then(() => {
            this.newAutor.dadosPessoais = ''; // Limpa o campo
            this.fetchAutores(); // Recarrega a lista
          })
          .catch(error => {
            console.error("Erro ao criar autor:", error);
          });
    },
    deleteAutor(id) {
      ApiService.deleteAutor(id)
          .then(() => {
            this.fetchAutores(); // Recarrega a lista
          })
          .catch(error => {
            console.error("Erro ao deletar autor:", error);
          });
    }
  },
  created() {
    this.fetchAutores();
  }
}
</script>

<style scoped>
.container {
  padding: 2rem;
}
.form-create {
  margin-bottom: 1.5rem;
  display: flex;
  gap: 10px;
}
.form-create input {
  flex-grow: 1;
  padding: 0.5rem;
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
}
</style>