<script>
import { useLink } from 'vue-router'

</script>

<template>
    <div class="contatos">
        <div class='wpp'>
            <button>
                <a href="https://shre.ink/QUxn" target="_blank"><img src="../assets/fotos/wpp.png" alt=""></a>
                <!-- link alternativo para https://shre.ink/QNTH -->
            </button>
        </div>

        <div class='lkdin'>
            <button>
                <a href="https://www.linkedin.com/in/karolina-kowalczuck-434606190"><img src="../assets/fotos/linkedin.webp"
                        alt=""></a>
            </button>
        </div>

        <div class='github'>
            <button>
                <a href="https://github.com/KarolKowalczuck"><img src="../assets/fotos/github.png" alt=""></a>
            </button>
        </div>

        <div class='mail'>
            <a class="icone">
                <img src="../assets/fotos/gmail-icone.png" alt=""></a>
            <a class="email" href="mailto:karolinaborgesk@gmail.com">karolinaborgesk@gmail.com</a>
        </div>
    </div>
</template>

<style scoped>
button {
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
}

.contatos img {
    width: 50px;
    border-radius: 20px;
    box-sizing: 50px;
}


.contatos {
    position: fixed;
    display: flex;
    grid-template-columns: 100% 100% 100% 100%;
    grid-gap: 250px;
    place-content: center;
}

.mail {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 0px;
}

.mail:hover {
    background-color: rgb(255, 255, 255);
    border-color: transparent;
    border-radius: 20px;
    height: 60px;
    width: 250px;
    transition: 1s;
}

.email {
    color: rgb(175, 50, 154);
    font-size: medium;
    text-align: center;
    overflow: hidden;
    transition: 1s;
    padding-left: 4px;
}

.email:hover {
    transition: 1s;
}
</style>