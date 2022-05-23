<template>
<section class="container" id="commentss">
  <h3 class="text">Nuestros estudiantes comentan:</h3>
  <VueSlickCarousel v-bind="settings" v-if="visible">
    <div v-for="comment in comments" :key="comment.id">
      <div class="card-body container">
        <h5 class="card-title">{{comment.texto}}</h5>
        <div class="ftr">
          <div class="author">
            <img src="http://adamthemes.com/demo/code/cards/images/avatar3.png" alt="" class="avatar img-raised">
            <span>{{comment.autor}}</span>
          </div>
        </div>
      </div>
    </div>
  </VueSlickCarousel>
  <loading-component v-else></loading-component>
</section>

</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  
  import LoadingComponent from '../components/LoadingComponent.vue'
//Formación
//Área de conocimiento
//Tabla Inscripción(Estudiante, Curso, )
//Tabla Cursos (IdCurso, Costo?, --Descripción, Duración, Área--)
export default {
    components: { VueSlickCarousel, LoadingComponent },
    methods:{

    },
    data:function(){
        return{
          visible:false,
        comments:[],
        //settings for slick carousel
        settings:{
            "infinite": true,
            "slidesToShow": 3,
            "slidesToScroll": 1,
            "autoplay": true,
            "initialSlide":1,
            "autoplaySpeed": 6000,
            "pauseOnFocus": true,
            "pauseOnHover": true,
            "responsive": [
              {
                "breakpoint": 1024,
                "settings": {
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "infinite": false
                }
              },
              {
                "breakpoint": 770,
                "settings": {
                "slidesToShow": 2,
                "slidesToScroll": 1,
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
    beforeMount(){
      axios.get('api/visibleComments').then((response) => {
        this.comments = response.data.data;
        this.visible = true;
      }).catch((err)=>{
        
      });
    },
}        
</script>

<style scoped>
#commentss{
  width: 90%;
}

::v-deep .slick-track
{
    display: flex !important;
}
::v-deep .slick-list{
  margin-left: 10px !important;
}
::v-deep div.slick-slide {
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
    border: 1px solid #002e45;
    border-radius: .25rem;
}

::v-deep .slick-arrow{
    position: absolute;
    margin-top: 0;
    cursor: pointer;
    min-width: 20px;
    height: 35px;
    z-index: 10;
    color: transparent;
    background-repeat: no-repeat;
}
::v-deep .slick-arrow.slick-prev::before{
  color:rgb(71, 71, 71);
  font-size: 30px;
}
::v-deep .slick-arrow.slick-next::before{
  color:rgb(61, 61, 61);
  font-size: 30px;
}
::v-deep  .card .ftr div {
    display: inline-block;
}
::v-deep  .slick-slide div div .ftr {
    margin-top: 5px;
}

::v-deep  .ftr .author .avatar {
    width: 36px;
    height: 36px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 5px;
    display: inline-flex;
}
</style>