<template>
  <div id="notice" class="text-main-500">
    <h3 class="text-main-500">優惠卷</h3>
    <hr />
    <ul class="pl-0 list-none text-main-500 grid grid-cols-1 gap-5 sm:grid-cols-2">
      <li class="p-5 bg-lightblue-bg rounded-3xl mb-5" v-for="(c, index) in coupon">
        <div class="font-bold text-lg">{{ c.name }}</div>
        <span class="text-lightblue-500 text-sm mb-3 inline-block"
          ><span class="mr-3">使用期限</span>{{ c.data }}</span
        >
        <p class="noticeText text-blue-900">
          {{ c.text }}
        </p>
        <div class="flex items-center justify-between mt-5">
          <router-link to="/helpCenter/page1" class="text-subyellow-500">使用說明</router-link>
          <template v-if="!c.use">
            <div @click="notice = !notice" class="btn-dark-blue">使用兌換卷</div>
          </template>
          <template v-else>
            <div class="btn text-red-500">已兌換</div>
          </template>
        </div>
      </li>
    </ul>
    <pageNav />
    <!-- 顯示兌換碼-->
    <popup :class="{ popup: notice }">
      <template v-slot:title>
        <h4>飲品兌換碼</h4>
      </template>
      <template v-slot:content>
        <img src="../../../src/assets/images/qr.png" alt="" class="block mx-auto mb-5" />
        <div class="text-center mb-10">
          <p>請至配配飲門市前出示QRCODE掃描領取飲品。<br />祝您用餐愉快</p>
        </div>
      </template>
      <template v-slot:btn>
        <div class="functionBtn flex justify-center">
          <div class="btn btn-dark-blue" @click="notice = !notice">確認</div>
        </div>
      </template>
    </popup>
  </div>
</template>

<script>
  import pageNav from '@/components/pageNav.vue'
  import popup from '@/components/popup.vue'

  export default {
    name: 'notice',
    components: {
      pageNav,
      popup
    },
    data() {
      return {
        notice: true,
        coupon: [
          {
            name: '飲品兌換卷',
            data: '2020-07-18 17:59',
            text: '憑此兌換卷可兌換XX',
            use: false
          },
          {
            name: '飲品兌換卷',
            data: '2020-07-30 17:59',
            text: '憑此兌換卷可兌換XX',
            use: true
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .noticeText {
    width: 100%;
    overflow: hidden;
    // text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .popup {
    opacity: 0;
    visibility: hidden;
  }
</style>
