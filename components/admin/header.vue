<template>
  <div class="header">
    <!-- navbar -->
    <nav class="navbar-default navbar navbar-expand-lg">
      <a id="nav-toggle" href="#">
        <i class="fe fe-menu"></i>
      </a>

      <!--Navbar nav -->
      <div class="ms-auto d-flex">
        <a href="#" class="form-check form-switch theme-switch btn btn-light btn-icon rounded-circle ">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
          <label class="form-check-label" for="flexSwitchCheckDefault"></label>

        </a>
        <ul class="navbar-nav navbar-right-wrap ms-2 d-flex nav-top-wrap">

          <!-- List -->
          <li class="dropdown ms-2">
            <a class="rounded-circle" href="#" role="button" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
              <div class="avatar avatar-md avatar-indicators avatar-online">
                <img alt="avatar" src="/assets/images/avatar.png" class="rounded-circle">
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownUser">
              <div class="dropdown-item">
                <div class="d-flex">
                  <div class="avatar avatar-md avatar-indicators avatar-online">
                    <img alt="avatar" src="/assets/images/avatar.png" class="rounded-circle">
                  </div>
                  <div class="ms-3 lh-1">
                    <h5 class="mb-1">{{ auth.getUser.username }}</h5>
                    <p class="mb-0 text-muted">{{ auth.getUser.email }}</p>
                  </div>
                </div>
              </div>
              <div class="dropdown-divider"></div>
              <ul class="list-unstyled">

                <li>
                  <NuxtLink class="dropdown-item" to="/dashboard/profile">
                    <i class="fe fe-user me-2"></i> Profile
                  </NuxtLink>
                </li>


              </ul>
              <div class="dropdown-divider"></div>
              <ul class="list-unstyled">
                <li>
                  <a class="dropdown-item" @click.prevent="logout" href="#">
                    <i class="fe fe-power me-2"></i> Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
const auth = useAuthStore();
const logout = async () => {
  try {
    await auth.logout()
  } catch (error) {
    console.log(error);
  }
}
</script>
