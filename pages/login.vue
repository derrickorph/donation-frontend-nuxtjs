
<template>
    <main>
        <section class="container d-flex flex-column">
            <div class="row align-items-center justify-content-center g-0 min-vh-100">

                <div class="col-lg-5 col-md-8 py-8 py-xl-0">
                    <!-- Card -->
                    <div class="card shadow ">
                        <!-- Card body -->
                        <div class="card-body p-6">
                            <div class="mb-4">
                                <NuxtLink to="/"><img src="/assets/images/logo-192x192.png" width="60" class="mb-4" alt="logo-icon"></NuxtLink>
                                <h1 class="mb-1 fw-bold">Login in</h1>
                            </div>
                            <!-- Form -->
                            <form>
                                <!-- Username -->
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" id="email" class="form-control" name="email" placeholder="Email address here" required>
                                </div>
                                <!-- Password -->
                                <div class="mb-3">
                                    <label class="form-label d-flex justify-content-between" for="password">
                                        Password

                                        <div class="flex items-center justify-end ">
                                            <NuxtLink to="/forget-password" class="text-sm text-danger text-decoration-none ">Forgot your password?</NuxtLink>
                                        </div>
                                    </label>
                     
                                    <input type="password" id="password" class="form-control" name="password" placeholder="**************" required>
                                </div>
                                <!-- Checkbox -->
                                <div class="d-lg-flex justify-content-between align-items-center mb-4">
                                    <div>
                                    </div>
                                </div>
                                <div>
                                    <!-- Button -->
                                    <div class="d-grid">
                                        <button type="submit" class="btn btn-primary btn-sm ">Sign in</button>
                                    </div>
                                </div>
                                <hr class="my-4">
                                <div class="mt-4 text-center">
                                    <!--Facebook-->
                                    <span>Don’t have an account? <NuxtLink to="/register" class="ms-1">Register</NuxtLink></span>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>