<template>
  <main class="d-flex flex-column gap-5">
    <section>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/images/1.jpg" class="d-block w-100 img" alt="...">
          </div>
          <div class="carousel-item">
            <img src="@/assets/images/2.jpg" class="d-block w-100 img" alt="...">
          </div>
          <div class="carousel-item">
            <img src="@/assets/images/3.jpg" class="d-block w-100 img" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <section class="d-flex flex-column gap-3">
      <title-component titulo="Servicios"></title-component>
      <div class="d-flex align-items-center green-background">
        <div class="container">
          <div class="row g-3 justify-content-between">
            <service-card v-motion-fade-visible-once></service-card>
            <service-card v-motion-fade-visible-once></service-card>
          </div>
        </div>
      </div>
    </section>
    <section class="d-flex flex-column container gap-3">
      <title-component titulo="Nosotros"></title-component>
      <div class="row justify-content-between g-3">
        <div class="col-md-6">
          <img v-motion-fade-visible-once src="@/assets/images/4.png" class="img-fluid rounded" alt="">
        </div>
        <div class="col-md-6">
          <h2 v-motion-fade-visible-once>¿Quienes somos?</h2>
          <p v-motion-fade-visible-once>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas vestibulum lacus ac viverra volutpat.
            Morbi suscipit, lacus non mattis fringilla, mi justo fringilla urna, in eleifend metus arcu ac odio.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst.
            Sed faucibus est ligula, quis imperdiet ligula rhoncus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas vestibulum lacus ac viverra volutpat.
            Morbi suscipit, lacus non mattis fringilla, mi justo fringilla urna, in eleifend metus arcu ac odio.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst.
            Sed faucibus est ligula, quis imperdiet ligula rhoncus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas vestibulum lacus ac viverra volutpat.
            Morbi suscipit, lacus non mattis fringilla, mi justo fringilla urna, in eleifend metus arcu ac odio.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst.
            Sed faucibus est ligula, quis imperdiet ligula rhoncus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas vestibulum lacus ac viverra volutpat.
            Morbi suscipit, lacus non mattis fringilla, mi justo fringilla urna, in eleifend metus arcu ac odio.
          </p>
        </div>
      </div>
    </section>
    <section class="d-flex flex-column gap-3">
      <title-component titulo="Contacto"></title-component>
      <div class="d-flex align-items-center green-background">
        <div class="container">
          <div class="row justify-content-between g-3">
            <div class="col-md-6">
              <h3 v-motion-fade-visible-once class="text-white">Teléfono:</h3>
              <p v-motion-fade-visible-once class="text-white mb-0">03476-432569</p>
              <p v-motion-fade-visible-once class="text-white">URGENCIAS: 03476-15565670/15208864</p>
              <h3 v-motion-fade-visible-once class="text-white">Email:</h3>
              <p v-motion-fade-visible-once class="text-white">oleomarwalsl@gmail.com</p>
              <h3 v-motion-fade-visible-once class="text-white">Redes Sociales:</h3>
              <p v-motion-fade-visible-once class="text-white">Marwal oleohidráulica</p>
            </div>
            <div class="col-md-6">
              <div v-motion-fade-visible-once id="map" class="h-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <whatsapp-btn></whatsapp-btn>
  </main>
</template>

<script>
import TitleComponent from '@/components/layout/bs-title.vue'
import ServiceCard from '@/components/services/bs-service-card-home.vue'
import WhatsappBtn from '@/components/layout/bs-whatsapp.vue'

import { Loader } from '@googlemaps/js-api-loader';

export default {
  name: 'HomeView',
  components: {
    TitleComponent,
    ServiceCard,
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
.green-background {
  background-color: #106E1A;
  height: 400px;
}
.img {
  object-fit: cover;
  height: 800px;
}
.h-300 {
  height: 300px;
}
@media (max-width: 768px) {
  .green-background {
    height: 700px;
  }
  .mobile-card-container > .row {
    overflow-x: auto;
    scroll-snap-type: x proximity;
  }
}
</style>
