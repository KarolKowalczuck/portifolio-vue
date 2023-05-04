<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'

</script>

<template>

    <WelcomeItem>
      <template #icon>
          <img src="../components/icons/images/iconeBook.png" class="hobbie-ler" alt="hobbie-ler">
      </template>
  
      <h3 class="titulo">Livros</h3>
  
        <img src="../components/icons/images/book.jpeg" class="book-1" alt="book-1">
  
  
    </WelcomeItem>
</template>
  

<style scoped>

.titulo {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: rgb(233, 53, 128);
}
.hobbie-ler {
    display: flex;
    width: 2rem;
    height: 2rem;
    background-color: lightgray;
}
.book-1 {
  width: 23rem;
  height: 25rem;
}

</style>