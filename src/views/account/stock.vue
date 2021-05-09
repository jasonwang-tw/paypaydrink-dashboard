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
        <div class="col-span-12 mb-5 md:col-span-8">
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
    <popup :class="{ popup: popupExchange }">
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
        <div class="flex mb-3">
          <div class="w-full mr-3 text-left">
            <label for="" class="block mb-3">選擇城市</label>
            <select name="city" id="" v-model="selcetCity">
              <option :value="i.CityName" v-for="(i, index) in taiwan">{{ i.CityName }}</option>
            </select>
          </div>
          <div class="w-full text-left">
            <label for="" class="block mb-3">選擇地區</label>
            <select name="area" id="" v-model="selcetArea">
              <option :value="i.AreaName" v-for="(i, index) in fileterArea">{{
                i.AreaName
              }}</option>
            </select>
          </div>
        </div>
        <h4>選擇店鋪</h4>
        <div v-if="selectShop.length > 0">
          <ul class="pl-0 mb-10 overflow-y-auto shopResult max-h-80">
            <li
              v-for="(shop, index) in selectShop"
              class="flex items-center justify-between p-5 mb-5 bg-lightblue-bg rounded-3xl"
              @click=""
            >
              <input
                name="cliclshop"
                type="radio"
                :id="shop.name"
                :value="shop"
                v-model="clickShop"
                class="w-5 h-5 mr-5"
              />
              <label class="w-full text-left shopInfo text-main-500" :for="shop.name">
                <div class="flex">
                  <h5 class="mb-0 mr-3 shopName">
                    {{ shop.name }}
                  </h5>
                  <a
                    :href="shop.mapLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm btn-border-light-blue-sm"
                    >查看位置</a
                  >
                </div>
                <ul class="block pl-0 mt-2">
                  <li>
                    <i class="pay-pin"></i>
                    {{ shop.postition }}
                  </li>
                  <li>
                    <i class="pay-tel"></i>
                    {{ shop.tel }}
                  </li>
                  <li>
                    <i class="pay-clock"></i>
                    {{ shop.openTime }}
                  </li>
                </ul>
              </label>
            </li>
          </ul>
        </div>
        <div v-else="selectShop.length == 0">
          <h5 class="mb-10 text-lightblue-500">此地區目前沒有店鋪</h5>
        </div>
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
    <popup :class="{ popup: clickDrink }">
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
    <popup :class="{ popup: qrcode }">
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
  import profileMenu from '@/components/profileMenu.vue'
  import pageNav from '@/components/pageNav.vue'
  import shopPosition from '@/components/shopPosition.vue'
  import popup from '@/components/popup.vue'
  import taiwan from '../../../static/resource/CityCountyData'

  export default {
    name: 'stock',
    components: {
      topmenu,
      footerBar,
      profileMenu,
      pageNav,
      popup,
      shopPosition
    },
    data() {
      return {
        taiwan,
        selcetCity: '臺北市',
        selcetArea: '中正區',
        fileterArea: '',
        clickShop: '',
        mainDrink: [
          {
            link: '/',
            name: '紅茶',
            bg: require('../../assets/images/drinkBg/1.jpg')
          }
        ],
        popupExchange: true,
        clickDrink: true,
        qrcode: true,
        shopList: [
          {
            city: '臺北市',
            area: [
              {
                name: '大安區',
                shop: [
                  {
                    name: '配配飲 大安店',
                    postition: '台北市大安區仁愛路四段345巷6弄78號',
                    tel: '02-2456-7891',
                    openTime: '24H 全年無休',
                    mapLink: 'http://google.com.tw'
                  }
                ]
              },
              {
                name: '大安區',
                shop: [
                  {
                    name: '配配飲 南港店',
                    postition: '台北市南港區',
                    tel: '02-2456-7891',
                    openTime: '24H 全年無休',
                    mapLink: 'http://google.com.tw'
                  }
                ]
              },
              {
                name: '中正區',
                shop: [
                  {
                    name: '配配飲 中正店',
                    postition: '台北市中正區',
                    tel: '02-2456-7891',
                    openTime: '24H 全年無休',
                    mapLink: 'http://google.com.tw'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    methods: {
      area: function() {
        this.taiwan.forEach(fd => {
          if (fd.CityName == this.selcetCity) {
            this.fileterArea = fd.AreaList
          }
        })
      }
    },
    watch: {
      selcetCity: 'area'
    },
    computed: {
      selectShop() {
        let shop = []

        this.shopList.forEach(sf => {
          if (sf.city == this.selcetCity) {
            sf.area.forEach(sfArea => {
              if (sfArea.name == this.selcetArea) {
                sfArea.shop.forEach(sfShop => {
                  shop.push(sfShop)
                })
              }
            })
          }
        })

        return shop
      }
    },
    mounted() {
      this.area()
    }
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
  .popup {
    opacity: 0;
    visibility: hidden;
  }
</style>
