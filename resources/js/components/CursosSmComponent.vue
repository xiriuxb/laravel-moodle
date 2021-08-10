<template>
<section class="container">
<div class="container">
  <h3 class="topico">Cursos Recomendados:</h3>
  <VueSlickCarousel v-bind="settings">
    <div v-for="comment in comments" :key="comment.id">
        <img class="card-img-top" src="/images/crs-im-test.jpg" alt="Card image cap">
      <div class="card-body container">
        <p class="card-topico"><small class="topico-muted">{{comment.topico}}</small></p>
        <a href="/">
        <h5 class="card-title">{{comment.title}}</h5>
        </a>
        {{comment.topico}}
      </div>
    </div>
  </VueSlickCarousel>
</div>

</section>

</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
//Formación
//Área de conocimiento
//Tabla Inscripción(Estudiante, Curso, )
//Tabla Cursos (IdCurso, Costo?, --Descripción, Duración, Área--)
export default {
    components: { VueSlickCarousel },
    methods:{

    },
    data:function(){
        return{
        comments:[
            {'id':1, 'title':'Matemática Básica', 'tipo':0,'topico':'Matemática'},
            {'id':2, 'title':'Matemática de Bachillerato', 'tipo':1,'topico':'Matemática'},
            {'id':3, 'title':'Principios de Programación', 'tipo':1,'topico':'Programación'},
            {'id':4, 'title':'Introducción al Internet', 'tipo':1,'topico':'Redes'},
        ],
        settings:{
            "infinite": true,
            "slidesToShow": 4,
            "slidesToScroll": 1,
            "autoplay": false,
            "initialSlide":1,
            "autoplaySpeed": 2000,
            "pauseOnFocus": true,
            "pauseOnHover": true,
            "responsive": [
              {
                "breakpoint": 1024,
                "settings": {
                "slidesToShow": 3,
                "slidesToScroll": 3,
                "infinite": true
                }
              },
              {
                "breakpoint": 770,
                "settings": {
                "slidesToShow": 2,
                "slidesToScroll": 2,
                "initialSlide": 1
                }
              },
              {
                "breakpoint": 600,
                "settings": {
                  "slidesToShow": 1,
                  "slidesToScroll": 1
                }
              }
            ]
        }
      }
    }
}        
</script>

<style>


.slick-track
{
    display: flex !important;
}
section{
  margin-top: 30px;
  margin-bottom: 30px;
}
.slick-list{
  margin-left: 10px !important;
}


.slick-arrow{
    position: absolute;
    margin-top: 0;
    cursor: pointer;
    min-width: 20px;
    height: 35px;
    z-index: 10;
    color: transparent;
    background-repeat: no-repeat;
}
.slick-arrow.slick-prev::before{
  color:rgb(71, 71, 71);
  font-size: 30px;
}
.slick-arrow.slick-next::before{
  color:rgb(61, 61, 61);
  font-size: 30px;
}
</style>