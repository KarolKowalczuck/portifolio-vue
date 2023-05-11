<script>
export default {
    data() {
        return {
            showInfo: {
                personal: false,
                family: false
            }
        }
    },
    methods: {
        toggleInfo(section) {
            this.showInfo[section] = !this.showInfo[section];
        }
    }
}
</script>

<template>
    <div class="about">

        <div class="title" @click="toggleInfo('personal')">
            <h2><img src="../assets/fotos/icon-32x32.png" alt="">Informações Pessoais</h2>
        </div>

        <div class="infos" v-if="showInfo.personal">
            <div class="topico">
                <img src="../assets/fotos/profile-32x32.png" alt="" />
                <p>Apelido: Karol</p>
            </div>

            <div class="topico">
                <img src="../assets/fotos/cake-32x32.png" alt="" />
                <p>Idade: 27 anos</p>
            </div>

            <div class="topico">
                <img src="../assets/fotos/favicon-32x32.png" alt="" />
                <p>Signo: Virgem</p>
            </div>

            <div class="topico2">
                <img src="../assets/fotos/compass-32x32.png" class="work" alt="" />
                <p>Profissão: Arquiteta e Urbanista | Especialista BIM</p>
            </div>

            <div class="topico2">
                <img src="../assets/fotos/vue-32x32.png" class="curso" alt="" />
                <p>Em transição de área: curso Front End Vue.js</p>
            </div>

        </div>

        <div class="title" @click="toggleInfo('family')">
            <h2><img src="../assets/fotos/family-32x32.png" alt="">Família</h2>

            <div class="infos" v-if="showInfo.family">
                <img src="../assets/fotos/familiaKarol.jpeg" class="picture" alt="" />

            </div>
        </div>
    </div>
</template>


<style scoped>
.about {
    display: flex;
    flex-direction: column;
    align-items: start;
    cursor: pointer;
    justify-content: space-between;
}

.title {
    font-weight: 500;
    color: rgb(233, 53, 128);
    margin: 2rem 0;
    cursor: pointer;
}

.title img {
    margin-right: 3rem;
}

.infos {

    padding-top: 4%;
    padding-bottom: 4%;
    display: flex;
    flex-wrap: wrap;
    height: auto;
}

.topico {
    flex-direction: row;
    padding: 2%;
    justify-content: center;
    margin-left: 3rem;
}

.topico2 {
    flex-direction: column;
    margin-top: 4%;
    margin-left: 7.9%;
    padding: 2%;
    justify-content: center;

}
</style>