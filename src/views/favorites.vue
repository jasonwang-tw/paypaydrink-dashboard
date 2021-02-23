<template>
  <div id="favorites" class="text-main-500">
    <topmenu />
    <div class="customContainer grid grid-cols-12 gap-10 mx-auto my-20">
      <div class="profileMenu col-span-4 px-10">
        <profileMenu />
      </div>
      <div class="mainInfo col-span-8">
        <h3 class="">收藏清單</h3>
        <hr />
        <ul class="list-none pl-0">
          <li class="border-b mb-5 pb-5 border-sup3-400">
            <div class="flex items-center">
              <div class="userimg rounded-full overflow-hidden mr-3">
                <img src="../../src/assets/how.jpg" alt="" />
              </div>
              <div class="drinkinfo">
                <div class="userName text-xl font-normal mb-2 ">howhow</div>
                <router-link
                  to="/drinkShop"
                  class="allDrink no-underline btn-border-light-blue-sm text-sm inline-block"
                  >查看全部配方</router-link
                >
              </div>
            </div>
            <ul class="list-none pl-0 rounded-xl overflow-hidden mt-3" v-for="(i, index) in 5">
              <li class="bg-sup3-300 p-5">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="userimg rounded-lg overflow-hidden mr-3">
                      <img src="../../src/assets/product.jpg" alt="" />
                    </div>
                    <div class="drinkinfo">
                      <div class="userName font-normal  mb-2">東方不敗</div>
                      <div class="text-sm">內含配料<span>粉圓、布丁、紅豆</span></div>
                    </div>
                  </div>
                  <div class="btnGroup flex">
                    <div class="buyAgain mr-5">
                      <a
                        href="/"
                        class="text-sup1-100 no-underline duration-200 hover:text-sup1-500"
                      >
                        再次訂購
                      </a>
                    </div>
                    <div
                      class="delfavorit text-red-500 cursor-pointer duration-200 hover:text-red-700"
                      @click="removeBtn"
                    >
                      刪除
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <pageNav />
      </div>
    </div>
    <footerBar />
    <div
      class="fixed top-0 left-0 bg-opacity-50 bg-gray-900 h-full w-full z-20 flex items-center justify-center duration-200"
      :class="{ popup: popupRemove }"
    >
      <div id="removeDrink" class="bg-white rounded-3xl text-center p-5 shadow-xl">
        <h3>刪除收藏?</h3>
        <div class="mb-5">此操作無法撤消，確定要執行嗎?</div>
        <div class="functionBtn flex justify-center">
          <div class="btn btn-remove mr-3" @click="removeBtn">取消</div>
          <div class="btn btn-dark-blue">確認</div>
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

  export default {
    name: 'favorites',
    components: {
      topmenu,
      footerBar,
      profileMenu,
      pageNav
    },
    methods: {
      removeBtn: function() {
        this.popupRemove = !this.popupRemove
      }
    },
    data() {
      return {
        popupRemove: true
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
