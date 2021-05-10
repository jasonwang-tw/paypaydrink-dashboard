<template>
  <div id="productgrid" class="text-main-500">
    <div class="grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      <div v-for="(item, index) in drinkList">
        <router-link
          to="/products/page"
          class="flex p-3 overflow-hidden no-underline border md:block border-lightblue-high rounded-3xl drinkHover md:p-0"
        >
          <div class="flex-shrink-0 mr-3 -mt-1 drinkImg md:mr-0">
            <img :src="item.imgSrc" alt="" />
          </div>
          <div class="w-full text-left md:w-auto md:p-5 drinkInfo">
            <div class="font-normal md:text-xl drinkName text-main-500">{{ item.name }}</div>
            <div class="my-2 md:text-xl drinkPrice text-subyellow-500">$ {{ item.price }}</div>
            <div class="flex justify-between text-sm">
              <div class="rating text-subyellow-500">
                <i class="mr-2 pay-start"></i>{{ item.rating }}
              </div>
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
            imgSrc: require('../assets/images/tea1.png'),
            name: '古道茶鄉',
            price: '60',
            rating: '4.7',
            sold: '145,78'
          },
          {
            drinkLink: '/',
            imgSrc: require('../assets/images/tea2.png'),
            name: '初戀的滋味',
            price: '60',
            rating: '4.7',
            sold: '145,78'
          },
          {
            drinkLink: '/',
            imgSrc: require('../assets/images/tea3.png'),
            name: '致青春',
            price: '60',
            rating: '4.7',
            sold: '145,78'
          },
          {
            drinkLink: '/',
            imgSrc: require('../assets/images/active1.jpg'),
            name: '東方不敗',
            price: '60',
            rating: '4.7',
            sold: '145,78'
          },
          {
            drinkLink: '/',
            imgSrc: require('../assets/images/active1.jpg'),
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
    color: var(--color-subyellow);
    content: '已售出';
  }
  @media (max-width: 768px) {
    .drinkImg {
      width: 100px;
      height: 100px;
    }
  }
</style>
