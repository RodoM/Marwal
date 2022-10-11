<template>
  <main>
    <hero-component seccion="Productos"></hero-component>
    <section class="container">
      <div class="row gx-3">
        <div class="col-md-2">
          <h2>Filtro</h2>
          <p>filtro1</p>
          <p>filtro2</p>
          <p>filtro3</p>
        </div>
        <div class="col-md-10">
          <div class="row gx-3 justify-content-between"> <!-- v-for -->
            <div class="col-lg-3 col-md-6"> <!-- usar una lista -->
              <product-card nombre="Nombre1"></product-card>
            </div>
            <div class="col-lg-3 col-md-6">
              <product-card nombre="Nombre2"></product-card>
            </div>
            <div class="col-lg-3 col-md-6">
              <product-card nombre="Nombre3"></product-card>
            </div>
            <div class="col-lg-3 col-md-6">
              <product-card nombre="Nombre4"></product-card>
            </div>
          </div>
        </div>
      </div>
    </section>
    <whatsapp-btn></whatsapp-btn>
  </main>
  
</template>

<script>
import HeroComponent from '@/components/layout/bs-hero.vue'
import ProductCard from '@/components/products/bs-product-card.vue'
import WhatsappBtn from '@/components/layout/bs-whatsapp.vue'

export default {
  name: 'ProductsView',
  components: {
    HeroComponent,
    ProductCard,
    WhatsappBtn,
  }
}
</script>