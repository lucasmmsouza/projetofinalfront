<template>
  <div class="container">
    <h1>Gestão de Prêmios</h1>
    <form @submit.prevent="createPremio" class="form-create">
      <input type="text" v-model="newPremio.nome" placeholder="Nome do prêmio" required>
      <input type="text" v-model="newPremio.descricao" placeholder="Descrição" required>
      <input type="number" v-model="newPremio.anoEdicao" placeholder="Ano da Edição" required>
      <button type="submit">Adicionar Prêmio</button>
    </form>
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
      premios: [],
      newPremio: {
        nome: '',
        descricao: '',
        anoEdicao: new Date().getFullYear()
      }
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
    createPremio() {
      ApiService.createPremio(this.newPremio)
          .then(() => {
            this.newPremio.nome = '';
            this.newPremio.descricao = '';
            this.newPremio.anoEdicao = new Date().getFullYear();
            this.fetchPremios();
          })
          .catch(error => {
            console.error("Erro ao criar prêmio:", error);
          });
    },
    deletePremio(id) {
      ApiService.deletePremio(id)
          .then(() => {
            this.fetchPremios();
          })
          .catch(error => {
            console.error("Erro ao deletar prêmio:", error);
          });
    }
  },
  created() {
    this.fetchPremios();
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