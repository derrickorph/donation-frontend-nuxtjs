<template>
    <section class="container-fluid p-4">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
                <div class="border-bottom pb-3 mb-3 d-lg-flex justify-content-between align-items-center">
                    <div class="mb-3 mb-lg-0">
                        <h1 class="mb-0 h2 fw-bold">List of participants</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Start Content-->
    <div class="container-fluid">

        <div class="row">

            <div class="col-md-12">
                <div class="card">

                    <div class="card-body">
                        <DataTable v-if="!loader" :options="datatableOptions" class=" table table-striped table-sm table-bordered">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Surname</th>
                                    <th scope="col">ID Number</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user,index) in users" :key="index">
                                    <td>{{ index+1 }}</td>
                                    <td>
                                        <a href="#" @click="getUser(user)" class="text-muted" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">{{ user.username }}</a>
                                    </td>
                                    <td>{{ user.surname }}</td>
                                    <td>{{ user.id_number }}</td>
                                    <td>{{ user.email }}</td>
                                    <td>{{ user.phoneNumber }}</td>
                                    <td>
                                        <span class="badge bg-success-lighten text-success">Enable</span>
                                    </td>


                                </tr>
                            </tbody>
                        </DataTable>
                    </div>
                </div>
            </div>
        </div>
        <div class="offcanvas offcanvas-end bg-white shadow" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">User information</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">

                <div class="text-center">
                    <img src="/assets/images/avatar.png" class="rounded-circle avatar-xl mb-3" alt="">
                    <h4 class="mb-0">{{ currentUser?.username }}</h4>
                    <p class="mb-0">{{ currentUser?.email }}</p>
                </div>
                <div class="d-flex justify-content-between border-bottom py-2 mt-4">
                    <span>Bank Name</span>
                    <span class="text-dark">{{ currentUser?.bank }}</span>
                </div>
                <div class="d-flex justify-content-between border-bottom py-2">
                    <span>ACC</span>
                    <span class="text-warning">
                        {{ currentUser?.acc }}
                    </span>
                </div>
                <div v-if="user_donations.length" class="d-flex justify-content-center pt-2">
                    <span class="text-primary h3 text-center">Donators</span>

                </div>
                <ul class="list-group">
                    <li v-for="(donation, index) in user_donations" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
                        {{ donation.donator_relation.surname }}
                        <button v-if="auth.getUser.id === donation.donator_relation.id" class="btn btn-primary btn-sm rounded-pill">Donate</button>
                    </li>
                </ul>
            </div>
        </div>

    </div>
    <!-- container -->
</template>

<script setup>
import DataTable from 'datatables.net-vue3'
import useUsers from '../../services/userService'
import DataTablesCore from 'datatables.net-bs5';
import  { onMounted } from "vue";

useHead({
    title: "KYD | User List"
})
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
})
DataTable.use(DataTablesCore);

const { users, loader, getUserDonations,user_donations, getListeUsers  } = useUsers()
const currentUser = ref(null)
const auth = useAuthStore();


onMounted(async() => {
    await getListeUsers()
    if (!loader.value) $('.pagination').addClass("pagination-sm pagination-rounded")

})
const getUser = async(user) => {
    currentUser.value = user
    await  getUserDonations(user.id)
}

const datatableOptions = {
    pagingType: "simple_numbers",
    processing: true,
    searching: true,
    paging: true,
    bRetrieve: true,
    bDestroy: true,
    responsive: true,
    lengthMenu: [5, 10, 25, 50, 100],
    pageLength: 5,
    drawCallback: function () {
        $('.pagination').addClass("pagination-sm pagination-rounded")
    },

};
</script>

<style>
@import 'datatables.net-bs5';
</style>
<style lang="scss">
.pagination-rounded {
    .page-link {
        border-radius: 30px !important;
        margin: 0 3px !important;
        border: none;
        width: 32px;
        height: 32px;
        padding: 0;
        text-align: center;
        line-height: 32px;
        padding-left: 10px;
        padding-right: 10px;
    }
}
</style>