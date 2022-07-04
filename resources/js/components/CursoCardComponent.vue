<template>
  <div class="col-12 col-lg-4 col-md-6 col-sm-6 pb-2">
    <inertia-link class="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
      :href="'/curso/' + curso.shortname">
      <div class="relative pb-48 overflow-hidden">
        <img class="absolute inset-0 h-full w-full object-cover" v-bind:src="image"
          :alt="'Imagen curso-' + curso.fullname" loading="lazy" />
      </div>
      <div class="card-body">
        <span
          class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">{{
              curso.category
          }}</span>
        <h5 class="mt-2 mb-2  font-bold text-slate-900">{{ curso.fullname }}</h5>
        <p class="pb-2" v-html="curso.summary"></p>
        <div class="text-right border-t border-l-sky-900 text-base text-gray-700 py-3">
          ${{ curso.precio }} USD
        </div>
      </div>
    </inertia-link>
  </div>
</template>

<script>
import LoadingComponent from './LoadingComponent.vue';
export default {
  components: {
    LoadingComponent,
  },
  props: {
    curso: Object,
    moodleUrl: String,
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    image() {
      return this.curso.filename ? this.moodleUrl + 'pluginfile.php/' + this.curso.context + '/course/overviewfiles/' + this.curso.filename : '/images/default_course_image.png';
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #777;
}

.card-body {
  padding: 10px;
  padding-bottom: 0 !important;
}

a:hover img {
  transform: scale(1.05);
}

img {
  transition: transform .3s ease-in-out;
}
</style>