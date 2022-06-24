<template>
    <div id="adminConfig" :class="{ 'disabled': loading }">
        <AppHead :title="'Admin | Configuraciones'" />
        <loading-component :backgroundColor="'rgb(0 0 0 / 29%)'" :width="'100%'" :height="'100%'" :position="'fixed'" v-if="loading">
      </loading-component>
        <h2>
            Configuraciones del sitio,
        </h2>
        <p>
            Por favor, si no sabe lo que hace no edite nada. Para que los cambios se vean reflejados, debe presionar el boton de actualizar. 
            En ese caso la caché sel servidor será recargada, por lo tanto las sesiones activas se cerrarán. ¡Tenga Cuidado!
        </p>
        <form action="">
            <div v-for="variable in form" :key="variable.name" class="form-group d-flex items-center">
                <label for="">{{ variable.campo }}</label>
                <input type="text" class="form-control" :ref="variable.name" v-model="variable.value"
                    :disabled="selected != variable.name" />
                <div id="actions" v-if="editMode && selected == variable.name" class="d-flex">
                    <button :disabled="loading" class="btn btn-outline-primary btn-acction border-0 p-0" title="Guardar"
                        @click="onClickSave(variable.config_key, variable.value, variable.name)">
                        <box-icon name="save"></box-icon>
                    </button>
                    <button class="btn btn-outline-primary btn-acction border-0 p-0" title="Cancelar"
                        @click="onClickCancel()">
                        <box-icon name="x"></box-icon>
                    </button>
                </div>
                <button :disabled="loading" class=" btn-acction" title="Editar" @click="onClickEdit(variable.name)" v-else>
                    <box-icon name="edit-alt"></box-icon>
                </button>
            </div>
        </form>
        <button v-if="!loading" :disabled="loading" class="btn btn-primary" @click="updateConfig()">
        <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Actualizar configuración
        </button>
    </div>
</template>
<script>
import Admin from "../views/Admin.vue";
import LoadingComponent from "../LoadingComponent.vue";
export default {
    layout: Admin,
    name: "admin",
    components: {
        LoadingComponent
    },
    data() {
        return {
            form: [],
            selected: null,
            editMode: false,
            selectedValue: null,
            loading: true
        }
    },
    created() {
        this.loadVars();
    },
    methods: {
        loadVars() {
            axios.get("/api/admin/site-config").then(response => {
                this.form = response.data;
                this.loading = false;
            }).catch(
                error => {
                    this.loading = false;
                    this.$toast.open({
                        message: 'Error al cargar',
                        type: 'error',
                        duration: 5000
                    });
                }
            );
        },
        onClickEdit(id) {
            this.selected = id;
            this.editMode = true;
            this.$nextTick(() => this.$refs[id][0].focus());
        },
        onClickCancel() {
            this.selected = null;
            this.editMode = false;
            this.selectedValue = null;
        },
        onClickSave(id, value, var_name) {
            this.loading = true;
            this.editMode = false;
            this.selected = null;
            this.selectedValue = null;
            axios.post("/api/admin/site-config", {
                variable_key: id,
                variable_value: value,
                variable_name: var_name
            }).then(response => {
                this.$toast.open({
                    message: 'Guardado',
                    type: 'success',
                    duration: 5000
                });
                this.loading = false;
            }).catch(
                error => {
                    this.onClickCancel();
                    this.$toast.open({
                        message: 'Error al guardar',
                        type: 'error',
                        duration: 5000
                    });
                    this.loading = false;
                }
            );
        },
        updateConfig(){
            this.loading = true;
            axios.post("/api/admin/site-config/update").then(response => {
                this.loading = false;
                this.$toast.open({
                    message: 'Actualizado',
                    type: 'success',
                    duration: 5000
                });
            }).catch(
                error => {
                    this.loading = false;
                    this.$toast.open({
                        message: 'Error al actualizar',
                        type: 'error',
                        duration: 5000
                    });
                }
            );
        }
    }
}
</script>
<style scoped>
</style>