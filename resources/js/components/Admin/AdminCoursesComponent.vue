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
  <input v-model="searchTerm" type="text" class="form-control" placeholder="Buscar curso" :disabled='loading' title="Busqueda">
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
          <td>
            <button @click.prevent="setDestacado(course.shortname, course.destacado == '0'?'1':'0')" :disabled="loading"
              :class="course.destacado == 1 ? 'btn btn-outline-danger' : 'btn btn-outline-primary'">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
              {{ course.destacado == 1 ? 'No Destacar':'Destacar' }}
            </button>
          </td>
          <td v-if="$page.props.auth.role == 'su_admin'">
            <inertia-link :href="route('admin.listado.curso',{id: course.shortname })">Reporte</inertia-link>
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
var _debounce = require('lodash/debounce');

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
    }
  },
  created(){
    this.loadCourses();
    this.debouncedGetAnswer = _debounce(this.loadCourses, 500);
  },
  watch: {
    searchTerm: function (newQuestion, oldQuestion) {
      this.debouncedGetAnswer();
    },
  },
  methods:{
    loadCourses(){
      if(this.searchTerm.length >=2 || this.searchTerm === ""){
        this.loading = true;
        axios.get(this.route('admin.cursos.index',{search:this.searchTerm}))
        .then( ({data}) => {
          this.linksToPages = data.links;
          this.courses = data.data;
        }).catch(
          () => {
            this.$toast.open({
              message: 'Error al cargar los cursos',
              type: 'error'
            });
          }
        )
        .finally(()=>{this.loading = false});
      }
    },
    setDestacado(shortname,destacado){
      this.loading = true;
      axios.post(this.route('admin.set-destacado', {id: shortname, destacado:destacado}))
      .then(() => {
        this.loadCourses();
      }).catch(
        () => {
          this.$toast.open({
            message: 'Error al configurar',
            type: 'error',
          });
        }
      )
      .finally(()=>{this.loading = false});
    }
  },
}
</script>

<style scoped>
</style>