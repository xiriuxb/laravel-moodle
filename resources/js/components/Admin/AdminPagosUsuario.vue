<template>
    <div>
        <loading-component v-if="loading" :width="'100%'" :backgroundColor="'rgb(0 0 0 / 29%)'" :height="'100%'" :position="'fixed'"></loading-component>
        <AppHead :title="'Admin | Matriculas/Pagos'" />
        <h2>
            Administración de matrículas/pagos
        </h2>
        <div>
            <h3>Usuario: {{ user }}</h3>
        </div>
        <table class="table">
            <tr>
                <th>Curso</th>
                <th>Estado</th>
                <th>Costo</th>
                <th>Pago</th>
                <th>Imagen</th>
                <th>Fecha</th>
            </tr>
            <tr v-for="matricula in matriculas.data" :key="matricula.id">
                <td>{{ matricula.cursos.fullname }}</td>
                <td><a href="#" class="text-cyan-600 hover:underline cursor-pointer" :class="loading?'disabled':''"
                        @click="openModalEstado(matricula)">{{ matricula.estado_matricula.nombre }}</a></td>
                <td>{{ matricula.pago ? matricula.pago.amount : 'Gratuito' }}</td>
                <td>{{ matricula.pago ? matricula.pago.payment_id : 'Gratuito' }}</td>
                <td><a href="#" class="text-cyan-600 hover:underline cursor-pointer" v-if="matricula.pago" :class="loading?'disabled':''"
                        @click="openModalImage(matricula.pago.id)">{{ matricula.pago.file }}</a></td>
                <td>{{ matricula.created_at.substring(0, matricula.created_at.indexOf("T")) }}</td>
            </tr>
        </table>
        <nav aria-label="...">
            <ul class="pagination">
                <li class="page-item"
                    :class="!link.active ? link.url == null ? 'page-item disabled' : 'page-item' : 'page-item active'"
                    v-for="link in matriculas.links" :key="link.label">
                    <inertia-link class="page-link" :href="link.url" :only="['matriculas']" tabindex="-1">
                        <div v-html="link.label"></div>
                    </inertia-link>
                </li>
            </ul>
        </nav>
        <ver-pago-modal v-if="showPagoModal" @close="showPagoModal = false" :pago_id="pagoSeleccionado">
        </ver-pago-modal>
        <CambiarEstadoMatriculaModalVue v-if="showEstadoModal" @close="showEstadoModal = false"
            :matricula="matriculaSeleccionada">
        </CambiarEstadoMatriculaModalVue>
    </div>
</template>
<script>
import VerPagoModal from '../Admin/Modals/VerPagoModal.vue';
import Admin from '../views/Admin.vue'
import CambiarEstadoMatriculaModalVue from './Modals/CambiarEstadoMatriculaModal.vue'
import LoadingComponent from '../LoadingComponent.vue';
import { Inertia } from '@inertiajs/inertia'
export default {
    layout: Admin,
    components: {
        VerPagoModal,
        CambiarEstadoMatriculaModalVue,
        LoadingComponent
    },
    props: {
        matriculas: {
            type: Object,
            required: true
        },
        user: {
            type: String,
            required: true
        },
        username: {
            type: String
        }
    },
    data() {
        return {
            showPagoModal: false,
            pagoSeleccionado: null,
            showEstadoModal: false,
            matriculaSeleccionada: null,
            loading: false,
        }
    },
    methods: {
        openModalImage(seleccionado) {
            this.pagoSeleccionado = seleccionado;
            this.showPagoModal = true;
        },
        openModalEstado(seleccionado) {
            this.matriculaSeleccionada = seleccionado;
            this.showEstadoModal = true;
        },
        reloadPagos() {
            this.loading = true;
            Inertia.visit(this.route('admin.matriculas.usuario.index',{username:this.username}), { method: 'get', only: ['matriculas'] });
        }
    }
}
</script>
<style scoped>
.modal-container {
    margin: 50px;
    width: unset;
    overflow-x: auto;
    overflow-y: auto;
}

.modal-wrapper {
    display: unset;
}
</style>