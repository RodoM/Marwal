<template>
  <Navbar/>
  <transition name="fade" mode="out-in">
    <router-view/>
  </transition>
  <Footer/>
</template>

<script>
import Navbar from '@/components/layout/bs-navbar.vue'
import Footer from '@/components/layout/bs-footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>