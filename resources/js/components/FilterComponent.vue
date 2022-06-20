<template>
  <div class="container justify-content-center" id="filter">
    <div class="justify-content-center">
      <article class="filter-group">
        <a data-toggle="collapse" data-target="#collapse_aside1" aria-expanded="false" class="collapsed">
          <div class="card-header">
            <i class="icon-control fa fa-chevron-down"></i>
            <h6 class="title">Categorías</h6>
          </div>
        </a>
        <div class="collapse" id="collapse_aside1" style="">
          <div class="card-body">
            <ul class="list-menu">
              <li>
                <inertia-link as="button" class="btn" :href="'/cursos/all'" @click="updateCurrentCategory('all')">Todos
                </inertia-link>
              </li>
              <li v-for="categoria in categories" :key="categoria.id">
                <inertia-link as="button" class="btn" :href="'/cursos/' + categoria.name"
                  @click="updateCurrentCategory(categoria.name)">{{ categoria.name }}</inertia-link>
              </li>
            </ul>
          </div>
        </div>
      </article>
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
  beforeCreate() {
    axios.get('/api/categorias').then((response) => {
      this.categories = response.data.data;
    }).catch((err) => {
      this.$toast.open({
        message: 'Error al cargar las categorías',
        type: 'error',
        duration: 5000
      });
    });
  },
  data() {
    return {
      categories: [],
    }
  },
  methods: {
    updateCurrentCategory: function (currentCategory) {
      this.$parent.category = currentCategory;
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
}

.mt-100 {
  margin-top: 30px;
  box-sizing: border-box;
  width: 300px;
  padding-right: 0;
}

.btn {
  width: 100%;
  text-align: initial;
  padding: 0.6rem 1.5rem;
}

.filter-group {
  border: 1px solid #343a4071;
  width: 100%;
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

.icon-control {
  margin-top: 6px;
  float: right;
  font-size: 80%;
}

.list-menu {
  list-style: none;
  margin: 0;
  padding-left: 0;
}

.list-menu a {
  color: #343a40;
}

a {
  text-decoration: none !important;
  background-color: transparent;
}
</style>