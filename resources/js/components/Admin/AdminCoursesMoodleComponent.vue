<template>
  <div id="adminCMoodle">
    <h1>Administración de cursos (Moodle)</h1>
    <p>
      En este apartado simplemente puede observar la información básica de los
      cursos de Moodle, además de importarlos a la base de la app Octavario. Si
      desea modificar la información de los cursos debe hacerlo desde Moodle.
    </p>
    <input v-model="searchTerm" type="text" class="form-control" placeholder="Buscar curso" :disabled='loading'>
    <loading-component v-if="loadingInit"></loading-component>
    <div class="container" v-else>
      <loading-component :backgroundColor="'rgb(0 0 0 / 29%)'" :width="'100%'" :height="'100%'" v-if="loading"></loading-component>
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
              <button @click.prevent="importar(course.shortname)" :disabled="setting" :class=" course.destacado == 1? 'btn btn-outline-danger btn-acction' : 'btn btn-outline-primary btn-acction'">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="setting"></span>
                Importar/Actualizar
              </button>
            </td>
            <td>
              <button class="btn btn-primary" :disabled="setting" @click.prevent="redirectToMoodle(course.shortname)">
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
      loadingInit: true,
      loading:false,
      setting: false,
      linksToPages: [],
      searchTerm: "",
    };
  },
  created() {
    this.getCourses();
    this.debouncedGetAnswer = _.debounce(this.getCourses, 500);
  },
  watch: {
    // whenever question changes, this function will run
    searchTerm: function (newQuestion, oldQuestion) {
      this.debouncedGetAnswer();
    },
  },
  methods: {
    getCourses() {
      if(this.searchTerm.length >=2 || this.searchTerm === ""){
        this.loading = true;
        axios
          .get("/api/admin/admin-cursos-moodle",{params:{search:this.searchTerm}})
          .then((response) => {
            this.courses = response.data.data;
            this.linksToPages = response.data.links;
            this.loadingInit = this.loading = false;
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
      this.setting = true;
      axios
        .post("/api/admin/cursos-local/importar", { shortname: id })
        .then((response) => {
          this.setting = false;
          this.$toast.open({
            message: "Curso importados correctamente",
            type: "success",
            duration: 5000,
          });
        })
        .catch((error) => {
          this.setting = false;
          this.$toast.open({
            message: "Error al importar el curso",
            type: "error",
            duration: 5000,
          });
        });
    },
    redirectToMoodle(cursoShortname) {
      window.open =
        ("https://moodle.xiriuxb.org/course/view.php?name=" + cursoShortname,
        "_blank");
    },
  },
};
</script>

<style scoped>
#adminCMoodle {
  padding: 1rem;
}
.container{
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
}
</style>