<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'

</script>

<template>

  <div class="books-page">

       <WelcomeItem>
            <template #icon>
                <img src="../components/icons/images/iconeCirco.png" class="hobbie-circo" alt="hobbie-circo">
            </template>

            <nav>
                  <RouterLink to="/circo" class="titulo">Circo</RouterLink>
            </nav>

        </WelcomeItem>

        <div class="book-img">

          <WelcomeItem>
            <template #icon>
                <img src="../components/icons/images/iconeBook.png" class="hobbie-ler" alt="hobbie-ler">
                <br>
                <h3 class="titulo">Livros</h3>
            </template>  

              <img src="../components/icons/images/book.jpeg" class="book-1" alt="book-1">

          </WelcomeItem>


        </div>

        <WelcomeItem>
          <template #icon>
              <img src="../components/icons/images/iconeBolo.png" class="hobbie-bakery" alt="hobbie-bakery">
          </template>

          <nav>
                <RouterLink to="/bakery" class="titulo">Confeitaria</RouterLink>
          </nav>
          

        </WelcomeItem>


  </div>


</template>

<style scoped>

.books-page {
  display: flex;
  flex-direction: column;
  justify-content: start;
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

.book-1 {
  width: 23rem;
  height: 25rem;
}
</style>