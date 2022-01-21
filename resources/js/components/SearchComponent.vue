<template>
  <div id="search-component">
    <!-- <p>
      Ask a yes/no question:
    </p> -->
    <div>
      <input
        v-model="question"
        class="form-control"
        type="text"
        placeholder="Buscar Curso"
        aria-label="Search"
      />
      <div>
        <div id="lista" class="list-menu" v-if="question">
          <div v-for="curso in filteredQuestions" :key="curso.shortname">
            <router-link :to="{ name: 'curso', params: { shortname: curso.shortname } }">
                <div class="card-header">
                    {{ curso.fullname }}
                </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <p>{{ answer }}</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      cursos: [{ fullname: "abc" }],
      question: "",
      answer: "I cannot give you an answer until you ask a question!",
    };
  },
  computed: {
    filteredQuestions() {
      return this.cursos.filter((preg) => {
        return preg.fullname
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .normalize()
          .match(
            this.question
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .normalize()
          );
      });
    },
  },
  //   watch: {
  //     // whenever question changes, this function will run
  //     question: function (newQuestion, oldQuestion) {
  //       this.answer = 'Waiting for you to stop typing...'
  //       this.debouncedGetAnswer()
  //     }
  //   },
  //     created: function () {
  //     // _.debounce is a function provided by lodash to limit how
  //     // often a particularly expensive operation can be run.
  //     // In this case, we want to limit how often we access
  //     // yesno.wtf/api, waiting until the user has completely
  //     // finished typing before making the ajax request. To learn
  //     // more about the _.debounce function (and its cousin
  //     // _.throttle), visit: https://lodash.com/docs#debounce
  //     this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  //   },
  created() {
    axios.get("/api/cursesh").then((response) => {
      console.log(response.data.data);
      this.cursos = response.data.data;
    });
  },
  //   methods: {
  //     getAnswer: function () {
  //       if (this.question.indexOf('?') === -1) {
  //         this.answer = 'Questions usually contain a question mark. ;-)'
  //         return
  //       }
  //       this.answer = 'Thinking...'
  //       var vm = this
  //       axios.get('https://yesno.wtf/api')
  //         .then(function (response) {
  //           vm.answer = _.capitalize(response.data.answer)
  //         })
  //         .catch(function (error) {
  //           vm.answer = 'Error! Could not reach the API. ' + error
  //         })
  //     }
  //   }
};
</script>

<style scoped>
#lista {
  position: absolute;
  max-height: 200px;
  overflow-y: scroll;
  border-radius: 0.1px ;
  z-index: 10;
}
#lista div {
  color: black;
  display: block;
  background-color: #fff;
}
.card-header {
  margin-bottom: 0;
  background-color: #fff;
  cursor: pointer;
}
.list-menu {
  list-style: none;
  margin: 0;
  padding-left: 0;
}

.list-menu a {
  color: #343a40;
}
</style>