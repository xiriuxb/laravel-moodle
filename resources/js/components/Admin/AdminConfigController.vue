<template>
    <div id="adminConfig" class="adminView">
        <AppHead :title="'Admin | Configuraciones'" />
        <h2>
            Configuraciones del sitio,
        </h2>
        <p>
            Por favor, si no sabe lo que hace no edite nada. Para que los cambios se vean reflejados, debe presionar el boton de actualizar. 
            En ese caso la caché sel servidor será recargada, por lo tanto las sesiones activas se cerrarán. ¡Tenga Cuidado!
        </p>
        <loading-component v-if="loadingInit"></loading-component>
        <form v-else action="">
            <div v-for="variable in form" :key="variable.name" class="form-group d-flex items-center">
                <label for="">{{ variable.campo }}</label>
                <input type="text" class="form-control" :ref="variable.name" v-model="variable.value"
                    :disabled="selected != variable.name" />
                <div id="actions" v-if="editMode && selected == variable.name" class="d-flex">
                    <button class="btn btn-outline-primary btn-acction border-0 p-0" title="Guardar"
                        @click="onClickSave(variable.config_key, variable.value, variable.name)">
                        <box-icon name="save"></box-icon>
                    </button>
                    <button class="btn btn-outline-primary btn-acction border-0 p-0" title="Cancelar"
                        @click="onClickCancel()">
                        <box-icon name="x"></box-icon>
                    </button>
                </div>
                <button class=" btn-acction" title="Editar" @click="onClickEdit(variable.name)" v-else>
                    <box-icon name="edit-alt"></box-icon>
                </button>
            </div>
        </form>
        <button v-if="!loadingInit" class="btn btn-primary" @click="updateConfig()">actualizar configuración</button>
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
            loadingInit: true,
            form: [],
            selected: null,
            editMode: false,
            selectedValue: null,
        }
    },
    created() {
        this.loadVars();
    },
    methods: {
        loadVars() {
            axios.get("/api/admin/site-config").then(response => {
                this.form = response.data;
                this.loadingInit = false;
            }).catch(
                error => {
                    this.loadingInit = false;
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
            this.editMode = false;
            this.selected = null;
            this.selectedValue = null;
            axios.post("/api/admin/site-config", {
                variable_key: id,
                variable_value: value,
                variable_name: var_name
            }).then(response => {
                this.loadVars();
                this.$toast.open({
                    message: 'Guardado',
                    type: 'success',
                    duration: 5000
                });
            }).catch(
                error => {
                    this.onClickCancel();
                    this.$toast.open({
                        message: 'Error al guardar',
                        type: 'error',
                        duration: 5000
                    });
                }
            );
        },
        updateConfig(){
            axios.post("/api/admin/site-config/update").then(response => {
                
            }).catch(
                error => {
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