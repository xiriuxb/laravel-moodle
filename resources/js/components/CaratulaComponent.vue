<template>
  <section>
    <div class="img-fluid">
      <div class="flex flex-wrap items-center px-10 py-10 pt-[120px]" id="caratula">
        <div class="w-full md:w-1/2 md:px-3 relative flex flex-col items-center">
          <h1 class="font-bold text-orange-500 md:text-5xl text-3xl xl:self-start ">{{ titulo1 }}</h1>
          <p class="self-center md:self-start text-2xl font-bold text-orange-200 align-baseline">Busca un curso</p>
          <p class="self-center md:self-start text-2xl font-bold text-orange-200">
            O mira nuestro listado de cursos.
            <inertia-link
              class="flex items-center font-bold w-full px-3 py-2 my-3 text-lg text-white border-2 border-orange-400 bg-[#002e45ab] rounded-md sm:mb-0 hover:bg-[#002e45] sm:w-auto"
              as="button" type="button" :href="'/cursos/all'">
              Ir a cursos
              <span>
                <box-icon class="block" name='right-arrow-alt' color='#fff'></box-icon>
              </span>
            </inertia-link>
          </p>
        </div>
        <div class="w-full md:w-1/2 filter brightness-100" v-if="!$page.props.auth.user">
          <registro-component></registro-component>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RegistroComponent from "./RegistroComponent.vue";
import SearchComponent from "./search/SearchComponent.vue";

export default {
  name: "CaratulaComponent",
  components: { RegistroComponent, SearchComponent },
  data() {
    return {
      titulo1: "Aprende con nosotros",
    };
  },
};
</script>

<style scoped>
.img-fluid {
  position: relative;
}

.img-fluid::before {
  content: "";
  width: 100%;
  height: 100%;
  background-image: url("/images/caratula.png");
  filter: brightness(56%);
  position: absolute;
  background-repeat: repeat;
  z-index: 0;
}

.img-fluid {
  min-height: 400px;
}
</style>