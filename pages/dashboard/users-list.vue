<template>
    <!-- Start Content-->
    <div class="container-fluid">

        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <h4 class="page-title">Users list</h4>
                </div>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <!-- <div class="card-header">
                        <button class="btn btn-sm btn-primary">Add user <i class=" uil-user-plus"></i></button>
                    </div> -->
                    <div class="card-body">
                        <DataTable :options="datatableOptions" class=" table table-striped table-sm table-bordered">
                            <thead>
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
                                        <span class="badge bg-success-lighten text-success">Enable</span>
                                    </td>

                                    <td class="text-center">
                                        <button class="btn btn-sm btn-danger rounded"><i class="mdi mdi-trash-can-outline"></i></button>
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
import DataTablesCore from 'datatables.net-bs5';

definePageMeta({
    layout: 'admin',
    head() {
        return {
            script: [
                {
                    src: '/assets/js/app.min.js'
                }
            ]
        }
    }, 
})
DataTable.use(DataTablesCore);

const users = [{
    username:'derrick19',
    surname:'Bryan J. Luellen',
    id_number:'1552850255555',
    email:'collier@jourrapide.com',
    phoneNumber:'(+1)628 682 286585',
}];
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
        $(".dt-paging-button").addClass("pagination-rounded");
    },

};
</script>

<style>
@import 'datatables.net-bs5';
</style>