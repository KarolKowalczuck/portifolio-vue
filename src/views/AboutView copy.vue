<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'

</script>


<template>

      <link rel="stylesheet" href="../components/icons/IconCommunity.vue">

      <!-- Add font awesome icons to buttons  -->
      <p>Icon buttons:</p>
      <button class="btn"><i class="hobbie-circo"></i></button>
      <button class="btn"><i class="fa fa-bars"></i></button>
      <button class="btn"><i class="fa fa-trash"></i></button>
      <button class="btn"><i class="fa fa-close"></i></button>
      <button class="btn"><i class="fa fa-folder"></i></button>




<!-- 
    <nav>
            <RouterLink to="/circo">Circo</RouterLink>
            <RouterLink to="/books">Livros</RouterLink>
            <RouterLink to="/bakery">Confeitaria</RouterLink>
    </nav> -->


  <!-- <WelcomeItem>
    <template #icon>
        <img src="../components/icons/images/iconeCirco.png" class="hobbie-circo" alt="hobbie-circo">
    </template>
    
    <h3 class="titulo">Circo</h3>

      <img src="../components/icons/images/circo1.jpeg" class="circo-1" alt="circo-1">

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
        <img src="../components/icons/images/iconeBook.png" class="hobbie-ler" alt="hobbie-ler">
    </template>

    <h3 class="titulo">Livros</h3>

      <img src="../components/icons/images/book.jpeg" class="book-1" alt="book-1">


  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
        <img src="../components/icons/images/iconeBolo.png" class="hobbie-bakery" alt="hobbie-bakery">
    </template>
    
    <h3 class="titulo">Confeitaria</h3>

    <img src="../components/icons/images/bolo1.png" class="bolo-1" alt="bolo-1">

  </WelcomeItem> -->



</template>

<style scoped>

/* Style buttons */
.btn {
  background-color: transparent;
  border: none; /* Remove borders */
  color: transparent; /* White text */
  padding: 12px 16px; /* Some padding */
  font-size: 16px; /* Set a font size */
  cursor: pointer; /* Mouse pointer on hover */
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
  margin-bottom: 0.4rem;
  color: rgb(233, 53, 128);
}

.circo-1 {
  width: 20rem;
  height: 30rem;
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

.book-1 {
  width: 23rem;
  height: 25rem;
}

</style>