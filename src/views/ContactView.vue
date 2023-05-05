<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
</script>

<template>

  <div class="contact">

      <WelcomeItem>
        <template #icon>
          <img src="../components/icons/images/iconePhone.png" class="phone" alt="hobbie-phone">
        </template>
    
        <template #heading>Telefone</template>

        (00)00000-0000

      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
            <img src="../components/icons/images/iconeMail.png" class="email" alt="email">
        </template>
        <template #heading>Email</template>

        karolina@mail.com

      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
            <img src="../components/icons/images/iconeAdress.png" class="adress" alt="adress">
        </template>
        
        <template #heading>Endereço</template>

        Avenida Cândido de Abreu, 526 - Centro Cívico, Curitiba - PR

      </WelcomeItem>


  </div>





</template>



<style scoped>

.phone{
    display: flex;
    width: 1.5rem;
    height: 1.5rem;
    
}

.email {
    display: flex;
    width: 1.5rem;
    height: 1.5rem;

}

.adress {
    display: flex;
    width: 2rem;
    height: 2rem;

}

</style>
