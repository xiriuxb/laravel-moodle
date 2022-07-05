<template>
  <div id="filter">
    <!-- Filtro por categoría -->
    <div class="filter-group">
      <a id="categorias-toggler" data-toggle="collapse" data-target="#collapse_aside1" aria-expanded="false" class="collapsed" @click="categorias_expanded = !categorias_expanded">
        <div class="card-header d-flex justify-between">
          <h6 class="font-bold">Categorías</h6>
            <span class="spinner-border spinner-border-sm" v-if="loading" role="status"></span>
            <div v-else class="arrow" :class="categorias_expanded?'':'arrow-expanded'">
              <div class="line"></div>
              <div class="line"></div>
            </div>
        </div>
      </a>
      <div class="collapse" id="collapse_aside1">
        <div class="card-body">
          <ul class="list-menu">
            <li>
              <inertia-link as="button" class="btn" :href="route('cursos',{order_by:$parent.orderBy})" @click="updateCurrentCategory('all')">Todos
              </inertia-link>
            </li>
            <li v-for="categoria in categories" :key="categoria.id">
              <inertia-link as="button" class="btn" :href="route('cursos',{categoria:categoria.name, order_by:$parent.orderBy})"
                @click="updateCurrentCategory(categoria.name)">{{ categoria.name }}</inertia-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentCategory: {
      type: String,
    },
  },
  mounted() {
    axios.get(this.route('categorias')).then((response) => {
      this.categories = response.data.data;
      this.loading = false;
    }).catch((err) => {
      this.$toast.open({message: 'Error al cargar las categorías',type: 'error',duration: 5000});
    });
    this.categorias_expanded = document.getElementById('categorias-toggler').getAttribute('aria-expanded');
  },
  data() {
    return {
      categories: [],
      categorias_expanded:false,
      loading:true,
    }
  },
  methods: {
    updateCurrentCategory: function (currentCategory) {
      this.$parent.selected_category = currentCategory;
      this.$parent.page = 1;
    }
  }
};
</script>

<style scoped>
#filter {
  max-width: 250px;
  min-width: 220px;
  padding-bottom: 10px;
  text-decoration: none !important;
  background-color: transparent;
}

.btn {
  width: 100%;
  text-align: initial;
  padding: 0.6rem 1.5rem;
}

.filter-group {
  border: 1px solid #343a4071;
}

.card-body {
  padding: 0;
}

.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: #fff;
  border-bottom: 4px solid #d44a0b;
  cursor: pointer;
}

.list-menu {
  list-style: none;
  margin: 0;
  padding-left: 0;
}

/* Boton cerrar-abrir */
.arrow{
  padding:0.375rem 0.75rem;
}
.line:not(:first-of-type){
  transform: rotate(90deg);
}
.arrow-expanded .line{
  transform: rotate(0);
}
.line{
  position:absolute;
  width:15px;
  height: 3px;
  border-radius: 3px;
  background-color: black;
  transition: transform 0.3s ease-in-out;
}
</style>