<template>
    <div class="a">
        <!-- Sidebar starts -->
        <!-- Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] -->
        <div class="w-64 z-40 absolute bg-[#212529] shadow h-screen md:h-full flex-col justify-between md:hidden transition duration-150 ease-in-out"
            id="mobile-nav">
            <div class="scrolled">
                <ul @click.prevent="sidebarHandler()">
                    <inertia-link v-for="item in $parent.navElements" :key="item.name" :href="route(item.path)">
                        <li class="mob-nav-item text-uppercase">
                            {{ item.text }}
                        </li>
                    </inertia-link>
                </ul>
                <ul>
                    <a :href="moodleUrl + 'login/index.php'">
                        <li class="mob-nav-item text-uppercase fill-white d-flex">
                            aula<box-icon name='link-external'></box-icon>
                        </li>
                    </a>
                </ul>

                <div class="flex flex-col bottom-0" @click.prevent="sidebarHandler()" v-if="!$page.props.auth.user">
                    <inertia-link href="/#registro">
                        <li class="mob-nav-item">
                            Regístrese
                        </li>
                    </inertia-link>
                    <li class="list-none justify-between py-3 px-5">
                        <inertia-link :href="route('ingreso')" as="button" class="btn btn-primary flex w-full">
                            Ingrese
                        </inertia-link>
                    </li>
                </div>
                <ul>
                    <li class="list-none" v-if="$page.props.auth.user">
                        <user-menu-component v-if="!this.$parent.movedSidebar"></user-menu-component>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Sidebar ends -->
        <div class="absolute bg-[#0000005c] h-screen md:hidden w-full" v-if="!$parent.movedSidebar"
            @click.prevent="sidebarHandler()">
        </div>
    </div>
</template>

<script>
const UserMenuComponent = () => import("../UserMenuComponent.vue");
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

.scrolled{
    overflow-y: auto;
    height: calc(100% - 65px);
}

.mob-nav-item {
    width: 100%;
    color: aliceblue;
    cursor: pointer;
    padding: 1rem 3rem;
    fill: aliceblue;
}
.mob-nav-item:hover {
    background-color: lightslategray;
    color: aliceblue;
}
</style>
