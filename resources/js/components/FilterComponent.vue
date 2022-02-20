<template>
  <div class="container justify-content-center" id="filter">
    <div class="justify-content-center" >
          <article class="filter-group">
            <a
              data-toggle="collapse"
              data-target="#collapse_aside1"
              aria-expanded="false"
              class="collapsed"
            >
              <div class="card-header">
                <i class="icon-control fa fa-chevron-down"></i>
                <h6 class="title">Categorías</h6>
              </div>
            </a>
            <div class="collapse" id="collapse_aside1" style="">
              <div class="card-body">
                <ul class="list-menu">
                  <li>
                    <router-link :to="{path:'/cursos/all/1'}">Todos</router-link>
                  <li v-for="categoria in categories" :key="categoria.id">
                    <router-link :to="{ name: 'cursos-filtered', params: { category:categoria.name, page:1 } }">
                      {{ categoria.name }}
                    </router-link>
                    <!-- <a" >{{categoria.name}} </a> -->
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
  data(){
    return{
      categories:[],
    }
  },
  beforeCreate(){
    console.log('created')
      axios.get('/api/categorias').then((response) => {
        this.categories = response.data.data;
      }).catch((err) => {
        console.log(err);
      }); 
    },
};
</script>

<style scoped>
#filter{
  max-width: 250px;
  min-width: 220px;
}
.mt-100 {
  margin-top: 30px;
  box-sizing: border-box;
  width: 300px;
  padding-right: 0;
}

.filter-group {
    border: 1px solid #343a4071;
    width: 100%;
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

.checkbox-btn {
  position: relative;
}

.checkbox-btn input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.checkbox-btn input:checked ~ .btn {
  border-color: #3167eb;
  background-color: #3167eb;
  color: #fff;
}

.btn-light {
  display: inline-block;
  font-weight: 600;
  color: #343a40;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #eee;
  border: 1px solid #eee;
  padding: 0.45rem 0.85rem;
  font-size: 10px;
  line-height: 1.5;
  border-radius: 0.37rem;
}

.btn-light:hover {
  background-color: #fff;
  border-color: #989898;
}

.btn-medium {
  font-size: 12px;
  padding: 10px 22px;
  display: inline-block;
  margin-right: 20px;
  letter-spacing: 2px;
  border: 1px solid #157af6;
  width: 100%;
}

.highlight-button:hover {
  background-color: #157af6;
  border: 2px solid #157af6;
  color: #fff;
}

.custom-control {
  position: relative;
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5rem;
}
</style>