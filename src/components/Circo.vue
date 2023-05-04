<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'

</script>


<template>

  <WelcomeItem>
    <template #icon>
        <img src="../components/icons/images/iconeCirco.png" class="hobbie-circo" alt="hobbie-circo">
    </template>
    
    <h3 class="titulo">Circo</h3>

      <img src="../components/icons/images/circo1.jpeg" class="circo-1" alt="circo-1">

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

.circo-1 {
  width: 20rem;
  height: 30rem;
}

</style>