<template>
  <div class="home-container">
    <header class="hero">
      <h1>Bem-vindo ao Sistema de Gestão de Projetos</h1>
      <p>Gerencie seus projetos, autores, avaliadores e prêmios de forma fácil e centralizada.</p>
    </header>

    <section class="features">
      <div class="feature-card" @click="$router.push('/projetos')">
        <i class="icon">🚀</i>
        <h2>Projetos</h2>
        <p>Visualize e gerencie todos os projetos submetidos.</p>
      </div>
      <div class="feature-card" @click="$router.push('/autores')">
        <i class="icon">✍️</i>
        <h2>Autores</h2>
        <p>Adicione e administre os autores dos projetos.</p>
      </div>
      <div class="feature-card" @click="$router.push('/avaliadores')">
        <i class="icon">👨‍🏫</i>
        <h2>Avaliadores</h2>
        <p>Gerencie a equipe de avaliadores e suas informações.</p>
      </div>
      <div class="feature-card" @click="$router.push('/premios')">
        <i class="icon">🏆</i>
        <h2>Prêmios</h2>
        <p>Organize as edições e descrições dos prêmios.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
.hero {
  margin-bottom: 3rem;
}
.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}
.hero p {
  font-size: 1.2rem;
  color: #666;
}
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
.feature-card {
  background-color: #f9f9f9;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  padding: 2rem;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}
.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
}
</style>