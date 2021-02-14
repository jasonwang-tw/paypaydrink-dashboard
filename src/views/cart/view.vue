<template>
  <div id="cartView">
    <topmenu />
    <div class="customContainer mx-auto my-20">
      飲品 數量 單價
      <div class="userImg rounded-full overflow-hidden flex-shrink-0 mr-5">
        <img src="../../assets/how.jpg" alt="" />
      </div>
      滴妹好棒棒 查看全部配方 飲品優惠，低消100折$30
      <div class="userimg rounded-lg overflow-hidden mr-3">
        <img src="../../../src/assets/product.jpg" alt="" />
      </div>
      東方不敗
      內含配料
      粉圓、布丁、紅豆
      規格
      冷飲、中杯、三分糖、微冰
      <select name="" id="">
        <option value="1">1</option>
      </select>
      $60
      小計(6杯飲品)
      滴妹好棒棒 優惠 低消$100折$30
      $360
      $330
      <router-link to="/cart/checkout">下一步</router-link>
    </div>
    <footerBar />
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'
  import pageNav from '@/components/pageNav.vue'

  export default {
    name: 'cartView',
    components: {
      topmenu,
      footerBar,
      pageNav
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .customContainer {
    max-width: 960px;
  }
  .userimg {
    width: 60px;
    height: 60px;
  }
</style>
