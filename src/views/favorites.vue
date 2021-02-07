<template>
  <div id="favorites">
    <topmenu />
    <div class="customContainer grid grid-cols-12 gap-10 mx-auto my-20">
      <div class="profileMenu col-span-4 px-10">
        <profileMenu />
      </div>
      <div class="mainInfo col-span-8">
        <h3 class="text-main-500">收藏清單</h3>
        <hr />
        <ul class="list-none pl-0">
          <li class="border-b mb-5 pb-5 border-sup3-400">
            <div class="flex items-center">
              <div class="userimg rounded-full overflow-hidden mr-3">
                <img src="../../src/assets/how.jpg" alt="" />
              </div>
              <div class="drinkinfo">
                <div class="userName text-xl font-normal mb-2 text-main-500">howhow</div>
                <a
                  href="/"
                  class="allDrink no-underline btn-border-light-blue-sm text-sm inline-block"
                  >查看全部配方</a
                >
              </div>
            </div>
            <ul class="list-none pl-0 rounded-xl overflow-hidden mt-3" v-for="(i,index) in 5">
              <li class="bg-sup3-300 p-5">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="userimg rounded-lg overflow-hidden mr-3">
                      <img src="../../src/assets/product.jpg" alt="" />
                    </div>
                    <div class="drinkinfo">
                      <div class="userName font-normal text-main-500 mb-2">東方不敗</div>
                      <div class="text-main-500 text-sm">內含配料<span>粉圓、布丁、紅豆</span></div>
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
