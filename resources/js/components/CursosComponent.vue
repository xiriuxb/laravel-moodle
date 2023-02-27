<template>
  <div class="mb-50">
    <div>
      <div class="row">
        <curso-card-component v-for="curso in $parent.data" :key="curso.shortname" :curso="curso" :moodleUrl="moodleUrl">
        </curso-card-component>

      </div>
      <p v-if="mensajeErr">{{ mensajeErr }}</p>
    </div>
  </div>
</template>

<script>
const Home = () => import('./views/Home.vue');
const Cursos = () => import('./views/Cursos.vue');
const CursoCardComponent = () => import('../components/CursoCardComponent.vue');
export default {
  layout: [Home, Cursos],
  components: {
    CursoCardComponent,
  },
  props: {
    cursos: {
      type: Array,
    },
  },
  data() {
    return {
      visible: false,
      cursos2: [],
      mensajeErr: this.$page.props.errors[0],
    };
  },
  computed: {
    moodleUrl() {
      return this.$page.props.siteData.moodleUrl;
    },
  }
};
</script>

<style scoped>
section {
  width: 289px;
}

.mb-50 {
  margin-bottom: 50px;
}
</style>