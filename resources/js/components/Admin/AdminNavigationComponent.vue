<template>
  <nav aria-label="...">
    <ul class="pagination">
      <li class="page-item"
        :class="!link.active ? link.url == null ? 'page-item disabled' : 'page-item' : 'page-item active'"
        v-for="link in linksArray" :key="link.label">
        <a class="page-link" href="#" @click="getCourses(link.url)" tabindex="-1">
          <div v-html="link.label"></div>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    linksArray: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
</style>