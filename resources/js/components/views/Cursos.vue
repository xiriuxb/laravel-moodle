<template>
  <div id="cursos" class="container-fluid bg-slate-100">
    <AppHead :title="'Cursos'"/>
    <div id="encabezado-cursos">
      <div class="justify-content-center">
        <p id="titulo-cursos">Cursos</p>
      </div>
      <div class="align-bottom" v-if="selected_category">({{ selected_category }})</div>
        <select name="order-by" id="order-by">
          <option selected>Ordenar por:</option>
          <option v-for="orden in orderBy" :key="orden.id" :value="orden.value">{{orden.name}}</option>
        </select>
    </div>
    <div class="d-flex justify-around">
      <div class="d:w-1/4">
        <filter-component></filter-component>
      </div>
      <div class="md:w-3/4 d-flex flex-column">
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
export default {
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
      selected_category:this.category,
      orderBy:[
        {
          id:1,
          value:'precio_descendente',
          name:'Precio: De mas alto a mas bajo'
        },
        {
          id:2,
          value:'precio_ascendente',
          name:'Precio: De mas bajo a mas alto'
        },
        {
          id:3,
          value:'fecha_descendente',
          name:'Fecha: Más reciente primero'
        },
        {
          id:4,
          vlaue:'fecha_ascendente',
          name:'Fecha: Más antiguo primero'
        },
      ]
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
 .d-flex {
    flex-flow: column;
  }
}
</style>