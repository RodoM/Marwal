<template>
  <main>
    <hero-component seccion="Nosotros"></hero-component>
    <div class="d-flex flex-column gap-4 my-5">
      <section class="container">
        <div class="row justify-content-center gy-3">
          <div class="col-12">
            <img src="@/assets/images/us1.png" class="w-100 img-fluid rounded" alt="">
          </div>
          <div class="col-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus, dui eget malesuada pretium, ligula ipsum maximus est,
              id blandit ipsum purus sed justo. Integer sit amet nisi vitae nisi lacinia venenatis. Sed sagittis sit amet dui id fringilla.
              Maecenas vel libero ex. Proin posuere nec metus id malesuada. Phasellus eleifend est cursus enim auctor, sed commodo elit lacinia.
              Fusce et nibh eros. Proin et pellentesque ante. Vestibulum leo ex, gravida nec aliquet a, lacinia et odio. Ut ut pulvinar lectus,
              vehicula malesuada purus. Suspendisse sollicitudin quam sed elit feugiat, at finibus dui convallis. Cras ullamcorper, purus vel
              ultricies vehicula, risus magna convallis purus, vitae consectetur leo ex eget leo. Vivamus eu eros in lectus hendrerit feugiat.
              Nullam et aliquam erat. Duis fermentum consectetur nisl a placerat. Nulla imperdiet, tortor vitae lobortis aliquet, augue massa
              fermentum ante, ac ullamcorper purus neque sit amet arcu.
            </p>
          </div>
        </div>
      </section>
      <section class="green-background">
        <div class="container">
          <div class="row justify-content-center g-3">
            <div class="col-md-6">
              <img src="@/assets/images/us2.png" class="w-100 img-fluid rounded" alt="">
            </div>
            <div class="col-md-6">
              <p class="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus, dui eget malesuada pretium, ligula ipsum maximus est,
                id blandit ipsum purus sed justo. Integer sit amet nisi vitae nisi lacinia venenatis. Sed sagittis sit amet dui id fringilla.
                Maecenas vel libero ex. Proin posuere nec metus id malesuada. Phasellus eleifend est cursus enim auctor, sed commodo elit lacinia.
                Fusce et nibh eros. Proin et pellentesque ante. Vestibulum leo ex, gravida nec aliquet a, lacinia et odio. Ut ut pulvinar lectus,
                vehicula malesuada purus. Suspendisse sollicitudin quam sed elit feugiat, at finibus dui convallis. Cras ullamcorper, purus vel
                ultricies vehicula, risus magna convallis purus, vitae consectetur leo ex eget leo. Vivamus eu eros in lectus hendrerit feugiat.
                Nullam et aliquam erat. Duis fermentum consectetur nisl a placerat. Nulla imperdiet, tortor vitae lobortis aliquet, augue massa
                fermentum ante, ac ullamcorper purus neque sit amet arcu.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="container">
        <div class="row justify-content-center g-3">
          <div class="col-md-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus, dui eget malesuada pretium, ligula ipsum maximus est,
              id blandit ipsum purus sed justo. Integer sit amet nisi vitae nisi lacinia venenatis. Sed sagittis sit amet dui id fringilla.
              Maecenas vel libero ex. Proin posuere nec metus id malesuada. Phasellus eleifend est cursus enim auctor, sed commodo elit lacinia.
              Fusce et nibh eros. Proin et pellentesque ante. Vestibulum leo ex, gravida nec aliquet a, lacinia et odio. Ut ut pulvinar lectus,
              vehicula malesuada purus. Suspendisse sollicitudin quam sed elit feugiat, at finibus dui convallis. Cras ullamcorper, purus vel
              ultricies vehicula, risus magna convallis purus, vitae consectetur leo ex eget leo. Vivamus eu eros in lectus hendrerit feugiat.
              Nullam et aliquam erat. Duis fermentum consectetur nisl a placerat. Nulla imperdiet, tortor vitae lobortis aliquet, augue massa
              fermentum ante, ac ullamcorper purus neque sit amet arcu.
            </p>
          </div>
          <div class="col-md-6">
            <img src="@/assets/images/us3.png" class="w-100 img-fluid rounded" alt="">
          </div>
        </div>
      </section>
    </div>
    <whatsapp-btn></whatsapp-btn>
  </main>
</template>

<script>
import HeroComponent from '@/components/layout/bs-hero.vue'
import WhatsappBtn from '@/components/layout/bs-whatsapp.vue'

export default {
  name: 'AboutView',
  components: {
    HeroComponent,
    WhatsappBtn,
  }
}
</script>

<style>
.green-background {
  background-color: #106E1A;
  padding: 1.5rem 0;
}
</style>