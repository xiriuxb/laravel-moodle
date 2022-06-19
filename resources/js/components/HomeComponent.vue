<template>
    <div>
        <caratula-component></caratula-component>
        <div>
            <div class="section-odd">
                <h1 class="titulo">BIENVENIDO</h1>
                <div class="container">
                    <p class="bienvenido">
                        Inicia tu aprendizaje de calidad.
                    </p>
                    <p class="section-pair">Nuestra aplicación consta de dos partes: ésta, en la cual puedes ver e inscribirte en los cursos
                        que desees y <a :href="moodleUrl+'login/index.php'">Moodle <box-icon name='link-external'></box-icon></a>, en donde accedes a los conocimientos que impartimos. </p>
                </div>
            </div>
            <section class="section-pair">
                <div class="flex flex-col sm:flex-row px-10 justify-content-center">
                    <div v-for="paso in pasos" :key="paso.titulo"
                        class="w-full md:w-1/3 border-2 my-1 sm:my-0 mx-1 rounded">
                        <div class="">
                            <div class="card-header bg-transparent self-center">
                                <img class="inline" :src="'/images/' + paso.imagen" alt="regístrese" load="lazy">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title font-bold">{{ paso.titulo }}</h5>
                                <p class="card-text">{{ paso.descripcion }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-odd benefits" id="benefits">
                <h3 class="titulo">BENEFICIOS</h3>
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 paddedd">
                            <div class="row">
                                <div class="col-4">
                                    <img src="/images/reloj.png" class="img-fluid icono" alt="acceso 24/7"
                                        loading="lazy">
                                </div>
                                <div class="col">
                                    ACCESO 24/7
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 paddedd">
                            <div class="row">
                                <div class="col-4">
                                    <img src="/images/success.png" class="img-fluid icono" alt="a tu ritmo"
                                        loading="lazy">
                                </div>
                                <div class="col">
                                    ESTUDIA A TU RITMO
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 paddedd">
                            <div class="row">
                                <div class="col-4">
                                    <img src="/images/anywhere.png" class="img-fluid icono" alt="donde quieras"
                                        loading="lazy">
                                </div>
                                <div class="col">
                                    ESTUDIA DONDE QUIERAS
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 paddedd">
                            <div class="row">
                                <div class="col-4">
                                    <img src="/images/bitmap.png" class="img-fluid icono" alt="interactiva"
                                        loading="lazy">
                                </div>
                                <div class="col">
                                    PLATAFORMA INTERACTIVA
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <cursos-sm-component></cursos-sm-component>
            </section>
            <section class="section-odd">
                <comments-component></comments-component>
            </section>
            <section class="section-pair univ-back">
                <h3 class="titulo">¿Qué contienen nuestros cursos?</h3>
                <div class="container texto">
                    Nuestro deseo es que estudies la carrera que deseas, prepárate con este sistema de aprendizaje
                    interactivo, que cuenta con videos explicativos, ejercicios y más recursos.
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import CaratulaComponent from './CaratulaComponent.vue'
import CursosSmComponent from './CursosSmComponent.vue'
import Home from './views/Home.vue';


export default {
    layout: Home,
    props: {
        message: {
            type: String,
            required: false,
            default: ''
        }
    },
    data() {
        return {
            pasos: [
                {
                    titulo: 'Regístrese',
                    descripcion: 'Solo necesitas un correo electrónico.',
                    imagen: 'step1-1.png'
                },
                {
                    titulo: 'Inscríbase en un curso',
                    descripcion: 'Tenemos cursos gratuitos y de pago que se adaptan a tus necesidades.',
                    imagen: 'step2.png'
                },
                {
                    titulo: 'Comience a aprender',
                    descripcion: 'Todos nuestros cursos tienen lecciones en video y recursos educativos.',
                    imagen: 'step3.png'
                }
            ],
        }
    },
    computed: {
        message2() {
            return this.message;
        },
        moodleUrl() {
            return this.$page.props.siteData.moodleUrl+'login/index.php';
        }
    },
    components: { CursosSmComponent, CaratulaComponent },
}
</script>

<style scoped>
body {
    background-color: rgb(255, 255, 255);
    min-height: 100%;
}

.titulo {
    font-size: 50px;
    text-align: center;
    padding: 50px;
    color: #002e45;
}

.section-pair {
    text-align: center;
    font-size: 20px;
}

.section-odd {
    background-color: rgb(255, 255, 255);
}

@media (min-width: 544px) {
    h1 {
        font-size: 3rem;
    }

    /*1rem = 16px*/
}

@media (min-width: 768px) {
    h1 {
        font-size: 4.5rem;
    }

    /*1rem = 16px*/
}

@media (min-width: 992px) {
    h1 {
        font-size: 4.5rem;
    }

    /*1rem = 16px*/
}

@media only screen and (max-width: 700px) {
    section.benefits {
        background-image: none !important;
    }
}

@media only screen and (min-width: 1300px) {
    section.benefits {
        background-size: 20% !important;
    }
}

div p.bienvenido {
    font-size: 35px;
    text-align: center;
    padding-bottom: 15px;
    margin-bottom: 0px;
}

.img-fluid.icono {
    width: 60px;
}

section.benefits {
    background-image: url(/images/smiling-beautiful-europe-book-school-education1.png);
    background-repeat: no-repeat;
    background-position: 90%;
    background-size: 25%;
}

.row div.paddedd {
    padding-bottom: 2rem;
    max-height: fit-content;
    font-size: 23px;
    font-weight: bold;
}

.row div.paddedd .row {
    align-items: center;
}

.col-4 {
    max-width: fit-content;
}

.uno {
    height: 200px;
    padding-bottom: 0px;
}

.dos {
    height: 200px;
    background-color: #5f61f4;
    width: 100%;
    border-radius: 50%;
    border-start-start-radius: initial;
    border-bottom-left-radius: initial;
    animation: ease-in 3ms alternate alternate unset;
}

.texto {
    padding-bottom: 40px;
    font-size: 30px;
}

.univ-back {
    background-image: url(/images/university.svg);
    background-position: bottom bottom 45px;
}

.card-header img {
    width: 100px;
}

.container p a {
    color: #002e45;
    text-decoration: none;
}

.container p a:hover {
    color: #5f61f4;
    fill: #5f61f4;
}

.container p a box-icon{
    vertical-align: bottom;
}
</style>