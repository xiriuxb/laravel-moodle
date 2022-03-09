<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <slot name="body">
              <div class="row">
                <div class="col-11">
                  <li class="nav-item dropdown show" tabindex="-1">
                    <input
                      class="form-control"
                      type="text"
                      name="busqueda"
                      id="busqueda"
                      autocomplete="off"
                      data-toggle="dropdown"
                      v-model="$parent.question"
                      placeholder="Buscar Curso"
                    />

                    <ul
                      class="dropdown-menu show"
                      tabindex="-1"
                      id="respuestas"
                      @click="$emit('close')"
                      @keypress.enter="$emit('close')"
                    >
                      <li
                        class="dropdown-item"
                        v-if="$parent.loading && $parent.question.length >= 2"
                      >
                        <loading-component
                          :position="'relative'"
                          :width="'200px'"
                        ></loading-component>
                      </li>
                      <router-link
                        v-for="(item, index) in $parent.resultados"
                        :key="index"
                        :to="{
                          name: 'curso',
                          params: { shortname: item.shortname },
                        }"
                        class="dropdown-item"
                        :class="item.shortname == 'NE' ? 'disabled' : ''"
                      >
                        {{ item.fullname }}
                      </router-link>
                    </ul>
                  </li>
                </div>
                <div class="col-1">
                  <button class="btn" @click="$emit('close')">
                    <box-icon name="x" color="#ffffff"></box-icon>
                  </button>
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {},
  data() {
    return {
      form: {
        new_email: "",
        password: "",
      },
      errors: [],
      loading: false,
    };
  },
};
</script>

<style scoped>
input:focus + #respuestas {
  display: block;
}
.modal-mask {
  position: fixed;
  z-index: 900;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
}

.modal-container {
  margin: 0px auto;
  background-color: transparent;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  background-color: #6c2e11;
  align-items: center;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 8px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.col-1 {
  padding: 0;
}
</style>