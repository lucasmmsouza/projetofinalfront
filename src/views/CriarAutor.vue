<template>
  <div class="container">
    <h1>Adicionar Novo Autor</h1>
    <form @submit.prevent="createAutor" class="form-create">
      <div class="form-group">
        <label for="dadosPessoais">Nome do Autor:</label>
        <input type="text" id="dadosPessoais" v-model="newAutor.dadosPessoais" placeholder="Nome completo do autor" required>
      </div>
      <button type="submit">Adicionar Autor</button>
    </form>
  </div>
</template>

<script>
import ApiService from '../services/ApiService.js';

export default {
  name: 'CriarAutor',
  data() {
    return {
      newAutor: {
        dadosPessoais: ''
      }
    };
  },
  methods: {
    createAutor() {
      ApiService.createAutor(this.newAutor)
          .then(() => {
            alert('Autor criado com sucesso!');
            this.$router.push('/autores');
          })
          .catch(error => {
            console.error("Erro ao criar autor:", error);
            alert('Falha ao criar autor.');
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