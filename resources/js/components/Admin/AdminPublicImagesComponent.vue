<template>
    <div :class="{ 'disabled': loading }">
        <AppHead :title="'Admin | Imágenes del sitio'" />
        <loading-component :backgroundColor="'rgb(0 0 0 / 29%)'" :width="'100%'" :height="'100%'" :position="'fixed'"
            v-if="loading">
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
        <br>
        <div v-for="image in images" :key="image.nombre" class="form-group">
            <label :for="image.nombre">{{image.descripcion}}</label>
            <input type="file" accept=".png,.jpg,.webp" :id="image.nombre" class="form-control-file"
                @input="image.value = $event.target.files[0]" />
            <button class="btn btn-primary" @click.prevent="onSubmitImage(image.nombre, image.value)" :disabled="loading">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
                Guardar</button>
        </div>
    </div>
</template>
<script>
import Admin from "../views/Admin.vue";
import LoadingComponent from '../../components/LoadingComponent.vue';
import { Inertia } from "@inertiajs/inertia";
export default {
    layout: Admin,
    components: {
        LoadingComponent
    },
    data() {
        return {
            loading: false,
            errors: [],
            favicon: null,
            images:[
                {
                    nombre:'caratula_im',
                    descripcion:'Carátula (Imagen): (Máximo 512KB)',
                    value:null,
                },
                {
                    nombre:'caratula_im_logged',
                    descripcion:'Carátula (Imagen cuando a ingresado): (Máximo 512KB)',
                    value:null,
                },
                {
                    nombre:'caratula_back',
                    descripcion:'Carátula (Background)[Sin uso]: (Máximo 512KB)',
                    value:null,
                },
                {
                    nombre:'logo',
                    descripcion:'Logo: (Máximo 512KB)',
                    value:null,
                },
                {
                    nombre:'default_course_image',
                    descripcion:'Imagen para cursos sin imagen: (Máximo 512KB)',
                    value:null,
                },
                {
                    nombre:'login_view',
                    descripcion:'Imagen de la vista de ingreso: (Máximo 512KB)',
                    value:null,
                },
                {
                    nombre:'email_notice_back',
                    descripcion:'Imagen de pantalla de nitificación de email: (Máximo 512KB)',
                    value:null,
                },
            ],
            caratula_im: null,
            caratula_back: null,
            logo: null,
            default_course_image: null,
            login_view: null,
            email_notice_back: null,
            caratula_im_logged:null
        }
    },
    methods: {
        onSubmitIcon() {
            this.errors = [];
            this.loading = true;
            let formData = new FormData();
            formData.append('favicon', this.favicon);
            axios.post(this.route('admin.images.favicon'), formData)
            .then(() => {
                this.$toast.open('Icono actualizado');
                this.reloadComponent();
            })
            .catch(err => {
                this.loading = false;
                this.errors = err.response.data.errors;
                this.$toast.open({ message: `Error-\n${this.errors.favicon[0]}`, type: 'error'});
            });
        },
        onSubmitImage(nombre_imagen, file) {
            this.errors = [];
            this.loading = true;
            let formData = this.makeFormData(nombre_imagen, file)
            axios.post(this.route('admin.images'), formData).then(() => {
                this.$toast.open('Actualizado correctamente');
                this.reloadComponent();
            }).catch(err => {
                this.loading = false;
                this.errors = err.response.data.errors;
                this.$toast.open({ message: `Error-\n${this.errors.imagen[0]}`, type: 'error' });
            });
        },
        makeFormData(nombre_imagen, file) {
            let formData = new FormData();
            formData.append('imagen', file);
            formData.append('image_name', nombre_imagen)
            return formData;
        },
        reloadComponent(){
            Inertia.visit(this.route(this.route().current()));
        }
    }
}
</script>
<style scoped>
.form-group {
    border-bottom: solid 1px;
}
</style>