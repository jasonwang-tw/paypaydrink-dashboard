<template>
  <div id="checkout">
    <topmenu />
    <div class="customContainer xl:mx-auto my-20">
      訂單飲品
      數量
      總價
      <div class="userImg rounded-full overflow-hidden flex-shrink-0 mr-5">
        <img src="../../assets/how.jpg" alt="" />
      </div>
      滴妹好棒棒
      查看全部配方
      飲品優惠，低消100折$30
      <div class="userimg rounded-lg overflow-hidden mr-3">
        <img src="../../../src/assets/product.jpg" alt="" />
      </div>
      東方不敗
      內含配料
      粉圓、布丁、紅豆
      規格 冷飲、中杯、三分糖、微冰
      <select name="" id="">
        <option value="1">1</option>
      </select>
      $60
      小計(6杯飲品)
      滴妹好棒棒
      優惠
      低消$100折$30
      $360
      $330
      <hr>
      領取方式
      直接領取
      寄杯
      送禮
      選擇領取店鋪
      選擇店鋪
      配配飲 一號店
      台北市大安區仁愛路四段345巷6弄78號
      02-2456-7891
      24H 全年無休
      查看位置
      <hr>
      付款方式
      信用卡
      PayPayPoint
      選擇信用卡
      **** 4893
      增加信用卡
      請輸入折扣碼
      PAYPATDRINK
      使用
      小計(6杯飲品)
      折扣碼PAYPATDRINK優惠
      $330
      $297
      付款
    </div>
    <footerBar />
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'
  import pageNav from '@/components/pageNav.vue'

  export default {
    name: 'checkout',
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
