<template>
    <div :class="{ 'disabled': loading }">
        <AppHead :title="'Admin | Imágenes del sitio'" />
        <loading-component :backgroundColor="'rgb(0 0 0 / 29%)'" :width="'100%'" :height="'100%'" :position="'fixed'" v-if="loading">
      </loading-component>
        <h2>Administración de imágenes</h2>
        <div class="form-group">
            <label for="favicon">Icono: (Máximo 64KB)</label>
            <input type="file" accept=".ico" id="favicon" class="form-control-file"
                @input="favicon = $event.target.files[0]" />
            <button class="btn btn-primary" @click.prevent="onSubmitIcon()" :disabled="loading">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
                Guardar</button>
        </div>
        <div class="form-group">
            <label for="caratula">Carátula: (Máximo 512KB)</label>
            <input type="file" accept=".png,.jpg" id="caratula" class="form-control-file"
                @input="caratula = $event.target.files[0]" />
            <button class="btn btn-primary" @click.prevent="onSubmitImage('caratula',caratula)" :disabled="loading">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
                Guardar</button>
        </div>
        <div class="form-group">
            <label for="logo">Logo: (Máximo 512KB)</label>
            <input type="file" accept=".png,.jpg" id="logo" class="form-control-file"
                @input="logo = $event.target.files[0]" />
            <button class="btn btn-primary" @click.prevent="onSubmitImage('logo', logo)" :disabled="loading">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
                Guardar</button>
        </div>
        <div class="form-group">
            <label for="logo">Imagen para cursos sin imagen: (Máximo 512KB)</label>
            <input type="file" accept=".png,.jpg" id="default_course_image" class="form-control-file"
                @input="default_course_image = $event.target.files[0]" />
            <button class="btn btn-primary" @click.prevent="onSubmitImage('default_course_image',default_course_image)" :disabled="loading">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
                Guardar</button>
        </div>
        <div class="form-group">
            <label for="logo">Imagen de la vista de ingreso: (Máximo 512KB)</label>
            <input type="file" accept=".png,.jpg" id="login_view" class="form-control-file"
                @input="login_view = $event.target.files[0]" />
            <button class="btn btn-primary" @click.prevent="onSubmitImage('login_view',login_view)" :disabled="loading">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
                Guardar</button>
        </div>
    </div>
</template>
<script>
import Admin from "../views/Admin.vue";
import LoadingComponent from '../../components/LoadingComponent.vue';
export default {
    layout: Admin,
    components:{
        LoadingComponent
    },
    data() {
        return {
            loading: false,
            errors: [],
            favicon: null,
            caratula: null,
            logo: null,
            default_course_image: null,
            login_view: null,
        }
    },
    methods: {
        onSubmitIcon() {
            this.errors = [];
            this.loading = true;
            let formData = new FormData();
            formData.append('favicon', this.favicon);
            axios.post(this.route('admin.images.favicon'), formData).then(res => {
                this.loading = false;
                this.$toast.open({ message: 'Icono actualizado', type: 'success', duration: 5000 });
            }).catch(err => {
                this.loading = false;
                this.errors = err.response.data.errors;
                this.$toast.open({ message: `Error-\n${this.errors.favicon[0]}`, type: 'error', duration: 5000 });
            });
        },
        onSubmitImage(nombre_imagen, file) {
            this.errors = [];
            this.loading = true;
            let formData = this.makeFormData(nombre_imagen, file)
            axios.post(this.route('admin.images'), formData).then(res => {
                this.loading = false;
                this.$toast.open({ message: 'Actualizado correctamente', type: 'success', duration: 5000 });
            }).catch(err => {
                this.loading = false;
                this.errors = err.response.data.errors;
                this.$toast.open({ message: `Error-\n${this.errors.imagen[0]}`, type: 'error', duration: 5000 });
            });
        },
        makeFormData(nombre_imagen, file) {
            let formData = new FormData();
                formData.append('imagen', file);
                formData.append('image_name', nombre_imagen)
            return formData;
        }
    }

}
</script>
<style scoped>
.form-group{
    border-bottom: solid 1px;
}
</style>