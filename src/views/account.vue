<template>
  <div id="account" class="text-main-500">
    <topmenu />
    <div class="customContainer grid grid-cols-1 md:grid-cols-12 md:gap-10 mx-auto mb-20 md:my-20">
      <div class="profileMenu col-span-1 md:col-span-4 md:px-10">
        <profileMenu />
      </div>
      <div class="mainInfo p-5 col-span-1 md:col-span-8">
        <router-view></router-view>
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

<style lang="scss" scoped></style>
