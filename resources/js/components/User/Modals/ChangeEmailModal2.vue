<template>
<div>
    <div class="">
  <a href="#" class="inline-block font-medium leading-tight" :data-toggle="'modal'" data-target="#exampleModalCenter">
    Cambiar correo
  </a>
</div>

<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
          Cambia tu correo electrónico
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-dismiss="modal" aria-label="Close">X</button>
      </div>
      <div class="modal-body relative p-4">
        <!-- Body -->
        <div class="alert alert-danger" role="alert" v-if="$page.props.errors.new_email">
          {{ $page.props.errors.new_email}}
        </div>
        <div v-if="message" class="alert alert-success">
          {{message}}
        </div>
        <form class="card-body" :class="{'disabled':form.processing}" @submit.prevent="saveForm">
          <div class="form-group">
            <input v-model="form.new_email" type="email" class="form-control" id="inputNewEmail" placeholder="Escriba su nuevo correo electrónico">
          </div>
          <div class="form-group">
            <input v-model="form.password" type="password" class="form-control" id="inputOldPassword" placeholder="Escriba su contraseña">
          </div>
        <button type="button" :disabled="loading"
          class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-dismiss="modal">
          Close
        </button>
        <button type="submit"
          class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
           :disabled="form.processing || form.new_email == '' || form.password.length < 2" >
          Save changes
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="form.processing"></span>
        </button>
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
            message: null,
            loading: false,
            form: this.$inertia.form({
            new_email: '',
            password: ''
          }), 
        }
    },
    methods: {
        saveForm() {
        this.$page.props.errors = {};
      this.form.post('/change-email',{
        onStart: () => (this.loading =true),
        onSuccess: () => {this.message = 'Se ha cambiado el correo electrónico';
        yhis.form.reset();},
        onFinish: () => (this.loading = false),
    });
    },
    }
}
</script>

<style>
.disabled {
  pointer-events: none;
  opacity: 0.5;
}

</style>