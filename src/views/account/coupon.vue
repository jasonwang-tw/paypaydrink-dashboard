<template>
  <div id="notice" class="text-main-500">
    <h3 class="text-main-500">優惠卷</h3>
    <hr />
    <ul class="pl-0 list-none text-main-500 grid grid-cols-1 gap-5 sm:grid-cols-2">
      <li class="p-5 bg-lightblue-bg rounded-3xl mb-5" v-for="(c, index) in coupon">
        <div class="flex justify-between">
          <div class="font-bold text-lg">{{ c.name }}</div>
          <template v-if="c.type === 'Free'">
            <div class="btn-sm bg-blue-100 text-sm text-white">{{ c.type }}</div>
          </template>
          <template v-else>
            <div class="btn-sm bg-subyellow-100 text-sm text-white">{{ c.type }}</div>
          </template>
        </div>
        <span class="text-lightblue-500 text-sm inline-block"
          ><span class="mr-3">使用期限</span>{{ c.data }}</span
        >
        <hr class="my-3" />
        <p class="noticeText text-blue-900 text-sm">
          {{ c.text }}
        </p>
        <div class="flex items-center justify-between mt-5 w-full">
          <router-link to="/helpCenter/page1" class="text-subyellow-500 text-sm no-underline"
            ><i class="pay-help mr-3"></i>使用說明</router-link
          >
          <template v-if="c.type === 'Check' && !c.use">
            <div class="text-sm"><i class="pay-warn mr-3"></i>於結帳時使用</div>
          </template>
          <template v-else-if="!c.use">
            <div @click="notice = !notice" class="btn-dark-blue text-sm">使用兌換卷</div>
          </template>
          <template v-else>
            <div class="text-red-500 text-sm py-2">已兌換</div>
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
  import coupon from '../../../static/resource/coupon'
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
        coupon
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
