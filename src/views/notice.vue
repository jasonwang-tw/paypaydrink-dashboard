<template>
  <div id="favorites">
    <topmenu />
    <div class="customContainer grid grid-cols-12 gap-10 mx-auto my-20">
      <div class="profileMenu col-span-4 px-10">
        <profileMenu />
      </div>
      <div class="mainInfo col-span-8">
        <h3 class="text-main-500">通知總覽</h3>
        <hr />
        <ul class="pl-0 list-none text-main-500 hover:opacity-70 duration-200" v-for="(i, index) in 10">
          <li class="p-5 bg-sup3-300 rounded-xl cursor-pointer mb-5">
            <div class="font-bold text-lg mb-3">密碼重設完成</div>
            <p class="noticeText text-sup1-900">
              訂單<span class="mx-2 text-sub-500">200718NQDUVMMW</span
              >的付款已確認，店鋪備料中，請依照訂單...店鋪備料中，請依照訂單...店鋪備料中，請依照訂單...店鋪備料中，請依照訂單...單...店鋪備料中，請依照訂單...單...店鋪備料中，請依照訂單...
            </p>
            <span class="text-sup3-500">2020-07-18 17:59</span>
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
  .noticeText {
    width: 100%;
    overflow: hidden;
    // text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>
