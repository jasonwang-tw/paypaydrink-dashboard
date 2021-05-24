<template>
  <div id="buyList" class="">
    <div class="items-center justify-between md:flex flex-wrap mb-10" v-for="(s, index) in cart">
      <div class="flex items-center">
        <div class="mr-5 overflow-hidden rounded-full userImg">
          <img :src="s.shopPhoto" alt="" />
        </div>
        <div>
          <div class="flex items-center mb-2">
            <h5 class="mb-0 mr-3">{{ s.shopManager }}</h5>
            <template v-if="s.certification === true">
              <div class="flex items-center">
                <i class="pay-click_round text-blue-100"></i>
              </div>
            </template>
          </div>
          <router-link :to="s.shopLink" class="inline-block text-sm btn-border-light-blue-sm"
            >查看全部配方</router-link
          >
        </div>
      </div>
      <div>{{ s.sale }}</div>
      <div
        class="grid items-center grid-cols-12 md:ml-24 p-5 border rounded-3xl border-lightblue-placeholder w-full mt-5"
        v-for="(b, index) in s.drinkList"
        :key="index"
      >
        <div class="flex col-span-12 mb-5 md:col-span-8 md:mb-0">
          <div class="flex-shrink-0 mr-3 overflow-hidden drinkImg rounded-3xl">
            <img :src="b.photo" alt="" />
          </div>
          <div>
            <h5 class="mb-2">{{ b.name }}</h5>
            <div class="text-sm md:flex">
              <span class="flex-shrink-0 block drinkBefore text-lightblue-500">內含配料 </span
              >{{ b.content }}
            </div>
            <div class="mt-3 text-sm md:mt-0">
              <span class="drinkBefore text-lightblue-500">規格 </span>{{ b.specification }}
            </div>
          </div>
        </div>
        <div class="col-span-5 md:px-5 md:col-span-2 qty">
          <select name="" id="" v-model="b.quantity">
            <option :value="n" v-for="(n, index) in 99">{{ n }}</option>
          </select>
        </div>
        <div class="col-span-5 font-normal text-center md:col-span-1 price text-subyellow-500">
          ${{ b.quantity * b.price }}
        </div>
        <div
          class="col-span-2 text-center text-red-500 duration-200 cursor-pointer md:col-span-1 hover:text-red-700"
          @click="del = false"
        >
          刪除
        </div>
      </div>
    </div>

    <!-- 刪除 -->
    <popup :class="{ popupHidden: del }">
      <template v-slot:title>
        <h4>刪除飲品</h4>
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
  </div>
</template>

<script>
  import popup from '@/components/popup.vue'

  export default {
    props: {
      selected: Number
    },
    components: {
      popup
    },
    data() {
      return {
        del: true,
        cart: [
          {
            shopPhoto: require('../assets/images/logo_photo.jpg'),
            shopManager: '配配飲官方',
            certification: true,
            shopLink: '/drinkShop',
            sale: '飲品優惠，低消100折$30',
            drinkList: [
              {
                photo: require('../assets/images/product.jpg'),
                name: '東方不敗',
                content: '粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓',
                specification: '冷飲、中杯、三分糖、微冰',
                quantity: 10,
                price: 60
              }
            ]
          },
          {
            shopPhoto: require('../assets/images/how.jpg'),
            shopManager: '九丈貓',
            certification: true,
            shopLink: '/drinkShop',
            sale: '飲品優惠，低消100折$30',
            drinkList: [
              {
                photo: require('../assets/images/product.jpg'),
                name: '東方不敗',
                content: '粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓',
                specification: '冷飲、中杯、三分糖、微冰',
                quantity: 3,
                price: 60
              },
              {
                photo: require('../assets/images/product.jpg'),
                name: '東方不敗',
                content: '粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓',
                specification: '冷飲、中杯、三分糖、微冰',
                quantity: 6,
                price: 60
              }
            ]
          },
          {
            shopPhoto: require('../assets/images/how.jpg'),
            shopManager: '滴妹好棒棒',
            certification: false,
            shopLink: '/drinkShop',
            sale: '飲品優惠，低消100折$30',
            drinkList: [
              {
                photo: require('../assets/images/product.jpg'),
                name: '東方不敗',
                content: '粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓',
                specification: '冷飲、中杯、三分糖、微冰',
                quantity: 10,
                price: 60
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .userImg {
    width: 80px;
    height: 80px;
  }
  .drinkImg {
    width: 80px;
    height: 80px;
  }
  .drinkBefore {
    width: 80px;
    display: inline-block;
  }
  .popupHidden {
    opacity: 0;
    visibility: hidden;
  }
  @media (max-width: 768px) {
    .drinkBefore {
      width: 100%;
    }
  }
</style>
