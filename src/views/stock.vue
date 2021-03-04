<template>
  <div id="stock">
    <topmenu />
    <div class="customContainer grid grid-cols-12 gap-10 mx-auto my-20 text-main-500">
      <div class="profileMenu col-span-4 px-10">
        <profileMenu />
      </div>
      <div class="mainInfo col-span-8">
        <h3 class="">寄杯</h3>
        <hr />
        <div class="grid grid-cols-12 ">
          <div class="col-span-8">飲品</div>
          <div class="col-span-2 flex justify-center">剩餘數量</div>
        </div>
        <ul class="list-none pl-0 rounded-xl overflow-hidden mt-5">
          <li class="grid grid-cols-12 mb-5 pb-5 border-b border-sup2-500" v-for="(i, index) in 5">
            <div class="col-span-8">
              <div class="flex items-center">
                <div class="userimg rounded-lg overflow-hidden mr-3">
                  <img src="../../src/assets/product.jpg" alt="" />
                </div>
                <div class="drinkinfo">
                  <div class="userName font-normal  mb-2">東方不敗</div>
                  <div class=" text-sm mb-1">內含配料<span>粉圓、布丁、紅豆</span></div>
                  <div class=" text-sm">規格<span>冷飲、中杯、三分糖、微冰</span></div>
                </div>
              </div>
            </div>
            <div class="col-span-2 flex items-center justify-center">
              <div>10</div>
            </div>
            <div class="col-span-2 flex items-center justify-end">
              <div class="btnGroup">
                <div class="btn-dark-blue" @click="exchange">兌換</div>
              </div>
            </div>
          </li>
        </ul>
        <pageNav />
      </div>
    </div>
    <footerBar />
    <div
      id="popupRemove"
      class=" fixed top-0 left-0 bg-opacity-50 bg-gray-900 h-full w-full z-20 flex items-center justify-center duration-200"
      :class="{ popup: popupExchange }"
    >
      <div class="bg-white rounded-3xl text-center p-5 shadow-xl popupContent">
        <!-- select shop -->
        <div :class="{ hidden: shopHidden }">
          <shopPosition />
          <div class="functionBtn flex justify-center">
            <div class="btn btn-remove mr-3" @click="exchangeClose">取消</div>
            <div class="btn btn-dark-blue" @click="showQr">確認兌換</div>
          </div>
        </div>
        <!-- QRCODE -->
        <div :class="{ hidden: qrcodeHidden }">
          <img src="../../src/assets/qr.png" alt="" />
          <div class="btn btn-dark-blue" @click="exchangeClose">確認</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'
  import profileMenu from '@/components/profileMenu.vue'
  import pageNav from '@/components/pageNav.vue'
  import shopPosition from '@/components/shopPosition.vue'

  export default {
    name: '',
    components: {
      topmenu,
      footerBar,
      profileMenu,
      pageNav,
      shopPosition
    },
    methods: {
      exchange: function() {
        this.popupExchange = false
        this.shopHidden = false
        this.qrcodeHidden = true
      },
      showQr: function() {
        this.shopHidden = true
        this.qrcodeHidden = false
      },
      exchangeClose: function() {
        this.popupExchange = true
      }
    },
    data() {
      return {
        mainDrink: [
          {
            link: '/',
            name: '紅茶',
            bg: require('../assets/drinkBg/1.jpg')
          }
        ],
        popupExchange: true,
        shopHidden: true,
        qrcodeHidden: true
      }
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
  .popup {
    opacity: 0;
    visibility: hidden;
  }
</style>
