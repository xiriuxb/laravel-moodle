<template>
    <div class="contain">
        <AppHead :title="'Ingreso'" />
        <div class="izq">
            <div>
                <a href="/" >
                    <img src="/images/logo.png" alt="Bussiness Logo">
                </a>
                <login-component></login-component>
            </div>
        </div>
        <div class="der">
            <div class="text-justify" id="mensaje">
                <h1 class="text-4xl font-bold">Bienvenido</h1>
                <p>Recuerde que para acceder al contenido de los cursos que usted adquirió debe ingresar en el siguiente
                    enlace con las mismas credenciales con las que se registró en este sitio:</p>
                <a class="flex items-center font-bold w-full px-3 py-2 my-3 text-lg text-white border-2 border-orange-400 bg-[#002e45ab] rounded-md sm:mb-0 hover:bg-[#002e45] sm:w-auto"
                    :href="`${moodleUrl}login/index.php`">
                    Ir a aula virtual (Moodle)<box-icon name='link-external'></box-icon>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import LoginComponent from '../auth/LoginComponent.vue'
export default {
    components: { LoginComponent },
    computed: {
        moodleUrl() {
            return this.$page.props.siteData.moodleUrl;
        }
    }

}
</script>

<style scoped>
.contain {
    display: flex;
    flex-direction: column;
}

.izq {
    padding: 50px 40px;
    height: 100vh;
}

.der {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    display: none;
    background-image: url(/images/login_view.png);
    background-repeat: repeat-y;
    height: 100vh;
}

@media (min-width: 768px) {
    .der {
        flex: 1.4;
        display: block;
    }

    .izq {
        flex: 1;
    }

    .contain {
        flex-direction: row;
    }
}

@media (min-width:1366px) {
    .izq {
        flex: 4
    }

    .der {
        flex: 6;
        display: block
    }
}

div.izq img {
    width: 300px;
}

#mensaje {
    padding: 35% 12% 0% 12%;
    color: aliceblue;
    font-size: larger;
}

div a{
        display: flex;
    align-items: center;
    flex-direction: column;

}

box-icon {
    fill: aliceblue;
}
</style>