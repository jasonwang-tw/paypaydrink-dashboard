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
        <div class="nav-right-items menuBtn" @click="mobileClick = !mobileClick">
          <i class="pay-menu"></i>
        </div>
      </div>
      <div
        class="sidebar-nav h-full fixed bg-red-100 right-0 top-0 duration-200"
        :class="{ mobileNavActive: mobileClick }"
      >
        <h1>54584</h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'topmenu',
    data() {
      return {
        mainPage: [
          {
            link: '/',
            name: '優惠活動'
          },
          {
            link: '/',
            name: '飲料故事'
          },
          {
            link: '/',
            name: '魔法秘訣'
          },
          {
            link: '/',
            name: '立即體驗'
          }
        ],
        // dashboard: [
        //   {
        //     link: '/',
        //     icon: '<i class="pay-shop"></i>',
        //     name: '我是店長'
        //   },
        //   {
        //     link: '/login',
        //     icon: '<i class="pay-member"></i>',
        //     name: '立即訂餐'
        //   }
        // ],
        mobileClick: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  [class^='pay-'] {
    color: var(--color-main-100);
  }
  .nav-right-items {
    margin: 0 0.5rem;
    padding: 0 1.25rem;
  }
  .sidebar-nav {
    width: 250px;
    right: -250px;
  }
  .mobileNavActive {
    right: 0;
  }
</style>
