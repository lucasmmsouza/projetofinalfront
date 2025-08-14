<template>
  <div class="container">
    <h1>Gestão de Avaliadores</h1>
    <form @submit.prevent="createAvaliador" class="form-create">
      <input type="text" v-model="newAvaliador.dadosPessoais" placeholder="Dados pessoais do avaliador" required>
      <input type="text" v-model="newAvaliador.infoEspecificas" placeholder="Informações específicas" required>
      <button type="submit">Adicionar Avaliador</button>
    </form>
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
      avaliadores: [],
      newAvaliador: {
        dadosPessoais: '',
        infoEspecificas: ''
      }
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
    createAvaliador() {
      ApiService.createAvaliador(this.newAvaliador)
          .then(() => {
            this.newAvaliador.dadosPessoais = '';
            this.newAvaliador.infoEspecificas = '';
            this.fetchAvaliadores();
          })
          .catch(error => {
            console.error("Erro ao criar avaliador:", error);
          });
    },
    deleteAvaliador(id) {
      ApiService.deleteAvaliador(id)
          .then(() => {
            this.fetchAvaliadores();
          })
          .catch(error => {
            console.error("Erro ao deletar avaliador:", error);
          });
    }
  },
  created() {
    this.fetchAvaliadores();
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
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
}
.form-create input {
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
  align-self: flex-start;
}
</style>