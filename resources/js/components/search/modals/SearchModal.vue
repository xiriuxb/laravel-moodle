<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <slot name="body">
              <div class="d-flex">
                <div class="col-11">
                  <li class="nav-item dropdown show" tabindex="-1">
                    <input class="form-control" type="text" name="inputBusqueda" id="inputBusqueda" autocomplete="off" ref="inputBusqueda"
                      data-toggle="dropdown" v-model="$parent.question" placeholder="Buscar Curso" title="Búsqueda" />
                    <ul class="dropdown-menu" tabindex="-1" id="respuestas"
                      @click="$emit('close') ;$parent.question = ''"
                      @keypress.enter="$emit('close'); $parent.question = ''">
                      <li class="dropdown-item" v-if="$parent.loading && $parent.question.length >= 2">
                        <loading-component :position="'relative'" :width="'200px'"></loading-component>
                      </li>
                      <inertia-link v-for="(item, index) in $parent.resultados" :key="index" :href="route('curso',{any:item.shortname})"
                       class="dropdown-item" :class="item.shortname == 'NE' ? 'disabled' : ''" >
                        {{ item.fullname }}
                      </inertia-link>
                    </ul>
                  </li>
                </div>
                <div class="col-1">
                  <button class="btn" @click="$emit('close')" title="Cerrar">
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
import LoadingComponent from "../../LoadingComponent.vue";
export default {
  components: {
    LoadingComponent,
  },
  methods: {},
  created(){
    this.$nextTick(()=>{this.$refs.inputBusqueda.focus();});
  },
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
input:focus+#respuestas {
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
}

.modal-body {
  margin: 8px 0;
}


.col-1 {
  padding: 0;
}
</style>