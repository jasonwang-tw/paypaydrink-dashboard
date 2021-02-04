<template>
  <div id="favorites">
    <topmenu />
    <div class="customContainer grid grid-cols-12 gap-10 mx-auto my-20">
      <div class="profileMenu col-span-4 px-10">
        <profileMenu />
      </div>
      <div class="mainInfo col-span-8">
        <h3 class="text-main-500">銀行帳號/信用卡</h3>
        <hr />
        <div class="grid grid-cols-12 text-main-500">
          <div class="col-span-8">飲品</div>
          <div class="col-span-2 flex justify-center">剩餘數量</div>
        </div>
        <ul class="list-none pl-0 rounded-xl overflow-hidden mt-5">
          <li class="grid grid-cols-12 mb-10" v-for="(i, index) in 5">
            <div class="col-span-8">
              <div class="flex items-center">
                <div class="userimg rounded-lg overflow-hidden mr-3">
                  <img src="../../src/assets/product.jpg" alt="" />
                </div>
                <div class="drinkinfo">
                  <div class="userName font-normal text-main-500 mb-2">東方不敗</div>
                  <div class="text-main-500 text-sm mb-1">
                    內含配料<span>粉圓、布丁、紅豆</span>
                  </div>
                  <div class="text-main-500 text-sm">規格<span>冷飲、中杯、三分糖、微冰</span></div>
                </div>
              </div>
            </div>
            <div class="col-span-2 flex items-center justify-center">
              <div>10</div>
            </div>
            <div class="col-span-2 flex items-center justify-end">
              <div class="btnGroup">
                <div class="btn-dark-blue">兌換</div>
              </div>
            </div>
          </li>
        </ul>
        <pageNav />
      </div>
    </div>
    <footerBar />
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'
  import profileMenu from '@/components/profileMenu.vue'
  import pageNav from '@/components/pageNav.vue'

  export default {
    name: 'favorites',
    components: {
      topmenu,
      footerBar,
      profileMenu,
      pageNav
    },
    data() {
      return {
        mainDrink: [
          {
            link: '/',
            name: '紅茶',
            bg: require('../assets/drinkBg/1.jpg')
          }
        ]
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
</style>
