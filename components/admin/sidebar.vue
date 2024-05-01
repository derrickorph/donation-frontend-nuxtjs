<template>
    <nav class="navbar-vertical navbar">
        <div class="vh-100" data-simplebar>
            <!-- Brand logo -->
            <NuxtLink class="navbar-brand" to="/">
                <img src="/assets/images/logo-192x192.png" alt="">
                <span class="text-white h3 ms-2">KYD</span>
            </NuxtLink>
            <!-- Navbar nav -->
            <ul class="navbar-nav flex-column" id="sideNavbar">
                <li class="nav-item" @click="closeDropdown('close')">
                    <NuxtLink class="nav-link " to="/dashboard" exactActiveClass="active">
                        <i class="nav-icon fe fe-home me-2"></i> Dashboard
                    </NuxtLink>
                </li>
                <li class="nav-item" @click="closeDropdown('close')">
                    <NuxtLink class="nav-link " to="/dashboard/activity" exactActiveClass="active">
                        <i class="nav-icon fe fe-activity me-2"></i> Activity
                    </NuxtLink>
                </li>
                <li class="nav-item" v-if="auth.getUser.is_superuser">
                    <a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#navUserManagement" aria-expanded="false" aria-controls="navUserManagement">
                        <i class="nav-icon fe fe-users me-2"></i> User administration
                    </a>
                    <div id="navUserManagement" :class="currentRoute === '/dashboard/users-list' || currentRoute === '/dashboard/blocked-users-list' ?'collapse show':'collapse'" data-bs-parent="#sideNavbar">
                        <ul class="nav flex-column">
                            <li class="nav-item ">
                                <NuxtLink class="nav-link" exactActiveClass="active" to="/dashboard/users-list">Users list</NuxtLink>
                            </li>
                            <!-- Nav item -->
                            <li class="nav-item ">
                                <NuxtLink class="nav-link" exactActiveClass="active" to="/dashboard/blocked-users-list">Blocked users list</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item" @click="closeDropdown('close')" v-if="auth.getUser.is_superuser">
                    <NuxtLink class="nav-link " to="/dashboard/manage-id-numbers" exactActiveClass="active">
                        <i class="nav-icon mdi mdi-numeric me-2"></i> Manage ID Number
                    </NuxtLink>
                </li>

            </ul>

        </div>
    </nav>
</template>
<script setup>
const route = useRoute()
const auth = useAuthStore();
const currentRoute = route.path
const closeDropdown = (className) =>{
   if(className==='close') $('.collapse').removeClass('show')
}

</script>

