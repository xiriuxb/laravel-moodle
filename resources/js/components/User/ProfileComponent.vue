<template>
  <div id="profile">
    <AppHead :title="'Usuario | Perfil'" />
    <div id="datosP" class="container">
      <!-- User data form -->
      <div class="row">
        <div class="col-sm-12">
          <!-- Alerts -->
          <div v-if="$page.props.errors.new_email" class="alert alert-danger">
            Su correo no fue actualizado, por favor intente de nuevo.
          </div>
          <div v-if="$page.props.errors.new_password" class="alert alert-danger">
            Su contraseña no fue actualizada, por favor intente de nuevo.
          </div>
          <div v-if="$page.props.flash.message" class="alert alert-success">
            Su información se actualizó correctamente.
          </div>
          <!-- End of alerts -->
          <div class="card">
            <!-- .card-header -->
            <div class="card-header">
              <h3 class="card-title">Datos del usuario</h3>
            </div>
            <!-- /.card-header -->
            <!-- .card-body -->
            <div class="card-body">
              <!-- Mensaje de verificación de correo -->
              <div v-if="!user.email_verified_at" class="alert alert-warning">
                Usted no ha verificado su dirección de correo electrónico, para hacerlo haga click
                <inertia-link class="text-sky-900" :href="route('verification.notice')">aquí</inertia-link>
                y siga los pasos.
              </div>
              <div v-if="$page.props.auth.role == 'suspended'" class="alert alert-warning">
                Actualmente se encuentra suspendido, por lo que no puede realizar algunas acciones, por favor póngase en contacto con nosotros.
                Tampoco puede acceder al contenido de los cursos en Moodle.
              </div>
              <!-- /.mensaje de verificación de correo -->
              <form :class="{ disabled: loading }" action="#" method="post" @submit.prevent="updateUser">
                <div class="row">
                  <div class="form-group col-12 col-sm-6">
                    <label for="inputName">Nombre</label>
                    <input type="text" class="form-control" id="inputName" placeholder="Nombre Completo" disabled
                      :value="fullname" />
                  </div>
                  <div class="form-group col-12 col-sm-6">
                    <label for="inputUsername">Nombre de usuario</label>
                    <input type="text" class="form-control" id="inputUsername" placeholder="Nombre de usuario"
                      :value="user.username" readonly />
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-12 col-sm-6">
                    <label for="inputEmail">Correo electrónico</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Correo electrónico" disabled
                      :value="user.email" />
                    <change-email-modal-2 v-if="$page.props.auth.role != 'suspended'"></change-email-modal-2>
                  </div>
                  <div class="form-group col-12 col-sm-6">
                    <label for="inputPassword">Contraseña</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Contraseña"
                      value="********" disabled readonly />
                    <change-password-modal-2 v-if="$page.props.auth.role != 'suspended'"></change-password-modal-2>
                  </div>
                </div>
                <div class="row">
                  <div class="from-group col-12 col-sm-6">
                    <label for="selectPais">País:</label>
                    <country-select v-model="form.country" class="form-control" name="country" id="country"
                      placeholder="País" :whiteList="['EC']" :countryName="true" :autocomplete="true" :id="'selectPais'"
                      :removePlaceholder="false" :country="user.country" />
                  </div>
                  <div class="form-group col-12 col-sm-6">
                    <label for="selectEstado">Provincia:</label>
                    <region-select v-model="form.region" :region="user.region" class="form-control" defaultRegion="EC"
                      :regionName="true" name="region" id="region" placeholder="Provincia" :disabled="!form.country" :id="'selectEstado'"/>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputBirthday">Día de nacimiento</label>
                  <input v-model="form.birth_day" type="date" class="form-control" placeholder="Fecha de nacimiento" id="inputBirthday" />
                  <!-- Errors -->
                  <div v-if="$page.props.errors.birth_day != null" class="alert alert-danger">
                    {{ $page.props.errors.birth_day }}
                  </div>
                </div>
                <div>
                  <button type="submit" v-if="$page.props.auth.role != 'suspended'"
                    class=" btn btn-primary"
                    :disabled="enableButton || this.loading">
                    <span class="spinner-border spinner-border-sm" v-if="loading" role="status"
                      aria-hidden="true"></span>
                    Guardar Cambios
                  </button>
                </div>
              </form>
            </div>
            <!-- /.card-body -->
            <div class="flex flex-row-reverse pr-2">
              <inertia-link :href="route('eliminar-cuenta')" v-if="$page.props.auth.role != 'suspended'">Eliminar Cuenta</inertia-link>
            </div>
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col -->
      </div>
    </div>
  </div>
</template>

<script>
import { RegionSelect, CountrySelect} from "vue-country-region-select";
const ChangeEmailModal2 =  () => import( "./Modals/ChangeEmailModal2.vue");
const ChangePasswordModal2=  () => import(  "./Modals/ChangePasswordModal2.vue");
import Home from "../views/Home.vue";
import route from "../../../../vendor/tightenco/ziggy/src/js";
export default {
  layout: Home,
  components: {
    RegionSelect,
    CountrySelect,
    ChangeEmailModal2,
    ChangePasswordModal2,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
    message: {
      type: String,
    },
  },
  computed: {
    fullname() {
      return this.user.name + " " + this.user.last_name;
    },
    enableButton() {
      return this.form.country != this.user.country ||
        this.form.region != this.user.region ||
        this.form.birth_day !== this.user.birth_day
        ? false
        : true;
    },
  },
  data() {
    return {
      form: this.$inertia.form({
        country: "",
        region: "",
        birth_day: "",
      }),
      loading: false,
    };
  },
  methods: {
    updateUser() {
      this.form.post(route('user.update'), {
        onStart: () => (this.loading = true),
        onFinish: () => (this.loading = false),
      });
    },
  },
  created() {
    this.form.country = this.user.country;
    this.form.region = this.user.region;
    this.form.birth_day = this.user.birth_day;
  },
};
</script>

<style scoped>
#datosP {
  padding-top: 100px;
}

.card-header {
  background-color: rgb(0 46 69);
  color: white;
}

.card-header .card-title {
  margin-bottom: 0;
}

.disabled {
  pointer-events: none;
  cursor: not-allowed;
}
</style>