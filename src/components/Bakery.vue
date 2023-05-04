<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'

</script>

<template>

  <WelcomeItem>
    <template #icon>
        <img src="../components/icons/images/iconeBolo.png" class="hobbie-bakery" alt="hobbie-bakery">
    </template>
    
    <h3 class="titulo">Confeitaria</h3>

    <img src="../components/icons/images/bolo1.png" class="bolo-1" alt="bolo-1">

  </WelcomeItem>



</template>



<style scoped>
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

</style>