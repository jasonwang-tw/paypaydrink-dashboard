<template>
  <div id="drink_shop" class="text-main-500">
    <topmenu />
    <div class="shopBg bg-lightblue-bg h-60"></div>
    <div class="container mx-auto mb-20 -mt-16">
      <div class="mx-auto text-center customContainer">
        <div class="flex-shrink-0 mx-auto overflow-hidden rounded-full userImg">
          <img src="../../src/assets/images/how.jpg" alt="" />
        </div>
        <div class="flex-grow mt-3">
          <h4 class="mb-0">HowHow<i class="pay-click_round text-blue-100 ml-3"></i></h4>
          <div class="items-center justify-center px-5 mt-3 md:flex">
            <ul class="flex justify-center pl-0 list-none masterInfo">
              <!-- <li>
                <span><i class="pay-start"></i></span>4.5
              </li> -->
              <li class="text-center">
                <span class="block md:mr-3 md:inline-block text-subyellow-500">關注</span>3,547
              </li>
              <li class="mx-10 text-center">
                <span class="block md:mr-3 md:inline-block text-subyellow-500">配方</span>47
              </li>
              <li class="text-center">
                <span class="block md:mr-3 md:inline-block text-subyellow-500">售出飲品</span
                >4,998杯
              </li>
            </ul>
            <div
              @click="like = !like"
              class="text-sm cursor-pointer duration-200 md:mt-0 mt-5 md:ml-10"
            >
              <div
                v-if="like === true"
                class="text-white btn-sm border-red-400 bg-red-400 border hover:border-red-700 hover:bg-red-700"
              >
                已關注
              </div>
              <div
                v-if="like === false"
                class="text-red-400 border border-red-400 btn-sm hover:border-red-700 hover:text-red-700"
              >
                關注
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-5 mx-auto mt-5 mb-10 customContainer">
        <h5>關於飲料鋪</h5>
        <hr />
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
      <div class="flex justify-center">
        <div>
          <h3 class="mb-0">熱銷配方</h3>
          <drink />
        </div>
      </div>
      <div class="mx-5 mt-10">
        <h3>全部配方</h3>
        <productGrid />
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
    name: 'drink_shop',
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
        like: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .userImg {
    width: 120px;
    height: 120px;
  }
  // .masterInfo {
  //   li {
  //     margin-right: 1.5rem;
  //     padding-right: 1.5rem;
  //     span {
  //       color: var(--color-subyellow);
  //       margin-right: 0.5rem;
  //     }
  //   }
  // }
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
  .shopBg {
    background-repeat: no-repeat;
    background-size: 50% auto;
    background-position: right 10%;
    background-image: url(../assets/images/shopbg.jpg);
  }
</style>
