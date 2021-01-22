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
          <i class="pay-search text-xl mr-5"></i>
          <input class="" type="text" />
        </div>
      </div>
      <div class="nav-right flex items-center">
        <div class="nav-right-items shopCart">
          <i class="pay-cart text-xl mr-5"></i>
          <span>545,448</span>
        </div>
        <div class="nav-right-items notice border-l border-r border-sup2-500">
          <i class="pay-notice text-xl"></i>
        </div>
        <div class="nav-right-items menuBtn" @click="switchBtn">
          <i class="pay-menu"></i>
        </div>
      </div>
      <div
        class="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-50 duration-200"
        :class="{ mask: maskOff }"
      ></div>
      <div
        class="sidebarNav h-full fixed bg-white shadow-lg right-0 top-0 duration-200 flex justify-center pt-10"
        :class="{ mobileNav: mobileStatus }"
      >
        <div class="flex flex-wrap justify-center content-between">
          <div class="sidebarNavTop">
            <div class="close" @click="switchBtn">
              <i class="pay-close-outline"></i>
            </div>
            <div class="account flex">
              <div class="userImg overflow-hidden rounded-full">
                <img src="../../src/assets/drink1.png" alt="" />
              </div>
              <div class="userInfo">
                <div class="userName">Jasowang</div>
                <router-link to="/"><small>帳戶資訊</small></router-link>
              </div>
            </div>
            <div class="payCoin">
              <small>PayPayPoint</small><br />
              <span>999,999</span>
            </div>
            <ul class="list-none pl-0">
              <li v-for="(item,index) in mainPage">
                <router-link :to="item.link" class="no-underline">{{item.name}}</router-link>
              </li>
            </ul>
          </div>
          <div class="sidebarNavBottom">
            <p>立即下載 配配飲</p>
            <span>客製屬於您的飲品</span>
            <img src="../../src/assets/appDown-col.png" alt="" />
            <img src="../../src/assets/downhand.svg" alt="" />
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
      switchBtn: function() {
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
        mobileStatus: true,
        maskOff: true
      }
    }
  }
</script>

<style scoped lang="scss">
  [class^='pay-'] {
    color: var(--color-main-100);
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
    margin: 0 0.5rem;
    padding: 0 1.25rem;
  }
  .sidebarNav {
    width: 250px;
    right: -250px;
  }
  .mobileNav {
    right: 0;
  }
  .mask {
    opacity: 0;
    visibility: hidden;
  }
</style>
