<template>
    <section class="container-fluid p-4">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
                <div class="border-bottom pb-3 mb-3 d-lg-flex justify-content-between align-items-center">
                    <div class="mb-3 mb-lg-0">
                        <h1 class="mb-0 h2 fw-bold">Dashboard</h1>
                    </div>


                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-3 col-lg-6 col-md-12 col-12">
                <!-- Card -->
                <div class="card mb-4">
                    <!-- Card body -->
                    <div class=" card-body">
                        <span class="fs-6 text-uppercase fw-semibold">Users</span>
                        <div class="mt-2 d-flex justify-content-between align-items-center">
                            <div class="lh-1">
                                <h2 class="h1 fw-bold mb-1">{{ users.length }}</h2>
                            </div>
                            <div>
                                <span class="bg-light-success icon-shape icon-xl rounded-3 text-dark-success"><i class="mdi mdi-account-multiple mdi-24px"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-12 col-12">
                <!-- Card -->
                <div class="card mb-4">
                    <!-- Card Body -->
                    <div class=" card-body">
                        <span class="fs-6 text-uppercase fw-semibold">Donations received </span>
                        <div class="mt-2 d-flex justify-content-between align-items-center">
                            <div class="lh-1">
                                <h2 class="h1 fw-bold mb-1">{{ donations.length }}</h2>
                            </div>
                            <div>
                                <span class="bg-light-primary icon-shape icon-xl rounded-3 text-dark-primary"><i class="bi bi-box2-heart fs-3"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-12 col-12">
                <!-- Card -->
                <div class="card mb-4">
                    <!-- Card Body -->
                    <div class=" card-body">
                        <span class="fs-6 text-uppercase fw-semibold">Users blocked</span>
                        <div class="mt-2 d-flex justify-content-between align-items-center">
                            <div class="lh-1">
                                <h2 class="h1 fw-bold mb-1">{{ usersBlocked.length }}</h2>
                            </div>
                            <div>
                                <span class="bg-light-danger icon-shape icon-xl rounded-3 text-dark-danger"><i class="mdi mdi-account-multiple mdi-24px"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-12 col-12">
                <!-- Card -->
                <div class="card mb-4">
                    <!-- Card Body -->
                    <div class=" card-body">
                        <span class="fs-6 text-uppercase fw-semibold">Total ID Number</span>
                        <div class="mt-2 d-flex justify-content-between align-items-center">
                            <div class="lh-1">
                                <h2 class="h1 fw-bold mb-1">{{ idNumbers.length }}</h2>
                            </div>
                            <div>
                                <span class="bg-light-info icon-shape icon-xl rounded-3 text-dark-info"><i class="mdi mdi-numeric mdi-24px"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
useHead({
    title: "KYD | Dashboard"
})
import useUsers from '../../services/userService'
import useIdNumbers from '../../services/id-numberService'
import { onMounted } from "vue";

const { usersBlocked, users, getListeBlockedUsers, getListeUsers, donationsReceived, donations } = useUsers()
const { idNumbers, getListeIdNumbers } = useIdNumbers()

definePageMeta({
    layout: 'admin',
    middleware: ['auth','is-super-admin']
})
onMounted(async () => {
    await getListeUsers()
    await donationsReceived()
    await getListeIdNumbers()
    await getListeBlockedUsers()
})

</script>