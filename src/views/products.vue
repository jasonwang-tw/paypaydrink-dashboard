<template>
  <div id="products">
    <topmenu />
    <div class="text-main-500">
      <router-view />
    </div>
    <footerBar />
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'

  export default {
    name: 'products',
    components: {
      topmenu,
      footerBar
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped></style>
