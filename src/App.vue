<script setup>
 import { RouterLink, RouterView } from 'vue-router'
 import Botoes from './components/Botoes.vue'
 
</script>

<template>
  <div class="wrapper">

    <div class="page">
      <header>
        <img alt="photo-perfil" class="photo-perfil" src="./components/icons/images/imagem-perfil.jpg"/>
        
        <div>
          <h1>Karolina Borges Kowalczuck</h1>
          
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/sobre">Sobre mim</RouterLink>
            <RouterLink to="/about">Hobbies</RouterLink>
            <RouterLink to="/school">Currículo</RouterLink>
            </nav>
        </div>
      </header>
      
      <div class="vertical"></div>
  
      
      <main>
        <RouterView />
      </main>
    </div>
    
    <footer>
      <nav>
        <Botoes />
      </nav>
      
    </footer>
  </div>



  
</template>

<style scoped>

.wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.page {
  display: flex;
  align-items: center;
  justify-content: left;
  height: 90vh;
  width: 100vw;
  
}

header {
  line-height: 1.5;
  max-height: 100vh;

  width: 50vw;
  height: 50vh;
  align-items: center;
  display: block;
  flex-direction: column;
  justify-content:space-around;
}

.photo-perfil {
  display: block;
  margin: 0 auto 2rem;
  justify-content:left;
  align-items: left;
  border-radius: 50%;
  overflow: hidden;
  width: 250px;
  height: 250px;
  border-radius: 122px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow:  18px 18px 26px #8d8d8d,
              -18px -18px 26px #ffffff;
}

header nav {
  display: flex;
  justify-content:center;
  justify-content: space-evenly;
  width: 50vh;
  margin-left: 190px;
  color: rgb(236, 23, 140);
}

header h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  color: rgb(0, 0, 0);
  text-align: center;
}

.vertical {
  border-left: 1px solid rgb(236, 62, 143);
  height: 700px;
  margin-top: -50vh;
  margin: 2rem;
}

main {
  padding-top: 10vh;
  height: 100%;
  width: 60vh;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  
}

footer nav {
  display: flex;
  justify-content:center;
  margin-top: 1.5vh;
  color: rgb(236, 23, 140);
  background-color: transparent;
  margin-left: 0px;
}

footer {
  height: 10vh;
  width: 100vw;
  margin-left: 0px;
  background-color: transparent;
  background: rgba( 183, 70, 128, 0.1 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4.5px );
  -webkit-backdrop-filter: blur( 4.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}

</style>



