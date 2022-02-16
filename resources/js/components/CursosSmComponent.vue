<template>
<section class="container" id="comments-sm">
  <h3 class="topico">Cursos Recomendados:</h3>
  <VueSlickCarousel v-bind="settings" v-if="visible">
    <div v-for="comment in comments2" :key="comment.shortname">
        <img class="card-img-top rounded" :src="comment.file" alt="Card image cap">
      <div class="card-body container">
        <p class="card-topico"><small class="topico-muted">{{comment.category}}</small></p>
        <router-link :to="{name:'curso',params:{shortname:comment.shortname}}">
          <a>
        <h5 class="card-title">{{comment.fullname}}</h5>
        </a>
        </router-link>
        <p v-html="comment.summary">
        </p>
      </div>
    </div>
  </VueSlickCarousel>
  <loading-component v-else></loading-component>
</section>

</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import LoadingComponent from '../components/LoadingComponent.vue';
export default {
  
    components: { VueSlickCarousel, LoadingComponent},
    methods:{
    },
    data:function(){
        return{
          visible:false,
        comments2:[],
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
                "slidesToShow": 2,
                "slidesToScroll": 1,
                "infinite": false
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
    created(){
      axios.get('/api/cursos-local/destacados').then(response => {
        this.comments2 = response.data.data;
        this.visible = true;
      }).catch(
        error => {
          this.visible = false;
        }
      );
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