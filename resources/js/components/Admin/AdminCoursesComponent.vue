<template>
<div id="adminCourses" :class="{ 'disabled': loading }">
  <AppHead :title="'Admin | Cursos (Local)'" />
  <loading-component :backgroundColor="'rgb(0 0 0 / 29%)'" :position="'fixed'" :width="'100%'" :height="'100%'" v-if="loading"></loading-component>
  <h2>
      Administración de cursos (Local)
  </h2>
  <p>En este apartado simplemente puede observar la información básica de los cursos, además de establecer como destacado. 
    Si desea modificar la información de los cursos debe hacerlo desde Moodle.
  </p>
  <input v-model="searchTerm" type="text" class="form-control" placeholder="Buscar curso" :disabled='loading'>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Nombre Corto</th>
          <th scope="col">Categoria</th>
          <th scope="col">Destacado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" v-bind:key="course.id">
          <td>
            {{ course.fullname }}
          </td>
          <td>{{ course.shortname }}</td>
          <td>{{ course.category }}</td>
          <td>{{ course.destacado == '1'?'Si':'No' }}</td>
          <td>
            <button @click.prevent="setDestacado(course.shortname, !course.destacado)" :disabled="loading"
              :class="course.destacado == 1 ? 'btn btn-outline-danger btn-acction' : 'btn btn-outline-primary btn-acction'">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
              {{ course.destacado == 1 ? 'No Destacar':'Destacar' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item" :class="!link.active ? link.url == null ? 'page-item disabled' : 'page-item' : 'page-item active'"
          v-for="link in linksToPages" :key="link.label">
          <a class="page-link" href="#" @click="loadCourses(link.url)" tabindex="-1">
            <div v-html="link.label"></div>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import LoadingComponent from '../../components/LoadingComponent.vue';
import Admin from '../views/Admin.vue';

export default {
  layout: Admin,
  components: {
    LoadingComponent
  },
  data(){
    return{
      courses: [],
      linksToPages: [],
      loading:true,
      searchTerm: "",
      baseUrl: '/api/admin/cursos-local',
    }
  },
  created(){
    this.loadCourses();
    this.debouncedGetAnswer = _.debounce(this.loadCourses, 500);
  },
  watch: {
    searchTerm: function (newQuestion, oldQuestion) {
      this.debouncedGetAnswer();
    },
  },
  methods:{
    loadCourses(url=this.baseUrl){
      if(this.searchTerm.length >=2 || this.searchTerm === ""){
        this.loading = true;
        axios.get(url,{params:{search:this.searchTerm}}).then(response => {
          this.loading = false;
          this.linksToPages = response.data.links;
          this.courses = response.data.data;
        }).catch(
          error => {
            this.$toast.open({
              message: 'Error al cargar los cursos',
              type: 'error',
              duration: 5000
            });
          }
        );
      }
    },
    setDestacado(shortname,destacado){
      this.loading = true;
      axios.post(this.baseUrl+'/destacado', {id: shortname, destacado:destacado}).then(response => {
        this.loading = false;
        this.loadCourses();
      }).catch(
        error => {
          this.loading = false;
          this.$toast.open({
            message: 'Error al configurar',
            type: 'error',
            duration: 5000
          });
        }
      );
    }
  },
}
</script>

<style scoped>
</style>