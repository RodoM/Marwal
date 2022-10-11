<template>
  <div class="d-flex justify-content-center gap-3 my-2">
      <img src="@/assets/images/rectangle.svg" alt="">
      <h2 class="mb-0">{{ titulo }}</h2>
      <img src="@/assets/images/rectangle.svg" alt="">
    </div>
</template>

<script>
export default {
  name: 'TitleComponent',
  props: {
    titulo: String
  }
}
</script>