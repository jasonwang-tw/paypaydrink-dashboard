<template>
  <div id="search">
    <topmenu />
    <div class="container mx-auto my-20">
      <productGrid />
      <pageNav />
    </div>
    <footerBar />
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'
  import pageNav from '@/components/pageNav.vue'
  import productGrid from '@/components/productGrid.vue'

  export default {
    name: 'search',
    components: {
      topmenu,
      footerBar,
      pageNav,
      productGrid
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .customContainer {
    max-width: 960px;
  }
  .userimg {
    width: 60px;
    height: 60px;
  }
</style>
