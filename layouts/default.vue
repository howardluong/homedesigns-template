<template>
  <div>
    <Navbar />
    <transition mode="out-in" name="fade">
        <Nuxt />
    </transition>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
// import Navbar from '../components/Navbar.vue';

export default {
  data() {
    return {

    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  width: 100%;
  max-width: 1920px;
  margin: auto;
  scroll-behavior: smooth;
  scroll-padding-top: 64px; /* height of sticky header */

  @media screen and (max-width: 768px) {
    scroll-padding-top: 160px;
  }

  @media screen and (max-width: 640px) {
    scroll-padding-top: 60px;
  }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>