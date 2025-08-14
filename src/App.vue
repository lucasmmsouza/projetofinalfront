<template>
  <div id="app">
    <nav>
      <router-link to="/">Início</router-link> |
      <router-link to="/projetos">Projetos</router-link> |
      <router-link to="/autores">Autores</router-link> |
      <router-link to="/avaliadores">Avaliadores</router-link> |
      <router-link to="/premios">Prêmios</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 15px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
  border-bottom: 2px solid #42b983;
}
</style>