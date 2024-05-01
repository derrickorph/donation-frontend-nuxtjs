<template>
    <section class="pt-5 pb-5">
        <div class="container">
            <div class="row align-items-center">
                <!-- User info -->
                <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                    <div class="pt-16 rounded-top" style="background: url(/assets/images/background/profile-bg.jpg) no-repeat; background-size: cover"></div>
                    <div class="card px-4 pt-2 pb-4 shadow-sm rounded-top-0 rounded-bottom-0 rounded-bottom-md-2">
                        <div class="d-flex align-items-end justify-content-between">
                            <div class="d-flex align-items-center">
                                <div class="me-2 position-relative d-flex justify-content-end align-items-end mt-n5">
                                    <img src="/assets/images/avatar.png" class="avatar-xl rounded-circle border border-4 border-white" alt="avatar" />
                                </div>
                                <div class="lh-1">
                                    <h2 class="mb-0">
                                        {{ auth.getUser.username }}
                                    </h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <!-- Content -->

            <div class="row mt-0 mt-md-4">
                <div class="col-lg-3 col-md-4 col-12">
                    <!-- Side navbar -->
                    <nav class="navbar navbar-expand-md navbar-light shadow-sm mb-4 mb-lg-0 sidenav">
                        <!-- Menu  -->
                        <a class="d-xl-none d-lg-none d-md-none text-inherit fw-bold" href="#">Menu</a>
                        <!-- Button  -->
                        <button class="navbar-toggler d-md-none icon-shape icon-sm rounded bg-primary text-light" type="button" data-bs-toggle="collapse" data-bs-target="#sidenav" aria-controls="sidenav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="fe fe-menu"></span>
                        </button>
                        <!-- Collapse -->
                        <div class="collapse navbar-collapse" id="sidenav">
                            <!-- Navbar nav  -->
                            <div class="navbar-nav flex-column">
                                <span class="navbar-header">Manage Profile</span>
                                <ul class="list-unstyled ms-n2 mb-4">
                                    <!-- Nav item  -->
                                    <li class="nav-item" :class="{ 'active': initialStep === 0 }" @click="switchStep(0)">
                                        <a class="nav-link " href="javascript:void(0)"><i class="fe fe-calendar nav-icon"></i>Profile</a>
                                    </li>
                                    <!-- Nav item  -->
                                    <li class="nav-item" :class="{ 'active': initialStep === 1 }" @click="switchStep(1)">
                                        <a class="nav-link" href="javascript:void(0)"><i class="fe fe-credit-card nav-icon"></i>Payment</a>
                                    </li>
                                    <!-- Nav item  -->
                                    <li class="nav-item" @click="logout">
                                        <a class="nav-link" href="javascript:void(0)"><i class="fe fe-power nav-icon"></i>Sign Out</a>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
                <div v-if="initialStep === 0" class="col-lg-9 col-md-8 col-12">
                    <!-- Card -->
                    <div class="card">
                        <!-- Card header -->
                        <div class="card-header">
                            <h3 class="mb-0">Profile Details</h3>
                        </div>
                        <!-- Card body -->
                        <div class="card-body">

                            <div>
                                <h4 class="mb-0">Personal Details</h4>
                                <p class="mb-4">Edit your personal information and address.</p>
                                <!-- Form -->
                                <form class="row gx-3">
                                    <!-- First name -->
                                    <div class="mb-3 col-12 col-md-6">
                                        <label class="form-label" for="fname">First Name</label>
                                        <input type="text" id="fname" class="form-control" placeholder="First Name" required />
                                    </div>
                                    <!-- Last name -->
                                    <div class="mb-3 col-12 col-md-6">
                                        <label class="form-label" for="lname">Last Name</label>
                                        <input type="text" id="lname" class="form-control" placeholder="Last Name" required />
                                    </div>
                                    <!-- Phone -->
                                    <div class="mb-3 col-12 col-md-6">
                                        <label class="form-label" for="phone">Phone</label>
                                        <input type="text" id="phone" class="form-control" placeholder="Phone" required />
                                    </div>
                                    <!-- Birthday -->


                                    <div class="col-12">
                                        <!-- Button -->
                                        <button class="btn btn-primary btn-sm" type="submit">Update Profile</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="initialStep === 1" class="col-lg-9 col-md-8 col-12">

                    <!-- Card -->
                    <div class="card mb-4">
                        <!-- Card header -->
                        <div class="card-header">
                            <h3 class="mb-0">Payment Methods</h3>
                        </div>
                        <!-- Card body -->
                        <div class="card-body">
                            <!-- List group -->
                            <ul class="list-group list-group-flush">
                                <!-- List group item -->
                                <li class="list-group-item px-0 pb-3 pt-0">
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex">
                                            <img src="/assets/images/creditcard/visa.svg" alt="card" class="me-3">
                                            <div>
                                                <h5 class="mb-0">{{ auth.getUser.bank }}</h5>
                                                <p class="mb-0 fs-6">{{ auth.getUser.acc }}</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Swal from 'sweetalert2'

useHead({
    title: "KYD | Profile"
})
const initialStep = ref(0)
const switchStep = (index) => initialStep.value = index
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
    
})
const auth = useAuthStore();
const logout = async () => {
    try {
        Swal.fire({
            title: 'Approval',
            text: 'Would you like to disconnect?',
            showCancelButton: true,
            icon: 'info',
            customClass: {
                cancelButton: 'btn btn-danger btn-sm ',
                confirmButton: 'btn btn-success btn-sm ms-2',
            },
            confirmButtonText: 'Confirm',
            buttonsStyling: false,
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(async result => {
            if (result.isConfirmed) await auth.logout()
        })
        
    } catch (error) {
        console.log(error);
    }
}
</script>