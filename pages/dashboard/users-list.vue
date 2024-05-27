<template>
    <section class="container-fluid p-4">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
                <div class="border-bottom pb-3 mb-3 d-lg-flex justify-content-between align-items-center">
                    <div class="mb-3 mb-lg-0">
                        <h1 class="mb-0 h2 fw-bold">Users list</h1>
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
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user,index) in users" :key="index">
                                    <td>{{ index+1 }}</td>
                                    <td>{{ user.username }}</td>
                                    <td>{{ user.surname }}</td>
                                    <td>{{ user.id_number }}</td>
                                    <td>{{ user.email }}</td>
                                    <td>{{ user.phoneNumber }}</td>
                                    <td>
                                        <span class="badge rounded-pill text-bg-success">Enable</span>
                                    </td>

                                    <td class="text-center">
                                        <button @click="toogleIsActive(user.id)" class="btn btn-xs btn-danger btn-icon rounded-circle">
                                            <i class="bi bi-exclamation-triangle"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </DataTable>
                    </div>
                </div>
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
import Swal from "sweetalert2";

useHead({
    title: "KYD | User List"
})
definePageMeta({
    layout: 'admin',
    middleware: ['auth', 'is-super-admin']
})

const { users, loader, userProcess, getListeUsers, changeStatus  } = useUsers()
DataTable.use(DataTablesCore);

const toogleIsActive = (id) => {
    try {
        Swal.fire({
            title: 'Approval',
            text: 'Do you want to block this user?',
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
            if (result.isConfirmed) await changeStatus(id)
        })
    } catch (error) {
        console.log(error);
    }
}

onMounted(async() => {
    await getListeUsers()
    if (!loader.value) $('.pagination').addClass("pagination-sm pagination-rounded")
})

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