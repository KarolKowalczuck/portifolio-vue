<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'

</script>

<template>
  <div class="about">

    <WelcomeItem>
    <template #icon>
        <img src="../components/icons/images/iconeCirco.png" class="hobbie-circo" alt="hobbie-circo">
      
    </template>
      <nav>
            <RouterLink to="/circo" class="titulo">Circo</RouterLink>
      </nav>
        <br> 

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
        <img src="../components/icons/images/iconeBook.png" class="hobbie-ler" alt="hobbie-ler">
        
      </template>
      <nav>
            <RouterLink to="/books" class="titulo">Livros</RouterLink>
      </nav>
        <br>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
        <img src="../components/icons/images/iconeBolo.png" class="hobbie-bakery" alt="hobbie-bakery">
        
    </template>
      <nav>
            <RouterLink to="/bakery" class="titulo">Confeitaria</RouterLink>
      </nav>
        <br>

  </WelcomeItem>

  </div>

  



</template>



<style scoped>


.about {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: -5rem;
}

.hobbie-circo{
    display: flex;
    width: 3.5rem;
    height: 3.5rem;
    background-color: lightgray;
    
}

.titulo {
  font-size: 1.5rem;
  font-weight: 500;
  color: rgb(233, 53, 128);
}

.hobbie-bakery {
    display: flex;
    width: 2.5rem;
    height: 2.5rem;
    background-color: lightgray;

}

.hobbie-ler {
    display: flex;
    width: 2.5rem;
    height: 2.5rem;
    background-color: lightgray;
}

</style>