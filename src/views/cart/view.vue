<template>
  <div id="cartView">
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
