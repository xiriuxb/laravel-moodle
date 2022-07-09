<template>
  <div id="cursos" class="container-fluid">
    <AppHead :title="'Cursos'" />
    <div id="encabezado-cursos">
      <p>Cursos</p>
      <div class="align-bottom" v-if="selected_category">({{ selected_category }})</div>
      <div id="order-by">
        <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownOrderByButton"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Ordernar por: {{ this.valuesOrderBy[this.orderBy].name }}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownOrderByButton">
            <inertia-link class="dropdown-item" v-for="orden in valuesOrderBy" :key="orden.id"
              :href="route('cursos', { categoria: selected_category, order_by: orden.value })">
              {{ orden.name }}
            </inertia-link>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-around">
      <div class="d:w-1/4 filter-container">
        <filter-component></filter-component>
      </div>
      <div class="md:w-3/4 d-flex flex-column">
        <div>
          <slot v-bind:cursos="data"></slot>
        </div>
        <course-navigation-component v-if="pages" :pages="pages" :currentPage="currentPage" :orderBy="orderBy">
        </course-navigation-component>
      </div>
    </div>
  </div>
</template>

<script scoped>
import LoadingComponent from "../LoadingComponent.vue";
import CourseNavigationComponent from '../CourseNavigationComponent.vue';
import FilterComponent from "../FilterComponent.vue";
export default {
  components: {
    LoadingComponent,
    CourseNavigationComponent,
    FilterComponent
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    pages: {
      type: Number,
      required: true,
      default: 1
    },
    currentPage: {
      type: Number,
      required: true,
      default: 1
    },
    category: {
      type: String,
      required: false,
      default: 'all'
    },
    orderBy: {
      type: String,
      required: false,
      default: 'defecto'
    }
  },
  data() {
    return {
      cursos2: [],
      visible: false,
      selected_category: this.category,
      valuesOrderBy: {
        'defecto': {
          id: 1,
          value: 'defecto',
          name: 'Por defecto'
        },
        'precio_desc': {
          id: 2,
          value: 'precio_desc',
          name: 'Precio: De mas alto a mas bajo'
        },
        'precio_asc': {
          id: 3,
          value: 'precio_asc',
          name: 'Precio: De mas bajo a mas alto'
        },
        'fecha_desc': {
          id: 4,
          value: 'fecha_desc',
          name: 'Fecha: Más reciente primero'
        },
        'fecha_asc': {
          id: 5,
          vlaue: 'fecha_asc',
          name: 'Fecha: Más antiguo primero'
        },
      }
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

#encabezado-cursos p {
  font-size: 60px;
  font-weight: 700;
  padding: 10px 20px;
}

.filter-container {
  display: flex;
  justify-content: center;
}

@media (max-width: 767px) {
  .d-flex {
    flex-flow: column;
  }

  #encabezado-cursos {
    flex-direction: column;
  }
}

#order-by {
  padding: 15px;
}

#order-by select {
  padding: 10px 5px;
}
</style>