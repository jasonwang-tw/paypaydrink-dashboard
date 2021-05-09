<template>
  <div id="profileMenu" class="fixed z-10 w-full px-5 md:w-auto md:px-0 md:relative bg-lightblue-bg md:bg-white">
    <ul class="flex pl-0 overflow-x-scroll list-none md:block md:overflow-x-auto">
      <li v-for="(i, key, index) in userMenu" class="flex-shrink-0">
        <router-link
          :to="i.link"
          class="no-underline text-main-500 duration-200 hover:text-blue-900 mx-2 md:my-2.5 px-2 py-2.5 md:px-4 block md:rounded-lg overflow-hidden"
          >{{ i.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'profileMenu',
    data() {
      return {
        userMenu: [
          {
            name: '個人檔案',
            link: '/account/profile'
          },
          {
            name: '收藏清單',
            link: '/account/favorites'
          },
          {
            name: '寄杯',
            link: '/account/stock'
          },
          {
            name: '訂單',
            link: '/account/order'
          },
          {
            name: '我的錢包',
            link: '/account/wallet'
          },
          {
            name: '銀行帳號/信用卡',
            link: '/account/bank_creditCard'
          },
          {
            name: '通知總覽',
            link: '/account/notice'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  #profileMenu {
    .router-link-exact-active {
      color: var(--color-blue-100);
      background-color: var(--color-lightblue-bg);
      position: relative;
    }
  }
  @media (max-width: 768px) {
    #profileMenu {
      top: 63px;
      .router-link-exact-active {
        &:after {
          content: ' ';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: var(--color-blue-100);
          border-radius: 20%;
        }
      }
    }
  }
</style>
