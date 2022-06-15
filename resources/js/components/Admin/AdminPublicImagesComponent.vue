<template>
    <div class="adminView">
        <AppHead :title="'Admin | Imágenes del sitio'" />
        <h2>Administración de imágenes</h2>
        <div class="form-grup">
            <div v-if="this.errors.favicon != null" class="alert alert-danger">
                {{ this.errors.favicon[0] }}
            </div>
            <label for="favicon">Icono:</label>
            <input type="file" accept=".ico" id="favicon" class="form-control-file" @input = "favicon = $event.target.files[0]" />
            <button class="btn btn-primary" @click.prevent="onSubmitIcon()" :disabled="loading">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
                Guardar</button>
        </div>
        <div class="form-grup">
            <div v-if="this.errors.caratula != null" class="alert alert-danger">
                {{ this.errors.caratula[0] }}
            </div>
            <label for="caratula">Carátula:</label>
            <input type="file" accept=".png,.jpg" id="caratula" class="form-control-file"  @input = "caratula = $event.target.files[0]"/>
            <button class="btn btn-primary" @click.prevent="onSubmitCaratula()" :disabled="loading">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
                Guardar</button>
        </div>
        <div class="form-grup">
            <div v-if="this.errors.logo != null" class="alert alert-danger">
                {{ this.errors.logo[0] }}
            </div>
            <label for="logo">Logo:</label>
            <input type="file" accept=".png,.jpg" id="logo" class="form-control-file" @input = "logo = $event.target.files[0]" />
            <button class="btn btn-primary" @click.prevent="onSubmitLogo()" :disabled="loading">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
                Guardar</button>
        </div>
    </div>
</template>
<script>
import Admin from "../views/Admin.vue";
export default {
    layout: Admin,
    data() {
        return {
            loading: false,
            errors: [],
            favicon: null,
            caratula: null,
            logo: null,
        }
    },
    methods: {
        onSubmitIcon() {
            this.errors = [];
            this.loading = true;
            const formData = new FormData();
            if (this.favicon) formData.append('favicon', this.favicon);
            axios.post('/api/admin/images/favicon', formData).then(res => {
                this.loading = false;
                this.$toast.open({ message: 'Icono actualizado', type: 'success', duration: 5000 });
                console.log(res);
            }).catch(err => {
                this.loading = false;
                console.log(err);
                this.errors = err.response.data.errors;
                this.$toast.open({ message: 'Ocurrió un error', type: 'error', duration: 5000 });
            });
        },
        onSubmitLogo() {
            this.errors = [];
            this.loading = true;
            const formData = new FormData();
            if (this.logo) formData.append('logo', this.logo);
            axios.post('/api/admin/images/logo', formData).then(res => {
                this.loading = false;
                this.$toast.open({ message: 'Actualizado correctamente', type: 'success', duration: 5000 });
                console.log(res);
            }).catch(err => {
                this.loading = false;
                console.log(err);
                this.errors = err.response.data.errors;
                this.$toast.open({ message: 'Error al actualizar', type: 'error', duration: 5000 });
            });
        },
        onSubmitCaratula() {
            this.errors = [];
            this.loading = true;
            const formData = new FormData();
            if (this.caratula) formData.append('caratula', this.caratula);
            axios.post('/api/admin/images/caratula', formData).then(res => {
                this.loading = false;
                this.$toast.open({ message: 'Actualizado correctamente', type: 'success', duration: 5000 });
            }).catch(err => {
                this.loading = false;
                this.errors = err.response.data.errors;
                this.$toast.open({ message: 'Error al actualizar', type: 'error', duration: 5000 });
            });
        },  
    }

}
</script>
<style scoped>
</style>