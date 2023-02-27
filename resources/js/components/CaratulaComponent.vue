<template>
  <section>
    <div class="img-background">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div class="caratula" :class="{ caratula_logged : $page.props.auth.user}">
        <div class="caratula-im lg:w-1/3" :class="$page.props.auth.user ? 'caratula-im-logged' : 'caratula-im'">
          <img :src="$page.props.auth.user ? '/images/caratula_im_logged.png' : '/images/caratula_im.png'" alt="Imagen" rel="preload">
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 md:px-3 relative flex flex-col items-center"
          :class="$page.props.auth.user ? 'info-logged' : ''">
          <h1 class="font-bold text-orange-500 md:text-5xl text-3xl xl:self-start ">{{ titulo1 }}</h1>
          <p class="self-center md:self-start text-2xl font-bold text-orange-400">
            Busca el curso de tu interés
          </p>
          <inertia-link class="caratula-button sm:mb-0 hover:bg-[#002e45] md:self-start sm:w-auto" as="button"
            :href="route('cursos', { categoria: 'all' })">
            Lista de cursos
            <span>
              <box-icon class="block" name='right-arrow-alt' color='#fff'></box-icon>
            </span>
          </inertia-link>
          <p class="self-center md:self-start text-2xl font-bold text-orange-400">Y accede al contenido del curso</p>
          <a class="caratula-button sm:mb-0 hover:bg-[#002e45] sm:w-auto md:self-start"
            :href="moodleUrl + 'login/index.php'">
            Aula Virtual
            <span>
              <box-icon name='link-external'></box-icon>
            </span>
          </a>
          <p class="self-center md:self-start">
            Accedes con las mismas credenciales con las que te registras en este sitio.
          </p>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 filter brightness-100" v-if="!$page.props.auth.user">
          <registro-component></registro-component>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RegistroComponent from "./RegistroComponent.vue";
import SearchComponent from "./search/SearchComponent.vue";

export default {
  name: "CaratulaComponent",
  components: { RegistroComponent, SearchComponent },
  data() {
    return {
      titulo1: "Aprende con nosotros",
    };
  },
  computed: {
    moodleUrl() {
      return this.$page.props.siteData.moodleUrl
    }
  }
};
</script>

<style scoped>
.caratula {
  padding: 90px 15px 15px 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.caratula_logged {
  justify-content: center;
  flex-direction: row-reverse;
}

.img-background {
  position: relative;
  min-height: 400px;
  overflow: hidden;
  /* background-image: url("/images/caratula_back.png"); */
}

.caratula-im {
  display: none;
}

.caratula-im img {
  max-height: 500px;
  margin: auto;
  position: relative;
}

@media(min-width: 1024px) {
  .caratula-im {
    width: 30%;
    display: block;
  }
}

@media(min-width: 768px) {
  .caratula-im-logged {
    display: block;
    width: 50%;
  }

  .info-logged {
    width: 50%;
  }
}

.caratula-button {
  display: flex;
  align-items: center;
  font-weight: bold;
  padding: 10px 15px;
  margin: 15px;
  font-size: large;
  color: #fff;
  border: solid 1px #fb923c;
  background-color: #002e45ab;
  border-radius: 0.375rem;
}

.caratula-button span {
  fill: white;
}

.caratula-button span box-icon {
  vertical-align: text-bottom;
}

.caratula-button a {
  color: #fff;
}

/* Strifomesrfmerofnsergnsergser */
.bg {
  min-height: 400px;
  animation: slide 8s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #d95d2240 50%, #002e45 50%);
  bottom: 0;
  left: -50%;
  opacity: .5;
  position: absolute;
  right: -50%;
  top: 0;
  /* z-index: -1; */
}

.bg2 {
  animation-direction: alternate-reverse;
  animation-duration: 9s;
}

.bg3 {
  animation-duration: 10s;
}

@keyframes slide {
  0% {
    transform: translateX(-25%);
  }

  100% {
    transform: translateX(25%);
  }
}
</style>