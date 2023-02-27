<template>
    <section id="pagoDeposito">
        <AppHead :title="'Pago Deposito/Transferencia |'+curso_data.fullname" />
        <h3 class="text-2xl">Pago por Transferencia/Depósito</h3>
        <div v-if="pago">
            Usted ya ha pagado por este curso <b>{{ curso_data.fullname }}</b>
            <p>Debe esperar a que un administrador revise sus datos.</p>
        </div>
        <div v-else>
            Para realizar el pago por transferencia o depósito debe realizar la transacción en su lugar preferido y
            luego añadir la foto del documento de la transacción en el formulario que está mas abajo.
            <div>Luego de esto su pago será verificado por un administrador y realizará la inscripción.</div>
            <div id="userData" class="m-6">
                <div>El pago debe realizarse a la siguiente cuenta:</div>
                <div><b>Institución Financiera: </b>{{ account_pago_data.user_bank }}</div>
                <div><b>Número de cuenta: </b>{{ account_pago_data.user_account }}</div>
                <div><b>Nombre: </b>{{ account_pago_data.user }}</div>
                <div><b>Cédula: </b>{{ account_pago_data.user_id }}</div>
            </div>
            <div id="pagoForm" class="row">
                <form action="#" @submit.prevent="matricula" method="post" class="col-12 col-sm-7">
                    <div class="row">
                        <div class="form-group col-12 col-sm-6">
                            <label for="nombreCurso">Curso</label>
                            <input type="text" class="form-control" id="nombreCurso" placeholder="Nombre Completo"
                                disabled :value="curso_data.fullname" />
                        </div>
                        <div class="form-group col-12 col-sm-6">
                            <label for="precioCurso">Precio</label>
                            <input type="text" class="form-control" id="precioCurso" placeholder="Nombre Completo"
                                disabled :value="curso_data.precio" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="comprobantePagoFile">Foto del comprobante: (Máximo 5MB)</label>
                        <input type="file" accept=".png,.jpg,.jpeg"
                            @input="form.file = $event.target.files[0]; previewImage($event.target)"
                            class="form-control-file" id="comprobantePagoFile" required>
                    </div>
                    <div class="form-group">
                        <button type="submit"
                            class="btn btn-pimary bg-sky-700 text-slate-200 hover:bg-sky-900 hover:text-slate-200"
                            :disabled="loading">
                            <span class="spinner-border spinner-border-sm" v-if="loading" role="status"
                                aria-hidden="true"></span>
                            Aceptar
                        </button>
                    </div>
                </form>
                <div class="col col-12 col-sm-5">
                    <div v-if="preview">
                        <img :src="preview" class="img-fluid" />
                        <p class="mb-0">Tamaño: {{ image.size / 1024 }}KB</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Home from "../views/Home.vue";
export default {
    layout: Home,
    props: {
        curso_data: {
            type: Object,
            required: true,
        },
        account_pago_data: {
            type: Object,
        },
        pago: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            loading: false,
            image: null,
            preview: null,
            form: this.$inertia.form({
                curso_id: this.curso_data.shortname,
                amount: this.curso_data.precio,
                currency: "USD",
                payment_method: "",
                payment_id: "",
                payment_status: "",
                payer_id: "",
                payer_email: "",
                payer_name: "",
                transaction_id: "",
                file: null,
            }),
        }
    },
    methods: {
        matricula() {
            this.loading = true;
            this.form.post(this.route('matricula.dep-transf'),
                {
                    onStart: () => { this.loading = true; },
                    onSuccess: () => (this.loading = false),
                    onError: () => {
                        this.loading = false;
                        this.$toast.open({ message: "Error, intente nuevamente" + this.$page.props.errors, position: "top", type: "error", });
                    },
                }
            );

        },
        previewImage(input) {
            if (input.files) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.preview = e.target.result;
                }
                this.image = input.files[0];
                reader.readAsDataURL(input.files[0]);
            }
        },
    },

}
</script>

<style scoped>
#pagoDeposito {
    padding: 120px 30px;
}
</style>