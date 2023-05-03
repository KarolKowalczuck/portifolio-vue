<script setup>
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>

  <WelcomeItem>
    <template #icon>
        <img src="./icons/images/iconePhone.png" class="phone" alt="hobbie-phone">
    </template>
    
    <template #heading>Telefone</template>

    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis eos tenetur temporibus hic facere inventore sapiente ea voluptatum rem ad unde alias veniam, modi voluptate tempora cumque libero sit. Odio?

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
        <img src="./icons/images/iconeMail.png" class="email" alt="email">
    </template>
    <template #heading>Email</template>

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tenetur officia nihil commodi nam accusantium amet quae? Perferendis iure, facilis, corrupti voluptatem, saepe ab qui accusantium quo aut delectus porro?

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
        <img src="./icons/images/iconeAdress.png" class="adress" alt="adress">
    </template>
    
    <template #heading>Endereço</template>

    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis eos tenetur temporibus hic facere inventore sapiente ea voluptatum rem ad unde alias veniam, modi voluptate tempora cumque libero sit. Odio?

  </WelcomeItem>



</template>



<style scoped>

.phone{
    display: flex;
    width: 2rem;
    height: 2rem;
    
}

.email {
    display: flex;
    width: 2rem;
    height: 2rem;

}

.adress {
    display: flex;
    width: 2rem;
    height: 2rem;

}

</style>