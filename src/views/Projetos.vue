<template>
  <div class="container">
    <h1>Lista de Projetos</h1>
    <router-link to="/projetos/novo" class="btn-new">Novo Projeto</router-link>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Título</th>
        <th>Área Temática</th>
        <th>Status</th>
        <th>Ações</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="projeto in projetos" :key="projeto.id">
        <td>{{ projeto.id }}</td>
        <td>
          <router-link :to="{ name: 'ProjetoDetalhes', params: { id: projeto.id } }">
            {{ projeto.titulo }}
          </router-link>
        </td>
        <td>{{ projeto.areaTematica }}</td>
        <td>{{ projeto.status }}</td>
        <td>
          <button @click="deleteProjeto(projeto.id)">Deletar</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// O script continua o mesmo
import ApiService from '../services/ApiService.js';

export default {
  name: 'ProjetosView',
  data() {
    return {
      projetos: []
    };
  },
  methods: {
    fetchProjetos() {
      ApiService.getProjetos()
          .then(response => {
            this.projetos = response.data;
          })
          .catch(error => {
            console.error("Erro ao buscar projetos:", error);
          });
    },
    deleteProjeto(id) {
      ApiService.deleteProjeto(id)
          .then(() => {
            this.fetchProjetos(); // Recarrega a lista
          })
          .catch(error => {
            console.error("Erro ao deletar projeto:", error);
          });
    }
  },
  created() {
    this.fetchProjetos();
  }
}
</script>

<style scoped>
/* Os estilos continuam os mesmos */
.container {
  padding: 2rem;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
.btn-new {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
</style>