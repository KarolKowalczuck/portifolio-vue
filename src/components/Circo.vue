<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'

</script>

<template>

  <div class="circo-page">

    <WelcomeItem>
        <template #icon>
            <img src="../components/icons/images/iconeCirco.png" class="hobbie-circo" alt="hobbie-circo">
            <br>
            <h3 class="titulo">Circo</h3>

          </template>
            
          <img src="../components/icons/images/circo1.jpeg" class="circo-1" alt="circo-1">

      </WelcomeItem>
      <br>

      <div class="separacao">

      <WelcomeItem>
        <template #icon>
            <img src="../components/icons/images/iconeBook.png" class="hobbie-ler" alt="hobbie-ler">
        </template>

          <nav>
                <RouterLink to="/books" class="titulo">Livros</RouterLink>
          </nav>

      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
            <img src="../components/icons/images/iconeBolo.png" class="hobbie-bakery" alt="hobbie-bakery">
        </template>
        
          <nav>
                <RouterLink to="/bakery" class="titulo">Confeitaria</RouterLink>
          </nav>

      </WelcomeItem>
      </div>

  </div>


</template>

<style scoped>

.circo-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.hobbie-circo{
    display: flex;
    width: 2rem;
    height: 2rem;
    background-color: lightgray;
    
}

.titulo {
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 0.4rem;
  color: rgb(233, 53, 128);
}

.circo-1 {
  width: 25rem;
  height: 35rem;
}

.hobbie-bakery {
    display: flex;
    width: 2rem;
    height: 2rem;
    background-color: lightgray;

}

.hobbie-ler {
    display: flex;
    width: 2rem;
    height: 2rem;
    background-color: lightgray;
}

</style>