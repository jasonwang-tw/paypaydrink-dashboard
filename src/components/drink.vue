<template>
  <div id="slideshow">
    <splide :options="options">
      <splide-slide v-for="(item, index) in drinkTop" :key="index">
        <slot name="topNumber" :index="index"></slot>
        <div class="pt-5">
          <router-link
            to="/products/page"
            class="no-underline border border-sup2-500 block rounded-3xl overflow-hidden drinkHover"
          >
            <div class="drinkImg -mt-1">
              <img :src="item.imgSrc" alt="" />
            </div>
            <div class="drinkInfo text-left p-5">
              <div class="drinkName text-xl font-normal text-main-500">{{ item.name }}</div>
              <div class="drinkPrice text-xl text-sub-500 my-2">{{ item.price }}</div>
              <div class="flex justify-between">
                <div class="rating text-sub-500">
                  <i class="pay-start mr-2"></i>{{ item.rating }}
                </div>
                <div class="sold">{{ item.sold }}</div>
              </div>
            </div>
          </router-link>
        </div>
      </splide-slide>
    </splide>
  </div>
</template>

<script>
  // 註冊本地組件
  import { Splide, SplideSlide } from '@splidejs/vue-splide'

  export default {
    name: 'slide',
    components: {
      Splide,
      SplideSlide
    },
    // props: {
    //   indexClass: String
    // },
    data() {
      return {
        options: {
          rewind: true,
          width: 1440,
          gap: '2.5rem',
          perPage: 5,
          perMove: 1,
          // type: 'loop',
          // autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
          // focus: 'center',
          // fixedWidth: 325,
          // arrows      : 'slider',
          breakpoints: {
            '1440': {
              width: 900,
              perPage: 3,
              gap: '2rem'
            },
            '900': {
              width: 600,
              perPage: 2,
              gap: '2rem'
            },
            '600': {
              width: 400,
              perPage: 1,
              gap: '2rem'
            },
            '480': {
              width: 360,
              perPage: 1,
              gap: '1rem'
            }
          }
        },
        drinkTop: [
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
    height: 255px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .drinkHover:hover {
    // margin-top: -1rem;
    transform: translateY(-1rem);
  }
  .drinkPrice:before {
    content: '$';
  }
  .sold:before {
    margin-right: 10px;
    color: var(--color-sub);
    content: '已售出';
  }
</style>
