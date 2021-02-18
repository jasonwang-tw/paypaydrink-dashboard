<template>
  <div id="products">
    <topmenu />
    <router-view />
    <footerBar />
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'

  export default {
    name: '',
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
