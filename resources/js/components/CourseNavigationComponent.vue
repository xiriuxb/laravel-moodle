<template>
  <div class="container">
          <ul class="pagination justify-content-center">
            <router-link
              :to="{
                name: 'cursos-filtered',
                params: {
                  category: $route.params.category,
                  page: navigationDown(page),
                },
              }"
            >
              <li class="page-item" :class="{'page-item disabled': page==1}"><a class="page-link">Anterior</a></li>
            </router-link>
            <li v-for="index in pages" :key="index" class="page-item"
              v-bind:class="{ 'page-item active': index == page }">
              <router-link
                :to="{name: 'cursos-filtered',params: { category: $route.params.category, page: index },}">
                <a class="page-link">{{ index }}</a>
              </router-link>
            </li>
            <router-link
              :disabled="+page === +pages"
              :to="{
                name: 'cursos-filtered',
                params: {
                  category: $route.params.category,
                  page: navigationUp(page, pages),
                },
              }"
            >
              <li class="page-item" :class="{'page-item disabled': page==pages}"><a class="page-link">Siguiente</a></li>
            </router-link>
          </ul>
        </div>
</template>

<script>
export default {
    data(){
        
        return{
            page:1,
        }
    },
    mounted(){
        this.page = this.$route.params.page;
        console.log(this.$route.params.page);
    },
    props: {
        pages: {
            type: Number,
            required: true,
        },
    },
    methods: {
    navigationUp(page, maxPage) {
      return page < maxPage ? +page + 1 : +page;
    },
    navigationDown(page) {
      return page > 1 ? +page - 1 : 1;
    },
  },
}
</script>

<style>

</style>