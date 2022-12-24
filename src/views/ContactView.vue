<template>
  <main>
    <hero-component seccion="Contacto"></hero-component>
    <section class="container d-flex flex-column gap-3 my-5">
      <div class="row g-3 justify-content-between">
        <div class="col-lg-6 col-md-12">
          <div class="info-card rounded" style="background-color: #106E1A;">
            <h3 class="text-center text-white">Dirección</h3>
            <p class="text-center text-white m-0">Berón de Astrada 930, San Lorenzo, Santa Fe</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="info-card rounded">
            <h3 class="text-center text-white">Email</h3>
            <p class="text-center text-white m-0">marwal@marwal.com</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="info-card rounded" style="background-color: #106E1A;">
            <h3 class="text-center text-white">Teléfono</h3>
            <p class="text-center text-white m-0">03476-432569</p>
          </div>
        </div>
      </div>
      <div class="row g-3 justify-content-between">
        <div class="col-md-6">
          <div id="map" class="h-300 rounded"></div>
        </div>
        <div class="col-md-6">
          <div class="rounded" style="background-color: #106E1A;">
            <form class="row h-300 p-3" name="contact" method="POST" data-netlify="true" onSubmit="submit">
              <div class="col-md-6 mt-2">
                <input type="text" class="form-control" id="inputNombre" name="nombre" placeholder="Nombre">
              </div>
              <div class="col-md-6 mt-2">
                <input type="email" class="form-control" id="inputemail" name="email" placeholder="Email">
              </div>
              <div class="col-12 mt-2">
                <input type="text" class="form-control" id="inputAsunto" name="asunto" placeholder="Asunto">
              </div>
              <div class="col-12 mt-2">
                <textarea class="form-control" id="inputMensaje" name="mensaje" rows="3" placeholder="Mensaje"></textarea>
              </div>
              <div class="col-12 mt-2 text-center">
                <button type="submit" class="btn btn-primary">Enviar mensaje</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
  <whatsapp-btn></whatsapp-btn>
</template>

<script>
/* eslint-disable no-undef */
import HeroComponent from '@/components/layout/bs-hero.vue'
import WhatsappBtn from '@/components/layout/bs-whatsapp.vue'

import { Loader } from '@googlemaps/js-api-loader';

export default {
  name: 'ContactView',
  components: {
    HeroComponent,
    WhatsappBtn,
  },
  setup() {
    const loader = new Loader({
      apiKey: "AIzaSyBn_ZotF3GUw-SeDUEQEwRJp6faZ-598Kk",
      version: "weekly",
      libraries: ["places"]
    });
    const mapOptions = {
      center: {
        lat: -32.7393873,
        lng: -60.7373912
      },
      zoom: 15
    };
    loader.load()
    .then((google) => {
      const map = new google.maps.Map(document.getElementById("map"), mapOptions);
      new google.maps.Marker({
        position: { lat: -32.7393873, lng: -60.7373912 },
        map: map
      })
    })
    .catch(err => {
      console.log(err)
    });
  }
}
</script>

<style scoped>
.btn-primary, .btn-primary:hover, .btn-primary:visited {
  color: #000 !important;
}
.btn-primary, .btn-primary:active {
  background-color: #fff !important;
  border: #ced4da !important;
}
.btn-check:focus + .btn, .btn:focus {
  box-shadow: none !important;
}
.info-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #106E1A;
  height: 150px;
  padding: 8px;
}
.h-300 {
  height: 300px;
}
</style>