<template>
    <!-- Start Content-->
    <div class="container-fluid">

        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <h4 class="page-title">Dashboard</h4>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card widget-inline">
                    <div class="card-body p-0">
                        <div class="row g-0">
                            <div class="col-sm-6 col-lg-3">
                                <div class="card rounded-0 shadow-none m-0">
                                    <div class="card-body text-center">
                                        <i class="ri-group-line text-success  font-24"></i>
                                        <h3><span>29</span></h3>
                                        <p class="text-muted font-15 mb-0">Users</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-3">
                                <div class="card rounded-0 shadow-none m-0 border-start border-light">
                                    <div class="card-body text-center">
                                        <i class="ri-list-check-2 text-muted font-24"></i>
                                        <h3><span>715</span></h3>
                                        <p class="text-muted font-15 mb-0">Total Donation</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-3">
                                <div class="card rounded-0 shadow-none m-0 border-start border-light">
                                    <div class="card-body text-center">
                                        <i class="ri-group-line text-danger  font-24"></i>
                                        <h3><span>31</span></h3>
                                        <p class="text-muted font-15 mb-0">Users blocked</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-3">
                                <div class="card rounded-0 shadow-none m-0 border-start border-light">
                                    <div class="card-body text-center">
                                        <i class="ri-line-chart-line text-muted font-24"></i>
                                        <h3><span>93</span> </h3>
                                        <p class="text-muted font-15 mb-0">Productivity</p>
                                    </div>
                                </div>
                            </div>

                        </div> <!-- end row -->
                    </div>
                </div> <!-- end card-box-->
            </div> <!-- end col-->
        </div>


    </div>
    <!-- container -->
</template>

<script setup>

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
</script>