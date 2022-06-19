<template>
  <div id="misCursos" class="container">
    <AppHead :title="'Usuario | Cursos'" />
    <h2 class="text-2xl">Mis cursos <span class="spinner-border spinner-border-sm" v-if="loading" role="status"
        aria-hidden="true"></span></h2>
    <form action="#" @submit.prevent="busquedaCurso">
      <input v-model="termino_busqueda" type="search" class="form-control" placeholder="Buscar curso">
      <button type="submit" class="btn btn-pimary bg-sky-700 text-slate-200 hover:bg-sky-900 hover:text-slate-200"
        :disabled="this.loading">
        <span class="spinner-border spinner-border-sm" v-if="loading" role="status" aria-hidden="true"></span>
        Buscar
      </button>
    </form>
    <div class="container">
      <table class="table">
        <tbody>
          <tr v-for="curso in data" :key="curso.shortname">
            <td>{{ curso.category }}</td>
            <td>
              <inertia-link class="text-blue-700" :href="'/curso/' + curso.shortname">
                {{ curso.fullname }}
              </inertia-link>
            </td>
            <td>
              <div v-if="curso.pivot.estado_matricula_id == 3" class="text-blue-900">
                Su matrícula esta pendiente.
              </div>
              <div v-else-if="curso.pivot.estado_matricula_id == 2" class="text-red-900">
                Su matrícula fue rechazada.*
              </div>
              <div v-else-if="curso.pivot.estado_matricula_id == 4" class="text-red-900">
                Su matrícula fue cancelada/revocada.*
              </div>
              <button v-else class="btn btn-primary" @click.prevent="redirectToMoodle(curso.shortname)">
                <span class="align-middle"> Ver en Moodle</span>
                <box-icon class="align-middle" name='link-external' color="#fff"></box-icon>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>*En caso de tener un reclamo, por favor contáctese con nosotros</p>
  </div>
</template>

<script>
import Home from "../views/Home.vue";
import { Inertia } from '@inertiajs/inertia'
import LoadingComponent from "../LoadingComponent.vue";
export default {
  layout: Home,
  components: {
    LoadingComponent,
  },
  props: {
    data: {
      type: Array,
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
  computed:{
    moodleUrl() {
      return this.$page.props.siteData.moodleUrl+'course/view.php?name=';
    },
  }
};
</script>

<style scoped>
#misCursos {
  padding-top: 100px;
}
</style>