<template>
	<div>
		<AppHead :title="curso.fullname" />
		<button v-if="!logged" class="btn btn-primary" v-on:click="matricula">
			Inscribirse ({{ price }})
		</button>
		<div class="d-flex justify-content-center" v-else>
			<div v-if="pago && !matriculado">
				<p>Su matricula está siendo procesada.</p>
			</div>
			<button v-else class="btn btn-primary" v-on:click.prevent="redirectOrSignup" :disabled="loading">
				<span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
				<div v-html="buttonMessage"></div>
			</button>
		</div>

		<payments-modal v-if="modalVisible" @close="closeModal"></payments-modal>
	</div>
</template>

<script>
import Home from "./views/Home.vue";
import Curso from "./views/Curso.vue";
import PaymentsModal from "./payments/PaymentsModal.vue";
export default {
	components: { PaymentsModal },
	layout: [Home, Curso],
	props: {
		curso: {
			type: Object,
			required: true,
		},
		message: {
			type: String,
		},
		matriculado: {
			type: Boolean,
			default: false,
		},
		ruta: {
			type: String,
			default: "",
		},
		pago: {
			type: Boolean,
			default: false,
		},
		verificado: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			logged: this.$page.props.auth.user,
			loading: false,
			modalVisible: false,
			payment_form: this.$inertia.form({
				amount: "",
				currency: "",
				payment_method: "",
				payment_id: "",
				payment_status: "",
				payer_id: "",
				payer_email: "",
				payer_name: "",
				transaction_id: "",
				file: "",
				curso_id: this.curso.shortname,
			}),
		};
	},
	computed: {
		price() {
			return parseFloat(this.curso.price) > 0 ? this.curso.price : "Gratis";
		},
		buttonMessage() {
			return this.matriculado
				? '<span>Ir al curso<box-icon class="align-middle" name="link-external" color="#fff"></box-icon></span>'
				: "Inscribirse ($" + this.price + ")";
		},
		moodleUrl() {
			return this.$page.props.siteData.moodleUrl;
		},
	},
	methods: {
		matricula() {
			if (!this.logged) {
				this.$toast.open({ message: "Debe estar logueado para poder matricularse", position: "top", type: "warning", });
			} else {
				if (!this.verificado) {
					this.$toast.open({ message: "Debe verificar su correo para poder matricularse", position: "top", type: "warning", });
				} else {
					this.loading = true;

					if (this.curso.price == 0 || this.curso.price == "0" || this.curso.price == "0.00" || this.payment_form.payment_id != "") {
						this.payment_form.post(this.ruta,
							{
								onStart: () => { this.loading = true; },
								onSuccess: () => (this.loading = false),
								onError: () => {
									this.loading = false;
									this.$toast.open({ message: "Error, intente nuevamente", position: "top", type: "error", });
								},
							}
						);
					} else {
						this.modalVisible = true;
						this.loading = false;
					}
				}
			}
		},
		closeModal() {
			this.modalVisible = false;
		},
		redirectToMoodle() {
			window.location.href =
				this.moodleUrl+"course/view.php?name=" + this.curso.shortname;
		},
		redirectOrSignup() {
			if (this.logged && this.matriculado) {
				this.$toast.open({
					message: "Redireccionando",
					position: "top",
					type: "warning",
				});
				this.redirectToMoodle();
			} else {
				this.matricula();
			}
		},
	},
};
</script>

<style scoped>
.btn {
	width: 80%;
	padding: 12px;
	min-width: 150px;
	margin: 0 0 12px 0;
	font-size: large;
	border-radius: 0;
}

.btn-primary {
	background-color: #ffffff00;
	border-color: #b3540c;
}

.btn-primary:hover {
	background-color: #d95d22;
	border-color: #b3540c;
}

.btn.btn-primaty.focus,
.btn.btn-primary:focus {
	background-color: #d95d22;
	border-color: #b3540c;
}
</style>