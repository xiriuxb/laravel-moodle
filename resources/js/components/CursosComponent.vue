<template>
  <div class="container justify-content-center mb-50">
    <div v-if="this.visible">
      <div class="row">
        <curso-card-component
          v-for="curso in cursos2"
          :key="curso.shortname"
          :curso="curso"
        >
          <!-- :name="curso.fullname"
          :shortname="curso.shortname"
          :image="curso.image"
          :precio="curso.price"
          :summary="curso.summary"
          :categoryname="curso.category" -->
        </curso-card-component>
        <!-- Page navigation -->
        <div class="container">
          <ul class="pagination justify-content-center">
            <router-link
              :to="{
                name: 'cursos-filtered',
                params: {
                  category: $route.params.category,
                  page: navigationDown(page),
                },
              }"
            >
              <li class="page-item" :class="{'page-item disabled': page==1}"><a class="page-link">Anterior</a></li>
            </router-link>
            <li v-for="index in pages" :key="index" class="page-item"
              v-bind:class="{ 'page-item active': index == page }">
              <router-link
                :to="{name: 'cursos-filtered',params: { category: $route.params.category, page: index },}">
                <a class="page-link">{{ index }}</a>
              </router-link>
            </li>
            <router-link
              :disabled="+page === +pages"
              :to="{
                name: 'cursos-filtered',
                params: {
                  category: $route.params.category,
                  page: navigationUp(page, pages),
                },
              }"
            >
              <li class="page-item" :class="{'page-item disabled': page==pages}"><a class="page-link">Siguiente</a></li>
            </router-link>
          </ul>
        </div>
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
      page: 1,
    };
  },
  methods: {
    navigationUp(page, maxPage) {
      return page < maxPage ? +page + 1 : +page;
    },
    navigationDown(page) {
      return page > 1 ? +page - 1 : 1;
    },
  },
  beforeMount() {
    var ruta = "/api/curses";
    ruta =
      ruta + "/" + this.$route.params.category + "/" + this.$route.params.page;
    this.page = this.$route.params.page;
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