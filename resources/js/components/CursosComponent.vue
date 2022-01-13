<template>
  <div class="container justify-content-center mb-50">
      <div class="row container">
        <ul class="pagination justify-content-center">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li v-for="index in pages" :key="index" class="page-item">
            <router-link :to="{name:'cursos-filtered',params:{category:$route.params.category,page:index}}">
              <a class="page-link">{{ index }}</a>
            </router-link>
          </li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </div>
    <div class="row" v-if="this.visible">
      <curso-card-component
        v-for="curso in cursos2"
        :key="curso.shortname"
        :name="curso.fullname"
        :shortname="curso.shortname"
        :image="curso.image"
        :precio="curso.price"
        :summary="curso.summary"
        :categoryname="curso.category"
      >
      </curso-card-component>
      <p v-if="mensajeErr != ''">{{ mensajeErr }}</p>
    </div>
    <loading-component v-else></loading-component>
  </div>
</template>

<script>
import CursoCardComponent from "../components/CursoCardComponent.vue";
import LoadingComponent from "../components/LoadingComponent.vue";
export default {
  components: {
    CursoCardComponent,
    LoadingComponent,
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
    console.log(ruta);
    axios
      .get(ruta)
      .then((response) => {
        this.cursos2 = response.data.data;
        this.pages = response.data.pages;
        this.visible = true;
        console.log(response.data.data);
      })
      .catch((err) => {
        this.visible = true;
        this.mensajeErr = err.response.data.message;
        console.log(err.response.data.message);
      });
    console.log(this.cursos2);
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