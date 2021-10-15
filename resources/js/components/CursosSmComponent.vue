<template>
<section class="container" id="comments-sm">
  <h3 class="topico">Cursos Recomendados:</h3>
  <VueSlickCarousel v-bind="settings">
    <div v-for="comment in comments" :key="comment.id">
        <img class="card-img-top rounded" src="/images/crs-im-test.jpg" alt="Card image cap">
      <div class="card-body container">
        <p class="card-topico"><small class="topico-muted">{{comment.topico}}</small></p>
        <a href="/">
        <h5 class="card-title">{{comment.title}}</h5>
        </a>
        {{comment.topico}}
      </div>
    </div>
  </VueSlickCarousel>

</section>

</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  
    components: { VueSlickCarousel},
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
        comments2:[

        ],
        //slick carousel settings
        settings:{
            "infinite": true,
            "slidesToShow": 4,
            "slidesToScroll": 1,
            "autoplay": false,
            "initialSlide":1,
            "autoplaySpeed": 2000,
            "pauseOnFocus": true,
            "pauseOnHover": true,
            "lazyLoad":"progressive",
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
        },
      }
    },
}        

</script>

<style scoped>
#comments-sm{
  width: 91%;
}
::v-deep .slick-track
{
    display: flex !important;
}
section{
  margin-top: 30px;
  margin-bottom: 30px;
}
::v-deep .slick-list{
  margin-left: 10px !important;
}
::v-deep  div.slick-slide {
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

::v-deep  .slick-slide {
  flex: 0 50%;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(136, 144, 195, 0.2),
    0 5px 15px 0 rgba(37, 44, 97, 0.15);
  border-radius: 10px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  min-height: 265px;
  transition: 0.7s;
}

::v-deep  .slick-slide div::before{
  content: "";
  position: absolute;
  background: rgb(255 137 36 / 20%);
  width: 200px;
  height: 450px;
  z-index: -1;
  transform: rotate(42deg);
  right: -56px;
  border-radius: 35px;
  transition: 0.7s;
}

::v-deep  .slick-slide:hover{

}

::v-deep  .slick-slide div:first-child:hover:before{
  transform: rotate(42deg);
  top: -56px;
  right: -56px;
  transition: 0.7s;
}
.slick-slide h5{
  color: #002e45;
  text-decoration-color: #002e45;
}
</style>