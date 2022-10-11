<template>
  <main>
    <hero-component seccion="Servicios"></hero-component>
    <section class="container d-flex flex-column gap-3 my-6">
      <div class="row g-3 justify-content-between">
        <service-card></service-card>
        <service-card></service-card>
      </div>
      <div class="row g-3 justify-content-between">
        <service-card></service-card>
        <service-card></service-card>
      </div>
    </section>
  </main>
  <whatsapp-btn></whatsapp-btn>
</template>

<script>
import ServiceCard from '@/components/services/bs-service-card.vue'
import HeroComponent from '@/components/layout/bs-hero.vue'
import WhatsappBtn from '@/components/layout/bs-whatsapp.vue'

export default {
  name: 'ServiceView',
  components: {
    ServiceCard,
    HeroComponent,
    WhatsappBtn,
  }
}
</script>
<style scoped>
.my-6 {
  margin-top: 6.5rem;
  margin-bottom: 6.5rem;
}
</style>
