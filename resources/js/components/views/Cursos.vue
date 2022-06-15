<template>
  <div id="cursos" class="container-fluid bg-slate-100">
    <AppHead :title="'Cursos'"/>
    <div id="encabezado-cursos">
      <div class="justify-content-center">
        <p id="titulo-cursos">Cursos</p>
      </div>
      <h4 class="align-bottom" v-if="category">({{ category }})</h4>
    </div>
    <div class="d-flex">
      <div class="w-full md:w-1/4">
        <filter-component></filter-component>
      </div>
      <div class="w-full md:w-3/4 d-flex flex-column">
        <div>
          <slot v-bind:cursos="data"></slot>
        </div>
        <course-navigation-component v-if="pages" :pages="pages" :currentPage="currentPage">
        </course-navigation-component>
      </div>
    </div>
  </div>
</template>

<script scoped>
import LoadingComponent from "../LoadingComponent.vue";
import CourseNavigationComponent from '../CourseNavigationComponent.vue';
//import Home from './Home.vue';
export default {
  //layout: Home,
  components: {
    LoadingComponent,
    CourseNavigationComponent
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    pages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: false,
      default: 'all'
    },
  },
  data() {
    return {
      cursos2: [],
      visible: false,
    };
  },
};
</script>

<style scoped>
#cursos {
  padding-top: 100px;
}

#encabezado-cursos {
  display: flex;
  flex-flow: row;
  align-items: center;
}

#titulo-cursos {
  font-size: 60px;
  font-weight: 700;
  padding: 10px 20px;
}

@media (max-width: 750px) {
  #cursos .d-flex {
    flex-flow: column;
  }
}

.d-flex.flex-column {
  width: -webkit-fill-available;
}
</style>