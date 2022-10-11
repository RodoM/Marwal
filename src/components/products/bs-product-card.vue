<template>
  <div class="card p-0">
    <img src="@/assets/images/taladro.png" class="card-img-top" alt="...">
    <div class="card-body rounded-bottom d-flex flex-column justify-content-center" style="background-color: #106E1A;">
      <h5 class="card-title text-center text-white">{{ nombre }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductComponent',
  props: {
    nombre: String,
    imagen: String,
  }
}
</script>