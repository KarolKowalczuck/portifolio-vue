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
            <a href="mailto:karolinaborgesk@gmail.com">
                <button>
                    <img src="../assets/fotos/gmail-icone.png" alt="" /><span class="email">karolinaborgesk@gmail.com</span>
                </button>
            </a>
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

.mail button {
    display: flex;
    align-items: center;
}

.mail:hover {
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
    border-color: transparent;
    height: 54px;
    width: 240px;
    transition: 1s;
}

.email {
    color: rgb(236, 23, 140);
    font-size: small;
    text-align: center;
    transition: 1s;
    padding-left: 4px;
    height: 1.2rem;
    width: 0px;
    overflow: hidden;
}

.mail:hover .email {
    display: flex;
    width: 217px;
    align-content: center;
}
</style>