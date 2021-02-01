<template>
  <div id="profileMenu">
    <ul class="pl-0 list-none">
      <li v-for="(i, key, index) in userMenu" class="my-5">
        <router-link :to="i.link" class="no-underline text-main-500 duration-200 hover:text-sup1-100" :class="!active">{{ i.name }}</router-link>
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
            link: '/'
          },
          {
            name: '寄杯',
            link: '/'
          },
          {
            name: '訂單',
            link: '/'
          },
          {
            name: '銀行帳號/信用卡',
            link: '/'
          },
          {
            name: '通知總覽',
            link: '/'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  #profileMenu {
    .userImg {
      width: 80px;
      height: 80px;
    }
  }
</style>
