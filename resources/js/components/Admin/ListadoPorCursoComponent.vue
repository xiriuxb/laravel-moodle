<template>
    <div :class="{ 'disabled': loading }">
        <LoadingComponent v-if="loading" :width="'100%'" :backgroundColor="'rgb(0 0 0 / 29%)'" :height="'100%'"
            :position="'fixed'"></LoadingComponent>
        <AppHead :title="'Admin | Listado Curso'" />
        <h2>
            Listado por curso
        </h2>
        <div class="filters">
            <div class="select-group">
                <select v-model="statusFilter">
                    <option value="only_accepted">Solo aceptados</option>
                    <option value="all">Todo</option>
                </select>
                <select v-model="timeFilter">
                    <option value=1>1 mes</option>
                    <option value=3>3 meses</option>
                    <option value=0>Todo</option>
                </select>
            </div>
            <div>
                <a :href="route('admin.cursos.reporte',{ shortname: this.route().params.id, order_by: this.orderBy, asc_desc: this.ascDesc, status_filter:this.statusFilter, time_filter:this.timeFilter })" target="_blank">Generar reporte</a>
            </div>
        </div>
        <h3><b>Curso: </b>{{ curso }}</h3>
        <h3><b>Total matriculas: </b> {{ usuarios_total }}</h3>
        <h4 v-if="usuarios_aceptados != 0"><b>Total aceptados: </b> {{ usuarios_aceptados }}</h4>
        <h4 v-if="usuarios_rechazados != 0"><b>Total rechazados: </b> {{ usuarios_rechazados }}</h4>
        <h4 v-if="usuarios_en_revision != 0"><b>Total en revisión: </b> {{ usuarios_en_revision }}</h4>
        <h4 v-if="usuarios_cancelados != 0"><b>Total cancelados: </b> {{ usuarios_cancelados }}</h4>
        <h4><b>Total pagos (USD): </b> {{ total_pagos }}</h4>
        <h4><b>Profesor(es):</b></h4>
        <ul>
            <li v-for="profesor in profesores">{{profesor.fullname}}</li>
        </ul>

        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>
                        <div @click="orderBy='last_name'; asc=!asc">Estudiante</div>
                    </th>
                    <th>
                        <div @click="orderBy='nombre'; asc=!asc">Estado</div>
                    </th>
                    <th>Costo</th>
                    <th>
                        <div @click="orderBy='createdat'; asc=!asc">Fecha</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="user.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ `${user.last_name} ${user.name}` }} <span v-if="user.deleted == 1"> (Eliminado)</span></td>
                    <td>{{ user.nombre=="aprobada" ?`Activo`:`${user.nombre}` }}</td>
                    <td>{{ user.amount ? `${user.amount}` : `Gratis` }}</td>
                    <td>{{ user.createdat.substr(0, user.createdat.indexOf(' ')) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import Admin from '../views/Admin.vue'
import LoadingComponent from '../LoadingComponent.vue'
export default {
    layout: Admin,
    components: {
        LoadingComponent,
    },
    data() {
        return {
            loading: false,
            users: [],
            curso: null,
            usuarios_aceptados: 0,
            usuarios_rechazados: 0,
            usuarios_cancelados: 0,
            usuarios_en_revision: 0,
            usuarios_total: 0,
            total_pagos: 0,
            orderBy: 'createdat',
            timeFilter: 0,
            statusFilter: 'only_accepted',
            asc: true,
            profesores:null,
        };
    },
    methods: {
        loadUsers() {
            this.loading = true;
            axios.get(this.route("admin.cursos.listado", { id: this.route().params.id, order_by: this.orderBy, asc_desc: this.ascDesc, status_filter:this.statusFilter, time_filter:this.timeFilter })).then(response => {
                this.loading = false;
                this.users = response.data.matriculas;
                this.usuarios_total = response.data.total_matriculas;
                this.usuarios_aceptados = response.data.aceptados;
                this.usuarios_rechazados = response.data.rechazados;
                this.usuarios_cancelados = response.data.cancelados;
                this.usuarios_en_revisión = response.data.en_revision;
                this.total_pagos = response.data.valor_total;
                this.curso = this.users[0].fullname;
                this.profesores = response.data.profesores;
            }).catch(() => {
                this.loading = false;
                this.$toast.open({
                    message: "Error al cargar",
                    type: "error"
                });
            });
        }
    },
    created() {
        this.loadUsers();
    },
    computed:{
        ascDesc(){
            return this.asc ? 'asc':'desc';
        }
    },
    watch:{
        statusFilter(newStatusFilter,oldStatusFilter){
            if (newStatusFilter != oldStatusFilter){
                this.asc = true;
                this.loadUsers();
            }
        },
        orderBy(newOrderBy, oldOrderBy){
            if (newOrderBy != oldOrderBy){
                this.asc = true;
                this.loadUsers();
            } else {
                this.asc = false;
            }
        },
        asc(){
            this.loadUsers();
        },
        timeFilter(){
            this.asc = true;
            this.loadUsers();
        }
    }
}
</script>
<style scoped>
.filters {
    display: flex;
    flex-direction: column;
}

.checkbox-group {
    display: flex;
    flex-direction: row;
}

li {
    float: left;
    padding: 4px;
}

select {
    border: 2px solid black;
    border-radius: 5px;
    padding: 4px !important;
    margin: 2px !important;
}

.select-group {
    display: flex;
}

.btn {
    max-width: 150px;
}

th div {
    cursor: pointer;
}
td span{
    background-color: #dc354570;
    border-radius: 4px;
}
</style>