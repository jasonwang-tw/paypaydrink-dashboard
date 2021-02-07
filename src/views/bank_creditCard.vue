<template>
  <div id="bankCard">
    <topmenu />
    <div class="customContainer grid grid-cols-12 gap-10 mx-auto my-20">
      <div class="profileMenu col-span-4 px-10">
        <profileMenu />
      </div>
      <div class="mainInfo col-span-8">
        <div class="flex justify-between items-center">
          <h3 class="text-main-500 mb-0">信用卡</h3>
          <div class="btn-border-light-blue flex items-center">
            <i class="pay-add mr-3"></i>
            <div>增加信用卡</div>
          </div>
        </div>
        <hr />
        <ul class="pl-0 list-none grid gap-3 grid-cols-2 mb-10 text-main-500">
          <li class="bg-sup3-300 p-5 rounded-xl" v-for="(i, index) in 5">
            <div class="flex justify-between mb-16">
              <div class="btn-dark-blue-sm-nohover">預設</div>
              <img src="../../src/assets/visa.svg" alt="" />
            </div>
            <div class="flex justify-between">
              <div class="text-xl font-medium">**** 4986</div>
              <div class="flex">
                <div class="duration-200 cursor-pointer hover:text-sup1-500 mr-3">設定為預設</div>
                <div class="duration-200 cursor-pointer text-red-500 hover:text-red-700">刪除</div>
              </div>
            </div>
          </li>
        </ul>
        <div class="flex justify-between items-center">
          <h3 class="text-main-500 mb-0">銀行帳號</h3>
          <div class="btn-border-light-blue flex items-center">
            <i class="pay-add mr-3"></i>
            <div>增加銀行帳號</div>
          </div>
        </div>
        <hr />
        <ul class="list-none pl-0 text-main-500">
          <li
            class="flex items-center justify-between mb-5 bg-sup3-300 p-5 rounded-xl"
            v-for="(i, index) in 5"
          >
            <div class="">
              <div class="flex items-center mb-5">
                <div>
                  <div class="text-xl font-medium mb-2">台北富邦商業銀行</div>
                  <div class="text-xl font-medium">**** 7848</div>
                </div>
                <div class="text-sub-500 mx-3">已驗證</div>
                <div class="btn-dark-blue-sm-nohover">預設</div>
              </div>
              <div class="flex">
                <div class="mr-5">
                  <span class="text-sup1-900 mr-3">戶名</span>
                  <strong>周*倫</strong>
                </div>
                <div>
                  <span class="text-sup1-900 mr-3">所屬</span>
                  <strong>台北市 / 城中分行</strong>
                </div>
              </div>
            </div>
            <div class="flex">
              <div class="duration-200 cursor-pointer hover:text-sup1-500 mr-3">設定為預設</div>
              <div class="duration-200 cursor-pointer text-red-500 hover:text-red-700">刪除</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <footerBar />
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'
  import profileMenu from '@/components/profileMenu.vue'

  export default {
    name: 'favorites',
    components: {
      topmenu,
      footerBar,
      profileMenu
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
