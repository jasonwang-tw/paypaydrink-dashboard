<template>
  <div
    class="sticky top-0 z-20 px-5 py-3 bg-white border-b header border-lightblue-high text-main-500"
  >
    <div class="container flex justify-between m-auto">
      <div class="flex items-center w-full nav-left">
        <div class="mr-5 logo">
          <router-link to="/">
            <img src="../assets/images/logo.svg" alt="" />
          </router-link>
        </div>
        <div class="flex items-center searchBar">
          <i
            class="mr-5 text-xl pay-search text-main-100"
            @click="searchBarSatus = !searchBarSatus"
          ></i>
          <input
            class="absolute left-0 invisible -mt-5 duration-200 opacity-0 top-full md:visible md:opacity-100 md:relative md:mt-0"
            :class="{ searchBarShow: searchBarSatus }"
            type="text"
            placeholder="今天想喝什麼呢?"
          />
        </div>
      </div>
      <div class="flex items-center justify-end w-full nav-right">
        <!-- miniCart -->
        <div
          class="px-5 nav-right-items"
          @mouseenter="miniCartHidden = false"
          @mouseleave="miniCartHidden = true"
        >
          <div
            class="shopCart"
            @click=";(miniCartHidden = !miniCartHidden), (miniNoticeHidden = true)"
          >
            <i class="text-xl pay-cart text-main-100"></i>
          </div>
          <!-- miniCartList -->
          <div
            class="fixed p-5 duration-200 transform -translate-x-1/2 -translate-y-1/2 bg-white border shopCartList w-80 border-lightblue-high rounded-3xl left-1/2 top-1/2 xl:mt-2 xl:-ml-6 xl:left-auto xl:translate-x-0 xl:absolute xl:-translate-y-0 xl:top-auto"
            :class="{ listHidden: miniCartHidden }"
          >
            <ul class="pl-0 list-none">
              <li v-for="i in 3" class="">
                <router-link to="/" class="flex mb-5 no-underline">
                  <div class="flex-shrink-0 mr-5 overflow-hidden bg-white productImg rounded-xl">
                    <img src="../../src/assets/images/product.jpg" alt="" />
                  </div>
                  <div class="flex justify-between productInfo">
                    <div class="overflow-hidden">
                      <div class="mr-5 etc">
                        productNameproductNameproductName
                      </div>
                      <span class="text-subyellow-500">$ 99</span>
                    </div>
                    <span class="flex-shrink-0">x 91</span>
                  </div>
                </router-link>
              </li>
            </ul>
            <p class="text-center text-lightblue-500">還有其他 5 個項目</p>
            <router-link to="/cart" class="block mt-5 text-center btn-dark-blue"
              >查看購物車</router-link
            >
          </div>
        </div>
        <!-- notice -->
        <div
          class="px-5 border-l border-r nav-right-items notice border-lightblue-high"
          @mouseenter="miniNoticeHidden = false"
          @mouseleave="miniNoticeHidden = true"
        >
          <i
            class="text-xl pay-notice text-main-100"
            @click=";(miniNoticeHidden = !miniNoticeHidden), (miniCartHidden = true)"
          ></i>
          <!-- noticeList -->
          <div
            class="fixed p-5 duration-200 transform -translate-x-1/2 -translate-y-1/2 bg-white border noticeList w-80 border-lightblue-high rounded-3xl left-1/2 top-1/2 xl:mt-2 xl:-ml-6 xl:left-auto xl:translate-x-0 xl:absolute xl:-translate-y-0 xl:top-auto"
            :class="{ listHidden: miniNoticeHidden }"
          >
            <ul class="pl-0 list-none">
              <li v-for="i in 3" class="">
                <router-link to="/" class="flex mb-5 no-underline">
                  <div class="msgInfo">
                    <div class="etc">
                      付款已確認
                    </div>
                    <div class="text-blue-900 etc">
                      訂單<span class="text-subyellow-500">200718NQDUVMMW</span
                      >的付款已確認，店鋪備料中，請依照訂單
                    </div>
                    <small class="text-lightblue-500">2021-01-22 12:00</small>
                  </div>
                </router-link>
              </li>
            </ul>
            <p class="text-center text-lightblue-500">還有其他 5 個項目</p>
            <router-link to="/account/notice" class="block mt-5 text-center btn-dark-blue"
              >查看全部通知</router-link
            >
          </div>
        </div>
        <div class="px-5 cursor-pointer nav-right-items menuBtn" @click="menuhBtn">
          <i class="pay-menu text-main-100"></i>
        </div>
      </div>
      <!-- mask -->
      <div
        class="fixed top-0 left-0 w-full h-full duration-200 bg-gray-900 opacity-50"
        :class="{ mask: maskOff }"
        @click="menuhBtn"
      ></div>
      <!-- sidebarNav -->
      <div
        class="fixed top-0 flex h-full duration-200 bg-white shadow-lg sidebarNav w-60 -right-60 lg:w-80 lg:-right-80"
        :class="{ mobileNav: mobileStatus }"
      >
        <div class="flex flex-wrap content-between px-10 pt-10 overflow-y-auto">
          <div class="sidebarNavTop">
            <router-link to="/account/profile" class="flex items-center no-underline account">
              <div class="mr-5 overflow-hidden bg-white rounded-full userImg">
                <img src="../../src/assets/images/how.jpg" alt="" />
              </div>
              <div>
                <div class="-mb-1 userName">howhow</div>
                <span class="text-subyellow-500 text-sm">帳戶資訊</span>
              </div>
            </router-link>
            <div class="flex items-center py-5 border-b border-lightblue-high">
              <div
                class="w-8 h-8 bg-subyellow-100 rounded-full flex items-center justify-center text-white mr-3 font-semibold"
              >
                P
              </div>
              <div class="payCoin">
                <span class="text-sm block">PayPoint</span>
                <span class="font-semibold text-subyellow-100">999,999</span>
              </div>
            </div>
            <ul class="pl-0 mt-5 list-none">
              <li v-for="(item, index) in mainPage" class="mb-5 hover:text-blue-100">
                <router-link :to="item.link" class="no-underline">{{ item.name }}</router-link>
              </li>
            </ul>
          </div>
          <div class="text-center sidebarNavBottom">
            <div class="mt-10 mb-2 text-xl font-medium xl:text-2xl xl:mt-0">
              立即加入 <span class="text-subyellow-500">配配飲</span>
            </div>
            <span class="block mb-5">客製屬於您的飲品</span>
            <img
              class="inline-block w-32 my-auto mb-10"
              src="../../src/assets/images/M.png"
              alt=""
            />
            <img
              class="inline-block w-40 my-auto"
              src="../../src/assets/images/downhand.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'topmenu',
    methods: {
      menuhBtn: function() {
        this.mobileStatus = !this.mobileStatus
        this.maskOff = !this.maskOff
      }
    },
    data() {
      return {
        mainPage: [
          {
            link: '/free_drink',
            name: '飲料鋪'
          },
          {
            link: '/shopPosition',
            name: '附近的店鋪'
          },
          {
            link: '/',
            name: '使用條款'
          },
          {
            link: '/',
            name: '幫助中心'
          },
          {
            link: '/',
            name: '登出'
          }
        ],
        mobileStatus: false,
        miniCartHidden: true,
        miniNoticeHidden: true,
        maskOff: true,
        searchBarSatus: false
      }
    }
  }
