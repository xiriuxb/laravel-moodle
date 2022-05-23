<template>
  <div class="container pb-2">
    <ul class="pagination justify-content-center">

      <li class="page-item" :class="{ 'page-item disabled': currentPage == 1 }">
        <inertia-link class="page-link" :href="'/cursos/' + $parent.category + '/' + (+currentPage - 1)">Anterior</inertia-link>
      </li>
      <li v-for="index in pages" :key="index" class="page-item"
        v-bind:class="{ 'page-item active': index == currentPage }">
        <inertia-link class="page-link" :href="'/cursos/' + $parent.category + '/' + index">{{ index }}</inertia-link>
      </li>
      <li class="page-item" :class="{ 'page-item disabled': currentPage == pages }">
        <inertia-link class="page-link" :href="'/cursos/' + $parent.category + '/' + (+currentPage + 1)">Siguiente
        </inertia-link>
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
    currentPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    navigationUp() {
      window.scrollTo(0, 0);
      this.page < this.pages ? +this.$parent.page++ : +this.page;
      console.log(this.$parent.page);
    },
    navigationDown() {
      window.scrollTo(0, 0);  // Scroll to top of page
      this.page > 1 ? +this.$parent.page-- : 1;
    },
  },
}
</script>

<style scoped>
.page-item.active .page-link {
  background-color: #002e45;
}

.page-item.disabled {
  cursor: not-allowed;
}

.page-item:not(.disabled) .page-link {
  box-shadow: gray 0 0 3px 0;
}
</style>