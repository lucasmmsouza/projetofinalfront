<template>
  <div class="container">
    <h1>Adicionar Novo Avaliador</h1>
    <form @submit.prevent="createAvaliador" class="form-create">
      <div class="form-group">
        <label for="dadosPessoais">Dados Pessoais:</label>
        <input type="text" id="dadosPessoais" v-model="newAvaliador.dadosPessoais" placeholder="Nome, email, etc." required>
      </div>
      <div class="form-group">
        <label for="infoEspecificas">Informações Específicas:</label>
        <input type="text" id="infoEspecificas" v-model="newAvaliador.infoEspecificas" placeholder="Área de especialidade, afiliação, etc." required>
      </div>
      <button type="submit">Adicionar Avaliador</button>
    </form>
  </div>
</template>

<script>
import ApiService from '../services/ApiService.js';

export default {
  name: 'CriarAvaliador',
  data() {
    return {
      newAvaliador: {
        dadosPessoais: '',
        infoEspecificas: ''
      }
    };
  },
  methods: {
    createAvaliador() {
      ApiService.createAvaliador(this.newAvaliador)
          .then(() => {
            alert('Avaliador criado com sucesso!');
            this.$router.push('/avaliadores');
          })
          .catch(error => {
            console.error("Erro ao criar avaliador:", error);
            alert('Falha ao criar avaliador.');
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