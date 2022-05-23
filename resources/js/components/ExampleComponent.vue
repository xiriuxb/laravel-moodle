<template>
  <div class="container">
    <div class="dropdown">
      <input class="dropdown-toggle" data-toggle="dropdown" type="text" name="search" placeholder="Buscar xD"
        v-model="question" id="dropdownMenuSearch" autocomplete="off" />
      <div class="dropdown-menu" id="respuestas">
        <loading-component v-if="loading" :position="'relative'" class="dropdown-item"></loading-component>
        <div>
          <div class="dropdown-item" v-if="!users">
            No se encontraron resultados
          </div>
          <div class="dropdown-item" v-for="user in users" :key="user.id" v-else>
            <div>
              {{ user.fullname }}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import LoadingComponent from '../components/LoadingComponent.vue';
export default {
  components: {
    LoadingComponent
  },
  data() {
    return {
      loading: false,
      question: "",
      users: [],
    };
  },
  watch: {
    // whenever question changes, this function will run
    question: function (newQuestion, oldQuestion) {
      this.answer = "Waiting for you to stop typing...";
      this.users = [];
      this.loading = true;
      this.debouncedGetAnswer();
    },
  },
  created: function () {
    // _.debounce is a function provided by lodash to limit how
    // often a particularly expensive operation can be run.
    // In this case, we want to limit how often we access
    // yesno.wtf/api, waiting until the user has completely
    // finished typing before making the ajax request. To learn
    // more about the _.debounce function (and its cousin
    // _.throttle), visit: https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer: function () {
      if (this.question.length < 0) {
        this.users = []
      }
      if (this.question.length > 1) {
        var vm = this;
        vm.loading = true;
        axios
          .get("courses/search", { params: { keyword: this.question } })
          .then(function (response) {
            //vm.answer = _.capitalize(response.data);
            vm.users = response.data;
            console.log(vm.users);
            vm.loading = false;
          })
          .catch(function (error) {
            vm.answer = "Error! Could not reach the API. " + error;
          });
      }
    },
    //   getAnswer: function () {
    //     if (this.question.indexOf('?') === -1) {
    //       this.answer = 'Questions usually contain a question mark. ;-)'
    //       return
    //     }
    //     this.answer = 'Thinking...'
    //     var vm = this
    //     axios.get('https://yesno.wtf/api')
    //       .then(function (response) {
    //         vm.answer = _.capitalize(response.data.answer)
    //       })
    //       .catch(function (error) {
    //         vm.answer = 'Error! Could not reach the API. ' + error
    //       })
    //   }
  },
};
</script>

<style scoped>
body {
  background-color: aqua;
}

#respuestas {
  border: 2px solid;
}

#respuestas {
  min-width: 200px;
  position: absolute;
  max-height: 200px;
  overflow-y: auto;
  border-radius: 0.1px;
  z-index: 10;
}
</style>
