<template>
  <div id="shopPosition" class="text-main-500">
    <topmenu />
    <div class="grid grid-cols-1 mx-auto mb-20 customContainer md:grid-cols-12 md:gap-10 md:my-20">
      <div class="col-span-1 md:col-span-4">
        <div class="md:sticky top-20">
          <div class="mb-5">
            <label for="" class="block mb-3">選擇城市</label>
            <select name="city" id="" v-model="selcetCity">
              <option :value="i.CityName" v-for="(i, index) in taiwan" :key="i.CityName">{{
                i.CityName
              }}</option>
            </select>
          </div>
          <div class="">
            <label for="" class="block mb-3">選擇地區</label>
            <select name="area" id="" v-model="selcetArea">
              <option :value="i.AreaName" v-for="(i, index) in fileterArea" :key="i.AreaName">{{
                i.AreaName
              }}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-span-1 p-5 md:p-0 mainInfo md:col-span-8">
        <h3 class="text-main-500">附近的店鋪</h3>
        <hr />
        <div v-if="selectShop.length > 0">
          <ul class="pl-0 mb-10 shopResult">
            <li
              v-for="(shop, index) in selectShop"
              class="flex items-center justify-between p-5 mb-5 border border-lightblue-high rounded-3xl"
            >
              <div
                v-if="shop.name"
                class="w-full text-left shopInfo text-main-500 flex justify-between items-center"
              >
                <div>
                  <h5 class="mb-0 mr-3 shopName">
                    {{ shop.name }}
                  </h5>

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
                </div>
                <div>
                  <a
                    :href="shop.mapLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm btn-border-light-blue-sm"
                    >查看位置</a
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div v-else="selectShop.length == 0">
          <h5 class="mb-10 text-lightblue-500">此地區目前沒有店鋪</h5>
        </div>
      </div>
    </div>

    <footerBar />
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'
  import taiwan from '../../static/resource/CityCountyData'

  export default {
    name: 'shopPosition',
    components: {
      topmenu,
      footerBar
    },
    data() {
      return {
        taiwan,
        selcetCity: '臺北市',
        selcetArea: '中正區',
        fileterArea: '',
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
      area() {
        this.taiwan.forEach(fd => {
          if (fd.CityName === this.selcetCity) {
            this.fileterArea = fd.AreaList
            this.selcetArea = fd.AreaList[0].AreaName
          }
        })
      }
    },
    watch: {
      selcetCity: {
        handler: 'area',
        immediate: true
      }
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
    mounted() {}
  }
</script>

<style lang="scss" scoped>
  .shopInfo li {
    display: flex;
    align-items: center;
    margin-right: 20px;
    i {
      color: #f39519;
      margin-right: 10px;
    }
  }
</style>
