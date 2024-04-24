
<template>
    <main>
        <section class="container d-flex flex-column">
            <div class="row align-items-center justify-content-center g-0 min-vh-100">

                <div class="col-lg-8 col-md-8 py-8 py-xl-0">
                    <!-- Card -->
                    <div class="card shadow ">
                        <!-- Card body -->
                        <div class="card-body p-6">
                            <div class="mb-4">
                                <NuxtLink to="/"><img src="/assets/images/logo-192x192.png" width="60" class="mb-4" alt="logo-icon"></NuxtLink>
                                <h1 class="mb-1 fw-bold">Registration</h1>
                            </div>
                            <!-- Form -->
                            <form>
                                <div class="row">
                                    <div class="col-md-12">

                                        <div class="mb-3">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="email" id="email" class="form-control form-control-sm" name="email" required>
                                        </div>
                                        <!-- Password -->
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="username" class="form-label">Username</label>
                                            <input class="form-control form-control-sm" type="text" id="username">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="id_number" class="form-label">ID Number</label>
                                            <input class="form-control form-control-sm" type="text" id="id_number">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="bank" class="form-label">Bank name</label>
                                            <input class="form-control form-control-sm" type="text" id="bank">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="acc" class="form-label">Bank account number</label>
                                            <input class="form-control form-control-sm" type="text" id="acc">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label" for="password">Password</label>

                                            <input type="password" id="password" class="form-control form-control-sm" name="password" placeholder="**************" required>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label" for="confirmPassword">Confirm Password</label>

                                            <input type="password" id="confirmPassword" class="form-control form-control-sm" name="confirmPassword" placeholder="**************" required>
                                        </div>
                                    </div>
                                </div>

                                <!-- Checkbox -->
                                <div class="d-lg-flex justify-content-between align-items-center mb-4">
                                    <div>
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>