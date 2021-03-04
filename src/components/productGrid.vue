<template>
  <div id="productgrid" class="text-main-500">
    <h2 class="mb-10">搜尋 "<span>紅茶</span>"</h2>
    <div class="grid grid-cols-5 gap-10">
      <div v-for="(item, index) in drinkList">
        <router-link
          to="/products/page"
          class="no-underline border border-sup2-500 block rounded-lg overflow-hidden drinkHover"
        >
          <div class="drinkImg -mt-1">
            <img :src="item.imgSrc" alt="" />
          </div>
          <div class="drinkInfo text-left p-5">
            <div class="drinkName text-xl font-normal text-main-500">{{ item.name }}</div>
            <div class="drinkPrice text-xl text-sub-500 my-2">{{ item.price }}</div>
            <div class="flex justify-between">
              <div class="rating text-sub-500"><i class="pay-start mr-2"></i>{{ item.rating }}</div>
              <div class="sold">{{ item.sold }}</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'productgrid',
    components: {},
    data() {
      return {
        drinkList: [
          {
            drinkLink: '/',
            imgSrc: require('../assets/tea1.png'),
            name: '古道茶鄉',
            price: '60',
            rating: '4.7',
            sold: '145,78'
          },
          {
            drinkLink: '/',
            imgSrc: require('../assets/tea2.png'),
            name: '初戀的滋味',
            price: '60',
            rating: '4.7',
            sold: '145,78'
          },
          {
            drinkLink: '/',
            imgSrc: require('../assets/tea3.png'),
            name: '致青春',
            price: '60',
            rating: '4.7',
            sold: '145,78'
          },
          {
            drinkLink: '/',
            imgSrc: require('../assets/active1.jpg'),
            name: '東方不敗',
            price: '60',
            rating: '4.7',
            sold: '145,78'
          },
          {
            drinkLink: '/',
            imgSrc: require('../assets/active1.jpg'),
            name: '東方不敗',
            price: '60',
            rating: '4.7',
            sold: '145,78'
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .drinkImg {
    width: 100%;
    height: 255px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .drinkHover:hover {
    transform: translateY(-1rem);
  }
  .sold:before {
    margin-right: 10px;
    color: var(--color-sub);
    content: '已售出';
  }
</style>
