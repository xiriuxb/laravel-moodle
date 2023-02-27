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
    <input v-model="searchTerm" type="text" class="form-control" placeholder="Buscar curso" :disabled='loading' title="Buscar curso">
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
              <a class="btn btn-primary" :disabled="loading" :href="moodleUrl+'course/view.php?name=' + course.shortname" target="_blank"
              title="Ver en Moodle">
                <box-icon class="align-middle" name="link-external" color="#fff"></box-icon>
              </a>
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
var _debounce = require('lodash/debounce');
export default {
  layout: Admin,
  components: {
    LoadingComponent,
  },
  data() {
    return {
      courses: [],
      loading:false,
      linksToPages: [],
      searchTerm: "",
    };
  },
  created() {
    this.getCourses();
    this.debouncedGetAnswer = _debounce(this.getCourses, 500);
  },
  watch: {
    searchTerm: function () {
      this.debouncedGetAnswer();
    },
  },
  computed:{
    moodleUrl: function(){
      return this.$page.props.siteData.moodleUrl;
    }
  },
  methods: {
    getCourses() {
      if(this.searchTerm.length >=2 || this.searchTerm === ""){
        this.loading = true;
        axios
          .get(this.route('admin.cursos-moodle.index',{search:this.searchTerm}))
          .then(({data}) => {
            this.courses = data.data;
            this.linksToPages = data.links;
          })
          .catch(() => {
            this.$toast.open({
              message: "Error al cargar los cursos",
              type: "error"
            });
          })
          .finally(()=>{this.loading = false;});
      }
    },
    importar(id) {
      this.loading = true;
      axios
        .post( this.route('admin.cursos.importar', { shortname: id }))
        .then(() => {
          this.$toast.open("Curso importado correctamente");
        })
        .catch(() => {
          this.$toast.open({
            message: "Error al importar el curso",
            type: "error"
          });
        })
        .finally(()=>{this.loading = false;});
    },
  },
};
</script>

<style scoped>
</style>