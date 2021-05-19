<template>
  <div id="cartView">
    <h2 class="text-2xl md:text-3xl">確認購物內容</h2>
    <hr />
    <buyList />
    <countResult />
    <div class="text-right">
      <router-link to="/cart/checkout" class="inline-block w-40 text-center btn-dark-blue"
        >下一步</router-link
      >
    </div>
  </div>
</template>

<script>
  import buyList from '@/components/buyList.vue'
  import countResult from '@/components/countResult.vue'

  export default {
    name: 'cartView',
    components: {
      buyList,
      countResult
    },
    // props: {
    //   select: selected
    // },
    data() {
      return {
        // selected: ''
      }
    }
  }
</script>

<style lang="scss" scoped></style>
