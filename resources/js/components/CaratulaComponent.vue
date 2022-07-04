<template>
  <section>
    <div class="img-fluid">
      <div class="flex flex-wrap items-center px-10 py-10 pt-[120px]" id="caratula">
        <div class="w-full md:w-1/2 md:px-3 relative flex flex-col items-center">
          <h1 class="font-bold text-orange-500 md:text-5xl text-3xl xl:self-start ">{{ titulo1 }}</h1>
          <p class="self-center md:self-start text-2xl font-bold text-orange-200">
            Inscríbete en un curso
          </p>
          <inertia-link class="caratula-button sm:mb-0 hover:bg-[#002e45] md:self-start sm:w-auto" as="button" type="button"
            :href="'/cursos/all'">
            Lista de cursos
            <span>
              <box-icon class="block" name='right-arrow-alt' color='#fff'></box-icon>
            </span>
          </inertia-link>
          <p class="self-center md:self-start text-2xl font-bold text-orange-200">Y accede al contenido en Moodle (aula virtual)</p>
          <a class="caratula-button sm:mb-0 hover:bg-[#002e45] sm:w-auto md:self-start" :href="moodleUrl+'login/index.php'">
            Sitio Moodle
            <span>
              <box-icon name='link-external'></box-icon>
            </span>
          </a>
        </div>
        <div class="w-full md:w-1/2 filter brightness-100" v-if="!$page.props.auth.user">
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
.img-fluid {
  position: relative;
  min-height: 400px;
}

.img-fluid::before {
  content: "";
  width: 100%;
  height: 100%;

  background-image: url("/images/caratula.png");
  filter: brightness(56%);
  position: absolute;
  background-repeat: repeat;
  z-index: 0;
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
</style>