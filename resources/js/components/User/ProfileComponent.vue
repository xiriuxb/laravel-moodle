<template>
  <div id="profile">
    <navbar-component></navbar-component>
    <sidebar-component></sidebar-component>
    <div id="datosP" class="container">
      <!-- User data form -->
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <!-- .card-header -->
            <div class="card-header">
              <h3 class="card-title">Datos personales</h3>
            </div>
            <!-- /.card-header -->
            <!-- .card-body -->
            <div class="card-body">
              <form action="#" method="post">
                <div class="row">
                  <div class="form-group col-12 col-sm-6">
                    <label for="inputName">Nombre</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputName"
                      placeholder="Nombre Completo"
                      disabled
                      :value="fullname"
                    />
                  </div>
                  <div class="form-group col-12 col-sm-6">
                    <label for="inputUsername">Nombre de usuario</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputUsername"
                      placeholder="Nombre de usuario"
                      :value="user.username"
                      readonly
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-12 col-sm-6">
                    <label for="inputEmail">Correo electrónico</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail"
                      placeholder="Correo electrónico"
                      disabled
                      :value="user.email"
                    />
                    <a v-on:click="showEmailModal()">Cambiar correo</a>
                  </div>
                  <div class="form-group col-12 col-sm-6">
                    <label for="inputPassword">Contraseña</label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword"
                      placeholder="Contraseña"
                      value="********"
                      disabled
                      readonly
                    />
                    <a v-on:click="showPasswordModal()">Cambiar contraseña</a>
                  </div>
                </div>
                <div class="row">
                  <div class="from-group col-12 col-sm-6">
                    <country-select
                      class="form-control"
                      name="country"
                      id="country"
                      placeholder="País"
                      :whiteList="['EC']"
                      :countryName="true"
                      :autocomplete="true"
                      :removePlaceholder="false"
                    />
                  </div>
                  <div class="form-group col-12 col-sm-6">
                    <region-select
                      class="form-control"
                      defaultRegion="EC"
                      :regionName="true"
                      name="region"
                      id="region"
                      placeholder="Provincia"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label for="fechaNacimiento">Día de nacimiento</label>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="Fecha de nacimiento"
                  />
                  <!-- <div v-if="this.errors.birth_day!=null" class="alert alert-danger">{{this.errors.birth_day[0]}}</div> -->
                </div>
              </form>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col -->
      </div>
    </div>
    <change-email-modal
      v-if="isEModalVisible"
      @close="closeEModal"
    ></change-email-modal>
    <change-password-modal v-if="isPModalVisible" @close="closePModal"></change-password-modal>
  </div>
</template>

<script>
import NavbarComponent from "../NavbarComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
import vueCountryRegionSelect from "vue-country-region-select";
import ChangeEmailModal from "./Modals/ChangeEmailModal.vue";
import ChangePasswordModal from "./Modals/ChangePasswordModal.vue";
export default {
  components: {
    SidebarComponent,
    NavbarComponent,
    vueCountryRegionSelect,
    ChangeEmailModal,
    ChangePasswordModal,
  },

  computed: {
    fullname() {
      return this.user.name + " " + this.user.last_name;
    },
  },
  data() {
    return {
      user:this.$store.getters.getUser,
      isPModalVisible: false,
      isEModalVisible: false,
    };
  },
  methods: {
    showPasswordModal() {
      this.isPModalVisible = true;
    },
    closePModal() {
      this.isPModalVisible = false;
    },
    showEmailModal() {
      this.isEModalVisible = true;
    },
    closeEModal() {
      this.isEModalVisible = false;
    },
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
</style>