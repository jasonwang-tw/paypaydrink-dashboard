<template>
  <div id="cartView">
    <topmenu />
    <div class="customContainer mx-auto my-20 text-main-500">
      <h2>購物內容</h2>
      <buyList />
      <countResult />
      <div class="text-right">
        <router-link to="/cart/checkout" class="btn-dark-blue inline-block w-40 text-center"
          >下一步</router-link
        >
      </div>
    </div>
    <footerBar />
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'
  import buyList from '@/components/buyList.vue'
  import countResult from '@/components/countResult.vue'

  export default {
    name: 'cartView',
    components: {
      topmenu,
      footerBar,
      buyList,
      countResult
    },
    // props: {
    //   select: selected
    // },
    data() {
      return {
        selected: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .customContainer {
    max-width: 960px;
  }
</style>
