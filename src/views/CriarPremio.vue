<template>
  <div class="container">
    <h1>Adicionar Novo Prêmio</h1>
    <form @submit.prevent="createPremio" class="form-create">
      <div class="form-group">
        <label for="nome">Nome do Prêmio:</label>
        <input type="text" id="nome" v-model="newPremio.nome" required>
      </div>
      <div class="form-group">
        <label for="descricao">Descrição:</label>
        <input type="text" id="descricao" v-model="newPremio.descricao" required>
      </div>
      <div class="form-group">
        <label for="anoEdicao">Ano da Edição:</label>
        <input type="number" id="anoEdicao" v-model="newPremio.anoEdicao" required>
      </div>
      <button type="submit">Adicionar Prêmio</button>
    </form>
  </div>
</template>

<script>
import ApiService from '../services/ApiService.js';

export default {
  name: 'CriarPremio',
  data() {
    return {
      newPremio: {
        nome: '',
        descricao: '',
        anoEdicao: new Date().getFullYear()
      }
    };
  },
  methods: {
    createPremio() {
      ApiService.createPremio(this.newPremio)
          .then(() => {
            alert('Prêmio criado com sucesso!');
            this.$router.push('/premios');
          })
          .catch(error => {
            console.error("Erro ao criar prêmio:", error);
            alert('Falha ao criar prêmio.');
          });
    }
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
}
input {
  width: 100%;
  padding: 0.5rem;
}
button {
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  align-self: flex-start;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>