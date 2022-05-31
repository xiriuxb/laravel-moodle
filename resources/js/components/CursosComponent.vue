<template slot-scope="{cursos}">
  <div  class="justify-content-center mb-50" >
    <Head title="Cursos" />
    <div>
      <div class="row">
        <curso-card-component v-for="curso in $parent.data" :key="curso.shortname" :curso="curso">
        </curso-card-component>

      </div>
      <p v-if="mensajeErr">{{mensajeErr }}</p>
    </div>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import Cursos from "./views/Cursos.vue";
import CursoCardComponent from "../components/CursoCardComponent.vue";
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
  beforeCreate() {
    
  },
  methods:{
    
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