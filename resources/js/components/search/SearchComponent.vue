<template>
<div class="container-fluid">
  <ul class="flex-row-reverse align-items-center navbar-nav">
    <li>
      <button class="btn" @click.prevent="showModal">
        <box-icon name="search-alt-2"></box-icon>
      </button>
    </li>

    <li class="nav-item dropdown show" tabindex="-1">
        <input
         class="form-control"
          type="text"
          name="busqueda"
          id="busqueda"
          autocomplete="off"
          data-toggle="dropdown"
          v-model="question"
          placeholder="Buscar Curso"
        />

         <ul class="dropdown-menu" tabindex="-1" id="respuestas">
          <li class="dropdown-item" v-if="loading&&question.length>=2">
            <loading-component :position="'relative'" :width="'200px'"></loading-component>
          </li>
           <router-link  v-for='(item,index) in resultados' :key='index' :to="{name:'curso',params:{shortname:item.shortname}}"
           class="dropdown-item" :class="item.shortname == 'NE'?'disabled':''" @click="question=''">
           <!-- <router-link @click="question=''"
           :to="{name:'curso',params:{shortname:'CDZP'}}"> -->
            {{item.fullname}}
           </router-link>
         </ul>
    </li>
  </ul>
  <search-modal v-if="modal" @close="hideModal"></search-modal>
</div>
</template>

<script>
import SearchModal from "../search/modals/SearchModal.vue";
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
      resultados:[],
    };
  },
  
  methods: {
    getAnswer: function () {
        if(this.question.length <= 1){
            this.resultados = []
        }
      if (this.question.length > 1) {
        var vm = this;
        vm.loading = true;
        axios
          .get("/courses/search",{params:{keyword:this.question}})
          .then(function (response) {
            //vm.answer = _.capitalize(response.data);
            vm.resultados = response.data;
            if (response.data.length == 0) {
              vm.resultados = [{fullname: "No se encontraron resultados", shortname: "NE"}];
            }
            console.log(vm.resultados);
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
    nextItem () {
    	if (event.keyCode == 38 && this.currentItem > 0) {
      	this.currentItem--
      } else if (event.keyCode == 40 && this.currentItem < this.resultados.length - 1) {
      	this.currentItem++
      }
    },
  },
  mounted () {
  document.addEventListener("keyup", this.nextItem);
  },
  watch: {
    // whenever question changes, this function will run
    question: function (newQuestion, oldQuestion) {
      this.resultados=[];
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
.dropdown-menu{
  position: absolute;
  color: black;
}
@media (max-width: 891px) {
  .nav-item.dropdown.show{
    display: none;
  }
}
@media (min-width: 892px) {
  button.btn{
    display: none;
  }
}
input:focus + #respuestas{
  display: block;
}
</style>