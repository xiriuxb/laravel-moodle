<template>
<div id="adminCourses">
  <h1>
      Administración de cursos (Local)
  </h1>
  <p>En este apartado simplemente puede observar la información básica de los cursos, además de establecer como destacado. 
    Si desea modificar la información de los cursos debe hacerlo desde Moodle.
  </p>
  <input v-model="searchTerm" type="text" class="form-control" placeholder="Buscar curso" :disabled='setting'>
  <loading-component v-if="loadingInit"></loading-component>
  <div class="container" v-else>
    <loading-component :backgroundColor="'rgb(0 0 0 / 29%)'" :width="'100%'" :height="'100%'" v-if="setting"></loading-component>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Nombre Corto</th>
          <th scope="col">Categoria</th>
          <th scope="col">Destacado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" v-bind:key="course.id">
          <th scope="row">{{ course.id }}</th>
          <td>
            {{ course.fullname }}
          </td>
          <td>{{ course.shortname }}</td>
          <td>{{ course.category }}</td>
          <td>{{ course.destacado == '1'?'Si':'No' }}</td>
          <td>
            <button @click.prevent="setDestacado(course.shortname, !course.destacado)" :disabled="setting"
              :class="course.destacado == 1 ? 'btn btn-outline-danger btn-acction' : 'btn btn-outline-primary btn-acction'">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="setting"></span>
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
      loadingInit: true,
      setting: false,
      loading:false,
      linksToPages: [],
      searchTerm: "",
      baseUrl: '/api/admin/cursos-local',
    }
  },
  created(){
    this.loadCourses();
    this.debouncedGetAnswer = _.debounce(this.loadCourses, 500);
  },
  watch: {
    // whenever question changes, this function will run
    searchTerm: function (newQuestion, oldQuestion) {
      this.debouncedGetAnswer();
    },
  },
  methods:{
    loadCourses(url=this.baseUrl){
      if(this.searchTerm.length >=2 || this.searchTerm === ""){
        this.setting = true;
        axios.get(url,{params:{search:this.searchTerm}}).then(response => {
          this.setting = false;
          this.loadingInit = false;
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
      this.setting = true;
      axios.post('/api/admin/cursos-local/destacado', {id: shortname, destacado:destacado}).then(response => {
        this.setting = false;
        this.loadCourses();
      }).catch(
        error => {
          this.setting = false;
          this.$toast.open({
            message: 'Error',
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
#adminCourses {
  padding: 1rem;
}
.container{
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
}
</style>