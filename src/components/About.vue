<script setup>
import WelcomeItem from './WelcomeItem.vue'

</script>

<template>
  <WelcomeItem>
    <template #heading>Hobbies</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
        <img src="./icons/images/iconeCirco.png" class="hobbie-circo" alt="hobbie-circo">
    </template>
    
    <template #heading>Circo</template>

    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis eos tenetur temporibus hic facere inventore sapiente ea voluptatum rem ad unde alias veniam, modi voluptate tempora cumque libero sit. Odio?

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
        <img src="./icons/images/iconeBook.png" class="hobbie-ler" alt="hobbie-ler">
    </template>
    <template #heading>Livros</template>

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tenetur officia nihil commodi nam accusantium amet quae? Perferendis iure, facilis, corrupti voluptatem, saepe ab qui accusantium quo aut delectus porro?

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
        <img src="./icons/images/iconeBolo.png" class="hobbie-bakery" alt="hobbie-bakery">
    </template>
    
    <template #heading>Confeitaria</template>

    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis eos tenetur temporibus hic facere inventore sapiente ea voluptatum rem ad unde alias veniam, modi voluptate tempora cumque libero sit. Odio?

  </WelcomeItem>



</template>



<style scoped>

.hobbie-circo{
    display: flex;
    width: 2rem;
    height: 2rem;
    
}

.hobbie-bakery {
    display: flex;
    width: 2rem;
    height: 2rem;

}

.hobbie-ler {
    display: flex;
    width: 2rem;
    height: 2rem;

}

</style>