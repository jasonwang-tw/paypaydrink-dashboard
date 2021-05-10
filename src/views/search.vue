<template>
  <div id="search" class="text-main-500">
    <topmenu />
    <div class="container px-5 mx-auto mt-10 mb-20 md:my-20 md:px-0">
      <h2 class="mb-10 text-2xl md:text-3xl">搜尋 "<span>紅茶</span>"</h2>
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
  .userimg {
    width: 60px;
    height: 60px;
  }
</style>
