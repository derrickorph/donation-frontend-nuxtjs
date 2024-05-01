
<template>
    <main>
        <section class="container d-flex flex-column">
            <div class="row align-items-center justify-content-center g-0 min-vh-100">

                <div class="col-lg-8 col-md-8 py-8 py-xl-0">
                    <!-- Card -->
                    <div class="card shadow ">
                        <!-- Card body -->
                        <div class="card-body p-6">
                            <div class="mb-4 text-center">
                                <NuxtLink to="/"><img src="/assets/images/logo-192x192.png" width="60" class="mb-4" alt="logo-icon"></NuxtLink>
                                <h1 class="mb-1 fw-bold">Registration</h1>
                            </div>
                            <!-- Form -->
                            <Form @submit="onSubmit" :validation-schema="schema">
                                <div class="row">
                                    <div class="col-md-12">

                                        <div class="mb-3">
                                            <label for="email" class="form-label">Email</label>
                                            <Field type="email" id="email" class="form-control form-control-sm" name="email" />
                                            <ErrorMessage name="email" class="error-message" />
                                        </div>
                                        <!-- Password -->
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="username" class="form-label">Username</label>
                                            <Field class="form-control form-control-sm" type="text" id="username" name="username" />
                                            <ErrorMessage name="username" class="error-message" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="surname" class="form-label">Surname</label>
                                            <Field class="form-control form-control-sm" type="text" id="surname" name="surname" />
                                            <ErrorMessage name="surname" class="error-message" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="phoneNumber" class="form-label">Phone number</label>
                                            <Field class="form-control form-control-sm" type="text" id="phoneNumber" name="phoneNumber" />
                                            <ErrorMessage name="phoneNumber" class="error-message" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="id_number" class="form-label">ID Number</label>
                                            <Field class="form-control form-control-sm" type="text" id="id_number" name="id_number" />
                                            <ErrorMessage name="id_number" class="error-message" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="bank" class="form-label">Bank name</label>
                                            <Field class="form-control form-control-sm" type="text" id="bank" name="bank" />
                                            <ErrorMessage name="bank" class="error-message" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="acc" class="form-label">Bank account number</label>
                                            <Field class="form-control form-control-sm" type="text" id="acc" name="acc" />
                                            <ErrorMessage name="acc" class="error-message" />

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label" for="password">Password</label>
                                            <Field type="password" id="password" class="form-control form-control-sm" name="password" placeholder="**************" />
                                            <ErrorMessage name="password" class="error-message" />

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label" for="passwordConfirmation">Confirm Password</label>
                                            <Field type="password" id="passwordConfirmation" class="form-control form-control-sm" name="passwordConfirmation" placeholder="**************" />
                                            <ErrorMessage name="passwordConfirmation" class="error-message" />

                                        </div>
                                    </div>
                                </div>


                                <div>
                                    <!-- Button -->
                                    <div class="d-grid">
                                        <button type="submit" class="btn btn-primary btn-sm ">Register</button>
                                    </div>
                                </div>
                                <hr class="my-4">
                                <div class="mt-4 text-center">
                                    <!--Facebook-->
                                    <span>Already have an account? <NuxtLink to="/login" class="ms-1">Log in</NuxtLink></span>

                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script setup>
import { Field, Form, ErrorMessage, defineRule } from 'vee-validate';
import * as yup from 'yup';

useHead({
    title: "KYD | Registration"
})
definePageMeta({
    middleware: ['guest']
})
import useAlertNotification from '../services/notification'
const { errorSweetAlert } = useAlertNotification()
const auth = useAuthStore();
const schema = yup.object({
    email: yup.string().required().email().label('Email'),
    username: yup.string().required().label('Username'),
    surname: yup.string().required().label('Surname'),
    phoneNumber: yup.string().required().label('Phone number'),
    bank: yup.string().required().label('Bank name'),
    acc: yup.string().required().label('Bank account number'),
    id_number: yup.string().required().label('ID number'),
    password: yup.string().required().min(8).label('Password'),
    passwordConfirmation: yup
        .string()
        .required()
        .oneOf([yup.ref('password')], 'Passwords do not match').label('Password confirmation'),
})
const onSubmit = async (values) => {
    try {
        await auth.register(values)
    } catch (error) { 
       
        if (error.hasOwnProperty("data")) {
            Object.keys(error.data).forEach(key => {
                errorSweetAlert('Oups! Error', error.data[key][0])
            })
            if (error.data.hasOwnProperty('detail')) {
                errorSweetAlert('Oups! Error', error.data.detail)
            }
        }
    }

}

</script>