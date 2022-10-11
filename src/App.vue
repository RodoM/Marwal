<template>
  <Navbar/>
  <router-view/>
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
