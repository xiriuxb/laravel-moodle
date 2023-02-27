<template>
  <div :class="{ 'disabled': loading }">
    <AppHead :title="'Admin | Testimonios'" />
    <h2>Administración de testimonios</h2>
    <loading-component v-if='loading'></loading-component>
    <div>
      <button class="btn btn-primary" id="btnNewTestimonial" @click="btnAction()" ref="btnNewTestimonial" :disabled="loading"
        v-bind:class="isFormHidden ? 'btn btn-primary' : 'btn btn-secondary'">
        {{ isFormHidden ? 'Nuevo testimonio' : 'Cancelar/Ocultar' }}
      </button>
    </div>
    <form class="container" v-if="!isFormHidden" style="dislplay: none" v-on:submit.prevent="save">
      <div class="form-group">
        <label for="nombreEstudiante">Nombre Estudiante:</label>
        <input type="text" v-model="form.autor" class="form-control" id="nombreEstudiante" ref="nombreEstudiante"
          required />
        <div v-if="this.errors.autor != null" class="alert alert-danger">
          {{ this.errors.autor[0] }}
        </div>
      </div>
      <div class="form-group">
        <label for="comentarioEstudiante">Testimonio:</label>
        <textarea class="form-control" ref="comentarioEstudiante" v-model="form.texto" id="comentarioEstudiante"
          rows="3" required></textarea>
        <div v-if="this.errors.texto != null" class="alert alert-danger">
          {{ this.errors.texto[0] }}
        </div>
      </div>
      <div class="form-group">
        <label for="studentPhoto">Foto del estudiante: (Max. 128Kb)</label>
        <input type="file" accept=".png,.jpg,.jpeg" @input="form.file = $event.target.files[0]"
          class="form-control-file" id="studentPhoto" name="studentPhoto" ref="fileupload">
        <div v-if="this.errors.file != null" class="alert alert-danger">
          {{ this.errors.file[0] }}
        </div>
      </div>
      <div v-if="editMode && !loading">
        <b>Imagen:</b> {{ file_name ? 'Sí (' + file_name + ')' : 'No' }}
        <button class="btn btn-secondary" @click="deleteImage()" v-if="file_name">Eliminar imagen</button>
      </div>
      <label class="form-check form-switch">
        <input class="form-check-input" type="checkbox" ref="is_active" v-model="form.is_active" />
        <div class="form-check-label" for="isActive">¿Comentario visible?</div>
      </label>
      <div class="row">
        <div class="col">
          <button type="submit" class="btn btn-primary" :disabled="loading">
            {{ !editMode ? 'Guardar' : 'Guardar Cambios' }}
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
          <tr v-for="testimonial in testimonials" v-bind:key="testimonial.id">
            <td>
              <p>{{ testimonial.autor }}</p>
            </td>
            <td>{{ testimonial.texto }}</td>
            <td>{{ testimonial.is_active == 1 ? "Si" : "No" }}</td>
            <td>
              <button class="btn btn-outline-primary btn-acction" title="Editar" @click="onClickEdit(testimonial.id)">
                <box-icon name="edit-alt"></box-icon>
              </button>
              <button class="btn btn-outline-danger btn-acction" title="Eliminar" @click="deleteTestimonial(testimonial.id)">
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

import axios from "axios";
import LoadingComponent from "../LoadingComponent.vue";
import Admin from "../views/Admin.vue";
export default {
  layout: Admin,
  components: { LoadingComponent },
  name: "AdminTestimonialsComponent",
  data() {
    return {
      id: 0,
      isFormHidden: true,
      editMode: true,
      loading: true,
      file_name: "",
      form: {
        autor: "",
        texto: "",
        is_active: false,
        file: null,
      },
      errors: [],
      testimonials: [],
    };
  },
  methods: {
    btnAction() {
      this.isFormHidden = !this.isFormHidden;
      this.resetInput();
    },

    update() {
      this.loading = true;
      this.errors = [];
      let formData = new FormData();
      formData.append("_method", "put");
      formData.append('autor', this.form.autor);
      formData.append('texto', this.form.texto);
      formData.append('is_active', this.form.is_active);
      if (this.form.file != null) formData.append('file', this.form.file);
      axios.post(this.route('testimonials.update', { testimonial: this.id }), formData)
      .then(() => {
        this.isFormHidden = true;
        this.resetInput();
        this.$toast.open('Comentario actualizado correctamente');
        this.loadTestimonials();
      })
      .catch(error => {
        this.errors = error.response.data.errors;
        this.$toast.open({ message: 'Error al actualizar el comentario', type: 'error'});
      })
      .finally(()=>{this.loading = false});
    },

    deleteImage(){
      this.loading = true;
      axios.post(this.route('admin.testimonials.deleteImage',{id:this.id}))
      .then(()=>{
        this.$toast.open('Imagen eliminada');
        this.getTestimonial(this.id);
      })
      .catch(()=>{
        this.loading = false;
        this.$toast.open({ message: 'Error al eliminar imagen', type: 'error'});
      });
    },

    save() {
      if (this.editMode) {
        this.update();
      } else {
        this.loading = true;
        let formData = new FormData();
        formData.append('autor', this.form.autor);
        formData.append('texto', this.form.texto);
        formData.append('is_active', this.form.is_active);
        if (this.form.file != null) formData.append('file', this.form.file);
        axios
          .post(this.route('testimonials.store'), formData)
          .then(() => {
            this.errors = [];
            this.$toast.open("Comentario guardado correctamente");
            this.resetInput();
            this.loadTestimonials();
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
            this.loading = false;
            this.$toast.open({ message: 'Ocurrió un error', type: 'error' });
          }
          );
      }
    },

    async loadTestimonials() {
      this.loading = true;
      await axios.get(this.route('testimonials.index'))
        .then(({data}) => {
          this.testimonials = data.data;
          this.loading = false;
        })
        .catch((err) => {
          this.$toast.open({ message: err.message, type: "error" });
        });
    },

    resetInput() {
      this.editMode = false;
      this.form.autor = this.form.texto = "";
      this.form.is_active = false;
      this.form.file = null;
      this.$refs.fileupload.value = "";
      this.filename = "";
    },

    deleteTestimonial(index) {
      window.scrollTo(0, 0);
      this.editMode = false;
      this.loading = true;
      axios
        .delete(this.route('testimonials.destroy', { testimonial: index }))
        .then(() => {
          this.loadTestimonials();
          this.$toast.open('Testimonio eliminado');
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
          this.$toast.open({ message: "Error al eliminar", type: "error"});
        });
      this.resetInput();
    },

    getTestimonial(index) {
      this.isFormHidden = false;
      this.loading = true;
      axios.get(this.route('testimonials.show', { testimonial: index }))
        .then((response) => {
          this.id = response.data.data.id;
          this.form.autor = response.data.data.autor;
          this.form.texto = response.data.data.texto;
          this.form.is_active = response.data.data.is_active == 1;
          this.file_name = response.data.data.file;
          this.loading = false;
        })
        .catch((err) => {
          this.$toast.open({ message: "Error al cargar", type: "error" });
        });
    },

    onClickEdit(index) {
      window.scrollTo(0, 0);
      this.getTestimonial(index);
      this.editMode = true;
    },
  },
  created() {
    this.loadTestimonials();
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

form {
  padding-block: 10px;
}
</style>