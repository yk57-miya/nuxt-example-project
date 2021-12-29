<template>
  <div id="app" class="App relative">
    <Nuxt />
    <Footer />
    <Header />
    <!-- <Menu />-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import mixinHead from '@/plugins/mixin-head';

export default Vue.extend({
  // mixins: [mixinHead],
  computed: {
    isVisible() {
      return this.$route.path !== '/';
    },
    isTopRoute() {
      return this.$route.path === '/';
    }
  },
  mounted() {
    const hash = this.$route.hash;
    if (hash && hash.match(/^#.+$/)) {
      setTimeout(() => {
        const el: any = document.querySelector(hash);
        const position = el?.offsetTop - 50 ?? 0;
        if ('scrollBehavior' in document.documentElement.style) {
          window.scrollTo({
            top: position,
            behavior: 'smooth'
          });
        } else {
          window.scrollTo(0, position);
        }
      }, 1000);
    }
  }
});
</script>
