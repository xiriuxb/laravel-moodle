<template>
  <div class="container justify-content-center mb-50">
    <div v-if="this.visible">
      <div class="row">
        <curso-card-component
          v-for="curso in cursos2"
          :key="curso.shortname"
          :curso="curso"
        >
        </curso-card-component>
        <!-- Page navigation -->
        <course-navigation-component  :pages="pages"></course-navigation-component>
        <!-- End page navigation -->
      </div>
      <p v-if="mensajeErr != ''">{{ mensajeErr }}</p>
    </div>
    <loading-component v-else></loading-component>
  </div>
</template>

<script>
import CursoCardComponent from "../components/CursoCardComponent.vue";
import LoadingComponent from "../components/LoadingComponent.vue";
import CourseNavigationComponent from './CourseNavigationComponent.vue';
export default {
  components: {
    CursoCardComponent,
    LoadingComponent,
    CourseNavigationComponent,
  },
  data() {
    return {
      visible: false,
      cursos2: [],
      mensajeErr: "",
      pages: 0,
    };
  },
  beforeMount() {
    var ruta = "/api/curses";
    ruta =
      ruta + "/" + this.$route.params.category + "/" + this.$route.params.page;
    axios
      .get(ruta)
      .then((response) => {
        this.cursos2 = response.data.data;
        this.pages = response.data.pages;
        this.visible = true;
      })
      .catch((err) => {
        this.visible = true;
        this.mensajeErr = err.response.data.message;
      });
  },
};
</script>

<style scoped>
section {
  width: 289px;
}
.mt-30 {
  margin-top: 30px;
}

.mb-50 {
  margin-bottom: 50px;
}
</style>