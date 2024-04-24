<template>
    <!-- Begin page -->
    <div class="wrapper">


        <AdminHeader/>
        <AdminSidebar/>

      

        <!-- ============================================================== -->
        <!-- Start Page Content here -->
        <!-- ============================================================== -->

        <div class="content-page">
            <div class="content">

                <slot/>

            </div>
            <!-- content -->

           <AdminFooter/>

        </div>

        <!-- ============================================================== -->
        <!-- End Page content -->
        <!-- ============================================================== -->

    </div>
    <!-- END wrapper -->
</template>