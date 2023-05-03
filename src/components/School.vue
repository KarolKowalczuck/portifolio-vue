<script setup>
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>

  <WelcomeItem>
       
    <template #heading>Escolaridade</template>
    <ul>
        <li>Colégio Nossa Senhora Medianeira</li>
        <li>Colégio Positivo</li>
        <li>PUCPR - Pontificia Universidade Católica</li>
        <li>IPOG - Pós Graduação em BIM</li>
        <li>Centro Europeu - Chef Patissier</li>
    </ul>
    

  </WelcomeItem>

  <WelcomeItem>
  
    <template #heading>Experiências Profissionais</template>

    <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Aut tenetur officia nihil commodi nam accusantium amet quae? </li>
        <li>Perferendis iure, facilis, corrupti voluptatem, saepe ab qui accusantium quo aut delectus porro?</li>
    </ul>

    <h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis eos tenetur temporibus hic facere inventore sapiente ea voluptatum rem ad unde alias veniam, modi voluptate tempora cumque libero sit. Odio?
    </h3>
  </WelcomeItem>



</template>

<style scoped>
li {
    color: rgb(49, 48, 48);
    padding: 0.5rem;
    margin-left: 2rem;
}

ul {
    margin-top: 1rem;
}

h3 {
    margin-top: 1rem;
    color: rgb(49, 48, 48);
}


</style>

