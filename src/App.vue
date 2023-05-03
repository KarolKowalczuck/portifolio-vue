<script setup>
 import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <header>
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

      <!-- <div class="wrapper">
      <HelloWorld msg="Karolina Kowalczuck" /> -->

      <div>
        <h1>Karolina Kowalczuck</h1>

        <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Sobre</RouterLink>
        <RouterLink to="/school">Currículo</RouterLink>
        <RouterLink to="/contact">Contato</RouterLink>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer>
      Meu rodapé

    </footer>
  </div>
  
</template>

<style scoped>

header {
  background: lavender;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100vw;
  height: 15vh;
  display: flex; /* trabalhar com tamanho flexivel das coisas, que se ajustam sozinhas */
  
  justify-content:space-between;
  padding: 0 2rem;   /* valores verticais e depois horizontais */
  align-items: center;

}

header nav {
  display: flex;
  justify-content: space-between;
  min-width: 30%;
  color: rgb(236, 23, 140);
}

header h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  color: rgb(0, 0, 0);
}

main {
  padding-top: 10vh;
  min-height: 120vh;
  background: lightblue;
  

}

footer {
    background: lightslategrey;

}


</style>





<!-- header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} -->

