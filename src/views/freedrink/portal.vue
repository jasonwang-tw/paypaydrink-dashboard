<template>
  <div id="portal" class="text-main-500">
    <div class="items-center justify-between md:flex">
      <h2 class="text-2xl md:text-3xl">飲料鋪</h2>
      <div class="flex overflow-x-scroll md:overflow-auto">
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
      <div class="md:mr-10 overflow-hidden rounded-full userImg mx-auto">
        <img src="../../assets/images/how.jpg" alt="" />
      </div>
      <div class="items-center justify-between flex-grow md:flex">
        <div>
          <h5 class="mb-0 text-center md:text-left mt-3 md:mt-0">HowHow</h5>
          <ul class="flex py-5 md:py-3 pl-0 list-none masterInfo justify-center md:justify-start">
            <!-- <li>
                <span><i class="pay-start"></i></span>4.5
              </li> -->
            <li><span>關注</span>3,547</li>
            <li><span>配方</span>47</li>
            <li><span>售出飲品</span>4,998杯</li>
          </ul>
        </div>
        <div class="flex justify-center md:justify-start">
          <router-link to="/drinkShop" target="_blank" class="mr-3 btn-light-blue"
            >預覽頁面</router-link
          >
          <router-link to="/account/wallet" class="btn-dark-blue">我的錢包</router-link>
        </div>
      </div>
    </div>
    <hr />
    <div class="grid grid-cols-12 p-5">
      <h3 class="col-span-6 mb-0 drinkInfo">我的配方</h3>
      <div class="hidden col-span-1 text-center md:block">已售出</div>
      <div class="hidden col-span-1 text-center md:block">販售金額</div>
      <div class="hidden col-span-4 text-center md:block">操作</div>
    </div>
    <div
      class="grid items-center grid-cols-12 p-5 mb-5 border rounded-3xl border-lightblue-placeholder"
      v-for="(m, index) in mydrink"
      :key="index"
    >
      <div class="flex col-span-12 md:col-span-6 drinkInfo mb-3 md:mb-0">
        <div class="flex-shrink-0 mr-5 overflow-hidden drinkImg rounded-3xl">
          <img :src="m.photo" alt="" />
        </div>
        <div>
          <h5 class="mb-2">{{ m.name }}</h5>
          <div class="text-sm md:flex">
            <span class="flex-shrink-0 block drinkBefore text-lightblue-500">內含配料</span>
            <span v-for="(mc, mci) in m.contents" :key="mci">{{ mc }}、</span>
          </div>
          <div class="mt-3 text-sm md:flex">
            <span class="block drinkBefore text-lightblue-500">規格</span>
            <span v-for="(ms, msi) in m.specification" :key="msi">{{ ms }}、</span>
          </div>
        </div>
      </div>
      <div
        class="col-span-6 font-normal md:col-span-1 border-t border-b py-2 border-lightblue-high md:border-none md:text-center"
      >
        <span class="text-sm mr-2 text-lightblue-500 md:hidden">已售出</span>{{ m.sold }}
      </div>
      <div
        class="col-span-6 font-normal md:col-span-1 price text-subyellow-500 border-t border-b py-2 border-lightblue-high md:border-none md:text-center"
      >
        <span class="text-sm mr-2 text-lightblue-500 md:hidden">販售金額</span>${{ m.price }}
      </div>
      <div
        class="flex items-center justify-center col-span-12 text-center md:col-span-4 mt-3 md:mt-0"
      >
        <template v-if="m.drinkStatus === 'saved'">
          <div
            class="mr-3 text-blue-100 duration-200 cursor-pointer hover:text-blue-900"
            @click="review = false"
          >
            上架
          </div>
          <router-link to="/free_drink/edit" class="mr-3 duration-200 cursor-pointer"
            >編輯</router-link
          >
          <div
            class="text-red-500 duration-200 cursor-pointer hover:text-red-700"
            @click="del = false"
          >
            刪除
          </div>
        </template>
        <template v-else-if="m.drinkStatus === 'review'">
          <div class="text-subyellow-500">審核中</div>
        </template>
        <template v-else-if="m.drinkStatus === 'onsale'">
          <div class="mr-3 text-blue-100">
            已上架
          </div>
          <div
            class="text-red-500 duration-200 cursor-pointer hover:text-red-700"
            @click="edit = false"
          >
            重新編輯
          </div>
        </template>
        <template v-else-if="m.drinkStatus === 'fail'">
          <div>
            <div class="mr-3 text-red-500 duration-200 cursor-pointer hover:text-blue-900 w-full">
              上架失敗
            </div>
            <div class="text-sm text-blue-900 mt-3">
              請查閱<router-link to="/account/notice">失敗原因</router-link>，<br /><router-link
                to="/free_drink/edit"
                >重新編輯</router-link
              >即可再次<span class="underline cursor-pointer" @click="review = false">提交</span>。
            </div>
          </div>
        </template>
      </div>
    </div>
    <pageNav class="" />
    <!-- 自配方彈窗 -->
    <popup :class="{ popupHidden: kiosk }">
      <template v-slot:title>
        <h4>請輸入邀請碼</h4>
      </template>
      <template v-slot:content>
        <div class="p-3 mb-3 bg-lightblue-bg rounded-xl">
          <span class="text-blue-900">輸入邀請碼已便開通點餐機配方功能</span>
        </div>
        <input type="text" name="" id="" placeholder="請輸入邀請碼" />
      </template>
      <template v-slot:btn>
        <div class="flex justify-center mt-10 functionBtn">
          <div class="mr-3 btn btn-remove" @click="kiosk = true">取消</div>
          <div class="btn btn-dark-blue" @click=";(kiosk = true), (kiosk_QR = false)">確認</div>
        </div>
      </template>
    </popup>
    <!-- 邀請碼驗證通過 -->
    <popup :class="{ popupHidden: kiosk_QR }">
      <template v-slot:title>
        <h4>開通完成</h4>
      </template>
      <template v-slot:content>
        <div class="mb-5">
          <div><img src="../../../src/assets/images/qr.png" alt="" class="block mx-auto" /></div>
          <div class="my-5">
            <p>請至點餐機台前出示此QRCdoe，<br />供機台掃描開啟自配方功能。</p>
          </div>
        </div>
      </template>
      <template v-slot:btn>
        <div class="flex justify-center functionBtn">
          <div class="btn btn-dark-blue" @click="kiosk_QR = true">確認</div>
        </div>
      </template>
    </popup>
    <!-- 上架 -->
    <popup :class="{ popupHidden: review }">
      <template v-slot:title>
        <i class="pay-notice text-5xl mb-5 block"></i>
        <h4>上架確認</h4>
      </template>
      <template v-slot:content>
        <div class="my-5 text-main-100">
          <p>
            即將提交此配方供配配飲團隊審核，過程需2-3個工作天，審核期間此配方編輯功能將凍結，如仍確認上架請繼續執行下一步
          </p>
        </div>
      </template>
      <template v-slot:btn>
        <div class="flex justify-center functionBtn">
          <div class="mr-3 btn btn-remove" @click="review = true">取消</div>
          <div class="btn btn-dark-blue" @click=";(review = true), (review_2 = false)">繼續</div>
        </div>
      </template>
    </popup>
    <!-- 上架審核確認 -->
    <popup :class="{ popupHidden: review_2 }">
      <template v-slot:title>
        <i class="pay-good text-5xl mb-5 block"></i>
        <h4>配方已提交</h4>
      </template>
      <template v-slot:content>
        <div class="my-5 text-main-100">
          <p>
            敬請耐心等待審核結果。
          </p>
        </div>
      </template>
      <template v-slot:btn>
        <div class="flex justify-center functionBtn">
          <div class="btn btn-dark-blue" @click="review_2 = true">確認</div>
        </div>
      </template>
    </popup>
    <!-- 刪除 -->
    <popup :class="{ popupHidden: del }">
      <template v-slot:title>
        <h4>刪除配方</h4>
      </template>
      <template v-slot:content>
        <p class="mb-5">此操作無法撤消，確定要執行嗎?</p>
      </template>
      <template v-slot:btn>
        <div class="flex justify-center functionBtn">
          <div class="mr-3 btn btn-remove" @click="del = true">取消</div>
          <div class="btn btn-dark-blue">確認</div>
        </div>
      </template>
    </popup>
    <!-- 重新編輯 -->
    <popup :class="{ popupHidden: edit }">
      <template v-slot:title>
        <i class="pay-warn text-5xl mb-5 block text-red-500"></i>
        <h4>即將重新編輯配方</h4>
      </template>
      <template v-slot:content>
        <p class="mb-5 text-red-500">
          欲編輯已上架配方，需先將該配方下架，編輯完畢後需重新審核通過才可再次上架
        </p>
      </template>
      <template v-slot:btn>
        <div class="flex justify-center functionBtn">
          <div class="mr-3 btn btn-remove" @click="edit = true">取消</div>
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
        kiosk: true,
        kiosk_QR: true,
        review: true,
        review_2: true,
        del: true,
        edit: true,
        mydrink: [
          {
            photo: require('../../assets/images/product.jpg'),
            name: '東方不敗',
            contents: ['粉圓', '布丁', '紅豆粉圓'],
            specification: ['冷飲', '中杯', '三分糖', '微冰'],
            sold: 6,
            price: 60,
            drinkStatus: 'saved'
          },
          {
            photo: require('../../assets/images/product.jpg'),
            name: '東方不敗',
            contents: ['粉圓', '布丁', '紅豆粉圓'],
            specification: ['冷飲', '中杯', '三分糖', '微冰'],
            sold: 6,
            price: 60,
            drinkStatus: 'review'
          },
          {
            photo: require('../../assets/images/product.jpg'),
            name: '東方不敗',
            contents: ['粉圓', '布丁', '紅豆粉圓'],
            specification: ['冷飲', '中杯', '三分糖', '微冰'],
            sold: 6,
            price: 60,
            drinkStatus: 'onsale'
          },
          {
            photo: require('../../assets/images/product.jpg'),
            name: '東方不敗',
            contents: ['粉圓', '布丁', '紅豆粉圓'],
            specification: ['冷飲', '中杯', '三分糖', '微冰'],
            sold: 6,
            price: 60,
            drinkStatus: 'fail'
          }
        ]
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
      &:last-child {
        margin-right: 0;
      }
    }
    span {
      color: var(--color-subyellow);
      margin-right: 0.5rem;
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
