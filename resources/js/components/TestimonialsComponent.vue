<template>
  <section class="container" id="commentss" v-if="testimonios.length > 0">
    <h3 class="texto">Nuestros estudiantes comentan:</h3>
    <VueSlickCarousel v-bind="settings">
      <div v-for="comment in testimonios" :key="comment.id">
        <div class="card-body container">
          <h5 class="card-title">{{ comment.texto }}</h5>
          <div class="ftr">
            <div class="author">
              <img v-if="comment.file" :src="'/images/testimonial/' + comment.file" alt="Foto Estudiante" class="avatar img-raised">
              <span>{{ comment.autor }}</span>
            </div>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </section>

</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  methods: {

  },
  data: function () {
    return {
      visible: false,
      testimonios: [],
      //settings for slick carousel
      settings: {
        "infinite": true,
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "autoplay": true,
        "initialSlide": 1,
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
  beforeMount() {
    axios.get(this.route('testimonios.visibles')).then(({data}) => {
      this.testimonios = data.testimonios;
    }).catch(() => {

    });
  },
}        
</script>

<style scoped>
#commentss {
  width: 90%;
}

::v-deep .slick-track {
  display: flex !important;
}

::v-deep .card-title {
  padding-bottom: 40px
}

::v-deep .slick-list {
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

::v-deep .slick-arrow {
  position: absolute;
  margin-top: 0;
  cursor: pointer;
  min-width: 20px;
  height: 35px;
  z-index: 10;
  color: transparent;
  background-repeat: no-repeat;
}

::v-deep .slick-arrow.slick-prev::before {
  color: rgb(71, 71, 71);
  font-size: 30px;
}

::v-deep .slick-arrow.slick-next::before {
  color: rgb(61, 61, 61);
  font-size: 30px;
}

::v-deep .card .ftr div {
  display: inline-block;
}

::v-deep .slick-slide div div .ftr {
  position: absolute;
  bottom: 25px;
  margin-top: 5px;
}

::v-deep .ftr .author .avatar {
  width: 36px;
  height: 36px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 5px;
  display: inline-flex;
}

span{
  font-weight: bold;
}
</style>