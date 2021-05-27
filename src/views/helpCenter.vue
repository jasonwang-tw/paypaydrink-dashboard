<template>
  <div id="help" class="text-main-500">
    <topmenu />
    <div class="grid grid-cols-1 mx-auto mb-20 customContainer md:grid-cols-12 md:gap-10 md:my-20">
      <div class="col-span-1 md:col-span-4">
        <helpMenu />
      </div>
      <div class="col-span-1 p-5 md:p-0 mainInfo md:col-span-8">
        <router-view />
      </div>
    </div>
    <footerBar />
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'
  import helpMenu from '@/components/helpMenu.vue'

  export default {
    name: 'help',
    components: {
      topmenu,
      footerBar,
      helpMenu
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  @media (max-width: 768px) {
    .mainInfo {
      margin-top: 44px;
    }
  }
</style>
