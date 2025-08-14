<template>
  <div class="container">
    <div class="header">
      <h1>Gestão de Avaliadores</h1>
      <router-link to="/avaliadores/novo" class="btn-new">Adicionar Avaliador</router-link>
    </div>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Dados Pessoais</th>
        <th>Informações Específicas</th>
        <th>Ações</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="avaliador in avaliadores" :key="avaliador.id">
        <td>{{ avaliador.id }}</td>
        <td>{{ avaliador.dadosPessoais }}</td>
        <td>{{ avaliador.infoEspecificas }}</td>
        <td>
          <button @click="deleteAvaliador(avaliador.id)">Deletar</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ApiService from '../services/ApiService.js';

export default {
  name: 'AvaliadoresView',
  data() {
    return {
      avaliadores: []
    };
  },
  methods: {
    fetchAvaliadores() {
      ApiService.getAvaliadores()
          .then(response => {
            this.avaliadores = response.data;
          })
          .catch(error => {
            console.error("Erro ao buscar avaliadores:", error);
          });
    },
    deleteAvaliador(id) {
      if (confirm('Tem certeza que deseja deletar este avaliador?')) {
        ApiService.deleteAvaliador(id)
            .then(() => {
              this.fetchAvaliadores();
            })
            .catch(error => {
              console.error("Erro ao deletar avaliador:", error);
            });
      }
    }
  },
  created() {
    this.fetchAvaliadores();
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