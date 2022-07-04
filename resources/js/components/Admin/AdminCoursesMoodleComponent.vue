<template>
  <div id="adminCMoodle" :class="{ 'disabled': loading }">
    <loading-component :backgroundColor="'rgb(0 0 0 / 29%)'" :width="'100%'" :height="'100%'" :position="'fixed'" v-if="loading"></loading-component>
    <AppHead :title="'Admin | Cursos (Moodle)'" />
    <h2>Administración de cursos (Moodle)</h2>
    <p>
      En este apartado simplemente puede observar la información básica de los
      cursos de Moodle, además de importarlos a la base de la app Octavario. Si
      desea modificar la información de los cursos debe hacerlo desde Moodle.
      Al actualizarse un curso, éste se quita de la lista de destacados.
    </p>
    <input v-model="searchTerm" type="text" class="form-control" placeholder="Buscar curso" :disabled='loading'>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Nombre Corto</th>
            <th scope="col">Importar?</th>
            <th scope="col">Ver en Moodle</th>
          </tr>
        </thead>
        <tbody :class="loading?'disabled':''">
          <tr v-for="course in courses" v-bind:key="course.shortname">
            <td>
              {{ course.fullname }}
            </td>
            <td>{{ course.shortname }}</td>
            <td>
              <button @click.prevent="importar(course.shortname)" :disabled="loading" :class=" course.destacado == 1? 'btn btn-outline-danger' : 'btn btn-outline-primary btn-acction'">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
                Importar/Actualizar
              </button>
            </td>
            <td>
              <button class="btn btn-primary" :disabled="loading" @click.prevent="redirectToMoodle(course.shortname)">
                <box-icon class="align-middle" name="link-external" color="#fff"></box-icon>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item" :class="!link.active ? link.url == null ? 'page-item disabled' : 'page-item' : 'page-item active'"
          v-for="link in linksToPages" :key="link.label">
          <a class="page-link" href="#" @click="getCourses(link.url)" tabindex="-1">
            <div v-html="link.label"></div>
          </a>
        </li>
      </ul>
    </nav>
    </div>
  </div>
</template>

<script>
import LoadingComponent from "../../components/LoadingComponent.vue";
import Admin from "../views/Admin.vue";
export default {
  layout: Admin,
  components: {
    LoadingComponent,
  },
  data() {
    return {
      courses: [],
      loading:false,
      baseCursosUrl: "/api/admin/cursos-moodle",
      linksToPages: [],
      searchTerm: "",
    };
  },
  created() {
    this.getCourses();
    this.debouncedGetAnswer = _.debounce(this.getCourses, 500);
  },
  watch: {
    searchTerm: function (newQuestion, oldQuestion) {
      this.debouncedGetAnswer();
    },
  },
  computed:{
    moodleUrl: function(){
      return this.$page.props.siteData.moodleUrl;
    }
  },
  methods: {
    getCourses(url=this.baseCursosUrl) {
      if(this.searchTerm.length >=2 || this.searchTerm === ""){
        this.loading = true;
        axios
          .get(url,{params:{search:this.searchTerm}})
          .then((response) => {
            this.courses = response.data.data;
            this.linksToPages = response.data.links;
            this.loading = false;
          })
          .catch((error) => {
            this.$toast.open({
              message: "Error al cargar los cursos",
              type: "error",
              duration: 5000,
            });
          });
      }
    },
    importar(id) {
      this.loading = true;
      axios
        .post("/api/admin/cursos-local/importar", { shortname: id })
        .then((response) => {
          this.loading = false;
          this.$toast.open({
            message: "Curso importados correctamente",
            type: "success",
            duration: 5000,
          });
        })
        .catch((error) => {
          this.loading = false;
          this.$toast.open({
            message: "Error al importar el curso",
            type: "error",
            duration: 5000,
          });
        });
    },
    redirectToMoodle(cursoShortname) {
      window.open =
        (this.moodleUrl+"course/view.php?name=" + cursoShortname,
        "_blank");
    },
  },
};
</script>

<style scoped>
</style>