<template>
  <div class="justify-content-center mb-50">
    <div>
      <div class="row">
        <curso-card-component
          v-for="curso in cursos"
          :key="curso.shortname"
          :curso="curso"
        >
        </curso-card-component>

      </div>
      <p v-if="mensajeErr != ''">{{ mensajeErr }}</p>
    </div>
  </div>
</template>

<script>
import CursoCardComponent from "../components/CursoCardComponent.vue";
export default {
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
      mensajeErr: "",
      pages: 0,
    };
  },
  beforeMount() {
    
  },
  methods:{
    
  }
};
</script>

<style scoped>
section {
  width: 289px;
}
.mt-30 {
  margin-top: 30px;
}

.mb-50 {
  margin-bottom: 50px;
}
</style>