<template>
<section class="container">
<div class="container">
  <h3 class="text">Nuestros estudiantes comentan:</h3>
  <VueSlickCarousel v-bind="settings">
    <div v-for="comment in comments" :key="comment.id">
      <div class="card-body container">
        <h5 class="card-title">{{comment.autor}}</h5>
        {{comment.texto }}
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
        comments:[],
        settings:{
            "infinite": true,
            "slidesToShow": 3,
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
    },
    mounted(){
      axios.get('api/visibleComments').then((response) => {
        this.comments = response.data.data;
        console.log(response);
      }).catch((err) => {
        
      }); 
    },
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
div.slick-slide {
  height: 100%;
  margin: 5px;
    display: block;
    padding: 5px;
    height: inherit !important;
    position: relative;
    background-color: rgb(255, 255, 255);
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
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