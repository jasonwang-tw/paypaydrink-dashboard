<template>
  <div id="cartView">
    <h2 class="text-2xl md:text-3xl text-center">購物內容</h2>
    <hr />
    <buyList />
    <countResult />
    <div class="text-right">
      <router-link
        to="/cart/checkout"
        class="inline-block w-40 text-center btn-dark-blue"
        @click="path = this.$route.path"
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

    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped></style>
