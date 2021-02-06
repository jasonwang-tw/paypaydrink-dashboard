<template>
  <div id="profileMenu">
    <ul class="pl-0 list-none">
      <li v-for="(i, key, index) in userMenu" class="">
        <router-link
          :to="i.link"
          class="no-underline text-main-500 duration-200 hover:text-sup1-100 my-2.5 py-2.5 px-5 block rounded-lg overflow-hidden"
          :class="!active"
          >{{ i.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    data() {
      return {
        userMenu: [
          {
            name: '個人檔案',
            link: '/profile'
          },
          {
            name: '收藏清單',
            link: '/favorites'
          },
          {
            name: '寄杯',
            link: '/stock'
          },
          {
            name: '訂單',
            link: '/order'
          },
          {
            name: '銀行帳號/信用卡',
            link: '/bank_creditCard'
          },
          {
            name: '通知總覽',
            link: '/notice'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  #profileMenu {
    position: sticky;
    top: 100px;
    .userImg {
      width: 80px;
      height: 80px;
    }
  }
  .router-link-exact-active {
    background-color: var(--color-sup3-linght-bg);
    // color: var(--color-sup1-500);
    // &:before{
    //   font-family: 'paypaydrink' !important;
    //   content: '\e924';
    //   position: absolute;
    //   transform: translateX(-1.5rem);
    // }
  }
</style>
