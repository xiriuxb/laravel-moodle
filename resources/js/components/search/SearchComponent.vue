<template>
  <div class="px-2">
    <ul class="flex-row-reverse align-items-center">
      <li>
        <button class="btn" @click.prevent="showModal" title="Botón búsqueda">
          <box-icon name="search-alt-2"></box-icon>
        </button>
      </li>

      <li class="nav-item dropdown show" tabindex="-1" id="input-search">
        <input class="form-control" type="text" name="busqueda" id="busqueda" autocomplete="off" data-toggle="dropdown"
          v-model="question" placeholder="Buscar Curso" title="Búsqueda" />

        <ul class="dropdown-menu" tabindex="-1" id="respuestas">
          <li class="dropdown-item" v-if="loading && question.length >= 2">
            <loading-component :position="'relative'" :width="'200px'"></loading-component>
          </li>
          <inertia-link v-for='(item, index) in resultados' :key='index' :href="route('curso',{any:item.shortname})"
            class="dropdown-item" :class="item.shortname == 'NE' ? 'disabled' : ''" @click="question = ''">
            {{ item.fullname }}
          </inertia-link>
        </ul>
      </li>
    </ul>
    <search-modal v-if="modal" @close="hideModal"></search-modal>
  </div>
</template>

<script>
const SearchModal = () =>import( "../search/modals/SearchModal.vue");
var _debounce = require('lodash/debounce');
import LoadingComponent from "../LoadingComponent.vue"
export default {
  components: {
    SearchModal,
    LoadingComponent,
  },
  data() {
    return {
      width: window.innerWidth,
      modal: false,
      loading: false,
      question: "",
      currentItem: 0,
      resultados: [],
    };
  },

  methods: {
    getAnswer: function () {
      if (this.question.length <= 1) {
        this.resultados = []
      }
      if (this.question.length > 1) {
        var vm = this;
        vm.loading = true;
        axios
          .get(this.route('curso.busqueda', { keyword: this.question }))
          .then(function (response) {
            vm.resultados = response.data;
            if (response.data.length == 0) {
              vm.resultados = [{ fullname: "No se encontraron resultados", shortname: "NE" }];
            }
            vm.loading = false;
          })
          .catch(function (error) {
            vm.answer = "Error! Could not reach the API. " + error;
          });
      }
    },
    showModal() {
      this.modal = true;
    },
    hideModal() {
      this.modal = false;
    },
  },
  mounted() {
    document.addEventListener("keyup", this.nextItem);
  },
  created: function () {
    this.debouncedGetAnswer = _debounce(this.getAnswer, 500)
  },
  watch: {
    // whenever question changes, this function will run
    question: function (newQuestion, oldQuestion) {
      this.resultados = [];
      this.loading = true;
      this.debouncedGetAnswer();
    },
  },
};
</script>

<style scoped>
img {
  width: 100px;
}

.dropdown-menu {
  position: absolute;
  color: black;
}

@media (max-width: 1023px) {
  .nav-item.dropdown.show {
    display: none;
  }

  #input-search {
    display: none;
  }
}

@media (min-width: 1024px) {
  button.btn {
    display: none;
  }
}

input:focus+#respuestas {
  display: block;
}
</style>