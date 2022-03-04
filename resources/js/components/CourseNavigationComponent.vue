<template>
  <div class="container">
          <ul class="pagination justify-content-center">

              <li class="page-item" :class="{'page-item disabled': page==1}">
                <a class="page-link" href="#" @click="navigationDown()">Anterior</a>
              </li>
            <li v-for="index in pages" :key="index" class="page-item"
              v-bind:class="{ 'page-item active': index == page }">
                <a class="page-link" href="#" @click="$parent.page = index">{{ index }}</a>
            </li>
              <li class="page-item" :class="{'page-item disabled': page==pages}">
                <a class="page-link" href="#" @click="navigationUp()">Siguiente</a>
              </li>
          </ul>
        </div>
</template>

<script>
export default {
    props: {
        pages: {
            type: Number,
            required: true,
        },
        page: {
            type: Number,
            required: true,
        },
    },
    methods: {
    navigationUp() {
      window.scrollTo(0, 0);
      this.page < this.pages ? +this.$parent.page ++ : +this.page;
      console.log(this.$parent.page);
    },
    navigationDown() {
      window.scrollTo(0, 0);  // Scroll to top of page
      this.page > 1 ? +this.$parent.page -- : 1;
    },
  },
}
</script>

<style>

</style>