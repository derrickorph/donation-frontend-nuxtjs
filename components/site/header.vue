<template>
    <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container px-0">
            <NuxtLink class="navbar-brand" to="/"><img src="/assets/images/logo-192x192.png" width="60" alt=""></NuxtLink>
            <div class="d-flex align-items-center order-lg-3 ms-lg-3">
                <div class="d-flex align-items-center">


                    <NuxtLink to="/register" class="btn btn-sm btn-outline-primary me-2 ">Sign in</NuxtLink>
                    <NuxtLink to="/login" class="btn btn-sm btn-primary d-none d-md-block">Sign up</NuxtLink>
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
                        <NuxtLink class="nav-link" to="/">Home</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Jobs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Objectives</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Donations</a>
                    </li>

                </ul>


            </div>
        </div>
    </nav>
</template>