<template>
    <div class="flex flex-no-wrap md:hidden bg-gray-200">
        <!-- Sidebar starts -->
        <!-- Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] -->
        <div class="w-64 z-40 absolute bg-[#212529] shadow h-screen md:h-full flex-col justify-between md:hidden transition duration-150 ease-in-out"
            id="mobile-nav">
            <div>
                <ul @click.prevent="sidebarHandler()">
                    <inertia-link v-for="item in $parent.navElements" :key="item.name" :href="item.path">
                        <li class="mob-nav-item text-uppercase">
                            {{ item.text }}
                        </li>
                    </inertia-link>
                </ul>
                <ul>
                    <a :href="moodleUrl+'login/index.php'">
                        <li class="mob-nav-item text-uppercase fill-white">
                            moodle<box-icon name='link-external'></box-icon>
                        </li>
                    </a>
                </ul>
            </div>
            <div class="flex flex-col bottom-0" @click.prevent="sidebarHandler()" v-if="!$page.props.auth.user">
                <inertia-link href="/">
                    <li class="mob-nav-item">
                        Regístrese
                    </li>
                </inertia-link>
                <li class="list-none justify-between py-3 px-5">
                    <inertia-link :href="'/ingreso'" as="button" class="btn btn-primary flex w-full">
                        Ingrese
                    </inertia-link>
                </li>
            </div>
            <ul>
                <li class="list-none" v-if="$page.props.auth.user">
                    <user-menu-component></user-menu-component>
                </li>
            </ul>
        </div>
        <!-- Sidebar ends -->
        <div class="absolute bg-[#0000005c] h-screen md:hidden w-full" v-if="!$parent.movedSidebar"
            @click.prevent="sidebarHandler()">
        </div>
    </div>
</template>

<script>
import UserMenuComponent from "../UserMenuComponent.vue";
export default {
    components: { UserMenuComponent },
    methods: {
        sidebarHandler() {
            this.$parent.sidebarHandler();
        }
    },
    computed: {
        moodleUrl() {
            return this.$page.props.siteData.moodleUrl
        }
    },
};
</script>
<style scoped>
#mobile-nav {
    transform: translateX(-260px);
    transition: transform 0.3s ease-in-out;
}

.mob-nav-item {
    width: 100%;
    justify-content: space-between;
    color: aliceblue;
    cursor: pointer;
    align-items: center;
    padding: 1rem 3rem;
    fill: aliceblue;
}

.mob-nav-item box-icon {
    position: fixed;
}

.mob-nav-item:hover {
    background-color: lightslategray;
    color: aliceblue;
}

::v-deep .user-profile {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    left: 40%;
}
</style>
