<template>
  <div id="freeDrink">
    <topmenu />
    <div class="px-5 mx-auto mt-10 mb-20 md:my-20 customContainer text-main-500">
      <router-view />
    </div>
    <footerBar />
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'

  export default {
    name: 'freeDrink',
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
