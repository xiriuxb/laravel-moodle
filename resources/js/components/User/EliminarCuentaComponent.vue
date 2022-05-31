<template>

    <div id="deleteProfile">
        <Head title="Usuario | Eliminar Cuenta" />
        <div v-if="passwordError" class="alert alert-danger">
            {{ passwordError }}
        </div>
        <div>
            Una vez elimine el perfil,
            <li>No podrá volver a recuperarlo.</li>
            <li>Sus compras o inscripciones no tendrán validez.</li>
            <li>No podrá acceder a los cursos en la plataforma de aprendizaje</li>
            Si está seguro de eliminar su perfil, ingrese su contraseña y haga click en el botón de abajo.
        </div>
        <form action="#" method="post" @submit.prevent="deleteUser">
            <div class="form-group">
                <input v-model="form.password" class="form-control" type="password" name="password" id="currentPassword"
                    placeholder="Contraseña">
            </div>
            <button type="submit" class="btn btn-danger" :disabled="form.processing">Eliminar perfil</button>
        </form>
    </div>
</template>

<script>
import Home from "../views/Home.vue";
export default {
    layout: Home,
    name: "DeleteProfile",
    data() {
        return {
            loading: false,
            form: this.$inertia.form(
                {
                    password: "",
                }
            ),
            passwordError: "",
        };
    },
    methods: {
        deleteUser() {
            this.form.post("/user/delete", {
                onStart: () => (this.passwordError = ""),
                onError: (response) => {
                    console.log(response);
                    this.passwordError = response.password;
                }
            });
        },
    },
}
</script>

<style scoped>
#deleteProfile {
    padding: 120px 50px 50px 50px;
}

#currentPassword {
    max-width: 300px;
}
</style>