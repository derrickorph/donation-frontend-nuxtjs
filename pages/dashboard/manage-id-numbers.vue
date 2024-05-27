<template>
  <section class="container-fluid p-4">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-12">
        <div class="border-bottom pb-3 mb-3 d-lg-flex justify-content-between align-items-center">
          <div class="mb-3 mb-lg-0">
            <h1 class="mb-0 h2 fw-bold">Manage ID Number</h1>
          </div>
          <div class="d-flex">
            <a href="#" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#idNumberModal">Add ID number</a>
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
            <DataTable v-if="!loader" :options="datatableOptions" class="table table-striped table-sm table-bordered">
              <thead class="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">ID Number</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in idNumbers" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.number }}</td>

                  <td class="text-center">
                    <!-- <button class="btn btn-xs btn-warning btn-icon rounded-circle" @click="getIdNumber(item)"><i class="mdi mdi-pencil-box-outline"></i></button> -->
                    <button class="btn btn-xs btn-danger btn-icon rounded-circle mx-1" @click="deleteItem(item.id)"><i class="mdi mdi-trash-can-outline"></i></button>
                  </td>
                </tr>
              </tbody>
            </DataTable>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="idNumberModal" tabindex="-1" data-bs-backdrop="false" role="dialog" aria-labelledby="idNumberModalTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="idNumberModalTitle">Add ID Number</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <Form ref="form" @submit="onSubmit" :validation-schema="schema" :initial-values="formValues">
            <div class="modal-body">
              <!-- Username -->
              <div class="mb-3">
                <label for="number" class="form-label">ID Number</label>
                <Field type="text" id="number" class="form-control" name="number" placeholder="" />
                <ErrorMessage name="number" class="error-message" />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger btn-sm" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary btn-sm">Add</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
  <!-- container -->
</template>

<script setup>
  import DataTable from "datatables.net-vue3";
  import DataTablesCore from "datatables.net-bs5";
  import { Field, Form, ErrorMessage } from "vee-validate";
  import * as yup from "yup";
  import { onMounted } from "vue";
  import useIdNumbers from '../../services/id-numberService'
  import Swal from "sweetalert2";


  useHead({
    title: "KYD | Manage ID Number",
  });

  definePageMeta({
    layout: "admin",
    middleware: ["auth", 'is-super-admin'],
  });
const { idNumbers, idNumberSuccess, loader, createIdNumber, getListeIdNumbers, deleteIdNumber } = useIdNumbers()
  DataTable.use(DataTablesCore);
  
  onMounted(async() => {
    await getListeIdNumbers()
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

  const schema = yup.object().shape({
    number: yup.number().required().positive().integer().label("ID Number"),
  });
  const formValues = ref()
  const form = ref(null); 
  const getIdNumber = (item) => {
    form.value.resetForm()
    $('#idNumberModal').modal('show');
    formValues.value = {
      id: item.id,
      number: item.number,
    };
  }
  const onSubmit = async (values, { resetForm }) => {
    try {
       await createIdNumber(values)
      if (idNumberSuccess.value) {
        resetForm()
        $('#idNumberModal').modal('toggle');
       }
    } catch (error) {
    }
  };
  const deleteItem = async (id) => {
    try {
      Swal.fire({
        title: 'Approval',
        text: 'Would you like to delete this ID number?',
        showCancelButton: true,
        icon: 'info',
        customClass: {
          cancelButton: 'btn btn-danger btn-sm ',
          confirmButton: 'btn btn-success btn-sm ms-2',
        },
        confirmButtonText: 'Confirm',
        buttonsStyling: false,
        cancelButtonText: 'Cancel',
        reverseButtons:true
      }).then(async result => {
        if (result.isConfirmed) {
          await deleteIdNumber(id)
          resetForm()
          $('#idNumberModal').modal('toggle');
        }
      })
    } catch (error) {
      console.log(error);
    }
  };
</script>

<style>
  @import "datatables.net-bs5";
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
