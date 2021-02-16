<template>
  <div id="checkout">
    <topmenu />
    <div class="customContainer xl:mx-auto my-20 text-main-500">
      <buyList />
      <div class="border rounded-xl p-5 border-sup3-400 my-10">
        <div class="flex items-center">
          <h3 class="mb-0">領取方式</h3>
          <div>直接領取</div>
          <div>寄杯</div>
          <div>送禮</div>
        </div>
        <hr />
        <div class="flex">
          <div>選擇領取店鋪</div>
          <div>選擇店鋪</div>
        </div>
        <div>配配飲一號店</div>
        <div>
          台北市大安區仁愛路四段345巷6弄78號
        </div>
        <div>02-2456-7891</div>
        <div>24H</div>
        <div>全年無休</div>
        <div>查看位置</div>
      </div>
      <div class="border rounded-xl p-5 border-sup3-400">
        <div class="flex items-center">
          <h3 class="mb-0">付款方式</h3>
          <div>信用卡</div>
          <div>PayPayPoint</div>
        </div>
        <hr />
        <div class="flex">
          <div>選擇信用卡</div>
          <div>
            <div>**** 4893</div>
            <div>增加信用卡</div>
          </div>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="flex">
          <div>請輸入折扣碼</div>
          <div>PAYPATDRINK</div>
          <div>使用</div>
        </div>
        <div class="text-right">
          <countResult />
        </div>
      </div>
      <div class="text-right">
        <div class="btn-dark-blue inline-block w-40 text-center">付款</div>
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
    name: 'checkout',
    components: {
      topmenu,
      footerBar,
      buyList,
      countResult
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
</style>
