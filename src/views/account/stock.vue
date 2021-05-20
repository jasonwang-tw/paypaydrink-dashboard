<template>
  <div id="stock" class="text-main-500">
    <h3 class="">寄杯</h3>
    <hr />
    <div class="grid grid-cols-12 px-5">
      <div class="col-span-8">飲品</div>
      <div class="justify-center hidden col-span-2 md:flex">剩餘數量</div>
    </div>
    <ul class="pl-0 mt-5 overflow-hidden list-none rounded-3xl">
      <li
        class="grid grid-cols-12 p-5 mb-5 border rounded-3xl border-lightblue-high"
        v-for="(i, index) in 1"
      >
        <div class="col-span-12 md:col-span-8">
          <div class="flex">
            <div class="flex-shrink-0 mr-5 overflow-hidden drinkImg rounded-3xl">
              <img src="../../../src/assets/images/product.jpg" alt="" />
            </div>
            <div>
              <h5 class="mb-2">東方不敗</h5>
              <div class="text-sm md:flex">
                <span class="flex-shrink-0 block drinkBefore text-lightblue-500">內含配料</span>
                <span>粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆</span>
              </div>
              <div class="text-sm md:flex">
                <span class="block mt-3 md:mt-0 drinkBefore text-lightblue-500">規格</span>
                <span>冷飲、中杯、三分糖、微冰</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center col-span-6 md:justify-center md:col-span-2">
          <div><span class="mr-5 text-lightblue-500 md:hidden">剩餘數量</span>10</div>
        </div>
        <div class="flex items-center justify-end col-span-6 md:col-span-2">
          <div class="btnGroup">
            <div class="btn-dark-blue" @click="popupExchange = false">兌換</div>
          </div>
        </div>
      </li>
    </ul>
    <pageNav />
    <popup :class="{ popupHidden: popupExchange }">
      <template v-slot:title>
        <h4>兌換飲品</h4>
      </template>
      <template v-slot:content>
        <div class="mb-3 text-left">
          <label for="" class="block mb-3">選擇兌換數量</label>
          <select name="" id="">
            <option value="" v-for="(n, index) in 99">{{ n }}</option>
          </select>
        </div>
        <!-- 店鋪元件 -->
        <selectShop />
      </template>
      <template v-slot:btn>
        <div class="flex justify-center functionBtn">
          <div class="mr-3 btn btn-remove" @click="popupExchange = true">取消</div>
          <div class="btn btn-dark-blue" @click=";(popupExchange = true), (clickDrink = false)">
            下一步
          </div>
        </div>
      </template>
    </popup>
    <popup :class="{ popupHidden: clickDrink }">
      <template v-slot:title>
        <h4>確認飲品</h4>
      </template>
      <template v-slot:content>
        <div class="mb-10">
          <div>飲品名稱:</div>
          <div>兌換數量:</div>
          <div>兌換店家:</div>
        </div>
      </template>
      <template v-slot:btn>
        <div class="flex justify-center functionBtn">
          <div class="mr-3 btn btn-remove" @click="clickDrink = true">取消</div>
          <div class="btn btn-dark-blue" @click=";(clickDrink = true), (qrcode = false)">
            確認
          </div>
        </div>
      </template>
    </popup>
    <popup :class="{ popupHidden: qrcode }">
      <template v-slot:title>
        <h4>兌換成功</h4>
      </template>
      <template v-slot:content>
        <div class="mb-10">
          <div><img src="../../../src/assets/images/qr.png" alt="" class="block mx-auto" /></div>
          <div class="my-5">
            <h4 class="orderNumber">
              訂單編號<span class="ml-5 font-normal text-blue-900">TOREWQ20201206001</span>
            </h4>
            <p>請於12小時內至指定店鋪，出示QRCODE掃描領取飲品。<br />祝您用餐愉快</p>
          </div>
        </div>
      </template>
      <template v-slot:btn>
        <div class="flex justify-center functionBtn">
          <div class="btn btn-dark-blue" @click="qrcode = true">確認</div>
        </div>
      </template>
    </popup>
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'
  import pageNav from '@/components/pageNav.vue'
  import popup from '@/components/popup.vue'
  import selectShop from '@/components/selectShop.vue'

  export default {
    name: 'stock',
    components: {
      topmenu,
      footerBar,
      pageNav,
      popup,
      selectShop
    },
    data() {
      return {
        mainDrink: [
          {
            link: '/',
            name: '紅茶',
            bg: require('../../assets/images/drinkBg/1.jpg')
          }
        ],
        popupExchange: true,
        clickDrink: true,
        qrcode: true
      }
    },
    methods: {},
    watch: {},
    computed: {},
    mounted() {}
  }
</script>

<style lang="scss" scoped>
  .drinkImg {
    width: 80px;
    height: 80px;
  }
  .drinkBefore {
    width: 80px;
  }
  .shopInfo li {
    display: flex;
    align-items: center;
    margin-right: 20px;
    i {
      color: #f39519;
      margin-right: 10px;
    }
  }
  .popupHidden {
    opacity: 0;
    visibility: hidden;
  }
</style>
