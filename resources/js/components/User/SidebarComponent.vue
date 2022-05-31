<template>
    <div class="flex flex-no-wrap md:hidden bg-gray-200">
        <!-- Sidebar starts -->
        <!-- Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] -->
        <div class="w-64 z-40 absolute bg-gray-800 shadow h-screen md:h-full flex-col justify-between md:hidden transition duration-150 ease-in-out"
            id="mobile-nav">
            <div @click.prevent="$parent.sidebarHandler()">
                <ul>
                    <inertia-link v-for="item in $parent.navElements" :key="item.name" :href="item.path">
                        <li
                            class="flex w-full justify-between text-gray-300 cursor-pointer hover:bg-slate-500 items-center py-3 px-5 text-uppercase">
                            {{ item.text }}
                        </li>
                    </inertia-link>
                </ul>
            </div>
            <div class="flex flex-col bottom-0" @click.prevent="$parent.sidebarHandler()" v-if="!$page.props.auth.user">
                <inertia-link href="/">
                    <li
                        class="flex w-full justify-between text-gray-300 cursor-pointer hover:bg-slate-500 items-center py-3 px-5">
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
            @click.prevent="$parent.sidebarHandler()">
        </div>
    </div>
</template>

<script>
export default {
};
</script>
<style scoped>

#mobile-nav {
    transform: translateX(-260px);
    transition: transform 0.3s ease-in-out;
}
::v-deep .user-profile{
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    left: 40%;
}
</style>
