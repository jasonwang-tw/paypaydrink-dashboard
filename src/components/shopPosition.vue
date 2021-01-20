<template>
  <div id="shopPosition" class="mt-5">
    <form action="" method="post">
      <select name="" id="" class="w-80 mr-0 md:mr-5 mb-5 md:mb-0" @change="cityToArea">
        <option :value="itemt.CityName" v-for="(itemt, index) in taiwan" :key="index" :data="index">
          {{ itemt.CityName }}
        </option>
      </select>
      <select name="" id="" class="w-80">
        <option v-for="(items, index) of taiwan[0].AreaList" :key="index">
          {{ items.AreaName }}
        </option>
      </select>
    </form>
    <ul class="shopResult mx-auto my-10 max-w-4xl p-10">
      <li
        v-for="(shop, index) in shopList"
        :key="index"
        class="block sm:flex items-center justify-between border-b border-sup2-500 mb-5"
      >
        <div class="shopInfo text-left text-main-500">
          <div class="shopName text-2xl font-bold">
            {{ shop.name }}
          </div>
          <ul class="block lg:flex mt-2 pb-5 pl-0">
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
        <div class="shopLink">
          <a
            :href="shop.mapLink"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-border-light-blue inline-block mb-5 sm:mb-0"
            >查看位置</a
          >
        </div>
      </li>
    </ul>
    <!-- <select name="" id="" class="border px-4 py-2 border-sup3-500 rounded-md text-main-500">
      <option v-for="(items, index) of info.data.retVal" :key="index">{{items.sna}}</option>
    </select> -->
  </div>
</template>

<script>
  import taiwan from '../../static/resource/CityCountyData'

  export default {
    name: 'shopPosition',
    data() {
      return {
        taiwan,
        // info: null,
        shopList: [
          {
            name: '配配飲 一號店',
            postition: '台北市大安區仁愛路四段345巷6弄78號',
            tel: '02-2456-7891',
            openTime: '24H 全年無休',
            mapLink: 'http://google.com.tw'
          },
          {
            name: '配配飲 一號店',
            postition: '台北市大安區仁愛路四段345巷6弄78號',
            tel: '02-2456-7891',
            openTime: '24H 全年無休',
            mapLink: 'http://google.com.tw'
          },
          {
            name: '配配飲 一號店',
            postition: '台北市大安區仁愛路四段345巷6弄78號',
            tel: '02-2456-7891',
            openTime: '24H 全年無休',
            mapLink: 'http://google.com.tw'
          }
        ]
      }
    },
    methods: {
      //方法
      cityToArea() {
        var city = event.target.data
        console.log(city)
      }
    },
    mounted: {
      //架好的
      // axios
      //   .get('https://api.kcg.gov.tw/api/service/Get/b4dd9c40-9027-4125-8666-06bef1756092')
      //   .then(response => (this.info = response.data))
      //   .catch(function(error) { // 請求失敗處理
      //         console.log(error);
      // });
    }
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
