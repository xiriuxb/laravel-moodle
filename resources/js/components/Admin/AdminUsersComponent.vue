<template>
  <div class="container">
    <h3>Administración de usuarios</h3>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Nombre usuario</th>
            <th scope="col">e-mail verificado?</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" v-bind:key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td>
              <p>{{ user.name }} {{user.last_name}}</p>
            </td>
            <td>{{ user.email }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email_verified_at != null ? "Si" : "No" }}</td>
            <td>
              <button
                class="btn btn-outline-primary btn-acction"
                title="Editar"
                @click="onClickEdit(comment.id)"
              >
                <box-icon name="edit-alt"></box-icon>
              </button>
              <button
                class="btn btn-outline-danger btn-acction"
                title="Eliminar"
                @click="deleteComment(comment.id)"
              >
                <box-icon name="trash"></box-icon>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
    mounted(){
        axios.get('/api/users').then((response)=>{
            this.users = response.data.data;
        });
    },
    data(){
        return{
            users:[],
        }
    }
};
</script>

<style>
</style>