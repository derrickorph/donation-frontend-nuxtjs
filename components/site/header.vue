<template>
    <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container px-0">
            <NuxtLink class="navbar-brand" to="/"><img src="/assets/images/logo-192x192.png" width="60" alt=""></NuxtLink>
            <div class="d-flex align-items-center order-lg-3 ms-lg-3">
                <div class="d-flex align-items-center">


                    <NuxtLink to="/login" v-if="!tokenStore.getStatus" class="btn btn-sm btn-outline-primary ">Sign in</NuxtLink>
                    <NuxtLink to="/register" v-if="!tokenStore.getStatus" class="btn btn-sm btn-outline-secondary  d-md-block mx-1">Sign up</NuxtLink>
                    <NuxtLink to="/dashboard" v-if="tokenStore.getStatus" class="btn btn-sm btn-primary  d-md-block">Dashboard</NuxtLink>
                </div>
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-bar top-bar mt-0"></span>
                    <span class="icon-bar middle-bar"></span>
                    <span class="icon-bar bottom-bar"></span>
                </button>
            </div>
            <!-- Button -->

            <!-- Collapse -->
            <div class="collapse navbar-collapse" id="navbar-default">
                <ul class="navbar-nav ms-auto">

                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/" exactActiveClass="active">Home</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/about" exactActiveClass="active">About Us</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/projects" exactActiveClass="active">Projects</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/jobs" exactActiveClass="active">Jobs</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/objectives" exactActiveClass="active">Objectives</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/donations" exactActiveClass="active">Donations</NuxtLink>
                    </li>

                </ul>


            </div>
        </div>
    </nav>
</template>
<script setup>
const tokenStore = useTokenStore();


</script>