</script>

<style scoped lang="scss">
  .shopCart {
    position: relative;
    &:before {
      content: '99';
      color: white;
      border-radius: 99px;
      padding: 5px 5px;
      line-height: 0.5rem;
      font-size: 0.5rem;
      position: absolute;
      left: 0;
      bottom: 0;
      transform: translate(-13px, 5px);
      background-color: var(--color-subyellow);
    }
  }
  // .shopCartList,
  // .noticeList {
  //   width: 300px;
  // }
  .listHidden {
    opacity: 0;
    visibility: hidden;
    margin-top: 1.5rem;
  }
  .notice:before {
    content: '';
    width: 5px;
    height: 5px;
    display: inline-block;
    position: absolute;
    border-radius: 20px;
    transform: translate(-5px, 2px);
    background-color: var(--color-subyellow);
  }
  .userImg {
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .nav-right-items {
    // padding: 0 1.5rem;
  }
  // .sidebarNav {
  //   width: 300px;
  //   right: -300px;
  // }
  .mobileNav {
    right: 0;
  }
  .mask {
    opacity: 0;
    visibility: hidden;
  }
  .productInfo {
    width: calc(100% - (50px + 1.25rem));
  }
  .msgInfo {
    width: 100%;
  }
  .productImg {
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 768px) {
    .searchBarShow {
      border-left: 0px;
      border-right: 0px;
      margin-top: 0;
      opacity: 1 !important;
      visibility: visible !important;
      border-radius: 0px !important;
    }
  }
</style>
