<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg" style="background-color: #106E1A;">
      <div class="container-fluid">
        <router-link to="/" class="nav-link"><img src="@/assets/images/marwal.png" alt=""></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0 w-100 justify-content-around">
            <li class="nav-item">
              <a href="" class="nav-link text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">PRODUCTOS</a>
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

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Catálogo de productos</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            En el siguiente <a href="https://drive.google.com/drive/folders/19DtZxvaNQ1TMQqVs5DG5BjgJe7RMAFjt?usp=sharing" class="link-success" target="_blank">enlace</a> podrá visualizar nuestro catálogo de productos actualizado.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>