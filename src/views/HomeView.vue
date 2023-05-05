<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
</script>

<template>
  <WelcomeItem>

    <h1>Bem Vindo!</h1>
    <br>
    <p>Esta é a minha primeira pagina feita em Vue!</p>
    <p>Aqui você encontra algumas informações sobre mim, como minhas formações, meus hobbies e meu contato</p>
    <br>
    <p>Muito Obrigada!</p>
        
  </WelcomeItem>

  
</template>

<style scoped>
  h1 {
    color: rgb(236, 62, 143);
    font: bold;
    font-size: 40px;
    font: sans-serif;
    
  }

  p {
    color: rgb(60, 60, 60);
    line-height: 1.5;
    font-size: 18px;
    font: sans-serif;
  }

</style>
