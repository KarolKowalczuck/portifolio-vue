<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
</script>

<template>

  <div class="school">
    <WelcomeItem>
      
      <h2 class="titulo">Formações</h2>

      <ul>
          <li>Colégio Nossa Senhor Medianeira</li>
          <li>PUCPR - Arquitetura e Urbanismo</li>
          <li>IPOG - Master BIM: Ferramentas de Gestão e Projetos</li>
          <li>Centro Europeu - Chef Patissier</li>
          <li>Snowman Academy</li>
      </ul>

    </WelcomeItem>  

    <WelcomeItem>
      
        <h2 class="titulo">Experiências Profissionais</h2>

        <ul>
            <li>Área Aquitetura e Interiores</li>
            <li>Loyola Arquitetos</li>
            <li>Studio Graphibox</li>
            <li>Arquibusiness Arqiutetura</li>
        </ul>

      </WelcomeItem>

  </div>


</template>

<style scoped>

.titulo {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: rgb(233, 53, 128);  
}

li {
    color: rgb(49, 48, 48);
    padding: 0.5rem;
}

ul {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
}

h3 {
    margin-top: 1rem;
    color: rgb(49, 48, 48);
}


</style>
