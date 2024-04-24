<template>
    <!-- ========== Left Sidebar Start ========== -->
    <div class="leftside-menu">

        <!-- Brand Logo Light -->
        <NuxtLink to="/dashboard" class="logo mb-2 logo-light">
            <h3>Ikamvelihle</h3>
        </NuxtLink>
        <!-- <NuxtLink to="/dashboard" class="logo logo-light">
            <span class="logo-lg">
                <img src="/assets/images/logo.png" alt="logo">
            </span>
            <span class="logo-sm">
                <img src="/assets/images/logo-sm.png" alt="small logo">
            </span>
        </NuxtLink> -->

        <!-- Brand Logo Dark -->
        <NuxtLink to="/dashboard" class="logo logo-dark">
            <span class="logo-lg">
                <img src="/assets/images/logo-dark.png" alt="dark logo">
            </span>
            <span class="logo-sm">
                <img src="/assets/images/logo-dark-sm.png" alt="small logo">
            </span>
        </NuxtLink>

        <!-- Sidebar Hover Menu Toggle Button -->
        <div class="button-sm-hover" data-bs-toggle="tooltip" data-bs-placement="right" title="Show Full Sidebar">
            <i class="ri-checkbox-blank-circle-line align-middle"></i>
        </div>

        <!-- Full Sidebar Menu Close Button -->
        <div class="button-close-fullsidebar">
            <i class="ri-close-fill align-middle"></i>
        </div>

        <!-- Sidebar -left -->
        <div class="h-100" id="leftside-menu-container" data-simplebar>
            <!-- Leftbar User -->
            <div class="leftbar-user">
                <a href="pages-profile.html">
                    <img src="/assets/images/users/avatar-1.jpg" alt="user-image" height="42" class="rounded-circle shadow-sm">
                    <span class="leftbar-user-name mt-2">Dominic Keller</span>
                </a>
            </div>

            <!--- Sidemenu -->
            <ul class="side-nav">


                <li class="side-nav-item">
                    <NuxtLink to="/dashboard" class="side-nav-link">
                        <i class="uil-home-alt"></i>
                        <span> Dashboard </span>
                    </NuxtLink>
                </li>


                <li class="side-nav-item">
                    <a data-bs-toggle="collapse" href="#sidebarUsers" aria-expanded="false" aria-controls="sidebarUsers" class="side-nav-link">
                        <i class="uil-user"></i>
                        <span> User administration </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="sidebarUsers">
                        <ul class="side-nav-second-level">
                            <li>
                                <NuxtLink to="/dashboard/users-list">Users list</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/dashboard/blocked-users-list">Blocked users list</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </li>

            </ul>
            <!--- End Sidemenu -->

            <div class="clearfix"></div>
        </div>
    </div>
    <!-- ========== Left Sidebar End ========== -->
</template>