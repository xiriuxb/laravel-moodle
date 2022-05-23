<template>
  <div>
    <div class="">
      <a href="#" class="inline-block font-medium leading-tight" data-toggle="modal" data-target="#passwordModalCenter"
        @click="message = ''">
        Cambiar contraseña
      </a>
    </div>

    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id="passwordModalCenter" tabindex="-1" aria-labelledby="passwordModalCenterTitle" aria-modal="true" role="dialog">
      <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
        <div
          class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div
            class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5 class="text-xl font-medium leading-normal text-gray-800" id="passwordModalScrollableLabel">
              Cambia tu contraseña
            </h5>
            <button type="button"
              class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-dismiss="modal" aria-label="Close">X</button>
          </div>
          <div class="modal-body relative p-4">
            <!-- Body -->
            <div class="alert alert-danger" role="alert" v-if="$page.props.errors.new_password">
              {{ $page.props.errors.new_password }}
            </div>
            <div v-if="message" class="alert alert-success">
              {{ message }}
            </div>
            <form :class="{ 'disabled': form.processing }" @submit.prevent="updateForm">
              <div class="form-group">
                <input type="password" class="form-control" v-model="form.passwordActual" id="passwordActual"
                  placeholder="Escriba su contraseñá actual" required>
              </div>
              <div class="form-group">
                <input type="password" class="form-control" v-model="form.new_password" id="new-password"
                  placeholder="Escriba su nueva contraseña" required>
              </div>
              <div class="form-group">
                <input type="password" class="form-control" v-model="form.new_password_confirmation"
                  data-vv-as="new-password" id="new-password-confirmation" placeholder="Escriba al contraseña otra vez"
                  required>
              </div>
              <button type="button" :disabled="loading"
                class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-dismiss="modal">
                Close
              </button>
              <button type="submit"
                class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                :disabled="form.processing || form.passwordActual.length == 0">
                <span class="spinner-border spinner-border-sm" v-if="form.processing" role="status"
                  aria-hidden="true"></span>
                Aceptar</button>
            </form>
            <!-- /Body -->
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: this.$inertia.form({
        passwordActual: '',
        new_password: '',
        new_password_confirmation: ''
      }),
      loading: false,
      errors: [],
      message: ''
    }
  },
  methods: {
    updateForm() {
      this.$page.props.errors = {};
      this.form.post('/change-password', {
        onSrart: () => {
          this.message = '';
        },
        onSuccess: () => {
          this.message = 'Contraseña actualizada';
          this.form.reset();
        }
      });
    }
  },
}
</script>

<style>
</style>