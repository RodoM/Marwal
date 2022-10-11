<template>
  <div class="d-flex justify-content-center align-items-center" style="background-color: gray; height: 250px;">
    <h1 class="text-white m-0">{{ seccion }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HeroComponent',
  props: {
    seccion: String
  }
}
</script>