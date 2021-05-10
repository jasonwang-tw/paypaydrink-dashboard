<template>
  <div id="account" class="text-main-500">
    <topmenu />
    <div class="grid grid-cols-1 mx-auto mb-20 customContainer md:grid-cols-12 md:gap-10 md:my-20">
      <div class="col-span-1 profileMenu md:col-span-4">
        <profileMenu />
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
  import profileMenu from '@/components/profileMenu.vue'

  export default {
    name: 'account',
    components: {
      topmenu,
      footerBar,
      profileMenu
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
