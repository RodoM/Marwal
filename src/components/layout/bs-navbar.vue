<template>
  <nav class="navbar fixed-top navbar-expand-lg" style="background-color: #106E1A;">
    <div class="container-fluid">
      <router-link to="/" class="nav-link"><img src="@/assets/images/marwal.png" alt=""></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 w-100 justify-content-around">
          <li class="nav-item">
            <router-link to="/productos" class="nav-link text-white">PRODUCTOS</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/servicios" class="nav-link text-white">SERVICIOS</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/nosotros" class="nav-link text-white">NOSOTROS</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contacto" class="nav-link text-white">CONTACTO</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>