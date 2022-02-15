<template>
  <div class="container">
    <h3>Administración de testimonios</h3>
    <loading-component v-if='loading'></loading-component>
    <div>
      <button class="btn btn-primary" id="btnNewComment" @click="btnAction()" ref="btnNewComment" 
      style="max-width: 240px" :disabled="loading" v-bind:class="isFormHidden ?'btn btn-primary':'btn btn-secondary'">
        {{isFormHidden ? 'Nuevo testimonio':'Cancelar/Ocultar'}}
      </button>
    </div>
    <form class="container" v-if="!isFormHidden" style="dislplay: none" v-on:submit.prevent="save">
      
      <div class="form-group">
        <label for="comentarioEstudiante">Nombre Estudiante:</label>
        <input type="text" v-model="form.autor" class="form-control"
          id="nombreEstudiante" ref="nombreEstudiante" required/>
        <div v-if="error != ''" class="alert alert-danger">
          {{ this.errors.autor[0] }}
        </div>
      </div>
      <div class="form-group">
        <label for="comentarioEstudiante">Comentario:</label>
        <textarea class="form-control" ref="comentarioEstudiante" v-model="form.texto"
          id="comentarioEstudiante" rows="3" required></textarea>
        <div v-if="this.errors.texto != null" class="alert alert-danger">
          {{ this.errors.texto[0] }}
        </div>
      </div>
      <label class="form-check form-switch">
        <input class="form-check-input" type="checkbox" ref="is_active" v-model="form.is_active"/>
        <div class="form-check-label" for="isActive">¿Comentario visible?</div>
      </label>
      <div class="row">
        <div class="col">
          <button type="submit" class="btn btn-primary" :disabled="loading">
            {{ !editMode ? 'Guardar':'Guardar Cambios' }}
          </button>
        </div>
        <div class="col">
          <button class="btn btn-danger" @click.prevent="resetInput" :disabled="loading">
            Cancelar
          </button>
        </div>
      </div>
    </form>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <!-- <th scope="col">#</th> -->
            <th scope="col">Estudiante</th>
            <th scope="col">Contenido</th>
            <th scope="col">Activo?</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="comment in comments" v-bind:key="comment.id">
            <!-- <th scope="row">{{ comment.id }}</th> -->
            <td>
              <p>{{ comment.autor }}</p>
            </td>
            <td>{{ comment.texto }}</td>
            <td>{{ comment.is_active == 1 ? "Si" : "No" }}</td>
            <td>
              <button class="btn btn-outline-primary btn-acction" title="Editar" @click="onClickEdit(comment.id)">
                <box-icon name="edit-alt"></box-icon>
              </button>
              <button
                class="btn btn-outline-danger btn-acction" title="Eliminar" @click="deleteComment(comment.id)">
                <box-icon name="trash"></box-icon>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import LoadingComponent from "../LoadingComponent.vue";
export default {
  components: { LoadingComponent },
  name: "AdminCommentComponent",
  data() {
    return {
      apiRoute:'/api/testimonials/',
      id: 0,
      isFormHidden: true,
      editMode: true,
      loading: true,
      form: {
        autor: "",
        texto: "",
        is_active: false,
      },
      error: '',
      errors:[],
      comments: [],
    };
  },
  methods: {
    btnAction() {
      this.isFormHidden = !this.isFormHidden;
      this.resetInput();
      console.log(this.editMode);
    },

    update(){
      this.loading = true;
      axios.put(this.apiRoute + this.id, this.form).then(()=>{
        this.loading = false;
        this.isFormHidden = true;
        this.resetInput();
        this.$toast.open({
          message: 'Comentario actualizado correctamente',
          type: 'success',
          duration: 5000
        });
      }).catch(error => {
        this.loading = false;
        this.$toast.open({
          message: 'Error al actualizar el comentario',
          type: 'error',
          duration: 5000
        });
      });
    },

    save() {
      if (this.editMode) {
        this.update();
        this.loadComments();
      } else {
        this.loading = true;
        axios
          .post(this.apiRoute, this.form)
          .then(() => {
            //this.errors = [];
            this.$toast.open({
              message: "Comentario guardado correctamente",
              type: "success",
              duration: 5000,
            });
            this.loadComments();
          })
          .catch(
            //this.error = response.message
          );
        this.resetInput();
      }
    },

    async loadComments() {
      this.loading = true;
      await axios.get(this.apiRoute)
        .then((response) => {
          this.comments = response.data.data;
          this.loading = false;
        })
        .catch((err) => {
          this.$toast.open({message: err.message, type: "error",position: "top-right",});
        });
    },

    resetInput() {
      this.editMode = false;
      this.form.autor = this.form.texto = "";
      this.form.is_active= false;
    },

    deleteComment(index) {
      axios
        .delete(this.apiRoute.concat(index))
        .then((response) => {
          //console.log(response);
          this.loadComments();
        })
        .catch((err) => {
          //this.errors = err.response.errors;
        });
      this.resetInput();
    },

    getComment(index) {
      this.isFormHidden = false;
      this.loading = true;
      scrollY = 0;
      axios.get(this.apiRoute.concat(index))
        .then((response) => {
          this.id = response.data.data.id;
          this.form.autor = response.data.data.autor;
          this.form.texto = response.data.data.texto;
          this.form.is_active = response.data.data.is_active;
          this.loading= false;
        })
        .catch((err) => {
          //this.errors = err.response.errors;
        });
    },

    onClickEdit(index) {
      this.getComment(index);
      this.editMode = true;
      console.log(this.editMode);
    },
  },
  created() {
    this.loadComments();
  },
  
};
</script>

<style scoped>
.btn-acction {
  padding: 0.2rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
  max-width: 33px;
}
.form-check-label {
  cursor: pointer;
}
form{
  padding-block: 10px;
}
</style>