<template>
    <div id="adminConfig" :class="{ 'disabled': loading }">
        <AppHead :title="'Admin | Configuraciones'" />
        <loading-component :backgroundColor="'rgb(0 0 0 / 29%)'" :width="'100%'" :height="'100%'" :position="'fixed'" v-if="loading">
      </loading-component>
        <h2>
            Configuraciones del sitio,
        </h2>
        <p>
            Por favor, si no sabe lo que hace no edite nada. 
            <br>
            Para que los cambios se vean reflejados, debe presionar el boton de actualizar. 
            En ese caso la caché sel servidor será recargada y las sesiones activas se cerrarán. 
            <br>
            Si su host tiene otro método para la configuración de variables de entorno use ese método.
            <br>
            Si recarga esta página tras editar una variable pero sin "Actualizar configuración" la variable se mostrará con el valor anterior pero estará guardado el nuevo valor.
            <br>
            ¡Tenga Cuidado!
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
            <form v-for="variable in form" :key="variable.name" class="form-group items-center border-black border-r-2">
                <div class="d-flex items-center px-2">
                    <label :for="variable.name">{{ variable.campo }}</label>
                    <input type="text" class="form-control" :ref="variable.name" v-model="variable.value"
                        :disabled="selected != variable.name" :id="variable.name"/>
                    <div id="actions" v-if="editMode && selected == variable.name" class="d-flex">
                        <button :disabled="loading" class="btn btn-outline-primary btn-acction border-0 p-0" title="Guardar"
                            @click="onClickSave(variable.config_key, variable.value, variable.name)">
                            <box-icon name="save"></box-icon>
                        </button>
                        <button class="btn btn-outline-danger border-0 p-0" title="Cancelar"
                            @click="onClickCancel()">
                            <box-icon name="x"></box-icon>
                        </button>
                    </div>
                    <button :disabled="loading" title="Editar" @click="onClickEdit(variable.name)" v-else>
                        <box-icon name="edit-alt"></box-icon>
                    </button>
                </div>
                <input v-model="password" placeholder="Su contraseña" v-if="editMode && selected == variable.name" type="password" class="form-control" name="password" id="password" spellcheck="false">
            </form>
        </div>
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
            loading: true,
            password: null,
        }
    },
    created() {
        this.loadVars();
    },
    methods: {
        loadVars() {
            axios.get(this.route('admin.site.index'))
            .then( ({data}) => {
                this.form = data;
            })
            .catch(
                error => {
                    this.$toast.open({
                        message: 'Error al cargar '+error,
                        type: 'error',
                    });
                }
            )
            .finally(()=>{this.loading = false;});
        },
        onClickEdit(id) {
            this.selected = id;
            this.editMode = true;
            this.password = null;
            this.$nextTick(() => this.$refs[id][0].focus());
        },
        onClickCancel() {
            this.selected = null;
            this.editMode = false;
            this.selectedValue = null;
        },
        onClickSave(id, value, var_name) {
            this.loading = true;
            this.onClickCancel();
            axios.post(this.route('admin.site.update'), {
                variable_key: id,
                variable_value: value,
                variable_name: var_name,
                password: this.password,
            }).then(() => {
                this.$toast.open('Guardado');
            }).catch(
                () => {
                    this.onClickCancel();
                    this.$toast.open({
                        message: 'Error al guardar',
                        type: 'error'
                    });
                }
            ).finally(()=>{
                this.loading = false;
                this.password = null;
            });
        },
        updateConfig(){
            this.loading = true;
            axios.post(this.route('admin.site.update-config'))
            .then(() => {
                this.$toast.open('Actualizado');
            })
            .catch(
                () => {
                    this.$toast.open({
                        message: 'Error al actualizar',
                        type: 'error',
                    });
                }
            )
            .finally(()=>{this.loading = flase;});
        }
    }
}
</script>
<style scoped>
</style>