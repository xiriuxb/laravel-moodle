<template>
  <div id="misCursos" class="container">
    <AppHead :title="'Usuario | Cursos'" />
    <h2 class="text-2xl">Mis cursos <span class="spinner-border spinner-border-sm" v-if="loading" role="status"
        aria-hidden="true"></span></h2>
    <form action="#" @submit.prevent="busquedaCurso">
      <input v-model="termino_busqueda" type="search" class="form-control" placeholder="Buscar curso" title="Buscar curso">
      <button type="submit" class="btn btn-primary" :disabled="this.loading">
        <span class="spinner-border spinner-border-sm" v-if="loading" role="status" aria-hidden="true"></span>
        Buscar
      </button>
    </form>
    <div class="container">
      <table class="table">
        <tbody>
          <tr v-for="(curso, index) in data.data" :key="curso.index">
            <td>{{ curso.cursos.category }}</td>
            <td>
              <inertia-link class="text-blue-700" :href="route('curso', { any: curso.cursos.shortname })">
                {{ curso.cursos.fullname }}
              </inertia-link>
            </td>
            <td>
              <div v-if="curso.estado_matricula_id == 3" class="text-blue-900">
                Su matrícula esta pendiente.
              </div>
              <div v-else-if="curso.estado_matricula_id == 2" class="text-red-900">
                Su matrícula fue rechazada.*
              </div>
              <div v-else-if="curso.estado_matricula_id == 4" class="text-red-900">
                Su matrícula fue cancelada/revocada.*
              </div>
              <a v-else class="btn btn-primary" :href="moodleUrl + curso.cursos.shortname" target="_blank">
                <span class="align-middle"> Ver en Aula</span>
                <box-icon class="align-middle" name='link-external' color="#fff"></box-icon>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>*En caso de tener un reclamo, por favor contáctese con nosotros</p>
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item"
          :class="!link.active ? link.url == null ? 'page-item disabled' : 'page-item' : 'page-item active'"
          v-for="link in data.links" :key="link.label">
          <inertia-link class="page-link" :href="link.url" :only="['data']" tabindex="-1">
            <div v-html="link.label"></div>
          </inertia-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Home from '../views/Home.vue';
const  { Inertia } = import('@inertiajs/inertia');
import LoadingComponent from "../LoadingComponent.vue";
export default {
  layout: Home,
  components: {
    LoadingComponent,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      misCursos: [],
      loading: false,
      termino_busqueda: '',
    };
  },
  methods: {
    redirectToMoodle(cursoShortname) {
      window.location.href = this.moodleUrl + cursoShortname;
    },
    busquedaCurso() {
      if (this.termino_busqueda.length >= 2 || this.termino_busqueda === "") {
        this.loading = true;
        Inertia.visit('/mis-cursos?b=' + this.termino_busqueda,
          {
            only: ['data'], onStart: () => {
              this.loading = true;
            }, onComplete: () => {
              this.loading = false;
            }
          });
      }
    },
  },
  computed: {
    moodleUrl() {
      return this.$page.props.siteData.moodleUrl + 'course/view.php?name=';
    },
  }
};
</script>

<style scoped>
#misCursos {
  padding-top: 100px;
}
</style>