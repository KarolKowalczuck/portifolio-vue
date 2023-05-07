<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'

</script>

<template>

  <WelcomeItem>
    <template #icon>
        <img src="../components/icons/images/iconeCirco.png" class="hobbie-circo" alt="hobbie-circo">
    </template>
    
    <nav>
            <RouterLink to="/circo" class="titulo">Circo</RouterLink>
      </nav>

    <!-- <h3 class="titulo">Circo</h3> -->

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
        <img src="../components/icons/images/iconeBook.png" class="hobbie-ler" alt="hobbie-ler">
    </template>

    <nav>
            <RouterLink to="/books" class="titulo">Livros</RouterLink>
      </nav>

    <!-- <h3 class="titulo">Livros</h3> -->


  </WelcomeItem>

  <WelcomeItem class="bakery-item">
    <template #icon>
        <img src="../components/icons/images/iconeBolo.png" class="hobbie-bakery" alt="hobbie-bakery">
        <br>
        <h3 class="titulo">Confeitaria</h3>

      </template>
    
    
    <img src="../components/icons/images/bolo1.png" class="bolo-1" alt="bolo-1">

  </WelcomeItem>



</template>

<style scoped>

.hobbie-circo{
    display: flex;
    width: 2rem;
    height: 2rem;
    background-color: lightgray;
    
}

.titulo {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: rgb(233, 53, 128);
}

.hobbie-bakery {
    display: flex;
    width: 2rem;
    height: 2rem;
    background-color: lightgray;

}

.bolo-1 {
  width: 25rem;
  height: 30rem;
}

.hobbie-ler {
    display: flex;
    width: 2rem;
    height: 2rem;
    background-color: lightgray;

}

</style>