<template>
  <div id="cursos" class="container-fluid">
    <div id="encabezado-cursos">
        <div class="justify-content-center">
          <p id="titulo-cursos">Cursos</p>
        </div>
          <h4 v-if="category">({{category}})</h4>
    </div>
    <div class="d-flex">
      <filter-component></filter-component>
      <div class="d-flex flex-column">
        <div>
          <cursos-component :cursos="cursos2"  v-if="this.visible"></cursos-component>
          <loading-component :height="'300px'" :width="'100%'" :position="'inherit'" v-else></loading-component>
        </div>
        <course-navigation-component :page="page" :pages="pages"></course-navigation-component>
      </div>
    </div>
  </div>
</template>

<script scoped>
import LoadingComponent from "../LoadingComponent.vue";
import CourseNavigationComponent from '../CourseNavigationComponent.vue';
export default {
  components: {
    LoadingComponent,
    CourseNavigationComponent
  },
  data() {
    return {
      category: "all",
      cursos2: [],
      page: 1,
      visible: false,
      pages: 0,
    };
  },
  methods: {
    loadCourses(){
      this.visible = false;
      var ruta = "/api/curses";
      ruta =
        ruta + "/" + this.category + "/" + this.page;
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
  },
  created() {
    this.loadCourses();
  },
  watch:{
    category(){
      this.loadCourses();
    },
    page(){
      this.loadCourses();
    },
  }
};
</script>

<style scoped>
.main-header {
  position: relative !important;
}
#cursos{
  padding-top: 100px;
}

#encabezado-cursos{
    display: flex;
  flex-flow: row;
  align-items: center;
}

#titulo-cursos {
  font-size: 60px;
  font-weight: 700;
  padding: 10px 20px;
}
@media (max-width: 750px) {
  #cursos .d-flex {
    flex-flow: column;
  }
}
.d-flex.flex-column {
  width: -webkit-fill-available;
}
</style>