<template>
  <div id="portal" class="text-main-500">
    <topmenu />
    <div class="container mx-auto my-20">
      <div class="customContainer flex pb-5 mx-auto">
        <div class="userImg rounded-full overflow-hidden mr-10 flex-shrink-0">
          <img src="../../src/assets/images/how.jpg" alt="" />
        </div>
        <div class="flex-grow">
          <h4 class="mb-0">HowHow</h4>
          <div class="flex items-center justify-between py-3">
            <ul class="masterInfo flex pl-0 list-none">
              <li>
                <span><i class="pay-start"></i></span>4.5
              </li>
              <li><span>關注</span>3,547</li>
              <li><span>配方</span>47</li>
              <li><span>售出飲品</span>4,998杯</li>
            </ul>
            <div class="btn-border-remove">關注</div>
          </div>
          <hr />
          <div>
            <h5>關於飲料鋪</h5>
            <div>
              【訂單注意】
              <ul>
                <li>📣下標前請選擇正確的地址與取件門市，訂單成立後無法修改地址與門市！</li>
                <li>📣如要取消訂單，可以在賣家申請單號前自行取消！</li>
                <li>📣如商品體積過大無法超取，需請買家配合更改寄送方式！</li>
              </ul>
              <br />
              【咨詢與評價】
              <ul>
                <li>📣線上快速諮詢，有任何問題歡迎咨詢，善用聊聊，有專人在線為您服務!</li>
                <li>
                  📣如收到產品時發現產品異常，請拍商品照片和貨單，上班時間會馬上為您處理！
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="flex justify-center">
        <div>
          <h3>熱銷配方</h3>
          <drink />
        </div>
      </div>
      <div class="mt-10">
        <h3>全部配方</h3>
        <productGrid />
        <productGrid class="mt-10" />
      </div>
      <pageNav class="pt-5" />
    </div>
    <footerBar />
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'
  import pageNav from '@/components/pageNav.vue'
  import drink from '@/components/drink.vue'
  import productGrid from '@/components/productGrid.vue'

  export default {
    name: 'portal',
    components: {
      topmenu,
      footerBar,
      pageNav,
      drink,
      productGrid
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
  .userImg {
    width: 120px;
    height: 120px;
  }
  .masterInfo {
    li {
      margin-right: 1.5rem;
      padding-right: 1.5rem;
      span {
        color: var(--color-sup1-100);
        margin-right: 0.5rem;
      }
    }
  }
  .drinkImg {
    width: 100px;
    height: 100px;
  }
  .drinkInfo {
    flex-basis: 55%;
  }
  .drinkOrder {
    text-align: center;
    flex-basis: 15%;
  }
  .drinkBefore {
    width: 80px;
  }
</style>
