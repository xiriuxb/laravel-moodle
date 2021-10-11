<template>
<div>
<navbar-component></navbar-component>
  <caratula-component></caratula-component>
    <div>
    <div class="section-odd">
        <h3 class="titulo">BIENVENIDO</h3>
        <div class="container">
            <p class="bienvenido">
                Inicia tu aprendizaje de calidad y bajo costo.
            </p>
        </div>
    </div>
    <section class="section-pair">
        <div class="card-group justify-content-center">
                <div class="card sp-card mb-3 sm-12">
                <div class="card-header bg-transparent">
                     <img src="/images/step1-1.png" alt="">
                </div>
                <div class="card-body">
                    <h5 class="card-title">1. Regístrese</h5>
                    <p class="card-text">
                        Solo necesitas un correo electrónico.
                    </p>
                </div>
                </div>
                <div class="card sp-card mb-3">
                <div class="card-header bg-transparent">
                    <img src="/images/step2.png" alt="">
                </div>
                <div class="card-body">
                    <h5 class="card-title">2. Inscríbase en un curso</h5>
                    <p class="card-text">
                        Tenemos cursos gratuitos y de pago que se adaptan a tus necesidades.
                    </p>
                </div>
                </div>
                <div class=" card sp-card mb-3">
                <div class="card-header bg-transparent">
                     <img  class="card-img-top" src="/images/step3.png" alt="">
                </div>
                <div class="card-body">
                    <h5 class="card-title">3. Comience a aprender</h5>
                    <p class="card-text">
                        Todos nuestros cursos tienen lecciones en video y recursos educativos.
                    </p>
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
                          <img src="https://png.pngtree.com/png-vector/20190504/ourlarge/pngtree-clock-icon-design-png-image_1017503.jpg" class="img-fluid icono" alt="quixote">
                      </div>
                      <div class="col">
                          ACCESO 24/7
                      </div>
                  </div>
                </div>
                <div class="col-md-5 paddedd">
                    <div class="row">
                        <div class="col-4">
                            <img src="/images/book-icon.png" class="img-fluid icono" alt="quixote">
                        </div>
                        <div class="col">
                            ESTUDIA A TU RITMO
                        </div>
                    </div>
                </div>
                <div class="col-md-5 paddedd">
                    <div class="row">
                        <div class="col-4">
                            <img src="https://png.pngtree.com/png-vector/20190504/ourlarge/pngtree-clock-icon-design-png-image_1017503.jpg" class="img-fluid icono" alt="quixote">
                        </div>
                        <div class="col">
                            ESTUDIA DONDE QUIERAS
                        </div>
                    </div>
                </div>
                <div class="col-md-5 paddedd">
                    <div class="row">
                      <div class="col-4">
                          <img src="https://png.pngtree.com/png-vector/20190504/ourlarge/pngtree-clock-icon-design-png-image_1017503.jpg" class="img-fluid icono" alt="quixote">
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
        <h3 class="titulo">INGRESA A LA UNIVERSIDAD</h3>
        <div class="container texto">
            Nuestro deseo es que estudies la carrera que deseas, prepárate con este sistema de aprendizaje interactivo, que cuenta con videos explicativos, ejercicios y más recursos.
        </div>
    </section>
    </div>
    <footer-component></footer-component>
</div>
</template>

<script>
import CaratulaComponent from '../CaratulaComponent.vue'
import CursosSmComponent from '../CursosSmComponent.vue'
import FooterComponent from '../FooterComponent.vue'
export default {
  components: { CaratulaComponent, FooterComponent, CursosSmComponent },

}
</script>

<style scoped>
.quote{
    font: 400 72px "Arizona", Helvetica, sans-serif;
    color: #6e6cf7;
    text-align: center;
}

.post-title{
    color: #5f61f4;
}
body{
    background-color: rgb(255, 255, 255);
    min-height: 100%;
}
.titulo{
    font-size: 50px;
    text-align: center;
    padding: 50px;
    color: #002e45;
}

.section-pair{
    text-align: center;
    font-size: 20px;
}

.section-odd{
    background-color: aliceblue;
    padding-bottom: 40px;
}

.sp-card{
    background-color: transparent;
    border-color: transparent;
}

@media (min-width: 544px) {  
    h1 {font-size:3rem;} /*1rem = 16px*/
  }

@media (min-width: 768px) {  
    h1 {font-size:4.5rem;} /*1rem = 16px*/
}
   
@media (min-width: 992px) { 
   h1 {font-size:4.5rem;} /*1rem = 16px*/
}

@media only screen and (max-width: 700px) {
  section.benefits{
    background-image: none !important;
    }
}
@media only screen and (min-width: 1300px) {
  section.benefits{
    background-size: 20% !important;
    }
}

  div p.bienvenido{
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 35px;
      text-align: center;
      padding-bottom: 15px;
      margin-bottom: 0px;
  }

    .img-fluid.icono{
      width: 60px;
      border-radius: 50% !important;
  }

  section.benefits{
      background-image: url(/images/smiling-beautiful-europe-book-school-education1.png);
      background-repeat: no-repeat;
      background-position: 90%;
      background-size: 25%;
  }

  .row div.paddedd{
      padding-bottom: 2rem;
      max-height: fit-content;
      font-size: 23px;
      font-weight: bold;
  }

.row div.paddedd .row{
    align-items: center;
}

.col-4{
    max-width: fit-content;
}

.uno{
    height: 200px;
    padding-bottom: 0px;
}

.dos{
    height: 200px;
    background-color: #5f61f4;
    width: 100%;
    border-radius: 50%;
    border-start-start-radius: initial;
    border-bottom-left-radius: initial;
    animation: ease-in 3ms alternate alternate unset;
}

.texto{
    padding-bottom: 40px;
    font-size: 30px;
}

.univ-back{
    background-image: url(/images/university.svg);
    background-position: bottom bottom 45px;
}

.card-header img{
    width: 100px;
}
</style>