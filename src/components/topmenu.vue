<template>
  <div class="header py-3 px-5 border-b border-sup2-500 top-0 sticky z-20 bg-white">
    <div class="container m-auto flex justify-between">
      <div class="nav-left flex items-center">
        <div class="logo mr-5">
          <router-link to="/">
            <img src="../assets/logo.svg" alt="" />
          </router-link>
        </div>
        <div class="searchBar flex items-center">
          <i class="pay-search text-xl mr-5 text-main-100"></i>
          <input class="" type="text" placeholder="今天想喝什麼呢?" />
        </div>
      </div>
      <div class="nav-right flex items-center">
        <!-- miniCart -->
        <div
          class="nav-right-items shopCart"
          @mouseenter="miniCartHidden = false"
          @mouseleave="miniCartHidden = true"
        >
          <i class="pay-cart text-xl text-main-100"></i>
          <!-- miniCartList -->
          <div
            class="shopCartList absolute bg-white border border-sup2-500 p-5 mt-2.5 -ml-6 rounded-lg duration-200"
            :class="{ listHidden: miniCartHidden }"
          >
            <ul class="list-none pl-0 text-main-500">
              <li v-for="i in 4" class="">
                <router-link to="/" class="flex mb-5 no-underline">
                  <div class="productImg bg-white rounded-lg overflow-hidden mr-5 flex-shrink-0">
                    <img src="../../src/assets/product.jpg" alt="" />
                  </div>
                  <div class="productInfo flex justify-between">
                    <div class="overflow-hidden">
                      <div class="etc mr-5">
                        productNameproductNameproductName
                      </div>
                      <span class="text-sub-500">$ 99</span>
                    </div>
                    <span class="flex-shrink-0">x 91</span>
                  </div>
                </router-link>
              </li>
            </ul>
            <p class="text-sup3-500 text-center">還有其他 5 個項目</p>
            <router-link to="/cart" class="btn-dark-blue block text-center mt-5"
              >查看購物車</router-link
            >
          </div>
        </div>
        <!-- notice -->
        <div
          class="nav-right-items notice border-l border-r border-sup2-500"
          @mouseenter="miniNoticeHidden = false"
          @mouseleave="miniNoticeHidden = true"
        >
          <i class="pay-notice text-xl text-main-100"></i>
          <!-- noticeList -->
          <div
            class="noticeList absolute bg-white border border-sup2-500 p-5 mt-2.5 -ml-6 rounded-lg duration-200"
            :class="{ listHidden: miniNoticeHidden }"
          >
            <ul class="list-none pl-0 text-main-500">
              <li v-for="i in 4" class="">
                <router-link to="/" class="flex mb-5 no-underline">
                  <div class="msgInfo">
                    <div class="etc">
                      付款已確認
                    </div>
                    <div class="etc text-sup1-900">
                      訂單<span class="text-sub-500">200718NQDUVMMW</span
                      >的付款已確認，店鋪備料中，請依照訂單
                    </div>
                    <small class="text-sup3-500">2021-01-22 12:00</small>
                  </div>
                </router-link>
              </li>
            </ul>
            <p class="text-sup3-500 text-center">還有其他 5 個項目</p>
            <router-link to="/" class="btn-dark-blue block text-center mt-5"
              >查看全部通知</router-link
            >
          </div>
        </div>
        <div class="nav-right-items menuBtn cursor-pointer" @click="menuhBtn">
          <i class="pay-menu text-main-100"></i>
        </div>
      </div>
      <!-- mask -->
      <div
        class="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-50 duration-200"
        :class="{ mask: maskOff }"
        @click="menuhBtn"
      ></div>
      <!-- sidebarNav -->
      <div
        class="sidebarNav h-full fixed bg-white shadow-lg right-0 top-0 duration-200 flex"
        :class="{ mobileNav: mobileStatus }"
      >
        <div class="flex flex-wrap content-between pt-10 px-10">
          <div class="sidebarNavTop">
            <router-link to="/profile" class="account flex items-center no-underline">
              <div class="userImg overflow-hidden rounded-full bg-white mr-5">
                <img src="../../src/assets/how.jpg" alt="" />
              </div>
              <div>
                <div class="userName text-main-500">howhow</div>
                <small class="text-sub-500">帳戶資訊</small>
              </div>
            </router-link>
            <div class="payCoin mt-5 border-b pb-5">
              <small>PayPayPoint</small><br />
              <span class="text-sub-500 font-bold">999,999</span>
            </div>
            <ul class="list-none pl-0 mt-5">
              <li v-for="(item, index) in mainPage" class="text-main-500 mb-5 hover:text-sup1-100">
                <router-link :to="item.link" class="no-underline">{{ item.name }}</router-link>
              </li>
            </ul>
          </div>
          <div class="sidebarNavBottom text-main-500 text-center">
            <div class="text-2xl font-medium mb-2">
              立即下載 <span class="text-sub-500">配配飲</span>
            </div>
            <span class="mb-5 block">客製屬於您的飲品</span>
            <img class="my-auto inline-block mb-10" src="../../src/assets/appDown-col.png" alt="" />
            <img class="my-auto inline-block w-40" src="../../src/assets/downhand.svg" alt="" />
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
            link: '/',
            name: '自由配'
          },
          {
            link: '/',
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
        maskOff: true
      }
    }
  }
</script>

<style scoped lang="scss">
  
  .shopCart:before {
    content: '99';
    color: white;
    border-radius: 99px;
    padding: 5px 5px;
    line-height: 0.5rem;
    font-size: 0.5rem;
    display: inline-block;
    transform: translate(7px, 5px);
    background-color: var(--color-sub);
  }
  .shopCartList,
  .noticeList {
    width: 300px;
  }
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
    background-color: var(--color-sub);
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
    padding: 0 1.5rem;
  }
  .sidebarNav {
    width: 300px;
    right: -300px;
  }
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
</style>
