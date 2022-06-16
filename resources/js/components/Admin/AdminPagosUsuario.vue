<template>
    <div>
        <AppHead :title="'Admin | Matriculas/Pagos'" />
        <h2>
            Administración de matrículas/pagos
        </h2>
        <div class="modal-body">
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
                    <td><a href="#" class="text-cyan-600 hover:underline cursor-pointer"
                            @click="openModalEstado(matricula)">{{ matricula.estado_matricula.nombre }}</a></td>
                    <td>{{ matricula.pago.amount }}</td>
                    <td>{{ matricula.pago.payment_id }}</td>
                    <td><a href="#" class="text-cyan-600 hover:underline cursor-pointer"
                            @click="openModalImage(matricula.pago.id)">{{ matricula.pago.file }}</a></td>
                    <td>{{ matricula.pago.created_at.substring(0, matricula.pago.created_at.indexOf("T")) }}</td>
                </tr>
            </table>
        </div>
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
        <CambiarEstadoMatriculaModalVue v-if="showEstadoModal" @close="showEstadoModal = false" :matricula="matriculaSeleccionada">
        </CambiarEstadoMatriculaModalVue>
    </div>
</template>
<script>
import VerPagoModal from '../Admin/Modals/VerPagoModal.vue';
import Admin from '../views/Admin.vue'
import CambiarEstadoMatriculaModalVue from './Modals/CambiarEstadoMatriculaModal.vue'
export default {
    layout: Admin,
    components: {
    VerPagoModal,
    CambiarEstadoMatriculaModalVue
},
    props: {
        matriculas: {
            type: Object,
            required: true
        },
        user: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            showPagoModal: false,
            pagoSeleccionado: null,
            showEstadoModal: false,
            matriculaSeleccionada: null,
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