<template>
  <div id="portal" class="text-main-500">
    <div class="items-center justify-between md:flex">
      <h2 class="text-2xl md:text-3xl">飲料鋪</h2>
      <div class="flex overflow-x-scroll">
        <div class="flex-shrink-0 mr-3 text-sm btn-border-light-blue" @click="kiosk = flase">
          讀取自配方
        </div>
        <router-link
          to="/free_drink/shop_edit"
          class="flex-shrink-0 mr-3 text-sm btn-border-light-blue"
          >編輯飲料鋪</router-link
        >
        <router-link to="/free_drink/edit" class="flex-shrink-0 text-sm btn-border-light-blue"
          >新增配方</router-link
        >
      </div>
    </div>
    <hr />
    <div class="md:flex">
      <div class="mr-10 overflow-hidden rounded-full userImg">
        <img src="../../assets/images/how.jpg" alt="" />
      </div>
      <div class="items-center justify-between flex-grow md:flex">
        <div>
          <h5 class="mb-0">HowHow</h5>
          <ul class="flex p-3 pl-0 list-none masterInfo">
            <!-- <li>
                <span><i class="pay-start"></i></span>4.5
              </li> -->
            <li><span>關注</span>3,547</li>
            <li><span>配方</span>47</li>
            <li><span>售出飲品</span>4,998杯</li>
          </ul>
        </div>
        <div class="flex">
          <router-link to="/drinkShop" target="_blank" class="mr-3 btn-light-blue"
            >預覽頁面</router-link
          >
          <router-link to="/account/wallet" class="btn-dark-blue">我的錢包</router-link>
        </div>
      </div>
    </div>
    <hr />
    <div class="grid grid-cols-12 p-5">
      <h3 class="col-span-8 mb-0 drinkInfo">我的配方</h3>
      <div class="hidden col-span-1 text-center md:block">已售出</div>
      <div class="hidden col-span-1 text-center md:block">販售金額</div>
      <div class="hidden col-span-2 text-center md:block">操作</div>
    </div>
    <div
      class="grid items-center grid-cols-12 p-5 mb-5 border rounded-3xl border-lightblue-placeholder"
      v-for="(i, index) in 5"
    >
      <div class="flex col-span-12 md:col-span-8 drinkInfo">
        <div class="flex-shrink-0 mr-5 overflow-hidden drinkImg rounded-3xl">
          <img src="../../assets/images/product.jpg" alt="" />
        </div>
        <div>
          <h5 class="mb-2">東方不敗</h5>
          <div class="text-sm md:flex">
            <span class="flex-shrink-0 block drinkBefore text-lightblue-500">內含配料</span>
            <span>粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆</span>
          </div>
          <div class="mt-3 text-sm md:flex">
            <span class="block drinkBefore text-lightblue-500">規格</span>
            <span>冷飲、中杯、三分糖、微冰</span>
          </div>
        </div>
      </div>
      <div class="col-span-6 font-normal text-center md:col-span-1">2</div>
      <div class="col-span-6 font-normal text-center md:col-span-1 price text-subyellow-500">
        $60
      </div>
      <div class="flex items-center justify-center col-span-12 text-center md:col-span-2">
        <div class="mr-3 text-blue-100 duration-200 cursor-pointer hover:text-blue-900">
          上架
        </div>
        <router-link to="/free_drink/edit" class="mr-3 duration-200 cursor-pointer"
          >編輯</router-link
        >
        <div class="text-red-500 duration-200 cursor-pointer hover:text-red-700">刪除</div>
      </div>
    </div>
    <pageNav class="" />
    <!-- 分隔 -->
    <popup :class="{ popupHidden: kiosk }">
      <template v-slot:title>
        <h4>請輸入邀請碼</h4>
        <div class="p-3 mb-3 bg-lightblue-bg rounded-xl">
          <span class="text-blue-900">輸入邀請碼已便開通點餐機配方功能</span>
        </div>
      </template>
      <template v-slot:content>
        <input type="text" name="" id="" placeholder="請輸入邀請碼" />
        <!-- <div class="mb-10">
          <div><img src="../../../src/assets/images/qr.png" alt="" class="block mx-auto" /></div>
          <div class="my-5">
            <h4 class="orderNumber">
              訂單編號<span class="ml-5 font-normal text-blue-900">TOREWQ20201206001</span>
            </h4>
            <p>請於12小時內至指定店鋪，出示QRCODE掃描領取飲品。<br />祝您用餐愉快</p>
          </div>
        </div> -->
      </template>
      <template v-slot:btn>
        <div class="flex justify-center mt-10 functionBtn">
          <div class="mr-3 btn btn-remove" @click="kiosk = true">取消</div>
          <div class="btn btn-dark-blue">確認</div>
        </div>
      </template>
    </popup>
  </div>
</template>

<script>
  import pageNav from '@/components/pageNav.vue'
  import popup from '@/components/popup.vue'

  export default {
    name: 'portal',
    components: {
      pageNav,
      popup
    },
    data() {
      return {
        kiosk: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .userImg {
    width: 120px;
    height: 120px;
  }
  .masterInfo {
    li {
      margin-right: 1.5rem;
      padding-right: 1.5rem;
      span {
        color: var(--color-subyellow);
        margin-right: 0.5rem;
      }
    }
  }
  .drinkImg {
    width: 80px;
    height: 80px;
  }
  .drinkInfo {
    flex-basis: 55%;
  }

  .drinkBefore {
    width: 80px;
  }
  .popupHidden {
    opacity: 0;
    visibility: hidden;
  }
  @media (max-width: 768px) {
    .masterInfo {
      li {
        margin-left: 1;
        margin-right: 1rem;
        padding-right: 0;
      }
    }
  }
</style>
